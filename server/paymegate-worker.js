// GetToolNest card support: a Cloudflare Worker that creates a PayMeGate checkout.
//
// The website (GitHub Pages) is static, so it cannot hold a secret key. The page
// sends only the amount to this Worker; the Worker adds the keys (stored as
// Cloudflare secrets, never in this file) and asks PayMeGate for a checkout link.
//
// Secrets / variables to set in Cloudflare (Workers > this worker > Settings > Variables and Secrets):
//   PAYMEGATE_API_KEY     (secret)  merchant API key, sent as the X-API-Key header
//   PAYMEGATE_SECRET_KEY  (secret)  used to check PayMeGate webhook signatures (optional, see below)
//   PAYMEGATE_API_BASE    (text)    e.g. https://api.paymegate.com  (copy the exact base URL from the docs)
//
// IMPORTANT: PayMeGate's API reference could not be read while this was written.
// Everything that depends on it is inside buildOrder() and readCheckoutUrl().
// Check those field names against https://www.paymegate.com/developers/api before going live.

const ALLOWED_ORIGINS = ['https://gettoolnest.xyz', 'https://www.gettoolnest.xyz'];
const SITE = 'https://gettoolnest.xyz';
const CURRENCY = 'USD';
const MIN = 1;      // dollars
const MAX = 1000;   // dollars

// ---- PayMeGate-specific part (confirm against the docs) ----------------------
function buildOrder(amount, ref) {
  return {
    amount: amount.toFixed(2),          // CONFIRM: dollars as a string, or cents as an integer?
    currency: CURRENCY,
    externalId: ref,                     // documented: your own id, returned in the order.paid webhook
    description: 'Gift to support GetToolNest (free tools)',
    paymentMethods: ['card'],            // CONFIRM: exact name of the card method (docs show ["crypto"] and ["*"])
    successUrl: SITE + '/thank-you.html',// CONFIRM: field name for the return / success URL
    cancelUrl: SITE + '/donate/'         // CONFIRM: field name for the cancel URL
  };
}
function readCheckoutUrl(data) {
  // CONFIRM: which response field holds the hosted checkout link.
  return data.checkoutUrl || data.checkout_url || data.url || (data.data && (data.data.checkoutUrl || data.data.url)) || '';
}
// -----------------------------------------------------------------------------

function cors(origin) {
  const ok = ALLOWED_ORIGINS.includes(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}
function json(body, status, origin) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...cors(origin) } });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origin) });
    if (url.pathname === '/webhook' && request.method === 'POST') return webhook(request, env);
    if (request.method !== 'POST' || url.pathname !== '/checkout') return json({ error: 'Not found' }, 404, origin);
    if (!ALLOWED_ORIGINS.includes(origin)) return json({ error: 'This address only works from gettoolnest.xyz.' }, 403, origin);
    if (!env.PAYMEGATE_API_KEY || !env.PAYMEGATE_API_BASE) return json({ error: 'Card payments are not set up yet.' }, 503, origin);

    let body;
    try { body = await request.json(); } catch (e) { return json({ error: 'Bad request.' }, 400, origin); }
    const amount = Math.round(Number(body && body.amount) * 100) / 100;
    if (!isFinite(amount) || amount < MIN || amount > MAX) {
      return json({ error: `Please choose an amount between $${MIN} and $${MAX}.` }, 400, origin);
    }

    const ref = 'gift-' + Date.now() + '-' + crypto.randomUUID().slice(0, 8);
    let res, data;
    try {
      res = await fetch(env.PAYMEGATE_API_BASE.replace(/\/$/, '') + '/v1/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-API-Key': env.PAYMEGATE_API_KEY },
        body: JSON.stringify(buildOrder(amount, ref))
      });
      data = await res.json().catch(() => ({}));
    } catch (e) {
      return json({ error: 'Could not reach the payment service. Please try again.' }, 502, origin);
    }
    const checkout = readCheckoutUrl(data);
    if (!res.ok || !/^https:\/\//.test(checkout)) {
      console.log('PayMeGate error', res.status, JSON.stringify(data).slice(0, 500)); // visible in Cloudflare logs, never sent to the visitor
      return json({ error: 'The payment service could not start the checkout. Please try again later.' }, 502, origin);
    }
    return json({ url: checkout }, 200, origin);
  }
};

// Optional: PayMeGate sends a signed "order.paid" event here (set the webhook URL to
// https://<your-worker>.workers.dev/webhook in the PayMeGate dashboard).
// Donations need no fulfilment, so this only checks the signature and logs the payment.
async function webhook(request, env) {
  const raw = await request.text();
  if (env.PAYMEGATE_SECRET_KEY) {
    // CONFIRM in the docs: the signature header name and exactly what is signed.
    const sig = request.headers.get('X-Signature') || request.headers.get('X-PayMeGate-Signature') || '';
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(env.PAYMEGATE_SECRET_KEY), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(raw));
    const hex = [...new Uint8Array(mac)].map(b => b.toString(16).padStart(2, '0')).join('');
    if (!sig || sig.replace(/^sha256=/, '').toLowerCase() !== hex) return new Response('Bad signature', { status: 401 });
  }
  console.log('PayMeGate webhook', raw.slice(0, 500));
  return new Response('ok');
}

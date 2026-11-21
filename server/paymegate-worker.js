// GetToolNest card support: a Cloudflare Worker that creates a PayMeGate checkout.
//
// The website (GitHub Pages) is static, so it cannot hold a secret key. The page
// sends only the amount and the giver's email to this Worker; the Worker adds the
// API key (stored as a Cloudflare secret, never in this file) and asks PayMeGate
// for a hosted checkout link.
//
// Variables and secrets (Cloudflare → Workers → gettoolnest-pay → Settings → Variables and Secrets):
//   PAYMEGATE_API_KEY     (Secret)  merchant API key (pmg_test_… for sandbox, live key later). Sent as X-API-Key.
//   PAYMEGATE_SECRET_KEY  (Secret)  optional: the webhook signingSecret (only if you set up a webhook).
//   PAYMEGATE_METHODS     (Text)    optional: comma-separated payment method keys, e.g. "stripe".
//                                   Leave empty for the card methods in CARD_METHODS. See GET /methods below.
//
// API facts used (PayMeGate Merchant API v1):
//   POST https://api.paymegate.com/v1/orders   header X-API-Key
//   body: amount ("10.00", dollars as a string), currency, paymentMethodsKeys [..], customer {email, fullName},
//         externalId (A-Z a-z 0-9 . _ : -, ≤128), description (≤512), backUrl (https)
//   response: data.checkoutUrl (or data.order.checkoutUrl)
//   webhook: X-Paymegate-Signature = unpadded base64url HMAC-SHA256(signingSecret, timestamp + "." + rawBody),
//            X-Paymegate-Timestamp, X-Paymegate-Event-Id; event "order.paid"

const API = 'https://api.paymegate.com';
const ALLOWED_ORIGINS = ['https://gettoolnest.xyz', 'https://www.gettoolnest.xyz'];
const SITE = 'https://gettoolnest.xyz';
const CURRENCY = 'USD';
const MIN = 2;      // dollars (Stripe card minimum on PayMeGate is $2)
const MAX = 1000;   // dollars
const CARD_METHODS = ['stripe', 'creditcard', 'googlepay', 'applepay']; // Stripe, Stix, Google Pay, Apple Pay

function cors(origin) {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}
function json(body, status, origin) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...cors(origin) } });
}
function methods(env) {
  const list = String(env.PAYMEGATE_METHODS || '').split(',').map(s => s.trim()).filter(Boolean);
  // Default: card-type methods only (keys from GET /v1/payment-methods on this account).
  return list.length ? list : CARD_METHODS;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origin) });
    if (url.pathname === '/webhook' && request.method === 'POST') return webhook(request, env);
    if (url.pathname === '/methods' && request.method === 'GET') return listMethods(env);
    if (url.pathname === '/status' && request.method === 'GET') return orderStatus(url, env, origin);
    if (request.method !== 'POST' || url.pathname !== '/checkout') return json({ error: 'Not found' }, 404, origin);
    if (!ALLOWED_ORIGINS.includes(origin)) return json({ error: 'This address only works from gettoolnest.xyz.' }, 403, origin);
    if (!env.PAYMEGATE_API_KEY) return json({ error: 'Card payments are not set up yet.' }, 503, origin);

    let body;
    try { body = await request.json(); } catch (e) { return json({ error: 'Bad request.' }, 400, origin); }
    const amount = Math.round(Number(body && body.amount) * 100) / 100;
    if (!isFinite(amount) || amount < MIN || amount > MAX) {
      return json({ error: `Please choose an amount between $${MIN} and $${MAX}.` }, 400, origin);
    }
    const email = String((body && body.email) || '').trim().slice(0, 254);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Please enter a valid email address.' }, 400, origin);
    const name = String((body && body.name) || '').replace(/[\u0000-\u001f]/g, '').trim().slice(0, 100);

    const ref = 'gift-' + Date.now() + '-' + crypto.randomUUID().slice(0, 8);
    const order = {
      amount: amount.toFixed(2),
      currency: CURRENCY,
      paymentMethodsKeys: methods(env),
      customer: name ? { email, fullName: name } : { email },
      externalId: ref,
      description: 'Gift to support GetToolNest (free tools for everyone)',
      backUrl: SITE + '/thank-you.html?ref=' + encodeURIComponent(ref)
    };

    let res, data;
    try {
      res = await fetch(API + '/v1/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-API-Key': env.PAYMEGATE_API_KEY },
        body: JSON.stringify(order)
      });
      data = await res.json().catch(() => ({}));
    } catch (e) {
      return json({ error: 'Could not reach the payment service. Please try again.' }, 502, origin);
    }
    const d = (data && data.data) || {};
    const checkout = d.checkoutUrl || (d.order && d.order.checkoutUrl) || '';
    const orderId = d.orderUUID || (d.order && d.order.orderUUID) || '';
    if (!res.ok || !/^https:\/\//.test(checkout)) {
      // Visible in Cloudflare → Workers → Logs, never sent to the visitor.
      console.log('PayMeGate error', res.status, JSON.stringify(data).slice(0, 800));
      const e = (data && data.error) || {};
      const why = String((data && data.message) || (typeof e === 'string' ? e : e.message) || '').slice(0, 200);
      return json({ error: 'The payment service could not start the checkout. Please try again later.', detail: why, code: res.status }, 502, origin);
    }
    return json({ url: checkout, order: orderId }, 200, origin);
  }
};

// GET /status?order=<orderUUID>: tells the thank-you page whether the gift was really paid.
// Returns only the status word (unpaid, confirming, paid, expired, failed), nothing else.
async function orderStatus(url, env, origin) {
  const id = url.searchParams.get('order') || '';
  if (!/^[A-Za-z0-9-]{8,64}$/.test(id)) return json({ error: 'Bad order' }, 400, origin);
  if (!env.PAYMEGATE_API_KEY) return json({ error: 'Not set up yet' }, 503, origin);
  let res, data;
  try {
    res = await fetch(API + '/v1/orders/' + encodeURIComponent(id), { headers: { 'Accept': 'application/json', 'X-API-Key': env.PAYMEGATE_API_KEY } });
    data = await res.json().catch(() => ({}));
  } catch (e) { return json({ error: 'Could not reach the payment service' }, 502, origin); }
  if (!res.ok) { console.log('PayMeGate status error', res.status, JSON.stringify(data).slice(0, 500)); return json({ error: 'Not found' }, res.status === 404 ? 404 : 502, origin); }
  const d = (data && data.data) || data || {};
  const o = d.order || d;
  const status = String(o.status || o.state || '').toLowerCase();
  return json({ status }, 200, origin);
}

// GET /methods: shows the payment method keys your account offers (names only, no secrets),
// so you can pick the card ones for PAYMEGATE_METHODS.
async function listMethods(env) {
  if (!env.PAYMEGATE_API_KEY) return new Response('Not set up yet', { status: 503 });
  const res = await fetch(API + '/v1/payment-methods', { headers: { 'Accept': 'application/json', 'X-API-Key': env.PAYMEGATE_API_KEY } });
  const text = await res.text();
  return new Response(text, { status: res.status, headers: { 'Content-Type': 'application/json' } });
}

// POST /webhook: optional. PayMeGate sends "order.paid" here once you register
// https://<worker>/webhook (needs a key with the webhooks:write permission).
// Donations need no delivery, so this only checks the signature and logs the payment.
async function webhook(request, env) {
  const raw = await request.text();
  if (!env.PAYMEGATE_SECRET_KEY) return new Response('Webhook secret not set', { status: 503 });
  const sig = request.headers.get('X-Paymegate-Signature') || '';
  const ts = request.headers.get('X-Paymegate-Timestamp') || '';
  const tsMs = Number(ts) > 1e12 ? Number(ts) : Number(ts) * 1000;
  if (!sig || !ts || !isFinite(tsMs) || Math.abs(Date.now() - tsMs) > 5 * 60 * 1000) return new Response('Stale or unsigned', { status: 401 });
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(env.PAYMEGATE_SECRET_KEY), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(ts + '.' + raw)));
  const expected = btoa(String.fromCharCode(...mac)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  if (!timingSafeEqual(sig.trim(), expected)) return new Response('Bad signature', { status: 401 });
  let evt = {};
  try { evt = JSON.parse(raw); } catch (e) {}
  console.log('PayMeGate webhook', request.headers.get('X-Paymegate-Event-Id') || '', evt.type || evt.event || '', raw.slice(0, 500));
  return new Response('ok');
}
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

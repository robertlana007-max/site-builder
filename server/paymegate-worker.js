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
//   RESEND_API_KEY        (Secret)  optional: resend.com API key, to email the owner on every gift.
//   OWNER_EMAIL           (Text)    optional: where gift emails go (default gettoolnest14@gmail.com).
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
const OWNER_EMAIL = 'gettoolnest14@gmail.com';
const CURRENCY = 'USD';
const MIN = 2;      // dollars: Stripe's minimum, for visitors in Stripe countries
const MIN_WORLD = 6; // dollars: everywhere else the cheapest card method (Stix) starts at $6
// Countries where PayMeGate's Stripe (US/EU) card option works: US, EU/EEA, UK, Switzerland.
const STRIPE_COUNTRIES = new Set('US AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE IS LI NO GB CH'.split(' '));
function minFor(request) {
  const c = (request.cf && request.cf.country) || '';
  return { country: c, min: STRIPE_COUNTRIES.has(c) ? MIN : MIN_WORLD };
}
const MAX = 1000;   // dollars
// Every card / wallet payment method on this account (cards, Google Pay, Apple Pay, PayPal...). PayMeGate itself shows each
// visitor only the ones that work in their country, so people can pay however they like.
const CARD_METHODS = ['creditcard', 'stripe', 'rampnow', 'googlepay', 'applepay', 'topper', 'banxa', 'alchemypay', 'binance', 'meld', 'particle', 'blockchaincom', 'paypal', 'revolut', 'cashapp', 'venmo', 'robinhood', 'coinbase', 'alipay', 'wechat', 'sardine', 'interac']; // no 'crypto': the site has its own Crypto tab
// Minimum USD amount per method on this account (from GET /v1/payment-methods). A method is only offered when the gift is big enough.
const METHOD_MIN = { stripe: 2, creditcard: 6, rampnow: 6, googlepay: 10, applepay: 10, topper: 10, banxa: 11, alchemypay: 15, binance: 20, blockchaincom: 20, meld: 30, particle: 30, sardine: 30, paypal: 5, revolut: 7, cashapp: 2, venmo: 2, robinhood: 5, coinbase: 2, alipay: 5, wechat: 5, interac: 75, crypto: 2 };

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
function methods(env, amount) {
  const list = String(env.PAYMEGATE_METHODS || '').split(',').map(s => s.trim()).filter(Boolean);
  // Default: every method on this account that accepts this amount.
  const pick = (list.length ? list : CARD_METHODS).filter(k => k === '*' || !(k in METHOD_MIN) || amount >= METHOD_MIN[k]);
  return pick.length ? pick : ['stripe'];
}

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') || '';
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origin) });
    if (url.pathname === '/webhook' && request.method === 'POST') return webhook(request, env);
    if (url.pathname === '/methods' && request.method === 'GET') return listMethods(env);
    if (url.pathname === '/info' && request.method === 'GET') {
      // Tells the Support page this visitor's minimum, and wakes PayMeGate up so Pay is fast.
      if (env.PAYMEGATE_API_KEY && ctx && ctx.waitUntil) ctx.waitUntil(fetch(API + '/v1/payment-methods', { headers: { 'X-API-Key': env.PAYMEGATE_API_KEY } }).catch(() => {}));
      return json(minFor(request), 200, origin);
    }
    if (url.pathname === '/status' && request.method === 'GET') return orderStatus(url, env, origin);
    if (url.pathname === '/notify-test' && request.method === 'GET') return notifyTest(url, env);
    if (request.method !== 'POST' || url.pathname !== '/checkout') return json({ error: 'Not found' }, 404, origin);
    if (!ALLOWED_ORIGINS.includes(origin)) return json({ error: 'This address only works from gettoolnest.xyz.' }, 403, origin);
    if (!env.PAYMEGATE_API_KEY) return json({ error: 'Card payments are not set up yet.' }, 503, origin);

    let body;
    try { body = await request.json(); } catch (e) { return json({ error: 'Bad request.' }, 400, origin); }
    const amount = Math.round(Number(body && body.amount) * 100) / 100;
    const low = minFor(request).min;
    if (!isFinite(amount) || amount < low || amount > MAX) {
      return json({ error: `Please choose an amount between $${low} and $${MAX}.` }, 400, origin);
    }
    const email = String((body && body.email) || '').trim().slice(0, 254);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Please enter a valid email address.' }, 400, origin);
    const name = String((body && body.name) || '').replace(/[\u0000-\u001f]/g, '').trim().slice(0, 100);

    const ref = 'gift-' + Date.now() + '-' + crypto.randomUUID().slice(0, 8);
    const order = {
      amount: amount.toFixed(2),
      currency: CURRENCY,
      paymentMethodsKeys: methods(env, amount),
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

// POST /webhook: PayMeGate sends a signed "order.paid" event here (set the webhook URL to
// https://<worker>/webhook in PayMeGate). The Worker checks the signature, reads the order,
// and emails the owner: who gave, how much, and when.
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
  const type = String(evt.type || evt.event || evt.eventType || '');
  console.log('PayMeGate webhook', request.headers.get('X-Paymegate-Event-Id') || '', type, raw.slice(0, 500));
  if (!/paid/i.test(type)) return new Response('ok');

  // Take the details from the event, then ask PayMeGate for the full order (more reliable).
  const d = evt.data || evt.payload || evt;
  let order = d.order || d;
  const id = order.orderUUID || order.uuid || order.id || d.orderUUID || '';
  if (id && env.PAYMEGATE_API_KEY) {
    try {
      const r = await fetch(API + '/v1/orders/' + encodeURIComponent(id), { headers: { 'Accept': 'application/json', 'X-API-Key': env.PAYMEGATE_API_KEY } });
      if (r.ok) { const j = await r.json(); const o = (j.data && (j.data.order || j.data)) || j; if (o && typeof o === 'object') order = Object.assign({}, order, o); }
    } catch (e) {}
  }
  await notifyOwner(env, giftText(order, id));
  return new Response('ok');
}

function giftText(o, id) {
  const c = o.customer || {};
  const amount = o.amount != null ? o.amount : (o.totalAmount != null ? o.totalAmount : '?');
  const cur = o.currency || 'USD';
  const who = [c.fullName || o.customerName, c.email || o.customerEmail].filter(Boolean).join(' · ') || 'unknown';
  const method = o.paymentMethodKey || o.paymentMethod || o.provider || '';
  const when = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Karachi', dateStyle: 'medium', timeStyle: 'short' });
  return [
    '💰 New gift received on GetToolNest!',
    '',
    'Amount: ' + amount + ' ' + cur,
    'From: ' + who,
    method ? 'Paid with: ' + method : '',
    'Time: ' + when + ' (Pakistan)',
    id ? 'Order: ' + id : '',
    '',
    'Remember to thank them! ❤'
  ].filter((l, i, a) => l !== '' || (a[i - 1] !== '' && i < a.length - 1)).join('\n');
}

// Emails the owner through Resend (free: resend.com). Needs RESEND_API_KEY (Secret).
// With Resend's shared sender (onboarding@resend.dev) mail can only go to the email the
// Resend account was made with, so make the Resend account with OWNER_EMAIL.
async function notifyOwner(env, text) {
  const to = env.OWNER_EMAIL || OWNER_EMAIL;
  if (!env.RESEND_API_KEY) { console.log('No email set up:', text); return false; }
  const subject = text.split('\n')[0].replace(/^💰\s*/, '💰 ');
  const html = '<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#111">' +
    text.split('\n').map(l => l ? l.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/^([A-Za-z ]+):/, '<b>$1:</b>') : '<br>').join('<br>') + '</div>';
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: env.MAIL_FROM || 'GetToolNest <onboarding@resend.dev>', to: [to], subject, text, html })
    });
    if (!r.ok) console.log('Email error', r.status, (await r.text()).slice(0, 300));
    return r.ok;
  } catch (e) { console.log('Email failed', String(e)); return false; }
}

// GET /notify-test?key=<last 6 characters of your RESEND_API_KEY>: sends a sample email so you can check it works.
async function notifyTest(url, env) {
  const k = String(env.RESEND_API_KEY || '');
  if (k.length < 12 || url.searchParams.get('key') !== k.slice(-6)) return new Response('Not found', { status: 404 });
  const ok = await notifyOwner(env, giftText({ amount: '10.00', currency: 'USD', customer: { fullName: 'Test Person', email: 'test@example.com' }, paymentMethodKey: 'stripe' }, 'TEST-ONLY'));
  return new Response(ok ? 'Sent! Check ' + (env.OWNER_EMAIL || OWNER_EMAIL) + ' (and the Spam folder the first time).' : 'Could not send. Check RESEND_API_KEY, and that your Resend account uses ' + (env.OWNER_EMAIL || OWNER_EMAIL) + '.', { status: ok ? 200 : 500 });
}
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

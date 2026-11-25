// GetToolNest charts relay: one Twelve Data key, shared safely by every visitor.
//
// Twelve Data lets one key hold very few live connections, so the page cannot use the
// key directly for everyone. This Worker holds ONE connection to Twelve Data and passes
// each price on to every visitor who asked for that symbol. It also fetches candle
// history and caches it, so many visitors cost only a few API credits.
//
// The key lives only in a Cloudflare secret named TWELVE_DATA_KEY, never in this file
// and never in the website.
//
//   GET /k?symbol=XAU/USD&interval=1h&outputsize=1000[&end_date=YYYY-MM-DD HH:MM:SS]
//       -> the Twelve Data time_series answer, cached at the edge
//   GET /ws  (WebSocket)
//       client sends  {"action":"subscribe","params":{"symbols":"XAU/USD,EUR/USD"}}
//       client gets   {"event":"price","symbol":"XAU/USD","price":3620.5}
//
// NOT TESTED: this file was written without a Cloudflare account to run it on.
// Deploy it, open the chart, and check XAU / USD before relying on it.

const ORIGINS = ['https://gettoolnest.xyz', 'https://www.gettoolnest.xyz'];
// How long (seconds) the latest candles of each interval may be served from the cache.
const TTL = { '1min': 20, '5min': 60, '15min': 120, '30min': 180, '1h': 300, '2h': 300, '4h': 600, '1day': 900, '1week': 3600, '1month': 3600 };
const SYMBOL = /^[A-Z0-9./]{1,15}$/;
const MAX_SYMBOLS = 8; // the free Twelve Data plan streams only a few symbols at once

function cors(req) {
  const o = req.headers.get('Origin') || '';
  return { 'Access-Control-Allow-Origin': ORIGINS.includes(o) ? o : ORIGINS[0], 'Vary': 'Origin' };
}
function reply(body, status, req, extra) {
  return new Response(body, { status, headers: { 'Content-Type': 'application/json', ...cors(req), ...(extra || {}) } });
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    if (req.method === 'OPTIONS') return new Response(null, { headers: { ...cors(req), 'Access-Control-Allow-Methods': 'GET' } });
    if (!env.TWELVE_DATA_KEY) return reply(JSON.stringify({ status: 'error', message: 'The relay has no TWELVE_DATA_KEY secret yet.' }), 500, req);

    if (url.pathname === '/ws') {
      if (req.headers.get('Upgrade') !== 'websocket') return new Response('Expected a WebSocket', { status: 426 });
      if (!ORIGINS.includes(req.headers.get('Origin') || '')) return new Response('Forbidden', { status: 403 });
      return env.HUB.get(env.HUB.idFromName('hub')).fetch(req);
    }

    if (url.pathname === '/k') {
      const symbol = (url.searchParams.get('symbol') || '').toUpperCase();
      const interval = url.searchParams.get('interval') || '';
      const size = Math.min(1000, Math.max(1, parseInt(url.searchParams.get('outputsize'), 10) || 500));
      const end = url.searchParams.get('end_date') || '';
      if (!SYMBOL.test(symbol) || !TTL[interval] || (end && !/^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d$/.test(end))) {
        return reply(JSON.stringify({ status: 'error', message: 'Bad request' }), 400, req);
      }
      const cacheKey = new Request('https://charts-relay.cache/k?' + new URLSearchParams({ symbol, interval, size: String(size), end }));
      const hit = await caches.default.match(cacheKey);
      if (hit) return reply(await hit.text(), 200, req);

      const q = { symbol, interval, outputsize: String(size), timezone: 'UTC', order: 'ASC', apikey: env.TWELVE_DATA_KEY };
      if (end) q.end_date = end;
      const r = await fetch('https://api.twelvedata.com/time_series?' + new URLSearchParams(q));
      const body = await r.text();
      let ok = false;
      try { ok = JSON.parse(body).status === 'ok'; } catch (e) {}
      // Old candles never change, so they can stay cached for a day. Errors are not cached.
      if (ok) ctx.waitUntil(caches.default.put(cacheKey, new Response(body, { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=' + (end ? 86400 : TTL[interval]) } })));
      return reply(body, 200, req);
    }

    return new Response('GetToolNest charts relay', { headers: cors(req) });
  }
};

// One object for the whole site: it owns the single connection to Twelve Data.
export class Hub {
  constructor(state, env) {
    this.env = env;
    this.clients = new Map(); // visitor socket -> Set of symbols
    this.up = null;           // the socket to Twelve Data
    this.subs = new Set();    // symbols Twelve Data is already sending
    this.last = {};           // last price per symbol, sent at once to a new visitor
    this.opening = false;
    this.hb = null;
  }

  async fetch(req) {
    const pair = new WebSocketPair();
    const client = pair[0], server = pair[1];
    server.accept();
    this.clients.set(server, new Set());

    server.addEventListener('message', (e) => {
      let m;
      try { m = JSON.parse(e.data); } catch (x) { return; }
      if (!m || m.action !== 'subscribe' || !m.params || typeof m.params.symbols !== 'string') return;
      const mine = this.clients.get(server);
      if (!mine) return;
      m.params.symbols.split(',').map((s) => s.trim().toUpperCase()).filter((s) => SYMBOL.test(s)).slice(0, MAX_SYMBOLS).forEach((s) => {
        mine.add(s);
        if (this.last[s] != null) { try { server.send(JSON.stringify({ event: 'price', symbol: s, price: this.last[s] })); } catch (x) {} }
      });
      this.sync();
    });
    const bye = () => { this.clients.delete(server); this.sync(); };
    server.addEventListener('close', bye);
    server.addEventListener('error', bye);

    return new Response(null, { status: 101, webSocket: client });
  }

  wanted() {
    const all = new Set();
    for (const set of this.clients.values()) for (const s of set) { if (all.size < MAX_SYMBOLS) all.add(s); }
    return all;
  }

  sync() {
    const want = this.wanted();
    if (!want.size) { this.closeUp(); return; }
    if (!this.up) { this.open(); return; }
    const add = [...want].filter((s) => !this.subs.has(s));
    if (add.length) {
      try { this.up.send(JSON.stringify({ action: 'subscribe', params: { symbols: add.join(',') } })); add.forEach((s) => this.subs.add(s)); } catch (x) {}
    }
  }

  async open() {
    if (this.opening) return;
    this.opening = true;
    try {
      const r = await fetch('https://ws.twelvedata.com/v1/quotes/price?apikey=' + encodeURIComponent(this.env.TWELVE_DATA_KEY), { headers: { Upgrade: 'websocket' } });
      const ws = r.webSocket;
      if (!ws) throw new Error('Twelve Data did not open a socket');
      ws.accept();
      this.up = ws;
      this.subs = new Set();
      ws.addEventListener('message', (e) => {
        let m;
        try { m = JSON.parse(e.data); } catch (x) { return; }
        if (!m || m.event !== 'price') return;
        this.last[m.symbol] = m.price;
        const out = JSON.stringify({ event: 'price', symbol: m.symbol, price: m.price });
        for (const [c, set] of this.clients) { if (set.has(m.symbol)) { try { c.send(out); } catch (x) {} } }
      });
      const down = () => {
        if (this.up !== ws) return;
        this.up = null; clearInterval(this.hb);
        if (this.clients.size) setTimeout(() => this.sync(), 3000);
      };
      ws.addEventListener('close', down);
      ws.addEventListener('error', down);
      clearInterval(this.hb);
      this.hb = setInterval(() => { try { ws.send('{"action":"heartbeat"}'); } catch (x) {} }, 10000);
      this.opening = false;
      this.sync();
    } catch (e) {
      this.up = null;
      if (this.clients.size) setTimeout(() => this.sync(), 5000);
    } finally {
      this.opening = false;
    }
  }

  closeUp() {
    if (this.up) { try { this.up.close(); } catch (x) {} }
    this.up = null;
    clearInterval(this.hb);
  }
}

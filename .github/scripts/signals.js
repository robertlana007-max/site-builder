// Reads the public web page of a Telegram channel and keeps the trading signals it posts in charts/signals.json.
// Run by .github/workflows/signals.yml. It only ever writes that one file.
const fs = require('fs');
const CH = 'sniperxauusd77', FILE = 'charts/signals.json', KEEP = 300;

function messages(html) {
  const re = /data-post="[^"\/]+\/(\d+)"[\s\S]*?(?=data-post="|$)/g, out = []; let m;
  while ((m = re.exec(html))) {
    const blk = m[0], tx = (blk.match(/tgme_widget_message_text[^>]*>([\s\S]*?)<\/div>/) || [])[1], dt = (blk.match(/datetime="([^"]+)"/) || [])[1];
    if (!tx || !dt) continue;
    const text = tx.replace(/<br\s*\/?>/g, '\n').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#(\d+);/g, (a, n) => String.fromCharCode(n)).replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
    out.push({ id: +m[1], t: Date.parse(dt), rep: /tgme_widget_message_reply/.test(blk), to: +((blk.match(/tgme_widget_message_reply[^>]*href="[^"]*\/(\d+)"/) || [])[1] || 0), text });
  }
  return out;
}
// "Gold Sell Now @ 3622 3625 / TP : 3611 / TP : 3602 / STOPLOSS: 3628.0"
function signal(m) {
  if (m.rep || !(m.t > 0)) return null;
  const tx = m.text.replace(/,/g, ''), h = /\b(gold|xau\s*\/?\s*usd)\b[^\n]{0,30}?\b(buy|sell)\b[^\d\n]{0,24}(\d{3,6}(?:\.\d+)?)(?:[^\d\n]{1,6}(\d{3,6}(?:\.\d+)?))?/i.exec(tx);
  if (!h) return null;
  const d = /buy/i.test(h[2]) ? 1 : -1, e1 = +h[3], e2 = h[4] ? +h[4] : +h[3], tp = [], sl = +((/(?:stop\s*loss|\bsl\b)\s*:?\s*(\d{3,6}(?:\.\d+)?)/i.exec(tx) || [])[1] || 0);
  let t; const tr = /\btp\s*\d?\s*:?\s*(\d{3,6}(?:\.\d+)?)/gi; while ((t = tr.exec(tx)) && tp.length < 4) tp.push(+t[1]);
  if (!(e1 > 0) || !(sl > 0) || !tp.length) return null;
  const e = d > 0 ? Math.max(e1, e2) : Math.min(e1, e2);
  if (d > 0 ? !(sl < e && tp[0] > e) : !(sl > e && tp[0] < e)) return null;       // numbers must make sense for the direction
  if (Math.abs(sl - e) / e > .03 || tp.some(x => Math.abs(x - e) / e > .08)) return null;
  tp.sort((a, b) => d > 0 ? a - b : b - a);
  return { id: m.id, t: m.t, d, e1, e2, tp, sl };
}
// what the channel says after a signal: "SL update 3922", "break even", "close half", "close"
function followUp(m) {
  const tx = m.text.replace(/,/g, '').trim(); if (!tx || tx.length > 90 || /\b(buy|sell)\b[^\n]{0,12}now/i.test(tx) || /\btp\s*:?\s*\d/i.test(tx)) return null;
  let h;
  if ((h = /\b(?:sl|stop\s*loss)\b[^\d\n]{0,16}(\d{3,6}(?:\.\d+)?)/i.exec(tx))) return { k: 'sl', p: +h[1] };
  if (/\b(break\s*-?\s*even|breakeven|b\.?e)\b|\b(sl|stop)\b[^\n]{0,12}\bentry\b/i.test(tx)) return { k: 'be' };
  if (/\b(half|partial|50\s*%)\b/i.test(tx) && /\b(clo[sc]e?|book|secure|profit)/i.test(tx)) return { k: 'half' };
  if (/\bclo[sc]e\b/i.test(tx) || /\bclose\s*(all|now)\b/i.test(tx)) return { k: 'close' };
  return null;
}
async function page(before) {
  const r = await fetch('https://t.me/s/' + CH + (before ? '?before=' + before : ''), { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return messages(await r.text());
}
(async () => {
  let old = []; try { old = JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch (e) {}
  if (!Array.isArray(old)) old = [];
  const pages = +process.argv[2] || 2; let ms = [], before = 0;
  for (let k = 0; k < pages; k++) { const p = await page(before); if (!p.length) break; ms = ms.concat(p); before = Math.min(...p.map(x => x.id)); }
  if (!ms.length) { console.log('no messages read, file left as it is'); return; }
  const by = {}; old.forEach(s => { if (s && s.id) by[s.id] = s; });
  let added = 0; ms.forEach(m => { const s = signal(m); if (s && !by[s.id]) { by[s.id] = s; added++; } });
  // attach each follow-up to the signal it answers, or to the newest signal of the last 8 hours
  const sigs = () => Object.values(by).sort((a, b) => a.t - b.t);
  ms.slice().sort((a, b) => a.id - b.id).forEach(m => { const f = followUp(m); if (!f) return; const all = sigs(); let tg = m.to && by[m.to] ? by[m.to] : null; if (!tg) for (let i = all.length - 1; i >= 0; i--) if (all[i].t < m.t && m.t - all[i].t < 8 * 36e5) { tg = all[i]; break; } if (!tg) return; tg.ev = tg.ev || []; if (tg.ev.some(e => e.id === m.id) || tg.ev.some(e => e.k === f.k && e.p === f.p && m.t - e.t < 36e5)) return; if (f.k === 'sl' && Math.abs(f.p - tg.e1) / tg.e1 > .03) return; tg.ev.push(Object.assign({ id: m.id, t: m.t }, f)); tg.ev.sort((a, b) => a.t - b.t); added++; });
  // the channel re-posts a signal a few minutes later with the same numbers: keep the first one only
  const list = Object.values(by).sort((a, b) => a.t - b.t).filter((s, i, a) => !a.slice(Math.max(0, i - 6), i).some(q => q.d === s.d && q.e1 === s.e1 && q.sl === s.sl && s.t - q.t < 36e5)).slice(-KEEP);
  const txt = JSON.stringify(list);
  if (txt !== JSON.stringify(old)) { fs.writeFileSync(FILE, txt); console.log('signals now', list.length, '| new this run', added); } else console.log('nothing new,', list.length, 'signals kept');
})().catch(e => { console.error('could not read the channel:', e.message); process.exit(0); });

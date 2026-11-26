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
    out.push({ id: +m[1], t: Date.parse(dt), rep: /tgme_widget_message_reply/.test(blk), text });
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
  // the channel re-posts a signal a few minutes later with the same numbers: keep the first one only
  const list = Object.values(by).sort((a, b) => a.t - b.t).filter((s, i, a) => !a.slice(Math.max(0, i - 6), i).some(q => q.d === s.d && q.e1 === s.e1 && q.sl === s.sl && s.t - q.t < 36e5)).slice(-KEEP);
  const txt = JSON.stringify(list);
  if (txt !== JSON.stringify(old)) { fs.writeFileSync(FILE, txt); console.log('signals now', list.length, '| new this run', added); } else console.log('nothing new,', list.length, 'signals kept');
})().catch(e => { console.error('could not read the channel:', e.message); process.exit(0); });

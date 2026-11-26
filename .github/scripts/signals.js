// Reads the public web page of a Telegram channel and keeps the trading signals it posts in charts/signals.json.
// Run by .github/workflows/signals.yml. It only ever writes that one file.
const fs = require('fs');
const SETS = [{ src: 1, ch: 'sniperxauusd77', file: 'charts/signals.json' }, { src: 2, ch: 'VIP_FOREX_CLUB6745', file: 'charts/signals2.json' }], ALL = 'charts/signals-all.json', KEEP = 300;   // signals-all.json is what the page reads
let CH = SETS[0].ch, FILE = SETS[0].file;

function messages(html) {
  const re = /data-post="[^"\/]+\/(\d+)"[\s\S]*?(?=data-post="|$)/g, out = []; let m;
  while ((m = re.exec(html))) {
    const blk = m[0], tx = (blk.match(/tgme_widget_message_text js-message_text[^>]*>([\s\S]*?)<\/div>/) || [])[1]   /* not the quoted text of a reply */, dt = (blk.match(/datetime="([^"]+)"/) || [])[1];
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
  const d = /buy/i.test(h[2]) ? 1 : -1, e1 = +h[3], tp = [], sl = +((/(?:stop+\s*los+|\bsl\b)\s*:?\s*(\d{3,6}(?:\.\d+)?)/i.exec(tx) || [])[1] || 0);
  let e2 = h[4] ? +h[4] : e1; if (Math.abs(e2 - e1) / e1 > .006) { const alt = e2 + (e2 > e1 ? -100 : 100); e2 = Math.abs(alt - e1) / e1 <= .006 ? alt : e1; }   // "3570/3664" is a slip for 3570/3564
  let t; const tr = /\btp(?:\s*\d(?!\d))?\s*:?\s*(\d{3,6}(?:\.\d+)?)/gi; while ((t = tr.exec(tx)) && tp.length < 6) tp.push(+t[1]);
  if (!(e1 > 0) || !(sl > 0) || !tp.length) return null;
  const e = d > 0 ? Math.max(e1, e2) : Math.min(e1, e2);
  if (d > 0 ? !(sl < e && tp[0] > e) : !(sl > e && tp[0] < e)) return null;       // numbers must make sense for the direction
  if (Math.abs(sl - e) / e > .03 || tp.some(x => Math.abs(x - e) / e > .08)) return null;
  tp.sort((a, b) => d > 0 ? a - b : b - a);
  const near = tp.filter(x => Math.abs(x - e) <= 5 * Math.abs(sl - e)); if (near.length && near.length < tp.length) { tp.length = 0; near.forEach(x => tp.push(x)); }   // a target typed 100 away by mistake
  return { id: m.id, t: m.t, d, e1, e2, tp, sl };
}
// what the channel says after a signal: "SL update 3922", "break even", "close half", "close"
function followUp(m) {
  const tx = m.text.replace(/,/g, '').trim(); if (!tx) return null;
  let h; const pips = (/(\d{2,4})\s*\+?\s*pips/i.exec(tx) || [])[1];
  if (/TP\s*ALL\s*HIT|SIGNAL\s*CLOSED/i.test(tx)) return { k: 'close' };                       // "TP ALL HIT, SIGNAL CLOSED"
  if ((h = /\bTP\s*([\u00b9\u00b2\u00b3\u2074\u2075\u20761-6])\s*HIT/i.exec(tx)) && tx.length < 120) return { k: 'note', s: 'Signal says: TP' + ('\u00b9\u00b2\u00b3\u2074\u2075\u2076'.indexOf(h[1]) >= 0 ? '\u00b9\u00b2\u00b3\u2074\u2075\u2076'.indexOf(h[1]) + 1 : h[1]) + ' hit' + (pips ? ', ' + pips + ' pips' : '') };
  if (tx.length > 140 || /\b(buy|sell)\b[^\n]{0,12}now/i.test(tx) || /\btp\s*:?\s*\d/i.test(tx)) return null;
  if ((h = /\b(?:sl|stop+\s*los+)\b[^\d\n]{0,16}(\d{3,6}(?:\.\d+)?)/i.exec(tx))) return { k: 'sl', p: +h[1] };
  if (/\b(break\s*-?\s*even|breakeven|b\.?e)\b|\b(sl|stop)\b[^\n]{0,12}\bentry\b/i.test(tx)) return { k: 'be' };
  if (/\b(half|partial|50\s*%)\b/i.test(tx) && /\b(clo[sc]e?|book|secure|profit)/i.test(tx)) return { k: 'half' };
  if (/\brunning\b[^\n]{0,14}\d+\s*pips/i.test(tx) && /\b(exit|clo[sc]e|book|secure)\b/i.test(tx) || /\bcan\s+(exit|clo[sc]e)\b/i.test(tx)) return { k: 'note', x: 1, s: (pips ? 'Running ' + pips + ' pips: ' : '') + 'exit now if you wish' };   // the trade itself is left as it is: the choice is the reader's
  if (pips && /\b(running|active)\b/i.test(tx)) return { k: 'note', s: 'Running ' + pips + ' pips' };
  if (/\bclo[sc]e\b/i.test(tx) || /\bclose\s*(all|now)\b/i.test(tx)) return { k: 'close' };
  return null;
}
async function page(before) {
  const r = await fetch('https://t.me/s/' + CH + (before ? '?before=' + before : ''), { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return messages(await r.text());
}
async function one() {
  let old = []; try { old = JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch (e) {}
  if (!Array.isArray(old)) old = [];
  const was = JSON.stringify(old);   // taken now: the objects in 'old' are changed below
  const pages = +process.argv[2] || 2; let ms = [], before = 0;
  for (let k = 0; k < pages; k++) { const p = await page(before); if (!p.length) break; ms = ms.concat(p); before = Math.min(...p.map(x => x.id)); }
  if (!ms.length) { console.log(CH + ': no messages read, file left as it is'); return; }
  const by = {}; old.forEach(s => { if (s && s.id) by[s.id] = s; });
  // an earlier version turned "can exit" into half closed + stop to entry (two events from one message): undo that
  old.forEach(s => { if (s && s.ev) { s.ev = s.ev.filter(e => !((e.k === 'half' || e.k === 'be') && s.ev.some(q => q !== e && q.id === e.id && (q.k === 'half' || q.k === 'be')))); if (!s.ev.length) delete s.ev; } });
  let added = 0; ms.forEach(m => { const s = signal(m); if (s && !by[s.id]) { by[s.id] = s; added++; } });
  // attach each follow-up to the signal it answers, or to the newest signal of the last 8 hours
  const sigs = () => Object.values(by).sort((a, b) => a.t - b.t);
  ms.slice().sort((a, b) => a.id - b.id).forEach(m => { const f = followUp(m); if (!f) return; const all = sigs(); let tg = m.to && by[m.to] ? by[m.to] : null; if (!tg) for (let i = all.length - 1; i >= 0; i--) if (all[i].t < m.t && m.t - all[i].t < 8 * 36e5) { tg = all[i]; break; } if (!tg) return; tg.ev = tg.ev || []; if (tg.ev.some(e => e.id === m.id) || tg.ev.some(e => e.k === f.k && e.p === f.p && e.s === f.s && m.t - e.t < 36e5) || (f.k === 'note' && tg.ev.filter(e => e.k === 'note').length >= 16)) return; if (f.k === 'sl' && Math.abs(f.p - tg.e1) / tg.e1 > .03) return; const also = f.also; delete f.also; tg.ev.push(Object.assign({ id: m.id, t: m.t }, f)); if (also) tg.ev.push({ id: m.id, t: m.t + 1, k: also }); tg.ev.sort((a, b) => a.t - b.t); added++; });
  // the channel re-posts a signal a few minutes later with the same numbers: keep the first one only
  const list = Object.values(by).sort((a, b) => a.t - b.t).filter((s, i, a) => !a.slice(Math.max(0, i - 6), i).some(q => q.d === s.d && q.e1 === s.e1 && q.sl === s.sl && s.t - q.t < 36e5)).slice(-KEEP);
  const txt = JSON.stringify(list);
  if (txt !== was) { fs.writeFileSync(FILE, txt); console.log(CH + ': signals now', list.length, '| new this run', added); } else console.log(CH + ': nothing new,', list.length, 'signals kept');
}
(async () => {
  for (const st of SETS) { CH = st.ch; FILE = st.file; try { await one(); } catch (e) { console.error(CH + ': could not read the channel:', e.message); } }
  const all = {}; SETS.forEach(st => { try { all[st.src] = JSON.parse(fs.readFileSync(st.file, 'utf8')); } catch (e) { all[st.src] = []; } });
  const txt = JSON.stringify(all); let was = ''; try { was = fs.readFileSync(ALL, 'utf8'); } catch (e) {}
  if (txt !== was) fs.writeFileSync(ALL, txt);
})().catch(e => { console.error('could not read the channel:', e.message); process.exit(0); });

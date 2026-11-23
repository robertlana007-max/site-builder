// ---------- tool page themes: every tool page gets its own look (assets/themes.css) ----------
// One choice per dimension from a hash of the slug, so a tool keeps its look between builds. Neighbours in a
// category are pushed apart, and no two tools may share the full combination.
const THEME = (() => {
  const HEROES = ['aurora', 'grid', 'waves', 'paper', 'neon', 'glass', 'blobs', 'stripes', 'dots', 'sunrise', 'blueprint', 'confetti', 'mesh', 'bubbles', 'origami', 'terminal', 'retro', 'brutal', 'rings', 'memphis'];
  const DIMS = { te: 10, tt: 11, ti: 7, tk: 20, td: 20, tb: 12, tl: 4, tc: 6, mo: 5 };
  const fnv = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
  const rand = s => { let a = fnv(s); return () => { a = (a + 0x6D2B79F5) >>> 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
  const hue = (hex, dh, dl) => {
    let [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b); let h = 0, s = 0; const l = (mx + mn) / 2, d = mx - mn;
    if (d) { s = d / (1 - Math.abs(2 * l - 1)); h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h *= 60; }
    h = (h + dh + 360) % 360; const L = Math.min(.62, Math.max(.3, l + dl / 100));
    const c = (1 - Math.abs(2 * L - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = L - c / 2;
    [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
    return '#' + [r, g, b].map(v => Math.round((v + m) * 255).toString(16).padStart(2, '0')).join('');
  };
  const out = {}, seen = new Map(), lastInCat = {};
  let minDiff = 99;
  for (const t of tools) {
    const prev = lastInCat[t.cat] || [];
    let hero = fnv(t.slug) % HEROES.length;
    for (let k = 0; k < HEROES.length && prev.slice(-3).some(p => p.hero === hero); k++) hero = (hero + 7) % HEROES.length;
    let pick, key;
    for (let salt = 0; salt < 200; salt++) {
      const r = rand(t.slug + '|' + salt);
      pick = { hero };
      for (const d in DIMS) pick[d] = Math.floor(r() * DIMS[d]);
      key = Object.values(pick).join('.');
      const p = prev[prev.length - 1];
      const diff = p ? Object.keys(pick).filter(d => pick[d] !== p[d]).length : 99;
      if (!seen.has(key) && diff >= 7) { if (p) minDiff = Math.min(minDiff, diff); break; }
    }
    if (seen.has(key)) throw new Error(`Theme combination of ${t.slug} is the same as ${seen.get(key)}`);
    seen.set(key, t.slug);
    (lastInCat[t.cat] = prev).push(pick);
    const r = rand(t.slug + '#look');
    const between = (a, b, dp = 0) => +(a + r() * (b - a)).toFixed(dp);
    const color = hue(COLOR[t.cat], between(-14, 14), between(-6, 6));
    out[t.slug] = { pick, color, cls: `tv tv-${HEROES[pick.hero]} ` + Object.keys(DIMS).map(d => d + '-' + pick[d]).join(' ') };
  }
  console.log(`Tool themes: ${tools.length} tools, ${seen.size} different combinations, neighbours in a category differ in at least ${minDiff} of ${Object.keys(DIMS).length + 1} dimensions`);
  // the tool's own icon as hero motif, with positions, sizes and turns seeded by the slug
  const motif = (t, mo) => {
    const r = rand(t.slug + '#motif'), b = (a, c, dp = 0) => +(a + r() * (c - a)).toFixed(dp);
    const inner = ICON[t.slug] || t.icon || ICON.star;
    const ic = (st, draw) => `<svg class="i" viewBox="0 0 24 24" style="${st}">${draw ? inner.replace(/<(path|circle|rect|line|polyline|polygon|ellipse)\b/g, '<$1 pathLength="100"') : inner}</svg>`;
    if (mo === 0) return ic(`--x:${b(60, 78)}%;--y:${b(-18, 22)}%;--s:${b(150, 210)}px;--r:${b(-24, 24)}deg;--o:${b(.12, .17, 2)}`, true);
    if (mo === 1) return Array.from({ length: 6 }, (_, i) => ic(`--x:${b(50 + (i % 3) * 15, 60 + (i % 3) * 15)}%;--y:${b(i < 3 ? 4 : 46, i < 3 ? 34 : 74)}%;--s:${b(18, 42)}px;--r:${b(-40, 40)}deg;--o:${b(.17, .3, 2)};--d:${(.3 + i * .12).toFixed(2)}s;--t:${b(3, 6, 1)}s`)).join('');
    if (mo === 2) {
      const n = b(3, 4), R = b(58, 74), off = b(0, 90), s = b(18, 26);
      return `<span class="tv-orb" style="--x:${b(78, 88)}%;--y:${b(42, 58)}%">${ic(`--s:${b(54, 70)}px;--r:${b(-20, 20)}deg;--o:.22`)}<b style="--t:${b(22, 36)}s">${Array.from({ length: n }, (_, i) => ic(`--s:${s}px;--a:${Math.round(off + i * 360 / n)}deg;--R:${R}px;--o:.26;--r:0deg`)).join('')}</b></span>`;
    }
    if (mo === 3) {
      const svgTxt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 40 40" fill="none" stroke="#000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
      return `<span class="tv-tile" style="--u:url('data:image/svg+xml,${encodeURIComponent(svgTxt)}');--g:${b(36, 54)}px;--r:${b(-22, 22)}deg;--o:${b(.11, .15, 2)}"></span>`;
    }
    const cx = b(90, 98), R = b(130, 170), a0 = b(190, 205), a1 = b(265, 280);
    return Array.from({ length: 6 }, (_, i) => { const a = (a0 + (a1 - a0) * i / 5) * Math.PI / 180; return ic(`--x:calc(${cx}% + ${Math.round(R * Math.cos(a))}px);--y:calc(100% + ${Math.round(R * Math.sin(a) - 10)}px);--s:${16 + i * 4}px;--r:${b(-30, 30)}deg;--o:${b(.2, .3, 2)};--d:${(.3 + i * .1).toFixed(2)}s;--t:${b(3, 6, 1)}s`); }).join('');
  };
  for (const t of tools) { const o = out[t.slug]; o.art = `<div class="tv-art" aria-hidden="true"><i></i><i></i><i></i><i></i><span class="tv-m mo-${o.pick.mo}">${motif(t, o.pick.mo)}</span></div>`; }
  return out;
})();

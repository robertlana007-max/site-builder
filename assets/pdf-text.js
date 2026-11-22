// GetToolNest PDF text helper (global PDFText).
// Writes text in any language into a pdf-lib PDF:
//  - Latin, Greek and Cyrillic use the page's own Noto Sans / Serif font (as before, selectable text).
//  - Arabic, Urdu, Persian, Hebrew, Hindi (Devanagari), Bengali, Tamil and Thai use Noto fonts that are
//    downloaded only when that script appears, shaped with fontkit and written as real, selectable text.
//  - Everything else (Chinese, Japanese, Korean, emoji, rare scripts), and any script whose font could not
//    download, is drawn by the browser as a sharp picture, so it is never lost or shown as "?".
// Lines are put in visual order with the Unicode bidi rules, so right-to-left and mixed lines read correctly.
//
//   await PDFText.load();                        // pdf-lib + fontkit (+ what the shapers need)
//   var T = await PDFText.create(doc, { text: everythingYouWillWrite, onStatus: fn });
//   T.width(text, size, font)                   // like font.widthOfTextAtSize
//   T.draw(page, text, { x, y, size, font, color, opacity, width, align })  // like page.drawText
//   T.wrap(text, size, font, maxWidth)          // lines that fit
//   T.isRtl(text)                               // paragraph is right-to-left (Arabic, Hebrew…)
//   await doc.save()                            // pictures are finished automatically before saving
(function () {
  'use strict';
  var me = document.currentScript && document.currentScript.src;
  var ROOT = me ? me.replace(/[^\/]*$/, '') : '../assets/';

  // ---------- scripts with their own vector font ----------
  var SCRIPTS = {
    arabic: { name: 'Arabic', file: 'noto-sans-arabic', from: [[0x0600, 0x06FF], [0x0750, 0x077F]] },
    hebrew: { name: 'Hebrew', file: 'noto-sans-hebrew', from: [[0x0590, 0x05FF], [0xFB1D, 0xFB4F]] },
    devanagari: { name: 'Hindi', file: 'noto-sans-devanagari', from: [[0x0900, 0x0963], [0x0966, 0x097F]] },
    bengali: { name: 'Bengali', file: 'noto-sans-bengali', from: [[0x0980, 0x09FF]] },
    tamil: { name: 'Tamil', file: 'noto-sans-tamil', from: [[0x0B80, 0x0BFF]] },
    thai: { name: 'Thai', file: 'noto-sans-thai', from: [[0x0E00, 0x0E7F]] }
  };
  var KEYS = Object.keys(SCRIPTS);
  function scriptOf(cp) {
    if (cp < 0x0590 || cp > 0xFB4F) return null;
    for (var i = 0; i < KEYS.length; i++) {
      var r = SCRIPTS[KEYS[i]].from;
      for (var j = 0; j < r.length; j++) if (cp >= r[j][0] && cp <= r[j][1]) return KEYS[i];
    }
    return null;
  }

  // ---------- loading ----------
  function script(src) {
    return new Promise(function (res, rej) { var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = function () { s.remove(); rej(new Error('load ' + src)); }; document.head.appendChild(s); });
  }
  var libs = null, rr = null, bytes = {};
  function load() {
    if (!libs) libs = Promise.all([window.PDFLib ? 0 : script(ROOT + 'vendor/pdf-lib.min.js'), window.fontkit ? 0 : script(ROOT + 'vendor/fontkit.min.js')]).catch(function (e) { libs = null; throw e; });
    return libs;
  }
  // fontkit's Arabic and Indic shapers need the regenerator runtime
  function needRuntime() {
    if (window.regeneratorRuntime) return Promise.resolve();
    if (!rr) rr = script(ROOT + 'vendor/regenerator-runtime.min.js').catch(function (e) { rr = null; throw e; });
    return rr;
  }
  function fontBytes(file) {
    if (!bytes[file]) bytes[file] = fetch(ROOT + 'vendor/fonts/' + file + '.ttf').then(function (r) { if (!r.ok) throw new Error('font ' + r.status); return r.arrayBuffer(); }).catch(function (e) { bytes[file] = null; throw e; });
    return bytes[file];
  }

  // ---------- characters ----------
  var MARK = /[\p{Mn}\p{Me}]/u, ANYMARK = /\p{M}/u, LETTER = /[\p{L}\p{Mc}\p{Nd}]/u, SPACE = /\s/;
  function isJoiner(cp) { // belongs to the letter before it
    return cp === 0x200C || cp === 0x200D || (cp >= 0xFE00 && cp <= 0xFE0F) || (cp >= 0xE0100 && cp <= 0xE01EF) || (cp >= 0x1F3FB && cp <= 0x1F3FF) || (cp >= 0xE0020 && cp <= 0xE007F) || cp === 0x20E3;
  }
  function isIgnorable(cp) { return cp === 0x200B || cp === 0x200C || cp === 0x200D || cp === 0x200E || cp === 0x200F || cp === 0x2060 || cp === 0xFEFF || cp === 0x00AD || (cp >= 0x202A && cp <= 0x202E) || (cp >= 0x2066 && cp <= 0x2069) || (cp >= 0xFE00 && cp <= 0xFE0F); }
  function clean(t) {
    t = String(t == null ? '' : t).replace(/\r\n?|\n|\t/g, ' ').replace(/[\u0000-\u001F\u007F]/g, '');
    // Arabic presentation forms (often in text copied from old PDFs) become normal letters, which then join properly
    if (/[ﭐ-﷏ﹰ-ﻼ]/.test(t)) t = t.replace(/[ﭐ-ﴽﵐ-﷏ﹰ-ﻼ]/g, function (c) { return c.normalize('NFKC'); });
    return t;
  }

  // ---------- Unicode bidi (rules W1-W7, N1-N2, I1-I2, L1-L2; no explicit embeddings) ----------
  function btype(cp) {
    if (cp < 0x80) {
      if (cp >= 0x30 && cp <= 0x39) return 'EN';
      if ((cp >= 0x41 && cp <= 0x5A) || (cp >= 0x61 && cp <= 0x7A)) return 'L';
      if (cp === 0x20 || cp === 0x0C) return 'WS';
      if (cp === 0x09) return 'S';
      if (cp === 0x2B || cp === 0x2D) return 'ES';
      if (cp === 0x23 || cp === 0x24 || cp === 0x25) return 'ET';
      if (cp === 0x2C || cp === 0x2E || cp === 0x2F || cp === 0x3A) return 'CS';
      return 'ON';
    }
    if (cp === 0x200E) return 'L';
    if (cp === 0x200F) return 'R';
    if (cp === 0x061C) return 'AL';
    if (isIgnorable(cp) && !(cp >= 0xFE00 && cp <= 0xFE0F)) return 'BN';
    if (cp >= 0x0590 && cp <= 0x05FF) return MARK.test(String.fromCodePoint(cp)) ? 'NSM' : 'R';
    if ((cp >= 0x0600 && cp <= 0x07BF) || (cp >= 0x0860 && cp <= 0x08FF)) {
      if (cp <= 0x0605 || (cp >= 0x0660 && cp <= 0x0669) || cp === 0x066B || cp === 0x066C || cp === 0x06DD || cp === 0x0890 || cp === 0x0891 || cp === 0x08E2) return 'AN';
      if (cp >= 0x06F0 && cp <= 0x06F9) return 'EN';
      if (cp === 0x060C) return 'CS';
      if (cp === 0x0609 || cp === 0x060A || cp === 0x066A) return 'ET';
      if (cp === 0x0606 || cp === 0x0607 || cp === 0x060E || cp === 0x060F || cp === 0x06DE || cp === 0x06E9) return 'ON';
      if (MARK.test(String.fromCodePoint(cp))) return 'NSM';
      return 'AL';
    }
    if (cp >= 0x07C0 && cp <= 0x085F) return MARK.test(String.fromCodePoint(cp)) ? 'NSM' : 'R';
    if (cp >= 0xFB1D && cp <= 0xFB4F) return cp === 0xFB1E ? 'NSM' : 'R';
    if ((cp >= 0xFB50 && cp <= 0xFDFF) || (cp >= 0xFE70 && cp <= 0xFEFE)) return (cp === 0xFD3E || cp === 0xFD3F) ? 'ON' : 'AL';
    if (cp >= 0x10800 && cp <= 0x10FFF) return 'R';
    if (cp >= 0x1E800 && cp <= 0x1EFFF) return (cp >= 0x1EE00 && cp <= 0x1EEFF) ? 'AL' : 'R';
    if (cp === 0xB2 || cp === 0xB3 || cp === 0xB9 || (cp >= 0x2070 && cp <= 0x2079 && cp !== 0x2071) || (cp >= 0x2080 && cp <= 0x2089) || (cp >= 0xFF10 && cp <= 0xFF19)) return 'EN';
    if ((cp >= 0xA2 && cp <= 0xA5) || cp === 0xB0 || cp === 0xB1 || (cp >= 0x2030 && cp <= 0x2034) || (cp >= 0x20A0 && cp <= 0x20CF) || cp === 0x2213 || (cp >= 0xFF03 && cp <= 0xFF05) || cp === 0xFFE0 || cp === 0xFFE1 || cp === 0xFFE5 || cp === 0xFFE6) return 'ET';
    if (cp === 0xA0 || cp === 0x202F || cp === 0x2044 || cp === 0xFF0C || cp === 0xFF0E || cp === 0xFF0F || cp === 0xFF1A) return 'CS';
    if (cp === 0x207A || cp === 0x207B || cp === 0x208A || cp === 0x208B || cp === 0x2212 || cp === 0xFF0B || cp === 0xFF0D) return 'ES';
    var ch = String.fromCodePoint(cp);
    if (MARK.test(ch) || (cp >= 0xFE00 && cp <= 0xFE0F)) return 'NSM';
    if (SPACE.test(ch)) return 'WS';
    if (LETTER.test(ch)) return 'L';
    if (cp >= 0x2E80 && !(cp >= 0x3000 && cp <= 0x303F) && !(cp >= 0xFE10 && cp <= 0xFE6F) && !(cp >= 0xFF00 && cp <= 0xFF65) && cp < 0x1F000) return 'L';
    return 'ON';
  }
  function baseLevel(cps, dir) {
    if (dir === 'rtl') return 1;
    if (dir === 'ltr') return 0;
    for (var i = 0; i < cps.length; i++) { var t = btype(cps[i]); if (t === 'L') return 0; if (t === 'R' || t === 'AL') return 1; }
    return 0;
  }
  function bidiLevels(cps, base) {
    var n = cps.length, orig = cps.map(btype), idx = [], T = [];
    for (var i = 0; i < n; i++) if (orig[i] !== 'BN') { idx.push(i); T.push(orig[i]); }
    var m = T.length, e = base ? 'R' : 'L', k, j, last;
    for (k = 0; k < m; k++) if (T[k] === 'NSM') T[k] = k ? T[k - 1] : e; // W1
    for (last = e, k = 0; k < m; k++) { if (T[k] === 'L' || T[k] === 'R' || T[k] === 'AL') last = T[k]; else if (T[k] === 'EN' && last === 'AL') T[k] = 'AN'; } // W2
    for (k = 0; k < m; k++) if (T[k] === 'AL') T[k] = 'R'; // W3
    for (k = 1; k < m - 1; k++) { // W4
      if (T[k] === 'ES' && T[k - 1] === 'EN' && T[k + 1] === 'EN') T[k] = 'EN';
      else if (T[k] === 'CS' && T[k - 1] === T[k + 1] && (T[k - 1] === 'EN' || T[k - 1] === 'AN')) T[k] = T[k - 1];
    }
    for (k = 0; k < m; k++) if (T[k] === 'ET') { // W5
      for (j = k; j < m && T[j] === 'ET'; j++);
      if ((k > 0 && T[k - 1] === 'EN') || (j < m && T[j] === 'EN')) for (var q = k; q < j; q++) T[q] = 'EN';
      k = j - 1;
    }
    for (k = 0; k < m; k++) if (T[k] === 'ES' || T[k] === 'ET' || T[k] === 'CS') T[k] = 'ON'; // W6
    for (last = e, k = 0; k < m; k++) { if (T[k] === 'L' || T[k] === 'R') last = T[k]; else if (T[k] === 'EN' && last === 'L') T[k] = 'L'; } // W7
    function strong(t) { return t === 'L' ? 'L' : (t === 'R' || t === 'EN' || t === 'AN') ? 'R' : null; }
    for (k = 0; k < m; k++) if (!strong(T[k])) { // N1, N2
      for (j = k; j < m && !strong(T[j]); j++);
      var before = k ? strong(T[k - 1]) : e, after = j < m ? strong(T[j]) : e, d = before === after ? before : e;
      for (var r = k; r < j; r++) T[r] = d;
      k = j - 1;
    }
    var lv = new Array(n);
    for (k = 0; k < m; k++) { // I1, I2
      var t = T[k], L = base;
      if (base % 2 === 0) { if (t === 'R') L = base + 1; else if (t === 'AN' || t === 'EN') L = base + 2; }
      else if (t === 'L' || t === 'EN' || t === 'AN') L = base + 1;
      lv[idx[k]] = L;
    }
    for (i = 0; i < n; i++) if (lv[i] == null) lv[i] = i ? lv[i - 1] : base; // removed characters follow the one before
    for (i = n - 1; i >= 0 && (orig[i] === 'WS' || orig[i] === 'S' || orig[i] === 'BN'); i--) lv[i] = base; // L1
    return lv;
  }
  var MIRROR = { '(': ')', ')': '(', '<': '>', '>': '<', '[': ']', ']': '[', '{': '}', '}': '{', '«': '»', '»': '«', '‹': '›', '›': '‹', '≤': '≥', '≥': '≤', '⁅': '⁆', '⁆': '⁅', '⁽': '⁾', '⁾': '⁽', '₍': '₎', '₎': '₍' };
  // reverse a left-to-right font run for a right-to-left line, keeping accents after their letter
  function reverseRun(chs) {
    var cl = [];
    chs.forEach(function (c) { var cp = c.codePointAt(0); if (cl.length && (ANYMARK.test(c) || isJoiner(cp))) cl[cl.length - 1] += c; else cl.push(MIRROR[c] || c); });
    return cl.reverse().join('');
  }

  // fontkit leaves two jobs that HarfBuzz (and so the browser) does before shaping
  var ARMARK = { 0x0651: 26, 0x064B: 27, 0x064C: 28, 0x064D: 29, 0x064E: 30, 0x064F: 31, 0x0650: 32, 0x0652: 34, 0x0670: 35, 0x0655: 220, 0x0656: 220, 0x065C: 220 };
  function preShape(key, t) {
    if (key === 'arabic' && /[ً-ٰٟ]{2}/.test(t)) { // shadda first, then the other marks in canonical order
      t = t.replace(/[ً-ٰٟۖ-ۭ]{2,}/g, function (s) {
        return Array.from(s).map(function (c, i) { return [c, ARMARK[c.charCodeAt(0)] || 230, i]; }).sort(function (a, b) { return a[1] - b[1] || a[2] - b[2]; }).map(function (a) { return a[0]; }).join('');
      });
    }
    if (key === 'thai' && t.indexOf('ำ') >= 0) t = t.replace(/([่-๋]*)ำ/g, 'ํ$1า'); // sara am: nikhahit goes before the tone mark
    return t;
  }

  // ---------- pictures of text (drawn by the browser) ----------
  var EMOJI = '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"';
  function family(serif) { return serif ? '"Noto Serif", "Times New Roman", Georgia, ' + EMOJI + ', serif' : '"Noto Sans", Arial, "Helvetica Neue", ' + EMOJI + ', sans-serif'; }
  var mctx = null;
  function measureCanvas(text, bold, serif, rtl) {
    if (!mctx) mctx = document.createElement('canvas').getContext('2d');
    mctx.font = (bold ? 'bold ' : '') + '100px ' + family(serif);
    try { mctx.direction = rtl ? 'rtl' : 'ltr'; } catch (e) { /* older browsers */ }
    return mctx.measureText(text).width / 100;
  }
  function pngBytes(canvas) {
    var b = atob(canvas.toDataURL('image/png').split(',')[1]), u = new Uint8Array(b.length);
    for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
    return u;
  }
  function cssColor(c) {
    if (!c) return '#000';
    if (c.type === 'RGB' || c.red != null) return 'rgb(' + Math.round(c.red * 255) + ',' + Math.round(c.green * 255) + ',' + Math.round(c.blue * 255) + ')';
    if (c.gray != null) { var g = Math.round(c.gray * 255); return 'rgb(' + g + ',' + g + ',' + g + ')'; }
    if (c.cyan != null) return 'rgb(' + Math.round(255 * (1 - c.cyan) * (1 - c.key)) + ',' + Math.round(255 * (1 - c.magenta) * (1 - c.key)) + ',' + Math.round(255 * (1 - c.yellow) * (1 - c.key)) + ')';
    return '#000';
  }

  // all the text inside a string, array or object (pictures as data: URLs are skipped)
  function strings(v) {
    var out = [], seen = new Set();
    (function walk(x, d) {
      if (x == null || d > 8) return;
      if (typeof x === 'string') { if (!/^data:/.test(x)) out.push(x); return; }
      if (typeof x !== 'object' || seen.has(x)) return;
      seen.add(x);
      if (Array.isArray(x)) x.forEach(function (y) { walk(y, d + 1); });
      else Object.keys(x).forEach(function (k) { walk(x[k], d + 1); });
    })(v, 0);
    return out.join(' ');
  }

  // ---------- one PDF ----------
  async function create(doc, opts) {
    opts = opts || {};
    await load();
    var P = PDFLib, fonts = {}, tried = {}; // fonts: script -> { 400: PDFFont, 700: PDFFont }
    // load the fonts for the scripts used in this text (each one only once)
    async function ensure(text, onStatus) {
      var sample = strings(text);
      var want = KEYS.filter(function (k) { return !tried[k] && SCRIPTS[k].from.some(function (r) { for (var cp = 0, i = 0; i < sample.length; i++) { cp = sample.charCodeAt(i); if (cp >= r[0] && cp <= r[1]) return true; } return false; }); });
      if (!want.length) return;
      want.forEach(function (k) { tried[k] = 1; });
      var slow = want.filter(function (k) { return !bytes[SCRIPTS[k].file + '-400']; });
      if (slow.length && onStatus) onStatus('Getting the ' + slow.map(function (k) { return SCRIPTS[k].name; }).join(', ') + ' letters for your PDF…');
      var rtOk = true;
      try { await needRuntime(); } catch (e) { rtOk = false; }
      await Promise.all(want.map(function (k) {
        if (!rtOk && k !== 'hebrew' && k !== 'thai') return null; // these shapers need the runtime; the pictures still work
        return Promise.all([fontBytes(SCRIPTS[k].file + '-400'), fontBytes(SCRIPTS[k].file + '-700')]).then(async function (b) {
          var f = { 400: await doc.embedFont(b[0], { subset: true }), 700: await doc.embedFont(b[1], { subset: true }) };
          try { f[400].embedder.font.layout(String.fromCodePoint(SCRIPTS[k].from[0][0] + 0x28)); fonts[k] = f; } catch (e) { console.warn('PDFText: ' + k + ' shaping failed, using pictures', e); }
        }).catch(function (e) { console.warn('PDFText: no ' + k + ' font, using pictures', e); });
      }));
      anal.clear(); widths.clear();
    }
    var used = new Set(), sets = new WeakMap(), anal = new Map(), lays = new Map(), widths = new Map(), pics = new Map(), pending = [], keys = new WeakMap(), xkeys = new WeakMap();
    var T = { pictures: 0, lost: '' };
    await ensure(opts.text, opts.onStatus);

    function charset(font) {
      var s = sets.get(font);
      if (!s) { s = new Set(font.getCharacterSet()); sets.set(font, s); }
      return s;
    }
    function isBold(font, o) { return o && o.bold != null ? !!o.bold : /bold|black|heavy|semibold/i.test(font.name || ''); }
    function isSerif(font, o) { return o && o.serif != null ? !!o.serif : /serif|times|georgia/i.test((font.name || '').replace(/sans-?serif/i, '')); }
    function sfont(key, bold) { return fonts[key] && fonts[key][bold ? 700 : 400]; }
    function has(key, bold, cp) { var f = sfont(key, bold); return !!f && f.embedder.font.hasGlyphForCodePoint(cp); }

    // split a line into runs: { t, cls ('base' | script | 'img'), lvl }, in visual order
    function analyze(text, font, o) {
      var bold = isBold(font, o), serif = isSerif(font, o), dir = (o && o.dir) || 'auto', key = text + '\u0001' + (font.name || '') + bold + serif + dir;
      var a = anal.get(key);
      if (a) return a;
      var chs = Array.from(text), n = chs.length, cps = chs.map(function (c) { return c.codePointAt(0); }), base = charset(font), cls = new Array(n), i;
      for (i = 0; i < n; i++) {
        var cp = cps[i], s = scriptOf(cp);
        if (cp === 0x0964 || cp === 0x0965) s = null; // dandas are shared by the Indian scripts
        if (s) cls[i] = has(s, bold, cp) ? s : 'img';
        else if (isJoiner(cp) || (ANYMARK.test(chs[i]) && !base.has(cp))) cls[i] = 'inh';
        else if (!LETTER.test(chs[i])) cls[i] = base.has(cp) ? 'cmn' : 'cmnx';
        else cls[i] = base.has(cp) ? 'base' : 'img';
      }
      for (i = 0; i < n - 1; i++) if ((cps[i + 1] === 0xFE0F || cps[i + 1] === 0x20E3) && cls[i] !== 'inh') cls[i] = 'img'; // emoji style
      for (i = 0; i < n; i++) if (cls[i] === 'cmn' || cls[i] === 'cmnx') {
        var b = i - 1, f = i + 1;
        while (b >= 0 && (cls[b] === 'cmn' || cls[b] === 'cmnx' || cls[b] === 'inh')) b--;
        while (f < n && (cls[f] === 'cmn' || cls[f] === 'cmnx' || cls[f] === 'inh')) f++;
        var P1 = b >= 0 ? cls[b] : null, N1 = f < n ? cls[f] : null, c0 = cls[i] === 'cmn', pick;
        if (P1 && P1 === N1 && P1 !== 'base') pick = P1 === 'img' ? 'img' : has(P1, bold, cps[i]) ? P1 : c0 ? 'base' : 'img';
        else if (c0) pick = 'base';
        else pick = P1 && P1 !== 'base' && P1 !== 'img' && has(P1, bold, cps[i]) ? P1 : N1 && N1 !== 'base' && N1 !== 'img' && has(N1, bold, cps[i]) ? N1 : 'img';
        cls[i] = pick;
      }
      for (i = 0; i < n; i++) if (cls[i] === 'inh') {
        var p = i ? cls[i - 1] : 'base';
        if (p === 'base' && !base.has(cps[i]) && !isIgnorable(cps[i])) { p = 'img'; if (i) cls[i - 1] = 'img'; }
        cls[i] = p;
      }
      var bl = baseLevel(cps, dir), lv = bidiLevels(cps, bl), runs = [];
      for (i = 0; i < n; i++) {
        var r = runs[runs.length - 1], c = cls[i];
        if (c !== 'img' && isIgnorable(cps[i]) && !(c !== 'base' && (cps[i] === 0x200C || cps[i] === 0x200D))) continue; // invisible controls are left out
        if (r && r.cls === c && r.lvl === lv[i]) r.c.push(chs[i]);
        else runs.push({ cls: c, lvl: lv[i], c: [chs[i]] });
      }
      var max = 0, minOdd = 99;
      runs.forEach(function (r) { r.t = r.src = r.c.join(''); if (r.lvl > max) max = r.lvl; if (r.lvl % 2 && r.lvl < minOdd) minOdd = r.lvl; });
      for (var L = max; L >= minOdd && L > 0; L--) { // L2: reverse every sequence of runs at this level or higher
        for (i = 0; i < runs.length; i++) if (runs[i].lvl >= L) {
          var j = i; while (j < runs.length && runs[j].lvl >= L) j++;
          var seg = runs.slice(i, j).reverse(); Array.prototype.splice.apply(runs, [i, j - i].concat(seg)); i = j;
        }
      }
      runs.forEach(function (r) { r.rtl = r.lvl % 2 === 1; if (r.cls === 'base' && r.rtl) r.t = reverseRun(r.c); delete r.c; });
      a = { runs: runs, rtl: bl === 1, bold: bold, serif: serif, simple: runs.length === 1 && runs[0].cls === 'base' && !runs[0].rtl && runs[0].t === text };
      if (a.simple) a.runs[0].t = text;
      anal.set(key, a);
      return a;
    }
    function layout(r, bold) {
      var key = r.cls + bold + r.rtl + r.t, l = lays.get(key);
      if (!l) {
        var f = sfont(r.cls, bold);
        var fk = f.embedder.font, own = Object.prototype.hasOwnProperty.call(fk, 'getGlyph'), get = fk.getGlyph, run;
        // fontkit shares one glyph object per shape; give each one its own letters
        fk.getGlyph = function (id, cps) { var g = Object.create(get.call(fk, id, cps)); g.codePoints = cps ? cps.slice() : []; return g; };
        try { run = fk.layout(preShape(r.cls, r.t), [], undefined, undefined, r.rtl ? 'rtl' : 'ltr'); } finally { if (own) fk.getGlyph = get; else delete fk.getGlyph; }
        var w = 0; run.positions.forEach(function (p) { w += p.xAdvance; });
        l = { font: f, glyphs: run.glyphs, pos: run.positions, w: w / f.embedder.font.unitsPerEm };
        lays.set(key, l);
      }
      return l;
    }
    function unitWidth(r, font, a) { // width at size 1
      var key = r.cls + a.bold + a.serif + r.rtl + (r.cls === 'base' ? font.name : '') + r.t, w = widths.get(key);
      if (w == null) {
        if (r.cls === 'base') w = font.widthOfTextAtSize(r.t, 1000) / 1000;
        else if (r.cls === 'img') w = measureCanvas(r.t, a.bold, a.serif, r.rtl);
        else { try { w = layout(r, a.bold).w; } catch (e) { console.warn('PDFText: shaping failed, using a picture', e); r.cls = 'img'; w = measureCanvas(r.t, a.bold, a.serif, r.rtl); } }
        widths.set(key, w);
      }
      return w;
    }
    function width(text, size, font, o) {
      text = clean(text);
      if (!text) return 0;
      var a = analyze(text, font, o);
      if (a.simple) return font.widthOfTextAtSize(text, size);
      var w = 0; a.runs.forEach(function (r) { w += unitWidth(r, font, a); });
      return w * size;
    }
    function fontKey(page, font) {
      var m = keys.get(page); if (!m) { m = new Map(); keys.set(page, m); }
      var k = m.get(font); if (!k) { k = page.node.newFontDictionary(font.name, font.ref); m.set(font, k); }
      return k;
    }
    function xKey(page, ref) {
      var m = xkeys.get(page); if (!m) { m = new Map(); xkeys.set(page, m); }
      var k = m.get(ref); if (!k) { k = page.node.newXObject('Image', ref); m.set(ref, k); }
      return k;
    }
    function hex4(n) { var s = n.toString(16).toUpperCase(); while (s.length < 4) s = '0' + s; return s; }
    // every glyph gets the letters it stands for, so copy and search work (shared shapes get their own copy)
    function subsetId(emb, g) {
      var cps = g.codePoints || [], key = g.id + ':' + cps.join(','), m = emb.ptIds;
      if (!m) {
        m = emb.ptIds = new Map();
        emb.glyphId = function (x) { return x ? (x.ptId != null ? x.ptId : this.glyphIdMap.get(x.id)) : -1; };
        var cmap = emb.embedUnicodeCmap;
        emb.embedUnicodeCmap = function (c) {
          var gc = this.glyphCache;
          this.glyphCache = { access: function () { return gc.access().map(function (x) { if (!x || (x.codePoints && x.codePoints.length)) return x; var y = Object.create(x); y.codePoints = [0x200B]; return y; }); /* dots and other pieces: invisible */ }, invalidate: function () {} };
          try { return cmap.call(this, c); } finally { this.glyphCache = gc; }
        };
      }
      var id = m.get(key);
      if (id != null) return id;
      if (emb.glyphIdMap.get(g.id) == null) { id = emb.subset.includeGlyph(g.id); emb.glyphIdMap.set(g.id, id); }
      else if (!cps.length) id = emb.glyphIdMap.get(g.id);
      else { emb.subset.glyphs.push(g.id); id = emb.subset.glyphs.length - 1; }
      if (!emb.glyphs[id - 1] || cps.length) { var w = Object.create(g); w.codePoints = cps; w.ptId = id; emb.glyphs[id - 1] = w; }
      m.set(key, id); emb.glyphCache.invalidate();
      return id;
    }
    function num(v) { return P.PDFNumber.of(Math.round(v * 100) / 100); }
    function drawVector(page, r, a, x, y, size, color, gs, hs, skew) {
      var l = layout(r, a.bold), f = l.font, emb = f.embedder, upm = emb.font.unitsPerEm, u = 1000 / upm, ctx = page.doc.context;
      used.add(f);
      var ops = [P.pushGraphicsState()];
      if (gs) ops.push(P.setGraphicsState(gs));
      ops.push(P.setFillingColor(color || P.rgb(0, 0, 0)), P.beginText(), P.setFontAndSize(fontKey(page, f), size));
      if (hs !== 100) ops.push(P.setCharacterSqueeze(hs));
      ops.push(P.rotateAndSkewTextRadiansAndTranslate(0, 0, skew, x, y));
      // copy and search give the letters in reading order, whatever order the shapes are drawn in
      var act = !r.rtl && r.cls !== 'hebrew' && r.cls !== 'arabic';
      if (act) ops.push(P.PDFOperator.of('BDC', [P.PDFName.of('Span'), ctx.obj({ ActualText: P.PDFHexString.fromText(r.src) })]));
      var arr = [], rise = 0, pen = 0, extra = [];
      function flush() { if (arr.length) { ops.push(P.PDFOperator.of('TJ', [ctx.obj(arr)])); arr = []; } }
      l.glyphs.forEach(function (g, i) {
        var p = l.pos[i], yo = p.yOffset / upm * size;
        pen += p.xAdvance;
        // loose pieces with no letter of their own (the dots of Arabic letters) go after the text, so copied words stay whole
        if (!p.xAdvance && !(g.codePoints && g.codePoints.length) && !g.advanceWidth) { extra.push([g, pen + p.xOffset, p.yOffset]); return; }
        if (Math.abs(yo - rise) > 0.001) { flush(); ops.push(P.setTextRise(Math.round(yo * 1000) / 1000)); rise = yo; }
        if (p.xOffset) arr.push(num(-p.xOffset * u));
        arr.push(P.PDFHexString.of(hex4(subsetId(emb, g))));
        var adj = (g.advanceWidth + p.xOffset - p.xAdvance) * u;
        if (Math.abs(adj) > 0.01) arr.push(num(adj));
      });
      flush();
      if (rise) ops.push(P.setTextRise(0));
      if (act) ops.push(P.PDFOperator.of('EMC'));
      if (extra.length) ops.push(P.PDFOperator.of('BDC', [P.PDFName.of('Span'), ctx.obj({ ActualText: P.PDFString.of('') })]));
      extra.forEach(function (e) {
        ops.push(P.rotateAndSkewTextRadiansAndTranslate(0, 0, skew, x + e[1] / upm * size * hs / 100, y + e[2] / upm * size), P.showText(P.PDFHexString.of(hex4(subsetId(emb, e[0])))));
      });
      if (extra.length) ops.push(P.PDFOperator.of('EMC'));
      ops.push(P.endText(), P.popGraphicsState());
      page.pushOperators.apply(page, ops);
    }
    function picture(r, a, size, color) {
      var css = cssColor(color), key = r.t + '|' + a.bold + a.serif + r.rtl + '|' + size + '|' + css, pic = pics.get(key);
      if (pic) return pic;
      var px = size * Math.max(3, Math.min(5, 160 / size)), font = (a.bold ? 'bold ' : '') + px + 'px ' + family(a.serif);
      var c = document.createElement('canvas'), g = c.getContext('2d');
      g.font = font; try { g.direction = r.rtl ? 'rtl' : 'ltr'; } catch (e) { /* older browsers */ }
      var w = g.measureText(r.t).width, scale = w > 12000 ? 12000 / w : 1;
      if (scale < 1) { px *= scale; font = (a.bold ? 'bold ' : '') + px + 'px ' + family(a.serif); g.font = font; w = g.measureText(r.t).width; }
      var pad = Math.ceil(px * 0.3), top = Math.ceil(px * 1.3), bot = Math.ceil(px * 0.55);
      c.width = Math.max(1, Math.ceil(w) + 2 * pad); c.height = top + bot;
      g = c.getContext('2d'); g.font = font; try { g.direction = r.rtl ? 'rtl' : 'ltr'; } catch (e) { /* older browsers */ }
      g.textAlign = 'left'; g.textBaseline = 'alphabetic'; g.fillStyle = css; g.fillText(r.t, pad, top);
      var ref = doc.context.nextRef();
      pending.push({ ref: ref, png: pngBytes(c) });
      T.pictures++;
      pic = { ref: ref, w: w / px, cw: c.width / px, ch: c.height / px, pad: pad / px, bot: bot / px }; // in "size 1" units
      pics.set(key, pic);
      return pic;
    }
    function drawPicture(page, r, a, x, y, size, color, gs, hs, uw) {
      var pic = picture(r, a, size, color), k = uw / (pic.w || 1) * size; // stretch so the picture matches the measured width
      var ops = [P.pushGraphicsState()];
      if (gs) ops.push(P.setGraphicsState(gs));
      ops.push(P.PDFOperator.of('BDC', [P.PDFName.of('Span'), page.doc.context.obj({ ActualText: P.PDFHexString.fromText(r.src) })]));
      ops.push(P.concatTransformationMatrix(pic.cw * k * hs / 100, 0, 0, pic.ch * k, x - pic.pad * k * hs / 100, y - pic.bot * k), P.drawObject(xKey(page, pic.ref)), P.PDFOperator.of('EMC'), P.popGraphicsState());
      page.pushOperators.apply(page, ops);
    }
    // o: { x, y, size, font, color, opacity, width, align ('left' | 'right' | 'center' | 'start'), dir, hscale (%), ySkew, bold, serif }
    function draw(page, text, o) {
      text = clean(text);
      if (!text.trim()) return 0;
      var font = o.font, size = o.size || 12, hs = o.hscale || 100, a = analyze(text, font, o);
      var tw = (a.simple ? font.widthOfTextAtSize(text, size) : width(text, size, font, o)) * hs / 100, x = o.x || 0;
      var al = o.align || (o.width != null ? 'start' : 'left');
      if (al === 'start') al = a.rtl ? 'right' : 'left';
      if (o.width != null && al === 'right') x += o.width - tw;
      else if (o.width != null && al === 'center') x += (o.width - tw) / 2;
      if (a.simple) {
        if (hs !== 100) page.pushOperators(P.pushGraphicsState(), P.setCharacterSqueeze(hs));
        page.drawText(text, { x: x, y: o.y, size: size, font: font, color: o.color, opacity: o.opacity, ySkew: o.ySkew });
        if (hs !== 100) page.pushOperators(P.popGraphicsState());
        return tw;
      }
      var gs = o.opacity != null && o.opacity < 1 ? page.maybeEmbedGraphicsState({ opacity: o.opacity }) : undefined;
      var skew = o.ySkew ? P.toRadians(o.ySkew) : 0, pen = x;
      a.runs.forEach(function (r) {
        var uw = unitWidth(r, font, a), w = uw * size * hs / 100;
        if (!r.t.trim()) { pen += w; return; }
        if (r.cls === 'base') {
          if (hs !== 100) page.pushOperators(P.pushGraphicsState(), P.setCharacterSqueeze(hs));
          page.drawText(r.t, { x: pen, y: o.y, size: size, font: font, color: o.color, opacity: o.opacity, ySkew: o.ySkew });
          if (hs !== 100) page.pushOperators(P.popGraphicsState());
        } else if (r.cls === 'img') drawPicture(page, r, a, pen, o.y, size, o.color, gs, hs, uw);
        else drawVector(page, r, a, pen, o.y, size, o.color, gs, hs, skew);
        pen += w;
      });
      return tw;
    }
    function graphemes(s) {
      if (window.Intl && Intl.Segmenter) { try { return Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(s), function (x) { return x.segment; }); } catch (e) { /* fall through */ } }
      var out = []; Array.from(s).forEach(function (c) { var cp = c.codePointAt(0); if (out.length && (ANYMARK.test(c) || isJoiner(cp) || cp === 0x094D || cp === 0x09CD || cp === 0x0BCD)) out[out.length - 1] += c; else out.push(c); });
      return out;
    }
    function wrap(text, size, font, max, o) {
      var out = [];
      String(text == null ? '' : text).replace(/\r\n?/g, '\n').split('\n').forEach(function (para) {
        var cur = '', start = out.length, pr = T.isRtl(para);
        clean(para).split(/ +/).forEach(function (w) {
          var trial = cur ? cur + ' ' + w : w;
          if (width(trial, size, font, o) <= max) { cur = trial; return; }
          if (cur) out.push(cur);
          cur = '';
          if (width(w, size, font, o) > max) {
            var g = graphemes(w);
            while (g.length && width(g.join(''), size, font, o) > max) {
              var k = g.length - 1; while (k > 1 && width(g.slice(0, k).join(''), size, font, o) > max) k--;
              out.push(g.slice(0, k).join('')); g = g.slice(k);
            }
            w = g.join('');
          }
          cur = w;
        });
        out.push(cur);
        // a wrapped line keeps the direction of its paragraph (an invisible mark tells draw() which way it reads)
        for (var i = start; i < out.length; i++) if (out[i] && T.isRtl(out[i]) !== pr) out[i] = (pr ? '\u200F' : '\u200E') + out[i];
      });
      while (out.length > 1 && out[out.length - 1] === '') out.pop();
      return out;
    }
    async function finish() {
      var list = pending; pending = [];
      for (var i = 0; i < list.length; i++) { var em = await P.PngEmbedder.for(list[i].png); await em.embedIntoContext(doc.context, list[i].ref); }
      // fonts that were loaded for a script but never drawn are left out of the file
      if (doc.fonts) doc.fonts = doc.fonts.filter(function (f) { var mine = KEYS.some(function (k) { return fonts[k] && (fonts[k][400] === f || fonts[k][700] === f); }); return !mine || used.has(f); });
    }
    var save = doc.save;
    doc.save = async function () { await finish(); return save.apply(doc, arguments); };

    T.clean = clean; T.width = width; T.draw = draw; T.wrap = wrap; T.finish = finish;
    T.isRtl = function (text) { return baseLevel(Array.from(clean(text)).map(function (c) { return c.codePointAt(0); }), 'auto') === 1; };
    T.isSimple = function (text, font) { text = clean(text); return !text || analyze(text, font).simple; }; // plain text the page font draws by itself
    T.prepare = function (text, onStatus) { return ensure(text, onStatus || opts.onStatus); };
    T.scripts = function () { return Object.keys(fonts); };
    return T;
  }

  window.PDFText = { load: load, create: create, clean: clean, scripts: SCRIPTS };
})();

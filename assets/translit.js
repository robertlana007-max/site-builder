/* GetToolNest transliteration: turns text in other scripts into Latin letters, in the browser.
   Used by the Transliteration tool and the URL Slug Generator.
   Window.Translit.convert(text, opts) -> string;  Translit.scripts(text) -> ['Cyrillic', ...];
   Chinese needs pinyin-pro (assets/vendor/pinyin-pro), loaded on demand with Translit.loadChinese(base). */
(function () {
  'use strict';
  var T = {};
  function each(str, fn) { str.split(' ').forEach(function (p) { var i = p.indexOf('='); fn(p.slice(0, i), p.slice(i + 1)); }); }
  function table(str) { var o = {}; each(str, function (k, v) { o[k] = v; }); return o; }
  function extend(a, b) { var o = {}; for (var k in a) o[k] = a[k]; for (k in b) o[k] = b[k]; return o; }
  // Keep the case of the source letter: Ж -> Zh, but ЖУК -> ZHUK.
  function withCase(src, out, next, prev) {
    if (!out) return out;
    if (src === src.toLowerCase() || src.toLowerCase() === src.toUpperCase()) return out;
    var allCaps = (next && next !== next.toLowerCase() && next.toLowerCase() !== next.toUpperCase()) || (!next || !/\p{L}/u.test(next)) && prev && prev !== prev.toLowerCase();
    if (allCaps && out.length > 1) return out.toUpperCase();
    var lead = out.match(/^['ʹʺʼʻ‘’"ʾʿ]*/)[0];
    return lead + out.charAt(lead.length).toUpperCase() + out.slice(lead.length + 1);
  }
  function mapLetters(text, map, extra) {
    var out = '', chars = Array.from(text);
    for (var i = 0; i < chars.length; i++) {
      var c = chars[i], lc = c.toLowerCase(), r = extra ? extra(chars, i, lc) : undefined;
      if (r === undefined) r = map[lc];
      if (r === undefined) { out += c; continue; }
      out += withCase(c, r, chars[i + 1], chars[i - 1]);
    }
    return out;
  }

  // ---------------- Cyrillic ----------------
  var CYR_ISO9 = table('а=a б=b в=v г=g ґ=g\u0300 д=d ѓ=ǵ е=e ё=ë є=ê ж=ž з=z ѕ=ẑ и=i і=ì ї=ï й=j ј=ǰ к=k л=l љ=l\u0302 м=m н=n њ=n\u0302 о=o п=p р=r с=s т=t ќ=ḱ ћ=ć у=u ў=ŭ ф=f х=h ц=c ч=č џ=d\u0302 ш=š щ=ŝ ъ=ʺ ы=y ь=ʹ э=è ю=û я=â ђ=đ ғ=ġ қ=ķ ң=ṇ ү=ù ұ=ū һ=ḥ ә=à ө=ô');
  var CYR_SIMPLE = table('а=a б=b в=v г=g ґ=g д=d ѓ=gj е=e ё=yo є=ye ж=zh з=z ѕ=dz и=i і=i ї=yi й=y ј=j к=k л=l љ=lj м=m н=n њ=nj о=o п=p р=r с=s т=t ќ=kj ћ=c у=u ў=w ф=f х=kh ц=ts ч=ch џ=dzh ш=sh щ=shch ъ= ы=y ь= э=e ю=yu я=ya ђ=dj ғ=gh қ=q ң=ng ү=u ұ=u һ=h ә=a ө=o');
  var CYR = {
    ru: {
      simple: CYR_SIMPLE,
      icao: extend(CYR_SIMPLE, table('ё=e й=i ъ=ie ю=iu я=ia')),
      alalc: extend(CYR_SIMPLE, table('ё=ë й=ĭ ц=t\u0361s ъ=ʺ ь=ʹ э=ė ю=i\u0361u я=i\u0361a')),
      iso9: CYR_ISO9
    },
    uk: {
      simple: extend(CYR_SIMPLE, table('г=h и=y є=ie ї=i й=i ю=iu я=ia ь= ’= \'=')),
      icao: extend(CYR_SIMPLE, table('г=h и=y є=ie ї=i й=i ю=iu я=ia ь= ’= \'=')),
      alalc: extend(CYR_SIMPLE, table('г=h ґ=g и=y є=i\u0361e і=i ї=ï й=ĭ ц=t\u0361s ю=i\u0361u я=i\u0361a ь=ʹ')),
      iso9: CYR_ISO9
    },
    be: {
      simple: extend(CYR_SIMPLE, table('г=h ў=w і=i ы=y э=e е=ie ё=io ю=iu я=ia й=j ь=\' ’= \'=')),
      icao: extend(CYR_SIMPLE, table('г=h ў=u і=i е=e ё=e ю=iu я=ia й=i ь=')),
      alalc: extend(CYR_SIMPLE, table('г=h ў=ŭ і=i ё=ë й=ĭ ц=t\u0361s э=ė ю=i\u0361u я=i\u0361a ь=ʹ')),
      iso9: CYR_ISO9
    },
    bg: {
      simple: extend(CYR_SIMPLE, table('х=h щ=sht ъ=a ь=y ю=yu я=ya й=y')),
      icao: extend(CYR_SIMPLE, table('х=h щ=sht ъ=a ь=y ю=yu я=ya й=y')),
      alalc: extend(CYR_SIMPLE, table('щ=sht ъ=ŭ ь=ʹ ц=t\u0361s ю=i\u0361u я=i\u0361a й=ĭ')),
      iso9: CYR_ISO9
    },
    sr: (function () { var s = extend(CYR_SIMPLE, table('ђ=đ ж=ž х=h ц=c ч=č ћ=ć џ=dž ш=š ј=j љ=lj њ=nj')); return { simple: s, icao: extend(s, table('ђ=dj ж=z ч=c ћ=c џ=dz ш=s')), alalc: s, iso9: CYR_ISO9 }; })(),
    mk: (function () { var s = extend(CYR_SIMPLE, table('ѓ=gj ѕ=dz ж=zh х=h ц=c ч=ch ќ=kj џ=dzh ш=sh ј=j љ=lj њ=nj')); return { simple: s, icao: s, alalc: extend(s, table('ѓ=ǵ ќ=ḱ ж=zh ц=t\u0361s џ=dž х=kh')), iso9: CYR_ISO9 }; })()
  };
  function cyrillic(text, o) {
    var lang = CYR[o.cyr] || CYR.ru, map = lang[o.cyrScheme] || lang.simple;
    var startForms = o.cyr === 'uk' && (o.cyrScheme === 'simple' || o.cyrScheme === 'icao') ? table('є=ye ї=yi й=y ю=yu я=ya') : null;
    return mapLetters(text, map, function (chars, i, lc) {
      var prev = chars[i - 1];
      if (startForms && startForms[lc] && !(prev && /[\p{L}'’]/u.test(prev))) return startForms[lc];
      if (o.cyr === 'uk' && lc === 'г' && prev && prev.toLowerCase() === 'з' && map === lang.simple) return 'gh'; // зг -> zgh
      if (o.cyr === 'bg' && o.cyrScheme !== 'iso9' && o.cyrScheme !== 'alalc' && lc === 'я' && prev && prev.toLowerCase() === 'и' && !/\p{L}/u.test(chars[i + 1] || '')) return 'a'; // България -> Bulgaria
      if (o.cyr === 'ru' && o.cyrScheme === 'simple' && lc === 'е' && (!prev || /[\s\-аеёиоуыэюяъь]/i.test(prev.toLowerCase()))) return 'ye';
      return undefined;
    });
  }

  // ---------------- Greek ----------------
  function greek(text, o) {
    var iso = o.greek === 'iso';
    var base = table('α=a β=v γ=g δ=d ε=e ζ=z η=i θ=th ι=i κ=k λ=l μ=m ν=n ξ=x ο=o π=p ρ=r σ=s ς=s τ=t υ=y φ=f χ=ch ψ=ps ω=o ϝ=w ϲ=s');
    if (iso) { base.η = 'ī'; base.ω = 'ō'; }
    var chars = Array.from(text.normalize('NFD')), out = '';
    // keep accents only for ISO 843 (written over the vowel); ELOT 743 transcription drops them
    var VOICED = 'βγδζλμνραεηιουω';
    function low(c) { return c ? c.toLowerCase() : ''; }
    function isAcc(c) { return /[\u0300-\u036f]/.test(c || ''); }
    for (var i = 0; i < chars.length; i++) {
      var c = chars[i], l = low(c);
      if (isAcc(c)) { if (iso && c === '\u0301') out += c; if (c === '\u0308') out += iso ? '\u0308' : ''; continue; }
      if (!(l in base)) { out += c; continue; }
      var j = i + 1; while (isAcc(chars[j])) j++;
      var n = low(chars[j]), nAcc = chars.slice(i + 1, j), diaer = nAcc.indexOf('\u0308') !== -1;
      var k = j + 1; while (isAcc(chars[k])) k++;
      var nn = low(chars[k]), nDiaer = chars.slice(j + 1, k).indexOf('\u0308') !== -1, r = null, used = 0;
      var prevLetter = /\p{L}/u.test(chars[i - 1] || '') || isAcc(chars[i - 1]);
      if (!diaer && !nDiaer) {
        if (l === 'ο' && n === 'υ') { r = 'ou'; used = 1; }
        else if ((l === 'α' || l === 'ε' || l === 'η') && n === 'υ') { r = (l === 'α' ? 'a' : l === 'ε' ? 'e' : iso ? 'ī' : 'i') + (iso ? 'y' : (nn && VOICED.indexOf(nn) !== -1 ? 'v' : 'f')); used = 1; }
        else if (!iso && (l === 'α' || l === 'ε' || l === 'ο') && n === 'ι') { r = l === 'α' ? 'ai' : l === 'ε' ? 'ei' : 'oi'; used = 1; }
        else if (l === 'γ' && (n === 'γ' || n === 'κ' || n === 'ξ' || n === 'χ')) { r = { γ: 'ng', κ: 'gk', ξ: 'nx', χ: 'nch' }[n]; used = 1; }
        else if (!iso && l === 'μ' && n === 'π') { r = prevLetter && /\p{L}/u.test(chars[k] || '') ? 'mp' : 'b'; used = 1; }
      }
      if (r == null) r = base[l];
      var srcUpper = c !== l, nextUpper = chars[j] && chars[j] !== low(chars[j]);
      if (srcUpper) r = (nextUpper || (used && chars[j] !== n)) && r.length > 1 ? r.toUpperCase() : r.charAt(0).toUpperCase() + r.slice(1);
      out += r;
      if (used) { if (iso) out += chars.slice(j + 1, k).join(''); i = k - 1; } else { if (iso) out += nAcc.join(''); i = j - 1; }
    }
    return out.normalize('NFC');
  }

  // ---------------- Arabic, Persian, Urdu ----------------
  var AR_FULL = table('ء=ʾ أ=ʾ إ=ʾ ؤ=ʾ ئ=ʾ آ=ʾā ب=b ت=t ث=th ج=j ح=ḥ خ=kh د=d ذ=dh ر=r ز=z س=s ش=sh ص=ṣ ض=ḍ ط=ṭ ظ=ẓ ع=ʿ غ=gh ف=f ق=q ك=k ل=l م=m ن=n ه=h ة=h ى=á پ=p چ=ch ژ=zh گ=g ک=k ٹ=ṭ ڈ=ḍ ڑ=ṛ ں=n ھ=h ۃ=h ڤ=v ﻻ=lā ہ=h ۂ=h ۀ=h ې=e ۆ=o ڭ=ng ڕ=r ڵ=ll ۇ=u ۋ=v');
  var AR_SIMPLE = table('ء=\' أ=a إ=i ؤ=\' ئ=\' آ=a ب=b ت=t ث=th ج=j ح=h خ=kh د=d ذ=dh ر=r ز=z س=s ش=sh ص=s ض=d ط=t ظ=z ع=\' غ=gh ف=f ق=q ك=k ل=l م=m ن=n ه=h ة=a ى=a پ=p چ=ch ژ=zh گ=g ک=k ٹ=t ڈ=d ڑ=r ں=n ھ=h ۃ=a ڤ=v ﻻ=la ہ=h ۂ=h ۀ=h ې=e ۆ=o ڭ=ng ڕ=r ڵ=ll ۇ=u ۋ=v');
  function arabic(text, o) {
    var full = o.arabic !== 'simple', M = full ? AR_FULL : AR_SIMPLE;
    var LONG = full ? { 'ا': 'ā', 'و': 'ū', 'ي': 'ī', 'ی': 'ī', 'ے': 'ē' } : { 'ا': 'a', 'و': 'u', 'ي': 'i', 'ی': 'i', 'ے': 'e' };
    var HARAKA = { '\u064e': 'a', '\u0650': 'i', '\u064f': 'u', '\u064b': 'an', '\u064d': 'in', '\u064c': 'un', '\u0670': full ? 'ā' : 'a' };
    var chars = Array.from(text.replace(/ـ/g, '')), out = '', AL = /\p{Script=Arabic}/u;
    function isL(c) { return c && AL.test(c) && !HARAKA[c] && c !== '\u0651' && c !== '\u0652' && !/[٠-٩۰-۹،؛؟٪]/.test(c); }
    for (var i = 0; i < chars.length; i++) {
      var c = chars[i], prev = chars[i - 1], next = chars[i + 1], wordStart = !isL(prev) && !HARAKA[prev];
      if (/[٠-٩]/.test(c)) { out += String(c.charCodeAt(0) - 0x660); continue; }
      if (/[۰-۹]/.test(c)) { out += String(c.charCodeAt(0) - 0x6F0); continue; }
      if (c === '،') { out += ','; continue; } if (c === '؛') { out += ';'; continue; } if (c === '؟') { out += '?'; continue; } if (c === '٪') { out += '%'; continue; }
      if (HARAKA[c]) { out += HARAKA[c]; continue; }
      if (c === '\u0652') continue; // sukun
      if (c === '\u0651') { var m = out.match(/(sh|th|kh|dh|gh|zh|ch|[^aiuāīū\s])([aiu]?)$/); if (m) out = out.slice(0, -m[0].length) + m[1] + m[1] + m[2]; continue; } // shadda doubles the consonant
      // the article al- at the start of a word
      if (wordStart && c === 'ا' && next === 'ل' && isL(chars[i + 2])) { out += 'al-'; i++; continue; }
      if (c === 'ا') { out += wordStart ? (full ? '' : 'a') : LONG[c]; continue; }
      if (c === 'و' || c === 'ي' || c === 'ی' || c === 'ے') {
        var cons = c === 'و' ? 'w' : 'y';
        if (c === 'ے') { out += LONG[c]; continue; }
        if (wordStart || HARAKA[next] || next === 'ا' || next === '\u0651') { out += cons; continue; }
        if (prev === '\u064e') { out += cons; continue; } // aw, ay diphthongs
        out += isL(prev) || prev === '\u0650' || prev === '\u064f' ? LONG[c] : cons; continue;
      }
      if (c === 'ة') { out += full ? (/[aāiu]$/.test(out) ? '' : 'a') + (isL(next) ? 't' : 'h') : 'a'; continue; }
      if (M[c] !== undefined) { out += (wordStart && /^[ʾ']/.test(M[c]) && !full) ? M[c].slice(1) : (wordStart && M[c] === 'ʾ' ? '' : M[c]); continue; }
      out += c;
    }
    return out;
  }

  // ---------------- Hebrew ----------------
  function hebrew(text, o) {
    var full = o.hebrew !== 'simple';
    var CON = table('א=ʾ ב=v ג=g ד=d ה=h ו=v ז=z ח=ḥ ט=t י=y כ=kh ך=kh ל=l מ=m ם=m נ=n ן=n ס=s ע=ʿ פ=f ף=f צ=ts ץ=ts ק=k ר=r ש=sh ת=t');
    if (!full) { CON['א'] = ''; CON['ע'] = ''; CON['ח'] = 'ch'; }
    var DAGESH = { 'ב': 'b', 'כ': 'k', 'ך': 'k', 'פ': 'p', 'ף': 'p' };
    var VOW = { '\u05b0': 'e', '\u05b1': 'e', '\u05b2': 'a', '\u05b3': 'o', '\u05b4': 'i', '\u05b5': 'e', '\u05b6': 'e', '\u05b7': 'a', '\u05b8': 'a', '\u05b9': 'o', '\u05ba': 'o', '\u05bb': 'u', '\u05c7': 'o' };
    var chars = Array.from(text.normalize('NFD')), out = '';
    function heb(c) { return c && /[\u05D0-\u05EA]/.test(c); }
    // is the word around position i written with vowel points?
    function pointedAt(i) { var a = i, b = i; while (a > 0 && /[\u0591-\u05F4]/.test(chars[a - 1])) a--; while (b < chars.length && /[\u0591-\u05F4]/.test(chars[b])) b++; return /[\u05B0-\u05BC\u05C1\u05C2\u05C7]/.test(chars.slice(a, b).join('')); }
    for (var i = 0; i < chars.length; i++) {
      var c = chars[i];
      // Text without vowel points: read vav and yod inside a word as the vowels o/u and i, as they usually are.
      if ((c === 'ו' || c === 'י') && heb(chars[i - 1]) && !pointedAt(i)) {
        if (c === 'ו' && chars[i + 1] === 'ו') { out += 'v'; i++; continue; }
        if (c === 'י' && chars[i + 1] === 'י') { out += 'y'; i++; continue; }
        out += c === 'ו' ? 'o' : 'i'; continue;
      }
      if (!CON.hasOwnProperty(c)) {
        if (c === '\u05bc' || c === '\u05c1' || c === '\u05c2' || c === '\u05bf' || c === '\u05bd') continue;
        if (VOW[c]) { if (c === '\u05b0' && !(chars[i - 1] && i <= 1 || /\s/.test(chars[i - 2] || ' '))) continue; out += VOW[c]; continue; }
        if (c === '־') { out += '-'; continue; } if (c === '׳') { out += '\''; continue; } if (c === '״') { out += '"'; continue; }
        out += c; continue;
      }
      var marks = [], j = i + 1;
      while (chars[j] && /[\u0591-\u05c7]/.test(chars[j])) marks.push(chars[j++]);
      var r = CON[c], first = i === 0 || !/[א-ת\u0591-\u05c7]/.test(chars[i - 1]);
      if (marks.indexOf('\u05bc') !== -1 && DAGESH[c]) r = DAGESH[c];
      else if (first && DAGESH[c] && c !== 'ך' && c !== 'ף') r = DAGESH[c]; // b, k, p at the start of a word
      if (c === 'ש' && marks.indexOf('\u05c2') !== -1) r = 's';
      if (c === 'ו' && marks.indexOf('\u05b9') !== -1 && marks.length === 1) { out += 'o'; i = j - 1; continue; }
      if (c === 'ו' && marks.indexOf('\u05bc') !== -1 && marks.length === 1 && i > 0 && /[א-ת\u0591-\u05c7]/.test(chars[i - 1])) { out += 'u'; i = j - 1; continue; }
      if (first && (r === 'ʾ' || r === 'ʿ')) r = '';
      out += r;
      marks.forEach(function (mk) { if (VOW[mk] && !(mk === '\u05b0' && !first)) out += VOW[mk]; });
      i = j - 1;
    }
    return out;
  }

  // ---------------- Devanagari ----------------
  var DEV_C = table('क=k ख=kh ग=g घ=gh ङ=ṅ च=c छ=ch ज=j झ=jh ञ=ñ ट=ṭ ठ=ṭh ड=ḍ ढ=ḍh ण=ṇ त=t थ=th द=d ध=dh न=n ऩ=ṉ प=p फ=ph ब=b भ=bh म=m य=y र=r ऱ=ṟ ल=l ळ=ḷ ऴ=ḻ व=v श=ś ष=ṣ स=s ह=h क\u093c=q ख\u093c=k\u035fh ग\u093c=ġ ज\u093c=z ड\u093c=ṛ ढ\u093c=ṛh फ\u093c=f य\u093c=ẏ');
  var DEV_V = table('अ=a आ=ā इ=i ई=ī उ=u ऊ=ū ऋ=ṛ ॠ=ṝ ऌ=ḷ ॡ=ḹ ए=e ऐ=ai ओ=o औ=au ऍ=ê ऑ=ô ऎ=e ऒ=o');
  var DEV_M = table('ा=ā ि=i ी=ī \u0941=u \u0942=ū \u0943=ṛ \u0944=ṝ \u0962=ḷ \u0963=ḹ \u0947=e \u0948=ai ो=o ौ=au \u0945=ê ॉ=ô \u0946=e ॊ=o');
  function devanagari(text, o) {
    var scheme = o.indic || 'iast', chars = Array.from(text.normalize('NFC')), out = '', HALANT = '\u094d';
    var iso = scheme === 'iso', simple = scheme === 'hindi';
    function fix(s) {
      if (iso) return s.replace(/ṛ/g, 'r\u0325').replace(/ṝ/g, 'r\u0325\u0304').replace(/ḷ(?!h)/g, 'l\u0325').replace(/^e$/, 'ē').replace(/^o$/, 'ō');
      if (simple) return s.replace(/ā/g, 'a').replace(/ī/g, 'i').replace(/ū/g, 'u').replace(/^ṛ$/, 'ri').replace(/ṝ/g, 'ri').replace(/ṭ/g, 't').replace(/ḍ/g, 'd').replace(/ṇ/g, 'n').replace(/ṅ|ñ/g, 'n').replace(/ś|ṣ/g, 'sh').replace(/^ch$/, 'chh').replace(/^c$/, 'ch').replace(/k\u035fh/g, 'kh').replace(/ġ/g, 'gh').replace(/ẏ/g, 'y').replace(/ê/g, 'e').replace(/ô/g, 'o').replace(/ṛh/g, 'rh').replace(/ṛ/g, 'r').replace(/ḷ/g, 'l');
      return s;
    }
    var nukta = { 'क': 'क\u093c', 'ख': 'ख\u093c', 'ग': 'ग\u093c', 'ज': 'ज\u093c', 'ड': 'ड\u093c', 'ढ': 'ढ\u093c', 'फ': 'फ\u093c', 'य': 'य\u093c', 'न': 'ऩ', 'र': 'ऱ', 'ळ': 'ऴ' };
    var word = '', pendingA = false;
    function endWord() {
      if (pendingA && simple && word.length > 1) { /* Hindi drops the final inherent a */ }
      else if (pendingA) word += 'a';
      out += word; word = ''; pendingA = false;
    }
    for (var i = 0; i < chars.length; i++) {
      var c = chars[i];
      if (chars[i + 1] === '\u093c' && nukta[c]) { c = nukta[c]; i++; }
      if (DEV_C[c]) {
        if (pendingA) word += 'a';
        var cons = fix(DEV_C[c]);
        // ISO 15919 and IAST separate a+i / a+u that are not diphthongs with a colon / diaeresis; skipped for readability
        word += cons; pendingA = true; continue;
      }
      if (c === HALANT) { pendingA = false; continue; }
      if (DEV_M[c]) { word += fix(DEV_M[c]); pendingA = false; continue; }
      if (DEV_V[c]) { if (pendingA) word += 'a'; word += fix(DEV_V[c]); pendingA = false; continue; }
      if (c === '\u0902') { if (pendingA) word += 'a'; pendingA = false; word += simple ? 'n' : iso ? 'ṁ' : 'ṃ'; continue; }
      if (c === '\u0901') { if (pendingA) word += 'a'; pendingA = false; word += simple ? 'n' : 'm\u0310'; continue; }
      if (c === 'ः') { if (pendingA) word += 'a'; pendingA = false; word += simple ? 'h' : 'ḥ'; continue; }
      if (c === 'ऽ') { if (pendingA) word += 'a'; pendingA = false; word += simple ? '' : '\''; continue; }
      if (c === 'ॐ') { endWord(); out += simple ? 'om' : iso ? 'ōṁ' : 'oṃ'; continue; }
      if (c === '\u093c') continue;
      endWord();
      if (c === '।' || c === '॥') { out += '.'; continue; }
      if (/[०-९]/.test(c)) { out += String(c.charCodeAt(0) - 0x966); continue; }
      out += c;
    }
    endWord();
    return out;
  }

  // ---------------- Thai (approximate RTGS) ----------------
  var TH_I = table('ก=k ข=kh ฃ=kh ค=kh ฅ=kh ฆ=kh ง=ng จ=ch ฉ=ch ช=ch ซ=s ฌ=ch ญ=y ฎ=d ฏ=t ฐ=th ฑ=th ฒ=th ณ=n ด=d ต=t ถ=th ท=th ธ=th น=n บ=b ป=p ผ=ph ฝ=f พ=ph ฟ=f ภ=ph ม=m ย=y ร=r ล=l ว=w ศ=s ษ=s ส=s ห=h ฬ=l อ= ฮ=h');
  var TH_F = table('ก=k ข=k ฃ=k ค=k ฅ=k ฆ=k ง=ng จ=t ฉ=t ช=t ซ=t ฌ=t ญ=n ฎ=t ฏ=t ฐ=t ฑ=t ฒ=t ณ=n ด=t ต=t ถ=t ท=t ธ=t น=n บ=p ป=p ผ=p ฝ=p พ=p ฟ=p ภ=p ม=m ย=i ร=n ล=n ว=o ศ=t ษ=t ส=t ห= ฬ=n อ= ฮ=');
  function thai(text) {
    var s = text.replace(/[\u0e48-\u0e4b\u0e47\u0e4d\u0e4e]/g, ''); // tone marks and the short-vowel sign
    s = s.replace(/[ก-ฮ]\u0e4c|[ก-ฮ][\u0e34\u0e38]\u0e4c/g, ''); // letters cancelled by the thanthakhat
    var out = '', i = 0, C = /[ก-ฮ]/, chars = Array.from(s);
    function isC(c) { return c && C.test(c); }
    function initial(k) { // read an initial consonant or a cluster like กร, ปล, ขว, or a leading ห / อ
      var a = chars[k], b = chars[k + 1];
      if (a === 'ห' && /[งญนมยรลว]/.test(b || '')) return { s: TH_I[b], n: 2 };
      if (a === 'อ' && b === 'ย') return { s: 'y', n: 2 };
      if (isC(b) && /[รลว]/.test(b) && /[กขคตปผพ]/.test(a) && (chars[k + 2] && !isC(chars[k + 2]) || chars[k + 2] === 'อ')) return { s: TH_I[a] + TH_I[b], n: 2 };
      return { s: TH_I[a], n: 1 };
    }
    while (i < chars.length) {
      var c = chars[i];
      if (/[๐-๙]/.test(c)) { out += String(c.charCodeAt(0) - 0xE50); i++; continue; }
      if (c === 'ๆ') { var m = out.match(/(\S+)\s*$/); out += m ? ' ' + m[1] : ''; i++; continue; }
      if (c === 'ฯ') { i++; continue; }
      var lead = /[เแโใไ]/.test(c) ? c : '';
      var k = i + (lead ? 1 : 0);
      if (!isC(chars[k]) && !(chars[k] === 'ฤ' || chars[k] === 'ฦ')) { out += lead ? { 'เ': 'e', 'แ': 'ae', 'โ': 'o', 'ใ': 'ai', 'ไ': 'ai' }[lead] : c; i++; continue; }
      if (chars[k] === 'ฤ') { out += 'rue'; i = k + 1; continue; }
      if (chars[k] === 'ฦ') { out += 'lue'; i = k + 1; continue; }
      var ini = initial(k); k += ini.n;
      var v = '', a = chars[k], b = chars[k + 1], c3 = chars[k + 2];
      if (lead === 'เ') {
        if (a === 'า' && b === 'ะ') { v = 'o'; k += 2; } else if (a === 'า') { v = 'ao'; k++; }
        else if (a === '\u0e35' && b === 'ย') { v = 'ia'; k += 2; if (c3 === 'ะ') k++; }
        else if (a === '\u0e37' && b === 'อ') { v = 'uea'; k += 2; if (c3 === 'ะ') k++; }
        else if (a === 'อ') { v = 'oe'; k++; if (b === 'ะ') k++; }
        else if (a === '\u0e34') { v = 'oe'; k++; }
        else if (a === 'ะ') { v = 'e'; k++; } else v = 'e';
      } else if (lead === 'แ') { v = 'ae'; if (a === 'ะ') k++; }
      else if (lead === 'โ') { v = 'o'; if (a === 'ะ') k++; }
      else if (lead) v = 'ai';
      else if (a === '\u0e31' && b === 'ว') { v = 'ua'; k += 2; if (c3 === 'ะ') k++; }
      else if (a === '\u0e31') { v = 'a'; k++; }
      else if (a === 'ะ' || a === 'า') { v = 'a'; k++; }
      else if (a === 'ำ') { v = 'am'; k++; }
      else if (a === '\u0e34' || a === '\u0e35') { v = 'i'; k++; }
      else if (a === '\u0e36' || a === '\u0e37') { v = 'ue'; k++; if (a === '\u0e37' && chars[k] === 'อ') k++; }
      else if (a === '\u0e38' || a === '\u0e39') { v = 'u'; k++; }
      else if (a === 'อ' && !isC(b)) { v = 'o'; k++; }
      else if (a === 'อ' && isC(b) && !/[ะา\u0e34\u0e35\u0e36\u0e37\u0e38\u0e39เแโใไ\u0e31]/.test(chars[k + 2] || '')) { v = 'o'; k++; }
      else if (a === 'ว' && isC(b) && !/[ะา\u0e34\u0e35\u0e36\u0e37\u0e38\u0e39\u0e31]/.test(chars[k + 2] || '')) { v = 'ua'; k++; }
      else if (isC(a) && !/[ะา\u0e34\u0e35\u0e36\u0e37\u0e38\u0e39\u0e31\u0e48อ]/.test(b || '') && !/[เแโใไ]/.test(b || '')) { v = 'o'; } // hidden o: คน -> khon
      else if (isC(a)) v = 'a';
      else v = ini.s ? 'a' : '';
      var fin = '';
      var f = chars[k];
      if (isC(f) && !/[ะา\u0e34\u0e35\u0e36\u0e37\u0e38\u0e39\u0e31ำ]/.test(chars[k + 1] || '')) {
        fin = v === 'ai' && f === 'ย' ? '' : TH_F[f]; // ไทย -> thai
        k++;
      }
      if (v === 'o' && fin === 'o') v = '';
      var syl = ini.s + v + fin;
      if (out && /[a-z]$/.test(out) && /^[aeiou]/.test(syl)) out += '-';
      out += syl; i = k;
    }
    return out;
  }

  // ---------------- Korean (Revised Romanization) ----------------
  var KO_I = ['g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's', 'ss', '', 'j', 'jj', 'ch', 'k', 't', 'p', 'h'];
  var KO_V = ['a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa', 'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i'];
  // final consonant: sound before a pause/consonant, and what moves to the next syllable before a vowel
  var KO_F = [['', ''], ['k', 'g'], ['k', 'kk'], ['k', 'ks'], ['n', 'n'], ['n', 'nj'], ['n', 'n'], ['t', 'd'], ['l', 'r'], ['k', 'lg'], ['m', 'lm'], ['l', 'lb'], ['l', 'ls'], ['l', 'lt'], ['p', 'lp'], ['l', 'r'], ['m', 'm'], ['p', 'b'], ['p', 'ps'], ['t', 's'], ['t', 'ss'], ['ng', 'ng'], ['t', 'j'], ['t', 'ch'], ['k', 'k'], ['t', 't'], ['p', 'p'], ['t', '']];
  function korean(text) {
    var chars = Array.from(text), out = '';
    function dec(c) { var n = c ? c.charCodeAt(0) - 0xAC00 : -1; if (n < 0 || n > 11171) return null; return { i: Math.floor(n / 588), v: Math.floor(n % 588 / 28), f: n % 28 }; }
    for (var x = 0; x < chars.length; x++) {
      var s = dec(chars[x]);
      if (!s) { out += chars[x]; continue; }
      var prev = dec(chars[x - 1]), ini = KO_I[s.i];
      if (prev && prev.f) {
        var pf = prev.f;
        if (s.i === 11) ini = ''; // handled by the liaison below
        else if (s.i === 5) ini = (pf === 8 || pf === 4) ? 'l' : 'n'; // ㄹ after ㄹ/ㄴ is l, after others n
        else if (s.i === 2 && pf === 8) ini = 'l';
      }
      out += ini + KO_V[s.v];
      if (s.f) {
        var nx = dec(chars[x + 1]), f = KO_F[s.f];
        if (nx && nx.i === 11) out += f[1];               // liaison: 한국어 -> hangugeo
        else if (nx && (nx.i === 2 || nx.i === 6)) {        // nasal assimilation: 국민 -> gungmin, 합니다 -> hamnida
          var snd = f[0]; out += snd === 'k' ? 'ng' : snd === 'p' ? 'm' : snd === 't' ? 'n' : snd === 'l' && nx.i === 2 ? 'l' : snd;
        } else if (nx && nx.i === 5) { var sd = f[0]; out += sd === 'n' ? 'l' : sd === 'k' ? 'ng' : sd === 'p' ? 'm' : sd === 't' ? 'n' : sd; }
        else out += f[0];
      }
    }
    // a hyphen where reading could be ambiguous is optional in RR; we leave syllables joined
    return out;
  }

  // ---------------- Japanese kana (Hepburn / Kunrei) ----------------
  var KANA = table('あ=a い=i う=u え=e お=o か=ka き=ki く=ku け=ke こ=ko さ=sa し=shi す=su せ=se そ=so た=ta ち=chi つ=tsu て=te と=to な=na に=ni ぬ=nu ね=ne の=no は=ha ひ=hi ふ=fu へ=he ほ=ho ま=ma み=mi む=mu め=me も=mo や=ya ゆ=yu よ=yo ら=ra り=ri る=ru れ=re ろ=ro わ=wa ゐ=i ゑ=e を=o ん=n が=ga ぎ=gi ぐ=gu げ=ge ご=go ざ=za じ=ji ず=zu ぜ=ze ぞ=zo だ=da ぢ=ji づ=zu で=de ど=do ば=ba び=bi ぶ=bu べ=be ぼ=bo ぱ=pa ぴ=pi ぷ=pu ぺ=pe ぽ=po ぁ=a ぃ=i ぅ=u ぇ=e ぉ=o ゔ=vu ゎ=wa ゕ=ka ゖ=ke');
  var YOON = table('きゃ=kya きゅ=kyu きょ=kyo しゃ=sha しゅ=shu しょ=sho ちゃ=cha ちゅ=chu ちょ=cho にゃ=nya にゅ=nyu にょ=nyo ひゃ=hya ひゅ=hyu ひょ=hyo みゃ=mya みゅ=myu みょ=myo りゃ=rya りゅ=ryu りょ=ryo ぎゃ=gya ぎゅ=gyu ぎょ=gyo じゃ=ja じゅ=ju じょ=jo ぢゃ=ja ぢゅ=ju ぢょ=jo びゃ=bya びゅ=byu びょ=byo ぴゃ=pya ぴゅ=pyu ぴょ=pyo ' +
    'ふぁ=fa ふぃ=fi ふぇ=fe ふぉ=fo てぃ=ti でぃ=di とぅ=tu どぅ=du でゅ=dyu うぃ=wi うぇ=we うぉ=wo ゔぁ=va ゔぃ=vi ゔぇ=ve ゔぉ=vo しぇ=she じぇ=je ちぇ=che つぁ=tsa つぃ=tsi つぇ=tse つぉ=tso いぇ=ye くぁ=kwa ぐぁ=gwa');
  var KUNREI = table('shi=si chi=ti tsu=tu fu=hu ji=zi sha=sya shu=syu sho=syo cha=tya chu=tyu cho=tyo ja=zya ju=zyu jo=zyo');
  function kana(text, o) {
    var kun = o.ja === 'kunrei', long = o.jaLong || 'macron';
    // katakana -> hiragana (same sounds)
    var h = text.replace(/[ァ-ヶ]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0x60); }).replace(/ヷ/g, 'ゔぁ').replace(/ヸ/g, 'ゔぃ').replace(/ヹ/g, 'ゔぇ').replace(/ヺ/g, 'ゔぉ');
    var chars = Array.from(h), out = '', sokuon = false, lastV = '', origin = Array.from(text);
    function emit(r) {
      if (kun && KUNREI[r]) r = KUNREI[r];
      if (sokuon) { out += r.indexOf('ch') === 0 ? 't' : r.charAt(0); sokuon = false; } // っち -> tchi
      out += r; lastV = r.slice(-1);
    }
    for (var i = 0; i < chars.length; i++) {
      var c = chars[i], two = c + (chars[i + 1] || '');
      if (YOON[two]) { emit(YOON[two]); i++; continue; }
      if (c === 'っ') { if (KANA[chars[i + 1]] || YOON[chars[i + 1] + (chars[i + 2] || '')]) sokuon = true; continue; }
      if (c === 'ー') { if (/[aeiou]$/.test(out)) out = long === 'macron' ? out.slice(0, -1) + { a: 'ā', i: 'ī', u: 'ū', e: 'ē', o: 'ō' }[out.slice(-1)] : long === 'double' ? out + out.slice(-1) : out; continue; }
      if (c === 'ん') { var nx = chars[i + 1] || '', nr = KANA[nx] || ''; out += 'n' + (/^[aeiouy]/.test(nr) ? '\'' : ''); lastV = ''; continue; }
      if (KANA[c] !== undefined) {
        var r = KANA[c];
        // long vowels written with kana: おう / おお / うう -> ō / ū  (only within a word written in hiragana; katakana uses ー)
        var isKatakana = /[ァ-ヶ]/.test(origin[i]);
        if (long !== 'double' && !isKatakana && ((c === 'う' && /o$|u$/.test(out) && lastV) || (c === 'お' && /o$/.test(out) && lastV))) {
          if (long === 'macron') out = out.slice(0, -1) + (out.slice(-1) === 'o' ? 'ō' : 'ū');
          lastV = ''; continue;
        }
        // the particles は and へ after kanji, and in greetings, are read wa and e
        if ((c === 'は' || c === 'へ') && (HAN.test((i ? origin[i - 1] : o._before) || '') && !/[\u3041-\u309F]/.test(origin[i + 1] || '') || c === 'は' && /(こんにち|こんばん)$/.test(h.slice(0, i)))) r = c === 'は' ? 'wa' : 'e';
        emit(r); continue;
      }
      out += c === '。' ? '.' : c === '、' ? ',' : c === '「' || c === '」' ? '"' : c === '・' ? ' ' : c === '\u3000' ? ' ' : c; lastV = '';
    }
    return out;
  }

  // ---------------- Georgian and Armenian ----------------
  var KA = table('ა=a ბ=b გ=g დ=d ე=e ვ=v ზ=z თ=t ი=i კ=k\' ლ=l მ=m ნ=n ო=o პ=p\' ჟ=zh რ=r ს=s ტ=t\' უ=u ფ=p ქ=k ღ=gh ყ=q\' შ=sh ჩ=ch ც=ts ძ=dz წ=ts\' ჭ=ch\' ხ=kh ჯ=j ჰ=h');
  var HY = table('ա=a բ=b գ=g դ=d ե=e զ=z է=e ը=y թ=t ժ=zh ի=i լ=l խ=kh ծ=ts կ=k հ=h ձ=dz ղ=gh ճ=ch մ=m յ=y ն=n շ=sh ո=o չ=ch պ=p ջ=j ռ=r ս=s վ=v տ=t ր=r ց=ts փ=p ք=k և=ev օ=o ֆ=f');
  function armenian(text) {
    return mapLetters(text.replace(/ու/g, 'u').replace(/ՈՒ|Ու/g, function (m) { return m === 'ՈՒ' ? 'U' : 'U'; }), HY, function (ch, i, lc) {
      var start = !(ch[i - 1] && /\p{L}/u.test(ch[i - 1]));
      if (start && lc === 'ե') return 'ye';
      if (start && lc === 'ո') return 'vo';
      return undefined;
    }).replace(/։/g, '.');
  }

  // ---------------- Latin letters that do not split into base + accent ----------------
  var LATIN = table('ß=ss ẞ=SS æ=ae Æ=AE ø=o Ø=O đ=d Đ=D ł=l Ł=L ŀ=l þ=th Þ=Th ð=d Ð=D œ=oe Œ=OE ı=i ŋ=ng ħ=h Ħ=H ĸ=q ſ=s ə=e Ə=E ɛ=e ɔ=o ƒ=f ʻ=\' ʼ=\' ĳ=ij Ĳ=IJ');
  function toAscii(s, german) {
    if (german) s = s.replace(/[äöüÄÖÜ]/g, function (c) { return { ä: 'ae', ö: 'oe', ü: 'ue', Ä: 'Ae', Ö: 'Oe', Ü: 'Ue' }[c]; });
    s = s.replace(/[ßẞæÆøØđĐłŁŀþÞðÐœŒıŋħĦĸſəƏɛɔƒʻʼĳĲ]/g, function (c) { return LATIN[c]; });
    s = s.normalize('NFD').replace(/[\u0300-\u036f\u1ab0-᫿\u1dc0-\u1dff\u20d0-⃿\ufe20-\ufe2f]/g, '');
    s = s.replace(/[ʹʺʾʿ]/g, '\'').replace(/[‘’‚‛′]/g, '\'').replace(/[“”„‟″]/g, '"').replace(/[‐‑‒–—―]/g, '-').replace(/…/g, '...');
    return s.normalize('NFC');
  }

  // ---------------- dispatcher ----------------
  var SCRIPTS = [
    ['Cyrillic', /[Ѐ-ԯᲀ-᲏\u2de0-\u2dffꙀ-\ua69f]/u, cyrillic],
    ['Greek', /[Ͱ-Ͽἀ-῿]/u, greek],
    ['Arabic', /[\u0600-ۿݐ-ݿࢠ-\u08ffﭐ-﷿ﹰ-\ufeff]/u, arabic],
    ['Hebrew', /[֐-׿יִ-ﭏ]/u, hebrew],
    ['Devanagari', /[\u0900-ॿ\ua8e0-\ua8ff]/u, devanagari],
    ['Thai', /[฀-๿]/u, thai],
    ['Korean', /[가-힣]/u, korean],
    ['Japanese kana', /[ぁ-ゟ゠-ヿㇰ-ㇿ]/u, kana],
    ['Georgian', /[Ⴀ-ჿᲐ-Ჿ]/u, function (t) { return mapLetters(t, KA); }],
    ['Armenian', /[԰-֏]/u, armenian],
    ['Chinese', /[㐀-䶿一-鿿豈-﫿]|[\u{20000}-\u{3FFFF}]/u, null]
  ];
  // Group the text into runs of the same script (spaces, digits and punctuation stay with the run they are in).
  function scriptOf(c) { for (var i = 0; i < SCRIPTS.length; i++) if (SCRIPTS[i][1].test(c)) return i; return -1; }
  var HAN = /[㐀-䶿一-鿿豈-﫿]|[\u{20000}-\u{3FFFF}]/u;
  T.hasKana = function (t) { return /[ぁ-ゟ゠-ヿ]/.test(t); };
  T.hasHan = function (t) { return HAN.test(t); };
  T.scripts = function (text) {
    var seen = {}, list = [];
    Array.from(text).forEach(function (c) { var s = scriptOf(c); if (s !== -1 && !seen[s]) { seen[s] = 1; list.push(SCRIPTS[s][0]); } });
    if (/[^\u0000-\u007f]/.test(text.replace(/[\s\p{P}\p{S}\p{N}]/gu, '')) && list.length === 0 && /[À-ɏḀ-ỿ]/.test(text)) list.push('Latin with accents');
    return list;
  };
  T.chineseReady = function () { return !!window.pinyinPro; };
  var zhP = null;
  T.loadChinese = function (base) {
    if (window.pinyinPro) return Promise.resolve();
    if (zhP) return zhP;
    zhP = new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = base + 'pinyin-pro/pinyin-pro.min.js';
      s.onload = function () { window.pinyinPro ? res() : rej(new Error('load')); };
      s.onerror = function () { zhP = null; s.remove(); rej(new Error('net')); };
      document.head.appendChild(s);
    });
    return zhP;
  };
  function chinese(run, o) {
    if (!window.pinyinPro) return run;
    var arr = window.pinyinPro.pinyin(run, { toneType: o.zh === 'num' ? 'num' : o.zh === 'none' ? 'none' : 'symbol', type: 'array', nonZh: 'consecutive', v: o.zh === 'none' });
    var out = '';
    arr.forEach(function (p, i) {
      if (out && /[\p{L}\p{N}]$/u.test(out) && /^[\p{L}\p{N}]/u.test(p)) out += ' ';
      out += p;
    });
    return out.replace(/，/g, ', ').replace(/。/g, '. ').replace(/！/g, '! ').replace(/？/g, '? ').replace(/：/g, ': ').replace(/；/g, '; ').replace(/（/g, ' (').replace(/）/g, ') ').replace(/、/g, ', ').replace(/[“”]/g, '"').replace(/ +/g, ' ').replace(/ ([,.!?:;)])/g, '$1');
  }
  T.convert = function (text, o) {
    o = o || {};
    var kanaText = T.hasKana(text), out = '', chars = Array.from(text), i = 0;
    while (i < chars.length) {
      var s = scriptOf(chars[i]);
      if (s === -1) { var j0 = i; while (i < chars.length && scriptOf(chars[i]) === -1) i++; out += chars.slice(j0, i).join(''); continue; }
      var j = i;
      // a run continues over spaces/punctuation when the same script follows
      while (j < chars.length) {
        var sj = scriptOf(chars[j]);
        if (sj === s || (sj === -1 && /[\u0300-\u036f\u064b-\u0652\u0670\u05b0-\u05c7\u093c-\u094d\u0e31-\u0e4e]/.test(chars[j]))) { j++; continue; }
        if (sj === -1 && /[\s\-'’]/.test(chars[j])) { var k = j; while (k < chars.length && /[\s\-'’]/.test(chars[k])) k++; if (scriptOf(chars[k]) === s) { j = k; continue; } }
        break;
      }
      var run = chars.slice(i, j).join(''), name = SCRIPTS[s][0];
      if (name === 'Chinese') {
        // In Japanese text these are kanji, which need a dictionary: keep them, set apart by spaces.
        if (kanaText) out += (out && !/\s$/.test(out) ? ' ' : '') + run + (chars[j] && !/\s/.test(chars[j]) ? ' ' : '');
        else out += (out && /[\p{L}\p{N}]$/u.test(out) ? ' ' : '') + chinese(run, o) + (chars[j] && /[\p{L}\p{N}]/u.test(chars[j]) ? ' ' : '');
      }
      else {
        var conv = SCRIPTS[s][2](run, name === 'Japanese kana' ? Object.assign({}, o, { _before: chars[i - 1] || '' }) : o);
        out += conv;
      }
      i = j;
    }
    // full-width CJK punctuation next to converted text
    if (HAN.test(text) || T.hasKana(text)) out = out.replace(/[，、]\s*/g, ', ').replace(/。\s*/g, '. ').replace(/！\s*/g, '! ').replace(/？\s*/g, '? ').replace(/：\s*/g, ': ').replace(/；\s*/g, '; ').replace(/（/g, ' (').replace(/）/g, ') ').replace(/[「」『』“”]/g, '"').replace(/\u3000/g, ' ').replace(/ {2,}/g, ' ').replace(/ +$/gm, '');
    if (o.ascii) out = toAscii(out, o.german);
    return out;
  };
  T.toAscii = toAscii;
  window.Translit = T;
})();

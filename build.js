#!/usr/bin/env node
// Static site generator. Run `node build.js` after changing config.json or anything in src/.
// Output is written to the repository root so GitHub Pages can serve it directly.
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'config.json'), 'utf8'));
const tools = require('./src/tools.js');
const SITE = cfg.siteUrl.replace(/\/+$/, '');
const YEAR = new Date().getFullYear();
const TODAY = new Date().toISOString().slice(0, 10);

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const jsonLd = o => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;

// Inline SVG icons (24x24, stroked with currentColor).
const svg = p => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const ICON = {
  'image-compressor': '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><path d="M14 10l7-7M3 21l7-7"/>',
  'image-resizer': '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><path d="M21 3l-7 7M3 21l7-7"/>',
  'qr-code-generator': '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v3M14 21h3M21 21h-1v-1"/>',
  'password-generator': '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/>',
  'word-counter': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  'case-converter': '<path d="M4 7V5h16v2M9 19h6M12 5v14"/>',
  'json-formatter': '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/>',
  'age-calculator': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  'percentage-calculator': '<path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  'loan-calculator': '<path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M12 3l9 5H3z"/>',
  'bmi-calculator': '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  'unit-converter': '<path d="M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/>',
  'image-converter': '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5-5-8 9"/>',
  'mortgage-calculator': '<path d="M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/>',
  'compound-interest-calculator': '<polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/>',
  'salary-calculator': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  'sales-tax-calculator': '<path d="M6 2h12v20l-3-2-3 2-3-2-3 2z"/><path d="M9 7h6M9 11h6M9 15h4"/>',
  'discount-calculator': '<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  'tip-calculator': '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2"/>',
  'days-between-dates': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 15h8"/>',
  'random-number-generator': '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01M12 12h.01"/>',
  'uuid-generator': '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M14 10h4M14 14h3"/>',
  'lorem-ipsum-generator': '<path d="M4 6h16M4 10h10M4 14h16M4 18h8"/>',
  'remove-duplicate-lines': '<path d="M4 6h16M4 12h10M4 18h6M17 14l4 4M21 14l-4 4"/>',
  'base64-encoder': '<polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/>',
  'url-encoder': '<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
  'hash-generator': '<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/>',
  'color-converter': '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  'merge-pdf': '<path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3M12 8v8M8 12h8"/>',
  'split-pdf': '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"/>',
  'compress-pdf': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M12 10v3M10.5 11.5L12 13l1.5-1.5M12 19v-3M10.5 17.5L12 16l1.5 1.5"/>',
  'jpg-to-pdf': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><circle cx="10" cy="13" r="1"/><path d="M8 18l3-3 2 2 1-1 2 2"/>',
  'pdf-to-jpg': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M12 11v6M9.5 14.5L12 17l2.5-2.5"/>',
  'pdf-to-text': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 12h6M9 15h6M9 18h3"/>',
  'rotate-pdf': '<path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 3 21 9 15 9"/>',
  'delete-pdf-pages': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 15h6"/>',
  'add-page-numbers-to-pdf': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 17h6M12 17v-5l-1.5 1"/>',
  'watermark-pdf': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 12h6M12 12v6"/>',
  'credit-card-payoff-calculator': '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  'profit-margin-calculator': '<path d="M21 12A9 9 0 1 1 12 3v9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/>',
  'gpa-calculator': '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c2 2 10 2 12 0v-4.5M22 9v6"/>',
  'calorie-calculator': '<path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-8 0 4-4 6-4 12 0 4 3 7 7 7z"/>',
  'roman-numeral-converter': '<path d="M5 5h14M5 19h14M8 5v14M12 5v14M16 5v14"/>',
  'number-to-words': '<path d="M4 7h3v10M4 17h6M14 9a2 2 0 1 1 4 0c0 2-4 4-4 8h4"/>',
  'text-compare': '<path d="M8 3v12M5 12l3 3 3-3M16 21V9M13 12l3-3 3 3"/>',
  'text-to-binary': '<path d="M6 5l2-1v7M6 11h4M15 4h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM6 13h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zM15 14l2-1v7M15 20h4"/>',
  'countdown-timer': '<path d="M6 3h12M6 21h12M7 3v4l5 5 5-5V3M7 21v-4l5-5 5 5v4"/>',
  'stopwatch': '<circle cx="12" cy="14" r="7"/><path d="M12 14v-3.5M10 3h4M12 3v4"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  share: '<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13"/>',
  'edit-pdf': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 17l1-3 5-5 2 2-5 5z"/>',
  'image-text-editor': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 9h8M12 9v7M10 16h4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  undo: '<path d="M3 7v6h6"/><path d="M3 13a9 9 0 1 0 3-7.7L3 8"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  theme: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>',
  logo: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4z"/>'
};
const icon = k => svg(ICON[k]);
// One flat colour per category. Key order here is also the order of sections on the home page.
const COLOR = { 'PDF tools': '#ef476f', 'Image tools': '#ffd23f', 'Finance calculators': '#06d6a0', 'Calculators': '#c4a7ff', 'Time tools': '#ff8c42', 'Generators': '#4cc9f0', 'Text tools': '#b8e986', 'Developer tools': '#7aa7ff' };
const tile = t => `<span class="tile" style="--c:${COLOR[t.cat]}">${icon(t.slug)}</span>`;

function write(rel, content) {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function ad(slot) {
  if (!cfg.adsenseClient || !slot) return '';
  return `<div class="ad"><ins class="adsbygoogle" style="display:block" data-ad-client="${esc(cfg.adsenseClient)}" data-ad-slot="${esc(slot)}" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>`;
}

// rel = path prefix back to the site root ('' for root pages, '../' for tool pages)
// Languages offered in the header menu. The page is translated in place by Google Translate.
const LANGS = [['en', 'English'], ['ur', 'اردو'], ['hi', 'हिन्दी'], ['ar', 'العربية'], ['es', 'Español'], ['fr', 'Français'], ['pt', 'Português'], ['de', 'Deutsch'], ['id', 'Indonesia'], ['tr', 'Türkçe'], ['ru', 'Русский'], ['bn', 'বাংলা'], ['zh-CN', '中文'], ['ja', '日本語'], ['ko', '한국어'], ['it', 'Italiano'], ['fa', 'فارسی'], ['vi', 'Tiếng Việt'], ['th', 'ไทย'], ['sw', 'Kiswahili'], ['nl', 'Nederlands'], ['pl', 'Polski'], ['ms', 'Melayu'], ['pa', 'ਪੰਜਾਬੀ']];

// A desktop window: title bar plus content. Windows animate open as they scroll into view.
function win(title, color, inner, { cls = '', id = '', extra = '', attrs = '', now = false } = {}) {
  return `<section class="win ${now ? 'now' : 'reveal'} ${cls}"${id ? ` id="${id}"` : ''} style="--c:${color}"${attrs}><header class="tb"><i></i><i></i><span>${title}</span><span class="sp"></span>${extra}</header><div class="pad">${inner}</div></section>`;
}

function layout({ rel, urlPath, title, desc, body, slug = '', here = '', color = '', head = '', noindex = false }) {
  const canonical = SITE + '/' + urlPath;
  return `<!doctype html>
<html lang="en" data-rel="${rel}"${slug ? ` data-slug="${slug}"` : ''}${color ? ` style="--c:${color}"` : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(canonical)}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(cfg.siteName)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(canonical)}">
<meta name="twitter:card" content="summary">
${cfg.googleSiteVerification ? `<meta name="google-site-verification" content="${esc(cfg.googleSiteVerification)}">` : ''}
<link rel="icon" href="${rel}assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="${rel}assets/fonts/pixelify.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${rel}assets/style.css">
<script src="${rel}assets/tools-index.js"></script>
<script src="${rel}assets/site.js"></script>
${cfg.firebase ? `<script>window.FIREBASE_CONFIG=${JSON.stringify(cfg.firebase).replace(/</g, '\\u003c')};</script><script defer src="${rel}assets/cloud.js"></script>` : ''}
${cfg.adsenseClient ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(cfg.adsenseClient)}" crossorigin="anonymous"></script>` : ''}
${cfg.googleAnalyticsId ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(cfg.googleAnalyticsId)}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${esc(cfg.googleAnalyticsId)}');</script>` : ''}
${head}
</head>
<body>
<header class="menubar"><div class="wrap">
  <a class="logo" href="${rel || './'}"><b></b><span class="notranslate" translate="no">${esc(cfg.siteName)}</span></a>
  <button id="palBtn" aria-label="Search tools">${icon('search')}<span>Tools</span></button>
  <a class="m hide-s" href="${rel}about/">About</a>
  <a class="m hide-s" href="${rel}contact/">Contact</a>
  <span class="sp"></span>
  <button class="auth" id="authBtn" hidden><span>Sign in</span></button>
  <button id="langBtn" aria-label="Choose language" aria-haspopup="true" aria-expanded="false">${icon('globe')}<span class="notranslate" translate="no">EN</span></button>
  <button id="themeBtn" aria-label="Switch day or night theme">${icon('theme')}</button>
  <span class="clock hide-s notranslate" translate="no" aria-hidden="true">--:--</span>
  <div class="lang-menu notranslate" id="langMenu" translate="no" hidden><p>Language · translated by Google</p>${LANGS.map(([code, name]) => `<button data-lang="${code}" lang="${code}">${name}</button>`).join('')}</div>
</div></header>
<div id="gt"></div>
<dialog class="palette" id="palette" aria-label="Search tools">
  <header class="tb" style="--c:#ffd23f"><i></i><i></i><span>Run a tool</span></header>
  <div class="pad" style="padding:14px"><div class="finder">${icon('search')}<input type="search" id="palInput" data-empty="all" placeholder="Search ${tools.length} tools…" aria-label="Search tools" autocomplete="off"></div>
  <div class="f-list" id="palResults"></div>
  <p class="pal-hint">↑ ↓ to move · Enter to open · Esc to close</p></div>
</dialog>
<div class="toast" id="toast" role="status" aria-live="polite" hidden></div>
<main class="wrap">
${body}
</main>
<footer class="wrap">
${win('index.dir', '#fdf6e3', `<div class="foot-grid">
    ${footCols.map(col => `<div style="--c:${COLOR[col.title]}"><h2>${esc(col.title)}</h2>${col.items.map(t => `<a href="${rel}${t.slug}/">${esc(t.name)}</a>`).join('')}</div>`).join('\n    ')}
    <div style="--c:#fdf6e3"><h2>Site</h2><a href="${rel}about/">About</a><a href="${rel}contact/">Contact</a><a href="${rel}privacy/">Privacy</a><a href="${rel}terms/">Terms</a></div>
  </div>
  <div class="foot-bottom">© ${YEAR} ${esc(cfg.siteName)} · ${tools.length} free tools · everything runs in your browser</div>`, { cls: 'site-footer' })}
</footer>
<nav class="taskbar" aria-label="Shortcuts">
  <button class="start" id="startBtn">▣ Start</button>
  <a href="${rel || './'}">Home</a>
  ${here ? `<span class="here" aria-current="page">${esc(here)}</span>` : ''}
  <div class="taskpins" id="taskPins" aria-label="Pinned tools"></div>
  <div class="tray"><i class="dot"></i><span>saved on this device</span><span class="clock notranslate" translate="no" aria-hidden="true">--:--</span></div>
</nav>
</body>
</html>
`;
}

const cats = Object.keys(COLOR);
for (const t of tools) if (!(t.cat in COLOR)) throw new Error('Unknown category: ' + t.cat);
tools.sort((a, b) => cats.indexOf(a.cat) - cats.indexOf(b.cat)); // stable: keeps the order within a category
const footCols = cats.map(c => ({ title: c, items: tools.filter(t => t.cat === c) }));
const card = (t, rel) => `<div class="tool-card" style="--c:${COLOR[t.cat]}">${tile(t)}<a class="t-link" href="${rel}${t.slug}/">${esc(t.name)}</a><small>${esc(t.card)}</small><button class="star" data-slug="${t.slug}" aria-label="Pin ${esc(t.name)}" aria-pressed="false">${icon('star')}</button></div>`;
const bySlug = s => { const t = tools.find(t => t.slug === s); if (!t) throw new Error('No tool ' + s); return t; };

// Search index used by the finder, the palette and the "My tools" lists.
write('assets/tools-index.js', 'window.TOOLS=' + JSON.stringify(tools.map(t => [t.slug, t.name, t.cat, COLOR[t.cat], t.card])) + ';\n');

// ---------- home ----------
const typed = [['merge two PDFs', 'merge-pdf'], ['shrink a photo', 'image-compressor'], ['work out a mortgage', 'mortgage-calculator'], ['make a QR code', 'qr-code-generator'], ['turn a PDF into images', 'pdf-to-jpg'], ['create a strong password', 'password-generator']];
typed.forEach(x => bySlug(x[1]));
const dicon = (slug, label) => { const t = bySlug(slug); return `<a class="dicon" href="${slug}/" style="--c:${COLOR[t.cat]}" title="${esc(t.name)}"><span class="tile">${icon(slug)}</span>${label}</a>`; };
const desktopIcons = [['edit-pdf', 'Edit PDF'], ['merge-pdf', 'Merge PDF'], ['compress-pdf', 'Shrink PDF'], ['image-compressor', 'Compress'], ['image-text-editor', 'Text on photo'], ['mortgage-calculator', 'Mortgage'], ['qr-code-generator', 'QR Code'], ['countdown-timer', 'Timer']].map(x => dicon(x[0], x[1])).join('');
// A window of small programs that are actually running.
const monitor = `<div class="mon">
  <a href="password-generator/"><span>password.gen</span><span class="v" id="livePw">x7$Kq!9mZp</span></a>
  <a href="stopwatch/"><span>stopwatch.run</span><span class="v" id="liveSw">00:00.00</span></a>
  <a href="compress-pdf/"><span>compress.job</span><u><i></i></u></a>
  <a href="qr-code-generator/"><span>qr.render</span><span class="qr" id="liveQr">${'<i></i>'.repeat(49)}</span></a>
</div>`;
const ticker = tools.map(t => `<a href="${t.slug}/">${esc(t.name)}</a><span>✦</span>`).join('');
const links = slugs => slugs.map(s => { const t = bySlug(s); return `<a href="${s}/">${esc(t.name)}</a>`; }).join('');
const who = (color, title, text, slugs) => win(title, color, `<p>${text}</p>${slugs.map(sl => `<a class="who-link" href="${sl}/">${esc(bySlug(sl).name)}</a>`).join('')}`);
const keepLine = cfg.firebase
  ? 'Your work is saved on this device automatically. <b>Want it on every device? Sign in with Google</b> using the button at the top.'
  : 'Your work is saved on this device automatically, so it is still here when you come back.';
const homeFaq = [
  [`Is ${cfg.siteName} really free?`, 'Yes. Every tool is free, with no daily limits, no watermarks and no “premium” button hiding the good part. The site may show ads to cover its costs.'],
  ['Do you upload my files?', 'No. The tools are small programs that run inside your own browser. Your PDFs, photos and text are processed on your device and are never sent to us.'],
  ['Will my work still be here when I come back?', 'Yes. Pinned tools, recently used tools and the values you typed into calculators are saved in your browser on this device, so a calculation you left is waiting for you. Files and long text are not saved. Clearing your browser data erases it.'],
  ['How do I keep my data on all my devices?', cfg.firebase ? 'Press Sign in at the top and choose your Google account. Your pinned tools and saved entries then follow you to any device where you sign in.' : 'Right now your data is saved on the device you are using. Sign-in with Google, which keeps it in step across all your devices, is being added.'],
  ['Can I use the site in my own language?', 'Yes. Open the language menu at the top and choose from 24 languages, including Urdu, Hindi, Arabic and Spanish. Translation is done by Google Translate, so some wording may be imperfect.'],
  ['Does it work on a phone?', 'Yes. Every tool is built for a phone screen first and works the same on a tablet or laptop.'],
  ['What happens to my files when I close the page?', 'They are gone from the page. Nothing was uploaded, so there is nothing on a server to delete.'],
  ['A tool I need is missing. Can you add it?', 'Probably. Use the contact page to tell us what you need and we will consider building it.']
];

write('index.html', layout({
  rel: '', urlPath: '',
  title: `${cfg.siteName} - Free Online Tools: PDF, Image, Calculators`,
  desc: `${tools.length} free online tools: merge PDF, compress PDF, image compressor, mortgage calculator, QR code generator and more. No sign-up. Files never leave your device.`,
  head: jsonLd({ '@context': 'https://schema.org', '@type': 'WebSite', name: cfg.siteName, url: SITE + '/' }) + jsonLd({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: homeFaq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  }),
  body: `<div class="desk">
  ${win('welcome.txt', '#ff8c42', `<h1>Fifty free online tools. One <em>desktop.</em></h1>
    <p class="typed-line">C:\\&gt; <a id="typed" href="${typed[0][1]}/" data-list="${esc(JSON.stringify(typed))}">${typed[0][0]}</a><i class="caret" aria-hidden="true"></i></p>
    <p class="sub">Open a tool like an app. No installs, no uploads, no waiting in a queue. Drop it in, get it done, get on with your day.</p>
    <div class="finder">${icon('search')}<input type="search" id="toolSearch" placeholder="Search tools… try “pdf”" aria-label="Search tools" autocomplete="off"><div class="f-list" id="heroResults" hidden></div></div>
    <ul class="trust"><li>${icon('check')}Files never leave your device</li><li>${icon('check')}Saved for when you come back</li><li>${icon('check')}Works on your phone</li></ul>
    <p class="keep">${keepLine}</p>`, { cls: 'w-hero', now: true })}
  <div>
    <nav class="icons" aria-label="Popular tools">${desktopIcons}</nav>
    ${win('system_monitor.exe', '#ffd23f', monitor, { now: true })}
    <p class="note">TIP: press <kbd>Ctrl</kbd> <kbd>K</kbd> anywhere to open a tool by name. Drag any window by its title bar.</p>
  </div>
</div>
<div class="marquee"><div><span aria-hidden="true">◆</span>${ticker}<span aria-hidden="true" style="display:contents">${ticker.replace(/<a /g, '<a tabindex="-1" ')}</span></div></div>
${win('about_this_computer.nfo', '#4cc9f0', `<div class="statbar">
  <div class="stat-big"><b data-count="${tools.length}">${tools.length}</b><span>Tools installed</span></div>
  <div class="stat-big"><b data-count="${cats.length}">${cats.length}</b><span>Folders</span></div>
  <div class="stat-big"><b>0</b><span>Files uploaded. Ever.</span></div>
  <div class="stat-big"><b data-count="${LANGS.length}">${LANGS.length}</b><span>Languages</span></div>
</div>`)}
${win('recent_files', '#06d6a0', `<p id="mineNote">${cfg.firebase ? 'Saved on this device. Sign in to sync across devices.' : 'Everything below is saved on this device.'}</p>
  <div id="minePinsBox"><h3>Pinned to your taskbar</h3><div class="chiprow" id="minePins"></div></div>
  <div id="mineRecentBox"><h3>Pick up where you left off</h3><div class="chiprow" id="mineRecent"></div></div>`, { cls: 'mine', id: 'mine', attrs: ' hidden', now: true })}
<div class="pills" id="tools" role="group" aria-label="Filter by category"><button class="pill on" data-cat="" aria-pressed="true">All ${tools.length}</button>${cats.map(c => `<button class="pill" data-cat="${esc(c)}" aria-pressed="false" style="--c:${COLOR[c]}"><i></i>${esc(c)}</button>`).join('')}</div>
${ad(cfg.adSlotTop)}
${cats.map(c => { const list = tools.filter(t => t.cat === c); return win(`${esc(c)} — ${list.length} items`, COLOR[c], `<div class="grid">${list.map(t => card(t, '')).join('')}</div>`, { cls: 'cat', attrs: ` data-cat="${esc(c)}"` }); }).join('\n')}
${ad(cfg.adSlotBottom)}
${win('readme.txt', '#c4a7ff', `<h2 class="section-title">Three steps. No instruction manual.</h2>
  <p class="section-sub">If you can drag a file or type a number, you already know how to use this site.</p>
  <ol class="how">
    <li style="--c:#ffd23f"><h3>Pick your tool</h3><p>Search for it, tap it, done. No sign-up wall, no pop-up maze, no “start your free trial”.</p></li>
    <li style="--c:#4cc9f0"><h3>Feed it</h3><p>Drop in a file or type your numbers. The work happens right there on your own device, so nothing waits in an upload queue.</p></li>
    <li style="--c:#06d6a0"><h3>Boom. Done.</h3><p>Results appear as you type. Download, copy, and leave. When you come back, your numbers are still where you left them.</p></li>
  </ol>`)}
<div class="whos">
  ${who('#ffd23f', 'students.dir', 'Assignments, deadlines and that one form that only accepts a PDF under 2 MB.', ['merge-pdf', 'compress-pdf', 'word-counter', 'gpa-calculator', 'jpg-to-pdf'])}
  ${who('#06d6a0', 'money_and_home.dir', 'Know the real cost before you sign anything.', ['mortgage-calculator', 'loan-calculator', 'credit-card-payoff-calculator', 'compound-interest-calculator', 'salary-calculator'])}
  ${who('#ff8c42', 'shops_and_freelancers.dir', 'Price it, tax it, brand it and send it.', ['profit-margin-calculator', 'sales-tax-calculator', 'discount-calculator', 'watermark-pdf', 'qr-code-generator'])}
  ${who('#7aa7ff', 'developers.dir', 'The small utilities you keep searching for, minus the cookie banners.', ['json-formatter', 'base64-encoder', 'hash-generator', 'uuid-generator', 'color-converter'])}
</div>
${win('why_this_one.txt', '#ef476f', `<h2 class="section-title">No catches. Really.</h2>
  <p class="section-sub">Most online tools want your email, your file and your patience. This one wants none of them.</p>
  <div class="features">
    <div class="feature" style="--c:#06d6a0"><span class="tile">${icon('shield')}</span><h3>Private by design</h3><p>Every tool runs inside your browser. Your files, text and numbers are processed on your own device and are not uploaded to us.</p></div>
    <div class="feature" style="--c:#ffd23f"><span class="tile">${icon('zap')}</span><h3>Instant results</h3><p>Nothing to install and no waiting for uploads. Open a tool and the answer appears while you are still typing.</p></div>
    <div class="feature" style="--c:#c4a7ff"><span class="tile">${icon('star')}</span><h3>It remembers you</h3><p>Pin a tool and it sits on your taskbar. Leave a calculation half done, come back next week, and it is exactly where you left it.</p></div>
    <div class="feature" style="--c:#4cc9f0"><span class="tile">${icon('globe')}</span><h3>Speaks your language</h3><p>Switch the whole site into ${LANGS.length} languages from the menu at the top, from Urdu and Hindi to Arabic and Spanish.</p></div>
  </div>`)}
${win('help.hlp', '#4cc9f0', `<h2 class="section-title">Questions people ask before they trust us.</h2>
  <div class="faq" style="max-width:860px">${homeFaq.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`)}
${win('Message', '#ffd23f', `<h2>Need a tool that is not here yet?</h2><p>Tell us what would save you time and we will consider building it.</p><a class="btn" href="contact/">Suggest a tool ${icon('arrow')}</a>`, { cls: 'cta' })}`
}));

// ---------- tool pages ----------
for (const t of tools) {
  const body = fs.readFileSync(path.join(ROOT, 'src/tools', t.slug + '.html'), 'utf8');
  const same = tools.filter(o => o !== t && o.cat === t.cat);
  const related = same.concat(tools.filter(o => o !== t && o.cat !== t.cat)).slice(0, Math.max(6, Math.min(same.length, 9)));
  write(`${t.slug}/index.html`, layout({
    rel: '../', urlPath: t.slug + '/', slug: t.slug, here: t.name, color: COLOR[t.cat],
    title: `${t.title} | ${cfg.siteName}`, desc: t.desc,
    head: jsonLd({
      '@context': 'https://schema.org', '@type': 'WebApplication', name: t.name, url: `${SITE}/${t.slug}/`,
      description: t.desc, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    }) + jsonLd({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: t.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
    }) + jsonLd({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
        { '@type': 'ListItem', position: 2, name: t.name, item: `${SITE}/${t.slug}/` }
      ]
    }),
    body: `<div class="cols">
<div class="content">
${win(`${esc(t.name)}.app`, COLOR[t.cat], `<p class="crumbs"><a href="../">C:</a> \\ ${esc(t.cat)} \\ ${esc(t.name)}</p>
  <div class="title-row">${tile(t)}<h1 class="page-title">${esc(t.name)}</h1></div>
  <p class="lead">${esc(t.intro)}</p>
<section class="card">
${body}
</section>
<p class="safe">${icon('shield')}Runs on your device. Nothing is uploaded. Your entries are saved here for your next visit.</p>`, { cls: 'w-tool', now: true, extra: `<button id="clearBtn" hidden>${icon('undo')}<span>Clear saved</span></button><button id="shareBtn">${icon('share')}<span>Share</span></button><button id="pinBtn" aria-pressed="false">${icon('star')}<span>Pin this tool</span></button><a class="x" href="../" aria-label="Close and go to all tools">×</a>` })}
${ad(cfg.adSlotTop)}
${win('how_to.txt', '#ffd23f', `<h2 class="section-title">How to use ${esc(t.name)}</h2><ol class="steps">${t.steps.map(st => `<li>${esc(st)}</li>`).join('')}</ol>`)}
${ad(cfg.adSlotBottom)}
${win('help.hlp', '#4cc9f0', `<h2 class="section-title">Questions people ask</h2><div class="faq">${t.faq.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`)}
</div>
<aside class="side">
  ${win('pinned', '#06d6a0', `<div class="chiprow" id="sidePinsList"></div>`, { id: 'sidePins', attrs: ' hidden', now: true })}
  ${win('more_tools.dir', COLOR[t.cat], related.map(o => `<a class="side-link" href="../${o.slug}/" style="--c:${COLOR[o.cat]}">${tile(o)}${esc(o.name)}</a>`).join(''), { now: true })}
</aside>
</div>`
  }));
}

// ---------- info pages ----------
const contact = cfg.contactEmail
  ? `<p>Email us at <a href="mailto:${esc(cfg.contactEmail)}">${esc(cfg.contactEmail)}</a>. We usually reply within a few days.</p>`
  : `<p>Found a bug or want a new tool? Please <a href="https://github.com/robertlana007-max/site-builder/issues" rel="noopener">open an issue on GitHub</a> and describe what you need.</p>`;
const adsPolicy = cfg.adsenseClient
  ? `<h2>Advertising</h2>
<p>We show ads from Google AdSense to keep the tools free. Google and its partners use cookies to serve ads based on your visits to this and other websites. You can opt out of personalised advertising in <a href="https://adssettings.google.com" rel="noopener">Google Ads Settings</a>, and you can read how Google uses data at <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">policies.google.com/technologies/partner-sites</a>.</p>`
  : `<h2>Advertising</h2>
<p>This site does not currently show ads. If that changes, this page will be updated first to explain which advertising partners are used and what data they collect.</p>`;
const analytics = cfg.googleAnalyticsId
  ? `<p>We use Google Analytics to count visits and see which tools are popular. It sets cookies and collects information such as your approximate location, device type and the pages you view.</p>`
  : `<p>We do not use analytics cookies.</p>`;

const pages = [
  { slug: 'about', title: 'About', desc: `What ${cfg.siteName} is and why the tools are free and private.`, html: `
<p>${esc(cfg.siteName)} is a small collection of free online tools for everyday jobs: merging PDFs, shrinking a photo, making a QR code or working out a loan payment.</p>
<h2>How it works</h2>
<p>Every tool is plain JavaScript that runs in your browser. When you compress an image or format JSON, the work is done by your own device. We have no server that receives your files.</p>
<h2>Why it is free</h2>
<p>The tools cost almost nothing to run because your browser does the work. Advertising, where shown, covers the remaining costs.</p>
<h2>Feedback</h2>
${contact}` },
  { slug: 'contact', title: 'Contact', desc: `Get in touch with ${cfg.siteName} about a bug, a suggestion or a new tool.`, html: contact },
  { slug: 'privacy', title: 'Privacy Policy', desc: `How ${cfg.siteName} handles your data. Short version: your files and text stay on your device.`, html: `
<p>Last updated: ${TODAY}</p>
<h2>Data you enter into tools</h2>
<p>PDFs, images, text, numbers and passwords you enter are processed in your browser. They are not uploaded to or stored by ${esc(cfg.siteName)}.</p>
<h2>Local storage</h2>
<p>To make the site more useful when you come back, your browser's local storage keeps: your theme and language, the tools you pin, the tools you opened recently, and what you entered into the short fields of a tool (numbers, dates, sliders, tick boxes, menus and one-line text boxes), so a calculation is still there on your next visit. Large text boxes, files and generated passwords are never saved. This data stays on your device. You can erase it with the "Clear my saved entries" button on a tool, or by clearing this site's data in your browser.</p>
<h2>Translation</h2>
<p>If you choose a language other than English, the page is translated by Google Translate. Your browser then loads a script from Google, the text of the page is sent to Google to be translated, and Google sets a cookie that remembers the language. If you stay in English, none of this happens.</p>
${cfg.firebase ? `<h2>Optional Google sign-in</h2>
<p>You can use every tool without an account. If you choose to sign in with Google, we receive your name, email address and a user ID from Google, and we store your pinned tools, recent tools and calculator settings in Google Firebase so they appear on your other devices. Files and text you process in the tools are still never uploaded. To delete this data, sign in and email us from the same address.</p>` : ''}
<h2>Analytics</h2>
${analytics}
${adsPolicy}
<h2>Hosting</h2>
<p>The site is served by GitHub Pages, which may log technical data such as IP addresses for security purposes. See the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub privacy statement</a>.</p>
<h2>Contact</h2>
${contact}` },
  { slug: 'terms', title: 'Terms of Use', desc: `Terms for using the free tools on ${cfg.siteName}.`, html: `
<p>Last updated: ${TODAY}</p>
<h2>Using the tools</h2>
<p>The tools are free for personal and commercial use. Please do not try to disrupt the site or use it for anything unlawful.</p>
<h2>No warranty</h2>
<p>The tools are provided "as is", without warranties of any kind. We work to keep results correct, but we cannot guarantee they are free of errors.</p>
<h2>Not professional advice</h2>
<p>The finance, BMI and calorie calculators give general estimates only. They are not financial or medical advice. Check important decisions with a qualified professional.</p>
<h2>Your content</h2>
<p>You keep all rights to anything you create with the tools, including compressed images and QR codes.</p>
<h2>Changes</h2>
<p>We may update the tools and these terms from time to time. Continued use of the site means you accept the current terms.</p>` }
];
for (const p of pages) {
  write(`${p.slug}/index.html`, layout({
    rel: '../', urlPath: p.slug + '/', title: `${p.title} | ${cfg.siteName}`, desc: p.desc,
    here: p.title,
    body: win(`${p.slug}.txt`, '#c4a7ff', `<p class="crumbs"><a href="../">C:</a> \\ ${esc(p.title)}</p><h1 class="page-title">${esc(p.title)}</h1><section class="prose">${p.html}</section>`, { now: true })
  }));
}

// 404 is served from any path, so it needs absolute links.
const base = new URL(SITE + '/').pathname;
write('404.html', layout({
  rel: base, urlPath: '404.html', title: `Page not found | ${cfg.siteName}`, desc: 'This page does not exist.', noindex: true,
  body: win('error.log', '#ef476f', `<div class="center"><h1>404</h1><p>That file does not exist. Every tool is on the home page.</p><p><a class="btn" href="${base}">See all tools</a></p></div>`, { now: true })
}));

// ---------- crawl files ----------
const urls = ['', ...tools.map(t => t.slug + '/'), ...pages.map(p => p.slug + '/')];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${SITE}/${u}</loc><lastmod>${TODAY}</lastmod></url>`).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
if (cfg.adsenseClient) {
  write('ads.txt', `google.com, ${cfg.adsenseClient.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`);
}
write('.nojekyll', '');
// GitHub Pages reads the custom domain from this file.
const host = new URL(SITE).hostname;
if (!host.endsWith('.github.io')) write('CNAME', host + '\n');
write('assets/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="crispEdges"><rect x="10" y="10" width="50" height="50" fill="#1b1b2f"/><rect x="4" y="4" width="50" height="50" fill="#fdf6e3" stroke="#1b1b2f" stroke-width="5"/><rect x="4" y="4" width="50" height="14" fill="#ff8c42" stroke="#1b1b2f" stroke-width="5"/><rect x="24" y="27" width="10" height="10" fill="#1b1b2f" transform="rotate(45 29 32) translate(0 4)"/></svg>\n`);

console.log(`Built ${urls.length} pages for ${SITE}`);

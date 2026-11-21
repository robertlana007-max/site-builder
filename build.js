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
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  undo: '<path d="M3 7v6h6"/><path d="M3 13a9 9 0 1 0 3-7.7L3 8"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  'online-notepad': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9.5 12.5L8 14l1.5 1.5M14.5 12.5L16 14l-1.5 1.5"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  theme: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>',
  logo: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4z"/>'
};
const icon = k => svg(ICON[k] || (tools.find(t => t.slug === k) || {}).icon || ICON.star);
// One flat colour per category. Key order here is also the order of sections on the home page.
const COLOR = { 'PDF tools': '#e5484d', 'Image tools': '#8b5cf6', 'Finance calculators': '#12a150', 'Calculators': '#d6409f', 'Time tools': '#d98e00', 'Generators': '#0e9fb5', 'Text tools': '#e86a17', 'Study tools': '#4f46e5', 'Social media tools': '#db2777', 'Media tools': '#0891b2', 'Developer tools': '#2563eb' };
// What each category is for, shown on the home page.
const CATINFO = {
  'PDF tools': ['Merge, split, compress, edit and sign PDF files', 'Join reports into one file, shrink a scan so it fits an email, change text inside a PDF in its original font, add page numbers or a watermark, and turn pages into pictures.'],
  'Image tools': ['Resize, compress, convert and edit pictures', 'Make a photo smaller without it looking worse, crop it for a profile, change JPG to PNG or WebP, and even click on text in a picture to change it.'],
  'Finance calculators': ['Loans, mortgages, salary, tax and savings', 'See the real monthly payment and total interest before you sign, plan how fast a card can be paid off, and work out take-home pay or compound growth.'],
  'Calculators': ['Everyday maths, health and school', 'Percentages, BMI and calories, age, GPA, discounts, tips and unit conversions, with the working shown clearly.'],
  'Time tools': ['Timers, stopwatch, clocks and dates', 'A countdown timer with an alarm, a stopwatch with laps, time zone converter and day counters for deadlines and birthdays.'],
  'Generators': ['Passwords, QR codes, random numbers and names', 'Strong passwords, QR codes for links or Wi-Fi, fair random picks, UUIDs and placeholder text, made on your device.'],
  'Text tools': ['Write, count, clean and edit text', 'A full notepad with tabs, word and character counter, case changer, remove duplicate lines, compare two texts and more.'],
  'Study tools': ['CGPA, marks, equations, graphs, citations and more', 'Work out your CGPA and percentage, see what you need in the final exam, solve equations and draw graphs, make citations for assignments, and study with flashcards and a Pomodoro timer.'],
  'Social media tools': ['Posts, thumbnails, hashtags and links for your socials', 'Make Instagram grids and no-crop posts, resize pictures for every platform, design YouTube thumbnails, pick hashtags, count characters and make WhatsApp chat links.'],
  'Media tools': ['Record your screen and voice, turn video into MP3, text into speech', 'Make a screen recording with sound, record your voice and save it as MP3, pull the audio out of a video, and have any text read out loud.'],
  'Developer tools': ['JSON, Base64, hashes, regex and more', 'Format and check JSON, encode and decode Base64 and URLs, make hashes, test regular expressions and convert colours.']
};
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

// Header links to the main sections of the home page.
const NAV = [['PDF tools', 'PDF'], ['Image tools', 'Image'], ['Finance calculators', 'Finance'], ['Calculators', 'Calculators'], ['Developer tools', 'Developer']];
const catId = c => c.toLowerCase().replace(/[^a-z]+/g, '-');

// ---------- donation addresses: checked on every build ----------
function checkAddress({ chain, address: a }) {
  const B58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  const b58 = s => { let n = 0n; for (const ch of s) { const i = B58.indexOf(ch); if (i < 0) return null; n = n * 58n + BigInt(i); } let hex = n.toString(16); if (hex.length % 2) hex = '0' + hex; return Buffer.concat([Buffer.alloc(s.length - s.replace(/^1+/, '').length), Buffer.from(n ? hex : '', 'hex')]); };
  const sha = b => crypto.createHash('sha256').update(b).digest();
  if (chain === 'eth') return /^0x[0-9a-fA-F]{40}$/.test(a);
  if (chain === 'sol') { const b = b58(a); return !!b && b.length === 32; }
  if (chain === 'tron') { const b = b58(a); return !!b && b.length === 25 && b[0] === 0x41 && sha(sha(b.subarray(0, 21))).subarray(0, 4).equals(b.subarray(21)); }
  if (chain === 'btc') {
    const CH = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l', s = a.toLowerCase(), p = s.lastIndexOf('1');
    if (p < 1) return false;
    const hrp = s.slice(0, p), data = [...s.slice(p + 1)].map(ch => CH.indexOf(ch));
    if (hrp !== 'bc' || data.some(v => v < 0)) return false;
    const G = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
    let chk = 1;
    for (const v of [...hrp].map(x => x.charCodeAt(0) >> 5).concat([0], [...hrp].map(x => x.charCodeAt(0) & 31), data)) {
      const top = chk >>> 25; chk = ((chk & 0x1ffffff) << 5) ^ v;
      for (let i = 0; i < 5; i++) if ((top >> i) & 1) chk ^= G[i];
    }
    return chk === (data[0] === 0 ? 1 : 0x2bc830a3);
  }
  return false;
}
const crypto = require('crypto');
for (const d of cfg.donate || []) if (!checkAddress(d)) throw new Error(`Donation address for ${d.coin} on ${d.network} is not valid: ${d.address}`);

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
<meta property="og:image" content="${SITE}/assets/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${SITE}/assets/og.png">
${cfg.googleSiteVerification ? `<meta name="google-site-verification" content="${esc(cfg.googleSiteVerification)}">` : ''}
<link rel="icon" href="${rel}favicon.ico" sizes="48x48">
<link rel="icon" href="${rel}assets/favicon.svg" type="image/svg+xml">
<link rel="icon" href="${rel}assets/icon-48.png" type="image/png" sizes="48x48">
<link rel="icon" href="${rel}assets/icon-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="${rel}assets/icon-180.png">
<link rel="manifest" href="${rel}manifest.webmanifest">
<meta name="theme-color" content="#2563eb">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="${esc(cfg.siteName)}">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<link rel="stylesheet" href="${rel}assets/style.css">
<script src="${rel}assets/tools-index.js"></script>
<script src="${rel}assets/site.js"></script>
${cfg.firebase ? `<script>window.FIREBASE_CONFIG=${JSON.stringify(cfg.firebase).replace(/</g, '\\u003c')};</script><script defer src="${rel}assets/cloud.js"></script>` : ''}
${cfg.adsenseClient ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(cfg.adsenseClient)}" crossorigin="anonymous"></script>` : ''}
${cfg.googleAnalyticsId ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(cfg.googleAnalyticsId)}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${esc(cfg.googleAnalyticsId)}');</script>` : ''}
${head}
</head>
<body>
<header class="site-header"><div class="wrap">
  <a class="logo" href="${rel || './'}"><img src="${rel}assets/favicon.svg" alt="" width="30" height="30"><span class="notranslate" translate="no">${esc(cfg.siteName)}</span></a>
  <nav class="mainnav" aria-label="Sections">${NAV.map(([cat, label]) => `<a href="${rel}#${catId(cat)}">${label}</a>`).join('')}<a href="${rel}guides/">Guides</a><a class="navapp" href="${rel}app/">${icon('phone')}Get the app</a></nav>
  <span class="sp"></span>
  <button class="hbtn" id="palBtn" aria-label="Search tools">${icon('search')}<span>Search</span></button>
  <button class="hbtn" id="langBtn" aria-label="Choose language" aria-haspopup="true" aria-expanded="false">${icon('globe')}<span class="notranslate" translate="no">EN</span></button>
  <button class="hbtn" id="themeBtn" aria-label="Switch light or dark theme">${icon('theme')}</button>
  <div class="acct">
      <button class="hbtn auth" id="authBtn" aria-haspopup="true" aria-expanded="false"><span id="authName">Sign in</span><svg class="i caret-d" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>
      <div class="acct-menu" id="acctMenu" hidden>
        <div id="acctOut"><button data-auth="in">${icon('arrow')}Sign in</button><button data-auth="up">${icon('star')}Create account <small>New here?</small></button></div>
        <a class="setlink donate-link" href="${rel}donate/">${icon('heart')}Support ${esc(cfg.siteName)}</a>
        <button data-auth="app">${icon('phone')}Get the app</button>
        <button data-auth="set">${icon('gear')}Settings</button>
        <button class="only-s" data-auth="lang">${icon('globe')}Language</button>
        <div id="acctIn" hidden><p id="acctWho"></p><a href="${rel || './'}#mine">${icon('star')}My saved tools</a><button data-auth="out">${icon('undo')}Sign out</button></div>
      </div>
    </div>
  <div class="lang-menu notranslate" id="langMenu" translate="no" hidden><p>Translated by Google</p>${LANGS.map(([code, name]) => `<button data-lang="${code}" lang="${code}">${name}</button>`).join('')}</div>
</div></header>
<div id="gt"></div>
<dialog class="palette" id="palette" aria-label="Search tools">
  <div class="finder">${icon('search')}<input type="search" id="palInput" data-empty="all" placeholder="Search ${tools.length} tools…" aria-label="Search tools" autocomplete="off"></div>
  <div class="f-list" id="palResults"></div>
  <p class="pal-hint">↑ ↓ to move · Enter to open · Esc to close</p>
</dialog>
<dialog class="palette authbox" id="authBox" aria-labelledby="authT">
  <button class="x" id="authClose" aria-label="Close">×</button>
  <div class="tabs" role="tablist"><button role="tab" data-tab="in" aria-selected="true">Sign in</button><button role="tab" data-tab="up" aria-selected="false">Create account</button></div>
  <h2 id="authT">Welcome back</h2>
  <p class="authsub" id="authSub">Sign in to keep your pinned tools and saved work on every device.</p>
  <button class="gbtn" id="authGoogle" type="button"><svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg><span id="gLabel">Continue with Google</span></button>
  <div class="or"><span>or use your email</span></div>
  <form id="authForm" novalidate>
    <div id="nameRow" hidden><label for="aName">Your name</label><input type="text" id="aName" autocomplete="name"></div>
    <label for="aEmail">Email</label><input type="email" id="aEmail" autocomplete="email" required>
    <label for="aPass">Password</label><input type="password" id="aPass" autocomplete="current-password" minlength="6" required>
    <p class="authmsg" id="authMsg" role="alert"></p>
    <button class="btn" id="authGo" type="submit">Sign in</button>
    <button class="linkbtn" id="authForgot" type="button">Forgot your password?</button>
  </form>
  <p class="authfoot" id="authSwitch">New here? <button class="linkbtn" type="button" data-tab="up">Create a free account</button></p>
</dialog>
<dialog class="palette setbox" id="setBox" aria-labelledby="setT">
  <div class="sethead"><h2 id="setT">${icon('gear')}Settings</h2><input type="search" id="setFind" placeholder="Search settings" aria-label="Search settings" autocomplete="off"><button class="x" id="setClose" aria-label="Close">×</button></div>
  <div class="setwrap">
  <nav class="setnav" aria-label="Settings sections"><button type="button" data-go="app">${icon('phone')}<span>App</span></button><button type="button" data-go="general">${icon('gear')}<span>General</span></button><button type="button" data-go="appearance">${icon('theme')}<span>Appearance</span></button><button type="button" data-go="access">${icon('zap')}<span>Accessibility</span></button><button type="button" data-go="home">${icon('star')}<span>Home page</span></button><button type="button" data-go="tools">${icon('search')}<span>Tools</span></button><button type="button" data-go="region">${icon('globe')}<span>Language and region</span></button><button type="button" data-go="privacy">${icon('shield')}<span>Privacy</span></button><button type="button" data-go="shortcuts">${icon('arrow')}<span>Shortcuts</span></button><button type="button" data-go="account">${icon('check')}<span>Account and data</span></button><button type="button" data-go="about">${icon('check')}<span>About</span></button></nav>
  <div class="setbody" id="setBody"><section id="set-app" data-sec="app"><h3>App</h3><p class="setnote" id="appState"></p><div class="setbtns"><button type="button" class="btn" data-install>Install the app</button></div><p class="setnote">The app is this website on your home screen: it opens full screen, works without internet for most tools, and gets every update and setting automatically.</p></section><section id="set-general" data-sec="general"><h3>General</h3><div class="row"><span>Theme<small>Auto follows your phone or computer.</small></span><div class="seg" data-pref="theme" role="group"><button type="button" data-v="light">☀ Light</button><button type="button" data-v="dark">☾ Dark</button><button type="button" data-v="auto">Auto</button></div></div><div class="row"><span>Colour</span><div class="sw" data-pref="accent" role="group"><button type="button" data-v="blue" style="--s:#2563eb" aria-label="Blue" title="Blue"></button><button type="button" data-v="violet" style="--s:#7c3aed" aria-label="Violet" title="Violet"></button><button type="button" data-v="green" style="--s:#059669" aria-label="Green" title="Green"></button><button type="button" data-v="teal" style="--s:#0d9488" aria-label="Teal" title="Teal"></button><button type="button" data-v="orange" style="--s:#ea580c" aria-label="Orange" title="Orange"></button><button type="button" data-v="pink" style="--s:#db2777" aria-label="Pink" title="Pink"></button><button type="button" data-v="red" style="--s:#dc2626" aria-label="Red" title="Red"></button><button type="button" data-v="gray" style="--s:#475569" aria-label="Gray" title="Gray"></button></div></div><div class="row"><span>Text size</span><div class="seg" data-pref="size" role="group"><button type="button" data-v="s">A</button><button type="button" data-v="m">A</button><button type="button" data-v="l">A</button><button type="button" data-v="xl">A</button></div></div><label class="tog"><input type="checkbox" data-pref="motion"><i></i><span><b>Animations</b><small>Turn off if movement bothers you or your phone is slow.</small></span></label><label class="tog"><input type="checkbox" data-pref="confetti"><i></i><span><b>Celebrations</b><small>A little burst of colour when you copy, pin or download.</small></span></label><label class="tog"><input type="checkbox" data-pref="toasts"><i></i><span><b>Pop-up messages</b><small>Short notes such as “Saved” or “Copied” at the bottom of the screen.</small></span></label><label class="tog"><input type="checkbox" data-pref="sounds"><i></i><span><b>Sounds</b><small>The alarm when the online timer finishes.</small></span></label></section><section id="set-appearance" data-sec="appearance"><h3>Appearance</h3><div class="row"><span>Font</span><select data-pref="font" aria-label="Font"><option value="system">Standard</option><option value="readable">Wide and clear</option><option value="rounded">Rounded</option><option value="serif">Classic (serif)</option><option value="mono">Typewriter</option></select></div><div class="row"><span>Line spacing</span><div class="seg" data-pref="lineh" role="group"><button type="button" data-v="normal">Normal</button><button type="button" data-v="relaxed">Relaxed</button></div></div><div class="row"><span>Spacing</span><div class="seg" data-pref="density" role="group"><button type="button" data-v="comfy">Comfortable</button><button type="button" data-v="compact">Compact</button></div></div><div class="row"><span>Page width</span><div class="seg" data-pref="width" role="group"><button type="button" data-v="standard">Standard</button><button type="button" data-v="wide">Wide</button><button type="button" data-v="full">Full</button></div></div><div class="row"><span>Corners</span><div class="seg" data-pref="corners" role="group"><button type="button" data-v="round">Rounded</button><button type="button" data-v="square">Square</button></div></div><div class="row"><span>Cards</span><div class="seg" data-pref="cards" role="group"><button type="button" data-v="border">Outline</button><button type="button" data-v="shadow">Shadow</button><button type="button" data-v="flat">Flat</button></div></div><div class="row"><span>Icons</span><div class="seg" data-pref="icons" role="group"><button type="button" data-v="color">Colourful</button><button type="button" data-v="mono">Plain</button></div></div><div class="row"><span>Background</span><div class="seg" data-pref="bgstyle" role="group"><button type="button" data-v="plain">Plain</button><button type="button" data-v="dots">Dots</button><button type="button" data-v="grid">Grid</button></div></div><label class="tog"><input type="checkbox" data-pref="sticky"><i></i><span><b>Keep the top bar visible</b><small>The bar with Search and Sign in stays at the top while you scroll.</small></span></label></section><section id="set-access" data-sec="access"><h3>Accessibility</h3><label class="tog"><input type="checkbox" data-pref="contrast"><i></i><span><b>High contrast</b><small>Darker text and stronger borders.</small></span></label><label class="tog"><input type="checkbox" data-pref="gray"><i></i><span><b>Grey scale</b><small>Show the whole site without colour.</small></span></label><label class="tog"><input type="checkbox" data-pref="underline"><i></i><span><b>Underline links</b><small>Make every link easy to spot.</small></span></label><label class="tog"><input type="checkbox" data-pref="bigtargets"><i></i><span><b>Bigger buttons</b><small>Larger buttons and boxes that are easier to tap.</small></span></label><label class="tog"><input type="checkbox" data-pref="focus"><i></i><span><b>Strong keyboard focus</b><small>A thick outline around whatever you reach with the Tab key.</small></span></label><label class="tog"><input type="checkbox" data-pref="letters"><i></i><span><b>Easier reading</b><small>A little more space between letters and words.</small></span></label></section><section id="set-home" data-sec="home"><h3>Home page</h3><label class="tog"><input type="checkbox" data-pref="tiles"><i></i><span><b>Live tiles</b><small>The moving QR, timer and other tiles beside the search box.</small></span></label><label class="tog"><input type="checkbox" data-pref="popular"><i></i><span><b>Popular tools</b><small>The row of popular tool buttons under the search box.</small></span></label><label class="tog"><input type="checkbox" data-pref="desc"><i></i><span><b>Tool descriptions</b><small>The short line under each tool name.</small></span></label><label class="tog"><input type="checkbox" data-pref="welcome"><i></i><span><b>“Welcome back” box</b><small>Your pinned and recently used tools at the top.</small></span></label><label class="tog"><input type="checkbox" data-pref="sections"><i></i><span><b>Extra sections</b><small>How it works, who uses it, questions and answers.</small></span></label><div class="row"><span>Show first</span><select data-pref="homecat" aria-label="Category to show first"><option value="">All tools</option>${cats.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('')}</select></div><div class="row"><span>Order</span><div class="seg" data-pref="order" role="group"><button type="button" data-v="cat">By category</button><button type="button" data-v="az">A to Z</button></div></div></section><section id="set-tools" data-sec="tools"><h3>Tools</h3><label class="tog"><input type="checkbox" data-pref="newtab"><i></i><span><b>Open tools in a new tab</b><small>Keep the list open while you use a tool.</small></span></label><label class="tog"><input type="checkbox" data-pref="toolbar"><i></i><span><b>Pin and Share buttons</b><small>The buttons under each tool title.</small></span></label><label class="tog"><input type="checkbox" data-pref="guides"><i></i><span><b>How-to and questions</b><small>The steps and questions under each tool.</small></span></label><label class="tog"><input type="checkbox" data-pref="related"><i></i><span><b>“More tools” list</b><small>The list of other tools beside each tool.</small></span></label><div class="row"><span>Units<small>Starting units for the BMI and calorie calculators.</small></span><div class="seg" data-pref="units" role="group"><button type="button" data-v="metric">Metric (kg, cm)</button><button type="button" data-v="imperial">Imperial (lb, ft)</button></div></div><div class="row"><span>Picture format<small>Starting format for picture and PDF-to-picture tools.</small></span><select data-pref="imgfmt" aria-label="Picture format"><option value="auto">Tool decides</option><option value="jpg">JPG</option><option value="png">PNG</option><option value="webp">WebP</option></select></div><div class="row"><span>Picture quality</span><select data-pref="quality" aria-label="Picture quality"><option value="auto">Tool decides</option><option value="60">Smaller file (60%)</option><option value="75">Balanced (75%)</option><option value="90">Best look (90%)</option></select></div><div class="row"><span>PDF to picture sharpness</span><select data-pref="pdfres" aria-label="PDF to picture sharpness"><option value="auto">Tool decides</option><option value="1">Standard</option><option value="2">High</option><option value="3">Very high</option></select></div></section><section id="set-region" data-sec="region"><h3>Language and region</h3><div class="row"><span>Site language<small>Translated by Google Translate.</small></span><select id="setLang" aria-label="Site language">${LANGS.map(([code, name]) => `<option value="${code}">${name}</option>`).join('')}</select></div><div class="row"><span>Number format</span><select data-pref="numfmt" aria-label="Number format"><option value="en-US">1,234,567.89</option><option value="en-IN">12,34,567.89 (lakh)</option><option value="de-DE">1.234.567,89</option><option value="fr-FR">1 234 567,89</option><option value="de-CH">1'234'567.89</option></select></div><div class="row"><span>Decimal places<small>For results that do not have a fixed format.</small></span><div class="seg" data-pref="decimals" role="group"><button type="button" data-v="auto">Auto</button><button type="button" data-v="0">0</button><button type="button" data-v="2">2</button><button type="button" data-v="4">4</button></div></div></section><section id="set-privacy" data-sec="privacy"><h3>Privacy</h3><label class="tog"><input type="checkbox" data-pref="rememberInputs"><i></i><span><b>Remember what I enter</b><small>Numbers and short text in a tool are kept for your next visit.</small></span></label><label class="tog"><input type="checkbox" data-pref="rememberRecent"><i></i><span><b>Remember tools I open</b><small>Shown as “Recently used” on the home page.</small></span></label><p class="setnote" id="setCounts"></p><div class="setbtns"><button type="button" class="btn ghost" id="setClearRecent">Clear history</button><button type="button" class="btn ghost" id="setClearPins">Unpin all tools</button><button type="button" class="btn ghost" id="setClearInputs">Delete saved entries</button></div><p class="setnote">Files you open in the tools are never uploaded or saved, whatever these settings say.</p></section><section id="set-shortcuts" data-sec="shortcuts"><h3>Keyboard shortcuts</h3><label class="tog"><input type="checkbox" data-pref="shortcuts"><i></i><span><b>Keyboard shortcuts</b><small>Turn off if they get in the way of your screen reader or other add-ons.</small></span></label><ul class="keys"><li><kbd>Ctrl</kbd> <kbd>K</kbd> or <kbd>/</kbd><span>Search tools</span></li><li><kbd>↑</kbd> <kbd>↓</kbd><span>Move in search results</span></li><li><kbd>Enter</kbd><span>Open the highlighted tool</span></li><li><kbd>Esc</kbd><span>Close a window or menu</span></li><li><kbd>Tab</kbd><span>Move between buttons and boxes</span></li></ul></section><section id="set-account" data-sec="account"><h3>Account and data</h3><p class="setnote" id="setAcct"></p><div class="setbtns"><button type="button" class="btn" id="setSignIn">Sign in or create account</button><button type="button" class="btn ghost" id="setSignOut" hidden>Sign out</button></div><div class="row" id="setNameRow" hidden><span>Your name<small>Shown on the Sign in button.</small></span><span class="inl"><input type="text" id="setName" autocomplete="name" maxlength="40"><button type="button" class="btn ghost" id="setNameSave">Save</button></span></div><h4>Your data</h4><div class="setbtns"><button type="button" class="btn ghost" id="setExport">Download my data</button><button type="button" class="btn ghost" id="setImportBtn">Load data from a file</button><input type="file" id="setImport" accept="application/json,.json" hidden></div><h4>Start again</h4><div class="setbtns"><button type="button" class="btn ghost" id="setReset">Reset settings</button><button type="button" class="btn ghost danger" id="setWipe">Delete everything on this device</button><button type="button" class="btn ghost danger" id="setDelAcct" hidden>Delete my account</button></div></section><section id="set-about" data-sec="about"><h3>About</h3><p class="setnote">${esc(cfg.siteName)} · ${tools.length} free tools that run in your browser.</p><div class="setbtns"><a class="btn ghost" href="${rel}about/">About</a><a class="btn ghost" href="${rel}privacy/">Privacy policy</a><a class="btn ghost" href="${rel}terms/">Terms</a><a class="btn ghost" href="${rel}contact/">Contact us</a></div><p class="setnote">Everything here is free. If it helps you, you can <a href="${rel}donate/">support ${esc(cfg.siteName)}</a>.</p></section><p class="setnote" id="setNone" hidden>No setting matches your search.</p></div>
  </div>
</dialog>
<dialog class="palette appbox" id="appBox" aria-labelledby="appT">
  <button class="x" id="appClose" aria-label="Close">×</button>
  <img src="${rel}assets/icon-192.png" alt="" width="64" height="64">
  <h2 id="appT">Get the ${esc(cfg.siteName)} app</h2>
  <p class="setnote">Free. No app store needed. Works on Android, iPhone, iPad and computers, and stays in step with the website.</p>
  <div id="appAndroid"><button class="btn" type="button" data-install>Install now</button></div>
  <ol class="appsteps" id="appIos" hidden>
    <li>Open this site in <b>Safari</b>.</li>
    <li>Tap the <b>Share</b> button <span class="ico-share" aria-hidden="true">⎙</span> at the bottom (or top) of the screen.</li>
    <li>Scroll down and tap <b>Add to Home Screen</b>.</li>
    <li>Tap <b>Add</b>. The ${esc(cfg.siteName)} icon appears on your home screen.</li>
  </ol>
  <ol class="appsteps" id="appOther" hidden>
    <li>Open this site in <b>Chrome</b> or <b>Edge</b>.</li>
    <li>Open the browser menu <b>⋮</b>.</li>
    <li>Choose <b>Install app</b> or <b>Add to Home screen</b>.</li>
  </ol>
  <p class="setnote" id="appDone" hidden>You are already using the app. 🎉</p>
</dialog>
<div class="appbar" id="appBar" hidden><img src="${rel}assets/icon-192.png" alt="" width="40" height="40"><span><b>${esc(cfg.siteName)} app</b><small>Free · works offline</small></span><a class="btn" href="${rel}app/">Get</a><button class="x" id="appBarX" aria-label="Not now">×</button></div>
<div class="toast" id="toast" role="status" aria-live="polite" hidden></div>
<main class="wrap">
${body}
</main>
<footer class="site-footer"><div class="wrap">
  <div class="foot-grid">
    ${footCols.map(col => `<div><h2>${esc(col.title)}</h2>${col.items.map(t => `<a href="${rel}${t.slug}/">${esc(t.name)}</a>`).join('')}</div>`).join('\n    ')}
    <div><h2>Site</h2><a href="${rel}guides/">Guides and tutorials</a><a href="${rel}donate/">Support us</a><a href="${rel}app/">Get the app</a><a href="${rel}about/">About</a><a href="${rel}contact/">Contact</a><a href="${rel}privacy/">Privacy</a><a href="${rel}terms/">Terms</a></div>
  </div>
  <div class="foot-bottom">© ${YEAR} ${esc(cfg.siteName)}. ${tools.length} free tools that run in your browser.</div>
</div></footer>
</body>
</html>
`;
}

const cats = Object.keys(COLOR).filter(c => tools.some(t => t.cat === c));
for (const t of tools) if (!(t.cat in COLOR)) throw new Error('Unknown category: ' + t.cat);
tools.sort((a, b) => cats.indexOf(a.cat) - cats.indexOf(b.cat)); // stable: keeps the order within a category
const footCols = cats.map(c => ({ title: c, items: tools.filter(t => t.cat === c) }));
const BADGE = { 'photo-editor': 'New', 'collage-maker': 'New', 'video-compressor': 'New', 'heic-to-jpg': 'New', 'background-remover': 'New', 'currency-converter': 'New', 'online-notepad': 'New', 'image-text-editor': 'New', 'edit-pdf': 'New', 'sign-pdf': 'New', 'image-to-text': 'New', 'screen-recorder': 'New', 'video-to-mp3': 'New', 'cgpa-calculator': 'New', 'invoice-generator': 'New', 'spin-the-wheel': 'New', 'scientific-calculator': 'Popular', 'crop-image': 'Popular', 'typing-speed-test': 'Popular', 'fancy-text-generator': 'Popular', 'merge-pdf': 'Popular', 'compress-pdf': 'Popular', 'image-compressor': 'Popular', 'mortgage-calculator': 'Popular', 'qr-code-generator': 'Popular', 'password-generator': 'Popular' };
const card = (t, rel) => `<div class="tool-card" style="--c:${COLOR[t.cat]}">${tile(t)}${BADGE[t.slug] ? `<span class="badge b-${BADGE[t.slug].toLowerCase()}">${BADGE[t.slug]}</span>` : ''}<a class="t-link" href="${rel}${t.slug}/">${esc(t.name)}</a><small>${esc(t.card)}</small><button class="star" data-slug="${t.slug}" aria-label="Pin ${esc(t.name)}" aria-pressed="false">${icon('star')}</button></div>`;
const bySlug = s => { const t = tools.find(t => t.slug === s); if (!t) throw new Error('No tool ' + s); return t; };

// Search index used by the finder, the palette and the "My tools" lists.
write('assets/tools-index.js', 'window.TOOLS=' + JSON.stringify(tools.map(t => [t.slug, t.name, t.cat, COLOR[t.cat], t.card])) + ';\n');

// ---------- home ----------
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

// Live tiles beside the hero: each one acts out what its tool does.
const live = (slug, label, scene) => { const t = bySlug(slug); return `<a class="live" style="--c:${COLOR[t.cat]}" href="${slug}/" aria-label="${esc(t.name)}"><span class="scene" aria-hidden="true">${scene}</span><b>${label}</b></a>`; };
const bento = [
  live('qr-code-generator', 'QR code', `<span class="qr" id="liveQr">${'<i></i>'.repeat(49)}</span>`),
  live('countdown-timer', 'Timer', '<span class="sc-timer"><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15"/><circle class="arc" id="liveArc" cx="18" cy="18" r="15"/></svg><span id="liveTimer">05:00</span></span>'),
  live('stopwatch', 'Stopwatch', '<span class="sc-big" id="liveSw">00:00.00</span>'),
  live('password-generator', 'Password', '<span class="sc-pw" id="livePw">x7$Kq!9mZp</span>'),
  live('merge-pdf', 'Merge PDF', '<span class="sc-merge"><i></i><i></i></span>'),
  live('image-compressor', 'Compress', '<span class="sc-shrink"><u><i></i></u><em><span>4.2 MB</span><span>0.9 MB</span></em></span>'),
  live('edit-pdf', 'Edit PDF', '<span class="sc-edit"><span class="doc"><i></i><span id="liveEdit">Total: $500</span><i></i><i></i></span></span>'),
  live('random-number-generator', 'Random', '<span class="sc-big" id="liveDice">7</span>'),
  live('mortgage-calculator', 'Mortgage', `<span class="sc-bars">${[.45, .7, .55, .9, 1].map((h, k) => `<i style="--k:${k};--s:${h}"></i>`).join('')}</span>`)
].join('');
const popular = ['merge-pdf', 'edit-pdf', 'compress-pdf', 'image-compressor', 'image-text-editor', 'mortgage-calculator'].map(bySlug);
const spot = (slug, title, text, points, art) => { const t = bySlug(slug); return `<article class="spot-slide" style="--c:${COLOR[t.cat]}"><div class="spot-copy"><span class="spot-badge">★ Featured tool</span><h2>${esc(title)}</h2><p>${esc(text)}</p><ul>${points.map(p => `<li>${icon('check')}${esc(p)}</li>`).join('')}</ul><a class="btn" href="${slug}/">Open ${esc(t.name)} →</a></div><div class="spot-art" aria-hidden="true">${art}</div></article>`; };
const who = (title, text, slugs) => `<div class="who"><h3>${title}</h3><p>${text}</p>${slugs.map(sl => `<a class="who-link" href="${sl}/">${esc(bySlug(sl).name)}</a>`).join('')}</div>`;

write('index.html', layout({
  rel: '', urlPath: '',
  title: `${cfg.siteName} - Free Online Tools: PDF, Image, Calculators`,
  desc: `${tools.length} free online tools: merge PDF, edit PDF text, compress PDF, image compressor, mortgage calculator and more. No sign-up needed. Files never leave your device.`,
  head: jsonLd({ '@context': 'https://schema.org', '@type': 'WebSite', name: cfg.siteName, alternateName: 'GetToolNest free online tools', url: SITE + '/', potentialAction: { '@type': 'SearchAction', target: SITE + '/?q={search_term_string}', 'query-input': 'required name=search_term_string' } }) + jsonLd({ '@context': 'https://schema.org', '@type': 'Organization', name: cfg.siteName, url: SITE + '/', logo: SITE + '/assets/icon-512.png', email: cfg.contactEmail || undefined }) ,
  body: `<section class="hero hero2"><div class="hero-copy">
  <p class="hello"><span class="wave" aria-hidden="true">👋</span> Welcome, dear friends!</p>
  <h1>Use any tool you need, <span class="hl">completely free</span></h1>
  <p class="sub">Scroll down and pick whatever you need. All ${tools.length} tools for PDFs, pictures, money, text and code are free for everyone: zero ads, unlimited use, no sign-up and nothing to install.</p>
  <div class="finder">${icon('search')}<input type="search" id="toolSearch" placeholder="Search for a tool, for example “pdf”" aria-label="Search tools" autocomplete="off"><div class="f-list" id="heroResults" hidden></div></div>
  <p class="popular">Popular: ${popular.map(t => `<a href="${t.slug}/">${esc(t.name)}</a>`).join('')}</p>
  <ul class="trust"><li>${icon('check')}100% free</li><li>${icon('check')}Zero ads</li><li>${icon('check')}Unlimited use</li><li>${icon('check')}Files stay on your device</li><li>${icon('check')}Works on your phone</li></ul>
  ${cfg.contactEmail ? `<div class="ask"><span class="ask-ic" aria-hidden="true">💌</span><p><b>You are not a customer here, you are family.</b> And for us, family is everything. Want something new added to a tool, or need a brand-new tool on the website? Just email us and we will make it for you.</p><a class="btn" href="mailto:${esc(cfg.contactEmail)}?subject=${encodeURIComponent('Idea for ' + cfg.siteName)}">Email us</a></div>` : ''}
  <a class="scrollcue" href="#tools">Scroll down to see all tools <span aria-hidden="true">↓</span></a>
</div><div class="bento" aria-label="Popular tools">${bento}</div></section>
<section class="spot" aria-roledescription="carousel" aria-label="Featured tools">
  <div class="spot-track" id="spotTrack">
    ${spot('edit-pdf', 'Change the text inside any PDF', 'Click on a word in your PDF and type. The new text uses the same font and size, so nobody can tell it was changed.', ['Keeps the original font', 'No watermark', 'Nothing uploaded'], '<span class="art-doc"><i></i><i></i><span class="art-swap"><b>Total: $500</b><b>Total: $750</b></span><i></i><i class="s"></i></span>')}
    ${spot('online-notepad', 'GetToolNest Notepad', 'A full code and text editor with tabs, colours for 34 languages, find and replace, bookmarks and line tools. Your tabs are still there tomorrow.', ['Unlimited lines', 'Tabs saved automatically', 'Works offline'], '<span class="art-ed"><span class="art-bar"><i></i><i></i><i></i></span><i style="--w:55%;--k:0" class="k"></i><i style="--w:75%;--k:1" class="s"></i><i style="--w:40%;--k:2" class="n"></i><i style="--w:65%;--k:3" class="k"></i><i style="--w:30%;--k:4" class="s"></i></span>')}
    ${spot('image-text-editor', 'Edit the words in a picture', 'Click on text in a photo or a poster, type something new, and download it. The tool finds the text for you.', ['Finds text by itself', 'Matches the colour', 'JPG and PNG'], '<span class="art-pic"><span class="art-sun"></span><span class="art-hill"></span><span class="art-swap art-tag"><b>SALE 50%</b><b>SALE 70%</b></span></span>')}
    ${spot('merge-pdf', 'Join many PDFs into one', 'Drop your files, drag them into order and get one tidy PDF in a few seconds, even with dozens of pages.', ['Any number of files', 'Drag to reorder', 'Fast on phones'], '<span class="art-merge"><i></i><i></i><i></i></span>')}
    ${spot('qr-code-generator', 'Make a QR code in one second', 'Links, Wi-Fi passwords, phone numbers or text. Pick colours and download a sharp picture for print.', ['Wi-Fi and links', 'Your own colours', 'Never expires'], `<span class="art-qr">${Array.from({ length: 49 }, (_, i) => `<i style="--k:${(i * 7) % 13}"${[0, 1, 2, 7, 9, 14, 15, 16, 4, 5, 6, 11, 13, 18, 19, 20, 28, 29, 30, 35, 37, 42, 43, 44, 24, 26, 32, 38, 40, 46, 47, 22, 33].includes(i) ? ' class="on"' : ''}></i>`).join('')}</span>`)}
  </div>
  <button class="spot-nav prev" type="button" aria-label="Previous">‹</button><button class="spot-nav next" type="button" aria-label="Next">›</button>
  <div class="spot-dots" id="spotDots" role="tablist"></div>
</section>
<script>
(function () {
  var tr = document.getElementById('spotTrack'), dots = document.getElementById('spotDots'), slides = tr.children, i = 0, timer, hold = false;
  for (var k = 0; k < slides.length; k++) (function (k) { var d = document.createElement('button'); d.type = 'button'; d.setAttribute('aria-label', 'Slide ' + (k + 1)); d.onclick = function () { go(k); }; dots.appendChild(d); })(k);
  function go(k) { i = (k + slides.length) % slides.length; tr.scrollTo({ left: slides[i].offsetLeft - tr.offsetLeft, behavior: document.documentElement.hasAttribute('data-calm') ? 'auto' : 'smooth' }); mark(); }
  function mark() { for (var k = 0; k < dots.children.length; k++) dots.children[k].classList.toggle('on', k === i); }
  tr.addEventListener('scroll', function () { var n = Math.round(tr.scrollLeft / tr.clientWidth); if (n !== i) { i = n; mark(); } }, { passive: true });
  document.querySelector('.spot .prev').onclick = function () { go(i - 1); };
  document.querySelector('.spot .next').onclick = function () { go(i + 1); };
  var spot = document.querySelector('.spot');
  spot.addEventListener('mouseenter', function () { hold = true; }); spot.addEventListener('mouseleave', function () { hold = false; });
  spot.addEventListener('focusin', function () { hold = true; }); spot.addEventListener('focusout', function () { hold = false; });
  timer = setInterval(function () { if (!hold && !document.hidden && !document.documentElement.hasAttribute('data-calm')) go(i + 1); }, 5500);
  mark();
})();
</script>
<section class="mine" id="mine" hidden>
  <h2>Welcome back</h2>
  <p id="mineNote">${cfg.firebase ? 'Saved on this device. Sign in to sync across devices.' : 'Saved on this device.'}</p>
  <div id="minePinsBox"><h3>Pinned</h3><div class="chiprow" id="minePins"></div></div>
  <div id="mineRecentBox"><h3>Recently used</h3><div class="chiprow" id="mineRecent"></div></div>
</section>
<section class="block explore">
  <h2 class="section-title">Browse by category</h2>
  <div class="explore-grid">${cats.map(c => { const list = tools.filter(t => t.cat === c); return `<div class="ex" style="--c:${COLOR[c]}"><a class="ex-head" href="#${catId(c)}">${tile(list[0])}<span><b>${esc(c)}</b><small>${list.length} tools</small></span><em class="ex-go" aria-hidden="true">→</em></a><p>${esc(CATINFO[c][0])}</p><div class="ex-links">${list.slice(0, 3).map(t => `<a href="${t.slug}/">${esc(t.name)}</a>`).join('')}</div></div>`; }).join('')}</div>
</section>
<h2 class="section-title all-title">All tools</h2>
<div class="pills" id="tools" role="group" aria-label="Filter by category"><button class="pill on" data-cat="" aria-pressed="true">All tools</button>${cats.map(c => `<button class="pill" data-cat="${esc(c)}" aria-pressed="false">${esc(c)}</button>`).join('')}</div>
${ad(cfg.adSlotTop)}
${cats.map(c => { const list = tools.filter(t => t.cat === c); return `<section class="cat" id="${catId(c)}" data-cat="${esc(c)}"><h2 class="cat-title">${esc(c)}<span>${list.length}</span></h2><div class="grid">${list.map(t => card(t, '')).join('')}</div></section>`; }).join('\n')}
${ad(cfg.adSlotBottom)}
<section class="block">
  <h2 class="section-title">Why people like it</h2>
  <div class="features">
    <div class="feature" style="--c:#12a150"><span class="tile">${icon('shield')}</span><h3>Private</h3><p>Every tool runs inside your browser. Your files, text and numbers are not uploaded to us.</p></div>
    <div class="feature" style="--c:#d98e00"><span class="tile">${icon('zap')}</span><h3>Fast</h3><p>Nothing to install and no waiting for uploads. Results appear as you type.</p></div>
    <div class="feature" style="--c:#8b5cf6"><span class="tile">${icon('star')}</span><h3>Remembers you</h3><p>Pin the tools you use most. Leave a calculation and it is still there next time.</p></div>
    <div class="feature" style="--c:#0e9fb5"><span class="tile">${icon('globe')}</span><h3>Your language</h3><p>Switch the whole site into ${LANGS.length} languages from the menu at the top.</p></div>
  </div>
</section>
`
}));

// ---------- tool pages ----------
// Full tutorials live in src/guides/<slug>.json (what, uses, tutorial, features, example, tips, problems).
const guideOf = slug => { const f = path.join(ROOT, 'src/guides', slug + '.json'); return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null; };
function guideHtml(t, g) {
  if (!g) return `<h2 id="tutorial">How to use ${esc(t.name)}</h2>\n<ol class="steps">${t.steps.map(st => `<li>${esc(st)}</li>`).join('')}</ol>`;
  const toc = [['about', `What is ${t.name}?`], ['uses', 'What it is for'], ['tutorial', 'Step-by-step tutorial'], ['features', 'Features'], g.example && ['example', 'Example'], ['tips', 'Tips'], ['problems', 'Problems and fixes'], ['faq', 'Questions']].filter(Boolean);
  return `<nav class="toc" aria-label="On this page"><b>On this page</b>${toc.map(([id, l]) => `<a href="#${id}">${esc(l)}</a>`).join('')}</nav>
<section class="guide" id="about"><h2>What is ${esc(t.name)}?</h2>${g.what.map(p => `<p>${esc(p)}</p>`).join('')}</section>
<section class="guide" id="uses"><h2>What you can use it for</h2><div class="uses">${g.uses.map(([h, p]) => `<div class="use"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('')}</div></section>
<section class="guide" id="tutorial"><h2>Step-by-step tutorial: how to use ${esc(t.name)}</h2><ol class="tut">${g.tutorial.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('')}</ol></section>
<section class="guide" id="features"><h2>Features</h2><ul class="feats">${g.features.map(([h, p]) => `<li>${icon('check')}<span><b>${esc(h)}</b>${esc(p)}</span></li>`).join('')}</ul></section>
${g.example ? `<section class="guide" id="example"><div class="example"><h2>${esc(g.example.title)}</h2><p>${esc(g.example.text)}</p></div></section>` : ''}
<section class="guide" id="tips"><h2>Tips and tricks</h2><ul class="tips">${g.tips.map(p => `<li>${esc(p)}</li>`).join('')}</ul></section>
<section class="guide" id="problems"><h2>Problems and how to fix them</h2><div class="faq probs">${g.problems.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></section>`;
}
for (const t of tools) {
  const g = guideOf(t.slug);
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
    }) + (g ? jsonLd({
      '@context': 'https://schema.org', '@type': 'HowTo', name: `How to use ${t.name}`, description: g.what[0],
      step: g.tutorial.map(([h, p], i) => ({ '@type': 'HowToStep', position: i + 1, name: h, text: p, url: `${SITE}/${t.slug}/#tutorial` }))
    }) : '') + jsonLd({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
        { '@type': 'ListItem', position: 2, name: t.name, item: `${SITE}/${t.slug}/` }
      ]
    }),
    body: `<div class="tool-head">
  <p class="crumbs"><a href="../">Home</a> › ${esc(t.cat)}</p>
  <div class="title-row">${tile(t)}<h1 class="page-title">${esc(t.name)}</h1></div>
  <p class="lead">${esc(t.intro)}</p>
  ${cfg.contactEmail ? `<div class="family"><span class="fam-ic" aria-hidden="true">❤️</span><div class="fam-txt"><b>You are not a customer here, you are family.</b><span>Zero ads, unlimited use, free forever. Want something new added to ${esc(t.name)}, or need a new tool? Email us and we will make it for you.</span></div><a class="fam-btn" href="mailto:${esc(cfg.contactEmail)}?subject=${encodeURIComponent('Idea for ' + t.name)}">✉ Email us</a></div>` : ''}
  <div class="head-actions"><button id="pinBtn" aria-pressed="false">${icon('star')}<span>Pin this tool</span></button><button id="shareBtn">${icon('share')}<span>Share</span></button><button id="clearBtn" hidden>${icon('undo')}<span>Clear my saved entries</span></button></div>
</div>
<div class="cols${t.wide ? ' wide' : ''}" style="--c:${COLOR[t.cat]}">
<div class="content">
<section class="card">
${body}
</section>
<p class="safe">${icon('shield')}Runs on your device. Nothing is uploaded. Zero ads, unlimited use.</p>
${ad(cfg.adSlotTop)}
${guideHtml(t, g)}
${ad(cfg.adSlotBottom)}
<h2 id="faq">Questions and answers</h2>
<div class="faq">${t.faq.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>
</div>
<aside class="side">
  <div class="side-box" id="sidePins" hidden><h2>Your pinned tools</h2><div class="chiprow" id="sidePinsList"></div></div>
  <div class="side-box"><h2>More tools</h2>${related.map(o => `<a class="side-link" href="../${o.slug}/" style="--c:${COLOR[o.cat]}">${tile(o)}${esc(o.name)}</a>`).join('')}</div>
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

const CARD = Object.assign({ presets: [5, 10, 25, 50], min: 2, max: 1000 }, cfg.card || {});
const SOON = 'Card payments are being set up and will open very soon. Until then you can use the Crypto tab. Thank you for your patience! ❤';
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
${cfg.firebase ? `<h2>Optional account</h2>
<p>You can use every tool without an account. If you create one, with Google or with an email address and password, Google Firebase stores your name, email address and a user ID (passwords are handled by Firebase and never seen by us), and we store your pinned tools, recent tools and calculator settings in Google Firebase so they appear on your other devices. Files and text you process in the tools are still never uploaded. To delete this data, sign in and email us from the same address.</p>` : ''}
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
<p>We may update the tools and these terms from time to time. Continued use of the site means you accept the current terms.</p>` },
  { slug: 'app', title: 'Get the app', desc: `Install the free ${cfg.siteName} app on Android, iPhone, iPad or your computer. ${tools.length} tools that work offline.`, html: `
<div class="apphero">
  <img src="../assets/icon-512.png" alt="${esc(cfg.siteName)} app icon" width="96" height="96">
  <div><p class="lead" style="margin:0">All ${tools.length} tools in one free app. Opens full screen, works without internet, and updates by itself.</p></div>
</div>
<div class="dlrow">
  ${cfg.androidApk ? `<a class="dl-card" data-os="android" href="../${cfg.androidApk}" download="GetToolNest.apk"><b>Download for Android</b><small>APK · version ${esc(cfg.androidApkVersion)} · ${Math.max(1, Math.round(fs.statSync(path.join(ROOT, cfg.androidApk)).size / 1024))} KB · Android 7 and newer</small></a>` : ''}
  <button class="dl-card" type="button" data-os="windows" data-install><b>Download for Windows</b><small>Installs from Edge or Chrome · Windows 10 and 11</small></button>
  <button class="dl-card" type="button" data-os="ios" data-install><b>Get it on iPhone or iPad</b><small>Add to Home Screen from Safari</small></button>
  <button class="dl-card" type="button" data-os="mac" data-install><b>Mac, Linux, Chromebook</b><small>Installs from Chrome or Edge</small></button>
</div>
<div class="stores">
  <button class="btn big" type="button" data-install>${icon('phone')}Install now</button>
  ${cfg.playStoreUrl ? `<a class="store" href="${esc(cfg.playStoreUrl)}" rel="noopener"><small>GET IT ON</small><b>Google Play</b></a>` : `<span class="store soon" title="Coming soon"><small>COMING SOON TO</small><b>Google Play</b></span>`}
  ${cfg.appStoreUrl ? `<a class="store" href="${esc(cfg.appStoreUrl)}" rel="noopener"><small>DOWNLOAD ON THE</small><b>App Store</b></a>` : `<span class="store soon" title="Coming soon"><small>COMING SOON TO</small><b>App Store</b></span>`}
</div>
<p class="appstate" id="appState2"></p>
<h2>Install on Android</h2>
<p><b>Option 1: the APK.</b></p>
<ol><li>Tap <b>Download for Android</b> above.</li><li>Open the downloaded file. If Android asks, allow your browser to <b>install unknown apps</b> (Android shows this for every app that does not come from Play Store).</li><li>Tap <b>Install</b>. Files you save in the app go to <b>Downloads/GetToolNest</b>.</li></ol>
<p><b>Option 2: straight from Chrome.</b> Tap <b>Install now</b>, or open the menu <b>⋮</b> and choose <b>Install app</b>. This version also lets you sign in with Google.</p>
<h2>Install on iPhone or iPad</h2>
<ol><li>Open ${esc(cfg.siteName)} in <b>Safari</b>.</li><li>Tap the <b>Share</b> button.</li><li>Tap <b>Add to Home Screen</b>, then <b>Add</b>.</li></ol>
<h2>Install on Windows</h2>
<ol><li>Open ${esc(cfg.siteName)} in <b>Microsoft Edge</b> or <b>Google Chrome</b>.</li><li>Click <b>Download for Windows</b> above, then <b>Install</b>. (Or click the install icon at the right of the address bar.)</li><li>${esc(cfg.siteName)} opens in its own window and appears in the Start menu and taskbar. To remove it, use Settings → Apps.</li></ol>
<h2>Install on Mac, Linux or Chromebook</h2>
<ol><li>Open ${esc(cfg.siteName)} in Chrome or Edge.</li><li>Click the install icon in the address bar, or <b>Install now</b> above.</li></ol>
<h2>Why use the app</h2>
<ul><li><b>Works offline.</b> Calculators, converters, text tools and the PDF tools you have used before keep working without internet.</li><li><b>Always up to date.</b> New tools and fixes arrive by themselves. There is nothing to update.</li><li><b>Same settings everywhere.</b> Sign in once and your theme, pinned tools and saved work follow you between the app and the website.</li><li><b>Private.</b> Like the website, the app never uploads your files.</li><li><b>Small.</b> It takes almost no space on your phone.</li></ul>` },
  { slug: 'donate', title: 'Support GetToolNest', desc: `${cfg.siteName} is free. If it helps you, you can support it by card or with USDT, USDC or Bitcoin.`, html: `
<p class="lead" style="margin-top:0"><b>All our services are free</b>, and they will stay free. There is nothing to buy and nothing locked.</p>
<p><b>But if you would like to support us, you can send a gift</b> by card or with crypto, in any amount. It pays for the website and helps us build new tools. Thank you! ❤</p>
<h2 class="pay-q">How would you like to give?</h2>
<div class="paypick" role="tablist" aria-label="How to give">
  <button type="button" role="tab" id="tabCard" aria-controls="payCard" aria-pressed="true"><span class="pp-ic" aria-hidden="true">💳</span><span class="pp-tx"><b>Card</b><small>Visa, Mastercard, Google Pay, Apple Pay</small></span><span class="pp-ok" aria-hidden="true">✓</span></button>
  <button type="button" role="tab" id="tabCrypto" aria-controls="payCrypto" aria-pressed="false"><span class="pp-ic" aria-hidden="true">🪙</span><span class="pp-tx"><b>Crypto</b><small>USDT, USDC, Bitcoin</small></span><span class="pp-ok" aria-hidden="true">✓</span></button>
</div>
<div class="paypanel" id="payCard" role="tabpanel" aria-labelledby="tabCard">
  <p class="pay-soon" id="paySoon"${CARD.checkoutApi ? ' hidden' : ''}>⏳ Card payments open very soon. Until then, please use <b>Crypto</b>. Thank you! ❤</p>
  <div class="pay-step"><span class="pay-n">1</span><b>Choose an amount</b></div>
  <div class="amts" role="group" aria-label="Amount">${(CARD.presets || []).map((a, i) => `<button type="button" class="amt" data-amt="${a}" aria-pressed="${i === 1}">$${a}</button>`).join('')}</div>
  <label class="amt-in amt-other"><b aria-hidden="true">$</b><input type="number" id="amtOwn" inputmode="decimal" min="${CARD.min}" max="${CARD.max}" step="0.01" placeholder="Other amount" aria-label="Other amount in US dollars" data-nomemo></label>
  <div class="pay-step"><span class="pay-n">2</span><b>Your email</b><small>for your receipt</small></div>
  <label class="amt-in"><input type="email" id="payEmail" autocomplete="email" maxlength="254" placeholder="you@example.com" aria-label="Your email" data-nomemo></label>
  <button class="btn paybtn" type="button" id="payGo" data-api="${esc(CARD.checkoutApi || '')}">💳 Pay with Card</button>
  <p class="msg" id="payMsg" role="status" aria-live="polite" hidden></p>
  <p class="pay-safe">🔒 Secure checkout by PayMeGate. We never see your card. Minimum $${CARD.min}.</p>
</div>
<div class="paypanel" id="payCrypto" role="tabpanel" aria-labelledby="tabCrypto" hidden>
<div class="pay-step"><span class="pay-n">1</span><b>Pick a coin and copy its address</b></div>
<div class="warnbox"><b>Before you send:</b> choose the <b>same network</b> in your wallet as the one shown on the card. Crypto sent on a different network, or a different coin, cannot be recovered.</div>
<div class="coins">${(cfg.donate || []).map((d, i) => `<div class="coin" data-coin="${esc(d.coin)}">
  <div class="coin-head"><b>${esc(d.coin)}</b><span class="net">${esc(d.network)}</span></div>
  <code class="addr notranslate" translate="no">${esc(d.address)}</code>
  <button class="btn ghost" type="button" data-copy="${esc(d.address)}">Copy address</button>
  <small>Send only ${esc(d.coin)} on ${esc(d.network)}. Minimum ${esc(d.min)}.${d.note ? ' ' + esc(d.note) : ''}</small>
</div>`).join('')}</div>
</div>
<h2>Other ways to help</h2>
<ul><li><b>Share ${esc(cfg.siteName)}</b> with a friend, a class group or your colleagues.</li><li><b>Tell us</b> about a bug or a tool you need on the <a href="../contact/">contact page</a>.</li><li><b>Install the app</b> from <a href="../app/">Get the app</a> and keep using it.</li></ul>
<p class="setnote">Donations are voluntary gifts. They do not buy any product, service or extra features.</p>
<script>
(function () {
  document.querySelectorAll('[data-copy]').forEach(function (b) { b.addEventListener('click', function () { copyText(b.dataset.copy, b); }); });
  var tabs = { card: document.getElementById('tabCard'), crypto: document.getElementById('tabCrypto') };
  function show(k) {
    Object.keys(tabs).forEach(function (n) { tabs[n].setAttribute('aria-pressed', String(n === k)); document.getElementById(n === 'card' ? 'payCard' : 'payCrypto').hidden = n !== k; });
    if (history.replaceState) history.replaceState(null, '', k === 'crypto' ? '#crypto' : location.pathname);
  }
  tabs.card.addEventListener('click', function () { show('card'); });
  tabs.crypto.addEventListener('click', function () { show('crypto'); });
  if (location.hash === '#crypto') show('crypto');

  var MIN = ${Number(CARD.min) || 2}, MAX = ${Number(CARD.max) || 1000}, SOON = ${JSON.stringify(SOON)};
  var own = document.getElementById('amtOwn'), go = document.getElementById('payGo'), msg = document.getElementById('payMsg');
  var amts = document.querySelectorAll('.amt');
  function say(text, cls) { msg.hidden = !text; msg.textContent = text || ''; msg.className = 'msg' + (cls ? ' ' + cls : ''); }
  function amount() {
    if (own.value.trim() !== '') return Math.round(parseFloat(own.value) * 100) / 100;
    var on = document.querySelector('.amt[aria-pressed="true"]');
    return on ? Number(on.dataset.amt) : NaN;
  }
  function label() { var a = amount(); go.textContent = '💳 Pay ' + (isFinite(a) && a > 0 ? '$' + (a % 1 ? a.toFixed(2) : a) + ' ' : '') + 'with Card'; }
  amts.forEach(function (b) { b.addEventListener('click', function () { amts.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); own.value = ''; if (go.dataset.api) say(''); label(); }); });
  own.addEventListener('input', function () { var typed = own.value.trim() !== ''; amts.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); }); if (!typed) amts[Math.min(1, amts.length - 1)].setAttribute('aria-pressed', 'true'); if (go.dataset.api) say(''); label(); });
  label();
  go.addEventListener('click', function () {
    var api = go.dataset.api;
    if (!api) { say(SOON); document.getElementById('paySoon').hidden = true; return; }
    var a = amount();
    if (!isFinite(a) || a < MIN || a > MAX) { say('Please choose an amount between $' + MIN + ' and $' + MAX + '.', 'bad'); own.focus(); return; }
    var em = document.getElementById('payEmail'), email = em.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { say('Please enter your email address. The payment page needs it to send your receipt.', 'bad'); em.focus(); return; }
    go.disabled = true; say('Opening the secure checkout…');
    fetch(api, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: a, email: email }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { if (!r.ok || !d.url) throw new Error(d.error || 'The checkout could not be opened. Please try again.'); location.href = d.url; }); })
      .catch(function (e) { go.disabled = false; say(e && e.message && e.message !== 'Failed to fetch' ? e.message : 'Could not reach the payment service. Please check your internet and try again.', 'bad'); });
  });
  window.addEventListener('pageshow', function () { go.disabled = false; });
})();
</script>` },
  { slug: 'delete-account', title: 'Delete your account', desc: `How to delete your ${cfg.siteName} account and the data stored with it.`, html: `
<p>You can delete your ${esc(cfg.siteName)} account at any time, from the website or the app.</p>
<h2>Delete it yourself</h2>
<ol><li>Sign in.</li><li>Open the menu with your name at the top, then <b>Settings</b>.</li><li>Go to <b>Account and data</b> and press <b>Delete my account</b>.</li></ol>
<p>This removes your account (name, email address and sign-in details) and the pinned tools, history, saved entries and settings stored with it. It happens straight away and cannot be undone.</p>
<h2>Ask us to delete it</h2>
<p>If you cannot sign in, email <a href="mailto:${esc(cfg.contactEmail)}">${esc(cfg.contactEmail)}</a> from the address you signed up with and ask us to delete your account. We do this within 30 days.</p>
<h2>What is not affected</h2>
<p>Files you open in the tools are never uploaded, so there is nothing of them to delete. Data saved in your browser on a device stays there until you clear it under Settings, Account and data, <b>Delete everything on this device</b>.</p>` }
];
pages.push({ slug: 'guides', title: 'Guides and tutorials', desc: `Step-by-step tutorials for all ${tools.length} ${cfg.siteName} tools: what each tool does, how to use it, tips and fixes.`, html: `
<p class="lead" style="margin-top:0">Every tool on ${esc(cfg.siteName)} has its own full tutorial: what the tool is, what you can use it for, a step-by-step guide, its features, a worked example, tips and fixes for common problems. Pick a tool below to read its guide.</p>
<div class="gfind"><input type="search" id="gq" placeholder="Search the guides, for example “compress”" aria-label="Search the guides" autocomplete="off" data-nomemo></div>
${cats.map(c => `<section class="gcat" data-cat="${esc(c)}"><h2 style="--c:${COLOR[c]}">${esc(c)}</h2><p class="cat-desc">${esc(CATINFO[c][1])}</p><div class="glist">${tools.filter(t => t.cat === c).map(t => { const g = guideOf(t.slug); return `<a class="gitem" href="../${t.slug}/#tutorial" style="--c:${COLOR[t.cat]}">${tile(t)}<span><b>How to use ${esc(t.name)}</b><small>${esc(g ? g.what[0] : t.intro)}</small><em>${g ? g.tutorial.length + ' steps · ' + g.tips.length + ' tips · ' + g.problems.length + ' fixes' : t.steps.length + ' steps'}</em></span></a>`; }).join('')}</div></section>`).join('')}
<script>
(function () {
  var q = document.getElementById('gq');
  q.addEventListener('input', function () {
    var v = q.value.trim().toLowerCase();
    document.querySelectorAll('.gcat').forEach(function (s) {
      var any = false;
      s.querySelectorAll('.gitem').forEach(function (a) { var ok = !v || a.textContent.toLowerCase().indexOf(v) !== -1; a.hidden = !ok; any = any || ok; });
      s.hidden = !any;
    });
  });
})();
</script>` });
for (const p of pages) {
  write(`${p.slug}/index.html`, layout({
    rel: '../', urlPath: p.slug + '/', title: `${p.title} | ${cfg.siteName}`, desc: p.desc,
    here: p.title,
    body: `<div class="tool-head"><p class="crumbs"><a href="../">Home</a></p><h1 class="page-title">${esc(p.title)}</h1></div><section class="prose">${p.html}</section>`
  }));
}

// 404 is served from any path, so it needs absolute links.
const base = new URL(SITE + '/').pathname;
write('404.html', layout({
  rel: base, urlPath: '404.html', title: `Page not found | ${cfg.siteName}`, desc: 'This page does not exist.', noindex: true,
  body: `<section class="center"><h1>404</h1><p>That page does not exist. Every tool is on the home page.</p><p><a class="btn" href="${base}">See all tools</a></p></section>`
}));

// Thank-you page: PayMeGate sends people here after a card gift (https://gettoolnest.xyz/thank-you.html).
{
  const mail = cfg.contactEmail;
  write('thank-you.html', layout({
    rel: '', urlPath: 'thank-you.html', title: `Thank you! | ${cfg.siteName}`, desc: `Thank you for supporting ${cfg.siteName}.`, noindex: true,
    body: `<section class="ty">
  <div class="ty-hero">
    <div class="ty-heart" aria-hidden="true">💖</div>
    <h1>Thank you, from the bottom of our hearts!</h1>
    <p class="lead">Your gift has reached us, and honestly, it made our whole day. You are awesome, and you just made the internet a little kinder. 🙌</p>
    <div class="ty-stats"><span><b>${tools.length}+</b>free tools</span><span><b>0</b>ads</span><span><b>∞</b>unlimited use</span><span><b>0</b>sign-up needed</span></div>
  </div>
  <p class="setnote ty-note" id="tyNote" hidden>Closed the payment page without paying? No problem at all, nothing was charged. You can <a href="donate/">try again</a> any time, and we are just as grateful that you thought of us. ❤</p>

  <div class="ty-card ty-letter">
    <h2><span aria-hidden="true">💌</span> A personal note from us to you</h2>
    <p>Dear friend,</p>
    <p>There are millions of websites on the internet, and today you stopped at ours and decided to give something back. You did not have to. Everything here is free, and it will always be free. Nobody asked you, nothing was locked, and there was nothing to buy. You simply chose to help, and that is exactly what makes your gift so special to us.</p>
    <p>${esc(cfg.siteName)} is not a big company with a big office. It is a small project built with a lot of late nights, a lot of testing and a lot of love. Every time we add a tool, we ask ourselves one question: <i>"Would this really help someone today?"</i> Gifts like yours tell us that the answer is yes.</p>
    <p>Remember what we always say: here, you are not a customer. <b>You are family.</b> And for us, family is everything. Today, family showed up for us, and we will never forget it. ❤</p>
  </div>

  <div class="ty-card">
    <h2><span aria-hidden="true">🎯</span> Our goal, and why we do this</h2>
    <p>Our goal is very simple: <b>useful tools, completely free, for everyone in the world</b>. Not a "free trial". Not "free with ads everywhere". Not "free until you hit a limit". Truly free, forever.</p>
    <p>We started ${esc(cfg.siteName)} because we were tired of tool websites that make you wait, watch ads, create an account, or pay just to merge two PDFs or resize one photo. Simple everyday tasks should be simple, and they should not cost money. A student in a small town should get the exact same tools as a big company.</p>
    <p>That is why every tool on ${esc(cfg.siteName)} works in your own browser, on your own device. Your files are never uploaded to us. There are no ads, no pop-ups, no watermarks and no sign-up walls. Just open a tool and use it, as many times as you like.</p>
  </div>

  <div class="ty-card">
    <h2><span aria-hidden="true">🌱</span> What we believe in</h2>
    <ul class="ty-list">
      <li><b>Free forever.</b> No tool will ever be put behind a payment. Your gift helps make sure of that.</li>
      <li><b>Zero ads, unlimited use.</b> Nothing jumps in front of your work, and there are no daily limits.</li>
      <li><b>Your privacy comes first.</b> Your files and your text stay on your device. We cannot see them, and we do not want to.</li>
      <li><b>Made for everyone.</b> Students, teachers, parents, shop owners, freelancers, office workers, anyone with a phone or a computer.</li>
      <li><b>Family, not customers.</b> We listen to every email, and many of our tools exist because someone like you asked for them.</li>
    </ul>
  </div>

  <div class="ty-card">
    <h2><span aria-hidden="true">🧭</span> Where your gift goes</h2>
    <p>Every single dollar goes back into ${esc(cfg.siteName)}. Here is what your support makes possible:</p>
    <div class="ty-grid">
      <div><span aria-hidden="true">🌐</span><b>Keeping the lights on</b><small>The domain, hosting and services that keep the website fast and online every day, all over the world.</small></div>
      <div><span aria-hidden="true">🛠️</span><b>Building new tools</b><small>Hours of design, coding and testing for every new tool, so it works perfectly on phones and computers.</small></div>
      <div><span aria-hidden="true">🐞</span><b>Fixes and speed</b><small>Finding and fixing bugs, making big files work, and keeping every tool quick, even on older phones.</small></div>
      <div><span aria-hidden="true">🎓</span><b>Keeping it free for students</b><small>Your gift is the reason a student who cannot pay still gets every tool, with no limits and no ads.</small></div>
    </div>
  </div>

  <div class="ty-card">
    <h2><span aria-hidden="true">🤝</span> Who you just helped</h2>
    <p>You will probably never meet them, but because of you, today:</p>
    <ul class="ty-list">
      <li>📚 a <b>student</b> can turn their notes into a PDF and submit their assignment on time,</li>
      <li>🏪 a <b>shop owner</b> can make an invoice and work out their profit without buying software,</li>
      <li>👩‍🏫 a <b>teacher</b> can make a quiz, a timetable or a worksheet in minutes,</li>
      <li>💼 a <b>job seeker</b> can compress their CV and photo to fit an upload form,</li>
      <li>👨‍👩‍👧 a <b>parent</b> can resize family photos, calculate a loan or plan a budget,</li>
      <li>🌍 and thousands of people in many countries can get their work done for free.</li>
    </ul>
    <p>That is the real power of your gift. <b>Thank you for making it happen.</b></p>
  </div>

  <div class="ty-card">
    <h2><span aria-hidden="true">🤞</span> Our promises to you</h2>
    <ul class="ty-list">
      <li>We will keep every tool <b>free</b>, with <b>zero ads</b> and <b>unlimited use</b>.</li>
      <li>We will <b>never sell</b> your email or share it with anyone.</li>
      <li>We will keep making the tools <b>better, faster and easier</b> every month.</li>
      <li>We will <b>read every email</b> you send us, and reply as a friend, not as a company.</li>
      <li>We will use your gift <b>carefully and honestly</b>, only for ${esc(cfg.siteName)}.</li>
    </ul>
  </div>

  <div class="ty-card">
    <h2><span aria-hidden="true">🚀</span> What we are working on next</h2>
    <p>Your support goes straight into what comes next. We are always working on:</p>
    <ul class="ty-list">
      <li><b>More tools</b> for study, work, PDFs, photos, videos and everyday life.</li>
      <li><b>Better tutorials</b> on every tool, so anyone can use them without help.</li>
      <li><b>A smoother app</b> for your phone and computer that works even without internet.</li>
      <li><b>Your ideas.</b> The best new tools come from emails like yours. Which brings us to...</li>
    </ul>
  </div>

  <div class="ty-card ty-idea">
    <h2><span aria-hidden="true">💡</span> Need a new tool? Tell us, and we will build it!</h2>
    <p>If you ever need a tool that is not on ${esc(cfg.siteName)} yet, or you have an idea to make one of our tools better, just email us. It can be anything: a calculator for your work, a converter you keep searching for, a study helper, or a small change to a tool you already use.</p>
    <p><b>We promise we will work on it</b>, and when it goes live, we will <b>personally email you</b> to let you know it is ready. You will be the first to use it. ✨</p>
    ${mail ? `<a class="btn" href="mailto:${esc(mail)}?subject=${encodeURIComponent('New tool idea for ' + cfg.siteName)}">✉ Email us your idea</a><p class="setnote">${esc(mail)}</p>` : ''}
  </div>

  <div class="ty-card ty-share">
    <h2><span aria-hidden="true">📣</span> One small favour, please</h2>
    <p>If you liked our tools, please share <b>gettoolnest.xyz</b> with the people around you. Send it to your friends, your family, your class or university group, your office chat, or anyone who keeps asking "how do I convert this file?"</p>
    <p>Sharing costs nothing, takes five seconds, and it helps us more than you can imagine. Every new person who finds ${esc(cfg.siteName)} is one more person who gets free tools, and one more reason for us to keep going.</p>
    <div class="btns"><button class="btn" type="button" id="tyCopy">🔗 Copy Website Link</button><a class="btn ghost" href="https://wa.me/?text=${encodeURIComponent('Free online tools for PDFs, photos, study and more. No ads, no sign-up: ' + SITE + '/')}" target="_blank" rel="noopener">💬 Share on WhatsApp</a><a class="btn ghost" href="./">← Back to Tools</a></div>
  </div>

  <div class="ty-card ty-small">
    <h2><span aria-hidden="true">🧾</span> About your payment</h2>
    <p>Your payment was handled safely by PayMeGate, and a receipt is sent to the email you entered. We never see or store your card details. If anything about your payment looks wrong, just email us${mail ? ` at <a href="mailto:${esc(mail)}?subject=${encodeURIComponent('Question about my gift')}">${esc(mail)}</a>` : ''} and we will sort it out quickly.</p>
    <p class="setnote">Gifts are voluntary and do not buy any product, service or extra features. Everything on ${esc(cfg.siteName)} stays free for everyone.</p>
  </div>

  <p class="ty-sign">Once again, thank you. Truly. From all of us.<br>With love and gratitude,<br><b>The ${esc(cfg.siteName)} family</b> ❤</p>
</section>
<script>
(function () {
  if (/[?&]ref=/.test(location.search)) document.getElementById('tyNote').hidden = false;
  var b = document.getElementById('tyCopy');
  b.addEventListener('click', function () { copyText(${JSON.stringify(SITE + '/')}, b); });
  if (window.burst) setTimeout(function () { burst(document.querySelector('.ty-heart')); }, 300);
})();
</script>`
  }));
}

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
write('assets/favicon.svg', "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\"><defs><linearGradient id=\"g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#3b82f6\"/><stop offset=\"1\" stop-color=\"#7c3aed\"/></linearGradient><mask id=\"m\"><rect width=\"64\" height=\"64\" fill=\"#fff\"/><rect x=\"40\" y=\"6\" width=\"7\" height=\"12\" rx=\"1\" transform=\"rotate(45 43.5 12)\" fill=\"#000\"/></mask></defs><rect width=\"64\" height=\"64\" rx=\"15\" fill=\"url(#g)\"/><g mask=\"url(#m)\" fill=\"#fff\"><circle cx=\"41\" cy=\"17\" r=\"8.5\"/><rect x=\"18\" y=\"20\" width=\"6.5\" height=\"24\" rx=\"3.25\" transform=\"rotate(45 32 30)\"/></g><g fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\"><path d=\"M11 36c4 11.5 12 17 21 17s17-5.5 21-17\" stroke-width=\"5\"/><path d=\"M17.5 38c3 6 8 9 14.5 9s11.5-3 14.5-9\" stroke-width=\"3\" opacity=\".5\"/></g></svg>" + '\n');

// ---------- app: manifest and service worker ----------
const shortcuts = ['merge-pdf', 'edit-pdf', 'image-compressor', 'qr-code-generator'].map(bySlug);
write('manifest.webmanifest', JSON.stringify({
  id: '/', name: `${cfg.siteName} - Free Online Tools`, short_name: cfg.siteName,
  description: `${tools.length} free tools for PDFs, pictures, money and text. Works offline.`,
  start_url: '/?source=app', scope: '/', display: 'standalone', display_override: ['standalone', 'minimal-ui'],
  orientation: 'any', background_color: '#f6f7f9', theme_color: '#2563eb', lang: 'en', dir: 'ltr',
  categories: ['productivity', 'utilities', 'business'],
  icons: [
    { src: '/assets/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: '/assets/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    { src: '/assets/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
  ],
  shortcuts: shortcuts.map(t => ({ name: t.name, short_name: t.name.replace(/ Calculator| Generator/, ''), url: `/${t.slug}/?source=app`, icons: [{ src: '/assets/icon-192.png', sizes: '192x192' }] })),
  screenshots: [
    { src: '/assets/screens/home-narrow.png', sizes: '780x1688', type: 'image/png', form_factor: 'narrow', label: 'All tools' },
    { src: '/assets/screens/tool-narrow.png', sizes: '780x1688', type: 'image/png', form_factor: 'narrow', label: 'Merge PDF' },
    { src: '/assets/screens/home-wide.png', sizes: '1280x800', type: 'image/png', form_factor: 'wide', label: 'All tools' },
    { src: '/assets/screens/tool-wide.png', sizes: '1280x800', type: 'image/png', form_factor: 'wide', label: 'Merge PDF' }
  ]
}, null, 2) + '\n');
// Everything needed to open any page offline. Big libraries (PDF, OCR) are cached the first time a tool uses them.
const shell = ['assets/style.css', 'assets/site.js', 'assets/tools-index.js', 'assets/pdf-tools.js', 'assets/cloud.js', 'assets/favicon.svg', 'assets/icon-192.png', 'assets/vendor/qrcode.js', 'manifest.webmanifest'];
const pagesList = urls.map(u => '/' + u);
const version = crypto.createHash('sha1').update(shell.concat(urls.map(u => (u || '') + 'index.html')).map(f => fs.readFileSync(path.join(ROOT, f))).join('')).digest('hex').slice(0, 10);
write('sw.js', `// ${cfg.siteName} service worker. Generated by build.js: do not edit by hand.
const VERSION = '${version}';
const SHELL = ${JSON.stringify(shell.map(f => '/' + f))};
const PAGES = ${JSON.stringify(pagesList)};
self.addEventListener('install', e => {
  e.waitUntil(caches.open('gtn-' + VERSION).then(c => c.addAll(SHELL.concat(PAGES))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('gtn-') && k !== 'gtn-' + VERSION && k !== 'gtn-lib').map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return; // sign-in, translation and ads go straight to the network
  if (req.mode === 'navigate') { // pages: newest from the network, cached copy when offline
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); if (res.ok) caches.open('gtn-' + VERSION).then(c => c.put(url.pathname, copy)); return res; })
      .catch(() => caches.match(url.pathname, { ignoreSearch: true }).then(r => r || caches.match('/'))));
    return;
  }
  const lib = url.pathname.startsWith('/assets/vendor/');
  // files: from the cache when we have them (each release gets a fresh cache), otherwise fetch and keep a copy
  e.respondWith(caches.match(req, { ignoreSearch: !lib }).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(lib ? 'gtn-lib' : 'gtn-' + VERSION).then(c => c.put(req, copy)); }
    return res;
  })));
});
`);

console.log(`Built ${urls.length} pages for ${SITE}`);

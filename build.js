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
// Hue per category, used to tint icon tiles and card hovers.
const HUE = { 'Image tools': 262, 'Generators': 160, 'Text tools': 32, 'Developer tools': 205, 'Calculators': 340 };
const tile = t => `<span class="tile" style="--h:${HUE[t.cat]}">${icon(t.slug)}</span>`;

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
function layout({ rel, urlPath, title, desc, body, band = '', head = '', noindex = false }) {
  const canonical = SITE + '/' + urlPath;
  return `<!doctype html>
<html lang="en">
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
<link rel="stylesheet" href="${rel}assets/style.css">
<script src="${rel}assets/site.js"></script>
${cfg.adsenseClient ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(cfg.adsenseClient)}" crossorigin="anonymous"></script>` : ''}
${cfg.googleAnalyticsId ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(cfg.googleAnalyticsId)}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${esc(cfg.googleAnalyticsId)}');</script>` : ''}
${head}
</head>
<body>
<header class="site-header"><div class="wrap">
  ${logo(rel)}
  <nav class="nav">
    <a href="${rel || './'}">All tools</a>
    <a class="hide-s" href="${rel}about/">About</a>
    <a class="hide-s" href="${rel}contact/">Contact</a>
    <button class="theme-btn" id="themeBtn" aria-label="Switch light or dark theme">${icon('theme')}</button>
  </nav>
</div></header>
${band ? `<div class="band"><div class="wrap">${band}</div></div>` : ''}
<main class="wrap">
${body}
</main>
<footer class="site-footer"><div class="wrap">
  <div class="foot-grid">
    <div>${logo(rel)}<p>${tools.length} free tools for images, text and everyday maths. Everything runs in your browser.</p></div>
    ${footCols.map(col => `<div><h2>${esc(col.title)}</h2>${col.items.map(t => `<a href="${rel}${t.slug}/">${esc(t.name)}</a>`).join('')}</div>`).join('\n    ')}
    <div><h2>Site</h2><a href="${rel}about/">About</a><a href="${rel}contact/">Contact</a><a href="${rel}privacy/">Privacy</a><a href="${rel}terms/">Terms</a></div>
  </div>
  <div class="foot-bottom">© ${YEAR} ${esc(cfg.siteName)}. All tools are free to use.</div>
</div></footer>
</body>
</html>
`;
}

const cats = [...new Set(tools.map(t => t.cat))];
const logo = rel => `<a class="logo" href="${rel || './'}"><span class="logo-mark">${icon('logo')}</span><span>Get<em>ToolNest</em></span></a>`;
const footCols = [
  { title: 'Image & generators', items: tools.filter(t => ['Image tools', 'Generators'].includes(t.cat)) },
  { title: 'Text & developer', items: tools.filter(t => ['Text tools', 'Developer tools'].includes(t.cat)) }
].concat([{ title: 'Calculators', items: tools.filter(t => t.cat === 'Calculators') }]);
const card = (t, rel) => `<a class="tool-card" style="--h:${HUE[t.cat]}" href="${rel}${t.slug}/">${tile(t)}<b>${esc(t.name)}</b><small>${esc(t.card)}</small><span class="go">${icon('arrow')}</span></a>`;
const bySlug = s => tools.find(t => t.slug === s);
const popular = ['image-compressor', 'qr-code-generator', 'password-generator', 'loan-calculator'].map(bySlug);

// ---------- home ----------
write('index.html', layout({
  rel: '', urlPath: '',
  title: `${cfg.siteName} - Free Online Tools: Image, Text, Calculators`,
  desc: `${tools.length} free online tools: image compressor, QR code generator, password generator, word counter, loan calculator and more. No sign-up. Files never leave your device.`,
  head: jsonLd({ '@context': 'https://schema.org', '@type': 'WebSite', name: cfg.siteName, url: SITE + '/' }),
  band: `<section class="hero">
  <span class="badge"><i></i>${tools.length} tools · 100% free · No sign-up</span>
  <h1>Free online tools that <span class="grad">just work</span></h1>
  <p>Compress images, make QR codes, count words and run the numbers. Fast, private and free, right in your browser.</p>
  <div class="search-box">${icon('search')}<input type="search" id="toolSearch" placeholder="Search tools, e.g. compress image" aria-label="Search tools"></div>
  <div class="chips">Popular: ${popular.map(t => `<a href="${t.slug}/">${esc(t.name)}</a>`).join('')}</div>
  <div class="trust"><span>${icon('check')}Files never leave your device</span><span>${icon('check')}No account needed</span><span>${icon('check')}Works on phone and desktop</span></div>
</section>`,
  body: `<div class="pills" role="group" aria-label="Filter by category"><button class="pill on" data-cat="" aria-pressed="true">All tools</button>${cats.map(c => `<button class="pill" data-cat="${esc(c)}" aria-pressed="false">${esc(c)}</button>`).join('')}</div>
${ad(cfg.adSlotTop)}
${cats.map(c => { const list = tools.filter(t => t.cat === c); return `<section class="cat" data-cat="${esc(c)}"><h2 class="cat-title">${esc(c)} <small>${list.length}</small></h2><div class="grid">${list.map(t => card(t, '')).join('')}</div></section>`; }).join('\n')}
<p class="msg" id="noResults" hidden>No tools match your search.</p>
${ad(cfg.adSlotBottom)}
<h2 class="section-title">Why people use ${esc(cfg.siteName)}</h2>
<p class="section-sub">Simple tools without the usual catches.</p>
<div class="features">
  <div class="feature"><span class="tile" style="--h:160">${icon('shield')}</span><h3>Private by design</h3><p>Every tool runs inside your browser. Your images, text and numbers are processed on your own device and are not uploaded to us.</p></div>
  <div class="feature"><span class="tile" style="--h:262">${icon('zap')}</span><h3>Instant results</h3><p>Nothing to install and no waiting for uploads. Open a tool and the answer appears as you type.</p></div>
  <div class="feature"><span class="tile" style="--h:32">${icon('phone')}</span><h3>Works everywhere</h3><p>Built for phones first, and just as comfortable on a tablet or laptop, in light or dark mode.</p></div>
</div>
<section class="cta"><h2>Need a tool that is not here yet?</h2><p>Tell us what would save you time and we will consider building it.</p><a class="btn" href="contact/">Suggest a tool ${icon('arrow')}</a></section>`
}));

// ---------- tool pages ----------
for (const t of tools) {
  const body = fs.readFileSync(path.join(ROOT, 'src/tools', t.slug + '.html'), 'utf8');
  const related = tools.filter(o => o !== t).sort((a, b) => (b.cat === t.cat) - (a.cat === t.cat)).slice(0, 6);
  write(`${t.slug}/index.html`, layout({
    rel: '../', urlPath: t.slug + '/',
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
    band: `<div class="tool-head">
  <p class="crumbs"><a href="../">Home</a> › ${esc(t.cat)} › ${esc(t.name)}</p>
  <div class="title-row">${tile(t)}<h1 class="page-title">${esc(t.name)}</h1></div>
  <p class="lead">${esc(t.intro)}</p>
  <div class="tags"><span>${icon('check')}Free</span><span>${icon('check')}No sign-up</span><span>${icon('check')}Runs in your browser</span></div>
</div>`,
    body: `<div class="cols">
<div class="content">
${ad(cfg.adSlotTop)}
<section class="card">
${body}
</section>
${ad(cfg.adSlotBottom)}
<h2>How to use the ${esc(t.name.toLowerCase())}</h2>
<ol class="steps">${t.steps.map(s => `<li><span>${esc(s)}</span></li>`).join('')}</ol>
<h2>Frequently asked questions</h2>
<div class="faq">${t.faq.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>
</div>
<aside class="side"><div class="side-box"><h2>More free tools</h2>${related.map(o => `<a class="side-link" href="../${o.slug}/">${tile(o)}${esc(o.name)}</a>`).join('')}</div></aside>
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
<p>${esc(cfg.siteName)} is a small collection of free online tools for everyday jobs: shrinking a photo, making a QR code, counting words or working out a loan payment.</p>
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
<p>Images, text, numbers and passwords you enter are processed in your browser. They are not uploaded to or stored by ${esc(cfg.siteName)}.</p>
<h2>Local storage</h2>
<p>We save one setting in your browser's local storage: your light or dark theme choice. It never leaves your device.</p>
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
<p>The loan and BMI calculators give general estimates only. They are not financial or medical advice. Check important decisions with a qualified professional.</p>
<h2>Your content</h2>
<p>You keep all rights to anything you create with the tools, including compressed images and QR codes.</p>
<h2>Changes</h2>
<p>We may update the tools and these terms from time to time. Continued use of the site means you accept the current terms.</p>` }
];
for (const p of pages) {
  write(`${p.slug}/index.html`, layout({
    rel: '../', urlPath: p.slug + '/', title: `${p.title} | ${cfg.siteName}`, desc: p.desc,
    band: `<div class="tool-head"><p class="crumbs"><a href="../">Home</a> › ${esc(p.title)}</p><h1 class="page-title">${esc(p.title)}</h1></div>`,
    body: `<section class="prose">${p.html}</section>`
  }));
}

// 404 is served from any path, so it needs absolute links.
const base = new URL(SITE + '/').pathname;
write('404.html', layout({
  rel: base, urlPath: '404.html', title: `Page not found | ${cfg.siteName}`, desc: 'This page does not exist.', noindex: true,
  body: '', band: `<section class="hero"><h1>Page not found</h1><p>That page does not exist. All the tools are on the home page.</p><a class="btn" href="${base}">See all tools</a></section>`
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
write('assets/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#4f46e5"/><stop offset="1" stop-color="#9333ea"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="url(#g)"/><path d="M16 20h32v8H36v20h-8V28H16z" fill="#fff"/></svg>\n`);

console.log(`Built ${urls.length} pages for ${SITE}`);

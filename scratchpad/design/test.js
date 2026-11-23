// Playwright checks for the tool page themes. node test.js
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const tools = require('/home/user/site-builder/src/tools.js');
const B = 'http://127.0.0.1:8881/';
const D = __dirname;
const byCat = {};
tools.forEach(t => (byCat[t.cat] = byCat[t.cat] || []).push(t.slug));
let pages = [];
for (const c in byCat) pages.push(...byCat[c].slice(0, 3));
pages.push('crop-image', 'merge-pdf', 'online-notepad', 'spin-the-wheel', 'crop-pdf', 'photo-editor', 'signature-cleaner', 'screen-test', 'before-after-slider');
pages = [...new Set(pages)].filter(s => tools.some(t => t.slug === s));
const fails = [];
const fail = (...a) => { fails.push(a.join(' ')); console.log('FAIL', ...a); };

async function check(b, w) {
  const ctx = await b.newContext({ viewport: { width: w, height: 860 } });
  const p = await ctx.newPage();
  let errs = [];
  p.on('console', m => { if (m.type() === 'error' && !/ERR_TUNNEL|ERR_NAME|ERR_PROXY|ERR_CONNECTION/.test(m.text())) errs.push(m.text()); });
  p.on('pageerror', e => errs.push(String(e)));
  for (const s of pages) {
    errs = [];
    await p.goto(B + s + '/', { waitUntil: 'load' });
    await p.waitForTimeout(2200);
    const r = await p.evaluate(() => {
      const out = { overflow: document.documentElement.scrollWidth - innerWidth, blocked: [], cardAnims: 0, cardTransform: '' };
      const card = document.querySelector('.card');
      out.cardTransform = getComputedStyle(card).transform + '|' + getComputedStyle(card).filter + '|' + getComputedStyle(card).clipPath;
      out.cardAnims = card.getAnimations().length;
      out.cls = document.body.className;
      const ctrls = [...card.querySelectorAll('button, input, select, textarea, .drop, a')].filter(e => { const rc = e.getBoundingClientRect(); const cs = getComputedStyle(e); return rc.width > 4 && rc.height > 4 && cs.visibility !== 'hidden' && cs.display !== 'none' && e.type !== 'file' && e.type !== 'hidden'; }).slice(0, 25);
      for (const e of ctrls) {
        e.scrollIntoView({ block: 'center' });
        const rc = e.getBoundingClientRect();
        const hit = document.elementFromPoint(rc.left + rc.width / 2, rc.top + rc.height / 2);
        if (!hit) continue;
        const ok = hit === e || e.contains(hit) || hit.contains(e) || (hit.closest('label') && hit.closest('label').contains(e)) || (e.labels && [...e.labels].some(l => l.contains(hit)));
        if (!ok && (hit.closest('.tv-art') || !card.contains(hit))) out.blocked.push((e.id || e.tagName) + ' -> ' + (hit.className || hit.tagName));
      }
      window.scrollTo(0, 0);
      return out;
    });
    if (errs.length) fail(s, w, 'console:', errs.slice(0, 3).join(' / '));
    if (r.overflow > 0) fail(s, w, 'horizontal overflow', r.overflow);
    if (r.blocked.length) fail(s, w, 'blocked:', r.blocked.join(', '));
    if (r.cardAnims || r.cardTransform !== 'none|none|none') fail(s, w, 'card not settled', r.cardAnims, r.cardTransform);
  }
  await ctx.close();
}

async function motionOff(b) {
  for (const mode of ['os', 'pref']) {
    const ctx = await b.newContext({ viewport: { width: 1280, height: 860 }, reducedMotion: mode === 'os' ? 'reduce' : 'no-preference' });
    if (mode === 'pref') await ctx.addInitScript(() => localStorage.setItem('gtn1', JSON.stringify({ prefs: { motion: false } })));
    const p = await ctx.newPage();
    for (const s of pages.slice(0, 24)) {
      await p.goto(B + s + '/', { waitUntil: 'load' });
      await p.waitForTimeout(150);
      const n = await p.evaluate(() => document.getAnimations().filter(a => { const t = a.effect && a.effect.target; return t && (t.closest('.tool-head') || t.closest('.content') || t.closest('.side')) && !t.closest('.card'); }).map(a => a.animationName || 'x'));
      if (n.length) fail(s, 'motion off (' + mode + ') still animates:', n.slice(0, 5).join(','));
    }
    await ctx.close();
  }
}

async function e2e(b) {
  const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } });
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(String(e)));
  const go = async s => { await p.goto(B + s + '/', { waitUntil: 'load' }); await p.waitForTimeout(1500); };
  // crop image: drag the crop box
  await go('crop-image');
  await p.setInputFiles('#file', path.join(D, 'test.png'));
  await p.waitForSelector('#box', { state: 'visible' });
  await p.locator('#box').scrollIntoViewIfNeeded();
  let a = await p.locator('#box').boundingBox();
  await p.mouse.move(a.x + a.width / 2, a.y + a.height / 2); await p.mouse.down(); await p.mouse.move(a.x + a.width / 2 - 40, a.y + a.height / 2 - 30, { steps: 6 }); await p.mouse.up();
  let c = await p.locator('#box').boundingBox();
  console.log('crop-image box moved', Math.round(c.x - a.x), Math.round(c.y - a.y), 'size', Math.round(c.width - a.width));
  if (Math.abs(c.x - a.x) < 5 && Math.abs(c.y - a.y) < 5) {
    // box may already fill the image; try resizing from inside a corner instead
    await p.mouse.move(c.x + c.width - 3, c.y + c.height - 3); await p.mouse.down(); await p.mouse.move(c.x + c.width - 80, c.y + c.height - 60, { steps: 6 }); await p.mouse.up();
    const d = await p.locator('#box').boundingBox();
    console.log('crop-image corner resize', Math.round(d.width - c.width), Math.round(d.height - c.height));
    if (Math.abs(d.width - c.width) < 5) fail('crop-image: box did not respond to drag');
  }
  // merge pdf: add two files
  await go('merge-pdf');
  await p.setInputFiles('#file', [path.join(D, 'a.pdf'), path.join(D, 'b.pdf')]);
  await p.waitForTimeout(1500);
  const items = await p.locator('#list > *').count();
  console.log('merge-pdf list items', items);
  if (items < 2) fail('merge-pdf: files not added');
  // image compressor
  await go('image-compressor');
  await p.setInputFiles('#file', path.join(D, 'test.png'));
  await p.waitForTimeout(2500);
  const st = (await p.locator('#stats').innerText().catch(() => '')).trim();
  console.log('image-compressor stats:', st.replace(/\s+/g, ' ').slice(0, 80));
  if (!st) fail('image-compressor: no result');
  // notepad typing
  await go('online-notepad');
  await p.click('#np .CodeMirror, #np textarea, #np [contenteditable]').catch(() => p.click('#np'));
  await p.keyboard.type('hello themes 123');
  const txt = await p.evaluate(() => document.querySelector('#np').innerText);
  console.log('notepad has text', txt.includes('hello themes 123'));
  if (!txt.includes('hello themes 123')) fail('online-notepad: typing failed');
  // spin the wheel
  await go('spin-the-wheel');
  await p.click('#spin');
  await p.waitForFunction(() => { const t = document.getElementById('res').innerText.trim(); return t.length > 0 && !/Spinning/.test(t); }, null, { timeout: 20000 }).catch(() => {});
  const res = (await p.locator('#res').innerText()).trim();
  console.log('spin result:', res.slice(0, 60));
  if (!res) fail('spin-the-wheel: no result');
  // crop pdf: drag the south-east handle
  await go('crop-pdf');
  await p.setInputFiles('#file', path.join(D, 'a.pdf'));
  await p.waitForSelector('#box', { state: 'visible', timeout: 15000 });
  await p.waitForTimeout(1200);
  await p.locator('#box').scrollIntoViewIfNeeded();
  a = await p.locator('#box').boundingBox();
  const h = await p.locator('#box [data-h="se"]').boundingBox();
  await p.mouse.move(h.x + h.width / 2, h.y + h.height / 2); await p.mouse.down(); await p.mouse.move(h.x - 60, h.y - 80, { steps: 6 }); await p.mouse.up();
  c = await p.locator('#box').boundingBox();
  console.log('crop-pdf box resized', Math.round(c.width - a.width), Math.round(c.height - a.height));
  if (Math.abs(c.width - a.width) < 20) fail('crop-pdf: handle drag failed');
  if (errs.length) fail('e2e page errors', errs.join(' / '));
  await ctx.close();
}

(async () => {
  const b = await chromium.launch();
  console.log('pages:', pages.length);
  await check(b, 1280);
  await check(b, 390);
  await motionOff(b);
  await e2e(b);
  await b.close();
  console.log(fails.length ? fails.length + ' failures' : 'ALL PASSED');
})();

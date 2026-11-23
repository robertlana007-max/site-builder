// usage: node shots.js out_dir slug1,slug2,...  -> top-of-page screenshots, 1280 + 390, light + dark
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const [out, list, modes = 'light,dark', widths = '1280,390'] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch();
  for (const mode of modes.split(',')) for (const w of widths.split(',').map(Number)) {
    const ctx = await b.newContext({ viewport: { width: w, height: w > 500 ? 860 : 844 }, deviceScaleFactor: 1 });
    await ctx.addInitScript(m => { try { localStorage.setItem('gtn1', JSON.stringify({ prefs: { theme: m } })); } catch (e) {} }, mode);
    const p = await ctx.newPage();
    for (const s of list.split(',')) {
      await p.goto('http://127.0.0.1:8881/' + s + '/', { waitUntil: 'load' });
      await p.waitForTimeout(2600);
      await p.screenshot({ path: `${out}/${s}-${w}-${mode}.png` });
    }
    await ctx.close();
  }
  await b.close();
})();

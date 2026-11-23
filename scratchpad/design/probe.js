const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 860 } });
  await p.goto('http://127.0.0.1:8881/' + process.argv[2] + '/'); await p.waitForTimeout(2600);
  console.log(await p.evaluate(() => { const e = document.elementFromPoint(150, 30); return e.outerHTML.slice(0, 200) + ' | body=' + document.body.className + ' | ' + getComputedStyle(document.body).mask + ' | ' + getComputedStyle(document.documentElement).opacity; }));
  await b.close();
})();

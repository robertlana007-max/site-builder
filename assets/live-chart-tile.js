// Home page: a small live candlestick chart that cycles through markets (public Binance data, 1-minute candles).
(function () {
  var el = document.getElementById('liveChart'); if (!el) return;
  var cv = el.querySelector('canvas'), nm = el.querySelector('.lc-name'), px = el.querySelector('.lc-price'), ch = el.querySelector('.lc-chg');
  var API = 'https://data-api.binance.vision/api/v3/';
  var M = [['BTCUSDT', 'Bitcoin', 'BTC/USD', 2], ['PAXGUSDT', 'Gold', 'XAU/USD', 2], ['ETHUSDT', 'Ethereum', 'ETH/USD', 2], ['EURUSDT', 'Euro', 'EUR/USD', 5],
    ['SOLUSDT', 'Solana', 'SOL/USD', 2], ['XRPUSDT', 'XRP', 'XRP/USD', 4], ['BNBUSDT', 'BNB', 'BNB/USD', 2], ['DOGEUSDT', 'Dogecoin', 'DOGE/USD', 5],
    ['ADAUSDT', 'Cardano', 'ADA/USD', 4], ['LTCUSDT', 'Litecoin', 'LTC/USD', 2]];
  for (var i = M.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = M[i]; M[i] = M[j]; M[j] = t; }
  var k = 0, bars = [], day = null, poll = 0, rot = 0, fails = 0;
  function visible() { return el.offsetParent !== null && document.visibilityState === 'visible'; }
  function fmt(v, d) { return v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d }); }
  function css(n) { return getComputedStyle(el).getPropertyValue(n).trim(); }
  function draw() {
    var r = cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    if (!r.width) return;
    cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.height * dpr);
    var g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, r.width, r.height);
    if (!bars.length) return;
    var lo = Infinity, hi = -Infinity; bars.forEach(function (b) { lo = Math.min(lo, b[3]); hi = Math.max(hi, b[2]); });
    var pad = (hi - lo) * .08 || hi * .001, H = r.height, W = r.width, n = bars.length, step = W / n, bw = Math.max(1.5, step * .62);
    var y = function (v) { return H - (v - lo + pad) / (hi - lo + 2 * pad) * H; };
    var up = css('--lc-up') || '#16a34a', dn = css('--lc-dn') || '#dc2626';
    g.strokeStyle = css('--line') || '#e3e6eb'; g.lineWidth = 1; g.setLineDash([3, 4]);
    for (var q = 1; q < 4; q++) { g.beginPath(); g.moveTo(0, Math.round(H * q / 4) + .5); g.lineTo(W, Math.round(H * q / 4) + .5); g.stroke(); }
    g.setLineDash([]);
    bars.forEach(function (b, i) {
      var x = i * step + step / 2, c = b[4] >= b[1] ? up : dn;
      g.strokeStyle = g.fillStyle = c; g.beginPath(); g.moveTo(Math.round(x) + .5, y(b[2])); g.lineTo(Math.round(x) + .5, y(b[3])); g.stroke();
      var t = y(Math.max(b[1], b[4])), h = Math.max(1, Math.abs(y(b[1]) - y(b[4]))); g.fillRect(x - bw / 2, t, bw, h);
    });
    var last = bars[n - 1][4], ly = y(last);
    g.strokeStyle = last >= bars[n - 1][1] ? up : dn; g.setLineDash([2, 3]); g.beginPath(); g.moveTo(0, ly); g.lineTo(W, ly); g.stroke(); g.setLineDash([]);
  }
  function label() {
    var m = M[k]; nm.innerHTML = '<b></b><small class="notranslate" translate="no"></small>'; nm.firstChild.textContent = m[1]; nm.lastChild.textContent = m[2];
    px.textContent = bars.length ? '$' + fmt(bars[bars.length - 1][4], m[3]) : '…';
    if (day != null) { ch.textContent = (day >= 0 ? '▲ ' : '▼ ') + Math.abs(day).toFixed(2) + '% 24h'; ch.className = 'lc-chg ' + (day >= 0 ? 'up' : 'dn'); } else ch.textContent = '';
  }
  function load(first) {
    if (!visible()) return;
    var m = M[k], sym = m[0];
    var a = fetch(API + 'klines?symbol=' + sym + '&interval=1m&limit=48').then(function (r) { if (!r.ok) throw 0; return r.json(); });
    var b = first ? fetch(API + 'ticker/24hr?symbol=' + sym).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }) : Promise.resolve(undefined);
    Promise.all([a, b]).then(function (res) {
      if (M[k][0] !== sym) return;
      bars = res[0].map(function (c) { return [c[0], +c[1], +c[2], +c[3], +c[4]]; });
      if (res[1]) day = +res[1].priceChangePercent; else if (res[1] === null) day = null;
      fails = 0; el.classList.remove('lc-off'); label(); draw();
    }).catch(function () { if (++fails >= 3) el.classList.add('lc-off'); });
  }
  function next() { k = (k + 1) % M.length; bars = []; day = null; el.classList.add('lc-swap'); setTimeout(function () { el.classList.remove('lc-swap'); }, 450); label(); draw(); load(true); }
  function start() { stop(); load(true); poll = setInterval(function () { load(false); }, 3000); rot = setInterval(next, 9000); }
  function stop() { clearInterval(poll); clearInterval(rot); }
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') start(); else stop(); });
  window.addEventListener('resize', draw);
  label(); start();
})();

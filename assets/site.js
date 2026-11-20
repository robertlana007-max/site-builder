// Shared helpers used by every page.
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}

  window.$ = function (id) { return document.getElementById(id); };

  window.fmtBytes = function (n) {
    if (n < 1024) return n + ' B';
    if (n < 1048576) return (n / 1024).toFixed(1) + ' KB';
    return (n / 1048576).toFixed(2) + ' MB';
  };

  window.fmtNum = function (n, d) {
    return Number(n).toLocaleString('en-US', { minimumFractionDigits: d || 0, maximumFractionDigits: d == null ? 2 : d });
  };

  window.copyText = function (text, btn) {
    var done = function () {
      if (!btn) return;
      var old = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(function () { btn.textContent = old; }, 1200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () {});
    } else {
      var t = document.createElement('textarea');
      t.value = text; document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      t.remove();
    }
  };

  // Wire a drop zone to a hidden <input type=file>; calls onFile(file).
  window.setupDrop = function (dropId, inputId, onFile) {
    var drop = $(dropId), input = $(inputId);
    drop.addEventListener('click', function () { input.click(); });
    drop.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
    input.addEventListener('change', function () { if (input.files[0]) onFile(input.files[0]); });
    ['dragenter', 'dragover'].forEach(function (ev) {
      drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('over'); });
    });
    ['dragleave', 'drop'].forEach(function (ev) {
      drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('over'); });
    });
    drop.addEventListener('drop', function (e) {
      var f = e.dataTransfer.files[0];
      if (f) onFile(f);
    });
  };

  window.loadImage = function (file, cb) {
    var url = URL.createObjectURL(file), img = new Image();
    img.onload = function () { cb(img); URL.revokeObjectURL(url); };
    img.onerror = function () { cb(null); URL.revokeObjectURL(url); };
    img.src = url;
  };

  document.addEventListener('DOMContentLoaded', function () {
    var btn = $('themeBtn');
    if (btn) btn.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme')
        ? root.getAttribute('data-theme') === 'dark'
        : matchMedia('(prefers-color-scheme: dark)').matches;
      var next = dark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });

    var search = $('toolSearch');
    if (search) search.addEventListener('input', function () {
      var q = search.value.trim().toLowerCase();
      document.querySelectorAll('.tool-card').forEach(function (c) {
        c.hidden = q && c.textContent.toLowerCase().indexOf(q) === -1;
      });
      document.querySelectorAll('.cat').forEach(function (s) {
        s.hidden = !s.querySelector('.tool-card:not([hidden])');
      });
      $('noResults').hidden = !!document.querySelector('.tool-card:not([hidden])');
    });
  });
})();

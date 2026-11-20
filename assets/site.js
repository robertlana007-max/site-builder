// Shared behaviour for every page. Loaded in <head> (not deferred) because the
// tool scripts further down the page call these helpers as they run.
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}
  var REL = root.getAttribute('data-rel') || '';
  var SLUG = root.getAttribute('data-slug') || '';
  var calm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- helpers used by the tools ----------
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
      btn.textContent = 'Copied!'; burst(btn);
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
    ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('over'); }); });
    ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('over'); }); });
    drop.addEventListener('drop', function (e) { var f = e.dataTransfer.files[0]; if (f) onFile(f); });
  };
  window.loadImage = function (file, cb) {
    var url = URL.createObjectURL(file), img = new Image();
    img.onload = function () { cb(img); URL.revokeObjectURL(url); };
    img.onerror = function () { cb(null); URL.revokeObjectURL(url); };
    img.src = url;
  };

  // ---------- small delights ----------
  var COLORS = ['#c8f23a', '#ff6b4a', '#a78bfa', '#34d399', '#ffc53d', '#ff7ab6', '#60a5fa'];
  window.burst = function (el) {
    if (calm || !el || !el.animate) return;
    var r = el.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    for (var i = 0; i < 14; i++) {
      var b = document.createElement('i'), a = Math.random() * Math.PI * 2, d = 40 + Math.random() * 70;
      b.className = 'bit'; b.style.left = x + 'px'; b.style.top = y + 'px';
      b.style.background = COLORS[i % COLORS.length]; b.style.borderRadius = i % 3 ? '2px' : '50%';
      document.body.appendChild(b);
      b.animate([{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
        { transform: 'translate(' + (Math.cos(a) * d - 4) + 'px,' + (Math.sin(a) * d + 30) + 'px) rotate(' + (Math.random() * 540 - 270) + 'deg) scale(.4)', opacity: 0 }],
        { duration: 650 + Math.random() * 300, easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = (function (n) { return function () { n.remove(); }; })(b);
    }
  };
  var toastTimer;
  window.toast = function (text) {
    var t = $('toast'); if (!t) return;
    t.hidden = true; void t.offsetWidth; // restart the entrance animation
    t.textContent = text; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.hidden = true; }, 2400);
  };

  // ---------- saved state: pinned tools, recent tools, calculator settings ----------
  var KEY = 'gtn1';
  function read() {
    var o = {};
    try { o = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
    return { favs: Array.isArray(o.favs) ? o.favs : [], recent: Array.isArray(o.recent) ? o.recent : [], inputs: o.inputs && typeof o.inputs === 'object' ? o.inputs : {}, t: +o.t || 0 };
  }
  function write(o, quiet) {
    if (!quiet) o.t = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
    if (!quiet) document.dispatchEvent(new CustomEvent('gtn:change'));
  }
  var Store = window.Store = {
    read: read,
    replace: function (o) { write(o, true); paint(); }, // used by cloud sync; does not echo a change event
    isFav: function (s) { return read().favs.indexOf(s) !== -1; },
    toggleFav: function (s) {
      var o = read(), i = o.favs.indexOf(s);
      if (i === -1) o.favs.unshift(s); else o.favs.splice(i, 1);
      write(o); paint();
      return i === -1;
    }
  };
  function tool(slug) { var T = window.TOOLS || []; for (var i = 0; i < T.length; i++) if (T[i][0] === slug) return T[i]; return null; }
  function chip(t) {
    var a = document.createElement('a'), dot = document.createElement('i');
    a.className = 'chip'; a.href = REL + t[0] + '/'; a.style.setProperty('--c', t[3]);
    a.appendChild(dot); a.appendChild(document.createTextNode(t[1]));
    return a;
  }
  function fill(box, slugs) {
    if (!box) return 0;
    box.innerHTML = '';
    var n = 0;
    slugs.forEach(function (s) { var t = tool(s); if (t) { box.appendChild(chip(t)); n++; } });
    return n;
  }
  // Reflect saved state in whatever this page has: stars, pin button, "my tools" lists.
  function paint() {
    var o = read();
    document.querySelectorAll('.star').forEach(function (b) { b.setAttribute('aria-pressed', o.favs.indexOf(b.dataset.slug) !== -1); });
    var pin = $('pinBtn');
    if (pin) { var on = o.favs.indexOf(SLUG) !== -1; pin.setAttribute('aria-pressed', on); pin.lastChild.textContent = on ? 'Pinned' : 'Pin this tool'; }
    var mine = $('mine');
    if (mine) {
      var a = fill($('minePins'), o.favs), b = fill($('mineRecent'), o.recent.slice(0, 8));
      $('minePinsBox').hidden = !a; $('mineRecentBox').hidden = !b; mine.hidden = !(a + b);
    }
    var side = $('sidePins');
    if (side) { var k = fill($('sidePinsList'), o.favs.filter(function (s) { return s !== SLUG; })); side.hidden = !k; }
  }

  // ---------- finder: instant tool search, used by the hero box and the Ctrl K palette ----------
  function finder(input, box, onPick) {
    var sel = 0, links = [];
    function rank(t, words) {
      var name = t[1].toLowerCase(), hay = name + ' ' + t[2].toLowerCase() + ' ' + t[4].toLowerCase() + ' ' + t[0], score = 0;
      for (var i = 0; i < words.length; i++) {
        if (hay.indexOf(words[i]) === -1) return 0;
        score += name.indexOf(words[i]) === 0 ? 4 : name.indexOf(words[i]) !== -1 ? 2 : 1;
      }
      return score;
    }
    function mark() { links.forEach(function (a, i) { a.classList.toggle('sel', i === sel); if (i === sel) a.scrollIntoView({ block: 'nearest' }); }); }
    function render() {
      var q = input.value.trim().toLowerCase(), words = q.split(/\s+/).filter(Boolean), list;
      if (!q) list = input.dataset.empty === 'all' ? (window.TOOLS || []).slice(0, 8) : [];
      else list = (window.TOOLS || []).map(function (t) { return [rank(t, words), t]; }).filter(function (x) { return x[0]; })
        .sort(function (a, b) { return b[0] - a[0]; }).slice(0, 8).map(function (x) { return x[1]; });
      box.innerHTML = ''; links = []; sel = 0;
      list.forEach(function (t) {
        var a = document.createElement('a'), dot = document.createElement('i'), cat = document.createElement('small');
        a.className = 'f-item'; a.href = REL + t[0] + '/'; a.style.setProperty('--c', t[3]);
        cat.textContent = t[2]; a.appendChild(dot); a.appendChild(document.createTextNode(t[1])); a.appendChild(cat);
        box.appendChild(a); links.push(a);
      });
      if (q && !list.length) { var p = document.createElement('p'); p.className = 'f-none'; p.textContent = 'No tool matches "' + input.value.trim() + '".'; box.appendChild(p); }
      box.hidden = !q && !list.length;
      mark();
    }
    input.addEventListener('input', render);
    input.addEventListener('focus', render);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); if (links.length) { sel = (sel + (e.key === 'ArrowDown' ? 1 : links.length - 1)) % links.length; mark(); } }
      else if (e.key === 'Enter' && links[sel]) { e.preventDefault(); if (onPick) onPick(); location.href = links[sel].href; }
      else if (e.key === 'Escape' && !input.closest('dialog')) { input.value = ''; render(); input.blur(); }
    });
    return render;
  }

  document.addEventListener('DOMContentLoaded', function () {
    // theme
    var themeBtn = $('themeBtn');
    if (themeBtn) themeBtn.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') ? root.getAttribute('data-theme') === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
      var next = dark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });

    // palette
    var pal = $('palette'), palInput = $('palInput');
    if (pal && pal.showModal) {
      var renderPal = finder(palInput, $('palResults'));
      var open = function () { if (pal.open) return; palInput.value = ''; pal.showModal(); renderPal(); palInput.focus(); };
      $('palBtn').addEventListener('click', open);
      document.addEventListener('keydown', function (e) {
        var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || '')) || e.target.isContentEditable;
        if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) { e.preventDefault(); open(); }
        else if (e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); open(); }
      });
      pal.addEventListener('click', function (e) { if (e.target === pal) pal.close(); }); // click on the backdrop
    }
    var hero = $('toolSearch');
    if (hero) {
      finder(hero, $('heroResults'));
      document.addEventListener('click', function (e) { if (!e.target.closest('.finder')) $('heroResults').hidden = true; });
    }

    // category pills
    document.querySelectorAll('.pill').forEach(function (p) {
      p.addEventListener('click', function () {
        var cat = p.dataset.cat;
        document.querySelectorAll('.pill').forEach(function (o) { o.classList.toggle('on', o === p); o.setAttribute('aria-pressed', o === p); });
        document.querySelectorAll('.cat').forEach(function (s) { s.hidden = !!cat && s.dataset.cat !== cat; });
        document.querySelectorAll('.cat:not([hidden]) .reveal').forEach(function (el) { el.classList.add('in'); });
      });
    });

    // stars and pin button
    document.querySelectorAll('.star').forEach(function (b) {
      b.addEventListener('click', function () { var on = Store.toggleFav(b.dataset.slug); if (on) burst(b); toast(on ? 'Pinned to My tools' : 'Removed from My tools'); });
    });
    var pin = $('pinBtn');
    if (pin) pin.addEventListener('click', function () { var on = Store.toggleFav(SLUG); if (on) burst(pin); toast(on ? 'Pinned. Find it under My tools on the home page.' : 'Removed from My tools'); });
    var share = $('shareBtn');
    if (share) share.addEventListener('click', function () {
      var url = (document.querySelector('link[rel=canonical]') || {}).href || location.href;
      if (navigator.share) navigator.share({ title: document.title, url: url }).catch(function () {});
      else { copyText(url); toast('Link copied'); burst(share); }
    });

    if (SLUG) {
      // remember this visit
      var o = read(), at = o.recent.indexOf(SLUG);
      if (at !== 0) { if (at > 0) o.recent.splice(at, 1); o.recent.unshift(SLUG); o.recent = o.recent.slice(0, 12); write(o); }

      // Remember calculator settings. Only numbers, sliders, tick boxes and menus:
      // never free text, which could be something private.
      var card = document.querySelector('.card');
      if (card) {
        var pick = function () { return card.querySelectorAll('input[type=number][id],input[type=range][id],input[type=checkbox][id],select[id]'); };
        var mem = read().inputs[SLUG];
        if (mem) pick().forEach(function (el) {
          if (el.disabled || !(el.id in mem)) return;
          if (el.type === 'checkbox') { if (el.checked === !!mem[el.id]) return; el.checked = !!mem[el.id]; }
          else { if (el.value === String(mem[el.id])) return; el.value = mem[el.id]; if (el.value !== String(mem[el.id])) return; }
          el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true }));
        });
        var saveTimer, ready = false;
        setTimeout(function () { ready = true; }, 0); // ignore the events fired by the restore above
        var remember = function (e) {
          if (!ready || !e.isTrusted) return;
          clearTimeout(saveTimer);
          saveTimer = setTimeout(function () {
            var s = read(), v = {};
            pick().forEach(function (el) { if (!el.disabled) v[el.id] = el.type === 'checkbox' ? el.checked : el.value; });
            s.inputs[SLUG] = v; write(s);
          }, 500);
        };
        card.addEventListener('input', remember); card.addEventListener('change', remember);

        // flash results when they change, and celebrate a finished download
        if (window.MutationObserver && !calm) {
          var live = false; setTimeout(function () { live = true; }, 600);
          new MutationObserver(function (list) {
            if (!live) return;
            list.forEach(function (m) {
              var el = m.target.nodeType === 1 ? m.target : m.target.parentNode;
              if (m.type === 'attributes') { if (el.id === 'dl' && !el.hidden) burst(el); return; }
              if (el && el.matches && el.matches('.stat b, .out')) { el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
            });
          }).observe(card, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['hidden'] });
        }
      }
    }
    paint();

    // scroll reveal, with a per-row stagger
    var rev = document.querySelectorAll('.reveal');
    if (!window.IntersectionObserver || calm) rev.forEach(function (el) { el.classList.add('in'); });
    else {
      var io = new IntersectionObserver(function (entries) {
        var n = 0;
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.style.setProperty('--i', n++); en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { rootMargin: '0px 0px -40px 0px' });
      rev.forEach(function (el) { io.observe(el); });
    }

    // ---------- home page: the typed line and the three script-driven live tiles ----------
    var typed = $('typed');
    if (typed && !calm) {
      var list = JSON.parse(typed.dataset.list), li = 0, ci = list[0][0].length, dir = -1, wait = 40;
      setInterval(function () {
        if (document.hidden) return;
        if (wait > 0) { wait--; return; }
        ci += dir;
        typed.textContent = list[li][0].slice(0, ci);
        if (dir < 0 && ci === 0) { li = (li + 1) % list.length; typed.href = list[li][1] + '/'; dir = 1; }
        else if (dir > 0 && ci === list[li][0].length) { dir = -1; wait = 45; }
      }, 45);
    }
    var pw = $('livePw'), qr = $('liveQr'), sw = $('liveSw');
    if (pw && !calm) {
      var CH = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%&*?', frame = 0;
      setInterval(function () {
        if (document.hidden) return;
        frame = (frame + 1) % 40;
        if (frame > 12) return; // scramble briefly, then hold the result
        var s = ''; for (var i = 0; i < 10; i++) s += CH[Math.floor(Math.random() * CH.length)];
        pw.textContent = s;
      }, 70);
    }
    if (qr) {
      var cells = qr.children, fixed = function (i) { var r = Math.floor(i / 7), c = i % 7; return (r < 2 && c < 2) || (r < 2 && c > 4) || (r > 4 && c < 2); };
      var shuffle = function () { for (var i = 0; i < cells.length; i++) cells[i].classList.toggle('on', fixed(i) || Math.random() > .5); };
      shuffle();
      if (!calm) setInterval(function () { if (!document.hidden) shuffle(); }, 1500);
    }
    if (sw && !calm) {
      var t0 = performance.now(), p2 = function (x) { return String(x).padStart(2, '0'); };
      setInterval(function () {
        if (document.hidden) return;
        var cs = Math.floor((performance.now() - t0) / 10) % 360000;
        sw.textContent = p2(Math.floor(cs / 6000)) + ':' + p2(Math.floor(cs / 100) % 60) + '.' + p2(cs % 100);
      }, 50);
    }
  });
})();

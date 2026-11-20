// Shared behaviour for every page. Loaded in <head> (not deferred) because the
// tool scripts further down the page call these helpers as they run.
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var REL = root.getAttribute('data-rel') || '';
  var SLUG = root.getAttribute('data-slug') || '';
  var calmOS = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches, calm = calmOS;
  var darkOS = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;

  // ---------- visitor preferences (Settings). Stored with the rest of the saved state, so they sync with an account. ----------
  var ACCENTS = { blue: '#2563eb', violet: '#7c3aed', green: '#059669', teal: '#0d9488', orange: '#ea580c', pink: '#db2777', red: '#dc2626', gray: '#475569' };
  var PREF = { theme: 'light', accent: 'blue', size: 'm', density: 'comfy', corners: 'round', tiles: true, desc: true, newtab: false, motion: true, rememberInputs: true, rememberRecent: true, confetti: true,
    toasts: true, sounds: true, font: 'system', lineh: 'normal', width: 'standard', cards: 'border', icons: 'color', bgstyle: 'plain', sticky: true,
    contrast: false, gray: false, underline: false, bigtargets: false, focus: false, letters: false,
    popular: true, welcome: true, sections: true, homecat: '', order: 'cat',
    toolbar: true, guides: true, related: true, units: 'metric', imgfmt: 'auto', quality: 'auto', pdfres: 'auto',
    numfmt: 'en-US', decimals: 'auto', shortcuts: true };
  var P = PREF;
  // attribute on <html> for every on/off or choice setting that only changes the look
  var LOOK = { font: 'font', lineh: 'lineh', width: 'width', cards: 'cards', icons: 'icons', bgstyle: 'bg' };
  var FLAGS = { contrast: 'contrast', gray: 'gray', underline: 'underline', bigtargets: 'bigtargets', focus: 'focus', letters: 'letters' };
  var OFFS = { sticky: 'nosticky', popular: 'nopopular', welcome: 'nowelcome', sections: 'nosections', toolbar: 'notoolbar', guides: 'noguides', related: 'norelated' };
  function rawState() { try { return JSON.parse(localStorage.getItem('gtn1')) || {}; } catch (e) { return {}; } }
  function prefsOf(o) {
    var p = {}, src = (o && o.prefs && typeof o.prefs === 'object') ? o.prefs : {}, k;
    for (k in PREF) p[k] = (k in src && typeof src[k] === typeof PREF[k]) ? src[k] : PREF[k];
    if (!(o && o.prefs && o.prefs.theme)) { try { var old = localStorage.getItem('theme'); if (old === 'dark' || old === 'light') p.theme = old; } catch (e) {} }
    return p;
  }
  window.applyPrefs = function (p) {
    p = p || prefsOf(rawState());
    var dark = p.theme === 'dark' || (p.theme === 'auto' && darkOS && darkOS.matches);
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    var c = ACCENTS[p.accent] || ACCENTS.blue, a = dark ? 'color-mix(in srgb, ' + c + ' 62%, #ffffff)' : c;
    root.style.setProperty('--accent', a);
    root.style.setProperty('--accent-soft', 'color-mix(in srgb, ' + a + ' 15%, var(--surface))');
    root.style.setProperty('--on-accent', dark ? '#0b1220' : '#ffffff');
    root.setAttribute('data-size', p.size); root.setAttribute('data-density', p.density); root.setAttribute('data-corners', p.corners);
    root.toggleAttribute('data-notiles', !p.tiles); root.toggleAttribute('data-nodesc', !p.desc);
    calm = calmOS || !p.motion; root.toggleAttribute('data-calm', !p.motion);
    var k;
    for (k in LOOK) root.setAttribute('data-' + LOOK[k], p[k]);
    for (k in FLAGS) root.toggleAttribute('data-' + FLAGS[k], !!p[k]);
    for (k in OFFS) root.toggleAttribute('data-' + OFFS[k], !p[k]);
    P = p;
    return p;
  };
  applyPrefs();
  if (darkOS && darkOS.addEventListener) darkOS.addEventListener('change', function () { if (prefsOf(rawState()).theme === 'auto') applyPrefs(); });
  var fine = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;

  // ---------- language: the page is translated in place by Google Translate, loaded only when asked for ----------
  var LANG = 'en';
  try { LANG = localStorage.getItem('lang') || 'en'; } catch (e) {}
  function langCookie(code) {
    var host = location.hostname.replace(/^www\./, ''), tail = code ? '' : ';expires=Thu, 01 Jan 1970 00:00:00 GMT';
    var v = 'googtrans=' + (code ? '/en/' + code : '') + tail + ';path=/';
    document.cookie = v;
    if (host.indexOf('.') !== -1) document.cookie = v + ';domain=.' + host;
  }
  window.setLang = function (code) {
    try { localStorage.setItem('lang', code); } catch (e) {}
    langCookie(code === 'en' ? '' : code);
    location.reload();
  };
  if (LANG !== 'en') {
    langCookie(LANG);
    if (/^(ar|ur|fa|he|iw|ps|sd)$/.test(LANG)) root.setAttribute('dir', 'rtl');
    window.gtInit = function () { new google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'gt'); };
  }

  // ---------- helpers used by the tools ----------
  window.$ = function (id) { return document.getElementById(id); };
  window.fmtBytes = function (n) {
    if (n < 1024) return n + ' B';
    if (n < 1048576) return (n / 1024).toFixed(1) + ' KB';
    return (n / 1048576).toFixed(2) + ' MB';
  };
  window.fmtNum = function (n, d) {
    var max = d == null ? (P.decimals === 'auto' ? 2 : +P.decimals) : d;
    return Number(n).toLocaleString(P.numfmt || 'en-US', { minimumFractionDigits: Math.min(d || 0, max), maximumFractionDigits: max });
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
  var COLORS = ['#ef476f', '#ffd23f', '#06d6a0', '#4cc9f0', '#ff8c42'];
  window.burst = function (el) {
    if (calm || !el || !el.animate || !read().prefs.confetti) return;
    var r = el.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    for (var i = 0; i < 14; i++) {
      var b = document.createElement('i'), a = Math.random() * Math.PI * 2, d = 40 + Math.random() * 70;
      b.className = 'bit'; b.style.left = x + 'px'; b.style.top = y + 'px';
      b.style.background = COLORS[i % COLORS.length];
      document.body.appendChild(b);
      b.animate([{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
        { transform: 'translate(' + (Math.cos(a) * d - 4) + 'px,' + (Math.sin(a) * d + 30) + 'px) rotate(' + (Math.random() * 540 - 270) + 'deg) scale(.4)', opacity: 0 }],
        { duration: 650 + Math.random() * 300, easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = (function (n) { return function () { n.remove(); }; })(b);
    }
  };
  var toastTimer;
  window.toast = function (text) {
    var t = $('toast'); if (!t || !P.toasts) return;
    t.hidden = true; void t.offsetWidth; // restart the entrance animation
    t.textContent = text; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.hidden = true; }, 2400);
  };

  // ---------- saved state: pinned tools, recent tools, calculator settings ----------
  var KEY = 'gtn1';
  function read() {
    var o = {};
    try { o = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
    return { favs: Array.isArray(o.favs) ? o.favs : [], recent: Array.isArray(o.recent) ? o.recent : [], inputs: o.inputs && typeof o.inputs === 'object' ? o.inputs : {}, prefs: prefsOf(o), t: +o.t || 0 };
  }
  function write(o, quiet) {
    if (!quiet) o.t = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
    if (!quiet) document.dispatchEvent(new CustomEvent('gtn:change'));
  }
  var Store = window.Store = {
    read: read,
    replace: function (o) { write(o, true); applyPrefs(prefsOf(o)); paint(); if (window.refreshSettings) refreshSettings(); }, // used by cloud sync; does not echo a change event
    isFav: function (s) { return read().favs.indexOf(s) !== -1; },
    toggleFav: function (s) {
      var o = read(), i = o.favs.indexOf(s);
      if (i === -1) o.favs.unshift(s); else o.favs.splice(i, 1);
      write(o); paint();
      return i === -1;
    }
  };
  window.Prefs = {
    get: function () { return read().prefs; },
    set: function (k, v) { var o = read(); o.prefs[k] = v; write(o); applyPrefs(o.prefs); if (k === 'theme') { try { localStorage.setItem('theme', v); } catch (e) {} } return o.prefs; },
    reset: function () { var o = read(); o.prefs = prefsOf({ prefs: { theme: 'light' } }); write(o); applyPrefs(o.prefs); try { localStorage.removeItem('theme'); } catch (e) {} }
  };
  function tool(slug) { var T = window.TOOLS || []; for (var i = 0; i < T.length; i++) if (T[i][0] === slug) return T[i]; return null; }
  function chip(t, saved) {
    var a = document.createElement('a'), dot = document.createElement('i');
    a.className = 'chip'; a.href = REL + t[0] + '/'; a.style.setProperty('--c', t[3]);
    a.appendChild(dot); a.appendChild(document.createTextNode(t[1]));
    if (saved) { var em = document.createElement('em'); em.textContent = 'saved'; a.title = 'Your last numbers are saved here'; a.appendChild(em); }
    return a;
  }
  function fill(box, slugs) {
    if (!box) return 0;
    box.innerHTML = '';
    var n = 0;
    var mem = read().inputs;
    slugs.forEach(function (s) { var t = tool(s); if (t) { box.appendChild(chip(t, !!mem[s])); n++; } });
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
      Prefs.set('theme', root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      if (window.refreshSettings) refreshSettings();
    });

    // ---------- account menu and sign-in dialog ----------
    // The forms always work as forms; the actual sign-in is done by cloud.js (window.GTNAuth),
    // which is only present once the site owner has added a Firebase config.
    var authBtn = $('authBtn'), menu = $('acctMenu'), box = $('authBox'), tab = 'in';
    var A = function () { return window.GTNAuth && window.GTNAuth.on ? window.GTNAuth : null; };
    var NOT_ON = 'Accounts are being switched on for this site and are not ready yet. Your pinned tools and saved work are already kept on this device.';
    var say = function (t, ok) { var m = $('authMsg'); m.textContent = t || ''; m.className = 'authmsg' + (ok ? ' ok' : ''); };
    var setTab = function (t) {
      tab = t; var up = t === 'up';
      box.querySelectorAll('[role=tab]').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.tab === t); });
      $('authT').textContent = up ? 'Create your free account' : 'Welcome back';
      $('authSub').textContent = up ? 'It takes a few seconds. Your pinned tools and saved work will follow you to every device.' : 'Sign in to keep your pinned tools and saved work on every device.';
      $('gLabel').textContent = up ? 'Sign up with Google' : 'Continue with Google';
      $('nameRow').hidden = !up; $('authGo').textContent = up ? 'Create account' : 'Sign in';
      $('aPass').autocomplete = up ? 'new-password' : 'current-password'; $('aPass').placeholder = up ? 'At least 6 characters' : '';
      $('authForgot').hidden = up;
      $('authSwitch').innerHTML = up ? 'Already have an account? <button class="linkbtn" type="button" data-tab="in">Sign in</button>' : 'New here? <button class="linkbtn" type="button" data-tab="up">Create a free account</button>';
      say('');
    };
    var openBox = function (t) { menu.hidden = true; authBtn.setAttribute('aria-expanded', 'false'); setTab(t); if (box.showModal) box.showModal(); (t === 'up' ? $('aName') : $('aEmail')).focus(); };
    var done = function (text) { box.close(); toast(text); burst(authBtn); };
    var busy = function (on) { box.querySelectorAll('button, input').forEach(function (el) { el.disabled = on; }); };
    var attempt = function (job, okText) {
      var a = A(); if (!a) return say(NOT_ON);
      busy(true); say('Please wait…', true);
      job(a).then(function () { busy(false); done(okText); }, function (e) { busy(false); say(e.message); });
    };
    if (authBtn && box) {
      authBtn.addEventListener('click', function (e) { e.stopPropagation(); menu.hidden = !menu.hidden; authBtn.setAttribute('aria-expanded', !menu.hidden); });
      document.addEventListener('click', function (e) { if (!menu.hidden && !e.target.closest('#acctMenu')) { menu.hidden = true; authBtn.setAttribute('aria-expanded', 'false'); } });
      menu.addEventListener('click', function (e) {
        var b = e.target.closest('[data-auth]'); if (!b) return;
        if (b.dataset.auth === 'set') { e.stopPropagation(); menu.hidden = true; openSettings(); return; }
        if (b.dataset.auth === 'lang') { e.stopPropagation(); menu.hidden = true; $('langMenu').hidden = false; return; }
        if (b.dataset.auth === 'out') { menu.hidden = true; var a = A(); if (a) a.signOut().then(function () { toast('Signed out. Your tools stay saved on this device.'); }); }
        else openBox(b.dataset.auth);
      });
      box.addEventListener('click', function (e) { var t = e.target.closest('[data-tab]'); if (t) setTab(t.dataset.tab); if (e.target === box) box.close(); });
      $('authClose').addEventListener('click', function () { box.close(); });
      $('authGoogle').addEventListener('click', function () { attempt(function (a) { return a.google(); }, 'Signed in. Your tools now follow you.'); });
      $('authForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var email = $('aEmail').value.trim(), pass = $('aPass').value, name = $('aName').value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return say('Type your email address, for example name@gmail.com.');
        if (pass.length < 6) return say(tab === 'up' ? 'Choose a password with at least 6 characters.' : 'Type your password.');
        if (tab === 'up') attempt(function (a) { return a.signUp(name, email, pass); }, 'Account created. Welcome' + (name ? ', ' + name.split(' ')[0] : '') + '!');
        else attempt(function (a) { return a.signIn(email, pass); }, 'Signed in. Welcome back!');
      });
      $('authForgot').addEventListener('click', function () {
        var email = $('aEmail').value.trim(), a = A();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return say('Type your email above first, then press this again.');
        if (!a) return say(NOT_ON);
        a.reset(email).then(function () { say('We sent a link to ' + email + '. Open it to choose a new password.', true); }, function (e) { say(e.message); });
      });
      // reflect who is signed in
      var show = function (u) {
        var nm = u ? (u.displayName || u.email || 'Account').split(' ')[0] : 'Sign in';
        $('authName').textContent = nm;
        authBtn.classList.toggle('in', !!u);
        $('acctOut').hidden = !!u; $('acctIn').hidden = !u;
        if (u) $('acctWho').textContent = 'Signed in as ' + (u.email || u.displayName);
        var note = $('mineNote'); if (note) note.textContent = u ? 'Synced to your account.' : 'Saved on this device. Sign in to keep it on every device.';
      };
      window.GTNAuth = window.GTNAuth || {};
      window.GTNAuth.onChange = show;
      if (A() && A().user()) show(A().user());
    }

    // ---------- settings dialog ----------
    var setBox = $('setBox');
    window.openSettings = function () { if (!setBox) return; refreshSettings(); if (setBox.showModal) setBox.showModal(); var f = setBox.querySelector('.setnav button'); if (f) f.focus(); }; // do not pop up the phone keyboard
    window.refreshSettings = function () {
      if (!setBox) return;
      var p = read().prefs;
      setBox.querySelectorAll('[data-pref]').forEach(function (g) {
        var k = g.dataset.pref;
        if (g.type === 'checkbox') g.checked = !!p[k];
        else if (g.tagName === 'SELECT') g.value = String(p[k]);
        else g.querySelectorAll('[data-v]').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.v === String(p[k])); });
      });
      var u = window.GTNAuth && window.GTNAuth.user ? window.GTNAuth.user() : null;
      $('setAcct').textContent = u ? 'Signed in as ' + (u.email || u.displayName) + '. Your settings, pinned tools and saved work are kept in your account and follow you to every device.' : 'Not signed in. Your settings are saved on this device only. Sign in to keep them on every device.';
      $('setSignIn').hidden = !!u; $('setSignOut').hidden = !u; $('setNameRow').hidden = !u; $('setDelAcct').hidden = !u;
      if (u && document.activeElement !== $('setName')) $('setName').value = u.displayName || '';
      var o = read(); $('setCounts').textContent = o.favs.length + ' pinned · ' + o.recent.length + ' recent · ' + Object.keys(o.inputs).length + ' tools with saved entries';
      if ($('setLang')) $('setLang').value = LANG;
    };
    var newTab = function () {
      var on = read().prefs.newtab;
      document.querySelectorAll('a.t-link, a.live, .popular a, a.side-link, .chip').forEach(function (a) { if (on) { a.target = '_blank'; a.rel = 'noopener'; } else { a.removeAttribute('target'); } });
    };
    if (setBox) {
      setBox.addEventListener('click', function (e) {
        if (e.target === setBox) return setBox.close();
        var b = e.target.closest('[data-v]'), g = b && b.closest('[data-pref]');
        if (g) { Prefs.set(g.dataset.pref, b.dataset.v); refreshSettings(); toast('Saved'); }
      });
      setBox.querySelectorAll('select[data-pref]').forEach(function (c) {
        c.addEventListener('change', function () { Prefs.set(c.dataset.pref, c.value); toast('Saved'); });
      });
      // section links on the left, and the search box
      setBox.querySelectorAll('[data-go]').forEach(function (b) {
        b.addEventListener('click', function () {
          $('setFind').value = ''; findSetting();
          var sec = $('set-' + b.dataset.go); $('setBody').scrollTo({ top: sec.offsetTop - $('setBody').offsetTop - 4, behavior: calm ? 'auto' : 'smooth' });
          setBox.querySelectorAll('[data-go]').forEach(function (o) { o.setAttribute('aria-current', o === b); });
        });
      });
      $('setBody').addEventListener('scroll', function () {
        var top = $('setBody').scrollTop + 40, cur = null;
        setBox.querySelectorAll('[data-sec]').forEach(function (sec) { if (sec.offsetTop - $('setBody').offsetTop <= top) cur = sec.dataset.sec; });
        setBox.querySelectorAll('[data-go]').forEach(function (o) { o.setAttribute('aria-current', o.dataset.go === cur); });
      }, { passive: true });
      var findSetting = function () {
        var q = $('setFind').value.trim().toLowerCase(), any = false;
        setBox.querySelectorAll('[data-sec]').forEach(function (sec) {
          var items = sec.querySelectorAll('.row, .tog, .setbtns, .keys, .setnote, h4'), hit = !q || sec.querySelector('h3').textContent.toLowerCase().indexOf(q) !== -1;
          items.forEach(function (it) { var m = !q || hit || it.textContent.toLowerCase().indexOf(q) !== -1; it.classList.toggle('miss', !m); if (m) any = true; });
          sec.hidden = !!q && !hit && !sec.querySelector('.row:not(.miss), .tog:not(.miss), .setbtns:not(.miss)');
        });
        $('setNone').hidden = any || !q;
      };
      $('setFind').addEventListener('input', findSetting);
      $('setNameSave').addEventListener('click', function () {
        var a = window.GTNAuth, n = $('setName').value.trim();
        if (!n) return toast('Type your name first.');
        if (a && a.updateName) a.updateName(n).then(function () { toast('Name saved.'); refreshSettings(); }, function (e) { toast(e.message); });
      });
      $('setDelAcct').addEventListener('click', function () {
        var a = window.GTNAuth; if (!a || !a.deleteAccount) return;
        if (!confirm('Delete your account for good? Your pinned tools and saved work in the account are removed. What is saved on this device stays.')) return;
        a.deleteAccount().then(function () { refreshSettings(); toast('Your account was deleted.'); }, function (e) { alert(e.message); });
      });
      $('setClearPins').addEventListener('click', function () { var o = read(); o.favs = []; write(o); paint(); refreshSettings(); toast('All tools unpinned.'); });
      setBox.querySelectorAll('input[type=checkbox][data-pref]').forEach(function (c) {
        c.addEventListener('change', function () { Prefs.set(c.dataset.pref, c.checked); if (c.dataset.pref === 'newtab') newTab(); toast('Saved'); });
      });
      $('setClose').addEventListener('click', function () { setBox.close(); });
      if ($('setLang')) $('setLang').addEventListener('change', function () { setLang($('setLang').value); });
      $('setSignIn').addEventListener('click', function () { setBox.close(); var m = document.querySelector('#acctOut [data-auth="in"]'); if (m) m.click(); });
      $('setSignOut').addEventListener('click', function () { var a = window.GTNAuth; if (a && a.signOut) a.signOut().then(function () { refreshSettings(); toast('Signed out. Your tools stay saved on this device.'); }); });
      $('setExport').addEventListener('click', function () {
        var blob = new Blob([JSON.stringify(read(), null, 2)], { type: 'application/json' }), a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = 'gettoolnest-my-data.json'; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
      });
      $('setImportBtn').addEventListener('click', function () { $('setImport').click(); });
      $('setImport').addEventListener('change', function () {
        var f = this.files[0]; this.value = ''; if (!f) return;
        f.text().then(function (t) {
          var o = JSON.parse(t);
          if (!o || !Array.isArray(o.favs) || !Array.isArray(o.recent)) throw new Error();
          write({ favs: o.favs.filter(tool), recent: o.recent.filter(tool), inputs: o.inputs && typeof o.inputs === 'object' ? o.inputs : {}, prefs: prefsOf(o) });
          applyPrefs(); paint(); refreshSettings(); newTab(); toast('Your data was imported.');
        }).catch(function () { toast('That file is not a GetToolNest data file.'); });
      });
      $('setClearInputs').addEventListener('click', function () { if (!confirm('Delete the numbers and text saved in every tool?')) return; var o = read(); o.inputs = {}; write(o); paint(); refreshSettings(); toast('Saved entries deleted.'); });
      $('setClearRecent').addEventListener('click', function () { var o = read(); o.recent = []; write(o); paint(); refreshSettings(); toast('History cleared.'); });
      $('setReset').addEventListener('click', function () { Prefs.reset(); refreshSettings(); newTab(); toast('Settings are back to normal.'); });
      $('setWipe').addEventListener('click', function () {
        if (!confirm('Delete everything this site saved on this device: settings, pinned tools, history and saved entries?')) return;
        write({ favs: [], recent: [], inputs: {}, prefs: prefsOf({ prefs: { theme: 'light' } }) });
        try { localStorage.removeItem('theme'); } catch (e) {}
        applyPrefs(); paint(); refreshSettings(); newTab(); toast('Everything was deleted from this device.');
      });
    }
    newTab();

    // palette
    var pal = $('palette'), palInput = $('palInput');
    if (pal && pal.showModal) {
      var renderPal = finder(palInput, $('palResults'));
      var open = function () { if (pal.open) return; palInput.value = ''; pal.showModal(); renderPal(); palInput.focus(); };
      $('palBtn').addEventListener('click', open);
      document.addEventListener('keydown', function (e) {
        var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || '')) || e.target.isContentEditable;
        if (!P.shortcuts) return;
        if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) { e.preventDefault(); open(); }
        else if (e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); open(); }
      });
      pal.addEventListener('click', function (e) { if (e.target === pal) pal.close(); }); // click on the backdrop
    }
    var hero = $('toolSearch');
    if (hero) {
      finder(hero, $('heroResults'));
      var q = new URLSearchParams(location.search).get('q'); // site search from Google results: /?q=pdf
      if (q) { hero.value = q.slice(0, 80); hero.dispatchEvent(new Event('input')); hero.focus(); }
      document.addEventListener('click', function (e) { if (!e.target.closest('.finder')) $('heroResults').hidden = true; });
    }

    // category pills
    document.querySelectorAll('.pill').forEach(function (p) {
      p.addEventListener('click', function () {
        var cat = p.dataset.cat;
        document.querySelectorAll('.pill').forEach(function (o) { o.classList.toggle('on', o === p); o.setAttribute('aria-pressed', o === p); });
        document.querySelectorAll('.cat').forEach(function (s) { s.hidden = !!cat && s.dataset.cat !== cat; });
        document.querySelectorAll('.cat:not([hidden])').forEach(function (el) { el.classList.add('in'); });
      });
    });

    // home page order and starting category
    if (P.order === 'az' && document.querySelector('.cat .grid')) {
      var first = document.querySelector('.cat'), all = Array.prototype.slice.call(document.querySelectorAll('.cat .tool-card'));
      all.sort(function (a, b) { return a.textContent.localeCompare(b.textContent); }).forEach(function (c) { first.querySelector('.grid').appendChild(c); });
      document.querySelectorAll('.cat').forEach(function (s) { if (s !== first) s.hidden = true; });
      first.querySelector('.cat-title').firstChild.textContent = 'All tools, A to Z';
      var pills = document.querySelector('.pills'); if (pills) pills.hidden = true;
    } else if (P.homecat) {
      var startPill = document.querySelector('.pill[data-cat="' + P.homecat.replace(/"/g, '') + '"]'); if (startPill) startPill.click();
    }

    // stars and pin button
    document.querySelectorAll('.star').forEach(function (b) {
      b.addEventListener('click', function () { var on = Store.toggleFav(b.dataset.slug); if (on) burst(b); toast(on ? 'Pinned. Find it on the home page.' : 'Unpinned'); });
    });
    var pin = $('pinBtn');
    if (pin) pin.addEventListener('click', function () { var on = Store.toggleFav(SLUG); if (on) burst(pin); toast(on ? 'Pinned. Find it on the home page.' : 'Unpinned'); });
    var share = $('shareBtn');
    if (share) share.addEventListener('click', function () {
      var url = (document.querySelector('link[rel=canonical]') || {}).href || location.href;
      if (navigator.share) navigator.share({ title: document.title, url: url }).catch(function () {});
      else { copyText(url); toast('Link copied'); burst(share); }
    });

    if (SLUG) {
      // remember this visit
      var o = read(), at = o.recent.indexOf(SLUG);
      if (o.prefs.rememberRecent && at !== 0) { if (at > 0) o.recent.splice(at, 1); o.recent.unshift(SLUG); o.recent = o.recent.slice(0, 12); write(o); }

      // Remember what was entered so a returning visitor finds their work as they left it.
      // Short fields only: never textareas, which may hold private documents, and never files.
      var card = document.querySelector('.card');
      if (card) {
        var setStart = function (id, val) { var el = $(id); if (!el || val == null) return; if (el.type === 'checkbox') { if (el.checked === val) return; el.checked = val; } else { if (el.tagName === 'SELECT' && !el.querySelector('option[value="' + val + '"]')) return; if (el.value === String(val)) return; el.value = val; } el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); };
        if ($('unit') && $('unit').querySelector('option[value="i"]')) setStart('unit', P.units === 'imperial' ? 'i' : 'm');
        if (P.imgfmt !== 'auto') setStart('fmt', { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp' }[P.imgfmt]);
        if (P.quality !== 'auto' && $('q') && $('q').type === 'range') setStart('q', P.quality);
        if (P.pdfres !== 'auto') setStart('scale', P.pdfres);
        setStart('snd', P.sounds);
        var pick = function () { return card.querySelectorAll('input[type=number][id],input[type=range][id],input[type=checkbox][id],input[type=date][id],input[type=text][id],select[id]'); };
        var mem = read().inputs[SLUG], restored = 0, clear = $('clearBtn');
        if (mem) pick().forEach(function (el) {
          if (el.disabled || !(el.id in mem)) return;
          if (el.type === 'checkbox') { if (el.checked === !!mem[el.id]) return; el.checked = !!mem[el.id]; }
          else { if (el.value === String(mem[el.id])) return; el.value = mem[el.id]; if (el.value !== String(mem[el.id])) return; }
          restored++;
          el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true }));
        });
        if (clear) {
          clear.hidden = !mem;
          clear.addEventListener('click', function () { var s = read(); delete s.inputs[SLUG]; write(s); location.reload(); });
        }
        if (restored) setTimeout(function () { toast('Welcome back. Your last entries are restored.'); }, 500);
        var saveTimer, ready = false;
        setTimeout(function () { ready = true; }, 0); // ignore the events fired by the restore above
        var remember = function (e) {
          if (!read().prefs.rememberInputs) return;
          if (!ready) return;
          clearTimeout(saveTimer);
          saveTimer = setTimeout(function () {
            var s = read(), v = {};
            pick().forEach(function (el) { if (!el.disabled) v[el.id] = el.type === 'checkbox' ? el.checked : el.value; });
            if (!Object.keys(v).length) return; // this tool has nothing worth remembering
            s.inputs[SLUG] = v; write(s);
            if (clear) clear.hidden = false;
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

    // ---------- language menu ----------
    var langBtn = $('langBtn'), langMenu = $('langMenu');
    if (langBtn && langMenu) {
      langMenu.querySelectorAll('button').forEach(function (b) {
        if (b.dataset.lang === LANG) { b.setAttribute('aria-current', 'true'); langBtn.lastChild.textContent = b.dataset.lang.slice(0, 2).toUpperCase(); }
        b.addEventListener('click', function () { if (b.dataset.lang !== LANG) setLang(b.dataset.lang); else langMenu.hidden = true; });
      });
      langBtn.addEventListener('click', function (e) { e.stopPropagation(); langMenu.hidden = !langMenu.hidden; langBtn.setAttribute('aria-expanded', !langMenu.hidden); });
      document.addEventListener('click', function (e) { if (!langMenu.hidden && !e.target.closest('#langMenu')) langMenu.hidden = true; });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') langMenu.hidden = true; });
    }
    if (LANG !== 'en') {
      // Values the tools compute, and text that keeps changing, must not be rewritten by the translator.
      document.querySelectorAll('.out,.stat b,.stat-big b,.kv code,.big,.diff,.files,.thumbs,.sched tbody,.scene,.typed-line a,.marquee,textarea,input,code,kbd,.logo,#langMenu').forEach(function (el) { el.setAttribute('translate', 'no'); el.classList.add('notranslate'); });
      var gs = document.createElement('script');
      gs.src = 'https://translate.google.com/translate_a/element.js?cb=gtInit'; gs.async = true;
      gs.onerror = function () { toast('Translation could not load. Showing English.'); };
      document.head.appendChild(gs);
    }

    // ---------- numbers that count up when they scroll into view ----------
    var counts = document.querySelectorAll('[data-count]');
    if (counts.length) {
      var run = function (el) {
        var to = +el.dataset.count, pre = el.dataset.pre || '', suf = el.dataset.suf || '', t0 = performance.now();
        if (calm || !to) { el.textContent = pre + to + suf; return; }
        (function step(now) { var k = Math.min(1, (now - t0) / 1100), e = 1 - Math.pow(1 - k, 3); el.textContent = pre + Math.round(to * e) + suf; if (k < 1) requestAnimationFrame(step); })(t0);
      };
      if (!window.IntersectionObserver) counts.forEach(run);
      else { var co = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { run(x.target); co.unobserve(x.target); } }); }); counts.forEach(function (el) { co.observe(el); }); }
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

    // ---------- the extra live tiles ----------
    var every = function (ms, fn) { fn(); if (!calm) setInterval(function () { if (!document.hidden) fn(); }, ms); };
    var p2 = function (x) { return String(x).padStart(2, '0'); };
    var tm = $('liveTimer'), arc = $('liveArc');
    if (tm) { var left = 300; every(1000, function () { left = left > 0 ? left - 1 : 300; tm.textContent = p2(Math.floor(left / 60)) + ':' + p2(left % 60); if (arc) arc.style.strokeDashoffset = (94.25 * (1 - left / 300)).toFixed(2); }); }
    var ed = $('liveEdit');
    if (ed) { var forms = ['Total: $500', 'Total: $350', 'Total: $420']; var fi = 0; every(2200, function () { ed.classList.remove('flip'); void ed.offsetWidth; ed.textContent = forms[fi++ % forms.length]; ed.classList.add('flip'); }); }
    var dice = $('liveDice');
    if (dice) { var rolls = 0; every(140, function () { rolls = (rolls + 1) % 24; if (rolls < 9) dice.textContent = 1 + Math.floor(Math.random() * 99); }); }
    var sw2 = $('liveSwatch'), hx = $('liveHex');
    if (sw2) { var hue = 190; every(120, function () { hue = (hue + 3) % 360; var c = 'hsl(' + hue + ',90%,60%)'; sw2.style.background = c; sw2.style.boxShadow = '0 0 18px ' + c; var t = document.createElement('div'); t.style.color = c; document.body.appendChild(t); var m = getComputedStyle(t).color.match(/\d+/g); t.remove(); if (m) hx.textContent = '#' + m.slice(0, 3).map(function (v) { return (+v).toString(16).padStart(2, '0'); }).join('').toUpperCase(); }); }
    var ua = $('liveUnitA'), ub = $('liveUnitB');
    if (ua) { var temps = [0, 25, 37, 100, -10, 18], ti = 0; every(1800, function () { var c = temps[ti++ % temps.length]; ua.textContent = c + '°C'; ub.textContent = Math.round(c * 9 / 5 + 32) + '°F'; }); }
    var wd = $('liveWords');
    if (wd) { var w = 0; every(90, function () { w = w >= 250 ? 0 : w + 1 + Math.floor(Math.random() * 3); wd.textContent = Math.min(w, 250); }); }
  });
})();

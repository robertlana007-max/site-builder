// Optional Google sign-in. Only loaded when config.json has a "firebase" block.
// Syncs the same small object the site already keeps in localStorage (pinned tools,
// recent tools, calculator settings) to one Firestore document per user.
(function () {
  var cfg = window.FIREBASE_CONFIG, btn = document.getElementById('authBtn');
  if (!cfg || !btn || !window.Store) return;
  var SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
  var auth, doc = null, user = null, timer;

  function load(name) {
    return new Promise(function (ok, fail) {
      var s = document.createElement('script');
      s.src = SDK + name; s.onload = ok; s.onerror = function () { fail(new Error('Could not load ' + name)); };
      document.head.appendChild(s);
    });
  }
  function uniq(a) { return a.filter(function (x, i) { return typeof x === 'string' && a.indexOf(x) === i; }); }
  // Keep everything pinned on either side; for the rest, the more recently changed side wins.
  function merge(local, remote) {
    remote = remote || {};
    var r = { favs: remote.favs || [], recent: remote.recent || [], inputs: remote.inputs || {}, t: +remote.t || 0 };
    var newer = local.t >= r.t ? local : r, older = newer === local ? r : local, inputs = {}, k;
    for (k in older.inputs) inputs[k] = older.inputs[k];
    for (k in newer.inputs) inputs[k] = newer.inputs[k];
    return { favs: uniq(local.favs.concat(r.favs)), recent: uniq(newer.recent.concat(older.recent)).slice(0, 12), inputs: inputs, t: Math.max(local.t, r.t) };
  }
  function label() {
    btn.textContent = user ? (user.displayName || user.email || 'Account').split(' ')[0] : 'Sign in';
    btn.title = user ? 'Signed in as ' + (user.email || user.displayName) + '. Click to sign out.' : 'Sign in with Google to keep your pinned tools on every device';
    var note = document.getElementById('mineNote');
    if (note) note.textContent = user ? 'Synced to your Google account.' : 'Saved on this device. Sign in to sync across devices.';
  }
  function push() {
    if (!doc) return;
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (!doc) return;
      var s = Store.read();
      doc.set({ favs: s.favs, recent: s.recent, inputs: s.inputs, t: s.t }).catch(function () {});
    }, 1500);
  }

  load('firebase-app-compat.js').then(function () {
    return Promise.all([load('firebase-auth-compat.js'), load('firebase-firestore-compat.js')]);
  }).then(function () {
    firebase.initializeApp(cfg);
    auth = firebase.auth();
    var db = firebase.firestore();
    btn.hidden = false; label();

    auth.onAuthStateChanged(function (u) {
      user = u; doc = null; clearTimeout(timer); label();
      if (!u) return;
      var ref = db.collection('users').doc(u.uid);
      ref.get().then(function (snap) {
        if (user !== u) return; // signed out again while loading
        var m = merge(Store.read(), snap.exists ? snap.data() : null);
        Store.replace(m);
        doc = ref;
        return ref.set(m);
      }).catch(function () { if (window.toast) toast('Could not sync right now. Your tools are still saved on this device.'); });
    });

    btn.addEventListener('click', function () {
      if (user) { if (confirm('Sign out of ' + (user.email || 'your account') + '? Your tools stay saved on this device.')) auth.signOut(); return; }
      auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function () {
        if (window.toast) toast('Signed in. Your pinned tools now follow you.');
      }).catch(function (e) {
        var code = e && e.code;
        if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') return;
        if (window.toast) toast(code === 'auth/popup-blocked' ? 'Your browser blocked the sign-in window. Allow pop-ups and try again.' : 'Sign-in did not work. Please try again.');
      });
    });
    document.addEventListener('gtn:change', push);
  }).catch(function () { /* sign-in is optional: without the SDK the button simply stays hidden */ });
})();

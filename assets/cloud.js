// Accounts. Only loaded when config.json has a "firebase" block.
// Offers Google sign-in plus email and password (sign in, create account, reset password),
// and syncs the small object the site keeps in localStorage (pinned tools, recent tools,
// saved entries) to one Firestore document per user.
(function () {
  var cfg = window.FIREBASE_CONFIG;
  if (!cfg || !window.Store) return;
  var SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
  var auth = null, doc = null, user = null, timer, ready, usersDb = null;

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
    var r = { favs: remote.favs || [], recent: remote.recent || [], inputs: remote.inputs || {}, prefs: remote.prefs || null, t: +remote.t || 0 };
    var newer = local.t >= r.t ? local : r, older = newer === local ? r : local, inputs = {}, k;
    for (k in older.inputs) inputs[k] = older.inputs[k];
    for (k in newer.inputs) inputs[k] = newer.inputs[k];
    return { favs: uniq(local.favs.concat(r.favs)), recent: uniq(newer.recent.concat(older.recent)).slice(0, 12), inputs: inputs, prefs: newer.prefs || older.prefs || local.prefs, t: Math.max(local.t, r.t) };
  }
  function push() {
    if (!doc) return;
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (!doc) return;
      var s = Store.read();
      doc.set({ favs: s.favs, recent: s.recent, inputs: s.inputs, prefs: s.prefs, t: s.t }).catch(function () {});
    }, 1500);
  }
  // Plain-language messages for the errors people actually hit.
  function why(e) {
    var c = (e && e.code) || '';
    if (/invalid-credential|wrong-password|user-not-found|invalid-login/.test(c)) return 'The email or password is not right. Check them, or create an account if you are new.';
    if (c === 'auth/email-already-in-use') return 'There is already an account with this email. Use Sign in instead.';
    if (c === 'auth/weak-password') return 'Choose a password with at least 6 characters.';
    if (c === 'auth/invalid-email') return 'That email address does not look right.';
    if (c === 'auth/missing-password') return 'Type your password.';
    if (c === 'auth/too-many-requests') return 'Too many tries. Wait a few minutes and try again.';
    if (c === 'auth/network-request-failed') return 'No internet connection. Check it and try again.';
    if (c === 'auth/popup-blocked') return 'Your browser blocked the Google window. Allow pop-ups for this site and try again.';
    if (c === 'auth/popup-closed-by-user' || c === 'auth/cancelled-popup-request') return '';
    if (c === 'auth/operation-not-allowed') return 'This way of signing in is not switched on yet. Please use Continue with Google.';
    if (c === 'auth/requires-recent-login') return 'For your safety, sign out, sign in again, and then try once more.';
    if (c === 'auth/unauthorized-domain') return 'This website address is not allowed to sign in yet. The site owner needs to add it in Firebase.';
    return 'Something went wrong. Please try again.';
  }

  ready = load('firebase-app-compat.js').then(function () {
    return Promise.all([load('firebase-auth-compat.js'), load('firebase-firestore-compat.js')]);
  }).then(function () {
    firebase.initializeApp(cfg);
    auth = firebase.auth();
    var db = firebase.firestore();
    usersDb = db;
    auth.onAuthStateChanged(function (u) {
      user = u; doc = null; clearTimeout(timer);
      if (window.GTNAuth.onChange) window.GTNAuth.onChange(u);
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
    document.addEventListener('gtn:change', push);
  });
  ready.catch(function () {}); // if the Firebase scripts cannot load, the dialog reports it when used

  // The page's sign-in dialog calls these. Each returns a promise that rejects with a readable message.
  var run = function (fn) { return ready.then(fn).catch(function (e) { var m = why(e); throw new Error(m); }); };
  var before = window.GTNAuth || {}; // the page may already have attached its onChange listener
  window.GTNAuth = {
    onChange: before.onChange,
    on: true,
    user: function () { return user; },
    google: function () { return run(function () { return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); }); },
    signIn: function (email, pass) { return run(function () { return auth.signInWithEmailAndPassword(email, pass); }); },
    signUp: function (name, email, pass) {
      return run(function () {
        return auth.createUserWithEmailAndPassword(email, pass).then(function (r) {
          return name ? r.user.updateProfile({ displayName: name }).then(function () { if (window.GTNAuth.onChange) window.GTNAuth.onChange(r.user); }) : r;
        });
      });
    },
    reset: function (email) { return run(function () { return auth.sendPasswordResetEmail(email); }); },
    signOut: function () { return run(function () { return auth.signOut(); }); },
    updateName: function (name) {
      return run(function () { var u = auth.currentUser; return u.updateProfile({ displayName: name }).then(function () { if (window.GTNAuth.onChange) window.GTNAuth.onChange(u); }); });
    },
    deleteAccount: function () {
      return run(function () {
        var u = auth.currentUser; doc = null;
        return usersDb.collection('users').doc(u.uid).delete().catch(function () {}).then(function () { return u.delete(); });
      });
    }
  };
})();

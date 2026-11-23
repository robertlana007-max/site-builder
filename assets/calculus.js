/* GetToolNest calculus engine: parse, simplify, differentiate (with steps), basic integration (with steps),
   numeric evaluation, pretty printing and a small graph. Used by the derivative and integral calculators.
   Global: Calc. No dependencies (the integral calculator adds nerdamer for harder antiderivatives). */
(function () {
  'use strict';
  function CErr(m) { this.message = m; }
  CErr.prototype = Object.create(Error.prototype);

  // ---------- exact numbers: fractions p/q with safe integers, falling back to floats ----------
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  function N(p, q) {
    if (q === undefined) q = 1;
    if (typeof p !== 'number' || typeof q !== 'number' || !isFinite(p) || !isFinite(q) || q === 0) return { t: 'n', f: p / q };
    if (!Number.isInteger(p) || !Number.isInteger(q)) return F(p / q);
    if (q < 0) { p = -p; q = -q; }
    var g = gcd(p, q) || 1; p /= g; q /= g;
    if (!Number.isSafeInteger(p) || !Number.isSafeInteger(q)) return F(p / q);
    return { t: 'n', p: p, q: q };
  }
  function F(x) { if (Number.isInteger(x) && Number.isSafeInteger(x)) return { t: 'n', p: x, q: 1 }; return { t: 'n', f: x }; }
  function isN(n) { return n && n.t === 'n'; }
  function exact(n) { return n.f === undefined; }
  function val(n) { return n.f !== undefined ? n.f : n.p / n.q; }
  function nAdd(a, b) { return exact(a) && exact(b) ? N(a.p * b.q + b.p * a.q, a.q * b.q) : F(val(a) + val(b)); }
  function nMul(a, b) { return exact(a) && exact(b) ? N(a.p * b.p, a.q * b.q) : F(val(a) * val(b)); }
  function isZero(n) { return isN(n) && val(n) === 0; }
  function isOne(n) { return isN(n) && val(n) === 1; }
  function isInt(n) { return isN(n) && exact(n) && n.q === 1; }
  function neg(n) { return n.f !== undefined ? F(-n.f) : N(-n.p, n.q); }

  // ---------- node constructors ----------
  function S(n) { return { t: 's', n: n }; }
  function add(a) { return { t: '+', a: a }; }
  function mul(a) { return { t: '*', a: a }; }
  function pow(b, e) { return { t: '^', b: b, e: e }; }
  function fn(n, a) { return { t: 'f', n: n, a: a }; }
  function negate(x) { return mul([N(-1), x]); }
  function div(a, b) { return mul([a, pow(b, N(-1))]); }
  function sub(a, b) { return add([a, negate(b)]); }
  var HALF = function () { return N(1, 2); };

  // ---------- parser ----------
  var FUNCS = { sin: 1, cos: 1, tan: 1, sec: 1, csc: 1, cot: 1, asin: 1, acos: 1, atan: 1, asec: 1, acsc: 1, acot: 1, sinh: 1, cosh: 1, tanh: 1, sech: 1, csch: 1, coth: 1, asinh: 1, acosh: 1, atanh: 1, ln: 1, log: 1, log2: 1, log10: 1, exp: 1, sqrt: 1, cbrt: 1, abs: 1, erf: 1, Si: 1, Ci: 1, Ei: 1, sign: 1 };
  var ALIAS = { arcsin: 'asin', arccos: 'acos', arctan: 'atan', arcsec: 'asec', arccsc: 'acsc', arccot: 'acot', arsinh: 'asinh', arcosh: 'acosh', artanh: 'atanh', arcsinh: 'asinh', arccosh: 'acosh', arctanh: 'atanh', cosec: 'csc', ctg: 'cot', tg: 'tan', lg: 'log10' };
  function tokenize(src) {
    var s = String(src).replace(/[−–—]/g, '-').replace(/[×·⋅∙]/g, '*').replace(/÷/g, '/').replace(/π/g, ' pi ').replace(/√/g, ' sqrt ').replace(/∛/g, ' cbrt ')
      .replace(/[²³¹⁰⁴⁵⁶⁷⁸⁹]/g, function (c) { return '^' + '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c); }).replace(/\*\*/g, '^').replace(/∞/g, ' inf ');
    var out = [], i = 0, m;
    while (i < s.length) {
      var c = s[i];
      if (/\s/.test(c)) { i++; continue; }
      if ((m = /^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i.exec(s.slice(i)))) {
        // do not swallow the constant e: 2e means 2*e, 2e3 means 2000
        var txt = m[0];
        if (m[2] === undefined) txt = m[1];
        out.push({ k: 'num', v: txt }); i += txt.length; continue;
      }
      if ((m = /^[A-Za-z_][A-Za-z0-9_]*/.exec(s.slice(i)))) { out.push({ k: 'id', v: m[0] }); i += m[0].length; continue; }
      if ('+-*/^(),|[]{}!'.indexOf(c) >= 0) { out.push({ k: c === '[' || c === '{' ? '(' : c === ']' || c === '}' ? ')' : c }); i++; continue; }
      if (c === "'") throw new CErr('Write the function itself, like x^2 + 3x. You do not need f(x) = or a \' mark.');
      if (c === '=') throw new CErr('Leave out the "=" sign. Type only the expression, for example x^2 + 3x.');
      throw new CErr('"' + c + '" is not understood. Use + - * / ^ and brackets.');
    }
    return out;
  }
  // split a run of letters like "xsin" or "xy" into known names and single letters
  function splitId(id, vars) {
    if (FUNCS[id] || ALIAS[id] || id === 'pi' || id === 'e' || id === 'inf' || id === 'infinity' || vars.indexOf(id) >= 0) return [id];
    if (id.length === 1) return [id];
    if (/\d/.test(id) || id.indexOf('_') >= 0) return [id];
    var names = Object.keys(FUNCS).concat(Object.keys(ALIAS), ['pi']).sort(function (a, b) { return b.length - a.length; });
    var out = [], i = 0;
    while (i < id.length) {
      var hit = null;
      for (var k = 0; k < names.length; k++) if (id.substr(i, names[k].length) === names[k]) { hit = names[k]; break; }
      if (hit) { out.push(hit); i += hit.length; } else { out.push(id[i]); i++; }
    }
    return out;
  }
  function parse(src, opts) {
    opts = opts || {};
    if (!String(src).trim()) throw new CErr('Type a function first, for example x^2 + 3x.');
    var raw = tokenize(src), vars = opts.vars || [], toks = [];
    raw.forEach(function (t) { if (t.k === 'id') splitId(t.v, vars).forEach(function (x) { toks.push({ k: 'id', v: x }); }); else toks.push(t); });
    var i = 0, absDepth = 0;
    function peek() { return toks[i]; }
    function eat(k) { var t = toks[i]; if (t && t.k === k) { i++; return t; } return null; }
    function need(k, msg) { if (!eat(k)) throw new CErr(msg); }
    function expr() {
      var terms = [term()];
      while (peek() && (peek().k === '+' || peek().k === '-')) { var op = toks[i++].k; var t = term(); terms.push(op === '-' ? negate(t) : t); }
      return terms.length === 1 ? terms[0] : add(terms);
    }
    function startsAtom(t) { return t && (t.k === 'num' || t.k === 'id' || t.k === '(' || (t.k === '|' && absDepth === 0)); }
    function term() {
      var f = [unary()];
      for (;;) {
        var t = peek();
        if (!t) break;
        if (t.k === '*') { i++; f.push(unary()); continue; }
        if (t.k === '/') { i++; f.push(pow(unary(), N(-1))); continue; }
        if (startsAtom(t)) { f.push(power()); continue; } // implicit multiplication: 2x, x(x+1), (x+1)(x-1)
        break;
      }
      return f.length === 1 ? f[0] : mul(f);
    }
    function unary() {
      if (eat('-')) return negate(unary());
      if (eat('+')) return unary();
      return power();
    }
    function power() {
      var b = postfix();
      if (eat('^')) { var e = unary(); return pow(b, e); }
      return b;
    }
    function postfix() {
      var a = atom();
      while (peek() && peek().k === '!') { i++; throw new CErr('Factorials (!) are not supported here.'); }
      return a;
    }
    function fnArg() {
      // sin(x), sin x, sin 2x, sin^2 x
      if (peek() && peek().k === '(') { i++; var a = expr(), extra = null; if (eat(',')) extra = expr(); need(')', 'A bracket is not closed.'); return { a: a, extra: extra }; }
      if (!startsAtom(peek())) throw new CErr('A function name needs something after it, like sin(x).');
      var f = [power()];
      while (peek() && startsAtom(peek()) && !(peek().k === 'id' && (FUNCS[peek().v] || ALIAS[peek().v]))) f.push(power());
      return { a: f.length === 1 ? f[0] : mul(f) };
    }
    function atom() {
      var t = toks[i++];
      if (!t) throw new CErr('The expression ends too early. Something is missing at the end.');
      if (t.k === 'num') {
        var v = t.v;
        if (/e/i.test(v)) return F(parseFloat(v));
        if (v.indexOf('.') >= 0) { var dec = v.split('.')[1].length; if (dec <= 12) { var q = Math.pow(10, dec); return N(Math.round(parseFloat(v) * q), q); } return F(parseFloat(v)); }
        var n = parseFloat(v); return Number.isSafeInteger(n) ? N(n) : F(n);
      }
      if (t.k === '(') { var e = expr(); need(')', 'A bracket "(" is not closed.'); return e; }
      if (t.k === '|') { absDepth++; var e2 = expr(); absDepth--; need('|', 'An absolute value bar | is not closed.'); return fn('abs', e2); }
      if (t.k === 'id') {
        var name = ALIAS[t.v] || t.v;
        if (FUNCS[name]) {
          var p = null;
          if (peek() && peek().k === '^') { i++; p = unary(); } // sin^2(x)
          var r = fnArg(), node;
          if (name === 'log' && r.extra) node = div(fn('ln', r.a), fn('ln', r.extra)); // log(x, base)
          else if (r.extra) throw new CErr(t.v + ' takes one value. Remove the comma.');
          else if (name === 'log' && opts.logIsLn) node = fn('ln', r.a);
          else if (name === 'exp') node = pow(S('e'), r.a);
          else if (name === 'sqrt') node = pow(r.a, HALF());
          else if (name === 'cbrt') node = pow(r.a, N(1, 3));
          else if (name === 'log') node = fn('log10', r.a);
          else node = fn(name, r.a);
          if (p) { if (isN(p) && val(p) === -1 && /^(sin|cos|tan|sec|csc|cot)$/.test(name)) throw new CErr('Write the inverse function as asin(x), acos(x) or atan(x), not sin^-1(x).'); node = pow(node, p); }
          return node;
        }
        if (name === 'pi') return S('pi');
        if (name === 'inf' || name === 'infinity') { if (opts.allowInf) return F(Infinity); throw new CErr('Infinity can only be used as a limit of a definite integral.'); }
        if (opts.vars && opts.strictVars && vars.indexOf(name) < 0 && name !== 'e') throw new CErr('"' + t.v + '" is not known here. Use a number, pi or e.');
        return S(name);
      }
      if (t.k === ')') throw new CErr('There is a ")" without a matching "(", or something is missing before it.');
      if (t.k === ',') throw new CErr('A comma is only allowed inside log(x, base).');
      throw new CErr('Something is missing before "' + t.k + '".');
    }
    var res = expr();
    if (i < toks.length) {
      var t = toks[i];
      throw new CErr(t.k === ')' ? 'There is a ")" without a matching "(".' : 'Could not read the expression near "' + (t.v || t.k) + '".');
    }
    return res;
  }

  // ---------- structure helpers ----------
  function key(x) {
    switch (x.t) {
      case 'n': return exact(x) ? (x.q === 1 ? '' + x.p : x.p + '/' + x.q) : '' + x.f;
      case 's': return x.n;
      case '+': return '(' + x.a.map(key).join('+') + ')';
      case '*': return '(' + x.a.map(key).join('*') + ')';
      case '^': return '(' + key(x.b) + '^' + key(x.e) + ')';
      case 'f': return x.n + '(' + key(x.a) + ')';
    }
  }
  function eq(a, b) { return key(a) === key(b); }
  function depends(x, v) {
    switch (x.t) {
      case 'n': return false;
      case 's': return x.n === v;
      case '+': case '*': return x.a.some(function (y) { return depends(y, v); });
      case '^': return depends(x.b, v) || depends(x.e, v);
      case 'f': return depends(x.a, v);
    }
  }
  function symbols(x, out) {
    out = out || {};
    if (x.t === 's' && x.n !== 'pi' && x.n !== 'e') out[x.n] = 1;
    else if (x.a && Array.isArray(x.a)) x.a.forEach(function (y) { symbols(y, out); });
    else if (x.t === '^') { symbols(x.b, out); symbols(x.e, out); }
    else if (x.t === 'f') symbols(x.a, out);
    return out;
  }
  function subst(x, v, r) {
    switch (x.t) {
      case 'n': return x;
      case 's': return x.n === v ? r : x;
      case '+': return add(x.a.map(function (y) { return subst(y, v, r); }));
      case '*': return mul(x.a.map(function (y) { return subst(y, v, r); }));
      case '^': return pow(subst(x.b, v, r), subst(x.e, v, r));
      case 'f': return fn(x.n, subst(x.a, v, r));
    }
  }
  function size(x) { return x.t === 'n' || x.t === 's' ? 1 : x.t === 'f' ? 1 + size(x.a) : x.t === '^' ? 1 + size(x.b) + size(x.e) : x.a.reduce(function (s, y) { return s + size(y); }, 1); }

  // ---------- simplifier ----------
  var PI = S('pi');
  function piMultiple(x) { // returns k if x is k*pi with exact rational k, 0 for 0, else null
    if (isN(x)) return exact(x) && x.p === 0 ? N(0) : null;
    if (x.t === 's' && x.n === 'pi') return N(1);
    if (x.t === '*' && x.a.length === 2 && isN(x.a[0]) && exact(x.a[0]) && x.a[1].t === 's' && x.a[1].n === 'pi') return x.a[0];
    return null;
  }
  var TRIG = { // exact values at multiples of pi/6 and pi/4 (as numerator over 12 of pi)
    sin: { 0: '0', 2: '1/2', 3: 'r2/2', 4: 'r3/2', 6: '1' }, cos: { 0: '1', 2: 'r3/2', 3: 'r2/2', 4: '1/2', 6: '0' }
  };
  function trigExact(name, k) { // k is rational multiple of pi
    if (!exact(k)) return null;
    var t = k.p * 12 / k.q; if (!Number.isInteger(t)) return null;
    t = ((t % 24) + 24) % 24;
    function sinv(m) { // m in [0,24)
      var sgn = 1; if (m >= 12) { m -= 12; sgn = -1; } if (m > 6) m = 12 - m;
      var s = TRIG.sin[m]; return s === undefined ? null : [sgn, s];
    }
    var r;
    if (name === 'sin') r = sinv(t);
    else if (name === 'cos') r = sinv((t + 6) % 24);
    else return null;
    if (!r) return null;
    var s = r[1], node;
    if (s === '0') return N(0);
    if (s === '1') node = N(1);
    else if (s === '1/2') node = N(1, 2);
    else if (s === 'r2/2') node = mul([N(1, 2), pow(N(2), N(1, 2))]);
    else node = mul([N(1, 2), pow(N(3), N(1, 2))]);
    return simplify(r[0] < 0 ? negate(node) : node);
  }
  function nthRootExact(b, e) { // b exact positive rational, e exact rational: return exact result or null
    if (!exact(b) || !exact(e)) return null;
    if (e.q === 1) {
      if (Math.abs(e.p) > 64) return null;
      var r = N(1), base = e.p < 0 ? N(b.q, b.p) : b;
      for (var k = 0; k < Math.abs(e.p); k++) { r = nMul(r, base); if (!exact(r)) return null; }
      return r;
    }
    if (b.p < 0) return null;
    var rp = Math.round(Math.pow(b.p, 1 / e.q)), rq = Math.round(Math.pow(b.q, 1 / e.q));
    if (Math.pow(rp, e.q) !== b.p || Math.pow(rq, e.q) !== b.q) return null;
    return nthRootExact(N(rp, rq), N(e.p));
  }
  function simplify(x) {
    switch (x.t) {
      case 'n': case 's': return x;
      case 'f': return sFn(x.n, simplify(x.a));
      case '^': return sPow(simplify(x.b), simplify(x.e));
      case '*': return sMul(x.a.map(simplify));
      case '+': return sAdd(x.a.map(simplify));
    }
  }
  function sFn(name, a) {
    if (isN(a) && !exact(a)) { var fv = evalNode(fn(name, a), {}); if (isFinite(fv)) return F(fv); }
    var k = piMultiple(a);
    if (k) {
      if (name === 'sin' || name === 'cos') { var r = trigExact(name, k); if (r) return r; }
      if (name === 'tan') { var s1 = trigExact('sin', k), c1 = trigExact('cos', k); if (s1 && c1 && !isZero(c1)) return simplify(div(s1, c1)); }
    }
    if (isN(a) && exact(a)) {
      var v = val(a);
      if (v === 0 && /^(sin|tan|asin|atan|sinh|tanh|asinh|atanh|erf|Si)$/.test(name)) return N(0);
      if (v === 0 && /^(cos|sec|cosh)$/.test(name)) return N(1);
      if (v === 1 && /^(ln|log10|log2|acosh)$/.test(name)) return N(0);
      if (v === 1 && name === 'atan') return mul([N(1, 4), PI]);
      if (v === 1 && name === 'asin') return mul([N(1, 2), PI]);
      if (v === 0 && name === 'acos') return mul([N(1, 2), PI]);
      if (v === 1 && name === 'acos') return N(0);
      if (name === 'abs') return N(Math.abs(a.p), a.q);
      if (name === 'log10' && a.q === 1 && a.p > 0) { var l = Math.round(Math.log10(a.p)); if (Math.pow(10, l) === a.p) return N(l); }
      if (name === 'log2' && a.q === 1 && a.p > 0) { var l2 = Math.round(Math.log2(a.p)); if (Math.pow(2, l2) === a.p) return N(l2); }
    }
    if (a.t === 'f') { // f(f⁻¹(u))
      if ((name === 'sin' && a.n === 'asin') || (name === 'cos' && a.n === 'acos') || (name === 'tan' && a.n === 'atan') || (name === 'sinh' && a.n === 'asinh') || (name === 'cosh' && a.n === 'acosh') || (name === 'tanh' && a.n === 'atanh')) return a.a;
      if ((name === 'cos' && a.n === 'asin') || (name === 'sin' && a.n === 'acos')) return sPow(sAdd([N(1), sMul([N(-1), sPow(a.a, N(2))])]), HALF());
    }
    if (name === 'ln' && a.t === 's' && a.n === 'e') return N(1);
    if (name === 'ln' && a.t === '^' && a.b.t === 's' && a.b.n === 'e') return a.e;
    if (name === 'abs' && a.t === '^' && isInt(a.e) && a.e.p % 2 === 0) return a;
    if (name === 'abs' && a.t === 's' && (a.n === 'pi' || a.n === 'e')) return a;
    return fn(name, a);
  }
  function sPow(b, e) {
    if (isZero(e)) return N(1);
    if (isOne(e)) return b;
    if (isN(b) && isOne(b)) return N(1);
    if (isN(b) && isN(e)) {
      if (!exact(b) || !exact(e)) return F(Math.pow(val(b), val(e)));
      if (b.p === 0) return val(e) > 0 ? N(0) : pow(b, e);
      if (b.p > 0 || e.q === 1) { var r = nthRootExact(b, e); if (r) return r; }
      // pull whole powers out of roots: 8^(1/2) = 2*2^(1/2), (1/2)^(1/2) = 2^(1/2)/2
      if (b.p > 0 && e.q > 1 && Math.abs(e.p) === 1 && b.p < 1e6 && b.q < 1e6) {
        var out = 1, inner = b.p, d = 2;
        while (d * d <= inner) { var dp = Math.pow(d, e.q); while (inner % dp === 0) { inner /= dp; out *= d; } d++; }
        var outq = 1, innq = b.q; d = 2;
        while (d * d <= innq) { var dq = Math.pow(d, e.q); while (innq % dq === 0) { innq /= dq; outq *= d; } d++; }
        if (b.q > 1 && innq > 1) { inner *= Math.pow(innq, e.q - 1); outq *= innq; innq = 1; } // rationalise the denominator
        if (out > 1 || outq > 1 || b.q > 1) {
          var coef = e.p > 0 ? N(out, outq) : N(outq, out);
          return sMul([coef, pow(N(inner), e)]);
        }
      }
      return pow(b, e);
    }
    if (b.t === '^' && isN(e) && (isInt(e) || (isN(b.e) && isInt(b.e) && b.e.p % 2 !== 0) || (b.b.t === 's' && b.b.n === 'e'))) return sPow(b.b, sMul([b.e, e]));
    if (b.t === '^' && b.b.t === 's' && b.b.n === 'e') return sPow(b.b, sMul([b.e, e]));
    if (b.t === '*' && isInt(e)) return sMul(b.a.map(function (y) { return sPow(y, e); }));
    if (b.t === '*' && isN(e) && b.a.length && isN(b.a[0]) && val(b.a[0]) > 0) return sMul([sPow(b.a[0], e), sPow(sMul(b.a.slice(1)), e)]);
    if (b.t === 's' && b.n === 'e' && e.t === 'f' && e.n === 'ln') return e.a;
    if (b.t === 's' && b.n === 'e' && e.t === '*') { // e^(k*ln(u)) = u^k
      var lnF = e.a.filter(function (y) { return y.t === 'f' && y.n === 'ln'; });
      if (lnF.length === 1) { var rest = e.a.filter(function (y) { return y !== lnF[0]; }); if (rest.every(isN)) return sPow(lnF[0].a, sMul(rest)); }
    }
    return pow(b, e);
  }
  function splitCoef(t) { // term -> [coef, rest node or null]
    if (isN(t)) return [t, null];
    if (t.t === '*' && isN(t.a[0])) { var r = t.a.slice(1); return [t.a[0], r.length === 1 ? r[0] : mul(r)]; }
    return [N(1), t];
  }
  function degreeOf(t) { // for ordering terms: highest power of a symbol first, numbers last
    if (isN(t)) return -1e9;
    if (t.t === 's') return 1;
    if (t.t === '^' && isN(t.e) && (t.b.t === 's')) return val(t.e);
    if (t.t === '*') return t.a.reduce(function (s, y) { return s + Math.max(0, degreeOf(y)); }, 0);
    return 0;
  }
  function sAdd(terms) {
    var flat = [];
    terms.forEach(function (t) { if (t.t === '+') flat.push.apply(flat, t.a); else flat.push(t); });
    var c = N(0), groups = {}, order = [];
    flat.forEach(function (t) {
      if (isN(t)) { c = nAdd(c, t); return; }
      var sc = splitCoef(t), k = key(sc[1]);
      if (!groups[k]) { groups[k] = { c: N(0), x: sc[1] }; order.push(k); }
      groups[k].c = nAdd(groups[k].c, sc[0]);
    });
    var out = [];
    order.forEach(function (k) { var g = groups[k]; if (!isZero(g.c)) out.push(isOne(g.c) ? g.x : sMul([g.c, g.x])); });
    out.sort(function (a, b) { return degreeOf(b) - degreeOf(a); });
    if (!isZero(c)) out.push(c);
    if (!out.length) return N(0);
    if (out.length === 1) return out[0];
    return add(out);
  }
  function rank(f) { // ordering of factors in a product
    if (f.t === 's' && (f.n === 'pi' || f.n === 'e')) return -1;
    if (f.t === 's') return 0;
    if (f.t === '^' && f.b.t === 's' && f.b.n !== 'e') return 0;
    if (f.t === '^' && isN(f.b)) return 2;
    if (f.t === '^' && f.b.t === 's' && f.b.n === 'e') return 3;
    if (f.t === 'f' || (f.t === '^' && f.b.t === 'f')) return 4;
    return 5;
  }
  function sMul(fs) {
    var flat = [];
    fs.forEach(function (f) { if (f.t === '*') flat.push.apply(flat, f.a); else flat.push(f); });
    var c = N(1), groups = {}, order = [];
    flat.forEach(function (f) {
      if (isN(f)) { c = nMul(c, f); return; }
      var b = f, e = N(1);
      if (f.t === '^') { b = f.b; e = f.e; }
      var k = key(b);
      if (!groups[k]) { groups[k] = { b: b, e: [] }; order.push(k); }
      groups[k].e.push(e);
    });
    if (isZero(c)) return N(0);
    var out = [];
    order.forEach(function (k) {
      var g = groups[k], p = sPow(g.b, g.e.length === 1 ? g.e[0] : sAdd(g.e));
      if (isN(p)) c = nMul(c, p);
      else if (p.t === '*') p.a.forEach(function (y) { if (isN(y)) c = nMul(c, y); else out.push(y); });
      else out.push(p);
    });
    if (out.length > 1 && out.length !== order.length) return sMul([c].concat(out)); // merging may enable more merging
    out.sort(function (a, b) { return rank(a) - rank(b) || (key(a) < key(b) ? -1 : 1); });
    if (isZero(c)) return N(0);
    if (!out.length) return c;
    if (isOne(c) && out.length === 1) return out[0];
    if (!isOne(c)) {
      // distribute a number over a single sum: 2(x+1) stays factored, but -1*(a+b) becomes -a-b
      if (out.length === 1 && out[0].t === '+' && val(c) === -1) return sAdd(out[0].a.map(function (t) { return sMul([c, t]); }));
      out.unshift(c);
    }
    return mul(out);
  }

  // expand products of sums (used to tidy results)
  function expand(x) {
    x = simplify(x);
    if (x.t === '+') return sAdd(x.a.map(expand));
    if (x.t === '*') {
      var parts = x.a.map(expand), acc = [N(1)];
      parts.forEach(function (p) {
        var ts = p.t === '+' ? p.a : [p], nx = [];
        if (acc.length * ts.length > 400) { acc = acc.map(function (a) { return sMul([a, p]); }); return; }
        acc.forEach(function (a) { ts.forEach(function (t) { nx.push(sMul([a, t])); }); });
        acc = nx;
      });
      return sAdd(acc);
    }
    if (x.t === '^' && isInt(x.e) && x.e.p > 1 && x.e.p <= 6 && x.b.t === '+') {
      var base = expand(x.b), bt = base.t === '+' ? base.a : [base], acc2 = bt;
      for (var k = 1; k < x.e.p; k++) { var nx2 = []; acc2.forEach(function (a) { bt.forEach(function (t) { nx2.push(sMul([a, t])); }); }); acc2 = nx2; if (acc2.length > 2000) return x; }
      return sAdd(acc2);
    }
    return x;
  }

  // ---------- numeric evaluation ----------
  function erf(x) { // Abramowitz-Stegun 7.1.26 is too rough; use series / continued fraction
    var t = Math.abs(x);
    if (t < 2.5) { var s = 0, term = t, n = 0; do { s += term / (2 * n + 1); n++; term *= -t * t / n; } while (Math.abs(term) > 1e-17 * Math.abs(s) && n < 200); return Math.sign(x) * 2 / Math.sqrt(Math.PI) * s; }
    // erfc continued fraction
    var f = 0; for (var k = 60; k >= 1; k--) f = k / 2 / (t + f);
    var erfc = Math.exp(-t * t) / Math.sqrt(Math.PI) / (t + f);
    return Math.sign(x) * (1 - erfc);
  }
  function Si(x) { var s = 0, term = x, n = 0; if (Math.abs(x) > 30) return NaN; do { s += term / (2 * n + 1); n++; term *= -x * x / ((2 * n) * (2 * n + 1)); } while (Math.abs(term) > 1e-17 && n < 300); return s; }
  function Ci(x) { if (x <= 0 || x > 30) return NaN; var s = 0, term = -x * x / 2, n = 1; while (Math.abs(term) > 1e-17 && n < 300) { s += term / (2 * n); term *= -x * x / ((2 * n + 1) * (2 * n + 2)); n++; } return 0.5772156649015329 + Math.log(x) + s; }
  function Ei(x) { if (x === 0 || Math.abs(x) > 40) return NaN; var s = 0, term = x, n = 1; while (Math.abs(term) > 1e-17 * Math.abs(s || 1) && n < 400) { s += term / n; n++; term *= x / n; } return 0.5772156649015329 + Math.log(Math.abs(x)) + s; }
  var FV = {
    sin: Math.sin, cos: Math.cos, tan: Math.tan, sec: function (x) { return 1 / Math.cos(x); }, csc: function (x) { return 1 / Math.sin(x); }, cot: function (x) { return 1 / Math.tan(x); },
    asin: Math.asin, acos: Math.acos, atan: Math.atan, asec: function (x) { return Math.acos(1 / x); }, acsc: function (x) { return Math.asin(1 / x); }, acot: function (x) { return Math.atan(1 / x); },
    sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh, sech: function (x) { return 1 / Math.cosh(x); }, csch: function (x) { return 1 / Math.sinh(x); }, coth: function (x) { return 1 / Math.tanh(x); },
    asinh: Math.asinh, acosh: Math.acosh, atanh: Math.atanh, ln: Math.log, log10: Math.log10, log2: Math.log2, abs: Math.abs, sign: Math.sign, erf: erf, Si: Si, Ci: Ci, Ei: Ei
  };
  function evalNode(x, env) {
    switch (x.t) {
      case 'n': return val(x);
      case 's': if (x.n === 'pi') return Math.PI; if (x.n === 'e') return Math.E; if (x.n in env) return env[x.n]; return NaN;
      case '+': var s = 0; for (var i = 0; i < x.a.length; i++) s += evalNode(x.a[i], env); return s;
      case '*': var p = 1; for (var j = 0; j < x.a.length; j++) p *= evalNode(x.a[j], env); return p;
      case '^':
        var b = evalNode(x.b, env), e = evalNode(x.e, env);
        if (b < 0 && isN(x.e) && exact(x.e) && x.e.q % 2 === 1) { var r = Math.pow(-b, e); return x.e.p % 2 === 0 ? r : -r; } // real odd roots of negatives
        return Math.pow(b, e);
      case 'f': return FV[x.n] ? FV[x.n](evalNode(x.a, env)) : NaN;
    }
  }
  function compile(x, v) { return function (t) { var env = {}; env[v] = t; return evalNode(x, env); }; }

  // ---------- printing ----------
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function numTxt(n) {
    if (!exact(n)) { var f = n.f; if (!isFinite(f)) return f > 0 ? '∞' : f < 0 ? '−∞' : 'undefined'; return String(+f.toPrecision(10)).replace('e+', 'e'); }
    return n.q === 1 ? String(n.p) : n.p + '/' + n.q;
  }
  var FNAME = { log10: 'log', log2: 'log₂', asin: 'arcsin', acos: 'arccos', atan: 'arctan', asec: 'arcsec', acsc: 'arccsc', acot: 'arccot' };
  // split a product into numerator and denominator factor lists (negative powers go to the bottom)
  function fracParts(x) {
    var fs = x.t === '*' ? x.a : [x], c = N(1), top = [], bot = [];
    fs.forEach(function (f) {
      if (isN(f)) { c = nMul(c, f); return; }
      if (f.t === '^' && isN(f.e) && val(f.e) < 0) { var pe = neg(f.e); bot.push(isOne(pe) ? f.b : pow(f.b, pe)); return; }
      top.push(f);
    });
    return { c: c, top: top, bot: bot };
  }
  function H(x, ctx) { // ctx: 'sum' | 'prod' | 'base' | 'exp' | top
    switch (x.t) {
      case 'n':
        if (exact(x) && x.q !== 1 && ctx !== 'exp') return frac(String(Math.abs(x.p)), String(x.q), x.p < 0);
        var t = numTxt(x).replace('-', '−');
        return (val(x) < 0 && (ctx === 'prod' || ctx === 'base' || ctx === 'sumterm')) ? '(' + t + ')' : t;
      case 's': return x.n === 'pi' ? 'π' : '<i>' + esc(x.n) + '</i>';
      case 'f':
        if (x.n === 'abs') return '|' + H(x.a) + '|';
        if (x.a.t === 'f' && x.a.n === 'abs') return '<span class="cx-fn">' + (FNAME[x.n] || x.n) + '</span>|' + H(x.a.a) + '|';
        return '<span class="cx-fn">' + (FNAME[x.n] || x.n) + '</span>(' + H(x.a) + ')';
      case '^':
        if (isN(x.e) && exact(x.e) && x.e.p === 1 && (x.e.q === 2 || x.e.q === 3)) return (x.e.q === 3 ? '∛' : '√') + '<span class="cx-rad">' + H(x.b) + '</span>';
        if (isN(x.e) && val(x.e) < 0) { var fp = fracParts(x); return frac('1', Hprod(fp.bot), false); }
        var bs = H(x.b, 'base');
        if (x.b.t === '+' || x.b.t === '*' || x.b.t === '^' || (isN(x.b) && (val(x.b) < 0 || (exact(x.b) && x.b.q !== 1)))) bs = '(' + H(x.b) + ')';
        if (x.b.t === 'f' && x.b.n !== 'abs' && isN(x.e) && isInt(x.e) && x.e.p > 0) return '<span class="cx-fn">' + (FNAME[x.b.n] || x.b.n) + '</span><sup>' + x.e.p + '</sup>(' + H(x.b.a) + ')';
        return bs + '<sup>' + Hexp(x.e) + '</sup>';
      case '*': return Hmul(x, ctx);
      case '+':
        var s = '';
        x.a.forEach(function (t, i) {
          var neg1 = isNegTerm(t), body = neg1 ? H(negTerm(t), 'sumterm') : H(t, 'sumterm');
          s += i === 0 ? (neg1 ? '−' + body : body) : (neg1 ? ' − ' : ' + ') + body;
        });
        return ctx === 'prod' || ctx === 'base' ? '(' + s + ')' : s;
    }
  }
  function Hexp(e) { // exponents are printed small and inline
    if (isN(e)) return numTxt(e).replace('-', '−');
    return esc(T(e)).replace(/(\d)\*(?=[A-Za-z(])/g, '$1').replace(/\*/g, '·').replace(/-/g, '−').replace(/pi/g, 'π');
  }
  function isNegTerm(t) { return (isN(t) && val(t) < 0) || (t.t === '*' && isN(t.a[0]) && val(t.a[0]) < 0); }
  function negTerm(t) { if (isN(t)) return neg(t); var a = t.a.slice(); a[0] = neg(a[0]); if (isOne(a[0])) a.shift(); return a.length === 1 ? a[0] : mul(a); }
  function frac(top, bot, negative) { return (negative ? '−' : '') + '<span class="cx-frac"><span>' + top + '</span><span>' + bot + '</span></span>'; }
  function Hprod(list, c) {
    var s = '';
    if (c && !isOne(c)) s = numTxt(c);
    list.forEach(function (f, i) {
      var p = H(f, 'prod');
      if (s && (/^[\d(−]/.test(p.replace(/<[^>]+>/g, '')) || (isN(f)))) s += '·';
      else if (s) s += ' ';
      s += p;
    });
    return s || '1';
  }
  function Hmul(x, ctx) {
    var fp = fracParts(x), c = fp.c, negative = val(c) < 0;
    if (negative) c = neg(c);
    var cTop = exact(c) ? N(c.p) : c, cBot = exact(c) ? N(c.q) : N(1);
    var top = Hprod(fp.top, cTop), out;
    if (!fp.top.length) top = numTxt(cTop);
    if (fp.bot.length || !isOne(cBot)) out = frac(top, Hprod(fp.bot, cBot), false);
    else out = top;
    if (negative) out = '−' + out;
    return negative && (ctx === 'prod' || ctx === 'base') ? '(' + out + ')' : out;
  }
  // plain text, for copying and for nerdamer
  function T(x, nerd) {
    switch (x.t) {
      case 'n':
        if (!exact(x)) return String(x.f);
        return x.q === 1 ? String(x.p) : '(' + x.p + '/' + x.q + ')';
      case 's': return x.n;
      case 'f':
        if (nerd && x.n === 'ln') return 'log(' + T(x.a, nerd) + ')';
        if (nerd && x.n === 'log10') return '(log(' + T(x.a, nerd) + ')/log(10))';
        if (nerd && x.n === 'log2') return '(log(' + T(x.a, nerd) + ')/log(2))';
        if (!nerd && x.n === 'log10') return 'log(' + T(x.a) + ')';
        return x.n + '(' + T(x.a, nerd) + ')';
      case '^':
        if (!nerd && isN(x.e) && exact(x.e) && x.e.p === 1 && x.e.q === 2) return 'sqrt(' + T(x.b) + ')';
        if (isN(x.e) && val(x.e) < 0) { var inv = pow(x.b, neg(x.e)), it = T(isOne(neg(x.e)) ? x.b : inv, nerd); return '1/' + (isOne(neg(x.e)) && (x.b.t === '+' || x.b.t === '*') ? '(' + it + ')' : it); }
        var b = T(x.b, nerd); if (x.b.t === '+' || x.b.t === '*' || x.b.t === '^' || (isN(x.b) && val(x.b) < 0)) b = '(' + b + ')';
        var e = T(x.e, nerd); if (x.e.t === '+' || x.e.t === '*' || x.e.t === '^') e = '(' + e + ')';
        return b + '^' + e;
      case '*':
        if (true) {
          var fp = fracParts(x), c = fp.c, cn = exact(c) ? c.p : c.f, cd = exact(c) ? c.q : 1;
          var wrap = function (y) { var s1 = T(y, nerd); return y.t === '+' ? '(' + s1 + ')' : s1; };
          var tops = fp.top.map(wrap), num;
          if (!tops.length) num = String(cn);
          else if (cn === 1) num = tops.join('*');
          else if (cn === -1) num = '-' + tops.join('*');
          else num = cn + '*' + tops.join('*');
          if (!fp.bot.length && cd === 1) return num;
          var bots = (cd !== 1 ? [String(cd)] : []).concat(fp.bot.map(wrap));
          var den = bots.join('*');
          if (bots.length > 1) den = '(' + den + ')';
          if (tops.length === 1 && fp.top[0].t === '+' && cn !== 1) num = (cn === -1 ? '-' : cn + '*') + '(' + T(fp.top[0], nerd) + ')';
          return num + '/' + den;
        }
        return x.a.map(function (y) { var s = T(y, nerd); return y.t === '+' ? '(' + s + ')' : s; }).join('*');
      case '+':
        return x.a.map(function (y, i) { var s = T(y, nerd); return i && s[0] !== '-' ? '+' + s : s; }).join('').replace(/\+\(-/g, '-(').replace(/\+-/g, '-');
    }
  }

  // ---------- derivative with steps ----------
  var DTAB = { // derivative of f(u) with respect to u, as a function of u
    sin: function (u) { return fn('cos', u); }, cos: function (u) { return negate(fn('sin', u)); }, tan: function (u) { return pow(fn('sec', u), N(2)); },
    sec: function (u) { return mul([fn('sec', u), fn('tan', u)]); }, csc: function (u) { return negate(mul([fn('csc', u), fn('cot', u)])); }, cot: function (u) { return negate(pow(fn('csc', u), N(2))); },
    asin: function (u) { return pow(sub(N(1), pow(u, N(2))), N(-1, 2)); }, acos: function (u) { return negate(pow(sub(N(1), pow(u, N(2))), N(-1, 2))); }, atan: function (u) { return pow(add([N(1), pow(u, N(2))]), N(-1)); },
    acot: function (u) { return negate(pow(add([N(1), pow(u, N(2))]), N(-1))); },
    asec: function (u) { return pow(mul([fn('abs', u), pow(sub(pow(u, N(2)), N(1)), HALF())]), N(-1)); },
    acsc: function (u) { return negate(pow(mul([fn('abs', u), pow(sub(pow(u, N(2)), N(1)), HALF())]), N(-1))); },
    sinh: function (u) { return fn('cosh', u); }, cosh: function (u) { return fn('sinh', u); }, tanh: function (u) { return pow(fn('sech', u), N(2)); },
    sech: function (u) { return negate(mul([fn('sech', u), fn('tanh', u)])); }, csch: function (u) { return negate(mul([fn('csch', u), fn('coth', u)])); }, coth: function (u) { return negate(pow(fn('csch', u), N(2))); },
    asinh: function (u) { return pow(add([pow(u, N(2)), N(1)]), N(-1, 2)); }, acosh: function (u) { return pow(sub(pow(u, N(2)), N(1)), N(-1, 2)); }, atanh: function (u) { return pow(sub(N(1), pow(u, N(2))), N(-1)); },
    ln: function (u) { return pow(u, N(-1)); }, log10: function (u) { return pow(mul([u, fn('ln', N(10))]), N(-1)); }, log2: function (u) { return pow(mul([u, fn('ln', N(2))]), N(-1)); },
    abs: function (u) { return div(u, fn('abs', u)); }, erf: function (u) { return mul([N(2), pow(PI, N(-1, 2)), pow(S('e'), negate(pow(u, N(2))))]); },
    Si: function (u) { return div(fn('sin', u), u); }, Ci: function (u) { return div(fn('cos', u), u); }, Ei: function (u) { return div(pow(S('e'), u), u); }, sign: function () { return N(0); }
  };
  var DRULE = {
    sin: 'd/dx sin(u) = cos(u)', cos: 'd/dx cos(u) = −sin(u)', tan: 'd/dx tan(u) = sec²(u)', sec: 'd/dx sec(u) = sec(u) tan(u)', csc: 'd/dx csc(u) = −csc(u) cot(u)', cot: 'd/dx cot(u) = −csc²(u)',
    asin: 'd/dx arcsin(u) = 1/√(1 − u²)', acos: 'd/dx arccos(u) = −1/√(1 − u²)', atan: 'd/dx arctan(u) = 1/(1 + u²)', ln: 'd/dx ln(u) = 1/u', log10: 'd/dx log(u) = 1/(u ln 10)', log2: 'd/dx log₂(u) = 1/(u ln 2)',
    abs: 'd/dx |u| = u/|u|', sinh: 'd/dx sinh(u) = cosh(u)', cosh: 'd/dx cosh(u) = sinh(u)', tanh: 'd/dx tanh(u) = sech²(u)'
  };
  function derive(x, v, steps, depth) {
    depth = depth || 0;
    var rec = null;
    function step(rule, note) {
      if (!steps || steps.length > 80) return;
      rec = { depth: depth, rule: rule, note: note || '', x: x };
      steps.push(rec);
    }
    function done(r) { r = simplify(r); if (rec) rec.r = r; return r; }
    if (!depends(x, v)) { if (depth === 0 || x.t !== 'n') step('Constant rule', 'The derivative of a constant is 0.'); return done(N(0)); }
    if (x.t === 's') { if (depth === 0) step('Power rule', 'd/dx x = 1'); return done(N(1)); }
    if (x.t === '+') {
      step('Sum rule', 'Differentiate each term separately and add the results.');
      return done(add(x.a.map(function (t) { return derive(t, v, steps, depth + 1); })));
    }
    if (x.t === '*') {
      var cs = x.a.filter(function (f) { return !depends(f, v); }), ds = x.a.filter(function (f) { return depends(f, v); });
      if (cs.length) {
        var rest = ds.length === 1 ? ds[0] : mul(ds);
        step('Constant multiple rule', 'Move the constant factor ' + Tn(simplify(mul(cs))) + ' outside the derivative.');
        return done(mul(cs.concat([derive(rest, v, steps, depth + 1)])));
      }
      var fp = fracParts(x);
      if (fp.bot.length && fp.top.length) {
        var u = fp.top.length === 1 ? fp.top[0] : mul(fp.top), w = fp.bot.length === 1 ? fp.bot[0] : mul(fp.bot);
        step('Quotient rule', 'd/dx (u/v) = (u′·v − u·v′) / v², with u = ' + Tn(simplify(u)) + ' and v = ' + Tn(simplify(w)) + '.');
        var du = derive(u, v, steps, depth + 1), dw = derive(w, v, steps, depth + 1);
        return done(div(sub(mul([du, w]), mul([u, dw])), pow(w, N(2))));
      }
      step('Product rule', x.a.length === 2 ? 'd/dx (u·v) = u′·v + u·v′' : 'Differentiate one factor at a time, keeping the others, and add the results.');
      var terms = x.a.map(function (f, i) {
        var d = derive(f, v, steps, depth + 1);
        return mul(x.a.map(function (g, j) { return i === j ? d : g; }));
      });
      return done(add(terms));
    }
    if (x.t === '^') {
      var bd = depends(x.b, v), ed = depends(x.e, v);
      if (bd && !ed) {
        var chain = !(x.b.t === 's' && x.b.n === v);
        var isRoot = isN(x.e) && exact(x.e) && x.e.p === 1 && x.e.q === 2;
        step(chain ? 'Power rule with chain rule' : 'Power rule', (isRoot ? 'A square root is a power of 1/2. ' : '') + 'd/dx uⁿ = n·uⁿ⁻¹' + (chain ? '·u′, with u = ' + Tn(x.b) : '') + ' and n = ' + Tn(x.e) + '.');
        var inner = chain ? derive(x.b, v, steps, depth + 1) : N(1);
        return done(mul([x.e, pow(x.b, add([x.e, N(-1)])), inner]));
      }
      if (!bd && ed) {
        var isE = x.b.t === 's' && x.b.n === 'e', simpleE = x.e.t === 's' && x.e.n === v;
        step(isE ? (simpleE ? 'Exponential rule' : 'Exponential rule with chain rule') : 'Exponential rule' + (simpleE ? '' : ' with chain rule'), isE ? 'd/dx eᵘ = eᵘ·u′' : 'd/dx aᵘ = aᵘ·ln(a)·u′');
        var de = simpleE ? N(1) : derive(x.e, v, steps, depth + 1);
        return done(isE ? mul([x, de]) : mul([x, fn('ln', x.b), de]));
      }
      step('Logarithmic differentiation', 'For u^v with x in both: d/dx u^v = u^v·(v′·ln(u) + v·u′/u).');
      var db = derive(x.b, v, steps, depth + 1), dex = derive(x.e, v, steps, depth + 1);
      return done(mul([x, add([mul([dex, fn('ln', x.b)]), mul([x.e, db, pow(x.b, N(-1))])])]));
    }
    if (x.t === 'f') {
      if (!DTAB[x.n]) throw new CErr('The derivative of ' + x.n + ' is not available.');
      var simpleArg = x.a.t === 's' && x.a.n === v;
      step(simpleArg ? 'Standard derivative' : 'Chain rule', (DRULE[x.n] ? DRULE[x.n] + (simpleArg ? '' : '·u′') : 'Use the derivative of ' + x.n) + (simpleArg ? '' : ', with u = ' + Tn(x.a)) + '.');
      var da = simpleArg ? N(1) : derive(x.a, v, steps, depth + 1);
      return done(mul([DTAB[x.n](x.a), da]));
    }
  }
  function Tn(x) { return T(simplify(x)).replace(/\*/g, '·').replace(/pi/g, 'π'); }

  // choose the tidier of the plain and expanded forms
  function tidy(x) {
    var a = simplify(x), best = a;
    function consider(y) { try { y = simplify(y); if (size(y) < size(best)) best = y; } catch (e) {} }
    try { consider(expand(a)); } catch (e) {}
    var fp = fracParts(a);
    if (fp.bot.length) {
      try {
        var top = expand(mul([fp.c].concat(fp.top))), bot = expand(fp.bot.length === 1 ? fp.bot[0] : mul(fp.bot));
        consider(div(top, bot));
        if (top.t === '+' || bot.t === '+') consider(div(top, fp.bot.length === 1 ? fp.bot[0] : mul(fp.bot)));
      } catch (e) {}
    }
    if (a.t === '+') consider(sAdd(a.a.map(function (t) { return t === a ? t : tidy(t); })));
    return best;
  }

  // ---------- basic integration with steps ----------
  function linearCoef(u, v) { // if u = a*v + b with a constant, return a, else null
    if (!depends(u, v)) return null;
    var d = simplify(derive(u, v));
    return depends(d, v) || isZero(d) ? null : d;
  }
  var ITAB = { // antiderivative of f(u) with respect to u
    sin: function (u) { return negate(fn('cos', u)); }, cos: function (u) { return fn('sin', u); },
    tan: function (u) { return negate(fn('ln', fn('abs', fn('cos', u)))); }, cot: function (u) { return fn('ln', fn('abs', fn('sin', u))); },
    sec: function (u) { return fn('ln', fn('abs', add([fn('sec', u), fn('tan', u)]))); }, csc: function (u) { return negate(fn('ln', fn('abs', add([fn('csc', u), fn('cot', u)])))); },
    sinh: function (u) { return fn('cosh', u); }, cosh: function (u) { return fn('sinh', u); }, tanh: function (u) { return fn('ln', fn('cosh', u)); },
    ln: function (u) { return sub(mul([u, fn('ln', u)]), u); }, log10: function (u) { return div(sub(mul([u, fn('ln', u)]), u), fn('ln', N(10))); },
    atan: function (u) { return sub(mul([u, fn('atan', u)]), mul([HALF(), fn('ln', add([N(1), pow(u, N(2))]))])); },
    asin: function (u) { return add([mul([u, fn('asin', u)]), pow(sub(N(1), pow(u, N(2))), HALF())]); },
    acos: function (u) { return sub(mul([u, fn('acos', u)]), pow(sub(N(1), pow(u, N(2))), HALF())); }
  };
  var IRULE = {
    sin: '∫ sin(u) du = −cos(u)', cos: '∫ cos(u) du = sin(u)', tan: '∫ tan(u) du = −ln|cos(u)|', cot: '∫ cot(u) du = ln|sin(u)|', sec: '∫ sec(u) du = ln|sec(u) + tan(u)|', csc: '∫ csc(u) du = −ln|csc(u) + cot(u)|',
    sinh: '∫ sinh(u) du = cosh(u)', cosh: '∫ cosh(u) du = sinh(u)', tanh: '∫ tanh(u) du = ln(cosh(u))', ln: '∫ ln(u) du = u·ln(u) − u (integration by parts)', log10: '∫ log(u) du = (u·ln(u) − u)/ln(10)',
    atan: '∫ arctan(u) du = u·arctan(u) − ½ln(1 + u²) (by parts)', asin: '∫ arcsin(u) du = u·arcsin(u) + √(1 − u²) (by parts)', acos: '∫ arccos(u) du = u·arccos(u) − √(1 − u²) (by parts)'
  };
  function integ(x, v, steps, depth) {
    depth = depth || 0;
    var rec = null;
    function step(rule, note) { if (!steps || steps.length > 80) return; rec = { depth: depth, rule: rule, note: note || '', x: x }; steps.push(rec); }
    function done(r) { if (r === null) { if (rec) rec.fail = true; return null; } r = simplify(r); if (rec) rec.r = r; return r; }
    var X = S(v);
    if (!depends(x, v)) { step('Constant rule', '∫ c dx = c·x'); return done(mul([x, X])); }
    if (x.t === 's') { step('Power rule', '∫ x dx = x²/2'); return done(mul([HALF(), pow(X, N(2))])); }
    if (x.t === '+') {
      step('Sum rule', 'Integrate each term separately and add the results.');
      var parts = [];
      for (var i = 0; i < x.a.length; i++) { var p = integ(x.a[i], v, steps, depth + 1); if (p === null) return done(null); parts.push(p); }
      return done(add(parts));
    }
    if (x.t === '*') {
      var cs = x.a.filter(function (f) { return !depends(f, v); }), ds = x.a.filter(function (f) { return depends(f, v); });
      if (cs.length) {
        var rest = ds.length === 1 ? ds[0] : mul(ds);
        step('Constant multiple rule', 'Move the constant ' + Tn(simplify(mul(cs))) + ' outside the integral.');
        var r = integ(rest, v, steps, depth + 1);
        return done(r === null ? null : mul(cs.concat([r])));
      }
      if (ds.length === 2) { // sec(u)tan(u), csc(u)cot(u)
        var a = ds[0], b = ds[1];
        if (a.t === 'f' && b.t === 'f' && eq(a.a, b.a)) {
          var pair = [a.n, b.n].sort().join(','), lc = linearCoef(a.a, v);
          if (lc && (pair === 'sec,tan' || pair === 'cot,csc')) {
            step('Standard integral', pair === 'sec,tan' ? '∫ sec(u)·tan(u) du = sec(u)' : '∫ csc(u)·cot(u) du = −csc(u)');
            return done(div(pair === 'sec,tan' ? fn('sec', a.a) : negate(fn('csc', a.a)), lc));
          }
        }
      }
      return null;
    }
    if (x.t === '^') {
      var bd = depends(x.b, v), ed = depends(x.e, v);
      if (bd && !ed) {
        var a1 = linearCoef(x.b, v);
        if (x.b.t === 'f' && isInt(x.e) && x.e.p === 2) { // sec^2, csc^2
          var la = linearCoef(x.b.a, v);
          if (la && x.b.n === 'sec') { step('Standard integral', '∫ sec²(u) du = tan(u)'); return done(div(fn('tan', x.b.a), la)); }
          if (la && x.b.n === 'csc') { step('Standard integral', '∫ csc²(u) du = −cot(u)'); return done(div(negate(fn('cot', x.b.a)), la)); }
        }
        if (a1) {
          var simple = x.b.t === 's';
          if (isN(x.e) && val(x.e) === -1) {
            step(simple ? 'Reciprocal rule' : 'Reciprocal rule with substitution', '∫ 1/u du = ln|u|' + (simple ? '' : ', with u = ' + Tn(x.b) + ' and du = ' + Tn(a1) + ' dx'));
            return done(div(fn('ln', fn('abs', x.b)), a1));
          }
          step(simple ? 'Power rule' : 'Power rule with substitution', '∫ uⁿ du = uⁿ⁺¹/(n+1), with n = ' + Tn(x.e) + (simple ? '' : ', u = ' + Tn(x.b) + ' and du = ' + Tn(a1) + ' dx'));
          var n1 = simplify(add([x.e, N(1)]));
          return done(div(pow(x.b, n1), mul([n1, a1])));
        }
        // 1/(1+x^2), 1/sqrt(1-x^2)
        if (x.b.t === '+' && x.b.a.length === 2 && isN(x.e)) {
          var k = key(simplify(x.b)), xs = key(simplify(pow(X, N(2))));
          if (val(x.e) === -1 && k === key(simplify(add([pow(X, N(2)), N(1)])))) { step('Standard integral', '∫ 1/(1 + x²) dx = arctan(x)'); return done(fn('atan', X)); }
          if (val(x.e) === -0.5 && k === key(simplify(add([negate(pow(X, N(2))), N(1)])))) { step('Standard integral', '∫ 1/√(1 − x²) dx = arcsin(x)'); return done(fn('asin', X)); }
          void xs;
        }
        return null;
      }
      if (!bd && ed) {
        var a2 = linearCoef(x.e, v);
        if (!a2) return null;
        var isE = x.b.t === 's' && x.b.n === 'e', simp = x.e.t === 's';
        step(isE ? 'Exponential rule' : 'Exponential rule (base ' + Tn(x.b) + ')', (isE ? '∫ eᵘ du = eᵘ' : '∫ aᵘ du = aᵘ/ln(a)') + (simp ? '' : ', with u = ' + Tn(x.e) + ' and du = ' + Tn(a2) + ' dx'));
        return done(isE ? div(x, a2) : div(x, mul([fn('ln', x.b), a2])));
      }
      return null;
    }
    if (x.t === 'f' && ITAB[x.n]) {
      var a3 = linearCoef(x.a, v);
      if (!a3) return null;
      var simple2 = x.a.t === 's';
      step(simple2 ? 'Standard integral' : 'Standard integral with substitution', IRULE[x.n] + (simple2 ? '' : ', with u = ' + Tn(x.a) + ' and du = ' + Tn(a3) + ' dx'));
      return done(div(ITAB[x.n](x.a), a3));
    }
    return null;
  }

  // ---------- numeric integration: adaptive Gauss-Kronrod 7-15 ----------
  var XGK = [0.991455371120812639206854697526329, 0.949107912342758524526189684047851, 0.864864423359769072789712788640926, 0.741531185599394439863864773280788, 0.586087235467691130294144845693013, 0.405845151377397166906606412076961, 0.207784955007898467600689403773245, 0];
  var WGK = [0.022935322010529224963732008058970, 0.063092092629978553290700663189204, 0.104790010322250183839876322541518, 0.140653259715525918745189590510238, 0.169004726639267902826583426598550, 0.190350578064785409913256402421014, 0.204432940075298892414161999234649, 0.209482141084727828012999174891714];
  var WG = [0.129484966168869693270611432679082, 0.279705391489276667901467771423780, 0.381830050505118944950369775488975, 0.417959183673469387755102040816327];
  function gk(f, a, b) {
    var c = (a + b) / 2, h = (b - a) / 2, fc = f(c), rk = fc * WGK[7], rg = fc * WG[3];
    for (var j = 0; j < 7; j++) {
      var dx = h * XGK[j], f1 = f(c - dx), f2 = f(c + dx);
      rk += WGK[j] * (f1 + f2);
      if (j % 2 === 1) rg += WG[(j - 1) / 2] * (f1 + f2);
    }
    return { v: rk * h, e: Math.abs((rk - rg) * h) };
  }
  function integrateNum(f, a, b) {
    if (a === b) return { value: 0, error: 0, ok: true };
    var sign = 1;
    if (a > b) { var t = a; a = b; b = t; sign = -1; }
    var g = f;
    if (!isFinite(a) && !isFinite(b)) { g = function (t) { var x = t / (1 - t * t); return f(x) * (1 + t * t) / Math.pow(1 - t * t, 2); }; a = -1; b = 1; }
    else if (!isFinite(b)) { var a0 = a; g = function (t) { return f(a0 + t / (1 - t)) / Math.pow(1 - t, 2); }; a = 0; b = 1; }
    else if (!isFinite(a)) { var b0 = b; g = function (t) { return f(b0 - (1 - t) / t) / (t * t); }; a = 0; b = 1; }
    var segs = [{ a: a, b: b, r: gk(g, a, b) }], evals = 15, total, err;
    for (var it = 0; it < 2000; it++) {
      total = 0; err = 0;
      var worst = 0;
      for (var i = 0; i < segs.length; i++) { total += segs[i].r.v; err += segs[i].r.e; if (segs[i].r.e > segs[worst].r.e) worst = i; }
      if (!isFinite(total)) break;
      if (err <= Math.max(1e-11, 1e-10 * Math.abs(total))) break;
      var s = segs[worst], m = (s.a + s.b) / 2;
      if (m === s.a || m === s.b) break;
      segs.splice(worst, 1, { a: s.a, b: m, r: gk(g, s.a, m) }, { a: m, b: s.b, r: gk(g, m, s.b) });
      evals += 30;
    }
    var ok = isFinite(total) && err <= Math.max(1e-6, 1e-6 * Math.abs(total));
    return { value: sign * total, error: err, ok: ok };
  }

  // ---------- graph ----------
  function plot(canvas, o) {
    // o: { fns: [{f, color, width, dash}], xmin, xmax, shade: {f, a, b}, points: [{x, y, color}], line: {m, x0, y0, color} }
    var dpr = window.devicePixelRatio || 1, W = canvas.clientWidth || 600, Hh = canvas.clientHeight || 320;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(Hh * dpr);
    var c = canvas.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0);
    var cs = getComputedStyle(document.documentElement);
    var ink = cs.getPropertyValue('--ink').trim() || '#111', muted = cs.getPropertyValue('--muted').trim() || '#666', line = cs.getPropertyValue('--line').trim() || '#ddd', bg = cs.getPropertyValue('--bg').trim() || '#fff';
    c.fillStyle = bg; c.fillRect(0, 0, W, Hh);
    var xmin = o.xmin, xmax = o.xmax, n = Math.max(200, Math.round(W * 1.5)), ys = [];
    o.fns.forEach(function (F1) { for (var i = 0; i <= n; i++) { var y = F1.f(xmin + (xmax - xmin) * i / n); if (isFinite(y)) ys.push(y); } });
    ys.sort(function (a, b) { return a - b; });
    var ymin = -5, ymax = 5;
    if (ys.length) { ymin = ys[Math.floor(ys.length * 0.03)]; ymax = ys[Math.min(ys.length - 1, Math.floor(ys.length * 0.97))]; }
    if (o.points) o.points.forEach(function (p) { if (isFinite(p.y)) { ymin = Math.min(ymin, p.y); ymax = Math.max(ymax, p.y); } });
    if (ymin > 0) ymin = Math.min(ymin, 0) * 0 + (ymin > (ymax - ymin) ? ymin : 0);
    if (ymax < 0) ymax = (-ymax > (ymax - ymin) ? ymax : 0);
    var pad = (ymax - ymin) * 0.12 || 1; ymin -= pad; ymax += pad;
    function X(x) { return (x - xmin) / (xmax - xmin) * W; }
    function Y(y) { return Hh - (y - ymin) / (ymax - ymin) * Hh; }
    function nice(span) { var s = Math.pow(10, Math.floor(Math.log10(span / 6))), m = span / 6 / s; return s * (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10); }
    c.lineWidth = 1; c.strokeStyle = line; c.fillStyle = muted; c.font = '11px system-ui, sans-serif';
    var sx = nice(xmax - xmin), sy = nice(ymax - ymin);
    for (var gx = Math.ceil(xmin / sx) * sx; gx <= xmax; gx += sx) { c.beginPath(); c.moveTo(X(gx), 0); c.lineTo(X(gx), Hh); c.stroke(); if (Math.abs(gx) > sx / 2) c.fillText(+gx.toPrecision(6), X(gx) + 3, Math.min(Hh - 4, Math.max(12, Y(0) + 13))); }
    for (var gy = Math.ceil(ymin / sy) * sy; gy <= ymax; gy += sy) { c.beginPath(); c.moveTo(0, Y(gy)); c.lineTo(W, Y(gy)); c.stroke(); if (Math.abs(gy) > sy / 2) c.fillText(+gy.toPrecision(6), Math.min(W - 40, Math.max(3, X(0) + 4)), Y(gy) - 3); }
    c.strokeStyle = muted; c.lineWidth = 1.3;
    if (ymin < 0 && ymax > 0) { c.beginPath(); c.moveTo(0, Y(0)); c.lineTo(W, Y(0)); c.stroke(); }
    if (xmin < 0 && xmax > 0) { c.beginPath(); c.moveTo(X(0), 0); c.lineTo(X(0), Hh); c.stroke(); }
    if (o.shade) {
      var a = Math.max(xmin, o.shade.a), b = Math.min(xmax, o.shade.b);
      if (b > a) {
        c.fillStyle = o.shade.color || 'rgba(37,99,235,.22)';
        var steps = 300;
        c.beginPath(); c.moveTo(X(a), Y(0));
        for (var k = 0; k <= steps; k++) { var xx = a + (b - a) * k / steps, yy = o.shade.f(xx); if (!isFinite(yy)) yy = 0; yy = Math.max(ymin - 10 * (ymax - ymin), Math.min(ymax + 10 * (ymax - ymin), yy)); c.lineTo(X(xx), Y(yy)); }
        c.lineTo(X(b), Y(0)); c.closePath(); c.fill();
      }
    }
    if (o.line) {
      c.strokeStyle = o.line.color; c.lineWidth = 1.5; c.setLineDash([6, 4]); c.beginPath();
      c.moveTo(0, Y(o.line.y0 + o.line.m * (xmin - o.line.x0))); c.lineTo(W, Y(o.line.y0 + o.line.m * (xmax - o.line.x0))); c.stroke(); c.setLineDash([]);
    }
    o.fns.forEach(function (F1) {
      c.strokeStyle = F1.color; c.lineWidth = F1.width || 2.2; c.setLineDash(F1.dash || []);
      c.beginPath(); var pen = false, lastY = null;
      for (var i = 0; i <= n; i++) {
        var x = xmin + (xmax - xmin) * i / n, y = F1.f(x);
        if (!isFinite(y)) { pen = false; continue; }
        var py = Y(y);
        if (pen && lastY !== null && Math.abs(py - lastY) > Hh * 1.5) pen = false; // jump: do not join across an asymptote
        py = Math.max(-Hh, Math.min(2 * Hh, py));
        if (pen) c.lineTo(X(x), py); else c.moveTo(X(x), py);
        pen = true; lastY = Y(y);
      }
      c.stroke(); c.setLineDash([]);
    });
    if (o.points) o.points.forEach(function (p) { if (!isFinite(p.y)) return; c.fillStyle = p.color || ink; c.beginPath(); c.arc(X(p.x), Y(p.y), 4.5, 0, 7); c.fill(); });
  }

  // one shared stylesheet for the pretty maths
  if (!document.getElementById('cx-style')) {
    var st = document.createElement('style'); st.id = 'cx-style';
    st.textContent = '.cx{font-family:"Cambria Math","STIX Two Math","Latin Modern Math",Cambria,"Times New Roman",serif;font-size:1.15em;line-height:2.2;overflow-wrap:anywhere}' +
      '.cx i{font-style:italic}.cx sup{font-size:.72em;line-height:0;vertical-align:.55em}.cx .cx-fn{font-style:normal}' +
      '.cx-frac{display:inline-flex;flex-direction:column;vertical-align:middle;text-align:center;margin:0 .15em;line-height:1.25}.cx-frac>span{padding:0 .2em}.cx-frac>span:first-child{border-bottom:1px solid currentColor}' +
      '.cx-rad{border-top:1px solid currentColor;padding:0 .1em;margin-left:.05em}';
    document.head.appendChild(st);
  }

  window.Calc = {
    Err: CErr, parse: parse, simplify: simplify, expand: expand, tidy: tidy, derive: derive, integ: integ, depends: depends, symbols: symbols, subst: subst,
    evaluate: evalNode, compile: compile, html: function (x) { return H(x); }, text: function (x) { return T(x); }, nerd: function (x) { return T(x, true); },
    integrateNum: integrateNum, plot: plot, size: size, key: key, N: N, S: S, fn: fn, mul: mul, add: add, pow: pow, sub: sub, div: div, isN: isN, val: val
  };
})();

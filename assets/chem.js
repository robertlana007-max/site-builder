/* GetToolNest chemistry helpers: element data, formula parsing (brackets, hydrates, charges) and equation balancing.
   Used by the molar mass calculator and the chemical equation balancer. Global: Chem. */
(function () {
  'use strict';
  function ChemErr(m) { this.message = m; }
  ChemErr.prototype = Object.create(Error.prototype);
  // Symbol|Name|standard atomic weight (IUPAC abridged; [n] = mass number of the most stable isotope)
  var RAW = 'H|Hydrogen|1.008,He|Helium|4.0026,Li|Lithium|6.94,Be|Beryllium|9.0122,B|Boron|10.81,C|Carbon|12.011,N|Nitrogen|14.007,O|Oxygen|15.999,F|Fluorine|18.998,Ne|Neon|20.180,' +
    'Na|Sodium|22.990,Mg|Magnesium|24.305,Al|Aluminium|26.982,Si|Silicon|28.085,P|Phosphorus|30.974,S|Sulfur|32.06,Cl|Chlorine|35.45,Ar|Argon|39.95,' +
    'K|Potassium|39.098,Ca|Calcium|40.078,Sc|Scandium|44.956,Ti|Titanium|47.867,V|Vanadium|50.942,Cr|Chromium|51.996,Mn|Manganese|54.938,Fe|Iron|55.845,Co|Cobalt|58.933,Ni|Nickel|58.693,Cu|Copper|63.546,Zn|Zinc|65.38,Ga|Gallium|69.723,Ge|Germanium|72.630,As|Arsenic|74.922,Se|Selenium|78.971,Br|Bromine|79.904,Kr|Krypton|83.798,' +
    'Rb|Rubidium|85.468,Sr|Strontium|87.62,Y|Yttrium|88.906,Zr|Zirconium|91.224,Nb|Niobium|92.906,Mo|Molybdenum|95.95,Tc|Technetium|[98],Ru|Ruthenium|101.07,Rh|Rhodium|102.91,Pd|Palladium|106.42,Ag|Silver|107.87,Cd|Cadmium|112.41,In|Indium|114.82,Sn|Tin|118.71,Sb|Antimony|121.76,Te|Tellurium|127.60,I|Iodine|126.90,Xe|Xenon|131.29,' +
    'Cs|Caesium|132.91,Ba|Barium|137.33,La|Lanthanum|138.91,Ce|Cerium|140.12,Pr|Praseodymium|140.91,Nd|Neodymium|144.24,Pm|Promethium|[145],Sm|Samarium|150.36,Eu|Europium|151.96,Gd|Gadolinium|157.25,Tb|Terbium|158.93,Dy|Dysprosium|162.50,Ho|Holmium|164.93,Er|Erbium|167.26,Tm|Thulium|168.93,Yb|Ytterbium|173.05,Lu|Lutetium|174.97,' +
    'Hf|Hafnium|178.49,Ta|Tantalum|180.95,W|Tungsten|183.84,Re|Rhenium|186.21,Os|Osmium|190.23,Ir|Iridium|192.22,Pt|Platinum|195.08,Au|Gold|196.97,Hg|Mercury|200.59,Tl|Thallium|204.38,Pb|Lead|207.2,Bi|Bismuth|208.98,Po|Polonium|[209],At|Astatine|[210],Rn|Radon|[222],' +
    'Fr|Francium|[223],Ra|Radium|[226],Ac|Actinium|[227],Th|Thorium|232.04,Pa|Protactinium|231.04,U|Uranium|238.03,Np|Neptunium|[237],Pu|Plutonium|[244],Am|Americium|[243],Cm|Curium|[247],Bk|Berkelium|[247],Cf|Californium|[251],Es|Einsteinium|[252],Fm|Fermium|[257],Md|Mendelevium|[258],No|Nobelium|[259],Lr|Lawrencium|[266],' +
    'Rf|Rutherfordium|[267],Db|Dubnium|[268],Sg|Seaborgium|[269],Bh|Bohrium|[270],Hs|Hassium|[269],Mt|Meitnerium|[278],Ds|Darmstadtium|[281],Rg|Roentgenium|[282],Cn|Copernicium|[285],Nh|Nihonium|[286],Fl|Flerovium|[289],Mc|Moscovium|[290],Lv|Livermorium|[293],Ts|Tennessine|[294],Og|Oganesson|[294]';
  var EL = {}, ORDER = [];
  RAW.split(',').forEach(function (r, i) { var f = r.split('|'); EL[f[0]] = { sym: f[0], name: f[1], z: i + 1, massTxt: f[2], mass: parseFloat(f[2].replace(/[\[\]]/g, '')), stable: f[2][0] !== '[' }; ORDER.push(f[0]); });

  var SUB = '₀₁₂₃₄₅₆₇₈₉', SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  function normal(s) {
    return String(s).replace(/[₀-₉]/g, function (c) { return String(SUB.indexOf(c)); })
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+[⁺⁻]|[⁺⁻]/g, function (m) { return '^' + m.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, function (c) { return String(SUP.indexOf(c)); }).replace('⁺', '+').replace('⁻', '-'); })
      .replace(/[•∙⋅·*]/g, '·').replace(/[−–]/g, '-');
  }
  // Split off a charge written as ^2-, ^{2-}, {2-}, ^-, or a bare trailing + / - (NH4+, OH-, Cl-)
  function splitCharge(s) {
    var m = /(?:\^\{?|\{)(\d*)([+-])\}?$/.exec(s); // ^2-  ^{2-}  {2-}  ^-
    if (m) return { body: s.slice(0, m.index), charge: (m[2] === '-' ? -1 : 1) * (m[1] ? parseInt(m[1], 10) : 1) };
    m = /\^\{?([+-])(\d+)\}?$/.exec(s); // ^+2
    if (m) return { body: s.slice(0, m.index), charge: (m[1] === '-' ? -1 : 1) * parseInt(m[2], 10) };
    // a single element followed by a number and a sign is a monatomic ion: Fe3+ means Fe with charge 3+, S2- means sulfide
    m = /^([A-Z][a-z]?)(\d+)([+-])$/.exec(s);
    if (m && EL[m[1]]) return { body: m[1], charge: (m[3] === '-' ? -1 : 1) * parseInt(m[2], 10), guessed: true };
    m = /([+-]+)$/.exec(s);
    if (m && m.index > 0) { if (!/^(\++|-+)$/.test(m[1])) throw new ChemErr('The charge on "' + s + '" mixes + and −.'); return { body: s.slice(0, m.index), charge: (m[1][0] === '-' ? -1 : 1) * m[1].length }; }
    return { body: s, charge: 0 };
  }
  function parseFormula(src, opts) {
    opts = opts || {};
    var s = normal(src).replace(/\s+/g, '');
    s = s.replace(/\((s|l|g|aq|cr|ppt)\)$/i, '');
    if (!s) throw new ChemErr('Type a chemical formula, like H2O.');
    var ch = splitCharge(s), body = ch.body, charge = ch.charge;
    if (/^e$/.test(body)) { if (!opts.allowElectron) throw new ChemErr('"e" (an electron) can only be used in an equation.'); return { counts: {}, charge: charge || -1, electron: true }; }
    if (!body) throw new ChemErr('Something is missing in "' + src + '".');
    var i = 0;
    function num() { var m = /^\d+/.exec(body.slice(i)); if (!m) return 1; i += m[0].length; var n = parseInt(m[0], 10); if (n === 0) throw new ChemErr('A count of 0 is not allowed in "' + src + '".'); return n; }
    function addTo(a, b, k) { Object.keys(b).forEach(function (x) { a[x] = (a[x] || 0) + b[x] * k; }); return a; }
    function seq(close) {
      var out = {}, any = false;
      while (i < body.length) {
        var c = body[i];
        if (c === close) break;
        if (c === '(' || c === '[' || c === '{') {
          var want = { '(': ')', '[': ']', '{': '}' }[c]; i++;
          var inner = seq(want);
          if (body[i] !== want) throw new ChemErr('A "' + c + '" is not closed in "' + src + '".');
          i++; addTo(out, inner, num()); any = true; continue;
        }
        if (/[A-Z]/.test(c)) {
          var two = body.substr(i, 2), sym = /^[A-Z][a-z]$/.test(two) && EL[two] ? two : c;
          if (!EL[sym]) throw new ChemErr('"' + (/^[A-Z][a-z]$/.test(two) ? two : c) + '" is not an element symbol. Symbols start with a capital letter, like Co (cobalt) versus CO (carbon + oxygen).');
          i += sym.length; out[sym] = (out[sym] || 0) + num(); any = true; continue;
        }
        if (/[a-z]/.test(c)) throw new ChemErr('"' + c + '" should be a capital letter. Element symbols start with a capital, like Na or Cl.');
        if (c === ')' || c === ']' || c === '}') throw new ChemErr('There is a "' + c + '" without a matching opening bracket.');
        if (c === '·' || c === '.') break;
        throw new ChemErr('"' + c + '" is not allowed in a formula.');
      }
      if (!any) throw new ChemErr('Something is missing in "' + src + '".');
      return out;
    }
    var total = {}, lead = null;
    while (i < body.length) {
      var start = i, k = num(); // a leading number multiplies that part: CuSO4·5H2O
      if (start === 0 && i > 0) lead = k;
      addTo(total, seq(null), start === 0 && opts.ignoreLead ? 1 : k);
      if (i < body.length) {
        if (body[i] === '·' || body[i] === '.') { i++; if (i >= body.length) throw new ChemErr('Something should follow the "·" in "' + src + '".'); }
        else throw new ChemErr('There is a ")" without a matching "(" in "' + src + '".');
      }
    }
    return { counts: total, charge: charge, lead: lead, guessed: !!ch.guessed };
  }
  function molarMass(counts) { var t = 0; Object.keys(counts).forEach(function (x) { t += EL[x].mass * counts[x]; }); return t; }

  // pretty HTML: subscripts for counts, superscript charge
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function pretty(src) {
    var s = normal(src).replace(/\s+/g, ''), state = '';
    var st = /\((s|l|g|aq|cr|ppt)\)$/i.exec(s); if (st) { state = st[0]; s = s.slice(0, st.index); }
    var ch; try { ch = splitCharge(s); } catch (e) { ch = { body: s, charge: 0 }; }
    var body = esc(ch.body).replace(/([A-Za-z)\]}])(\d+)/g, '$1<sub>$2</sub>');
    var q = ch.charge ? '<sup>' + (Math.abs(ch.charge) > 1 ? Math.abs(ch.charge) : '') + (ch.charge > 0 ? '+' : '−') + '</sup>' : '';
    return body + q + (state ? '<small>' + esc(state) + '</small>' : '');
  }

  // ---------- balancing: exact null space with BigInt fractions ----------
  function bgcd(a, b) { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) { var t = a % b; a = b; b = t; } return a; }
  function frac(n, d) { if (d < 0n) { n = -n; d = -d; } var g = bgcd(n, d) || 1n; return [n / g, d / g]; }
  function fsub(a, b) { return frac(a[0] * b[1] - b[0] * a[1], a[1] * b[1]); }
  function fmul(a, b) { return frac(a[0] * b[0], a[1] * b[1]); }
  function fdiv(a, b) { return frac(a[0] * b[1], a[1] * b[0]); }
  function nullspace(M, cols) {
    var A = M.map(function (r) { return r.map(function (x) { return [BigInt(x), 1n]; }); }), rows = A.length, piv = [], r = 0;
    for (var c = 0; c < cols && r < rows; c++) {
      var p = -1; for (var i = r; i < rows; i++) if (A[i][c][0] !== 0n) { p = i; break; }
      if (p < 0) continue;
      var t = A[p]; A[p] = A[r]; A[r] = t;
      var pv = A[r][c];
      for (var j = 0; j < cols; j++) A[r][j] = fdiv(A[r][j], pv);
      for (i = 0; i < rows; i++) if (i !== r && A[i][c][0] !== 0n) { var f = A[i][c]; for (j = 0; j < cols; j++) A[i][j] = fsub(A[i][j], fmul(f, A[r][j])); }
      piv.push(c); r++;
    }
    var free = []; for (c = 0; c < cols; c++) if (piv.indexOf(c) < 0) free.push(c);
    return free.map(function (fc) {
      var v = []; for (var k = 0; k < cols; k++) v.push([0n, 1n]);
      v[fc] = [1n, 1n];
      piv.forEach(function (pc, ri) { v[pc] = frac(-A[ri][fc][0], A[ri][fc][1]); });
      var l = 1n; v.forEach(function (x) { l = l / bgcd(l, x[1]) * x[1]; });
      var ints = v.map(function (x) { return x[0] * (l / x[1]); }), g = 0n; ints.forEach(function (x) { g = bgcd(g, x); });
      return ints.map(function (x) { return x / (g || 1n); });
    });
  }
  function splitSide(side) {
    // split on "+" that separates species, not on charges: a separating + is followed by a capital, a bracket, a digit or an electron "e"
    var parts = [], cur = '', depth = 0, s = normal(side);
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (c === '{' || c === '(' || c === '[') depth++;
      if (c === '}' || c === ')' || c === ']') depth--;
      if (c === '+' && depth === 0 && s[i - 1] !== '^') {
        var rest = s.slice(i + 1).replace(/^\s+/, ''), spaced = /\s/.test(s[i - 1] || '') || /\s/.test(s[i + 1] || '');
        if (rest === '' ) { cur += c; continue; }
        if (/^[A-Z(\[{\d]/.test(rest) || (/^e(?![a-z])/.test(rest) && (spaced || /[A-Za-z)\]}\d+-]/.test(s[i - 1] || '')))) { if (cur.trim()) { parts.push(cur.trim()); cur = ''; continue; } }
        if (spaced && cur.trim() && !/^\+/.test(rest)) { parts.push(cur.trim()); cur = ''; continue; }
      }
      cur += c;
    }
    if (cur.trim()) parts.push(cur.trim());
    return parts;
  }
  function parseEquation(src) {
    var s = String(src).trim();
    if (!s) throw new ChemErr('Type an equation, for example H2 + O2 = H2O.');
    var m = s.split(/\s*(?:<=>|<->|⇌|⇄|↔|-+>|→|⟶|⇒|=>|=)\s*/);
    if (m.length < 2) throw new ChemErr('Separate reactants and products with = or ->, for example H2 + O2 = H2O.');
    if (m.length > 2) throw new ChemErr('Use only one = or -> sign in the equation.');
    var sides = m.map(splitSide);
    if (!sides[0].length || !sides[1].length) throw new ChemErr('Both sides of the equation need at least one substance.');
    var species = [];
    sides.forEach(function (list, side) {
      list.forEach(function (raw) {
        var t = raw.replace(/^(\d+)\s*(?=[A-Z(\[e])/, function (_, n) { return ''; });
        var p = parseFormula(t, { allowElectron: true });
        species.push({ raw: raw, text: t, side: side, counts: p.counts, charge: p.charge, electron: !!p.electron, hadCoef: t !== raw, guessed: p.guessed });
      });
    });
    return species;
  }
  function balance(species) {
    var els = [];
    species.forEach(function (sp) { Object.keys(sp.counts).forEach(function (e) { if (els.indexOf(e) < 0) els.push(e); }); });
    var hasCharge = species.some(function (sp) { return sp.charge; });
    var M = els.map(function (e) { return species.map(function (sp) { return (sp.counts[e] || 0) * (sp.side ? -1 : 1); }); });
    if (hasCharge) M.push(species.map(function (sp) { return sp.charge * (sp.side ? -1 : 1); }));
    // elements present on only one side make balancing impossible: say which
    for (var i = 0; i < els.length; i++) {
      var l = species.some(function (sp) { return !sp.side && sp.counts[els[i]]; }), r = species.some(function (sp) { return sp.side && sp.counts[els[i]]; });
      if (!l || !r) return { error: (EL[els[i]].name) + ' (' + els[i] + ') appears only on the ' + (l ? 'left' : 'right') + ' side. Atoms cannot appear or disappear, so check the formulas.' };
    }
    var basis = nullspace(M, species.length), alt = null;
    if (basis.length > 1) { // also try with the pivots taken from the other end, which often gives positive free choices
      var n = species.length;
      alt = nullspace(M.map(function (r) { return r.slice().reverse(); }), n).map(function (v) { return v.slice().reverse(); });
    }
    if (!basis.length) return { error: 'This equation cannot be balanced. Check that every formula is right and that no product or reactant is missing.' };
    function positive(v) { var s = v.some(function (x) { return x > 0n; }) ? 1n : -1n; v = v.map(function (x) { return x * s; }); return v.every(function (x) { return x > 0n; }) ? v : null; }
    var best = null;
    if (basis.length === 1) best = positive(basis[0]);
    else [basis, alt].forEach(function (basis) {
      // several independent reactions are mixed together: look for the smallest all-positive combination
      var dim = basis.length, w = [];
      var tryW = function () {
        var v = species.map(function (_, j) { var s = 0n; for (var q = 0; q < dim; q++) s += BigInt(w[q]) * basis[q][j]; return s; });
        var g = 0n; v.forEach(function (x) { g = bgcd(g, x); }); if (!g) return;
        v = positive(v.map(function (x) { return x / g; }));
        if (v) { var sum = v.reduce(function (a, b) { return a + b; }, 0n); if (!best || sum < best.sum) { best = v; best.sum = sum; } }
      };
      if (dim <= 3) {
        var lim = dim === 2 ? 12 : 6;
        (function rec(k) { if (k === dim) return tryW(); for (var t = -lim; t <= lim; t++) { w[k] = t; rec(k + 1); } })(0);
      } else {
        // many free choices: each basis vector has 1 at its own free substance, so positive weights keep those positive
        var seed = 7;
        var rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
        for (var q = 0; q < dim; q++) w[q] = 1;
        tryW();
        for (var tr = 0; tr < 2000; tr++) { for (q = 0; q < dim; q++) w[q] = 1 + Math.floor(rnd() * 6); tryW(); }
      }
    });
    if (!best) return { error: basis.length === 1 ? 'No balanced version exists with all coefficients positive. A substance may be on the wrong side, or a formula may be wrong.' : 'This equation can be balanced in many ways but none with small positive numbers was found. Check the formulas.' };
    return { coefs: best.slice(0, species.length), multiple: basis.length > 1, elements: els, hasCharge: hasCharge };
  }

  window.Chem = { Err: ChemErr, EL: EL, ORDER: ORDER, parseFormula: parseFormula, molarMass: molarMass, pretty: pretty, parseEquation: parseEquation, balance: balance, normal: normal };
})();

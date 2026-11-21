// Shared helpers for the PDF tools. Pages using this expect elements with the
// ids #drop, #file, #go, #dl and #msg, and load pdf-lib and/or pdf.js first.
(function () {
  var PT = window.PT = {};
  var lastUrl = null;

  PT.say = function (cls, text) { var m = $('msg'); m.className = 'msg ' + (cls || ''); m.textContent = text || ''; };
  PT.base = function (name) { return name.replace(/\.[^.]+$/, ''); };
  PT.isPdf = function (f) { return f.type === 'application/pdf' || /\.pdf$/i.test(f.name); };

  // Wire #drop/#file. onFiles gets an array when multi is true, otherwise one File.
  PT.drop = function (multi, onFiles) {
    var drop = $('drop'), input = $('file');
    function take(list) {
      var a = Array.prototype.slice.call(list);
      input.value = ''; // so the same file can be picked again
      if (a.length) onFiles(multi ? a : a[0]);
    }
    drop.addEventListener('click', function () { input.click(); });
    drop.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
    input.addEventListener('change', function () { take(input.files); });
    ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('over'); }); });
    ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('over'); }); });
    drop.addEventListener('drop', function (e) { take(e.dataTransfer.files); });
    // A finished file no longer matches once an option changes, so hide its download button.
    Array.prototype.forEach.call(document.querySelectorAll('.fields input, .fields select'), function (el) {
      el.addEventListener('input', function () { $('dl').hidden = true; });
    });
  };

  // Open with pdf-lib (for editing). Rejects with a message that is safe to show.
  PT.open = function (file) {
    return file.arrayBuffer().then(function (buf) { return PDFLib.PDFDocument.load(buf); }).catch(function (e) {
      throw new Error(/encrypt/i.test(String(e && e.message)) ? '"' + file.name + '" is password protected or locked against changes. Remove the protection first (for example, open it in a PDF reader and print it to a new PDF with "Save as PDF").' : '"' + file.name + '" could not be read as a PDF.');
    });
  };

  // Open with pdf.js (for rendering and text).
  PT.render = function (file) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = '../assets/vendor/pdf.worker.min.js';
    return file.arrayBuffer().then(function (buf) { return pdfjsLib.getDocument({ data: buf }).promise; }).catch(function (e) {
      throw new Error(e && e.name === 'PasswordException' ? '"' + file.name + '" is password protected. Remove the password first.' : '"' + file.name + '" could not be read as a PDF.');
    });
  };

  // Draw page i (1-based) to a canvas. Returns the canvas plus the page size in PDF points.
  PT.pageCanvas = function (pdf, i, scale) {
    return pdf.getPage(i).then(function (page) {
      var vp = page.getViewport({ scale: scale }), pts = page.getViewport({ scale: 1 });
      var c = document.createElement('canvas');
      c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
      return page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise.then(function () {
        page.cleanup();
        return { canvas: c, width: pts.width, height: pts.height };
      });
    });
  };
  PT.blob = function (canvas, type, q) { return new Promise(function (res) { canvas.toBlob(res, type, q); }); };

  // "1-3, 5" -> [0, 1, 2, 4]. n is the page count. Throws a readable Error.
  PT.ranges = function (str, n) {
    var out = [], seen = {};
    // accept Arabic-Indic and Persian digits, and the dashes phones type automatically
    str = str.replace(/[\u0660-\u0669]/g, function (d) { return d.charCodeAt(0) - 0x660; }).replace(/[\u06F0-\u06F9]/g, function (d) { return d.charCodeAt(0) - 0x6F0; })
      .replace(/[\u2010-\u2015\u2212]/g, '-').replace(/[\u060C\uFF0C]/g, ',');
    var parts = str.split(',').map(function (p) { return p.trim(); }).filter(Boolean);
    if (!parts.length) throw new Error('Enter the page numbers, for example 1-3, 5.');
    parts.forEach(function (p) {
      var m = p.match(/^(\d+)(?:\s*-\s*(\d+))?$/);
      if (!m) throw new Error('"' + p + '" is not a page number or range. Use a format like 1-3, 5.');
      var a = +m[1], b = m[2] ? +m[2] : a;
      if (b < a) throw new Error('"' + p + '" goes backwards. Write ranges from low to high, like ' + b + '-' + a + '.');
      if (a < 1 || b > n) throw new Error('"' + p + '" is outside this PDF, which has ' + n + (n === 1 ? ' page.' : ' pages.'));
      for (var i = a; i <= b; i++) if (!seen[i]) { seen[i] = 1; out.push(i - 1); }
    });
    return out;
  };

  // Text the standard PDF fonts cannot write (Arabic, Chinese, emoji…) drawn by the browser as a sharp PNG.
  // px: font size in CSS pixels. Returns { png: Uint8Array, w, h, asc } in the same pixels (asc = baseline from the top).
  PT.textPng = function (text, px, color, weight, family) {
    var k = Math.max(2, Math.min(8, 300 / px)), font = (weight || 'normal') + ' ' + px + 'px ' + (family || 'Arial, "Noto Sans", sans-serif');
    var m = document.createElement('canvas').getContext('2d'); m.font = font;
    var mt = m.measureText(text), asc = Math.max(mt.fontBoundingBoxAscent || 0, mt.actualBoundingBoxAscent || 0) || px * 0.9, desc = Math.max(mt.fontBoundingBoxDescent || 0, mt.actualBoundingBoxDescent || 0) || px * 0.25;
    var w = Math.max(1, Math.ceil(mt.width + 2)), h = Math.ceil(asc + desc + 2), c = document.createElement('canvas');
    c.width = Math.ceil(w * k); c.height = Math.ceil(h * k);
    var x = c.getContext('2d'); x.scale(k, k); x.font = font; x.fillStyle = color || '#000'; x.textBaseline = 'alphabetic'; x.fillText(text, 1, asc + 1);
    return PT.blob(c, 'image/png').then(function (b) { return b.arrayBuffer(); }).then(function (a) { return { png: new Uint8Array(a), w: w, h: h, asc: asc + 1 }; });
  };

  // Show the finished file on the #dl button.
  PT.done = function (data, name, mime, note) {
    var blob = data instanceof Blob ? data : new Blob([data], { type: mime });
    if (lastUrl) URL.revokeObjectURL(lastUrl);
    lastUrl = URL.createObjectURL(blob);
    var dl = $('dl'); dl.href = lastUrl; dl.download = name; dl.hidden = false;
    PT.say('ok', (note || 'Done') + ' · ' + fmtBytes(blob.size));
    return blob;
  };

  // Run an async job behind the #go button with consistent busy/error handling.
  PT.run = function (job) {
    var go = $('go');
    go.disabled = true; $('dl').hidden = true; PT.say('', 'Working…');
    return Promise.resolve().then(job).catch(function (e) {
      PT.say('bad', e && e.message ? e.message : 'Something went wrong with this file.');
    }).then(function () { go.disabled = false; });
  };

  // Reorderable file list rendered into #list.
  PT.list = function (files, onChange) {
    var ul = $('list'); ul.innerHTML = '';
    files.forEach(function (f, i) {
      var li = document.createElement('li'), name = document.createElement('span');
      name.textContent = (i + 1) + '. ' + f.name + ' (' + fmtBytes(f.size) + ')';
      li.appendChild(name);
      [['↑', 'Move up', i > 0, function () { files.splice(i - 1, 0, files.splice(i, 1)[0]); }],
       ['↓', 'Move down', i < files.length - 1, function () { files.splice(i + 1, 0, files.splice(i, 1)[0]); }],
       ['✕', 'Remove', true, function () { files.splice(i, 1); }]].forEach(function (b) {
        var btn = document.createElement('button');
        btn.type = 'button'; btn.textContent = b[0]; btn.setAttribute('aria-label', b[1] + ' ' + f.name); btn.disabled = !b[2];
        btn.addEventListener('click', function () { b[3](); PT.list(files, onChange); onChange(); });
        li.appendChild(btn);
      });
      ul.appendChild(li);
    });
  };

  // Page geometry as the reader sees it, taking the page's built-in rotation (/Rotate) into account.
  // width/height are the visible size; at(u, v) turns a point measured from the visible bottom-left
  // corner into PDF coordinates; angle is the extra rotation (degrees) that makes text read upright.
  PT.view = function (page) {
    var b = page.getCropBox(), r = ((Math.round((page.getRotation().angle || 0) / 90) * 90) % 360 + 360) % 360;
    var side = r === 90 || r === 270;
    return {
      width: side ? b.height : b.width, height: side ? b.width : b.height, angle: r,
      at: function (u, v) {
        if (r === 90) return { x: b.x + b.width - v, y: b.y + u };
        if (r === 180) return { x: b.x + b.width - u, y: b.y + b.height - v };
        if (r === 270) return { x: b.x + v, y: b.y + b.height - u };
        return { x: b.x + u, y: b.y + v };
      }
    };
  };

  // Minimal ZIP writer (stored, no compression: the inputs are already-compressed images).
  var crcTable = null;
  function crc32(d) {
    if (!crcTable) {
      crcTable = new Uint32Array(256);
      for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; crcTable[n] = c; }
    }
    var crc = 0xFFFFFFFF;
    for (var i = 0; i < d.length; i++) crc = crcTable[(crc ^ d[i]) & 0xFF] ^ (crc >>> 8);
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }
  PT.zip = function (files) { // [{ name, data: Uint8Array }]
    var enc = new TextEncoder(), parts = [], central = [], offset = 0, now = new Date();
    // MS-DOS time and date of "now" (a zero date is invalid and some unzip tools complain)
    var dosTime = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
    var dosDate = ((Math.max(1980, now.getFullYear()) - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
    files.forEach(function (f) {
      var name = enc.encode(f.name), crc = crc32(f.data), size = f.data.length;
      var local = new DataView(new ArrayBuffer(30));
      local.setUint32(0, 0x04034b50, true); local.setUint16(4, 20, true); local.setUint16(6, 0x0800, true);
      local.setUint16(10, dosTime, true); local.setUint16(12, dosDate, true);
      local.setUint32(14, crc, true); local.setUint32(18, size, true); local.setUint32(22, size, true); local.setUint16(26, name.length, true);
      var cd = new DataView(new ArrayBuffer(46));
      cd.setUint32(0, 0x02014b50, true); cd.setUint16(4, 20, true); cd.setUint16(6, 20, true); cd.setUint16(8, 0x0800, true);
      cd.setUint16(12, dosTime, true); cd.setUint16(14, dosDate, true);
      cd.setUint32(16, crc, true); cd.setUint32(20, size, true); cd.setUint32(24, size, true); cd.setUint16(28, name.length, true); cd.setUint32(42, offset, true);
      parts.push(new Uint8Array(local.buffer), name, f.data);
      central.push(new Uint8Array(cd.buffer), name);
      offset += 30 + name.length + size;
    });
    var cdSize = central.reduce(function (s, p) { return s + p.length; }, 0);
    var end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
    end.setUint32(12, cdSize, true); end.setUint32(16, offset, true);
    return new Blob(parts.concat(central, [new Uint8Array(end.buffer)]), { type: 'application/zip' });
  };
})();

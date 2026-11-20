/* Glossira Organic theme script */
(function () {
  'use strict';

  var cfg = window.GlossiraTheme || {};
  var checkoutUrl = cfg.checkoutUrl || '/checkout';
  var routes = cfg.routes || { cart: '/cart', cartAdd: '/cart/add', cartChange: '/cart/change' };
  var doc = document;

  function $(sel, ctx) {
    return (ctx || doc).querySelector(sel);
  }

  function $$(sel, ctx) {
    return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel));
  }

  function money(cents) {
    var amount = (cents / 100).toFixed(2);
    var parts = amount.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    var value = parts[1] === '00' ? parts[0] : parts.join('.');
    return (cfg.moneyPrefix || 'Rs.') + value;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function json(url, options) {
    options = options || {};
    options.headers = Object.assign({ Accept: 'application/json' }, options.headers || {});
    options.credentials = 'same-origin';
    return fetch(url, options).then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok) {
          throw new Error(data.description || data.message || 'Something went wrong');
        }
        return data;
      });
    });
  }

  function post(url, body) {
    return json(url + '.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  /* ---------- toast ---------- */
  var toastEl;
  var toastTimer;
  function toast(message) {
    if (!toastEl) {
      toastEl = doc.createElement('div');
      toastEl.className = 'g-toast';
      toastEl.setAttribute('role', 'status');
      doc.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.add('is-open');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('is-open');
    }, 3200);
  }

  /* ---------- drawers ---------- */
  var overlay = $('[data-g-overlay]');
  var openDrawer = null;
  var lastFocus = null;

  function showDrawer(name) {
    var drawer = $('[data-g-drawer="' + name + '"]');
    if (!drawer) return;
    if (openDrawer && openDrawer !== drawer) hideDrawer();
    lastFocus = doc.activeElement;
    openDrawer = drawer;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    if (overlay) overlay.classList.add('is-open');
    doc.body.classList.add('g-lock');
    var closeBtn = $('[data-g-close]', drawer);
    if (closeBtn) closeBtn.focus();
  }

  function hideDrawer() {
    if (!openDrawer) return;
    openDrawer.classList.remove('is-open');
    openDrawer.setAttribute('aria-hidden', 'true');
    openDrawer = null;
    if (overlay) overlay.classList.remove('is-open');
    doc.body.classList.remove('g-lock');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  doc.addEventListener('click', function (event) {
    var opener = event.target.closest('[data-g-open]');
    if (opener) {
      event.preventDefault();
      var name = opener.getAttribute('data-g-open');
      showDrawer(name);
      if (name === 'cart') refreshCart();
      return;
    }
    if (event.target.closest('[data-g-close]') || event.target === overlay) {
      event.preventDefault();
      hideDrawer();
    }
  });

  doc.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') hideDrawer();
  });

  /* ---------- sticky header state ---------- */
  var header = $('[data-g-header]');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- cart ---------- */
  var cartBody = $('[data-g-cart-items]');
  var cartFoot = $('[data-g-cart-foot]');
  var cartTotal = $('[data-g-cart-total]');

  function setCount(count) {
    $$('[data-g-cart-count]').forEach(function (el) {
      var changed = el.textContent.trim() !== String(count);
      el.textContent = count;
      el.hidden = count < 1;
      if (changed && count > 0) {
        el.classList.remove('is-pop');
        void el.offsetWidth;
        el.classList.add('is-pop');
      }
    });
  }

  function renderCart(cart) {
    setCount(cart.item_count);
    if (!cartBody) return;
    if (!cart.items.length) {
      cartBody.innerHTML = $('[data-g-cart-empty]').innerHTML;
      if (cartFoot) cartFoot.hidden = true;
      return;
    }
    cartBody.innerHTML = cart.items
      .map(function (item, index) {
        var img = item.image || '';
        if (img) img += (img.indexOf('?') > -1 ? '&' : '?') + 'width=200';
        var variant = item.variant_title && item.variant_title !== 'Default Title' ? item.variant_title : '';
        return (
          '<div class="g-line" data-line="' + (index + 1) + '">' +
          (img ? '<img class="g-line__img" src="' + escapeHtml(img) + '" alt="" loading="lazy" width="78" height="96">' : '<div class="g-line__img"></div>') +
          '<div>' +
          '<a class="g-line__title" href="' + escapeHtml(item.url) + '">' + escapeHtml(item.product_title) + '</a>' +
          (variant ? '<div class="g-drawer__note" style="margin:4px 0 0">' + escapeHtml(variant) + '</div>' : '') +
          '<div class="g-line__row">' +
          '<div class="g-qty">' +
          '<button type="button" class="g-qty__btn" data-g-line-qty="' + (item.quantity - 1) + '" aria-label="Decrease quantity">&minus;</button>' +
          '<span class="g-qty__input" aria-live="polite">' + item.quantity + '</span>' +
          '<button type="button" class="g-qty__btn" data-g-line-qty="' + (item.quantity + 1) + '" aria-label="Increase quantity">+</button>' +
          '</div>' +
          '<span class="g-line__price">' + money(item.final_line_price) + '</span>' +
          '</div>' +
          '<button type="button" class="g-line__remove" data-g-line-qty="0">Remove</button>' +
          '</div></div>'
        );
      })
      .join('');
    if (cartTotal) cartTotal.textContent = money(cart.total_price);
    if (cartFoot) cartFoot.hidden = false;
  }

  function refreshCart() {
    return json(routes.cart + '.js')
      .then(renderCart)
      .catch(function () {});
  }

  if (cartBody) {
    cartBody.addEventListener('click', function (event) {
      var btn = event.target.closest('[data-g-line-qty]');
      if (!btn) return;
      var line = btn.closest('[data-line]');
      post(routes.cartChange, {
        line: parseInt(line.getAttribute('data-line'), 10),
        quantity: Math.max(0, parseInt(btn.getAttribute('data-g-line-qty'), 10)),
      })
        .then(renderCart)
        .catch(function (err) {
          toast(err.message);
        });
    });
  }

  function formItems(form) {
    var id = form.querySelector('[name="id"]');
    var qty = form.querySelector('[name="quantity"]');
    return [{ id: id ? id.value : null, quantity: (qty && parseInt(qty.value, 10)) || 1 }];
  }

  function trackAdd() {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'AddToCart', { currency: cfg.currency || 'PKR' });
    }
  }

  /* add to cart (opens drawer) */
  doc.addEventListener('submit', function (event) {
    var form = event.target;
    if (!form.matches || !form.matches('[data-g-product-form]')) return;
    event.preventDefault();
    var btn = event.submitter || form.querySelector('[type="submit"]');
    var buyNow = btn && btn.hasAttribute('data-g-buy-now');
    if (btn) btn.classList.add('is-loading');
    trackAdd();
    confetti(btn || form);

    var chain = buyNow
      ? post(routes.cart + '/clear', {}).then(function () {
          return post(routes.cartAdd, { items: formItems(form) });
        })
      : post(routes.cartAdd, { items: formItems(form) });

    chain
      .then(function () {
        if (buyNow) {
          window.location.href = checkoutUrl;
          return;
        }
        toast('Added to cart');
        return refreshCart().then(function () {
          showDrawer('cart');
        });
      })
      .catch(function (err) {
        toast(err.message);
      })
      .then(function () {
        if (btn && !buyNow) btn.classList.remove('is-loading');
      });
  });

  /* the sticky mobile bar re-uses the main product form */
  doc.addEventListener('click', function (event) {
    var trigger = event.target.closest('[data-g-buybar-submit]');
    if (!trigger) return;
    var form = $('[data-g-product-form][data-g-main-form]');
    var target = form && form.querySelector('[data-g-buy-now]');
    if (target) target.click();
  });

  /* quantity steppers on forms */
  doc.addEventListener('click', function (event) {
    var step = event.target.closest('[data-g-step]');
    if (!step) return;
    var input = step.parentNode.querySelector('input');
    if (!input) return;
    var next = (parseInt(input.value, 10) || 1) + parseInt(step.getAttribute('data-g-step'), 10);
    input.value = Math.min(Math.max(next, 1), 99);
  });

  /* variant select keeps the price in sync */
  doc.addEventListener('change', function (event) {
    var select = event.target;
    if (!select.matches || !select.matches('[data-g-variant-select]')) return;
    var option = select.options[select.selectedIndex];
    var now = $('[data-g-price-now]');
    if (now && option.dataset.price) now.textContent = option.dataset.price;
    var was = $('[data-g-price-was]');
    if (was) was.textContent = option.dataset.compare || '';
  });

  /* ---------- product gallery ---------- */
  $$('[data-g-gallery]').forEach(function (gallery) {
    var slides = $$('[data-g-slide]', gallery);
    var thumbs = $$('[data-g-thumb]', gallery);
    thumbs.forEach(function (thumb, index) {
      thumb.addEventListener('click', function () {
        slides.forEach(function (slide, i) {
          slide.classList.toggle('is-active', i === index);
        });
        thumbs.forEach(function (t, i) {
          t.classList.toggle('is-active', i === index);
          t.setAttribute('aria-current', i === index ? 'true' : 'false');
        });
      });
    });
  });

  /* ---------- sticky buy bar ---------- */
  var buybar = $('[data-g-buybar]');
  var mainForm = $('[data-g-main-form]');
  if (buybar && mainForm && 'IntersectionObserver' in window) {
    doc.body.classList.add('g-has-buybar');
    new IntersectionObserver(function (entries) {
      var entry = entries[0];
      var past = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      buybar.classList.toggle('is-visible', past);
    }).observe(mainForm);
  }

  /* ---------- sort select ---------- */
  doc.addEventListener('change', function (event) {
    if (!event.target.matches || !event.target.matches('[data-g-sort]')) return;
    var url = new URL(window.location.href);
    url.searchParams.set('sort_by', event.target.value);
    url.searchParams.delete('page');
    window.location.href = url.toString();
  });

  /* ---------- custom checkout hand-off ----------
     The store uses its own cash-on-delivery checkout page. Any link or
     button that would open Shopify's cart or checkout goes there instead. */
  if (cfg.customCheckout) {
    doc.addEventListener(
      'click',
      function (event) {
        var el = event.target.closest(
          'a[href="/cart"],a[href^="/cart?"],a[href="/checkout"],a[href^="/checkout?"],button[name="checkout"],[formaction*="/checkout"]'
        );
        if (!el || el.hasAttribute('data-g-open')) return;
        event.preventDefault();
        event.stopPropagation();
        window.location.href = checkoutUrl;
      },
      true
    );
  }

  /* ---------- light sparks on add to cart ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function phaseColors() {
    var style = getComputedStyle(doc.documentElement);
    return ['--g-a', '--g-b', '--g-c'].map(function (name) {
      return style.getPropertyValue(name).trim() || '#ffffff';
    });
  }

  function confetti(origin) {
    if (reduceMotion || !origin || !origin.getBoundingClientRect || !doc.body.animate) return;
    var rect = origin.getBoundingClientRect();
    var x = rect.left + rect.width / 2;
    var y = rect.top + rect.height / 2;
    var colors = phaseColors().concat(['#ffffff']);
    for (var i = 0; i < 26; i++) {
      (function (index) {
        var bit = doc.createElement('span');
        bit.className = 'g-confetti';
        bit.style.left = x + 'px';
        bit.style.top = y + 'px';
        bit.style.color = colors[index % colors.length];
        doc.body.appendChild(bit);
        var angle = (Math.PI * 2 * index) / 26 + Math.random() * 0.4;
        var distance = 60 + Math.random() * 170;
        var dx = Math.cos(angle) * distance;
        var dy = Math.sin(angle) * distance;
        bit
          .animate(
            [
              { transform: 'translate(0, 0) scale(1.6)', opacity: 1 },
              { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(0.2)', opacity: 0 },
            ],
            { duration: 700 + Math.random() * 600, easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)' }
          )
          .addEventListener('finish', function () {
            if (bit.parentNode) bit.parentNode.removeChild(bit);
          });
      })(i);
    }
  }

  /* ---------- AM / PM phase ---------- */
  doc.addEventListener('click', function (event) {
    if (!event.target.closest('[data-g-phase-toggle]')) return;
    var next = doc.documentElement.getAttribute('data-g-phase') === 'pm' ? 'am' : 'pm';
    doc.documentElement.setAttribute('data-g-phase', next);
    try {
      localStorage.setItem('g-phase', next);
    } catch (e) {}
  });

  /* ---------- live clock (Pakistan time) ---------- */
  var clock = $('[data-g-clock]');
  if (clock) {
    var tick = function () {
      try {
        clock.textContent = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Karachi', hour12: false });
      } catch (e) {
        clock.textContent = new Date().toLocaleTimeString();
      }
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- scroll progress ---------- */
  var progress = $('[data-g-progress]');
  if (progress) {
    var onProgress = function () {
      var max = doc.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
    };
    onProgress();
    window.addEventListener('scroll', onProgress, { passive: true });
  }

  /* ---------- pointer light + cursor ring (mouse only) ---------- */
  if (finePointer && !reduceMotion) {
    var spot = $('[data-g-spotlight]');
    var ring = doc.createElement('div');
    ring.className = 'g-cursor';
    doc.body.appendChild(ring);
    var tx = 0;
    var ty = 0;
    var rx = 0;
    var ry = 0;
    var moving = false;
    var follow = function () {
      rx += (tx - rx) * 0.2;
      ry += (ty - ry) * 0.2;
      ring.style.transform = 'translate(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px)';
      if (Math.abs(tx - rx) > 0.3 || Math.abs(ty - ry) > 0.3) {
        requestAnimationFrame(follow);
      } else {
        moving = false;
      }
    };
    window.addEventListener(
      'pointermove',
      function (event) {
        tx = event.clientX;
        ty = event.clientY;
        if (spot) {
          spot.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
          spot.classList.add('is-on');
        }
        ring.classList.add('is-on');
        ring.classList.toggle('is-hot', !!event.target.closest('a, button, summary, select, input, textarea'));
        if (!moving) {
          moving = true;
          requestAnimationFrame(follow);
        }
      },
      { passive: true }
    );
    doc.addEventListener('pointerleave', function () {
      ring.classList.remove('is-on');
      if (spot) spot.classList.remove('is-on');
    });

    /* holographic tilt on product capsules */
    doc.addEventListener(
      'pointermove',
      function (event) {
        var card = event.target.closest('[data-g-tilt]');
        if (!card) return;
        var rect = card.getBoundingClientRect();
        var px = (event.clientX - rect.left) / rect.width;
        var py = (event.clientY - rect.top) / rect.height;
        card.style.setProperty('--g-mx', (px * 100).toFixed(1) + '%');
        card.style.setProperty('--g-my', (py * 100).toFixed(1) + '%');
        card.style.setProperty('--g-ry', ((px - 0.5) * 10).toFixed(2) + 'deg');
        card.style.setProperty('--g-rx', ((0.5 - py) * 10).toFixed(2) + 'deg');
      },
      { passive: true }
    );
    doc.addEventListener(
      'pointerout',
      function (event) {
        var card = event.target.closest('[data-g-tilt]');
        if (!card || card.contains(event.relatedTarget)) return;
        card.style.setProperty('--g-rx', '0deg');
        card.style.setProperty('--g-ry', '0deg');
      },
      { passive: true }
    );
  }

  /* ---------- living light orb behind the hero ---------- */
  var orb = $('[data-g-orb]');
  if (orb && orb.getContext) {
    var ctx = orb.getContext('2d');
    var orbVisible = true;
    var orbStart = performance.now();
    var colors = phaseColors();
    var core = $('[data-g-core]');
    var resizeOrb = function () {
      var rect = orb.getBoundingClientRect();
      orb.width = Math.max(1, Math.round(rect.width / 3));
      orb.height = Math.max(1, Math.round(rect.height / 3));
    };
    var hexToRgb = function (hex) {
      var value = hex.replace('#', '');
      if (value.length === 3) value = value[0] + value[0] + value[1] + value[1] + value[2] + value[2];
      var n = parseInt(value, 16);
      return isNaN(n) ? '255,255,255' : ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255);
    };
    var drawOrb = function (now) {
      var t = (now - orbStart) / 1000;
      var w = orb.width;
      var h = orb.height;
      var cx = w * 0.5;
      var cy = h * 0.5;
      if (core) {
        var a = orb.getBoundingClientRect();
        var b = core.getBoundingClientRect();
        cx = ((b.left + b.width / 2 - a.left) / a.width) * w;
        cy = ((b.top + b.height / 2 - a.top) / a.height) * h;
      }
      var base = Math.min(w, h);
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      for (var i = 0; i < 6; i++) {
        var speed = 0.22 + i * 0.07;
        var reach = base * (0.1 + i * 0.035);
        var x = cx + Math.cos(t * speed + i * 2.1) * reach * 1.5;
        var y = cy + Math.sin(t * speed * 1.3 + i * 1.3) * reach;
        var radius = base * (0.3 + 0.07 * Math.sin(t * 0.6 + i));
        var rgb = hexToRgb(colors[i % colors.length]);
        var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, 'rgba(' + rgb + ',0.3)');
        gradient.addColorStop(0.5, 'rgba(' + rgb + ',0.09)');
        gradient.addColorStop(1, 'rgba(' + rgb + ',0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.globalCompositeOperation = 'source-over';
    };
    var loopOrb = function (now) {
      if (orbVisible) drawOrb(now);
      requestAnimationFrame(loopOrb);
    };
    resizeOrb();
    window.addEventListener('resize', resizeOrb);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        orbVisible = entries[0].isIntersecting;
      }).observe(orb);
    }
    new MutationObserver(function () {
      colors = phaseColors();
    }).observe(doc.documentElement, { attributes: true, attributeFilter: ['data-g-phase'] });
    if (reduceMotion) {
      drawOrb(orbStart + 4000);
    } else {
      requestAnimationFrame(loopOrb);
    }
  }

  /* ---------- skin scanner ---------- */
  $$('[data-g-scan]').forEach(function (root) {
    var tabs = $$('[data-g-scan-tab]', root);
    var panels = $$('[data-g-scan-panel]', root);
    var images = $$('[data-g-scan-img]', root);
    var status = $('[data-g-scan-status]', root);
    var box = $('.g-scan', root);
    var timer = null;
    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        if (tab.getAttribute('aria-selected') === 'true') return;
        tabs.forEach(function (t, i) {
          t.setAttribute('aria-selected', i === index ? 'true' : 'false');
        });
        images.forEach(function (img, i) {
          img.classList.toggle('is-active', i === index);
        });
        var show = function () {
          if (box) box.classList.remove('is-scanning');
          if (status) status.textContent = status.getAttribute('data-done');
          panels.forEach(function (panel, i) {
            panel.hidden = i !== index;
            panel.classList.remove('is-in');
            if (i === index) {
              void panel.offsetWidth;
              panel.classList.add('is-in');
            }
          });
        };
        clearTimeout(timer);
        if (reduceMotion || !box) {
          show();
          return;
        }
        box.classList.remove('is-scanning');
        void box.offsetWidth;
        box.classList.add('is-scanning');
        if (status) status.textContent = status.getAttribute('data-busy');
        timer = setTimeout(show, 1150);
      });
    });
  });

  /* ---------- formula orbit ---------- */
  $$('[data-g-formula]').forEach(function (root) {
    var nodes = $$('[data-g-formula-node]', root);
    var read = $('[data-g-formula-read]', root);
    var name = $('[data-g-formula-name]', root);
    var text = $('[data-g-formula-text]', root);
    nodes.forEach(function (node) {
      node.addEventListener('click', function () {
        nodes.forEach(function (other) {
          other.setAttribute('aria-pressed', other === node ? 'true' : 'false');
        });
        if (name) name.textContent = node.getAttribute('data-name');
        if (text) text.textContent = node.getAttribute('data-text');
        if (read) {
          read.classList.remove('is-in');
          void read.offsetWidth;
          read.classList.add('is-in');
        }
      });
    });
  });

  /* ---------- decode headings as they appear ---------- */
  var GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#/<>*+';
  function decode(el) {
    if (reduceMotion || el.getAttribute('data-g-decoded')) return;
    el.setAttribute('data-g-decoded', '1');
    if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    var walker = doc.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var parts = [];
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim()) parts.push({ node: node, text: node.nodeValue });
    }
    var total = parts.reduce(function (sum, part) {
      return sum + part.text.length;
    }, 0);
    var start = performance.now();
    var duration = Math.min(1100, 380 + total * 22);
    var step = function (now) {
      var done = Math.min(1, (now - start) / duration);
      var settled = Math.floor(done * total);
      var seen = 0;
      parts.forEach(function (part) {
        var out = '';
        for (var i = 0; i < part.text.length; i++) {
          var ch = part.text[i];
          if (seen + i < settled || /\s/.test(ch)) {
            out += ch;
          } else {
            out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }
        seen += part.text.length;
        part.node.nodeValue = out;
      });
      if (done < 1) {
        requestAnimationFrame(step);
      } else {
        parts.forEach(function (part) {
          part.node.nodeValue = part.text;
        });
      }
    };
    requestAnimationFrame(step);
  }

  var decodeTargets = $$('[data-g-decode]');
  var litTargets = $$('[data-g-steps]');
  if ('IntersectionObserver' in window) {
    var seenObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          if (entry.target.hasAttribute('data-g-decode')) decode(entry.target);
          if (entry.target.hasAttribute('data-g-steps')) entry.target.classList.add('is-lit');
          seenObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    decodeTargets.concat(litTargets).forEach(function (el) {
      seenObserver.observe(el);
    });
  } else {
    litTargets.forEach(function (el) {
      el.classList.add('is-lit');
    });
  }

  /* ---------- reveal on scroll ---------- */
  var reveals = $$('.g-reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
            (function (el) {
              setTimeout(function () {
                el.classList.add('is-done');
              }, 1400);
            })(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('is-in');
    });
  }
})();

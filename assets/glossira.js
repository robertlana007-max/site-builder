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
        toast('Yay! Added to your cart');
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

  /* ---------- confetti burst ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HEART = '<svg viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 7.5 2.5c0 5.4-7.5 10-7.5 10z" fill="currentColor"/></svg>';
  var STAR = '<svg viewBox="0 0 24 24"><path d="M12 2l2.4 6.9 7.1.6-5.6 4.3 2 7-5.9-4.1-5.9 4.1 2-7-5.6-4.3 7.1-.6z" fill="currentColor"/></svg>';
  var COLORS = ['#d4537e', '#ffdd55', '#c4efd0', '#e0d2fb', '#ff9dbb', '#ffffff'];

  function confetti(origin) {
    if (reduceMotion || !origin || !origin.getBoundingClientRect || !doc.body.animate) return;
    var rect = origin.getBoundingClientRect();
    var x = rect.left + rect.width / 2;
    var y = rect.top + rect.height / 2;
    for (var i = 0; i < 18; i++) {
      (function (index) {
        var bit = doc.createElement('span');
        bit.className = 'g-confetti';
        bit.innerHTML = index % 2 ? HEART : STAR;
        bit.style.left = x + 'px';
        bit.style.top = y + 'px';
        bit.style.color = COLORS[index % COLORS.length];
        var size = 14 + Math.random() * 16;
        bit.style.width = bit.style.height = size + 'px';
        doc.body.appendChild(bit);
        var angle = (Math.PI * 2 * index) / 18 + Math.random() * 0.5;
        var distance = 70 + Math.random() * 110;
        var dx = Math.cos(angle) * distance;
        var dy = Math.sin(angle) * distance - 60;
        var spin = (Math.random() - 0.5) * 540;
        bit
          .animate(
            [
              { transform: 'translate(0, 0) scale(0.2) rotate(0deg)', opacity: 1 },
              { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(1) rotate(' + spin / 2 + 'deg)', opacity: 1, offset: 0.6 },
              { transform: 'translate(' + dx * 1.15 + 'px,' + (dy + 90) + 'px) scale(0.6) rotate(' + spin + 'deg)', opacity: 0 },
            ],
            { duration: 900 + Math.random() * 500, easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)' }
          )
          .addEventListener('finish', function () {
            if (bit.parentNode) bit.parentNode.removeChild(bit);
          });
      })(i);
    }
  }

  /* ---------- skin mood picker ---------- */
  $$('[data-g-mood]').forEach(function (root) {
    var tabs = $$('[data-g-mood-tab]', root);
    var panels = $$('[data-g-mood-panel]', root);
    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t, i) {
          t.setAttribute('aria-selected', i === index ? 'true' : 'false');
        });
        panels.forEach(function (panel, i) {
          panel.hidden = i !== index;
          panel.classList.remove('is-in');
          if (i === index) {
            void panel.offsetWidth;
            panel.classList.add('is-in');
          }
        });
      });
    });
  });

  /* ---------- ingredient bubbles ---------- */
  $$('[data-g-ingr]').forEach(function (root) {
    var items = $$('[data-g-ingr-item]', root);
    var out = $('[data-g-ingr-out]', root);
    items.forEach(function (item) {
      item.addEventListener('click', function () {
        items.forEach(function (other) {
          other.setAttribute('aria-pressed', other === item ? 'true' : 'false');
        });
        if (!out) return;
        out.textContent = item.getAttribute('data-text');
        out.classList.remove('is-in');
        void out.offsetWidth;
        out.classList.add('is-in');
      });
    });
  });

  /* ---------- hero parallax (pointer devices only) ---------- */
  var parallaxRoot = $('[data-g-parallax-root]');
  if (parallaxRoot && !reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var layers = $$('[data-g-depth]', parallaxRoot);
    var frame = null;
    parallaxRoot.addEventListener('pointermove', function (event) {
      if (frame) return;
      frame = requestAnimationFrame(function () {
        frame = null;
        var rect = parallaxRoot.getBoundingClientRect();
        var px = (event.clientX - rect.left) / rect.width - 0.5;
        var py = (event.clientY - rect.top) / rect.height - 0.5;
        layers.forEach(function (layer) {
          var depth = parseFloat(layer.getAttribute('data-g-depth')) || 0;
          layer.style.translate = (-px * depth).toFixed(1) + 'px ' + (-py * depth).toFixed(1) + 'px';
        });
      });
    });
    parallaxRoot.addEventListener('pointerleave', function () {
      layers.forEach(function (layer) {
        layer.style.translate = '';
      });
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

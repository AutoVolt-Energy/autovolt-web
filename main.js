/* ─────────────────────────────────────────────────────────────────────
   AutoVolt Energy — interacciones compartidas del sitio
   Sin dependencias. Se carga con "defer" al final del <head> o del body.
   ───────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Año del footer ─────────────────────────────────────────────── */
  function setYear() {
    var y = String(new Date().getFullYear());
    var nodes = document.querySelectorAll('#year, [data-year]');
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = y;
  }

  /* ── Menú móvil (hamburguesa) ───────────────────────────────────── */
  function initNav() {
    var nav = document.querySelector('.nav');
    var toggle = document.querySelector('.nav__toggle');
    if (!nav || !toggle) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
    });

    // Cerrar al tocar un enlace del menú.
    var links = nav.querySelectorAll('.nav__links a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      });
    }

    // Cerrar con Escape.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  }

  /* ── Sombra de la barra al hacer scroll ─────────────────────────── */
  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var onScroll = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Reveal on-scroll ───────────────────────────────────────────── */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (reduce || !('IntersectionObserver' in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add('is-visible');
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    for (var j = 0; j < items.length; j++) io.observe(items[j]);
  }

  function init() {
    setYear();
    initNav();
    initNavScroll();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

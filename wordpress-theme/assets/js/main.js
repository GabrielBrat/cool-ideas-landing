/**
 * Cool Ideas - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ========================================
     HEADER SCROLL EFFECT
     ======================================== */
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  /* ========================================
     MOBILE MENU
     ======================================== */
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('active');
      toggle.textContent = menu.classList.contains('active') ? '✕' : '☰';
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('active');
        toggle.textContent = '☰';
      });
    });
  }

  /* ========================================
     SMOOTH SCROLL
     ======================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ========================================
     SCROLL REVEAL ANIMATION
     ======================================== */
  var reveals = document.querySelectorAll('.reveal');

  function checkReveal() {
    var windowHeight = window.innerHeight;
    reveals.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < windowHeight - 80) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkReveal);
  checkReveal(); // Initial check

  /* ========================================
     CONTACT FORM (AJAX)
     ======================================== */
  var form = document.getElementById('contact-form');
  var feedback = document.getElementById('form-feedback');

  if (form && typeof coolideas_ajax !== 'undefined') {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var formData = new FormData(form);
      formData.append('action', 'coolideas_contact');
      formData.append('nonce', coolideas_ajax.nonce);

      feedback.textContent = 'Enviando...';
      feedback.style.color = '#64748B';

      fetch(coolideas_ajax.url, {
        method: 'POST',
        body: formData,
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            feedback.textContent = '✅ ' + data.data;
            feedback.style.color = '#2A9D8F';
            form.reset();
          } else {
            feedback.textContent = '❌ ' + (data.data || 'Erro ao enviar.');
            feedback.style.color = '#EF4444';
          }
        })
        .catch(function () {
          feedback.textContent = '❌ Erro de conexão. Tente novamente.';
          feedback.style.color = '#EF4444';
        });
    });
  }

});

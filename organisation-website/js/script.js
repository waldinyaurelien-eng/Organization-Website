/* =========================================================
   Organisation Horizon — script.js
   Interactions minimales : menu mobile, apparition au scroll,
   formulaire de contact (sans backend pour l'instant).
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Menu mobile (hamburger) ---------- */
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Ferme le menu mobile quand on clique sur un lien
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Apparition légère des sections au scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Pas de support : on affiche tout directement
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Formulaire de contact : envoi direct vers WhatsApp ---------- */
var contactForm = document.querySelector('#contact-form');
if (contactForm) {

  // Numéro WhatsApp du membre qui reçoit les messages du formulaire.
  // À REMPLACER par le vrai numéro (format international, sans le +, sans espaces).
  var WHATSAPP_NUMBER = '50940303686';

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = contactForm.querySelector('#name');
    var email = contactForm.querySelector('#email');
    var message = contactForm.querySelector('#message');
    var valid = true;

    [name, email, message].forEach(function (field) {
      if (field && !field.value.trim()) {
        field.style.borderColor = '#C0392B';
        valid = false;
      } else if (field) {
        field.style.borderColor = '';
      }
    });

    if (!valid) return;

    var texte =
      'Bonjour Organisation Horizon,%0A%0A' +
      'Nom : ' + encodeURIComponent(name.value.trim()) + '%0A' +
      'Email : ' + encodeURIComponent(email.value.trim()) + '%0A%0A' +
      'Message :%0A' + encodeURIComponent(message.value.trim());

    var lienWhatsApp = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + texte;

    window.open(lienWhatsApp, '_blank');

    contactForm.reset();
  });
}

});

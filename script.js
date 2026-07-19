const navToggle = document.getElementById('navToggle');
const headerNav = document.querySelector('.header__nav');

navToggle.addEventListener('click', function () {
  const menuİsOpen = headerNav.classList.contains('is-open');

  if (menuİsOpen) {
    headerNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  } else {
    headerNav.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
  }
});

const navLinks = document.querySelectorAll('.header__nav-link');

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    headerNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const galleryImages = document.querySelectorAll('.gallery__card-image');

galleryImages.forEach(function (imageWrap) {
  imageWrap.addEventListener('click', function () {
    const card = imageWrap.closest('.gallery__card');
    const details = card.querySelector('.gallery__card-details');
    details.classList.toggle('is-visible');
  });
});
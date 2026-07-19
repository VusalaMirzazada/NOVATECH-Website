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

const contactForm = document.querySelector('.contact__form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  const fullName = document.getElementById('fullName');
  const fullNameError = document.getElementById('fullNameError');
  if (fullName.value.trim() === '') {
    fullNameError.textContent = 'Bu sahə boş buraxıla bilməz';
    isValid = false;
  } else {
    fullNameError.textContent = '';
  }

  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  if (email.value.trim() === '') {
    emailError.textContent = 'Bu sahə boş buraxıla bilməz';
    isValid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.textContent = 'Zəhmət olmasa düzgün email daxil edin';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  const subject = document.getElementById('subject');
  const subjectError = document.getElementById('subjectError');
  if (subject.value === '') {
    subjectError.textContent = 'Zəhmət olmasa mövzu seçin';
    isValid = false;
  } else {
    subjectError.textContent = '';
  }

  const message = document.getElementById('message');
  const messageError = document.getElementById('messageError');
  if (message.value.trim() === '') {
    messageError.textContent = 'Bu sahə boş buraxıla bilməz';
    isValid = false;
  } else {
    messageError.textContent = '';
  }

  const formStatus = document.getElementById('formStatus');
  if (isValid) {
    formStatus.textContent = 'Mesajınız uğurla göndərildi!';
    formStatus.className = 'contact__status success';
    contactForm.reset();
  } else {
    formStatus.textContent = 'Zəhmət olmasa xətaları düzəldin';
    formStatus.className = 'contact__status error';
  }
});


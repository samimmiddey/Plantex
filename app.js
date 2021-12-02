// Navbar
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('#header');

openBtn.addEventListener('click', () => {
   navMenu.style.right = '0%';
});

closeBtn.addEventListener('click', () => {
   navMenu.style.right = '-100%';
});

// Show Header Box Shadow
window.addEventListener('scroll', () => {
   if(scrollY >= 80) {
      header.classList.add('scroll-header');
   } else {
      header.classList.remove('scroll-header');
   }
});

// Border-bottom
navMenu.addEventListener('click', (e) => {
   if (e.target.classList.contains('nav-link')) {
      navLinks.forEach(navLink => {
         navLink.classList.remove('border-bottom');
      });
      e.target.classList.add('border-bottom');
      navMenu.style.right = '-100%';
   }
})

// FAQs
const questionCards = document.querySelectorAll('.question-card');

questionCards.forEach(card => {
   card.addEventListener('click', (e) => {
      if(e.target.classList.contains('fa-plus')) {
         card.classList.toggle('active');
         e.target.classList.toggle('fa-times');
      }
   });
});

// Scroll Box
window.addEventListener('scroll', () => {
   const scrollBox = document.querySelector('.scroll-box');
   if (this.scrollY >= 200) {
      scrollBox.style.bottom = '5%';
   } else {
      scrollBox.style.bottom = '-30%';
   }

   scrollBox.addEventListener('click', () => {
      document.documentElement.scrollTop = 0;
   });
});

// Dark Mode
const darkModeBtn = document.querySelector('.fa-moon');
const darkIcon = 'fa-sun';
const lightIcon = 'fa-moon';

darkModeBtn.addEventListener('click', (e) => {
   if (darkModeBtn.classList.contains(darkIcon)) {
      document.body.classList.remove('dark-theme');
      darkModeBtn.classList.remove(darkIcon);
      darkModeBtn.classList.add(lightIcon);
   } else {
      document.body.classList.add('dark-theme');
      darkModeBtn.classList.remove('fa-moon');
      darkModeBtn.classList.add(darkIcon);
   }

   const themeIcon = darkModeBtn.classList[1];

   localStorage.setItem('darkMode', themeIcon);
});

// Setting Theme to Local Storage
function storingTheme(themeIcon) {
   if(themeIcon === 'fa-sun') {
      document.body.classList.add('dark-theme');
      darkModeBtn.classList.remove(lightIcon);
      darkModeBtn.classList.add(darkIcon);
   } else if(themeIcon === 'fa-moon') {
      document.body.classList.remove('dark-theme');
      darkModeBtn.classList.remove(darkIcon);
      darkModeBtn.classList.add(lightIcon);
   }
}

storingTheme(localStorage.getItem('darkMode'));

// Animation
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 200
});

// Reveal Elements
sr.reveal('.home-text');
sr.reveal('.home-img', {delay: 300});
sr.reveal('.social', {delay: 400});
// sr.reveal('.contact-form', {origin: 'right'});
sr.reveal('.about-card, .step-card, .product-card, .question-card, .contact-card, .address-logo, .address-grid-element', {interval: 100});

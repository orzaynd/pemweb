// script.js
let currentIndex = 0;

function slideImages() {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  currentIndex = (currentIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(slideImages, 3000);

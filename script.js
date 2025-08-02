const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

const slideWidth = 1920; // px

function updateSlide() {
  track.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
});

// Otomatik geçiş (5 saniye)
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}, 5000);

// İlk gösterim
updateSlide();

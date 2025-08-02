let currentIndex = 0;
const track = document.getElementById('sliderTrack');
const totalSlides = track.children.length;

function updateSlide() {
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// Otomatik geçiş: her 5 saniyede bir ileri kaydır
setInterval(nextSlide, 5000);

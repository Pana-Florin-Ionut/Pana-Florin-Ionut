let currentIndex = 0;

function showSlide(index) {
  const container = document.querySelector(".carousel-images");
  if (!container) return;

  const slides = container.querySelectorAll("img");
  const totalSlides = slides.length;

  if (totalSlides === 0) return;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  container.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});

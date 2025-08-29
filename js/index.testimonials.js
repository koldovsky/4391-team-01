const track = document.querySelector(".testimonials__track");
const slides = Array.from(document.querySelectorAll(".testimonials__card"));
const prevBtn = document.querySelector(".testimonials__arrow--prev");
const nextBtn = document.querySelector(".testimonials__arrow--next");

let index = 0;
let animating = false;

// --- клонування для нескінченної каруселі ---
function setupSlides() {
  const first = slides[0].outerHTML;
  const last = slides[slides.length - 1].outerHTML;
  track.innerHTML = last + slides.map((s) => s.outerHTML).join("") + first;
  index = 0;
  updatePosition(false);
}

// --- отримати ширину слайда з урахуванням gap ---
function getSlideWidth() {
  const slide = track.querySelector(".testimonials__card");
  const style = getComputedStyle(track);
  const gap = parseInt(style.columnGap ) || 0;
  return slide.offsetWidth + gap;
}

// --- оновлення позиції ---
function updatePosition(animate = true) {
  const slideWidth = getSlideWidth();
  if (!animate) {
    track.style.transition = "none";
  } else {
    track.style.transition = "transform 0.5s ease-in-out";
  }
  track.style.transform = `translateX(-${(index + 1) * slideWidth}px)`;
}

// --- рух ---
function move(dir) {
  if (animating) return;
  animating = true;

  index += dir;
  updatePosition(true);

  setTimeout(() => {
    if (index < 0) {
      index = slides.length - 1;
      updatePosition(false);
    } else if (index >= slides.length) {
      index = 0;
      updatePosition(false);
    }
    animating = false;
  }, 600);
}

// --- слухачі ---
prevBtn.addEventListener("click", () => move(-1));
nextBtn.addEventListener("click", () => move(1));
window.addEventListener("resize", () => updatePosition(false));

// --- ініціалізація ---
setupSlides();

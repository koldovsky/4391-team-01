const slides = [
  '<div class="carousel__slide"><img src="img/index-benefits/carousel-benefits-1.webp" alt="Modern office"/></div>',
  '<div class="carousel__slide"><img src="img/index-benefits/carousel-benefits-2.webp" alt="Installing server"/></div>',
  '<div class="carousel__slide"><img src="img/index-benefits/carousel-benefits-3.webp" alt="Server room"/></div>',
  '<div class="carousel__slide"><img src="img/index-benefits/carousel-benefits-4.webp" alt="IT specialists"/></div>',
];

let currentSlideIdx = 0;

function showSlide(index) {
    const track = document.querySelector(".carousel__track");
    track.innerHTML = slides[index];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = (index + 1) % slides.length;
        track.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 990px)').matches) {
          const thirdSlideIdx = (index + 2) % slides.length;
          track.innerHTML += slides[thirdSlideIdx];
        }
    }
}

function nextSlide() {
  currentSlideIdx = (currentSlideIdx + 1) % slides.length;
  showSlide(currentSlideIdx);
}
function prevSlide() {
  currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
  showSlide(currentSlideIdx);
}

showSlide(currentSlideIdx);


const btnNext = document.querySelector(".carousel__btn--next");
const btnPrev = document.querySelector(".carousel__btn--prev");
btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

window.addEventListener('resize', () => {
    showSlide(currentSlideIdx);
});
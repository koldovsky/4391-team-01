const slides = [
    '<div class="carousel__slide"><img src="../img/footer-carousel/colorful-sands.jpg" alt="Colorful sands" /></div>',
    '<div class="carousel__slide"><img src="../img/footer-carousel/rusty-car.jpg" alt="Rusty car" /></div>',
    '<div class="carousel__slide"><img src="../img/footer-carousel/screaming-face.jpg" alt="Screaming face" /></div>',
    '<div class="carousel__slide"><img src="../img/footer-carousel/three-toed-sloth.jpg" alt="Three toed sloth" /></div>',
    '<div class="carousel__slide"><img src="../img/footer-carousel/toilet-paper.jpg" alt="Toilet Paper" /></div>',
    '<div class="carousel__slide"><img src="../img/footer-carousel/woman-legs-on-car-deck.jpg" alt="Woman legs on car deck.jpg" /></div>',
]

let currentSlideIdx = 0;

function showSlide(index) {
    const track = document.querySelector(".slide-carousel__track");
    track.innerHTML = slides[index];

    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlide = (index - 1 + slides.length) % slides.length;
        track.innerHTML += slides[secondSlide];
    }
}

function nextSlide() {
    currentSlideIdx = (currentSlideIdx + 1) % slides.length;
    showSlide(currentSlideIdx);
}

function prevSlide() {
    currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
    console.log(currentSlideIdx);
    showSlide(currentSlideIdx);
}


// show first slide immediately
showSlide(currentSlideIdx);
// setInterval(nextSlide, 3000);

const btnNext = document.querySelector(".carousel__button--next");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".carousel__button--prev");
btnPrev.addEventListener("click", prevSlide);
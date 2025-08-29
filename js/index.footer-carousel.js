const slides = [
    "img/footer-carousel/colorful-sands.jpg",
    "img/footer-carousel/rusty-car.jpg",
    "img/footer-carousel/screaming-face.jpg",
    "img/footer-carousel/three-toed-sloth.jpg",
    "img/footer-carousel/toilet-paper.jpg",
    "img/footer-carousel/woman-legs-on-car-deck.jpg"
];

let currentSlideIdx = 0;
const track = document.querySelector(".slide-carousel__track");

// build DOM once
slides.forEach((src, i) => {
    const div = document.createElement("div");
    div.className = "carousel__slide";
    div.innerHTML = `<img src="${src}" alt="Slide ${i + 1}">`;
    track.appendChild(div);
});

function updateCarousel() {
    const slideWidth = track.querySelector(".carousel__slide").offsetWidth + 20; // +gap
    track.style.transform = `translateX(-${currentSlideIdx * slideWidth}px)`;
}

function footerCarouselNextSlide() {
    currentSlideIdx = (currentSlideIdx + 1) % slides.length;
    updateCarousel();
}

function footerCarouselPrevSlide() {
    currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
    updateCarousel();
}

// auto play
setInterval(footerCarouselNextSlide, 3000);

document.querySelector(".carousel__button--next")
    .addEventListener("click", footerCarouselNextSlide);

document.querySelector(".carousel__button--prev")
    .addEventListener("click", footerCarouselPrevSlide);

// initialize
updateCarousel();
window.addEventListener("resize", updateCarousel);

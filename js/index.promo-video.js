const playBtn = document.querySelector(".promo-video__play-btn");
const closeBtn = document.querySelector(".promo-video__close-btn");
const modal = document.querySelector(".promo-video__modal");
const overlay = document.querySelector(".promo-video__overlay");

function modalWindowShow() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function modalWindowClose() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

playBtn.addEventListener("click", modalWindowShow);
closeBtn.addEventListener("click", modalWindowClose);
overlay.addEventListener("click", modalWindowClose);

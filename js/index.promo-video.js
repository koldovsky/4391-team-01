const playBtn = document.querySelector(".promo-video__play-btn");
const closeBtn = document.querySelector(".promo-video__close-btn");
const modal = document.querySelector(".promo-video__modal");
const overlay = document.querySelector(".promo-video__overlay");

playBtn.addEventListener("click", () => {
  modal.style.display = "block";
  overlay.style.display = "block";
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

// клік по overlay теж закриває модалку
overlay.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

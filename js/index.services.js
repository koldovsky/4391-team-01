function initImages() {
  const images = document.querySelectorAll(".workloads_img, .migrating_img, .migrations_img, .cloud_img");

  images.forEach(img => {
    img.style.transition = "transform 0.3s ease, filter 0.3s ease";

    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });

  let step = 0;
  setInterval(() => {
    images.forEach(img => {
      const brightness = 1 + Math.sin(step / 30) * 0.15;
      img.style.filter = `brightness(${brightness})`;
    });
    step++;
  }, 50);
}

// Перевіряємо, чи документ уже готовий
if (document.readyState === "loading") {
  // якщо ще завантажується, чекаємо події
  document.addEventListener("DOMContentLoaded", initImages);
} else {
  // якщо вже готовий, запускаємо одразу
  initImages();
}

const cards = document.querySelectorAll(".features__box");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => {
      c.style.backgroundColor = "#0a0e1b";
      c.style.color = "#ffffff";
    });

    card.style.backgroundColor = "#0e2e3dff";
    card.style.color = "#ffffff";
  });
});

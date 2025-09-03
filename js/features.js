const cards = document.querySelectorAll(".features__box");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "#000000ff";
    card.style.color = "#ffffff";
  });

  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "#0a0e1b"; 
    card.style.color = "#ffffff";
  });
});



(function () {
  const cards = document.querySelectorAll('.step');
  if (!cards.length) return;

  let current = 0;

  function showNext() {
    cards.forEach((card, i) => {
      card.classList.toggle('is-active', i === current);
    });

    current = (current + 1) % cards.length;
  }

  showNext(); // показати першу
  setInterval(showNext, 3000); // кожні 3 секунди
})();

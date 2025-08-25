const footerText = document.querySelector(".footer__text");

const originalText = footerText.innerText;

const jokes = [
    "Ти знайшов секретний футер! 🤫",
    "Футер теж любить, коли на нього дивляться 👀",
    "Не натискай сюди... ой, запізно 😅",
    "Тут могла бути ваша реклама 📢",
    "Хей! Я футер, а не підлогa 🧹"
];

function showJokeOnce() {
    footerText.innerText = jokes[Math.floor(Math.random() * jokes.length)];
    // після першого кліку — більше не слухаємо
    footerText.removeEventListener("click", showJokeOnce);
}

// один раз по кліку
footerText.addEventListener("click", showJokeOnce);

// по double click повертаємо оригінал
footerText.addEventListener("dblclick", () => {
    footerText.innerText = originalText;

    // якщо хочеш — знову можна дозволити 1 клік міняти
    footerText.addEventListener("click", showJokeOnce);
});
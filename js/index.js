function init() {
    import("./global.header-burger.js");
    import("./testimonials.index.js");
    import("./index.footer-easter-egg.js");
    import("./index.footer-carousel.js");
}

const totalPartials = document.querySelectorAll(
    '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});

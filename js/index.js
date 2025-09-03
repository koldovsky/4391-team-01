function init() {
    import("./global.header-burger.js");
    import('./global.sticky-header.js')
    import("./features.js");
    import("./index.services.js");
    import("./index.benefits-carousel.js");
    import("./index.testimonials.js");
    import("./index.promo-video.js");
    import("./index.footer-easter-egg.js");
    import("./index.footer-carousel.js");
    import("./index.footer-newsletter-form.js")
    import("./index.footer-carousel.js");
    import("./index.footer-newsletter-form.js")
    import("./index.steps-gradient.js")

}

const totalPartials = document.querySelectorAll(
    '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});

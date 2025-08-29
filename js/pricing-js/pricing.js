function init() {
  import("./pricing.main.info.partial.js");
  import("./pricing.custom-plan-list.js");
  import("../global.header-burger.js");
  import("./theme-toggle.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

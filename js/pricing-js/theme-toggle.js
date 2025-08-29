(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");

  function getTheme() {
    return root.getAttribute("data-theme") || "system";
  }
  function setTheme(mode) {
    root.setAttribute("data-theme", mode);
  }

  btn.addEventListener("click", () => {
    const mode = getTheme();
    setTheme(mode === "dark" ? "light" : "dark");
  });

  const saved = localStorage.getItem("theme") || "system";
  setTheme(saved);
})();

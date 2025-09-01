(function () {
  const nav = document.querySelector(".header-nav__wrapper");
  let lastScrollTop = window.scrollY;

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      nav.classList.add("scrolling");
    } else {
      nav.classList.remove("scrolling");
    }
    if (scrollTop >= 150 && scrollTop > lastScrollTop) {
      nav.classList.add("hidden-bar");
    } else if (scrollTop < lastScrollTop) {
      nav.classList.remove("hidden-bar");
    }
    lastScrollTop = scrollTop;
  });
})();

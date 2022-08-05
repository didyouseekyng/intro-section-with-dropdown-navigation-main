const openMenu = document.querySelectorAll(".snap-header__open-menu");
const nav = document.querySelectorAll(".snap-nav");
const closeMenu = document.querySelectorAll(".snap-nav__close-menu");
const features = document.querySelectorAll(".features-container");
const company = document.querySelectorAll(".company-container");

openMenu[0].addEventListener("click", () => {
  if (nav[0].classList.contains("inactive")) {
    nav[0].classList.remove("inactive");
    nav[0].classList.add("active");
  }
});

closeMenu[0].addEventListener("click", () => {
  if (nav[0].classList.contains("active")) {
    nav[0].classList.remove("active");
    nav[0].classList.add("inactive");
  }
});

features[0].addEventListener("click", () => {
  features[0].classList.toggle("expand");
});

company[0].addEventListener("click", () => {
  company[0].classList.toggle("expand");
});

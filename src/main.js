
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

console.log(navToggle);

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
})
// Nav menu active

const navMenu = document.getElementById("nav-bar");
const navToggle = document.getElementById("menu-bar");
const menuActive = document.getElementById("menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("nav-active");
    menuActive.classList.add("active");
  });
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("nav-active");
    menuActive.classList.remove("active");
  })
);

const menuClose = document.getElementById("menu-close");
if (navToggle) {
  menuClose.addEventListener("click", () => {
    menuActive.classList.remove("active");
    navMenu.classList.remove("nav-active");
  });
}

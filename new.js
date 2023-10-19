const hamburger = document.querySelector(".hamburger");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");
const navMenu = document.querySelector(".nav-items");
const navIcon = document.querySelectorAll(".navIcon");
const body = document.querySelector("main");

navToggle.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  navIcon.forEach((icon) => {
    icon.classList.toggle("close");
    return;
  });
});

document.querySelectorAll(".nav-items").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navMenu.classList.toggle("close");
  })
);

//this implements the hamburger menu for smaller screens
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle("open");
});

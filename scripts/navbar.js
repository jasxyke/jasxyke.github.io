const mobileNavbar = document.querySelector(".mobile-nav");
const xIcon = document.querySelector(".x-icon");
const hamuberMenu = document.querySelector(".menu");

console.log("ey yo");

function openNavbar() {
  mobileNavbar.style.width = "100%";
}

function closeNavbar() {
  mobileNavbar.style.width = "0";
  console.log("eyy");
}

xIcon.addEventListener("click", closeNavbar);
hamuberMenu.addEventListener("click", openNavbar);

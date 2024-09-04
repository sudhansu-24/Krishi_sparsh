'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}





/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});

const text1 = document.querySelector(".about-section-text");

document.querySelector(".mission").addEventListener("click",()=>{
  document.querySelector(".mission").classList.add("active");
  document.querySelector(".vision").classList.remove("active");
  document.querySelector(".plan").classList.remove("active");
  text1.innerHTML = "Mission: Empowering farmers and buyers with a digital platform for transparent, efficient, and profitable partnerships through smart contracts and localized solutions."
})

const text2 = document.querySelector(".about-section-text");

document.querySelector(".vision").addEventListener("click",()=>{
  document.querySelector(".vision").classList.add("active");
  document.querySelector(".mission").classList.remove("active");
  document.querySelector(".plan").classList.remove("active");
  text2.innerHTML = "Vision: Uplifting India's farmers by educating them on the latest agricultural technologies, increasing income, and promoting sustainable farming for a prosperous future."
})

const text3 = document.querySelector(".about-section-text");

document.querySelector(".plan").addEventListener("click",()=>{
  document.querySelector(".plan").classList.add("active");
  document.querySelector(".vision").classList.remove("active");
  document.querySelector(".mission").classList.remove("active");
  text3.innerHTML = "plan"
})
//opem menu script
const burgerButton = document.querySelector(".header__burger");
const mainMenu = document.querySelector(".menu__list");
const pageBody = document.querySelector(".page__body");
let imageList = document.querySelectorAll(".carusel__item");

console.log(mainMenu);
function openMenu() {
  burgerButton.classList.toggle("open");
  mainMenu.classList.toggle("open");
  pageBody.classList.toggle("no-scroll");
}
burgerButton.addEventListener("click", openMenu);






const burgerButton = document.querySelector(".burger-btn");
const menu = document.querySelector(".menu");
const closeMenuButton = document.querySelector(".close-btn");

function openMenu(){
    menu.classList.add("active");
}
function closeMenu(){
    menu.classList.remove("active");
}
burgerButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
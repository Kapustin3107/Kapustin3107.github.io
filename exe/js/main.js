//adaptive images function
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

//burger menu open
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const closeButton = document.querySelector(".menu__close");
//open menu function
function openMenu() {
  menu.classList.add("active");
  body.classList.add("blocked");
}
burger.addEventListener("click", openMenu);
//close manu function
function closeMenu() {
  menu.classList.remove("active");
  body.classList.remove("blocked");
}
closeButton.addEventListener("click", closeMenu);
//main slider
$(document).ready(function () {
  $(".hero__slider").slick({
    arrows: true,
    autoplay: true,
  });
});
//brands slider
$(document).ready(function () {
  $(".brands__slider").slick({
    autoplay: true,
    slidesToShow: 5,
    mobileFirst: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
//item gallery preview
$(document).ready(function () {
  $(".item__slider").slick({
    asNavFor: ".item__thumbnails",
    fade: true,
    arrows: false,
    draggable: false,
  });
});
$(document).ready(function () {
  $(".item__thumbnails").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: ".item__slider",
    focusOnSelect: true,
    draggable: false,
  });
});

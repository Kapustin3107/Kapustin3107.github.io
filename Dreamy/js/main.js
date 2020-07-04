//adaptive images
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

//slick slider
$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    dots: true,
  });
});
//burger script
const burger = document.querySelector(".menu__burger");
const menyWrapper = document.querySelector(".menu__wrapper");
const btnClose = document.querySelector(".close__btn");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
  menyWrapper.classList.add("active");
  body.classList.add("no-scroll");
});
btnClose.addEventListener("click", function () {
  menyWrapper.classList.remove("active");
  body.classList.remove("no-scroll");
});
//carusel
$(document).ready(function () {
  $(".carusel").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

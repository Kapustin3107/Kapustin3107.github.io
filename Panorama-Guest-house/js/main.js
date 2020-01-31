function ibg(){

document.querySelectorAll(".ibg").forEach(el => {
if(el.querySelector('img')){
el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
}
});
}

ibg();


$(document).ready(function(){
  $('.index__slider').slick({
    
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    infinite: true,
    slidesPerRow: 1,
    fade: true,
    pauseOnHover: false
  });
});
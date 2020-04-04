function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
ibg();


$(document).ready(function(){
    $('.menu__btn').click(function(event){
        $('.header__list').addClass('active');
        //$('body').addClass('lock');
    });
    $('.close__btn').click(function(event){
        $('.header__list').removeClass('active');
    });
});
// $(document).ready(function(){
//     $('.menu__item').click(function(event){
//         $('body').removeClass('lock');
//     });
// });

$(document).ready(function(){
    $('.header__booking').click(function(event){
        $('.header__form').addClass('pop');
    });
});
$(document).ready(function(){
    $('.form__close').click(function(event){
        $('.header__form').removeClass('pop');
    });
});






//tabs lifehack
$(document).ready(function(){
    $('.tabs__item').click(function(event){
        $('.tabs__block').removeClass('showed');
    });
   
});




//////slick
$(document).ready(function(){
    $('.tabs__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
  });



  //google maps api
 
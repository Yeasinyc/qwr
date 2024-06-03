$(function(){
    
    $('.slick-parent').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<span class="left"><i class="fa-solid fa-arrow-left"></i></i></span>',
    nextArrow: '<span class="right"><i class="fa-solid fa-arrow-right"></i></i></span>'
    });
});
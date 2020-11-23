$(document).ready(function(){
    $('.slider_user').slick({
        arrows:true, //стрелки
        slidesToShow:5,
        slidesToScroll:1,
        speed:1000,
        easing:'linear',
        infinite:true,
        draggable:false,
        centerMode:true,
        variableWidth:true,
        asNavFor:'.slider_comment',

    });
    $('.slider_comment').slick({
        arrows:false,
        fade:true,
        asNavFor:'.slider_user',
        adaptiveHeight:true
    });
})
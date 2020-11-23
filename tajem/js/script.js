$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3
    });

    $("#about-btn_player").on('click', function() {
        let video = $("video"),
            blockPlayer = $('.about-player');
        blockPlayer.toggleClass('active');
        (video.get(0).paused) ? video.get(0).play() : video.get(0).pause();

    });

    $('.rev_slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
    });

    $('.icon-menu').on('click',function(){
       this.classList.toggle('active');
       $('.menu-resize').toggleClass('active');
       $('.header').toggleClass('active');
       $('.content').toggleClass('hide');
    })
});

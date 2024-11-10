$(document).ready(function(){
    $('.call-menu, .close-menu').on('click', function (){
        $('nav').toggleClass('active-menu');
    });
    $('.accordeon .acc-head').on('click', f_acc);
    function f_acc(){
        $('.accordeon .acc-body').not($(this).next()).slideUp(250).siblings('.acc-head').removeClass('active');
        $(this).toggleClass('active').next().slideToggle(250);
    }
    var btn = $('.scroll-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
    $('.unchor li').on('click',function (event) {
        event.preventDefault();
        var id  = $(this).attr('data-href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.table-of-content__btn').on('click', function (e){
        $(this).toggleClass('active-btn');
        $('.table-of-content__list').slideToggle(200);
    });
})
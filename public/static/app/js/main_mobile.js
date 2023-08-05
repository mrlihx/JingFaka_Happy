$(function () {
    $('.nav_btn').click(function () {
        $(this).children('i').toggle();
        $(this).toggleClass('nav_btn_on');
        $('.main_shadow ul').toggleClass('animated fadeInUp');
        $('.main_shadow').fadeToggle('fast');
    });
});

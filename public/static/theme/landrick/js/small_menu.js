//Smooth scroll
$('.navigation-menu a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 2000, 'easeInOutExpo');
    event.preventDefault();
});

//Scrollspy
$("#navigation").scrollspy({
    offset: 50
});
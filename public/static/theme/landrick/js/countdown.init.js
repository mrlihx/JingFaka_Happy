//countdown.init.js
$('#countdown').countdown('2020/12/25', function(event) {
var $this = $(this).html(event.strftime(''
    + '<div class="count-down"> <span class="count-number">%D</span> <span class="count-head position-relative d-block">Days</span></div> '
    + '<div class="count-down"> <span class="count-number">%H</span> <span class="count-head position-relative d-block">Hours</span></div> '
    + '<div class="count-down"> <span class="count-number">%M</span> <span class="count-head position-relative d-block">Minutes</span></div> '
    + '<div class="count-down"> <span class="count-number">%S</span> <span class="count-head position-relative d-block">Seconds</span></div>'
    ));
});

$('#eventdown').countdown('2020/10/11', function(event) {
var $this = $(this).html(event.strftime(''
    + '<div class="count-down"> <span class="count-number">%D</span> <span class="count-head position-relative d-block">Days</span></div> '
    + '<div class="count-down"> <span class="count-number">%H</span> <span class="count-head position-relative d-block">Hours</span></div> '
    + '<div class="count-down"> <span class="count-number">%M</span> <span class="count-head position-relative d-block">Minutes</span></div> '
    + '<div class="count-down"> <span class="count-number">%S</span> <span class="count-head position-relative d-block">Seconds</span></div>'
    ));
});
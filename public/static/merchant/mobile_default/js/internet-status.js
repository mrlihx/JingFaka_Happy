(function ($) {
    'use strict';

    // :: Internet Connection Detect
    var internetStatus = $("#internetStatus"),
        onlineText = "Your internet connection is back",
        offlineText = "No Internet Connection!";

    if (window.navigator.onLine) {
        internetStatus.css("display", "none").text(onlineText).addClass("internet-is-back").removeClass("internet-is-lost");
    } else {
        internetStatus.css("display", "block").text(offlineText).addClass("internet-is-lost").removeClass("internet-is-back");
    }

    window.addEventListener('offline', function () {
        internetStatus.text(offlineText).addClass("internet-is-lost").removeClass("internet-is-back").fadeIn(500);
    });

    window.addEventListener('online', function () {
        internetStatus.text(onlineText).addClass("internet-is-back").removeClass("internet-is-lost").delay("5000").fadeOut(500);
    });

    $(".offline-detection").on("click", function () {
        internetStatus.text(offlineText).addClass("internet-is-lost").removeClass("internet-is-back").fadeIn(500).delay("3000").fadeOut(500);
    });

    $(".online-detection").on("click", function () {
        internetStatus.text(onlineText).addClass("internet-is-back").removeClass("internet-is-lost").fadeIn(500).delay("3000").fadeOut(500);
    });

})(jQuery);
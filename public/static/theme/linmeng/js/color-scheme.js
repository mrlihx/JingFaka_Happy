'use strict'
$(document).ready(function () {

    var html = $('html');
    var body = $('body');

    /* sidebar right color scheme */
    if ($.cookie("layoutmode") === 'dark-mode') {
        $('#btn-layout-modes-light').prop('checked', false);
        $('#btn-layout-modes-dark').prop('checked', true);
        $('#darkmodeswitch').prop('checked', true);
        html.addClass('dark-mode');
    } else {
        $('#btn-layout-modes-light').prop('checked', true);
        $('#btn-layout-modes-dark').prop('checked', false);
        html.removeClass('dark-mode');
    }

    $('#btn-layout-modes-light').on('click', function () {
        if ($(this).is(':checked')) {
            $.cookie("layoutmode", "light-mode", {
                expires: 1
            });
            html.attr('class', $.cookie("layoutmode"));
        } else {
        }
    });

    $('#btn-layout-modes-dark').on('click', function () {
        if ($(this).is(':checked')) {
            $.cookie("layoutmode", "dark-mode", {
                expires: 1
            });
            html.attr('class', $.cookie("layoutmode"));
        } else {
        }
    });


    $('#darkmodeswitch').on('click', function () {
        if ($(this).is(':checked')) {
            $.cookie("layoutmode", "dark-mode", {
                expires: 1
            });
            html.attr('class', $.cookie("layoutmode"));
        } else {
            $.cookie("layoutmode", "light-mode", {
                expires: 1
            });
            html.attr('class', $.cookie("layoutmode"));
        }
    });

    /* Right to left to right directions  */
    if ($.cookie("directionmode") === 'rtl') {
        $('#btn-ltr').prop('checked', false);
        $('#btn-rtl').prop('checked', true);
        body.addClass('rtl');

        $('.bi-chevron-right').addClass('bi-chevron-left').removeClass('bi-chevron-right')
        $('.bi-arrow-right').addClass('bi-arrow-left').removeClass('bi-arrow-right')
        $('.bi-arrow-left').addClass('bi-arrow-right').removeClass('bi-arrow-left')

    } else {
        $('#btn-ltr').prop('checked', true);
        $('#btn-rtl').prop('checked', false);
        body.removeClass('rtl');
    }

    $('#btn-ltr').on('click', function () {
        if ($(this).is(':checked')) {
            $.cookie("directionmode", "ltr", {
                expires: 1
            });
            body.addClass('ltr');
            body.removeClass('rtl');
        } else {
        }
    });

    $('#btn-rtl').on('click', function () {
        if ($(this).is(':checked')) {
            $.cookie("directionmode", "rtl", {
                expires: 1
            });
            body.addClass('rtl');
            body.removeClass('ltr');
        } else {
        }
    });



    /* color style  */
    var curentstyle;
    if ($.type($.cookie("setstylesheet")) != 'undefined' && $.cookie("setstylesheet") != '') {
        curentstyle = $.cookie("setstylesheet");
        $('body').addClass($.cookie("setstylesheet"));
        $('input[name="color-scheme"]').each(function () {
            if ($(this).attr('data-title') === $.cookie("setstylesheet")) {
                $(this).prop("checked", true);
            }
        });
      
    }

    $('input[name="color-scheme"]').on('click', function () {
        var setstyle = $(this).attr('data-title');        
        $('body').removeClass(curentstyle);

        if ($(this).is(':checked') && setstyle != '') {
            $.cookie("setstylesheet", setstyle, {
                expires: 1
            });
            $('body').addClass($.cookie("setstylesheet"));            
            curentstyle = $.cookie("setstylesheet");
            
        } else {
            $('body').removeClass(curentstyle);
            $.cookie("setstylesheet", "", {
                expires: 1
            });
        }

    });


    /* background images */
    if ($.type($.cookie("setimagepath")) != 'undefined' && $.cookie("setimagepath") != '') {
        $('.dark-bg').css('background-image', "url('assets/img/" + $.cookie("setimagepath") + "')");
        $('input[name="background-select"]').each(function () {
            if ($(this).attr('data-src') === $.cookie("setimagepath")) {
                $(this).prop("checked", true);
            }
        });
    }
    $('input[name="background-select"]').on('click', function () {
        var setimage = $(this).attr('data-src');
        if ($(this).is(':checked')) {
            $.cookie("setimagepath", setimage, {
                expires: 1
            });
            $('.dark-bg').css('background-image', "url('assets/img/" + setimage + "')");
        }
    });

    /* sidebar type */
    if ($.type($.cookie("setmenu")) != 'undefined' && $.cookie("setmenu") != '') {
        $('.sidebar-wrap').attr('class', 'sidebar-wrap');
        $('.sidebar-wrap').addClass('sidebar-' + $.cookie("setmenu"));

        $('input[name="menu-select"]').each(function () {
            if ($(this).attr('data-title') === $.cookie("setmenu")) {
                $(this).prop("checked", true);
            }
        });
    }
    $('input[name="menu-select"]').on('click', function () {
        var setmenustyle = $(this).attr('data-title');
        if ($(this).is(':checked')) {
            $.cookie("setmenu", setmenustyle, {
                expires: 1
            });
            $('.sidebar-wrap').attr('class', 'sidebar-wrap');
            $('.sidebar-wrap').addClass('sidebar-' + $.cookie("setmenu"));
        }
    });



    /* RTL layout layout */
    if ($.type($.cookie("rtllayout")) != 'undefined' && $.cookie("rtllayout") != '') {
        $('#rtllayout').prop("checked", true);
        $('#rtllayout').parent().addClass('active');
        $('body').addClass($.cookie("rtllayout"));
    } else {
        $('#rtllayout').parent().removeClass('active');
        $('#rtllayout').prop("checked", false);
        $.removeCookie("rtllayout", "");
    }

    $('#rtllayout').on('click', function () {
        $(this).parent().addClass('active');
        if ($(this).is(':checked')) {
            $.cookie("rtllayout", 'rtl', {
                expires: 1
            });
            $('body').addClass('rtl');
            $('#rtllayout').parent().addClass('active');

        } else {
            $.removeCookie("rtllayout", "");
            $('body').removeClass('rtl');
            $('#rtllayout').parent().removeClass('active');
        }
    });
});
(function ($) {
    'use strict';
    $(function () {
        var body = $('body');
        var contentWrapper = $('.content-wrapper');
        var scroller = $('.container-scroller');
        var footer = $('.footer');
        var sidebar = $('.sidebar');

        //Add active class to nav-link based on url dynamically
        //Active class can be hard coded directly in html file also as required

        function addActiveClass(element) {
            if (current === "") {
                //for root url
                if (element.attr('href').indexOf("index.html") !== -1) {
                    element.parents('.nav-item').last().addClass('active');
                    if (element.parents('.sub-menu').length) {
                        element.closest('.collapse').addClass('show');
                        element.addClass('active');
                    }
                }
            } else {
                //for other url

                if (element.attr('href').indexOf(current) !== -1) {
                    element.parents('.nav-item').last().addClass('active');
                    if (element.parents('.sub-menu').length) {
                        element.closest('.collapse').addClass('show');
                        element.addClass('active');
                    }
                    if (element.parents('.submenu-item').length) {
                        element.addClass('active');
                    }
                }
            }
        }

        //  var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
        var current = location.pathname;

        $('.nav li a', sidebar).each(function () {
            var $this = $(this);
            addActiveClass($this);
        })

        $('.horizontal-menu .nav li a').each(function () {
            var $this = $(this);
            addActiveClass($this);
        })

        //Close other submenu in sidebar on opening any

        sidebar.on('show.bs.collapse', '.collapse', function () {
            sidebar.find('.collapse.show').collapse('hide');
        });


        //Change sidebar and content-wrapper height
        applyStyles();

        function applyStyles() {
            //Applying perfect scrollbar
            if (!body.hasClass("rtl")) {
                if ($('.settings-panel .tab-content .tab-pane.scroll-wrapper').length) {
                    const settingsPanelScroll = new PerfectScrollbar('.settings-panel .tab-content .tab-pane.scroll-wrapper');
                }
                if ($('.chats').length) {
                    const chatsScroll = new PerfectScrollbar('.chats');
                }
                if (body.hasClass("sidebar-fixed")) {
                    var fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
                }
            }
        }

        $('[data-toggle="minimize"]').on("click", function () {
            if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
                body.toggleClass('sidebar-hidden');
            } else {
                body.toggleClass('sidebar-icon-only');
            }
        });

        //checkbox and radios
        $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

//        //Horizontal menu in mobile
//        $('[data-toggle="horizontal-menu-toggle"]').on("click", function () {
//            $(".horizontal-menu .bottom-navbar").toggleClass("header-toggled");
//        });
//        // Horizontal menu navigation in mobile menu on click
//        var navItemClicked = $('.horizontal-menu .page-navigation >.nav-item');
//        navItemClicked.on("click", function (event) {
//            if (window.matchMedia('(max-width: 991px)').matches) {
//                if (!($(this).hasClass('show-submenu'))) {
//                    navItemClicked.removeClass('show-submenu');
//                }
//                $(this).toggleClass('show-submenu');
//            }
//        })

//        /* Fix the bottom navbar to top on scrolling */
//        var navbarStickyPoint = $('.bottom-navbar').offset().top;
//        $(window).scroll(function () {
//            if (window.matchMedia('(min-width: 992px)').matches) {
//                var header = $('.horizontal-menu');
//                if ($(window).scrollTop() > navbarStickyPoint) {
//                    $(header).addClass('fixed-on-scroll');
//                } else {
//                    $(header).removeClass('fixed-on-scroll');
//                }
//            }
//        });
    });
})(jQuery);




function ljmodel(content, confirm, noconfirm)
{
    swal({
        title: 'æç¤º',
        text: content,
        showCancelButton: true,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: 'Great ',
        buttons: {
            cancel: {
                text: "Cancel",
                value: null,
                visible: true,
                className: "btn btn-danger",
                closeModal: true,
            },
            confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "btn btn-primary",
                closeModal: true
            }
        }
    }).then(function (isConfirm) {
        if (isConfirm === true) {
            confirm();
        } else
        {
            noconfirm()
        }

    });
}


function ljdiymodel(title, content, confirm, noconfirm)
{
    swal({
        title: title,
        text: content,
        showCancelButton: true,
        confirmButtonColor: '#3f51b5',
        cancelButtonColor: '#ff4081',
        confirmButtonText: 'Great ',
        buttons: {
            cancel: {
                text: "Cancel",
                value: null,
                visible: true,
                className: "btn btn-danger",
                closeModal: true,
            },
            confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "btn btn-primary",
                closeModal: true
            }
        }
    }).then(function (isConfirm) {
        if (isConfirm === true) {
            confirm();
        } else
        {
            noconfirm()
        }

    });
}

function ljalert(title)
{
    swal({
        title: 'æç¤º!',
        text: title,
        button: {
            text: "å¥½çš„",
            value: true,
            visible: true,
            className: "btn btn-primary"
        }
    });
}
function ljalertback(title, fun)
{
    swal({
        title: 'æç¤º!',
        text: title,
        button: {
            text: "å¥½çš„",
            value: true,
            visible: true,
            className: "btn btn-primary"
        }
    }).then(
            function () {
                fun();
            }
    );
}

function ljdiyalert(header, title)
{
    swal({
        title: header,
        text: title,
        button: {
            text: "å¥½çš„",
            value: true,
            visible: true,
            className: "btn btn-primary"
        }
    });
}



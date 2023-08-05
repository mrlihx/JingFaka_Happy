(function ($) {
  'use strict';

  /*
  |--------------------------------------------------------------------------
  | Template Name: Enfhess
  | Author: ThemeMarch
  | Version: 1.0.0
  |--------------------------------------------------------------------------
  |--------------------------------------------------------------------------
  | TABLE OF CONTENTS:
  |--------------------------------------------------------------------------
  |
  | 1. Preloader
  | 2. Mobile Menu
  | 3. Sticky Header
  | 4. Dynamic Background
  | 5. Modal
  | 6. Image Upload
  | 7. General Toggle
  | 8. Slick Slider
  | 9. Isotop Initialize
  | 10. Modal Video
  | 11. Tabs
  | 12. Accordian
  | 13. CountDown
  | 14. Mode Switcher
  |
  */

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on('load', function () {
    $(window).trigger('scroll');
    $(window).trigger('resize');
    preloader();
    isotopInit();
  });

  $(function () {
    $(window).trigger('resize');
    mainNav();
    stickyHeader();
    dynamicBackground();
    imageUpload();
    generalToggle();
    slickInit();
    isotopInit();
    modalVideo();
    tabs();
    accordian();
    countDown();
    modeSwitcher();
    modal();
  });

  $(window).on('resize', function () {
    isotopInit();
  });

  $(window).on('scroll', function () {
    stickyHeader();
  });

  /*--------------------------------------------------------------
    1. Preloader
  --------------------------------------------------------------*/
  function preloader() {
    $('.cs-preloader').delay(150).fadeOut('slow');
  }

  /*--------------------------------------------------------------
    2. Mobile Menu
  --------------------------------------------------------------*/
  function mainNav() {
    $('.cs-nav').append('<span class="cs-munu_toggle"><span></span></span>');
    $('.menu-item-has-children').append(
      '<span class="cs-munu_dropdown_toggle"></span>'
    );
    $('.cs-munu_toggle').on('click', function () {
      $(this)
        .toggleClass('cs-toggle_active')
        .siblings('.cs-nav_list')
        .slideToggle();
    });
    $('.cs-munu_dropdown_toggle').on('click', function () {
      $(this).toggleClass('active').siblings('ul').slideToggle();
      $(this).parent().toggleClass('active');
    });
    // Mega Menu
    $('.cs-mega-wrapper>li>a').removeAttr('href');
    // Special Nav
    $('.cs-hamburger').on('click', function () {
      $(this).toggleClass('active');
      $('.cs-nav_wrap').toggleClass('active');
      $('body').toggleClass('hamburger_active');
    });
    $('.cs-nav_cross').on('click', function () {
      $('.cs-nav_wrap').removeClass('active');
      $('body').toggleClass('hamburger_active');
    });
    // Search Toggle
    $('.cs-search_toggle').on('click', function () {
      $(this).toggleClass('active');
      $('.cs-search_wrap').toggleClass('active');
    });
    $('.cs-search_close, .cs-nav_overlay').on('click', function () {
      $('.cs-search_toggle').removeClass('active');
      $('.cs-search_wrap').removeClass('active');
    });
    // Sub category Toggle
    $('.cs-subcategory_toggle').on('click', function () {
      $(this).toggleClass('active').siblings('ul').slideToggle();
    });

    // Smoth Animated Scroll
    $(".cs-smoth_scroll").on("click", function () {
      var thisAttr = $(this).attr("href");
      if ($(thisAttr).length) {
        var scrollPoint = $(thisAttr).offset().top - 120;
        $("body,html").animate(
          {
            scrollTop: scrollPoint,
          },
          600
        );
      }
      return false;
    });
  }

  /*--------------------------------------------------------------
    3. Sticky Header
  --------------------------------------------------------------*/
  function stickyHeader() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $('.cs-sticky-header').addClass('cs-sticky-active');
    } else {
      $('.cs-sticky-header').removeClass('cs-sticky-active');
    }
  }

  /*--------------------------------------------------------------
    4. Dynamic Background
  --------------------------------------------------------------*/
  function dynamicBackground() {
    $('[data-src]').each(function () {
      var src = $(this).attr('data-src');
      $(this).css({
        'background-image': 'url(' + src + ')',
      });
    });
  }

  /*--------------------------------------------------------------
    5. Modal
  --------------------------------------------------------------*/
  function modal() {
    $('[data-modal]').on('click', function(){
      var modalId = $(this).attr('data-modal');
      $(modalId).toggleClass('active')
    })
    $('.cs-modal_close').on('click', function() {
      $(this).parents('.cs-modal_wrap').removeClass('active')
    })
    $('.cs-modal_overlay').on('click', function() {
      $(this).parents('.cs-modal_wrap').removeClass('active')
    })
  }

  /*--------------------------------------------------------------
    6. Image Upload
  --------------------------------------------------------------*/
  function imageUpload() {
    $('.cs-file').change(function(e) { 
      $(this).parents('.cs-file_wrap').addClass('active')  
      var reader = new FileReader();
      reader.onload = function(e) {
        document.querySelector(".cs-preview").src = e.target.result;
      };
      reader.readAsDataURL(this.files[0]);
    });
    $('.cs-close_file').on('click', function() {
      $(this).parents('.cs-file_wrap').removeClass('active');
      $('.cs-file').val(null);
      $('.cs-preview').attr('src', '')
    })
  }

  /*--------------------------------------------------------------
    7. General Toggle
  --------------------------------------------------------------*/
  function generalToggle() {
    // Filter Toggle
    $('.cs-filter_toggle_btn').on('click', function() {
      $(this).toggleClass('active').siblings('.cs-filter_toggle_body').slideToggle();
    })
    // Color Filter active 
    $('.cs-color_item ').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active')
    })
    // Global Toggle 
    $('.cs-toggle_btn').on('click', function () {
      $(this).parents('.cs-toggle_box').siblings().find('.cs-toggle_btn').removeClass('active').siblings('.cs-toggle_body').removeClass('active')
      $(this)
        .toggleClass('active')
        .siblings('.cs-toggle_body')
        .toggleClass('active');
    });
    $('.cs-mobile_search_toggle').on('click', function() {
      $('.cs-search_wrap').toggleClass('active')
    })
  }


  /*--------------------------------------------------------------
    8. Slick Slider
  --------------------------------------------------------------*/
  function slickInit() {
    if ($.exists('.cs-slider')) {
      $('.cs-slider').each(function () {
        // Slick Variable
        var $ts = $(this).find('.cs-slider_container');
        var $slickActive = $(this).find('.cs-slider_wrapper');
        var $sliderNumber = $(this).siblings('.slider-number');

        // Auto Play
        var autoPlayVar = parseInt($ts.attr('data-autoplay'), 10);
        // Auto Play Time Out
        var autoplaySpdVar = 3000;
        if (autoPlayVar > 1) {
          autoplaySpdVar = autoPlayVar;
          autoPlayVar = 1;
        }
        // Slide Change Speed
        var speedVar = parseInt($ts.attr('data-speed'), 10);
        // Slider Loop
        var loopVar = Boolean(parseInt($ts.attr('data-loop'), 10));
        // Slider Center
        var centerVar = Boolean(parseInt($ts.attr('data-center'), 10));
        // Slider Center
        var variableWidthVar = Boolean(
          parseInt($ts.attr('data-variable-width'), 10)
        );
        // Pagination
        var paginaiton = $(this).children().hasClass('cs-pagination');
        // Slide Per View
        var slidesPerView = $ts.attr('data-slides-per-view');
        if (slidesPerView == 1) {
          slidesPerView = 1;
        }
        if (slidesPerView == 'responsive') {
          var slidesPerView = parseInt($ts.attr('data-add-slides'), 10);
          var lgPoint = parseInt($ts.attr('data-lg-slides'), 10);
          var mdPoint = parseInt($ts.attr('data-md-slides'), 10);
          var smPoint = parseInt($ts.attr('data-sm-slides'), 10);
          var xsPoing = parseInt($ts.attr('data-xs-slides'), 10);
        }
        // Fade Slider
        var fadeVar = parseInt($($ts).attr('data-fade-slide'));
        fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);

        // Slick Active Code
        $slickActive.slick({
          autoplay: autoPlayVar,
          dots: paginaiton,
          centerPadding: '0',
          speed: speedVar,
          infinite: loopVar,
          autoplaySpeed: autoplaySpdVar,
          centerMode: centerVar,
          fade: fadeVar,
          prevArrow: $(this).find('.cs-left_arrow'),
          nextArrow: $(this).find('.cs-right_arrow'),
          appendDots: $(this).find('.cs-pagination'),
          slidesToShow: slidesPerView,
          variableWidth: variableWidthVar,
          // slidesToScroll: slidesPerView,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: lgPoint,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: mdPoint,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: smPoint,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: xsPoing,
              },
            },
          ],
        });
      });
    }

    if ($.exists('.cs-moving_carousel_1')) {
      $('.cs-moving_carousel_1').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        variableWidth: true,
        prevArrow: false,
        nextArrow: false
      });
    }

    if ($.exists('.cs-moving_carousel_2')) {
      $('.cs-moving_carousel_2').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        variableWidth: true,
        prevArrow: false,
        nextArrow: false,
      });
    }

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      focusOnSelect: true
    });

  }

  /*--------------------------------------------------------------
    9. Isotop Initialize
  --------------------------------------------------------------*/
  function isotopInit() {
    if ($.exists('.cs-isotop')) {
      $('.cs-isotop').isotope({
        itemSelector: '.cs-isotop_item',
        transitionDuration: '0.60s',
        percentPosition: true,
        masonry: {
          columnWidth: '.cs-grid_sizer',
        },
      });
      /* Active Class of Portfolio*/
      $('.cs-isotop_filter ul li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });
      /*=== Portfolio filtering ===*/
      $('.cs-isotop_filter ul').on('click', 'a', function () {
        var filterElement = $(this).attr('data-filter');
        $(this).parents('.cs-isotop_filter').siblings('.cs-isotop').isotope({
          filter: filterElement,
        });
      });
    }
  }

  /*--------------------------------------------------------------
    10. Modal Video
  --------------------------------------------------------------*/
  function modalVideo() {
    $(document).on('click', '.cs-video_open', function (e) {
      e.preventDefault();
      var video = $(this).attr('href');
      $('.cs-video_popup_container iframe').attr('src', video);
      $('.cs-video_popup').addClass('active');
    });
    $('.cs-video_popup_close, .cs-video_popup_layer').on('click', function (e) {
      $('.cs-video_popup').removeClass('active');
      $('html').removeClass('overflow-hidden');
      $('.cs-video_popup_container iframe').attr('src', 'about:blank');
      e.preventDefault();
    });
  }

  /*--------------------------------------------------------------
    11. Tabs
  --------------------------------------------------------------*/
  function tabs() {
    $('.cs-tabs.cs-fade_tabs .cs-tab_links a').on('click', function (e) {
      var currentAttrValue = $(this).attr('href');
      $('.cs-tabs ' + currentAttrValue)
        .fadeIn(400)
        .siblings()
        .hide();
      $(this).parents('li').addClass('active').siblings().removeClass('active');
      e.preventDefault();
    });
  }

  /*--------------------------------------------------------------
    12. Accordian
  --------------------------------------------------------------*/
  function accordian() {
    $('.cs-accordian').children('.cs-accordian-body').hide();
    $('.cs-accordian.active').children('.cs-accordian-body').show();
    $('.cs-accordian_head').on('click', function () {
      $(this)
        .parent('.cs-accordian')
        .siblings()
        .children('.cs-accordian-body')
        .slideUp(250);
      $(this).siblings().slideDown(250);
      /* Accordian Active Class */
      $(this).parents('.cs-accordian').addClass('active');
      $(this).parent('.cs-accordian').siblings().removeClass('active');
    });
  }

  /*--------------------------------------------------------------
    13. CountDown
  --------------------------------------------------------------*/
  function countDown() {
    if ($.exists('.cs-countdown')) {
      $('.cs-countdown').each(function () {
        var _this = this;
        var el = $(_this).data('countdate');
        var countDownDate = new Date(el).getTime();
        var x = setInterval(function () {
          var now = new Date().getTime();
          var distance = countDownDate - now;
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          $(_this).find('.cs-count_days').html(days);
          $(_this).find('.cs-count_hours').html(hours);
          $(_this).find('.cs-count_minutes').html(minutes);
          $(_this).find('.cs-count_seconds').html(seconds);

          if (distance < 0) {
            clearInterval(x);
            $(_this).find('.cs-count_days').html(0);
            $(_this).find('.cs-count_hours').html(0);
            $(_this).find('.cs-count_minutes').html(0);
            $(_this).find('.cs-count_seconds').html(0);
          }
        }, 1000);
      });
    }
  }

  /*--------------------------------------------------------------
    14. Mode Switcher
  --------------------------------------------------------------*/
  function modeSwitcher() {
    $("#mode_switch").change(function() {
      $("body").toggleClass("cs-dark", this.checked)
    }).change();
  }

})(jQuery); // End of use strict

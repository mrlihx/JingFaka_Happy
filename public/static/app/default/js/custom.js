(function($){
"use strict" 
    function studySlider(){
        var case_study = $(".study-slider,.team_slider");
        if( case_study.length ){
            case_study.owlCarousel({
                loop:true,
                margin:30,
                items:3,
                autoplay:true,
                smartSpeed:1000,
                nav: false,
                responsiveClass:true,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    550:{
                        items:2 
                    }, 
                    768:{
                        items:3   
                    }
                },
            });
        }
    }
    studySlider();
    
    function testimonialSlider(){
        var testimonial = $(".testimonial-slider");
        if( testimonial.length ){
            testimonial.owlCarousel({
                loop:true,
                margin:30,
                items:3,
                autoplay:true,
                center: true,
                smartSpeed:1000,
                autoplayTimeout:2000,
                nav: false,
                responsiveClass:true,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    400:{
                        items:1 
                    }, 
                    768:{
                        items:2   
                    },
                    992:{
                        items:3
                    }
                },
            });
        }
    }
    testimonialSlider();
    
    function easySlider(){
        var easy = $(".easy_slider");
        if( easy.length ){
            easy.owlCarousel({
                loop:true,
                margin:0,
                items:3,
                autoplay:true,
                smartSpeed:1000,
                nav: false,
                dots:false,
                responsiveClass:true,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    500:{
                        items:2 
                    }, 
                    768:{
                        items:2   
                    },
                    992:{
                        items:3         
                    }
                },
            });
        }
    }
    easySlider();
    
    function testimonialSliderTwo(){
        var testimonial = $(".clients_slider");
        if( testimonial.length ){
            testimonial.owlCarousel({
                loop:true,
                margin:30,
                items:1,
                autoplay:true,
                stagePadding: 545,
                center: true,
                smartSpeed:1000,
                nav: false,
                responsiveClass:true,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1,
                        stagePadding: 0,
                        center:false,
                    },
                    768:{
                        items:2,
                        stagePadding: 50
                    }, 
                    1199:{
                        items:1 ,
                        stagePadding: 300
                    },
                    1500:{
                        items:1,
                        stagePadding: 545,
                    }
                },
            });
        }
    }
    testimonialSliderTwo();
    
    /*===== progress-bar =====*/
    function circle_progress(){
        if( $('.circle').length ){
            $(".circle").each(function() {
                $(this).waypoint(function() {
                    $('.circle').circleProgress({
                        startAngle:-14.1,
                        size: 150,
                        duration: 500000,
                        easing: "circleProgressEase",
                        emptyFill: '#636a70',
                        lineCap: 'round',
                        thickness:3,
                    })
                }, {
                    triggerOnce: true,
                    offset: 'bottom-in-view'
                })
            })
        }
    }
    circle_progress();
    
    function counterActivator(){
        if ( $('.counter').length ){
            $('.counter').counterUp({
                delay: 70,
                time: 1000
            })
        }
    }
    counterActivator();
    
    
     function ripples() {
        if ($(".ripples").length) {
            try {
                $('.ripples').ripples({
                    resolution: 500,
                    perturbance: 0.0
                });
            } catch (e) {
                $('.error').show().text(e);
            }
        }
    }
    ripples();
	
    function ClientsSlider(){
        var testimonial = $(".clients_logo_s");
        if( testimonial.length ){
            testimonial.owlCarousel({
                loop:true,
                margin:30,
                items:6,
                autoplay:true,
                smartSpeed:1000,
                dots:false,
                nav: false,
                responsiveClass:true,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    400:{
                        items:2  
                    },
                    576:{
                        items:3 
                    }, 
                    768:{
                        items:4
                    },
                    992:{
                        items:6   
                    }              
                },
            });
        }
    }
    ClientsSlider();
    
    /*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    function our_project(){
        if ( $('.portfolio-gallery,.pr-gallery-three').length ){
            // Activate isotope in container
            $(".portfolio-gallery,.pr-gallery-three").imagesLoaded( function() {
                $(".portfolio-gallery,.pr-gallery-three").isotope({
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: 0
                    }
                }); 
            }); 
            // Add isotope click function
            $(".portfolio_filter li").on('click',function(){
                $(".portfolio_filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".portfolio-gallery,.pr-gallery-three").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    our_project();
      
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/
//    $('.nav.navbar-nav li a').on('click', function(event) {
//        var $anchor = $(this);
//        $('html, body').stop().animate({
//            scrollTop: $($anchor.attr('href')).offset().top - 70
//        }, 1500);
//        event.preventDefault();
//    });
    
    
    
	//open and close popup
	$(document).on('click', '.open-popup', function(){
		$('.popup-content').removeClass('active');
		$('.popup-wrapper, .popup-content[data-rel="'+$(this).data('rel')+'"]').addClass('active');
		$('html').addClass('overflow-hidden');
		return false;
	});

	$(document).on('click', '.popup-wrapper .button-close, .popup-wrapper .layer-close', function(){
		$('.popup-wrapper, .popup-content').removeClass('active');
		$('html').removeClass('overflow-hidden');
		setTimeout(function(){
			$('.ajax-popup').remove();
		},300);
		return false;
	});
    
    
    
    //* Magnificpopu
    function Magnificpopu(){
        if ( $('.popup').length ){   
            $('.popup').magnificPopup({
                type: 'inline', 
                fixedContentPos: false,
                fixedBgPos: true, 
                overflowY: 'auto', 
                closeBtnInside: true,
                preloader: false, 
                midClick: true,
                removalDelay: 300,
                mainClass:  'my-mfp-slide-bottom'
            });
        };
    };
    Magnificpopu();
    
    
    /*=========animation js =========*/
    function bodyScrollAnimation() {
        if($(window).width()>768){
            new WOW({
                animateClass: 'animated', // animation css class (default is animated)
                offset:       100,          // distance to the element when triggering the animation (default is 0)
                mobile:       false, 
                duration:     1000,
            }).init()
        }
    }
    bodyScrollAnimation();
    
})(jQuery);



 
	
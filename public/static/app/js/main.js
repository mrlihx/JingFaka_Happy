$(function () {
    $('.right_img').addClass('animated bounceInRight');
    $('.swiper-wrapper').addClass('animated fadeIn');
    $('.bs_icon').addClass('animated rotateIn');
    // $('.news_left_img').addClass('animated fadeInLeft');
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();//文档上卷高度
        var win_Height = $(window).height() - 200;//窗口高度-200
        //元素距离文档顶部距离
        if($('.right_img').length>0){
            var ri_offset = $('.right_img').offset().top;
            var sw_offset = $('.swiper-wrapper').offset().top;
            var bs_offset = $('.bs_icon').offset().top;
            // var nli_offset = $('.news_left_img').offset().top;
            //元素距离窗口顶部距离
            var ri_Top = ri_offset - scrollTop;
            var sw_Top = sw_offset - scrollTop;
            var bs_Top = bs_offset - scrollTop;
            // var nli_Top = nli_offset - scrollTop;
            if(ri_Top > -400 || ri_Top < win_Height){
                $('.right_img').removeClass('bounceOutRight').addClass('bounceInRight');
            }
            if(ri_Top < -400 || ri_Top > win_Height){
                $('.right_img').removeClass('bounceInRight').addClass('bounceOutRight');
            }
            if(sw_Top > 0 || sw_Top < win_Height){
                $('.swiper-wrapper').removeClass('fadeOut').addClass('fadeIn');
            }
            if(sw_Top < 0 || sw_Top > win_Height){
                $('.swiper-wrapper').removeClass('fadeIn').addClass('fadeOut');
            }
            if(bs_Top > 0 || bs_Top < win_Height){
                $('.bs_icon').removeClass('rotateOut').addClass('rotateIn');
            }
            if(bs_Top < 0 || bs_Top > win_Height){
                $('.bs_icon').removeClass('rotateIn').addClass('rotateOut');
            }
            // if(nli_Top > -200 || nli_Top < win_Height){
            //     $('.news_left_img').removeClass('fadeOutLeft').addClass('fadeInLeft');
            // }
            // if(nli_Top < -200 || nli_Top > win_Height){
            //     $('.news_left_img').removeClass('fadeInLeft').addClass('fadeOutLeft');
            // }
            if(scrollTop > 600){
                $('.toTop').fadeIn();
            }
            if(scrollTop <= 600){
                $('.toTop').fadeOut();
            }
        }
    });
    $('.section3 li').hover(function () {
        $(this).toggleClass('section3_li_on');
        $(this).find('p').toggleClass('animated fadeInUp');
    });
    // $('.news_menu li').mousemove(function(){
    //     $(this).addClass('actived').siblings('li').removeClass('actived');
    //     var index = $(this).index();
    //     $('.news_list ul').hide();
    //     $('.news_list ul').eq(index).show();
    // });
    $('.nav li').eq(1).click(function () {
        $('html,body').animate({"scrollTop":1080},300);
    });
    $('.nav li').eq(2).click(function () {
        $('html,body').animate({"scrollTop":2080},300);
    });
    // $('.nav li').eq(3).click(function () {
    //     var section3_height = $('.section3').outerHeight();
    //     $('html,body').animate({"scrollTop":2080+section3_height},300);
    // });
    $('.toTop').click(function () {
        $('html,body').animate({"scrollTop":0},300);
    });
    $('.wx_fix').hover(function () {
        $('.ewm_show').toggleClass('animated fadeInDown').toggle();
    });
});

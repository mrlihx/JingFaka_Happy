$(function(){
    $(".lab1").click(function(){
        if($(this).children("input").attr('checked')){
            $(this).addClass("checked");
        }
        else{
            $(this).removeClass("checked");
        }
    });
    $(".lab3").click(function(){
        $(this).children('input').attr('checked',true);
        $(this).siblings("label").children('input').attr('checked',false);
        $(this).siblings("label").removeClass("checked2");
        $(this).addClass("checked2");
    });
    $('#youhui').click(function(){
        $('.youhui_show').toggle();
    });
    $('#pwdforsearchvalue2').click(function(){
        $('.pwdforsearchvalue2').toggle();
    });
    $('#phone').click(function(){
        if($("input[name='is_rev_sms").attr('checked')){
            $('.phone_num').focus().attr('placeholder','请填写你的手机号');
        }
        else{
            $('.phone_num').blur().attr('placeholder','推荐填写QQ号或手机号');
        }
    });
    $(".pay").click(function(){
        $(this).siblings(".pay").removeClass("checked1");
        $(this).addClass("checked1");
    });
    $('.pay1').click(function(){
        $('.pay_list1').show();
        $('.pay_list2').hide();
        $(this).children('img').attr('src','image/pay1.png');
        $('.pay2').children('img').attr('src','/static/link/fk/images/pay3_menu2.png');
    });
    $('.pay2').click(function(){
        $('.pay_list2').show();
        $('.pay_list1').hide();
        $(this).children('img').attr('src','image/pay2.png');
        $('.pay1').children('img').attr('src','/static/link/fk/images/pay3_menu1.png');
    });
    $('.pay_cj_1').click(function(){
        $('.pay_list1').show();
        $('.pay_list2').hide();
        $('#alipay').attr('checked',true);
        $('#bank').attr('checked',false);
        $('.pay_list1 input').attr('checked',false);
        $('.pay_list1 .lab3').removeClass('checked2');
        $('.pay_list1 .lab3').eq(0).children('input').attr('checked',true);
        $('.pay_list1 .lab3').eq(0).addClass('checked2');
    });
    $('.pay_cj_2').click(function(){
        $('.pay_list2').show();
        $('.pay_list1').hide();
        $('#alipay').attr('checked',false);
        $('#bank').attr('checked',true);
        $('.pay_list2 input').attr('checked',false);
        $('.pay_list2 .lab3').removeClass('checked2');
        $('.pay_list2 .lab3').eq(0).children('input').attr('checked',true);
        $('.pay_list2 .lab3').eq(0).addClass('checked2');
    });
});
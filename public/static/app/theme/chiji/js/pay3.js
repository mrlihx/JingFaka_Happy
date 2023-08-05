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
        if($(this).attr('checked')){
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
        $(this).children('img').attr('src','images/pay1.png');
        $('.pay2').children('img').attr('src','images/pay3_menu2.png');
    });
    $('.pay2').click(function(){
        $('.pay_list2').show();
        $('.pay_list1').hide();
        $(this).children('img').attr('src','images/pay2.png');
        $('.pay1').children('img').attr('src','images/pay3_menu1.png');
    });
});
// function checkCoupon() {
//     var couponcode = $.trim($('[name=couponcode]').val());
//     if (cateid == 0) {
//         cateid = $('#cateid').val();
//     }
//     $('#checkcoupon').show();
//     $.post('/ajax/checkcoupon', {
//             couponcode: couponcode,
//             userid: userid,
//             cateid: cateid,
//             t: new Date().getTime()
//         },
//         function(data) {
//             if (data) {
//                 data = eval(data);
//                 if (data.result == 0) {
//                     $('#checkcoupon').html(data.msg);
//                 }
//                 else if (data.result == 1) {
//                     $('[name=coupon_ctype]').val(data.ctype);
//                     $('[name=coupon_value]').val(data.coupon);
//                     $('#checkcoupon').html('此优惠券可用，订单提交后将被使用！');
//                     goodschk();
//                 } else {
//                     $('#checkcoupon').html('验证失败！');
//                 }
//             }
//         },
//         "json");
// }
// function selectcateid() {
//     var cateid = $('#cateid').val();
//     $('#loading').show();
//     // $('#goodid').hide();
//     var option = '<option value="">请选择商品</option>';
//     if (cateid > 0) {
//         $.post('/ajax/getgoodlist', {
//                 cateid: cateid
//             },
//             function(data) {
//             // console.log(data);
//                 if (data == 'ok') {
//                     alert('此分类下没有商品！');
//                 } else {
//                     $('#loading').hide();
//                     $('#goodid').show();
//                     $('#goodid').html(option + data);
//                 }
//             });
//     } else {
//         // $('#loading').hide();
//         // $('#goodid').show();
//         // $('#goodid').html(option);
//     }
//     // getrate();
//     // $('.pinfo1').show();
//     // $('.pinfo2').hide();
//     // $('.pinfo3').hide();
// }
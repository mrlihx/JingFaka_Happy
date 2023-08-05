



$(function () {

    // $('.buy-button').click(function () {

    //     $('html,body').animate({"scrollTop": 970}, 300);

    // });

    $('.buy-btn').click(function () {

        $('html,body').animate({"scrollTop": 370}, 300);

    });

    $('#isemail').click(function () {

        $('.email_show').toggle();

        if($(this).is(':checked')){

            $(this).parent('label').addClass('dot');

            $(this).parent('label').css('color','#fff');

        }

        else{

            $(this).parent('label').removeClass('dot');

            $(this).parent('label').css('color','#999');

        }

    });

    $('#is_rev_sms').click(function(){

        if($(this).is(':checked')){

            $(this).parent('label').addClass('dot');

            $(this).parent('label').css('color','#fff');

            $('input[name="contact"]').focus().attr('placeholder','请填写你的手机号');

            $('[name=sms_price]').val(0.1);

            is_contact_limit = 7;

        }

        else{

            $(this).parent('label').removeClass('dot');

            $(this).parent('label').css('color','#999');

            $('input[name="contact"]').blur().attr('placeholder','推荐填写QQ号或手机号 订单查询的重要凭证!');

            $('[name=sms_price]').val(0);

            is_contact_limit = is_contact_limit_default;

        }

        goodDiscount();

        goodschk();

        updateContactLimit();

    });







    /*

     * 显示批发优惠价格

     */

    // $("#isdiscount_span").hover(

    //     function () {

    //         //1.获取数据

    //         var discountdetail2='';

    //         var goodid = $('#goodid').val();

    //         $.post('/ajax/getdiscountdetails', {goodid: goodid}, function (data) {

    //             // console.log(data);

    //             //2.组装数据

    //             $('#discountdetail').html(data);

    //         });

    //         //3.显示数据

    //         var discountdetail2 = $('#discountdetail').html();

    //         if(discountdetail2!='') {

    //             //显示样式

    //             var index = layer.tips(discountdetail2, $('#isdiscount_span'), {

    //                 tips: [2, '#4B4B4B'],

    //                 time: 0

    //             });

    //             //显示数据

    //             $(this).attr("data-index", index);

    //         }

    //     },

    //     //4.关闭显示

    //     function () {

    //         layer.close($(this).attr("data-index"));

    //     }

    // );

    $(".lab3").click(function(){

        $(this).children('input').attr('checked',true);

        $(this).siblings("div").children('input').attr('checked',false);

        $(this).siblings("div").css('background-color','rgba(255,255,255,.5)');

        $(this).siblings("div").removeClass("dot");

        $(this).css('background-color','#fff');

        $(this).addClass("dot");

    });



    // $(".lab3").click(function(){

    //     $(this).siblings("div").removeClass("checked2");

    //     $(this).addClass("checked2");

    // });



});





function selectcateid_comic() {

    var cateid = $('#cateid').val();

    // $('#loading').show();

    // $('#goodid').hide();

    var option = '<option value="">请选择商品</option>';

    if (cateid > 0) {

        $('#goodid').html('<option value="">加载中...</option>');

        $.post('/ajax/getgoodlist', {cateid: cateid}, function (data) {

            if (data == 'ok') {

                alert('此分类下没有商品！');

            } else {

                $('#loading').hide();

                // $('#goodid').show();

                $('#goodid').html(option + data);

            }

        });

    } else {

        // $('#loading').hide();

        // $('#goodid').show();

        $('#goodid').html(option);

    }

    getrate();

    // $('.pinfo1').show();

    // $('.pinfo2').hide();

    // $('.pinfo3').hide();

}



function selectgoodid_comic() {

    var goodid = $('#goodid').val();

    if ($('[name=couponcode]').val() != '') {

        checkCoupon();

    }

    $('#price').html('<img src="' + static_url + '/static/buy/default/images/load.gif" />');

    $.post('/ajax/getgoodinfo', {goodid: goodid}, function (data) {

        if (data) {

            $('#price').html(data.price);

            $('#remark').html(data.remark);

            $('#gonggao').html(data.gonggao);
			
			  $('#goodInvent').html(data.goodinvent);//赋值库存

            limit_quantity = data.limit_quantity;

            if (data.remark != '') {

                $('#buy_border1').css('display','block');

            }

            if (data.is_coupon == 0) {

                $('#goodCoupon').hide();

            }

            if (data.is_coupon == 1) {

                $('#goodCoupon').show();

            }

            if (data.is_pwdforsearch == 0) {

                $('#pwdforsearch2').hide();

                $('#pwdforsearch1').hide();

            }

            if (data.is_pwdforsearch == 1) {

                $('#pwdforsearch2').hide();

                $('#pwdforsearch1').show();

            }

            if (data.is_pwdforsearch == 2) {

                $('#pwdforsearch1').hide();

                $('#pwdforsearch2').show();

            }

            //显示批发价格

            if (data.is_discount == 1) {

                $('#isdiscount').css('display','inline');

                $('#isdiscount_span').css('display','inline');

            }

            //隐藏批发价格标签

            if (data.is_discount == 0) {

                $('#isdiscount_span').css('display','none');

            }

            if (data.limit_quantity > 0) {

                $('[name=quantity]').val(data.limit_quantity);

                $('[name=quantity]').attr({

                    'title': '本商品最少购买数量为'+limit_quantity+'件！'

                });

                $('#limit_quantity_tip').show();

            } else {

                $('[name=quantity]').val(1);

                $('[name=quantity]').removeAttr('title');

                $('#limit_quantity_tip').hide();

            }

            //2018年3月17日 商品链接设置客户信息开始

            if(data.is_contact_limit !=null && data.is_contact_limit != '') {

                is_contact_limit = data.is_contact_limit;

            }

            // console.log(data.contact_limit_msg);

            if(data.contact_limit_msg!=null) {

                $('[name="contact"]').attr('placeholder', "请填写"+data.contact_limit_msg);

            }else{

                $('[name="contact"]').attr('placeholder', "推荐填写QQ号或手机号 订单查询的重要凭证!");

            }

            $('[name=danjia]').val(data.price);

            //2018年4月30日 17:39:57优化库存显示开始

            console.log(data.kucun);

            $('input[name="kucun"]').val(data.kucun);

            $('#inventory').html(data.kucun);

            $('[name=is_discount]').val(data.is_discount);

            //2018年4月30日 17:39:57优化库存显示结束





            //2018年4月30日 17:40:55适配新的模版批发优惠开始

            $('[name=is_discount]').val(data.is_discount);//赋值是否支持批发优惠，0为不支持，1为支持

            if (data.is_discount == 1){

                $("#showWholesaleRule").show();

                var fav = " 商品原价：" + data.price + "元<br/>批发价格：<br />";

                $.post('/ajax/getDiscountForLayer', {goodid: goodid,}, function (data) {

                    fav += data;

                    $("#WholesaleRuleText").html(fav);

                })

            } else {

                $("#showWholesaleRule").hide();

                $("#WholesaleRuleText").hide();

                $("#WholesaleRuleText").html("");

            }

            //2018年4月30日 17:40:55适配新的模版批发优惠结束



            if(data.is_contact_limit !=null && data.is_contact_limit != '') {

                //2018年4月30日 17:42:52设置联系方式输入限制开始

                $('input[name="is_contact_limit"]').val(data.is_contact_limit);

                // console.log($('[name=is_contact_limit]').val());

                $('.contact_limit_tip').text(data.contact_limit);

                //2018年4月30日 17:42:52设置联系方式输入限制结束

            }



            getrate();

            goodDiscount();

            $('.pinfo1').hide();

            $('.pinfo2').show();

            $('.pinfo3').hide();

            if (data.is_pwdforbuy == 1) {

                getPwdforbuy();

            }

        }

    }, 'json');

}



function addquantity() {

    var quantity=parseFloat($('input[name="quantity"]').val());

    var kucun=parseInt($('input[name="kucun"]').val());

    if(quantity<kucun) {

        $('input[name="quantity"]').val(quantity + 1);

    }

    changequantity();

    // checkquantity();

}

function delquantity() {

    var quantity=parseFloat($('input[name="quantity"]').val());

    if(quantity>1) {

        $('input[name="quantity"]').val(quantity - 1);

    }

    changequantity();

    // checkquantity();

}

function checkcontact2() {

    var contact = $("input[name='contact']").val();

    if($("input[name='is_rev_sms']").is(":checked")) {

        var reg=/^(\d){11}$/;

        if(contact.length<1){

            layer.msg('请填写手机号码');

            $('[name=contact]').focus();

        }

        if((contact.length>=1&&contact.length<11)||(contact.length>=1&&!reg.test(contact))){

            layer.msg('您输入的手机号码 不是11位数字');

            $('[name=contact]').focus();

        }

    }else{

        if(!contact||contact==null||contact==""||contact==0){

            layer.msg('请填写联系方式');

            $('[name=contact]').focus();

        }else if(contact.length<6){

            layer.msg('您输入的联系方式 少于6位');

            $('[name=contact]').focus();

        }

    }

}



function checkemail2() {

    var email = $("input[name='email']").val();

    var reg = /^([0-9a-zA-Z_-])+@([0-9a-zA-Z_-])+((\.[0-9a-zA-Z_-]{2,3}){1,2})$/;

    if(!email||email==null||email==""||email==0){

        layer.msg('请填写邮箱地址');

        $('[name=email]').focus();

    }else if(!reg.test(email)){

        layer.msg('请填写正确的邮箱地址');

        $('[name=email]').focus();

    }

}



function checkCoupon2() {

    var couponcode = $.trim($('[name=couponcode]').val());

    if (cateid == 0) {

        cateid = $('#cateid').val();

    }

    $('#checkcoupon').show();

    $('#checkcoupon').html('<img src="' + static_url + '/static/buy/default/images/load.gif" />  正在查询优惠卷优惠信息...');

    $.post('/ajax/checkcoupon', {

        couponcode: couponcode,

        userid: userid,

        cateid: cateid,

        t: new Date().getTime()

    }, function (data) {

        if (data) {

            data = eval(data);

            if (data.result == 0) {

                $('#checkcoupon').html(data.msg);

                $('[name=is_coupon]').val("0");//更新部分

            } else if (data.result == 1) {

                $('[name=coupon_ctype]').val(data.ctype);

                $('[name=coupon_value]').val(data.coupon);

                $('[name=is_coupon]').val("1");//更新部分

                $('#checkcoupon').html('<span class="blue">此优惠券可用</span>');

                goodschk();

            } else {

                $('#checkcoupon').html('验证失败！');

            }

        }

    }, "json");

}

function is_pwd_need() {//更新部分

    var pwdforsearch1=$("input[name='pwdforsearch1']").val();

    if(pwdforsearch1!=''){

        $("input[name='is_pwdforsearch']").val("1");

    }else{

        $("input[name='is_pwdforsearch']").val("");

    }

    var reg = /^([0-9A-Za-z]+){6,20}$/;

    if (pwdforsearch1 != '' && !reg.test(pwdforsearch1)) {

        layer.msg('请填写6-20位取卡密码！',{

            icon:2,

            time:2000,

        });

        $('[name=pwdforsearch1]').focus();

        return false;

    }

}

function is_pwd_not_need() {//更新部分

    var pwdforsearch2 = $("input[name='pwdforsearch2']").val();

    if (pwdforsearch2 != '') {

        $("input[name='is_pwdforsearch']").val("2");

    } else {

        $("input[name='is_pwdforsearch']").val("");

    }

    var reg = /^([0-9A-Za-z]+){6,20}$/;

    if (pwdforsearch2 != '' && !reg.test(pwdforsearch2)) {

        layer.msg('请填写6-20位取卡密码！', {

            icon: 2,

            time: 2000,

        });

        $('[name=pwdforsearch2]').focus();

        return false;

    }

}





function checkfrom() {

    // var totalmoney = $('input[name="paymoney"]').val();

    // if($('input[name="pid"]:checked').val()=='qqrcode'){

    //     if(totalmoney<2) {

    //         swal("该支付方式最低提交金额2元!");

    //         parent.$.nyroModalRemove();

    //         return false;

    //     }

    // }

    //---------限购开始---------//

    // var be_checked_quantity = $('input[name="quantity"]').val();

    // var goodid = $('#goodid').val();

    // var notice_arr = [

    //     '47425',

    //     '46374',

    //     '48332',

    //     '44682',

    //     '44291'

    // ];

    // if(userid=='16033'){

    //     if($.inArray(goodid, notice_arr)=='-1') {//当前商品不在数组范围内就限制，如果当前商品在范围内就不限制

    //         if(be_checked_quantity>=5){

    //             $('input[name="quantity"]').val('5');

    //             layer.msg('本商品限购5个', {time: 3000, icon: 0});

    //             // parent.$.nyroModalRemove();

    //             return false;

    //         }

    //     }

    // }

    //---------限购结束---------//



}
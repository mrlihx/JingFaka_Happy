 $(function() {
    resize();
    $(window).resize(resize);
    function resize() {
        if ($(window).width() > 550) {
            $.nyroModalSettings({
                type: 'iframe',
                minHeight: 400,
                minWidth: 430,
                titleFromIframe: true,
                modal: true
            })
        } else {
            $.nyroModalSettings({
                type: 'iframe',
                minHeight: 500,
                minWidth: 550,
                titleFromIframe: true,
                modal: true
            });
        }
    }
    if (user_popup_message != '') {
        $('#myOnPageContent').html(user_popup_message);
        $('#popup_gg').trigger('click');
    }
    $('#isagree').click(function() {
        $('#agreement').toggle();
    });
    $('[name=isagree]').click(function() {
        $('#agreement').toggle();
    });
    $('#select_pay li').each(function() {
        $(this).hover(function() {
            $(this).addClass('cursor');
        });
    });
     $('#is_rev_sms').click(function () {
         if ($(this).is(':checked')) {
             $('#is_rev_sms_tip').show();
             $('[name=contact]').focus();
             $('[name=sms_price]').val(0.1);
             is_contact_limit = 7;
         } else {
             $('#is_rev_sms_tip').hide();
             $('[name=sms_price]').val(0);
             is_contact_limit = is_contact_limit_default;
         }
         goodDiscount();
         goodschk();
         updateContactLimit();
     });
    $('#select_pay li').click(function() {
        var id = $(this).find('input').attr('id');
        $('#' + id).attr('checked', true);
        $('#' + id + 's').show().siblings().hide();
        $($('#' + id).parent()).addClass('selected').siblings().removeClass('selected');
        if (id != 'card') {
            $('#step_three').hide();
        } else {
            if (is_display != 1) {
                $('#step_three').show();
            }
        }
    });
    $('.paylist ul li').each(function() {
        $(this).hover(function() {
                $(this).addClass('yb');
                $(this).addClass('cursor');
            },
            function() {
                $(this).removeClass("yb");
            });
        $(this).click(function() {
            $('.paylist li').removeClass('ybh');
            $(this).addClass('ybh');
            $(this).find('input').attr('checked', true);
            var pname = $(this).find('img').attr('alt');
            $('#select_pay li').each(function() {
                if ($(this).hasClass('selected')) {
                    var pt = $(this).find('input').attr('id');
                    if (pt == 'card') {
                        $('.bt').hide();
                        $('.bt2').show();
                    } else {
                        $('.bt').show();
                        $('.bt2').hide();
                    }
                    pname = pt == 'card' ? pname: '';
                }
            });
            $('#payinfo .pinfo1').hide();
            $('#payinfo .pinfo2').show();
            if (pname != '') {
                $('.pinfo3').show();
            } else {
                $('.pinfo3').hide();
            }
            $('#payinfo .payname').html('[' + pname + ']');
            getrate();
            get_pay_card_info();
            getCardLength();
        });
    });
        $('#submit').click(function() {
            // if ($('[name=isagree]').is(':checked') == false) {
            //     alert('请阅读和同意用户协议，才能继续购买！');
            //     $('[name=isagree]').focus();
            //     return false;
            // }
            var cateid = $('[name=cateid]').val();
            if (cateid == '') {
                alert('请选择商品分类！');
                $('[name=cateid]').focus();
                return false;
            }
            var goodid = $('[name=goodid]').val();
            if (goodid == '') {
                alert('请选择要购买的商品！');
                $('[name=goodid]').focus();
                return false;
            }
            var quantity = $.trim($('[name=quantity]').val());
            //如果限制了购买数量，必须按照限制数量购买
            if (limit_quantity > 0) {//如果限制了购买数量
                if(quantity<limit_quantity) {
                    $('[name=quantity]').attr({
                        'title': '本商品最少购买数量为' + limit_quantity + '件！'
                    });
                    alert('本商品最少购买数量为' + limit_quantity + '件！');
                    $('[name=quantity]').focus();
                    return false;
                }
            }
            if (isNaN(quantity) || quantity <= 0 || quantity == '') {
                alert('购买数量填写错误，最小数量为1！');
                $('[name=quantity]').focus();
                return false;
            }
            var kucun = $('[name=kucun]').val();
            kucun = kucun == '' ? 0 : parseInt(kucun);
            if (kucun == 0) {
                alert('库存为空，暂无法购买！');
                $('[name=quantity]').focus();
                return false;
            }
            if (kucun > 0 && quantity > kucun) {
                alert('库存不足，请修改购买数量！');
                $('[name=quantity]').focus();
                return false;
            }
            var contact = $.trim($('[name=contact]').val());
            if (contact == '') {
                alert('请填写联系方式！');
                $('[name=contact]').focus();
                return false;
            }
            if (is_contact_limit == 1) {
                var reg = /^[\d]+$/;
                if (!reg.test(contact)) {
                    alert('联系方式必须全部为数字！');
                    $('[name=contact]').focus();
                    return false;
                }
            } else if (is_contact_limit == 2) {
                var reg = /^[a-zA-Z]+$/;
                if (!reg.test(contact)) {
                    alert('联系方式必须全部为英文字母！');
                    $('[name=contact]').focus();
                    return false;
                }
            } else if (is_contact_limit == 3) {
                var reg = /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i;
                if (!reg.test(contact)) {
                    alert('联系方式必须为数字和字母的组合！');
                    $('[name=contact]').focus();
                    return false;
                }
            } else if (is_contact_limit == 4) {
                var reg = /^(([a-z]+)([_])([a-z]+)|([0-9]+)([_])([0-9]+))$/i;
                if (!reg.test(contact)) {
                    alert('联系方式必须有数字和下划红或者字母和下划线组合！');
                    $('[name=contact]').focus();
                    return false;
                }
            } else if (is_contact_limit == 5) {
                var reg = /[\u4e00-\u9fa5]/;
                if (!reg.test(contact)) {
                    alert('联系方式必须是中文！');
                    $('[name=contact]').focus();
                    return false;
                }
            } else if (is_contact_limit == 6) {
                var reg = /^([0-9a-zA-Z_-])+@([0-9a-zA-Z_-])+((\.[0-9a-zA-Z_-]{2,3}){1,2})$/;
                if (!reg.test(contact)) {
                    alert('联系方式必须是邮箱！');
                    $('[name=contact]').focus();
                    return false;
                }
            } else if (is_contact_limit == 7) {
                var reg = /^(\d){11}$/;
                if (!reg.test(contact)) {
                    alert('联系方式必须为您的手机号码！');
                    $('[name=contact]').focus();
                    return false;
                }
            }
            if ($('#pwdforsearch1').is(':visible')) {
                var pwdforsearch = $.trim($('[name=pwdforsearch1]').val());
                var reg = /^([0-9A-Za-z]+){6,20}$/;
                if (pwdforsearch == '' || !reg.test(pwdforsearch)) {
                    alert('请填写取卡密码！长度为6-20个数字、字母或组合！');
                    $('[name=pwdforsearch1]').focus();
                    return false;
                }
            }
            if ($('#is_pwdforsearch').is(':checked')) {
                var pwdforsearch = $.trim($('[name=pwdforsearch2]').val());
                var reg = /^([0-9A-Za-z]+){6,20}$/;
                if (pwdforsearch == '' || !reg.test(pwdforsearch)) {
                    alert('您选择了使用取卡密码，请填写取卡密码！长度为6-20个数字、字母或组合！');
                    $('[name=pwdforsearch2]').focus();
                    return false;
                }
            }
            if ($('#isemail').is(':checked')) {
                if ($.trim($('[name=email]').val()) == '') {
                    alert('您选择了把卡密信息发送到邮箱，推荐您填写常用的邮箱哦！');
                    $('[name=email]').focus();
                    return false;
                }
            }
            if ($('#is_coupon').is(':checked')) {
                if ($.trim($('[name=couponcode]').val()) == '') {
                    alert('您选择了使用优惠券，但您没有填写优惠券！');
                    $('[name=couponcode]').focus();
                    return false;
                }
                var coupon_ctype = $('[name=coupon_ctype]').val();
                if (coupon_ctype == 0) {
                    alert('您选择了使用优惠券，但所填写的优惠券无效！');
                    $('[name=couponcode]').focus();
                    return false;
                }
            }
            var select_pid = false;
            $('[name=pid]').each(function() {
                if ($(this).is(':checked')) {
                    select_pid = true;
                }
            });
            if (select_pid == false) {
                alert('请选择支付方式！');
                $('[name=pid]').first();
                return false;
            }
            var pty = '';
            $('#select_pay li').each(function() {
                if ($(this).find('input').attr('checked')) {
                    pty = $(this).find('input').val();
                }
            });
            var cte = '';
            if (pty == 'card') {
                var cardNoLength = $('[name=cardNoLength]').val();
                var cardPwdLength = $('[name=cardPwdLength]').val();
                var i = 1;
                $('.cardvalue').each(function() {
                    if ($(this).val() == '') {
                        cte = cte + "第" + i + "张卡 请选择充值卡面值!\n";
                    }
                    i++;
                });
                var i = 1;
                $('.cardnum').each(function() {
                    if ($(this).val() == '') {
                        cte = cte + "第" + i + "张卡 请填写充值卡号!\n";
                    } else {
                        var cardno = $(this).val();
                        if (cardNoLength != '0' && cardPwdLength != '0' && cardNoLength != cardno.length) {
                            cte = cte + "第" + i + "张卡 充值卡号长度为" + cardNoLength + "位!\n";
                        }
                    }
                    i++;
                });
                var i = 1;
                $('.cardpwd').each(function() {
                    if ($(this).val() == '') {
                        cte = cte + "第" + i + "张卡 请填写充值卡密!\n";
                    } else {
                        var cardpwd = $(this).val();
                        if (cardNoLength != '0' && cardPwdLength != '0' && cardPwdLength != cardpwd.length) {
                            cte = cte + "第" + i + "张卡 充值卡密长度为" + cardPwdLength + "位!\n";
                        }
                    }
                    i++;
                });
            }
            if (cte != '') {
                alert(cte);
                return false;
            }
            return true;
        });
});
function checkCoupon() {
    var couponcode = $.trim($('[name=couponcode]').val());
    if (cateid == 0) {
        cateid = $('#cateid').val();
    }
    $('#checkcoupon').show();
    $.post('/ajax/checkcoupon', {
            couponcode: couponcode,
            userid: userid,
            cateid: cateid,
            t: new Date().getTime()
        },
        function(data) {
            if (data) {
                data = eval(data);
                if (data.result == 0) {
                    $('#checkcoupon').html(data.msg);
					$('#is_coupon2').val('');
                    $('[name=is_coupon]').val("0");//更新部分
                } else if (data.result == 1) {
                    $('[name=coupon_ctype]').val(data.ctype);//从goodcoupon查询数据
                    $('[name=coupon_value]').val(data.coupon);
					$('#is_coupon2').val(1);
                    $('[name=is_coupon]').val("1");//更新部分
                    $('#checkcoupon').html('<span class="blue">此优惠券可用，订单提交后将被使用！</span>');
                    goodschk();
                } else {
                    $('#checkcoupon').html('验证失败！');
					$('#is_coupon2').val('');
                }
            }
        },
        "json");
}
function get_pay_card_info() {
    var channelid = 0;
    $('.paylist li').each(function() {
        if ($(this).find('input').is(':checked')) {
            channelid = $(this).find('input').val();
        }
    });
    if (channelid != 0 && !isNaN(channelid)) {
        var option = '<option value="">请选择充值卡面额</option>';
        $.post('/ajax/getpaycardinfo', {
                channelid: channelid
            },
            function(data) {
                $('.cardvalue').each(function() {
                    $(this).html(option + data);
                });
            });
    }
}
function select_card_quantity() {
    var quantity = $('[name=cardquantity]').val();
    quantity = quantity - 1;
    $('.card_list_add').html('');
    for (var i = 1; i <= quantity; i++) {
        $('.card_list_add').append($('.card_list:first').clone());
    }
}
function selectcateid() {
    var cateid = $('#cateid').val();
    $('#loading').show();
    $('#goodid').hide();
    var option = '<option value="">请选择商品</option>';
    if (cateid > 0) {
        // alert('cateid:'+cateid);
        $.post('/ajax/getgoodlist', {
                cateid: cateid
            },
            function(data) {
                if (data == 'ok') {
                    alert('此分类下没有商品！');
                } else {
                    $('#loading').hide();
                    $('#goodid').show();
                    $('#goodid').html(option + data);
                }
            });
    } else {
        $('#loading').hide();
        $('#goodid').show();
        $('#goodid').html(option);
    }
    getrate();
    $('.pinfo1').show();
    $('.pinfo2').hide();
    $('.pinfo3').hide();
}
 var limit_quantity = 0;
function selectgoodid() {
    //获取id，用于获取数据，然后计算，输出数据，
    var goodid = $('#goodid').val();
    if ($('[name=couponcode]').val() != '') {
        checkCoupon();
    }
    $('#price').html('<img src="' + static_url + '/static/buy/default/images/load.gif" />');//给单价正在加载
    $.post('/ajax/getgoodinfo', {//获取单个商品的商品信息来显示
            goodid: goodid
        },
        function(data) {
            if (data) {
                //输出价格
                $('#price').html(data.price);
                $('#remark').html(data.remark);
                //控制优惠卷选项的显示和输出。
                if (data.is_coupon == 0) {
                    $('#goodCoupon').hide();
                }
                if (data.is_coupon == 1) {
                    $('#goodCoupon').show();
                }
                //控制取卡密码选项的显示和输出。
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
                //如果限制了购买数量，必须按照限制数量购买
                if (data.limit_quantity > 0) {//如果限制了购买数量
                    $('[name=quantity]').val(data.limit_quantity);
                    limit_quantity = data.limit_quantity;
                    $('[name=quantity]').attr({
                        'title': '本商品最少购买数量为'+data.limit_quantity+'件！'
                    });
                    $('#limit_quantity_tip').show();//没有找到这个标签。//未知意义
                }
                //如果没有限制了购买数量
                else {
                    $('[name=quantity]').val(1);
                    limit_quantity = 0;
                    $('[name=quantity]').removeAttr('title');
                    $('#limit_quantity_tip').hide();//没有找到这个标签。//未知意义
                }
                // console.log(data.is_contact_limit);
                if(data.is_contact_limit !=null && data.is_contact_limit != '') {
                    is_contact_limit = data.is_contact_limit;
                }
               
                $('[name=danjia]').val(data.price);//赋值隐藏input单价的值
                
                $('#goodInvent').html(data.goodinvent);//赋值库存
				// console.log(123);
				// console.log(('#goodInvent').html());
				
                
                $('#kucun').html(data.kucun+'张');//赋值库存
                $('[name=kucun]').val(data.kucun);//赋值库存
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
                getrate();//获取折价率值//计算付款价格金额，赋值hidden input标签。
                goodDiscount();//赋值单价
                $('.pinfo1').hide();
                $('.pinfo2').show();
                $('.pinfo3').hide();
                //购买商品时是否输入密码才能购买，0为不需要，1为需要
                if (data.is_pwdforbuy == 1) {
                    getPwdforbuy();
                }
            }
        },
        'json');
    goodDiscount();//赋值单价
    goodschk();//计算付款价格金额，赋值hidden input标签。
}
function getPwdforbuy() {
    $.nyroModalManual({
        height: 120,
        width: 400,
        content: dis_pwd_content
    });
}
function verify_pwdforbuy() {
    var pwdforbuy = $.trim($('[name=pwdforbuy]').val());
    if (pwdforbuy == '') {
        alert('请填写验证码！');
        $('[name=pwdforbuy]').focus();
        return false;
    }
    var reg = /^([a-z0-9A-Z]+){6,20}$/;
    if (!reg.test(pwdforbuy)) {
        alert('验证码格式为6-20个长度，数字、大小写字母或组合！');
        $('[name=pwdforbuy]').focus();
        return false;
    }
    $('#verify_pwdforbuy').attr('disabled', true);
    $('#verify_pwdforbuy_msg').show();
    var goodid = $('#goodid').val();
    $.post('/ajax/checkpwdforbuy', {
            pwdforbuy: pwdforbuy,
            goodid: goodid,
            t: new Date().getTime()
        },function(data) {
            if (data.status == 1) {
                $('#verify_pwdforbuy_msg').hide();
                alert('验证成功，请继续购买！');
                parent.$.nyroModalRemove();
            } else {
                $('#verify_pwdforbuy_msg').hide();
                alert(data.msg);
                $('#verify_pwdforbuy').attr('disabled', false);
                return false;
            }
        },'json');
}
// 购买数量按键谈起
function changequantity() {
    goodDiscount();//赋值单价
    goodschk();//计算付款价格金额，赋值hidden input标签。
}
//赋值单价
function goodDiscount() {
    var is_discount = $('[name=is_discount]').val();//是否支持批发优惠，0为不支持，1为支持
    var quantity = parseInt($.trim($('[name=quantity]').val()));
    var goodid = $('#goodid').val();
    if (is_discount == 1) {//是否支持批发优惠，0为不支持，1为支持
        $.post('/ajax/getdiscount', {
                goodid: goodid,
                quantity: quantity
            },
            function(data) {//获取单价
                if (data > 0) {
                    $('#price').html(data);
                    $('[name=danjia]').val(data);
                    goodschk();//计算付款价格金额，赋值hidden input标签。
                }
            });
    }
}
//获取折价率值//计算付款价格金额，赋值hidden input标签。
function getrate() {
    var goodid = $('[name=goodid]').val();
    var cateid = $('[name=cateid]').val();
    var channelid = 0;
    //获取选择的支付通道
    $('[name=pid]').each(function() {
        if ($(this).is(':checked')) {
            channelid = $(this).val();
        }
    });
    /*if(isNaN(channelid)){if(channelid!='ALIPAY' && channelid!='TENPAY'){channelid='bank';}}*/
    if (goodid == '') {
        goodid = 0;
    }
    if (cateid == '') {
        cateid = 0;
    }
    $.post('/ajax/getrate', {
            userid: userid,
            cateid: cateid,
            goodid: goodid,
            channelid: channelid
        },
        function(data) {
            $('.rate').html(data);//获取折价率值
            goodschk();
        });
}
//计算付款价格金额，赋值hidden input标签。
function goodschk() {
    var dprice = parseFloat($('#price').text());
    if(!dprice){
        dprice = 0.00;
    }
    var quantity = parseInt($.trim($('[name=quantity]').val()));
    var kucun = parseInt($.trim($('[name=kucun]').val()));
    if(quantity > kucun){
        quantity = kucun
        $('[name=quantity]').val(quantity);
    }

    // console.log(quantity);
    var rate = parseFloat($('.rate').first().text());
    // console.log(rate);
    var tprice = parseFloat(dprice * quantity / rate * 100);
    var gprice = parseFloat(dprice * quantity);
    var coupon_ctype = $('[name=coupon_ctype]').val();
    var coupon_value = $('[name=coupon_value]').val();
    //如果使用优惠卷，计算付款价格。
    if (coupon_ctype == 1) {
        tprice = (tprice - coupon_value);
    } else if (coupon_ctype == 100) {
        tprice = parseFloat(tprice - (tprice * coupon_value / 100));
    }
    var sms_price = parseFloat($('[name=sms_price]').val());
    if(sms_price>0) {
        tprice = tprice + sms_price;
    }
    tprice = $('#card').attr('checked') ? Math.ceil(tprice.toFixed(2)) : tprice.toFixed(2);//？
    gprice = $('#card').attr('checked') ? Math.ceil(gprice.toFixed(2)) : gprice.toFixed(2);//？
    $('.tprice').html(tprice);
    $('.gprice').html(gprice);
    $('[name=paymoney]').val(tprice);
}
function getCardLength() {
    $('.paylist ul li').each(function() {
        if ($(this).find('input').attr('checked')) {
            pid = $(this).find('input').val();
        }
    });
    $('[name=cardNoLength]').val(0);
    $('[name=cardPwdLength]').val(0);
    $.post('/ajax/getcardlength', {
            channelid: pid
        },
        function(data) {
            if (data) {
                $('[name=cardNoLength]').val(data.cnl);
                $('[name=cardPwdLength]').val(data.cpl);
            }
        },
        'json');
}
 function updateContactLimit() {
     $.post('/ajax/updateContactLimit', {is_c_l: is_contact_limit}, function (ret) {
         $('.contact_limit_tip').text(ret);
     });
 }
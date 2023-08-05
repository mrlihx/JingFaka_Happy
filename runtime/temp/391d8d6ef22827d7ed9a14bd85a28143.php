<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:84:"/www/wwwroot/shop.paozf.com/application/templates/mobile/shop/default//category.html";i:1646323578;s:81:"/www/wwwroot/shop.paozf.com/application/templates/mobile/shop/default/layout.html";i:1687461497;}*/ ?>
﻿<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title><?php if($shop['shop_name']): ?><?php echo $shop['shop_name']; ?> - <?php endif; ?><?php echo sysconf('site_name'); ?></title>
        <meta name="keywords" content="<?php echo sysconf('site_keywords'); ?>" />
        <meta name="description" content="<?php echo sysconf('site_desc'); ?>" />
        <link rel="shortcut icon" href="<?php echo sysconf('browser_icon'); ?>" />

        <link rel="stylesheet" href="/static/app/theme/default/css/mobile_main.css">

        <link href="/static/app/css/nyro.css" rel="stylesheet" type="text/css">
        <script src="/static/app/js/jquery.min.js"></script>
        <script src="/static/app/js/nyro.js"></script>
        <script src="/static/app/theme/default/js/bootstrap.bundle.min.js"></script>
        <script src="/static/app/layer/layer.js"></script>
        <script src="/static/app/theme/default/js/woodyapp_mobile.js?_v=<?php echo date('YmdHi'); ?>"></script>
        <script>
            var user_popup_message = '';
            var is_display = '0';
            var userid = "<?php echo $shop['id']; ?>";
            var cateid = 0;
            var static_url = '__PUBLIC__';
            var dis_pwd_content = '<div style="padding:10px;color:#cc3333;line-height:24px"><p style="float:left;font-size:14px;font-weight:bold;color:blue;">访问密码：</p><div style="float:right; font-size:14px; padding-left:20px;"><a href="#" style="color:#0064ff;text-decoration:none;display:inline-block;<?php if(isset($goods)): ?>display:none;<?php endif; ?>background:url(/static/app/images/x.png) left no-repeat;padding-left:15px;" class="nyroModalClose" onclick="closeNyro()">关闭</a></div><p style="clear:both;font-size:12px;font-weight:bold;color:red;"><input type="password" name="pwdforbuy" class="input" maxlength="20"> <input type="submit"  onclick="verify_pwdforbuy()" id="verify_pwdforbuy" style="font-size:12px;padding:3px 3px" value="验证密码"> <span id="verify_pwdforbuy_msg" style="display:none"><img src="/static/app/images/load.gif"> 正在验证...</span><ul><li>1.本商品购买设置了安全密码</li><li>2.只有成功验证密码后才能继续购买</li></ul></p></div>';
            var goodid = "<?php echo (isset($goods['id']) && ($goods['id'] !== '')?$goods['id']:0); ?>";
            var is_contact_limit = '<?php echo (isset($goods['contact_limit']) && ($goods['contact_limit'] !== '')?$goods['contact_limit']:""); ?>';
            var is_contact_limit_default = '<?php echo (isset($goods['contact_limit']) && ($goods['contact_limit'] !== '')?$goods['contact_limit']:""); ?>';
            var limit_quantity_tip = '无法修改购买数量，是因为本商品限制了购买数量。';
            var notice = "<?php echo $shop['shop_notice']; ?>";
            /* <?php if(!isset($goods)): ?> */

            function closeNyro() {
                $('[name="goodid"]').val('');
                $('[name="goodid"]').change();
            }

            /* <?php endif; ?> */

        </script>


    </head>
    <body>
      <style>
            .bangz_box {
                position: fixed;
                right: 0;
                top: 100px;
                z-index: 45;
            }
            .bangz_box .item {
                padding: 7px;
                background: linear-gradient(45deg,#3798f7,#3369ff);
                box-shadow: 0 0.093333rem 0.133333rem 0 rgb(54 144 248 / 23%);
                border-radius: 7px 0 0 7px;
                margin-top: 15px;
            }
            .bangz_box .item:first-child {
                background: linear-gradient(45deg,#fd0b27,#ff4a4a);
                box-shadow: 0 7px 10px 0 rgb(255 113 19 / 23%);
            }
            .bangz_box .item:nth-child(2) {
                background: linear-gradient(45deg,#f737e8,#3369ff);
                box-shadow: 0 0.093333rem 0.133333rem 0 rgb(54 144 248 / 23%);
            }
            .bangz_box .item a{
                text-decoration: none;
                text-align: center;
                color:#FFF
            }
            .bangz_box span{
                margin-left: 5px;
                font-weight: 600;
                font-size: 10px;
                color: #fff;
            }
        </style>
        <div class="bangz_box">
            <div class="item">
                <a href="/complaint">
                    <span>投诉商家</span>
                </a>
            </div>
            <div class="item">
                <a href="//wpa.qq.com/msgrd?v=1&uin=<?php echo $shop['qq']; ?>&site=&menu=yes" target="_blank"> 
                    <span>卖家客服</span>
                </a>
            </div>

            <?php if($shop['qqqun']!=""): ?>
            <div class="item">
                <a href="<?php echo removeXSS(htmlspecialchars_decode($shop['qqqun'])); ?>" target="_blank"> 
                    <span>商家Q群</span>
                </a>
            </div>
            <?php endif; ?>
        </div> 
        <!-- header -->
        <header class="header">
            <div class="header_box">
                <img src="/static/app/theme/default/img/shop_img_w.png" class="avatar"  alt="LOGO">

                <div class="header_title">
                    <span><?php echo $shop['shop_name']; ?></span> 
                    <span>客服QQ：<?php echo $shop['qq']; ?></span>
                </div>
                <div class="header_right">
                    <?php if($shop['website']!=""): ?>
                    <a class="website" href="<?php echo $shop['website']; ?>">进入官网</a>
                    <?php endif; ?>
                    <a class="queryorder" href="/orderquery">查询订单</a>
                </div>
            </div>
        </header>
        <!-- end header -->
        <form name="p" id="payform" method="post" action="/pay/order" target="_self"  autocomplete="off">

            


<section class="category">
    <div class="category_title d-flex align-content-center">
        <span>选择分类</span>
    </div>
    <input type="hidden" name="cateid" id="cateid" value="<?php echo $category['id']; ?>">
    <div class="category_list">

        <div style="cursor:pointer" class="category_box active" data-cateid="<?php echo $category['id']; ?>">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABDlBMVEX////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uKVtWAAAAWnRSTlMAAgMEBQYHCBAREhMWHR4gJicqKywtLi8xMjM0NTY5Ojs9Pj9AQUJDREVGR0hJSktMTU5PUVJTVFVWV1laW11gYmNkZWZoaWpsbm9wcXJzdHV3eHl6e3x9fn8hmsUDAAACRElEQVR4Xq3XbVfaMBjH4ZvVYhkoYhWsFcfK+i+iU+Z0Pk11m49zE1ER8/2/yBxrThJaSNuz6/0vzemL5A7FM4pl2200gWbDtctFgxLLzy77UPjLs9OUhFXlpdpXLdIpOBjLKdAk5jwmmjdprJIHDa9E8XJzSGAuRzHeLCERZ4oiplaQUD1SG6LVWjFIkVuCVut0LayXciSrQGury64QqpCkBK2DPmPsGKGSaPMeNILv7K/Bdhh7eeIWofHxF/un1w7rRd4WoLH3xLhrhAph7Cgfud2HKvjGJDth7NCQBcmXJ9bfhGzjlgn9PXDWMK6KNDh9YYzdBRB2H5nwW1q3Sq9MH9z6DRs6V1YTfgQQfJOIZsB9emChQ7Ga0D+AYkb5Xe0ej587w3bngQndLagcIsMHh+0Br7stACfyli9aGOEbVITkmHGXaF8zYXCEqCKVIbti3FmPCfcdxCiTDdnaPYtxuYY4NrlQdAaRdPAV8VxqQHU02vY+Y4wGNTHiQm2v2xinSRjV6spbPsEEhIjOs2bL3AdqIuKQtzfrmOQ9NRB1PkxfTgNM9I5cRAV3r+3jLjRcshFjs89+bkDHpjLi7J8F0CpTEZkVyfCRkW8QOcjI4cdQFjP8AExHHIBUQyY1fuhnYfHrJgNHXHTpvRVXbGqL8uWekpeXx4qUSupAk0ol9SglODlSTNWB7COgmbiumxRhJB5cs4/Mldx/HNYF08ZEtpn5gbJcIB2rFv80qlmUxHTWR5l4Di64q57ve6vuwtjn4B94/uYnspcNGwAAAABJRU5ErkJggg==">
            <div class="cate_name"><?php echo $category['name']; ?></div>
            <div class="cate_desc">包含<?php echo $category['count']; ?>种商品</div>
        </div>

    </div>
</section>

<section class="goods">
    <div class="goods_title d-flex align-content-center">
        <span>选择商品</span>
    </div>
    <input name="goodid" id="goodid" type='hidden'/>
    <div class="goods_list" style="max-height: 380px;overflow-x: auto;">
    </div>
</section>


<script>
    $(function () {
        selectcateid();
    })
</script>


            <section class="desc">

                <div class="sale_message" id='isdiscount_span'>
                    <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M988.908308 614.006154c-58.525538-29.538462-76.091077-53.208615-76.091077-100.509539 0-44.386462 17.565538-68.017231 76.091077-100.548923 32.177231-20.716308 35.091692-38.439385 35.091692-68.01723v-168.566154C1024 123.116308 980.125538 78.769231 927.468308 78.769231H96.492308C43.874462 78.769231 0 123.116308 0 176.364308v168.566154c0 26.584615 2.914462 50.254769 35.091692 68.01723 23.433846 11.815385 76.091077 41.353846 76.091077 100.548923 0 65.024-38.045538 85.740308-73.137231 97.555693H35.052308C2.914462 631.768615 0 664.300308 0 679.069538v168.566154C0 900.883692 43.874462 945.230769 96.531692 945.230769H927.507692C980.125538 945.230769 1024 900.883692 1024 847.635692v-168.566154c0-32.531692-11.697231-44.347077-35.091692-65.063384z" fill="#7FBCFF" p-id="61311"></path><path d="M670.444308 530.116923c17.723077 0 32.571077 14.572308 32.571077 32.019692a32.571077 32.571077 0 0 1-32.571077 31.980308h-124.376616v122.171077a32.571077 32.571077 0 0 1-65.142154 0v-122.171077H356.548923a32.571077 32.571077 0 0 1-32.571077-31.980308c0-17.447385 14.808615-32.019692 32.571077-32.019692h124.376615v-75.618461H347.648A32.571077 32.571077 0 0 1 315.076923 422.478769c0-17.447385 14.808615-31.980308 32.571077-31.980307h97.713231L341.740308 288.689231a31.232 31.232 0 0 1 0-43.638154 32.610462 32.610462 0 0 1 44.425846 0l127.330461 125.085538 127.330462-125.085538a32.610462 32.610462 0 0 1 44.386461 0c11.854769 11.618462 11.854769 31.980308 0 43.638154l-103.620923 101.809231h94.759385c17.762462 0 32.571077 14.572308 32.571077 31.980307a32.571077 32.571077 0 0 1-32.571077 32.019693h-133.277538v75.618461h127.369846z" fill="#007AFF" p-id="61312"></path></svg>
                    <div class="content sale_message">
                        <span></span>
                    </div>
                </div>
                <div class="desc_content">
                    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M392.7 958.9c22.5 0 40.7-18.2 40.7-40.7V630.9c0-22.5-18.2-40.7-40.7-40.7H105.4c-22.5 0-40.7 18.2-40.7 40.7v287.4c0 22.5 18.2 40.7 40.7 40.7h287.3zM860 958.9c22.5 0 40.7-18.2 40.7-40.7V630.9c0-22.5-18.2-40.7-40.7-40.7H572.7c-22.5 0-40.7 18.2-40.7 40.7v287.4c0 22.5 18.2 40.7 40.7 40.7H860zM392.7 492c22.5 0 40.7-18.2 40.7-40.7V164c0-22.5-18.2-40.7-40.7-40.7H105.4c-22.5 0-40.7 18.2-40.7 40.7v287.4c0 22.5 18.2 40.7 40.7 40.7h287.3z" fill="#1E94EE" p-id="42427"></path><path d="M948.3 336.4c15.9-15.9 15.9-41.6 0-57.5L745.1 75.7c-15.9-15.9-41.6-15.9-57.5 0L484.4 278.9c-15.9 15.9-15.9 41.6 0 57.5l203.2 203.2c15.9 15.9 41.6 15.9 57.5 0l203.2-203.2z" fill="#B4DCF5" p-id="42428"></path></svg>
                    <div class="content"  id="remark">
                    </div>
                </div>
            </section>


            <section class="order_info">

                <div class="info_box">
                    <div class="info_left">
                        <span>*</span> 
                        <span>购买数量</span> 
                    </div> 
                    <div class="count_right">
                        <span style="cursor:pointer"><p></p></span> 
                        <input type="text" name="quantity" value="1" onkeyup="changequantity()"> 
                        <span style="cursor:pointer"><p></p> <p></p></span>
                    </div>
                </div>


                <div class="info_box">
                    <div class="info_left">
                        <span>*</span> 
                        <span>联系方式</span> 
                    </div> 
                    <div class="input_right">
                        <input name="contact" class='phone_num' type="text" placeholder="[必填]推荐填写QQ号或手机号!" required="">
                    </div>
                    <div class="info_box_msg" >
                        联系方式特别重要,可用来查询订单
                    </div>
                </div>

                <!--<div class="info_box coupon">-->
                <!--    <div class="info_left">-->
                <!--        <span></span> -->
                <!--        <span>短信提醒</span> -->
                <!--    </div> -->
                <!--    <div class="input_right" style="text-align:right">-->
                <!--        <input type="checkbox" name="is_rev_sms" value="1" id="is_rev_sms" data-cost="0"><label class="checkbox_label" for="is_rev_sms"></label>-->
                <!--    </div>-->
                <!--</div>-->


                <div class="info_box coupon">
                    <div class="info_left">
                        <span></span> 
                        <span>邮箱提醒</span> 
                    </div> 
                    <div class="input_right" style="text-align:right">
                        <input type="checkbox" name="isemail" value="1" id="isemail"><label class="checkbox_label" for="isemail"></label>
                    </div>

                    <div class="input_coupon email_show" style='display:none'>
                        <input type="text" name="email" placeholder="填写你常用的邮箱地址">
                    </div>
                </div>

                <!--<div class="info_box coupon">-->
                <!--    <div class="info_left">-->
                <!--        <span></span> -->
                <!--        <span>使用优惠券</span> -->
                <!--    </div> -->
                <!--    <div class="input_right" style="text-align:right">-->
                <!--        <input id="youhui" type="checkbox"  name="youhui">-->
                <!--        <label class="checkbox_label" for="youhui"></label>-->
                <!--    </div>-->

                <!--    <div class="input_coupon youhui_show" style='display:none'>-->
                <!--        <input type="text" name="couponcode" placeholder="请填写你的优惠券" onchange="checkCoupon2()">-->
                <!--    </div>-->
                <!--</div>-->


                <div class="info_box"  id="pwdforsearch1" style="display:none">
                    <div class="info_left">
                        <span>*</span> 
                        <span>取卡密码</span> 
                    </div> 
                    <div class="input_right">
                        <input type="text"  name="pwdforsearch1" placeholder="[必填]请输入取卡密码（6-20位）">
                    </div>
                </div>

                <div class="info_box"  id="pwdforsearch2" style="display:none">
                    <div class="info_left">
                        <span></span> 
                        <span>取卡密码</span> 
                    </div> 
                    <div class="input_right">
                        <input type="text"  onblur="is_pwd_not_need()" name="pwdforsearch2" placeholder="[选填]请输入取卡密码（6-20位）">
                    </div>
                </div>
            </section>

            <section class="xh_box" style="display:none">
                <div style="color: #545454;margin-bottom: .2rem;font-size: .373333rem;font-weight: 700;">
                    已选号码<a style="font-size: 12px;float: right;border: 1px solid rgb(51, 105, 255);border-radius: 5px;padding: 2px 6px;color: rgb(51, 105, 255);" href='javascript:void(0)' onclick='selectForm()'>重新选择</a>
                </div>
                <div class="xh_box_content">
                    <p style='color: #74788d;padding:10px'>未指定号码，系统将随机发货！</p>
                </div>
            </section>

            <div class="border"></div>

            <section class="pay">
                <div class="pay_title">
                    支付方式
                </div>

                <div class="pay_list">
                    <?php foreach($userChannels as $k=>$v): if($v['status']==1): ?>
                    <div style="cursor:pointer" class="pay_box <?php if($k==1): ?>active<?php endif; ?>" data-pid='<?php echo $v['channel_id']; ?>' data-rate="<?php echo $v['rate']; ?>">
                        <div>
                            <img src="<?php echo get_paytype_info($v['paytype'])['ico']; ?>" class="buy_type" /> 
                            <span><?php echo $v['show_name']; ?></span> 
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAwCAMAAABdTmjTAAABU1BMVEUzaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf8zaf////9hi//b5f/d5v/z9v81av84bf9Acv9Bc/9Edf9Jef9Me/9NfP9Wg/9Xg/81a/9rkv9tlP9ulf92mv99oP9/of+Gpv+Nq/+Qrf+UsP+fuP+huv+uxP+vxP+yx//B0f/C0v/J2P/M2f83bP8+cf/i6v/t8v/u8//x9P88b//5+v/6+//8/f/9/f/+/v89cf+QnoDYAAAAQHRSTlMAAQIDBgoMDxMVFhwfIiQsLS83PkJDTlFUW2Nma3Z4f4KHiJSWmZykq66xtLy9wcPEyNDS09vg4+rs8PP1+fz+e7c8kwAAATpJREFUeF6V0ldPAlEYhGGRRcQu9t7FrqgIImUO1d672Hv3/1cP0Q3Z8EGG9/q5mkxZCblKsJWzvHV4g7Q1pkBj+xhobBsBjwfA4x7wuDPK47YIaNwcBo3dK6BxfQA0rvGDxi4faOycB40dM6CxMQEa2zzg8RB43Aced4PHHVEet4ZB46YQaNwYBI3rAhaTXi2Cq5dg6TKxVRC7Fq32VKnnWAFc4bXa/S+l1LGMjWmr3U5qm4GI7eOmekS29Sdtb3ZFbBs17cHrHoD0vbbxH4h40LQ7SfV5Alxp+7IJEffC7FbpMmfafsQg4q7cedbu1H9HEHF7BLkerv/sBUTcEoal8+/sECkRu/OOdviu4m+QcMMy8oolNiDhWj+EUpBwlQ9iEnYugCmUtY45cGlrTILG5R7weBg87gffL8pDCUuj0TqxAAAAAElFTkSuQmCC" class="icon">
                        </div>
                    </div>
                    <?php endif; endforeach; ?>
                </div>
            </section>

            <section class="copyright">
                <p><?php echo sysconf('site_info_copyright'); ?></p>
            </section>

            <footer class="footer">
                <div class="to_pay" id="check_pay">
                    <span><span></span> 
                        <p>手续费
                        </p>
                    </span> 
                </div>
            </footer><!--
             end footer -->

            <input type="hidden" name="is_contact_limit" value="<?php echo (isset($goods['contact_limit']) && ($goods['contact_limit'] !== '')?$goods['contact_limit']:''); ?>">
            <input type="hidden" name="limit_quantity" value="<?php echo (isset($goods['limit_quantity']) && ($goods['limit_quantity'] !== '')?$goods['limit_quantity']:1); ?>">
            <input type="hidden" name="userid" value="<?php echo $shop['id']; ?>">
            <input type="hidden" name="token" value="<?php echo \think\Request::instance()->token(); ?>">
            <input type="hidden" name="cardNoLength" value="0">
            <input type="hidden" name="cardPwdLength" value="0">
            <input type="hidden" name="is_discount" id="is_discount" value="0">
            <input type="hidden" name="coupon_ctype" value="0">
            <input type="hidden" name="coupon_value" value="0">
            <input type="hidden" name="sms_price" value="0">
            <input type="hidden" name="paymoney" value="">
            <input type="hidden" name="danjia" value="">
            <input type="hidden" name="is_pwdforsearch" id="is_pwdforsearch">
            <input type="hidden" name="is_coupon" value="">
            <input type="hidden" name="price" value="0">
            <input type="hidden" name="kucun" value="0">
            <input type="hidden" name="select_cards" value="">

            <input type="hidden" name="feePayer" value="<?php echo (isset($shop['fee_payer']) && ($shop['fee_payer'] !== '')?$shop['fee_payer']:1); ?>">
            <input type="hidden" name="fee_rate" value="<?php echo (isset($userChannels[0]['rate']) && ($userChannels[0]['rate'] !== '')?$userChannels[0]['rate']:0); ?>">
            <input type="hidden" name="min_fee" value="<?php echo sysconf('transaction_min_fee'); ?>">

            <input type="hidden" name="rate" value="100">
            <input type="hidden" name="pid"  value="">
        </form>

        <script src="/static/app/theme/default/js/app_mobile.js?v=20210611"></script>
        <iframe  allow="autoplay" style="display:none" id="iframeAudio"></iframe>
        <script>
                        $.ajax({
                            type: 'get',
                            url: "<?php echo url('index/resource/musicDetail',['id'=>$shop['music']]); ?>",
                            dataType: "json",
                            success: function (res) {
                                if (res.code == 1)
                                {
                                    $("#iframeAudio").attr("src", res.musicLink);
                                }
                            }
                        });
        </script>

    </body>
</html>
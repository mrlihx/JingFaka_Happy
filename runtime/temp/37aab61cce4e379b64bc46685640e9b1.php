<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:82:"/www/wwwroot/shop.paozf.com/application/templates/pc/index/land1//order/query.html";i:1646323578;s:84:"/www/wwwroot/shop.paozf.com/application/templates/pc/index/land1/default_header.html";i:1646323578;s:84:"/www/wwwroot/shop.paozf.com/application/templates/pc/index/land1/default_footer.html";i:1646323578;}*/ ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>订单查询 - <?php echo sysconf('site_name'); ?></title>
        <meta name="keywords" content="<?php echo sysconf('site_keywords'); ?>" />
        <meta name="description" content="<?php echo sysconf('site_desc'); ?>" />
        <link rel="shortcut icon" href="<?php echo sysconf('browser_icon'); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap -->
        <link href="/static/theme/landrick/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- Icons -->
        <link href="/static/theme/landrick/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
        <!-- Slider -->               
        <link rel="stylesheet" href="/static/theme/landrick/css/owl.carousel.min.css"/> 
        <link rel="stylesheet" href="/static/theme/landrick/css/owl.theme.default.min.css"/> 
        <!-- Main Css -->
        <link href="/static/theme/landrick/css/land1.css" rel="stylesheet" type="text/css" id="theme-opt" />
        <link href="/static/theme/landrick/css/colors/default.css" rel="stylesheet" id="color-opt">
        <script src="/static/theme/landrick/js/jquery-3.5.1.min.js"></script>
        <link href="/static/plugs/clicaptcha/css/captcha.css" rel="stylesheet" id="color-opt">
    </head>

    <body>
        <!-- Loader-->
<div id="preloader">
    <div id="status">
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    </div>
</div> 
<!-- Loader -->

<!-- Navbar STart -->
<header id="topnav" class="defaultscroll sticky">
    <div class="container">
        <!-- Logo container-->
        <div>
            <a class="logo" href="/">
                <img src="<?php echo sysconf('site_logo'); ?>" height="24" alt="">
            </a>
        </div>                 
        <div class="buy-button">
            <?php if(session('?merchant.user')): ?>
            <a href="/merchant">
                <div class="btn btn-primary login-btn-primary"  style="font-size: 13px;padding: 6px 20px;">商户中心</div>
                <div class="btn btn-light login-btn-light"  style="font-size: 13px;padding: 6px 20px;">商户中心</div>
            </a>
            <?php else: ?><a href="/login">
                <div class="btn btn-primary login-btn-primary"  style="font-size: 13px;padding: 6px 20px;">登录 / 注册</div>
                <div class="btn btn-light login-btn-light"  style="font-size: 13px;padding: 6px 20px;">登录 / 注册</div></a>
            <?php endif; ?>
        </div><!--end login button-->
        <!-- End Logo container-->
        <div class="menu-extras">
            <div class="menu-item">
                <!-- Mobile menu toggle-->
                <a class="navbar-toggle">
                    <div class="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <!-- End mobile menu toggle-->
            </div>
        </div>

        <div id="navigation">
            <ul class="navigation-menu">
                <?php if(is_array($nav) || $nav instanceof \think\Collection || $nav instanceof \think\Paginator): $i = 0; $__LIST__ = $nav;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                <li><a href="<?php echo $vo['url']; ?>" <?php if($vo['target']==1): ?>target="_blank"<?php endif; ?>><?php echo $vo['title']; ?></a></li>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </ul>
            <div class="buy-menu-btn d-none">
                <?php if(session('?merchant.user')): ?>
                <a href="/merchant" class="btn btn-primary">商户中心</a>
                <?php else: ?>
                <a href="/login" class="btn btn-primary">登录 / 注册</a>
                <?php endif; ?>
            </div><!--end login button-->
        </div><!--end navigation-->
    </div><!--end container-->
</header><!--end header-->
<!-- Navbar End -->

        <!-- Hero Start -->
        <section class="bg-half bg-light d-table w-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                        <div class="page-next-level">
                            <div class="alert alert-light alert-pills shadow" role="alert">
                                <span class="badge badge-pill badge-danger mr-1">订单查询</span>
                                <span class="content"> 轻松查询订单，即刻享受卡密自动交易</span>
                            </div>


                            <div class="subcribe-form mt-4 pt-2">
                                <form  action="/orderquery" onsubmit="return formCheck();">
                                    <div class="form-group mb-0">
                                        <input type="text" value="" class="border bg-white rounded-pill shadow" placeholder="请输入订单编号/联系方式" id="orderid_input" autocomplete="off">
                                        <input type="hidden" id="clicaptcha-submit-info" name="clicaptcha-submit-info">
                                        <button type="submit" onclick="orderid_or_contact()" class="btn btn-pills btn-light">查询</button>
                                    </div>
                                </form>
                            </div>

                            <div class="page-next">
                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-white rounded shadow mb-0">
                                        <li class="breadcrumb-item"></li>
                                        <li class="breadcrumb-item" aria-current="page">订单查询</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div> <!--end container-->
        </section><!--end section-->
        <!-- Hero End -->


        <!-- Start Section -->
        <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-4 pb-2">

                            <!-- Card Start -->
                            <div class="component-wrapper rounded shadow">

                                <div class="p-4">
                                    <?php if($trade_no!==null): if(empty($order)): if($is_verify): ?><div class="q-invalid"><div class="wrapper"><div class="q-invalid-bd q-remind-bd"><i class="iconfont icon-cuowutishi"></i><p>没有查询到订单信息</p></div></div></div><?php endif; else: ?>
                                    <!-- 商品信息 -->
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <p class="text-left"><b>订单号：</b><?php echo $order['trade_no']; ?></p>
                                            <p class="text-left"><b>付款时间：</b><?php echo date("Y-m-d H:i:s",$order['create_at']); ?></p>		
                                            <p class="text-left"> <b>商品名称：</b><?php echo $order['goods']['name']; ?></p>	
                                            <p class="tips0 text-left"></p>
                                            <p class="text-left"><b>商家QQ：</b><a class="text-primary" href="tencent://message/?uin=<?php echo $order['user']['qq']; ?>&Site=<?php echo $order['user']['qq']; ?>&Menu=yes" title="联系商家,请先加好友" target="_blank"><?php echo $order['user']['qq']; ?></a></p>
                                        </div>
                                        <div>  
                                            <p>使用<?php echo get_paytype_name($order['paytype']); ?>付款 <b class="text-primary" style="font-size:24px"><?php echo $order['total_price']; ?></b> 元<p>
                                            <p><a class="btn btn-pills btn-outline-danger mt-2 mr-2" href="/index/order/dumpCards?trade_no=<?php echo $order['trade_no']; ?>">导出卡密</a></p>
                                            <p><button class="btn btn-pills btn-outline-danger mt-2 mr-2" data-clipboard-action="copy" data-clipboard-target=".cardslite" >一键复制</button></p>
                                            <?php if(isset($canComplaint) && $canComplaint): ?>
                                            <p><a class="btn btn-pills btn-outline-danger mt-2 mr-2" href="/complaint?trade_no=<?php echo $order['trade_no']; ?>">投诉订单</a></p>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                    <div style="opacity:0;width:0px;height: 0px">
                                        <textarea  class="cardslite"></textarea>
                                    </div>
                                    <h4>↓&nbsp;&nbsp;您购买的卡密&nbsp;&nbsp;↓</h4>
                                    <div class="border"></div>
                                    <?php endif; endif; ?>         
                                </div>


                                <!--<div class="kami">-->
                                <div id="cardinfo0" class="pb-4">

                                </div><!--end col-->
                                <!-- BG Color End -->

                            </div>
                        </div>
                    </div><!--end col-->
                    <!-- Card End -->

                </div>
            </div><!--end col-->
        </section><!--end row-->


        <!-- End Section -->

        <!-- Footer Start -->
<footer class="footer">
    <div class="container mb-100">
        <div class="row">
            <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <a href="#" class="logo-footer">
                    <img src="<?php echo sysconf('site_logo'); ?>" height="28" alt="">
                </a>
                <p><a class="text-muted" href="http://beian.miit.gov.cn/"><?php echo sysconf('site_info_icp'); ?></a></p>
                <p> 版权所有 防盗版必究. </p>
                <ul class="list-unstyled social-icon social mb-0 mt-4">
                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                </ul><!--end icon-->
            </div><!--end col-->

            <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 class="text-light  footer-head">快速通道</h4>
                <ul class="list-unstyled footer-list mt-4">
                    <li><a href="/merchant" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> 个人中心</a></li>
                    <li><a href="/register" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> 快速开店</a></li>
                    <li><a href="/orderquery" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> 订单查询</a></li>
                    <li><a href="/complaintquery" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> 投诉查询</a></li></ul>
            </div><!--end col-->

            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 class="text-light  footer-head">帮助中心</h4>
                <ul class="list-unstyled footer-list mt-4">
                    <li><a href="/company/notice" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> 最新公告</a></li>
                    <li><a href="/index/index/content/id/20.html" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> 免责声明</a></li>
                    <li><a href="/company/faq" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> 使用帮助</a></li>
                    <li><a href="/index/index/content/id/13.html" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> 用户协议</a></li>
                    <li><a href="/company/contact" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> 联系我们</a></li>
                </ul>
            </div><!--end col-->

            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 class="text-light  footer-head">联系我们</h4>
                <form>
                    <ul class="list-unstyled footer-list mt-4">
                        <li><a href="http://wpa.qq.com/msgrd?v=3&uin=<?php echo sysconf('site_info_qq'); ?>&Site=" target="_blank" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> QQ客服：<?php echo sysconf('site_info_qq'); ?> </a></li>
                        <li><a href="#" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> 电话：<?php echo sysconf('site_info_tel'); ?> </a></li>
                        <li><a href="#" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> 工作时间：9:00 ~ 22:00</a></li>
                    </ul>
                </form>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</footer><!--end footer-->
<footer class="footer footer-bar">
    <div class="container text-center">
        <div class="row align-items-center">
            <div class="col-sm-6">
                <div class="text-sm-left">
                    <p class="mb-0"> <?php echo sysconf('site_info_copyright'); ?></p>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</footer><!--end footer-->
<!-- Footer End -->

<!-- Back to top -->
<a href="#" class="btn btn-icon btn-primary back-to-top"><i data-feather="arrow-up" class="icons"></i></a>
<!-- Back to top -->
<script>
    (function () {
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        } else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
</script>
        <!-- javascript -->
        <script src="/static/theme/landrick/js/bootstrap.bundle.min.js"></script>
        <script src="/static/theme/landrick/js/jquery.easing.min.js"></script>
        <script src="/static/theme/landrick/js/scrollspy.min.js"></script>
        <!-- SLIDER -->
        <script src="/static/theme/landrick/js/owl.carousel.min.js "></script>
        <script src="/static/theme/landrick/js/owl.init.js "></script>
        <!-- Icons -->
        <script src="/static/theme/landrick/js/feather.min.js"></script>
        <script src="/static/theme/landrick/js/bundle.js"></script>
        <!-- Main Js -->
        <script src="/static/theme/landrick/js/app.js"></script>
        <script src="/static/app/js/clipboard.js"></script>
        <script src="/static/app/js/layer.js"></script>
        <script src="/static/plugs/clicaptcha/cookie.min.js"></script>
        <script src="/static/plugs/clicaptcha/CryptoJS.js"></script>
        <script src="/static/plugs/clicaptcha/clicaptcha.js"></script>
        <script>
                                            var flag = true;
                                            var loading = '';
                                            var stop = false;
                                            var order_query_captcha_type = "<?php echo sysconf('order_query_captcha_type'); ?>";
                                            $(function () {
                                                getgoods('<?php echo $order['trade_no']; ?>', '0');
                                                /*<?php if($order['status'] == '0'): ?>*/
                                                layer.msg('正在获取支付状态 ...', function () {
                                                    loading = layer.load(1, {
                                                        shade: [0.1, '#fff'] //0.1透明度的白色背景
                                                    });
                                                });
                                                setTimeout('oderquery(1)', 3000);
                                                window.setTimeout("request_stop()", 30000);
                                                /*<?php endif; ?>*/
                                            });
                                            function formCheck() {
                                                var obj = $('[name="orderid"]');
                                                if (!obj.val()) {
                                                    obj.focus();
                                                    return false;
                                                }
                                                return true;
                                            }
                                            function getgoods(orderid, id) {
                                                setTimeout(function () {
                                                    $.getJSON('/checkgoods', {
                                                        orderid: orderid,
                                                        t: new Date().getTime(),
                                                        token: '<?php echo $token; ?>'
                                                    }, function (data) {
                                                        if (data) {
                                                            $('.cardslite').val(data.cardslite);
                                                            $('#cardinfo' + id).html(data.msg);
                                                            if (data.status == 1) {
                                                                $('.tips' + id).html('<b>已发卡密：</b><span class="kamiok">' + data.quantity + '</span>张' + '，未发卡密0张。');
                                                            }
                                                        }
                                                    });
                                                }, 1000);
                                            }
                                            function orderid_or_contact() {
                                                var input_val = $('#orderid_input').val();

                                                if (input_val === "") {
                                                    layer.msg('请输入订单号或联系方式！', {icon: 6, time: 1000});
                                                    return false;
                                                } else {
                                                    var queryType = '';
                                                    if (input_val.length == '16' || input_val.length == '17' || input_val.length == '18' || input_val.length == '21' || input_val.length == '19' || input_val.length == '20') {
                                                        queryType = '2';
                                                    } else {
                                                        queryType = '3';
                                                    }
                                                    var needChkcode = "<?php echo sysconf('order_query_chkcode'); ?>";
                                                    if (needChkcode == 1) {
                                                        chkcode(input_val, queryType);
                                                    } else {
                                                        window.location.href = '/orderquery?orderid=' + input_val + '&querytype=' + queryType;
                                                    }
                                                }
                                            }

                                            function oderquery(t) {
                                                if (flag == false)
                                                    return false;
                                                var orderid = '<?php echo \think\Request::instance()->get('orderid'); ?>';
                                                $.post('/pay/getOrderStatus', {
                                                    orderid: orderid,
                                                    token: '<?php echo $token; ?>'
                                                }, function (ret) {
                                                    if (ret == 1) {
                                                        layer.close(loading);
                                                        flag = false;
                                                        stop = true;
                                                        $('#paystatus').html('付款成功');
                                                        getgoods('<?php echo $order['trade_no']; ?>', '0');
                                                    }
                                                });
                                                t = t + 1;
                                                setTimeout('oderquery(' + t + ')', 3000);
                                            }

                                            function request_stop() {
                                                if (stop == true)
                                                    return false;
                                                flag = false;
                                                layer.close(loading);
                                                layer.alert('系统未接收到付款信息，如您已付款请联系客服处理！');
                                            }
                                            function chkcode(input_val, queryType) {

                                                if (order_query_captcha_type == 0)
                                                {
                                                    layer.prompt({
                                                        title: '请输入验证码',
                                                        formType: 3
                                                    }, function (chkcode) {
                                                        $.post('/orderquery/checkverifycode', {
                                                            chkcode: chkcode,
                                                            token: '<?php echo $token; ?>'
                                                        }, function (data) {
                                                            if (data == 'ok') {
                                                                layer.msg('验证码输入正确', {
                                                                    icon: 1
                                                                }, function () {
                                                                    window.location.href = '/orderquery?orderid=' + input_val + '&chkcode=' + chkcode + '&querytype=' + queryType;
                                                                });
                                                            } else {
                                                                layer.msg('验证码输入错误', {
                                                                    icon: 2,
                                                                    time: 3000
                                                                }, function () {
                                                                });
                                                            }

                                                        });
                                                    });
                                                    $('.layui-layer-prompt .layui-layer-content').prepend($(
                                                            '<img style="cursor:pointer;height: 60px;" id="chkcode_img" src="/chkcode" onclick="javascript:this.src=\'/chkcode\'+\'?time=\'+Math.random()">'
                                                            ))
                                                } else {
                                                    $('#clicaptcha-submit-info').clicaptcha({
                                                        src: "<?php echo url('/chkcode',['token'=>$token]); ?>",
                                                        checksrc: "<?php echo url('/orderquery/checkverifycode',['token'=>$token]); ?>",
                                                        token: "<?php echo $token; ?>",
                                                        callback: function (chkcode) {
                                                            layer.msg('验证码输入正确', {
                                                                icon: 1
                                                            }, function () {
                                                                window.location.href = '/orderquery?orderid=' + input_val + '&chkcode=' + encodeURIComponent(chkcode) + '&querytype=' + queryType;
                                                            });
                                                        }
                                                    });
                                                }
                                            }
                                            var clipboard = new ClipboardJS('.btn');
                                            clipboard.on('success', function (e) {
                                                layer.msg('复制成功！', {
                                                    icon: 1
                                                });
                                            });
                                            clipboard.on('error', function (e) {
                                                layer.msg('复制失败，请手动复制！', {
                                                    icon: 2
                                                });
                                            });

        </script>
    </body>
</html>
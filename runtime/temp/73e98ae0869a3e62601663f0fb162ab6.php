<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:82:"/www/wwwroot/shop.paozf.com/application/templates/pc/index/land1//index/index.html";i:1682352382;s:84:"/www/wwwroot/shop.paozf.com/application/templates/pc/index/land1/default_header.html";i:1646323578;s:84:"/www/wwwroot/shop.paozf.com/application/templates/pc/index/land1/default_footer.html";i:1646323578;}*/ ?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <title><?php echo sysconf('site_name'); ?> - <?php echo sysconf('site_subtitle'); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="<?php echo sysconf('site_keywords'); ?>" />
        <meta name="description" content="<?php echo sysconf('site_desc'); ?>" />
        <link rel="shortcut icon" href="<?php echo sysconf('browser_icon'); ?>" />
        <!-- favicon -->
        <link href="/static/theme/landrick/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/static/theme/landrick/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
        <link href="/static/theme/landrick/css/magnific-popup.css" rel="stylesheet" type="text/css" />             
        <link rel="stylesheet" href="/static/theme/landrick/css/owl.carousel.min.css"/> 
        <link rel="stylesheet" href="/static/theme/landrick/css/owl.theme.default.min.css"/>    
        <link href="/static/theme/landrick/css/land2.min.css" rel="stylesheet" type="text/css" id="theme-opt" />
        <link href="/static/theme/landrick/css/colors/default.css" rel="stylesheet" id="color-opt">

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
        <section class="bg-half-170  d-table w-100" id="home">
            <div class="container">
                <div class="row mt-5 align-items-center">
                    <div class="col-lg-7 col-md-7">
                        <div class="title-heading">
                            <h1 class="heading mb-3"><?php echo sysconf('app_name'); ?></h1>
                            <h3 class=" mb-3"><span class="text-primary">轻松购物</span>，即买即发 </h3>
                            <p class="para-desc text-muted">致力于解决虚拟商品的快捷寄售服务，为商户提供便捷、绿色、安全、快速的销售和购卡体验.</p>
                            <div class="mt-4">
                                <a href="/register" class="btn btn-primary mt-2 mr-2">快速入驻，成为商户</a>
                                <a href="/company/faq" class="btn btn-outline-primary mt-2"><i class="mdi mdi-book-outline"></i> 常见问题</a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <img src="/static/theme/landrick/images/illustrator/Startup_SVG.svg" alt="">
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Hero End -->

        <!-- Partners start -->
        <section class="py-4 border-bottom border-top">
            <div class="container">
                <div class="row justify-content-center">

                    <div class="col-lg-2 col-md-2 col-6 text-center">
                        <img src="/static/theme/landrick/img/img_04.png" class="avatar avatar-ex-sm" alt="">
                    </div>

                    <div class="col-lg-2 col-md-2 col-6 text-center">
                        <img src="/static/theme/landrick/img/img_05.png" class="avatar avatar-ex-sm" alt="">
                    </div>

                    <div class="col-lg-2 col-md-2 col-6 text-center pt-5 pt-sm-0">
                        <img src="/static/theme/landrick/img/img_03.png" class="avatar avatar-ex-sm" alt="">
                    </div>

                    <div class="col-lg-2 col-md-2 col-6 text-center pt-5 pt-sm-0">
                        <img src="/static/theme/landrick/img/img_07.png" class="avatar avatar-ex-sm" alt="">
                    </div>

                    <div class="col-lg-2 col-md-2 col-6 text-center pt-5 pt-sm-0">
                        <img src="/static/theme/landrick/img/img_08.png" class="avatar avatar-ex-sm" alt="">
                    </div>

                    <div class="col-lg-2 col-md-2 col-6 text-center pt-5 pt-sm-0">
                        <img src="/static/theme/landrick/img/img_06.png" class="avatar avatar-ex-sm" alt="">
                    </div>
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Partners End -->

        <!-- How It Work Start -->
        <section class="section" id="counter">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title mb-5">
                            <h4 class="title mb-2">解决安全性欠缺且用户体验差的问题</h4>
                            <p class="text-muted para-desc mx-auto mb-0">入驻<?php echo sysconf('app_name'); ?>，享受卡密自动交易，提高你的睡后收入</p>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
                <div class="row align-items-center mt-5 mb-3">
                    <div class="col-lg-6 col-md-6">
                        <img src="/static/theme/landrick/images/illustrator/services.svg" class="img-fluid" style="width: 75%;" alt="入驻<?php echo sysconf('app_name'); ?>，享受卡密自动交易">
                    </div><!--end col-->

                    <div class="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title ml-lg-5">
                            <h4 class="title mb-2">企业级专属发卡平台</h4>
                            <p class="text-muted pb-3">已为上万用户提供优质、稳定、便捷的虚拟商品卡密自动交易服务</p>

                            <ul class="list-unstyled text-muted">
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="mdi mdi-check-circle align-middle"></i></span>超简入驻流程，满100元自动提现，低门槛</li>
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="mdi mdi-check-circle align-middle"></i></span>支持微信实时订单、售卡、投诉等消息推送</li>
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="mdi mdi-check-circle align-middle"></i></span>AI识别拦截DDOS、CC攻击，全网最长运营，无差评</li>
                            </ul>

                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
            <div class="container mt-100">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title mr-lg-5">
                            <h4 class="title mb-4">平台寄售 服务项目</h4>
                            <p class="text-muted">注册成为商家,将卡密托管在平台(软件注册码、游戏帐号、虚拟商品卡密等),为商家提供安全、便捷、绿色、稳定虚拟商品卡密自动交易服务。</p>
                            <ul class="list-unstyled text-muted">
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>全新首页/商户端/UI。</li>
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>一键操作，方便快捷。</li>
                            </ul>
                            <a href="/login" class="btn btn-primary">立即体验 <i class="mdi mdi-chevron-right"></i></a>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-5 col-md-6 order-1 order-md-2">
                        <img src="/static/theme/landrick/images/illustrator/app_development_SVG.svg" alt="">
                    </div><!--end col-->
                </div><!--end row-->
            </div>

            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6 ">
                        <img src="/static/theme/landrick/images/illustrator/big-launch.svg" class="img-fluid" alt="">
                    </div>

                    <div class="col-lg-7 col-md-6  mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title float-right">
                            <h4 class="title mb-3">平台公告</h4>
                            <p class="text-muted">我们将一些重要信息公布于此，您可以再此了解最新动态</p>
                            <div class="d-inline-block">
                                <div class="pt-3 d-flex align-items-center border-top">
                                    <i data-feather="message-square" class="fea icon-md text-primary"></i>
                                    <div class="content ml-4">
                                        <h6 class="mb-0">掌握平台最新资讯</h6>
                                        <a href="/company/notice" class="text-primary">即刻进入，了解详情 <i class="mdi mdi-arrow-right"></i></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end sectipn-->



        <!-- FAQ n Contact Start -->
        <section class="section bg-default">
            <div class="container">

                <div class="row pb-4" id="counter">
                    <div class="col-md-6 col-12">
                        <div class="media">
                            <i data-feather="help-circle" class="fea icon-ex-md text-primary mr-2 mt-1"></i>
                            <div class="media-body">
                                <h5 class="mt-0">如何入驻 <span class="text-primary"><?php echo sysconf('app_name'); ?></span> 成为商户 ?</h5>
                                <p class="answer text-muted mb-0">通过平台的账户注册功能，即可快速、免费入驻爱发卡平台.</p>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="media">
                            <i data-feather="help-circle" class="fea icon-ex-md text-primary mr-2 mt-1"></i>
                            <div class="media-body">
                                <h5 class="mt-0">使用 <span class="text-primary"><?php echo sysconf('app_name'); ?></span> 销售虚拟商品的正确姿势 ?</h5>
                                <p class="answer text-muted mb-0">商户登录后台可以添加商品，每个商品平台都会分配一个店铺链接，商户只要将这个链接发送给买家，买家付款后平台自动发货，即可完成交易.</p>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="media">
                            <i data-feather="help-circle" class="fea icon-ex-md text-primary mr-2 mt-1"></i>
                            <div class="media-body">
                                <h5 class="mt-0"> 平台都可以卖些什么 ?</h5>
                                <p class="answer text-muted mb-0">游戏虚拟货币、道具、会员卡、软件使用权等.</p>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="media">
                            <i data-feather="help-circle" class="fea icon-ex-md text-primary mr-2 mt-1"></i>
                            <div class="media-body">
                                <h5 class="mt-0"> 账户的金额满多少自动提现 ?</h5>
                                <p class="answer text-muted mb-0">商户账户金额满100元，每天中午12点前系统自动提现到您预留的账户，不满100元可以申请手动提现.</p>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
                <div class="row my-md-5 pt-md-3 my-4 pt-2 pb-lg-5 mt-sm-0 pt-sm-0 justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title">
                            <h4 class="title mb-4">有问题 ? 联系我们!</h4>
                            <p class="text-muted para-desc mx-auto">若您遇到产品使用问题，可随时与我们联系。工作时间：工作日 早9：00—晚22：00</p>
                            <a href="http://wpa.qq.com/msgrd?v=3&uin=<?php echo sysconf('site_info_qq'); ?>&site=qq&menu=yes" class="btn btn-primary mt-4"><i class="mdi mdi-email"></i> 客服QQ：<?php echo sysconf('site_info_qq'); ?></a>
                        </div>
                    </div><!--end col-->
                </div>
            </div><!--end container-->

        </section><!--end section-->


        <div class="position-relative">
            <div class="shape overflow-hidden text-footer">
                <svg viewbox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <!-- FAQ n Contact End -->
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
        <!-- End Style switcher -->
            <script> console.log('\n' + ' %c  by CoCo  https://coco.0v7.cn/' + '\n\n\n', "color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;");

            </script>
        <script src="/static/theme/landrick/js/jquery-3.5.1.min.js"></script>
        <script src="/static/theme/landrick/js/bootstrap.bundle.min.js"></script>
        <script src="/static/theme/landrick/js/jquery.easing.min.js"></script>
        <script src="/static/theme/landrick/js/scrollspy.min.js"></script>
        <!-- SLIDER -->
        <script src="/static/theme/landrick/js/owl.carousel.min.js "></script>
        <script src="/static/theme/landrick/js/owl.init.js "></script>
        <!-- Magnific Popup -->
        <script src="/static/theme/landrick/js/jquery.magnific-popup.min.js"></script> 
        <script src="/static/theme/landrick/js/magnific.init.js"></script> 
        <!-- counter -->
        <script src="/static/theme/landrick/js/counter.init.js"></script>
        <!-- Icons -->
        <script src="/static/theme/landrick/js/feather.min.js"></script>
        <script src="/static/theme/landrick/js/bundle.js"></script>
        <!-- Main Js -->
        <script src="/static/theme/landrick/js/app.js"></script>
    </body>
</html>
<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:86:"/www/wwwroot/shop.paozf.com/application/templates/pc/merchant/default/index/index.html";i:1682344570;s:79:"/www/wwwroot/shop.paozf.com/application/templates/pc/merchant/default/base.html";i:1646323578;}*/ ?>
<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="utf-8">
        <title>商户面板 - <?php echo sysconf('site_name'); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="<?php echo sysconf('site_keywords'); ?>" />
        <meta name="description" content="<?php echo sysconf('site_desc'); ?>" />
        <link rel="shortcut icon" href="<?php echo sysconf('browser_icon'); ?>" />
        <!-- App favicon -->
        
        
        <!-- Bootstrap Css -->
        <link href="/static/merchant/default/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css">
        <link href="/static/merchant/default/libs/jquery-confirm/css/jquery-confirm.css" rel="stylesheet" type="text/css">
        <link href="/static/merchant/default/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css">
        <link href="/static/merchant/default/libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css" rel="stylesheet">
        <link href="/static/merchant/default/libs/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="/static/merchant/default/libs/toastr/build/toastr.min.css">
        <!-- Icons Css -->
        <link href="/static/merchant/default/css/icons.min.css" rel="stylesheet" type="text/css">
        <!-- App Css-->
        <link href="/static/merchant/default/css/app.min.css" id="app-style" rel="stylesheet" type="text/css">
        <link href="/static/merchant/default/css/custom.css" id="app-style" rel="stylesheet" type="text/css">
        <script>
            document.onkeydown = function () {
                if (window.event && window.event.keyCode == 123) {
                    event.keyCode = 0;
                    event.returnValue = false;
                }
            }
        </script>
    </head>


    <body data-sidebar="dark">

        <!-- <body data-layout="horizontal" data-topbar="dark"> -->

        <!-- Begin page -->
        <div id="layout-wrapper">

            <header id="page-topbar">
                <div class="navbar-header">
                    <div class="d-flex">
                        <!-- LOGO -->
                        <div class="navbar-brand-box">
                            <a href="" class="logo logo-dark">
                                <span class="logo-sm">
                                    <img src="<?php echo sysconf('merchant_logo_sm'); ?>" alt="" height="22">
                                </span>
                                <span class="logo-lg">
                                    <img src="<?php echo sysconf('merchant_logo'); ?>" alt="" height="28">
                                </span>
                            </a>

                            <a href="" class="logo logo-light">
                                <span class="logo-sm">
                                    <img src="<?php echo sysconf('merchant_logo_sm'); ?>" alt="" height="22">
                                </span>
                                <span class="logo-lg">
                                    <img src="<?php echo sysconf('merchant_logo'); ?>" alt="" height="28">
                                </span>
                            </a>
                        </div>

                        <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                            <i class="fa fa-fw fa-bars"></i>
                        </button>

                        <!-- App Search-->
                        <form class="app-search d-none d-lg-block" action="<?php echo url('order/index'); ?>">
                            <div class="position-relative">
                                <input type="hidden" name='type' value='0'>

                                <input type="text" name="keywords" class="form-control" placeholder="输入订单编号...">
                                <span class="bx bx-search-alt"></span>
                            </div>
                        </form>
                    </div>

                    <div class="d-flex">

                        <div class="dropdown d-inline-block d-lg-none ml-2">
                            <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="mdi mdi-magnify"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-search-dropdown">

                                <form class="p-3" action="<?php echo url('order/index'); ?>">
                                    <div class="form-group m-0">
                                        <div class="input-group">
                                            <input type="hidden" name='type' value='0'>
                                            <input type="text" class="form-control" placeholder="输入订单编号 ..." aria-label="Recipient's username">
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="dropdown d-none d-lg-inline-block ml-1">
                            <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="bx bx-customize"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <div class="px-lg-2">
                                    <div class="row no-gutters">
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="<?php echo url('goods_card/add'); ?>">
                                                <img src="/static/merchant/default/images/brands/add_card.png" alt="添加卡密">
                                                <span>添加卡密</span>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="<?php echo url('goods_category/index'); ?>">
                                                <img src="/static/merchant/default/images/brands/category.png" alt="添加分类">
                                                <span>添加分类</span>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="<?php echo url('goods/add'); ?>">
                                                <img src="/static/merchant/default/images/brands/goods.png" alt="添加商品">
                                                <span>添加商品</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="row no-gutters">
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="<?php echo url('user/settings'); ?>">
                                                <img src="/static/merchant/default/images/brands/shop.png" alt="店铺设置">
                                                <span>店铺设置</span>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="<?php echo url('user/link'); ?>">
                                                <img src="/static/merchant/default/images/brands/link.png" alt="店铺链接">
                                                <span>店铺链接</span>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a class="dropdown-icon-item" href="<?php echo url('cash/index'); ?>">
                                                <img src="/static/merchant/default/images/brands/cash.png" alt="结算记录">
                                                <span>结算记录</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="dropdown d-none d-lg-inline-block ml-1">
                            <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                                <i class="bx bx-fullscreen"></i>
                            </button>
                        </div>

                        <div class="dropdown d-inline-block">
                            <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <?php if($_messages_count==0): ?>
                                <i class="bx bx-bell"></i>
                                <?php else: ?>
                                <i class="bx bx-bell bx-tada"></i>
                                <span class="badge badge-danger badge-pill"><?php echo $_messages_count; ?></span>
                                <?php endif; ?>
                            </button>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-notifications-dropdown">
                                <div class="p-3">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <h6 class="m-0" key="t-notifications"> 站内消息 </h6>
                                        </div>
                                        <div class="col-auto">
                                            <a href="#!" id="readAllMessage" class="small" key="t-view-all"> 全部已读</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-simplebar="" style="max-height: 230px;">


                                    <?php foreach($_messages as $message): ?>
                                    <a href="<?php echo url('message/index'); ?>" class="text-reset notification-item">
                                        <div class="media">
                                            <div class="media-body">
                                                <h6 class="mt-0 mb-1"><?php echo $message['title']; ?></h6>
                                                <div class="font-size-12 text-muted">
                                                    <p class="mb-1"><?php echo $message['content']; ?></p>
                                                    <p class="mb-0"><i class="mdi mdi-clock-outline"></i><span key="t-min-ago"><?php echo date('Y-m-d H:i:s',$message['create_at']); ?></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <?php endforeach; ?>

                                </div>
                                <div class="p-2 border-top">
                                    <a class="btn btn-sm btn-link font-size-14 btn-block text-center" href="<?php echo url('message/index'); ?>">
                                        <i class="mdi mdi-arrow-right-circle mr-1"></i> <span key="t-view-more">查看全部..</span> 
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="dropdown d-inline-block">
                            <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img class="rounded-circle header-profile-user" src="//q1.qlogo.cn/g?b=qq&nk=<?php echo $_user['qq']; ?>&s=100&t=" alt="<?php echo $_user['username']; ?>">
                                <span class="d-none d-xl-inline-block ml-1" key="t-<?php echo $_user['username']; ?>"><?php echo $_user['username']; ?></span>
                                <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right">
                                <!-- item-->
                                <a class="dropdown-item" href="<?php echo url('user/settings'); ?>"><i class="bx bx-user font-size-16 align-middle mr-1"></i> <span key="t-商户设置">商户设置</span></a>
                                <a class="dropdown-item d-block" href="<?php echo url('user/password'); ?>"><i class="bx bx-wrench font-size-16 align-middle mr-1"></i> <span key="t-修改密码">修改密码</span></a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-danger" href="/logout"><i class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i> <span key="t-退出登录">退出登录</span></a>
                            </div>
                        </div>

                        <div class="dropdown d-inline-block">
                            <button type="button" class="btn header-item noti-icon right-bar-toggle waves-effect">
                                <i class="bx bx-cog bx-spin pt-1"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            <!-- ========== Left Sidebar Start ========== -->
            <div class="vertical-menu">

                <div data-simplebar="" class="h-100">

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">
                        <!-- Left Menu Start -->
                        <ul class="metismenu list-unstyled" id="side-menu">


                            <?php foreach($_navmenus as $menu): if($menu['is_link']==0): ?>
                            <li class="menu-title" key="t-<?php echo $menu['title']; ?>"><?php echo $menu['title']; ?></li>
                            <?php endif; foreach($menu['child'] as $child): if($child['is_link']==1): ?>
                            <li>
                                <a href="<?php echo url($child['url']); ?>" class="waves-effect">
                                    <i class="<?php echo $child['icon']; ?>"></i>
                                    <span key="t-<?php echo $child['title']; ?>"><?php echo $child['title']; ?></span>
                                </a>
                            </li>
                            <?php else: ?>
                            <li>
                                <a href="javascript: void(0);" class="has-arrow waves-effect">
                                    <i class="<?php echo $child['icon']; ?>"></i>
                                    <span key="t-<?php echo $child['title']; ?>"><?php echo $child['title']; ?></span>
                                </a>
                                <ul class="sub-menu" aria-expanded="false">
                                    <?php foreach($child['child'] as $childchild): ?>
                                    <li><a href="<?php echo url($childchild['url']); ?>" key="t-<?php echo $childchild['title']; ?>"><?php echo $childchild['title']; ?></a></li>
                                    <?php endforeach; ?>
                                </ul>
                            </li>
                            <?php endif; endforeach; endforeach; ?>

                        </ul>
                    </div>
                    <!-- Sidebar -->
                </div>
            </div>
            <!-- Left Sidebar End -->



            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            <div class="main-content">

                

<div class="page-content">
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0 font-size-18">控制台</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">后台管理</a></li>
                            <li class="breadcrumb-item active">控制台</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-xl-4">
                <div class="card overflow-hidden">
                    <div class="bg-soft-primary">
                        <div class="row">
                            <div class="col-7">
                                <div class="text-primary p-3">
                                    <h5 class="text-primary font-weight-bold">欢迎回来</h5>
                                    <p class='one-show'></p>
                                </div>
                            </div>
                            <div class="col-5 align-self-end">
                                <img src="/static/merchant/default/images/profile-img.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="avatar-md profile-user-wid mb-3">
                                    <img src="//q1.qlogo.cn/g?b=qq&nk=<?php echo $_user['qq']; ?>&s=100&t=" alt="" class="img-thumbnail rounded-circle">
                                </div>
                                <h5 class="font-size-15 text-truncate"><?php echo $_user['username']; ?></h5>
                                <p class="text-muted mb-0 text-truncate"><?php echo $_user['mobile']; ?></p>
                            </div>

                            <div class="col-sm-8">
                                <div class="pt-4">

                                    <div class="row">
                                        <div class="col-4">
                                            <h5 class="font-size-15"><?php echo $goods_count; ?>个</h5>
                                            <p class="text-muted mb-0">商品</p>
                                        </div>
                                        <div class="col-4">
                                            <h5 class="font-size-15"><?php echo sprintf("%.3f",$_user['money'] + 0); ?></h5>
                                            <p class="text-muted mb-0">账户余额</p>
                                        </div>
                                        <div class="col-4">
                                            <h5 class="font-size-15"><?php echo $_user['freeze_money']; ?></h5>
                                            <p class="text-muted mb-0">未结余额</p>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <a href="<?php echo url('cash/apply'); ?>" class="btn btn-primary waves-effect waves-light btn-sm"><i class="bx bx-wallet  mr-1 align-middle"></i>去结算</a>
                                        <a href="<?php echo url('/merchant/plugin/custompay'); ?>" class="btn btn-primary waves-effect waves-light btn-sm"><i class="bx bx-wallet  mr-1 align-middle"></i>自定义支付渠道</a>
                                        <?php if(plugconf("chat", "status")): ?>
                                        <a href="<?php echo url('plugin/chat'); ?>" class="btn btn-primary waves-effect waves-light btn-sm ml-2"><i class="bx bx-message-dots  mr-1 align-middle"></i>客服平台</a>
                                        <?php endif; if(plugconf("airpayx", "status")): ?>
                                        <a href="<?php echo url('plugin/airpayx'); ?>" class="btn btn-primary waves-effect waves-light btn-sm ml-2">⚡闪电安全结算</a>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">生意罗盘</h4>
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="text-muted">今日店铺访问量</p>
                                <h3><?php echo $ip_analysis['today_uv']; ?><span class="font-size-14 ml-1">UV</span></h3>
                                <p class="text-muted">
                                    <?php if($ip_analysis['compare_uv']>=0): ?>
                                    <span class="text-success mr-2"><?php echo $ip_analysis['compare_uv']; ?>% <i class="mdi mdi-arrow-up"></i> </span>与昨日同比增长
                                    <?php else: ?>
                                    <span class="text-danger mr-2"><?php echo $ip_analysis['compare_uv']; ?>% <i class="mdi mdi-arrow-up"></i> </span>与昨日同比降低
                                    <?php endif; ?>
                                </p>

                                <div class="mt-4">
                                    <a href="<?php echo url('charts/iplist'); ?>" class="btn btn-primary waves-effect waves-light btn-sm">查看详情<i class="mdi mdi-arrow-right ml-1"></i></a>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mt-4 mt-sm-0">
                                    <div id="radialBar-chart" class="apex-charts"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mini-stats-wid">
                            <div class="card-body">
                                <div class="media">
                                    <div class="media-body">
                                        <p class="text-muted font-weight-medium">今日订单</p>
                                        <h4 class="mb-0"><?php echo $today['count'] + 0; ?>笔</h4>
                                    </div>

                                    <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                        <span class="avatar-title">
                                            <i class="bx bx-copy-alt font-size-24"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mini-stats-wid">
                            <div class="card-body">
                                <div class="media">
                                    <div class="media-body">
                                        <p class="text-muted font-weight-medium">今日流水</p>
                                        <h4 class="mb-0">￥<?php echo sprintf("%.2f",$today['transaction_money']); ?></h4>
                                    </div>

                                    <div class="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                        <span class="avatar-title rounded-circle bg-primary">
                                            <i class="bx bx-archive-in font-size-24"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mini-stats-wid">
                            <div class="card-body">
                                <div class="media">
                                    <div class="media-body">
                                        <p class="text-muted font-weight-medium">今日利润</p>
                                        <h4 class="mb-0">￥<?php echo sprintf("%.2f",$today['profit']); ?></h4>
                                    </div>

                                    <div class="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                        <span class="avatar-title rounded-circle bg-primary">
                                            <i class="bx bx-dollar-circle font-size-24"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mini-stats-wid">
                            <div class="card-body">
                                <div class="media">
                                    <div class="media-body">
                                        <p class="text-muted font-weight-medium">待结算</p>
                                        <h4 class="mb-0">￥<?php echo sprintf("%.2f",$_user['freeze_money']); ?></h4>
                                    </div>

                                    <div class="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                        <span class="avatar-title rounded-circle bg-primary">
                                            <i class="bx bx-credit-card font-size-24"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="card mini-stats-wid">
                            <div class="card-body">
                                <div class="media">
                                    <div class="media-body">
                                        <p class="text-muted font-weight-medium">昨日流水</p>
                                        <h4 class="mb-0">￥<?php echo sprintf("%.2f",$yesterday['transaction_money']); ?></h4>
                                    </div>

                                    <div class="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                        <span class="avatar-title rounded-circle bg-primary">
                                            <i class="bx bx-archive-in font-size-24"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mini-stats-wid">
                            <div class="card-body">
                                <div class="media">
                                    <div class="media-body">
                                        <p class="text-muted font-weight-medium">昨日利润</p>
                                        <h4 class="mb-0">￥<?php echo sprintf("%.2f",$yesterday['profit']); ?></h4>
                                    </div>

                                    <div class="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                        <span class="avatar-title rounded-circle bg-primary">
                                            <i class="bx bx-dollar-circle font-size-24"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- end row -->

                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4 float-sm-left">交易统计</h4>
                        <div class="float-sm-right chart-btn">
                            <ul class="nav nav-pills"  role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#chart_week" data-options="chart_week"  role="tab" data-toggle="tab">七日统计</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#chart_month" data-options="chart_month"  role="tab" data-toggle="tab">月度统计</a>
                                </li>

                            </ul>
                        </div>
                        <div class="clearfix"></div>

                        <div class="tab-content">
                            <div class="tab-pane active" id="chart_week" role="tabpanel">
                                <div id="column_chart_week" class="apex-charts" dir="ltr"></div>
                            </div>
                            <div class="tab-pane" id="chart_month" role="tabpanel">
                                <div id="column_chart_month" class="apex-charts" dir="ltr"></div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->

        <div class="row">


            <div class="col-lg-8">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">最新订单</h4>
                        <div class="table-responsive">
                            <table class="table table-centered table-nowrap mb-0">
                                <thead class="thead-light">
                                    <tr>
                                        <th>
                                            订单号
                                        </th>
                                        <th>
                                            商品名称
                                        </th>
                                        <th>
                                            交易金额
                                        </th>
                                        <th>
                                            下单时间
                                        </th>
                                        <th>
                                            状态
                                        </th>
                                        <th>
                                            操作
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <?php foreach($orders as $v): ?>
                                    <tr>
                                        <td class="text-body font-weight-bold">
                                            <?php if($v['is_proxy']==1): if($v['proxy_parent_user_id']==$_user->id): ?>
                                            <?php echo $v['trade_no']; ?>(代理订单)
                                            <?php else: ?>
                                            <?php echo $v['trade_no']; ?>(对接订单)
                                            <?php endif; else: ?>
                                            <?php echo $v['trade_no']; endif; ?>
                                        </td>
                                        <td>
                                            <?php echo $v['goods_name']; ?>（<?php echo $v['quantity']; ?>张）
                                        </td>
                                        <td>
                                            <?php echo $v['total_price']; ?>
                                        </td>
                                        <td>
                                            <?php echo date("m/d H:i:s",$v['create_at']); ?>
                                        </td>
                                        <td>
                                            <?php if($v['status']==1): ?>
                                            <span class="badge badge-pill badge-success font-size-12"><?php echo $v['status_text']; ?></span>
                                            <?php elseif($v['status']==0): ?>
                                            <span class="badge badge-pill badge-danger font-size-12"><?php echo $v['status_text']; ?></span>
                                            <?php else: ?>
                                            <span class="badge badge-pill badge-light font-size-12"><?php echo $v['status_text']; ?></span>
                                            <?php endif; ?>
                                        </td>

                                        <td>
                                            <?php if($v['is_proxy']==1&&$v['proxy_parent_user_id']==$_user->id): ?>
                                            <a href="<?php echo url('agent/proxyOrder',['type'=>0,'keywords'=>$v['trade_no']]); ?>" class="btn btn-link btn-sm btn-rounded waves-effect waves-light">
                                                订单详情
                                            </a>
                                            <?php else: ?>
                                            <a href="<?php echo url('order/index',['type'=>0,'keywords'=>$v['trade_no']]); ?>" class="btn btn-link btn-sm btn-rounded waves-effect waves-light">
                                                订单详情
                                            </a>
                                            <?php endif; ?>                           
                                        </td>
                                    </tr>
                                    <?php endforeach; ?>

                                </tbody>
                            </table>
                        </div>
                        <!-- end table-responsive -->
                    </div>
                </div>
            </div>


            <div class="col-xl-4">
                <div class="card" style='min-height: 385px;'>
                    <div class="card-body">
                        <h4 class="card-title mb-5">系统公告</h4>
                        <ul class="verti-timeline list-unstyled">

                            <?php foreach($articles as $v): ?>
                            <li class="event-list <?php if(date('Y-m-d',$v['create_at'])==date('Y-m-d')): ?>active<?php endif; ?>">
                                <div class="event-timeline-dot">
                                    <i class="bx bx-right-arrow-circle font-size-18"></i>
                                </div>
                                <div class="media">
                                    <div class="mr-3">
                                        <h5 class="font-size-14"><?php echo date("m/d",$v['create_at']); ?><i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"></i></h5>
                                    </div>
                                    <div class="media-body">
                                        <div>
                                            <?php echo $v['title']; ?>
                                            <a href="<?php echo url('merchant/index/notice',['article_id'=>$v['id']]); ?>" >查看详情</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <?php endforeach; ?>
                        </ul>
                        <div class="text-center mt-4"><a href="<?php echo url('index/noticeList'); ?>" class="btn btn-primary waves-effect waves-light btn-sm">查看更多<i class="mdi mdi-arrow-right ml-1"></i></a></div>
                    </div>
                </div>
            </div>


        </div>
        <!-- end row -->

    </div>
    <!-- container-fluid -->
</div>
<!-- End Page-content -->






                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <script>document.write(new Date().getFullYear())</script> © 当前网站使用【<?php echo sysconf('app_name'); ?>】强力驱动。
                            </div>
                            <div class="col-sm-6">
                                <div class="text-sm-right d-none d-sm-block">
                                    Design & Develop by Jingfaka
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <!-- end main content-->

        </div>
        <!-- END layout-wrapper -->

        <!-- Right Sidebar -->
        <div class="right-bar">
            <div data-simplebar="" class="h-100">
                <div class="rightbar-title px-3 py-4">
                    <a href="javascript:void(0);" class="right-bar-toggle float-right">
                        <i class="mdi mdi-close noti-icon"></i>
                    </a>
                    <h6 class="m-0 font-weight-bold">主题设置</h6>
                </div>

                <!-- Settings -->
                <hr class="mt-0">
                <h6 class="text-center mb-0">选择主题</h6>

                <div class="p-4">
                    <div class="mb-2">
                        <img src="/static/merchant/default/images/layouts/layout-1.jpg" class="img-fluid img-thumbnail" alt="">
                    </div>
                    <div class="custom-control custom-switch mb-3">
                        <input type="checkbox" name="template-switch" value="default" class="custom-control-input theme-choice" id="light-mode-switch" <?php if($_user['pc_template']=="default"): ?>checked=""<?php endif; ?>>
                               <label class="custom-control-label" for="light-mode-switch">垂直布局</label>
                    </div>

                    <div class="mb-2">
                        <img src="/static/merchant/default/images/layouts/layout-2.jpg" class="img-fluid img-thumbnail" alt="">
                    </div>
                    <div class="custom-control custom-switch mb-3">
                        <input type="checkbox" name="template-switch" value="horizontal" class="custom-control-input theme-choice" id="dark-mode-switch" <?php if($_user['pc_template']=="horizontal"): ?>checked=""<?php endif; ?>>
                               <label class="custom-control-label" for="dark-mode-switch">水平布局</label>
                    </div>
                </div>
            </div> <!-- end slimscroll-menu-->
        </div>
        <!-- /Right-bar -->

        <!-- Right bar overlay-->
        <div class="rightbar-overlay"></div>

        <!-- JAVASCRIPT -->
        <script src="/static/merchant/default/libs/jquery/jquery.min.js"></script>
        <script src="/static/merchant/default/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/static/merchant/default/libs/metismenu/metisMenu.min.js"></script>
        <script src="/static/merchant/default/libs/simplebar/simplebar.min.js"></script>
        <script src="/static/merchant/default/libs/node-waves/waves.min.js"></script>
        <script src="/static/merchant/default/libs/jquery-confirm/js/jquery-confirm.js"></script>
        <script src="/static/merchant/default/libs/layer/layer.js"></script>
        <script src="/static/merchant/default/libs/select2/js/select2.min.js"></script>
        <script src="/static/merchant/default/libs/moment/moment.js"></script>
        <script src="/static/merchant/default/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
        <script src="/static/merchant/default/libs/bootstrap-daterangepicker/daterangepicker.js"></script>
        <script src="/static/merchant/default/libs/toastr/build/toastr.min.js"></script>
        <script>
                                    $(".select2").select2();
                                    $(document).ready(function () {

                                        $('#readAllMessage').on('click', function () {

                                            $.confirm({
                                                title: '温馨提示',
                                                content: '确定要全部已读？',
                                                type: 'red',
                                                typeAnimated: true,
                                                buttons: {
                                                    tryAgain: {
                                                        text: '确定',
                                                        btnClass: 'btn-red',
                                                        action: function () {
                                                            var loading = layer.load(1, {shade: [0.1, '#fff']});
                                                            $.ajax({
                                                                type: 'post',
                                                                url: "<?php echo url('message/allRead'); ?>",
                                                                dataType: 'json',
                                                                success: function (info) {
                                                                    layer.close(loading);
                                                                    if (info.code == 1) {
                                                                        location.reload();
                                                                    } else {
                                                                        $.alert({
                                                                            title: '温馨提示!',
                                                                            content: info.msg
                                                                        });
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    },
                                                    cancel: {
                                                        text: '取消',
                                                    }
                                                }
                                            });
                                        });
                                    });
                                    $("input[name='template-switch']").on("change", function (e) {
                                        $("input[name='template-switch']").prop("checked", false);
                                        $(this).prop("checked", true);

                                        var template = $(this).val();
                                        var loading = layer.load(1, {shade: [0.1, '#fff']});
                                        $.ajax({
                                            type: 'post',
                                            url: "<?php echo url('user/set_template'); ?>",
                                            data: {template: template, platform: 'pc'},
                                            dataType: 'json',
                                            success: function (info) {
                                                layer.close(loading);
                                                if (info.code != 1) {
                                                    $.alert({
                                                        title: '温馨提示!',
                                                        content: info.msg
                                                    });
                                                } else {
                                                    location.reload();
                                                }
                                            }
                                        });
                                    });
        </script>
        <script>
            $('.input-daterange-datepicker').daterangepicker({
                buttonClasses: ['btn', 'btn-sm'],
                applyClass: 'btn-success',
                cancelClass: 'btn-light',
                locale: {
                    applyLabel: '应用',
                    cancelLabel: '取消',
                    daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十月', '十二月'],
                    firstDay: 1
                }

            });
        </script>
        
<!-- apexcharts -->
<script src="/static/merchant/default/libs/apexcharts/apexcharts.min.js"></script>
<script>

    var res_week = <?php echo json_encode($res_week ); ?>
    , res_month = <?php echo json_encode($res_month ); ?>
    ;

    var week = new Array();
    var day_amount = new Array();
    var finally_amount = new Array();

    var month = new Array();
    var month_amount = new Array();
    var month_finally_amount = new Array();

    $.each(res_week, function (index, value) {
        week[index] = value['week'];
        day_amount[index] = value['day_amount'];
        finally_amount[index] = value['finally_amount'];
    });

    $.each(res_month, function (index, value) {
        month[index] = value['month'];
        month_amount[index] = value['month_amount'];
        month_finally_amount[index] = value['month_finally_amount'];
    });

    options_week = {
        chart: {
            height: 247,
            type: "bar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "45%",
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ["transparent"]
        },
        series: [{
                name: "交易额",
                data: day_amount
            },
            {
                name: "结算额",
                data: finally_amount
            }],
        colors: ["#556ee6", "#34c38f"],
        xaxis: {
            categories: week
        },
        yaxis: {
            title: {
                text: "￥ 单位元",
                style: {
                    fontWeight: "500"
                }
            }
        },
        grid: {
            borderColor: "#f1f1f1"
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (e) {
                    return "￥ " + e + "元"
                }
            }
        }
    };

    options_month = {
        chart: {
            height: 247,
            type: "bar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "45%",
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ["transparent"]
        },
        series: [{
                name: "交易额",
                data: month_amount
            },
            {
                name: "结算额",
                data: month_finally_amount
            }],
        colors: ["#556ee6", "#34c38f"],
        xaxis: {
            categories: month
        },
        yaxis: {
            title: {
                text: "￥ 单位元",
                style: {
                    fontWeight: "500"
                }
            }
        },
        grid: {
            borderColor: "#f1f1f1"
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (e) {
                    return "￥ " + e + "元"
                }
            }
        }
    };

    (new ApexCharts(document.querySelector("#column_chart_week"), options_week)).render();
    (new ApexCharts(document.querySelector("#column_chart_month"), options_month)).render();

    var series = Math.ceil(parseInt("<?php echo $ip_analysis['today_uv']; ?>") / 5);
    var options = {
        chart: {
            height: 200,
            type: "radialBar",
            offsetY: -10
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: "13px",
                        color: void 0,
                        offsetY: 60
                    },
                    value: {
                        offsetY: 22,
                        fontSize: "16px",
                        color: void 0,
                        formatter: function (e) {
                            return "<?php echo $ip_analysis['today_uv']; ?>";
                        }
                    }
                }
            }
        },
        colors: ["#556ee6"],
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                shadeIntensity: .15,
                inverseColors: !1,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            }
        },
        stroke: {
            dashArray: 4
        },
        series: [series],
        labels: ["今日访问量PV"]
    };
    (chart = new ApexCharts(document.querySelector("#radialBar-chart"), options)).render();














    $.ajax({
        type: 'GET',
        url: 'https://v1.hitokoto.cn/?encode=json',
        dataType: 'json',
        success(data) {
            $('.one-show').text(data.hitokoto + " - " + data.from);
        },
        error(jqXHR, textStatus, errorThrown) {
            // 错误信息处理
            console.error(textStatus, errorThrown)
        }
    })
</script>
<script>
    function complaintToast()
    {
        $.ajax({
            type: 'get',
            url: "<?php echo url('Plugin/complaintToast'); ?>",
            dataType: 'json',
            success: function (info) {
                if (info.code == 1 && info.data.count > 0)
                {
                    var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=" + encodeURI("您有投诉订单待回复，请及时查看！");        // baidu文字转语音
                    var audio = new Audio(url);
                    audio.src = url;
                    audio.play();

                    toastr.clear();
                    toastr.options = {
                        "closeButton": false,
                        "debug": false,
                        "newestOnTop": false,
                        "progressBar": false,
                        "positionClass": "toast-bottom-right",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": 300,
                        "hideDuration": 1000,
                        "timeOut": 5000,
                        "extendedTimeOut": 1000,
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    }
                    toastr.info('<div><p>您有投诉订单待回复，请及时查看！</p></div><div><a href="<?php echo url("merchant/complaint/index"); ?>" class="btn text-light">立即查看</a></div>');
                }
            }
        });
    }
    complaintToast();
    setInterval(function () {
        complaintToast();
    }, 30000);
</script>


        <!-- App js -->
        <script src="/static/merchant/default/js/app.js"></script>

        <?php if(!(empty($common_announce) || (($common_announce instanceof \think\Collection || $common_announce instanceof \think\Paginator ) && $common_announce->isEmpty()))): ?>
        <div id="common_title" style="display: none"><?php echo $common_announce['title']; ?></div>
        <div id="common_announce" style="display: none"><div style="padding:15px"><?php echo htmlspecialchars_decode($common_announce['content']); ?></div></div>
        <script>
            layer.open({
                type: 1,
                fix: false,
                maxmin: true,
                shadeClose: false,
                area: ['680px', '400px'],
                shade: 0.4,
                title: $('#common_title').html(),
                content: $('#common_announce').html(),
                success: function (layero, index) {
                    layer.iframeAuto(index);
                }
            });
        </script>
        <?php endif; ?>
    </body>

</html>
<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:86:"/www/wwwroot/shop.paozf.com/application/templates/pc/merchant/default/order/index.html";i:1646323578;s:79:"/www/wwwroot/shop.paozf.com/application/templates/pc/merchant/default/base.html";i:1646323578;}*/ ?>
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
                    <h4 class="mb-0 font-size-18"><?php echo $_title; ?></h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">后台管理</a></li>
                            <li class="breadcrumb-item active"><?php echo $_title; ?></li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row mb-2">
                            <div class="col-sm-auto">

                                <form class="form-inline" role="form" action="" method="get">
                                    <div class="form-group">
                                        <select name="paytype" class="form-control select2">
                                            <option value="" <?php if(\think\Request::instance()->get('paytype')==''): ?>selected<?php endif; ?>>全部方式</option>
                                            <?php foreach($pay_product as $k => $v): ?>
                                            <option value="<?php echo htmlentities($v['id']); ?>" <?php if(\think\Request::instance()->get('paytype')==$v['id']): ?>selected<?php endif; ?>><?php echo $v['name']; ?></option>
                                            <?php endforeach; ?>
                                        </select>
                                    </div>
                                    <div class="form-group ml-1">
                                        <select name="status" class="form-control select2">
                                            <option value="" <?php if(\think\Request::instance()->get('status')==''): ?>selected<?php endif; ?>>全部状态</option>
                                            <option value="1" <?php if(\think\Request::instance()->get('status')=='1'): ?>selected<?php endif; ?>>已付款</option>
                                            <option value="0" <?php if(\think\Request::instance()->get('status')=='0'): ?>selected<?php endif; ?>>未付款</option>
                                            <option value="2" <?php if(\think\Request::instance()->get('status')=='2'): ?>selected<?php endif; ?>>已关闭</option>
                                            <option value="3" <?php if(\think\Request::instance()->get('status')=='3'): ?>selected<?php endif; ?>>已退款</option>
                                        </select>
                                    </div>

                                    <div class="form-group ml-1">
                                        <select name="cid" class="form-control select2">
                                            <option value="0" >商品类别</option>
                                            <?php foreach($categorys as $row): ?>
                                            <option value="<?php echo htmlentities($row['id']); ?>" <?php if(\think\Request::instance()->get('cid')==$row['id']): ?>selected<?php endif; ?> ><?php echo $row['name']; ?></option>
                                            <?php endforeach; ?>
                                        </select>
                                    </div>

                                    <div class="form-group ml-1">
                                        <select name="order_type" class="form-control select2">
                                            <option value="" <?php if(\think\Request::instance()->get('order_type')==''): ?>selected<?php endif; ?>>全部类型 </option>
                                            <option value="0" <?php if(\think\Request::instance()->get('order_type')=='0'): ?>selected<?php endif; ?>>普通订单</option>
                                            <option value="1" <?php if(\think\Request::instance()->get('order_type')=='1'): ?>selected<?php endif; ?>>对接订单 </option>
                                            <option value="2" <?php if(\think\Request::instance()->get('order_type')=='2'): ?>selected<?php endif; ?>>跨平台订单 </option>
                                        </select>
                                    </div>

                                    <div class="form-group ml-1">
                                        <select name="type" class="form-control select2">
                                            <option value="0" <?php if(\think\Request::instance()->get('type')=='0'): ?>selected<?php endif; ?>>订单编号搜索</option>
                                            <option value="1" <?php if(\think\Request::instance()->get('type')=='1'): ?>selected<?php endif; ?>>商品名称搜索</option>
                                            <option value="2" <?php if(\think\Request::instance()->get('type')=='2'): ?>selected<?php endif; ?>>联系方式搜索</option>
                                        </select>
                                    </div>
                                    <div class="form-group ml-1">
                                        <input class="form-control" type="text" name="keywords" value="<?php echo htmlentities(\think\Request::instance()->get('keywords')); ?>" placeholder="请输入关键字">
                                    </div>

                                    <div class="form-group ml-1">
                                        <select name="has_send" class="form-control select2">
                                            <option value="" <?php if(\think\Request::instance()->get('has_send')==''): ?>selected<?php endif; ?>>取卡状态(全部) </option>
                                            <option value="0" <?php if(\think\Request::instance()->get('has_send')=='0'): ?>selected<?php endif; ?>>未取卡</option>
                                            <option value="1" <?php if(\think\Request::instance()->get('has_send')=='1'): ?>selected<?php endif; ?>>已取卡 </option>
                                            <option value="2" <?php if(\think\Request::instance()->get('has_send')=='2'): ?>selected<?php endif; ?>>已取部分 </option>
                                        </select>
                                    </div>

                                    <div class="form-group ml-1">
                                        <input class="form-control input-daterange-datepicker"  type="text" name="date_range" value="<?php echo urldecode(\think\Request::instance()->get('date_range')); ?>" placeholder="点击选择查询日期">
                                    </div>

                                    <button type="submit" class="btn btn-light waves-effect waves-light ml-1"><i class="bx bx-search mr-1"></i>搜索</button>
                                </form>
                            </div>
                        </div>


                        <div class="table-responsive">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                        <th>订单号</th>
                                        <th>订单类型</th>
                                        <th>商品名称</th>
                                        <th>支付方式</th>
                                        <th>总价</th>
                                        <th>实付款</th>
                                        <th>购买者信息</th>
                                        <th>状态</th>
                                        <th>取卡状态</th>
                                        <th>取卡密码</th>
                                        <th>交易时间</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <?php foreach($orders as $v): ?>
                                    <tr>
                                        <th><a href="<?php echo url('order/signQuery',['id'=>$v['id']]); ?>" target="_blank"><?php echo $v['trade_no']; ?></a></th>
                                        <td>
                                            <?php if($v['is_proxy'] ==1): ?>
                                            <span class="badge badge-pill badge-warning">对接订单</span>
                                            <?php elseif($v['is_cross'] ==1): ?>
                                            <span class="badge badge-pill badge-success">跨平台订单</span>
                                            <?php else: ?>
                                            <span class="badge badge-pill badge-primary">普通订单</span>
                                            <?php endif; ?>
                                        </td>
                                        <td>
                                            <?php echo $v['goods_name']; if($v['status'] == '1'): ?>
                                            <a class="fetch" href="<?php echo url('order/fetchcard',['id'=>$v['id']]); ?>">（<?php echo $v['quantity']; ?>张）</a>
                                            <?php else: ?>
                                            （<?php echo $v['quantity']; ?>张）
                                            <?php endif; if($v['coupon_type']==1): ?>
                                            <span class="badge badge-pill badge-success font-size-12" data-toggle="tooltip" data-placement="top" title="支持优惠券" data-original-title="支持优惠券">券</span>
                                            <?php endif; if($v['take_card_type']==1): if($v['status'] == '1'): ?>
                                            <a href="<?php echo url('order/fetchcard',['id'=>$v['id']]); ?>">  <span class="badge badge-pill badge-primary font-size-12"  data-toggle="tooltip" data-placement="top" title="提卡必填或选填取卡密码" data-original-title="提卡必填或选填取卡密码">取</span></a>
                                            <?php else: ?>
                                            <span class="badge badge-pill badge-primary font-size-12"  data-toggle="tooltip" data-placement="top" title="提卡必填或选填取卡密码" data-original-title="提卡必填或选填取卡密码">取</span>
                                            <?php endif; endif; ?>
                                        </td>
                                        <td><?php echo get_paytype_name($v['paytype']); ?></td>
                                        <td><?php echo $v['total_product_price']; ?></td>
                                        <td><?php echo $v['total_price']; ?></td>
                                        <td><?php echo $v['contact']; ?></td>
                                        <td>
                                            <?php if($v['status']==1): ?>
                                            <span class="badge badge-pill badge-success"><?php echo $v['status_text']; ?></span>
                                            <?php elseif($v['status']==0): ?>
                                            <span class="badge badge-pill badge-danger"><?php echo $v['status_text']; ?></span>

                                            <?php if($v['channel']['is_custom']==1): ?>
                                            <a href="javascript:void(0);" onclick="notify(this, '<?php echo $v['id']; ?>')">补发</a>
                                            <?php endif; else: ?>
                                            <span class="badge badge-pill badge-light"><?php echo $v['status_text']; ?></span>
                                            <?php endif; ?>
                                        </td>
                                        <td>
                                            <?php if($v['cards_count']>0): if($v['cards_count']>=$v['quantity']): ?>
                                            已取
                                            <?php else: ?>
                                            已取部分
                                            <?php endif; else: ?>
                                            未取
                                            <?php endif; ?>
                                        </td>
                                        <td><?php echo $v['take_card_password']; ?></td>
                                        <td><?php echo date("Y-m-d H:i:s",$v['create_at']); ?></td>
                                        <td>
                                            <?php if($v['status']==1 && $v['cards_count']==0): ?>
                                            <a class="fetch" href="<?php echo url('order/fetchcard',['id'=>$v['id']]); ?>">提卡</a>
                                            <a href="<?php echo url('order/dumpCards',['trade_no'=>$v['trade_no']]); ?>" target="_blank">导出</a>
                                            <?php endif; ?>
                                        </td>
                                    </tr>
                                    <?php endforeach; ?>

                                </tbody>
                            </table>
                        </div>
                        <nav aria-label="...">
                            <?php echo $page; ?>
                        </nav>
                    </div>

                </div>
            </div>
        </div>

    </div>
    <!-- container-fluid -->
</div>





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
        
<script>
    function notify(e, id)
    {
        layer.confirm('确认要设置这个订单已支付吗？该操作不可恢复', function (index) {
            var loading = layer.load(1, {shade: [0.1, '#fff']});
            $.ajax({
                url: "<?php echo url('order/notify'); ?>",
                type: 'post',
                data: {id: id},
                success: function (res) {
                    layer.close(loading);
                    if (res.code == 1) {
                        layer.msg(res.msg, {icon: 1, time: 3000});
                        setTimeout(function () {
                            location.reload();
                        }, 3000);
                    } else {
                        layer.msg(res.msg, {icon: 2, time: 3000});
                    }
                }
            });
        });
    }
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
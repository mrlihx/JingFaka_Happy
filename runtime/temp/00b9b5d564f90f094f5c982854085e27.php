<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:87:"/www/wwwroot/shop.paozf.com/application/templates/pc/merchant/default/user/collect.html";i:1646323578;s:79:"/www/wwwroot/shop.paozf.com/application/templates/pc/merchant/default/base.html";i:1646323578;}*/ ?>
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
        
<link href="/static/merchant/default/libs/fileuploads/css/dropify.min.css" rel="stylesheet" type="text/css" />

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

            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <form role="form" action="<?php echo url('user/changeCashType'); ?>" method="post" >

                            <div class="form-group row mb-4">
                                <label for="shop_name" class="col-md-2 col-form-label font-weight-bold">收款设置</label>
                                <div class="col-md-10 d-flex align-items-center">
                                    <div class="custom-control custom-radio custom-control-inline mr-4 custom-radio-success">
                                        <input <?php if($_user['cash_type']==1): ?>checked<?php endif; ?> value="1" type="radio" id="cash_type1" name="cash_type" class="custom-control-input">
                                            <label class="custom-control-label" for="cash_type1">系统默认</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline mr-4 custom-radio-success">
                                        <input <?php if($_user['cash_type']==2): ?>checked<?php endif; ?> value="2" type="radio" id="cash_type2" name="cash_type" class="custom-control-input">
                                            <label class="custom-control-label" for="cash_type2">手工提现</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline mr-4 custom-radio-success">
                                        <input <?php if($_user['cash_type']==3): ?>checked<?php endif; ?> value="3" type="radio" id="cash_type3" name="cash_type" class="custom-control-input">
                                            <label class="custom-control-label" for="cash_type3">自动提现</label>
                                    </div>
                                    <button class="btn btn-success btn-sm"><i class="bx bx-check-square mr-1"></i> 保存设置 </button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>


            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">

                        <h4 class="card-title mb-4">商户收款信息</h4>
                        <form class="form-horizontal" role="form" action="<?php echo url('user/collect'); ?>" method="post" id="gathering_info" enctype="multipart/form-data">
                            <div class="form-group row">
                                <label class="col-md-2 col-form-label">收款方式</label>
                                <div class="col-md-6">
                                    <select name="type" class="form-control select2"  <?php if(isset($_user['collect']['info']) && $_user['collect']['allow_update'] == 0): ?> disabled="disabled" <?php endif; ?> >
                                            <?php if(in_array(1, (array)json_decode((string)sysconf('cash_type'), true))): ?>
                                            <option value="1" <?php if($_user['collect']['type']==1): ?>selected<?php endif; ?>>支付宝收款</option>
                                        <?php endif; if(in_array(2, (array)json_decode((string)sysconf('cash_type'), true))): ?>
                                        <option value="2" <?php if($_user['collect']['type']==2): ?>selected<?php endif; ?>>微信收款</option>
                                        <?php endif; if(in_array(3, (array)json_decode((string)sysconf('cash_type'), true))): ?>
                                        <option value="3" <?php if($_user['collect']['type']==3): ?>selected<?php endif; ?>>银行卡收款</option>
                                        <?php endif; ?>
                                    </select>
                                </div>
                            </div>
                            <?php if($type = json_decode(sysconf('cash_type'), true)): ?>
                            <div class="collect_type type_alipay" <?php if((!$_user['collect'] && $_user['collect']['type']!='1' && $type[0] != 1) || ($_user['collect'] && $_user['collect']['type']!='1')): ?>style="display:none;"<?php endif; ?>>
                                 <div class="form-group row">
                                    <label class="col-md-2 col-form-label">支付宝账号</label>
                                    <div class="col-md-6">
                                        <input name="alipay[account]" type="text" class="form-control"  <?php if(isset($_user['collect']['info']['account']) && $_user['collect']['allow_update'] == 0): ?> readonly="readonly" <?php endif; ?>  value="<?php echo htmlentities((isset($_user['collect']['info']['account']) && ($_user['collect']['info']['account'] !== '')?$_user['collect']['info']['account']:'')); ?>">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">收款人姓名</label>
                                    <div class="col-md-6">
                                        <input name="alipay[realname]" type="text" class="form-control" <?php if(isset($_user['collect']['info']['realname']) && $_user['collect']['allow_update'] == 0): ?> readonly="readonly" <?php endif; ?>  value="<?php echo htmlentities((isset($_user['collect']['info']['realname']) && ($_user['collect']['info']['realname'] !== '')?$_user['collect']['info']['realname']:'')); ?>">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">身份证号</label>
                                    <div class="col-md-6">
                                        <input name="alipay[idcard_number]" type="text" class="form-control idcard_number" <?php if(isset($_user['collect']['info']['idcard_number']) && $_user['collect']['allow_update'] == 0): ?> readonly="readonly" <?php endif; ?>  onblur="if(this.value==''){this.value='<?php echo idcardnoMask($_user['collect']['info']['idcard_number']); ?>'}" onfocus="if(this.value=='<?php echo idcardnoMask($_user['collect']['info']['idcard_number']); ?>'){this.value=''}" value="<?php echo htmlentities(idcardnoMask($_user['collect']['info']['idcard_number'])); ?>">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">收款二维码</label>
                                    <div class="col-md-6">
                                        <?php if($_user['collect']['collect_img'] && $_user['collect']['allow_update'] == 0): ?>
                                        <img src="<?php echo (isset($_user['collect']['collect_img']) && ($_user['collect']['collect_img'] !== '')?$_user['collect']['collect_img']:''); ?>" style="width: 80%;margin:0 auto;" alt="">
                                        <?php else: ?>
                                        <input type="file" name="ali_collect_img" class="dropify"/>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="collect_type type_wxpay" <?php if((!$_user['collect'] && $_user['collect']['type']!='2' && $type[0] != 2) || ($_user['collect'] && $_user['collect']['type']!='2')): ?>style="display:none;"<?php endif; ?>>
                                 <div class="form-group row">
                                    <label class="col-md-2 col-form-label">微信账号</label>
                                    <div class="col-md-6">
                                        <input name="wxpay[account]" type="text" class="form-control"  <?php if(isset($_user['collect']['info']['account']) && $_user['collect']['allow_update'] == 0): ?> readonly="readonly" <?php endif; ?>  value="<?php echo htmlentities((isset($_user['collect']['info']['account']) && ($_user['collect']['info']['account'] !== '')?$_user['collect']['info']['account']:'')); ?>">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">收款人姓名</label>
                                    <div class="col-md-6">
                                        <input name="wxpay[realname]" type="text" class="form-control"  <?php if(isset($_user['collect']['info']['realname']) && $_user['collect']['allow_update'] == 0): ?> readonly="readonly" <?php endif; ?>  value="<?php echo htmlentities((isset($_user['collect']['info']['realname']) && ($_user['collect']['info']['realname'] !== '')?$_user['collect']['info']['realname']:'')); ?>">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">身份证号</label>
                                    <div class="col-md-6">
                                        <input name="wxpay[idcard_number]" type="text" class="form-control idcard_number"  <?php if(isset($_user['collect']['info']['idcard_number']) && $_user['collect']['allow_update'] == 0): ?> readonly="readonly" <?php endif; ?>  value="<?php echo htmlentities((isset($_user['collect']['info']['idcard_number']) && ($_user['collect']['info']['idcard_number'] !== '')?$_user['collect']['info']['idcard_number']:'')); ?>">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">收款二维码</label>
                                    <div class="col-md-6">
                                        <?php if($_user['collect']['collect_img'] && $_user['collect']['allow_update'] == 0): ?>
                                        <img src="<?php echo (isset($_user['collect']['collect_img']) && ($_user['collect']['collect_img'] !== '')?$_user['collect']['collect_img']:''); ?>" style="width: 80%;margin:0 auto;" alt="">
                                        <?php else: ?>
                                        <input type="file" name="collect_img" class="dropify"/>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="collect_type type_bank" <?php if((!$_user['collect'] && $_user['collect']['type']!='3' && $type[0] != 3) || ($_user['collect'] && $_user['collect']['type']!='3')): ?>style="display:none;"<?php endif; ?>>
                                 <div class="form-group row">
                                    <label for="bank[bank_name]" class="col-md-2 col-form-label">开户银行</label>
                                    <div class="col-md-6">
                                        <select id="bank_name" name="bank[bank_name]" class="form-control"  <?php if(isset($_user['collect']['info']['bank_name']) && $_user['collect']['allow_update'] == 0): ?> readonly="readonly" <?php endif; ?> >
                                                <option value="中国工商银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='中国工商银行'): ?>selected<?php endif; ?>>中国工商银行</option>
                                            <option value="中国建设银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='中国建设银行'): ?>selected<?php endif; ?>>中国建设银行</option>
                                            <option value="中国农业银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='中国农业银行'): ?>selected<?php endif; ?>>中国农业银行</option>
                                            <option value="中国邮政储蓄银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='中国邮政储蓄银行'): ?>selected<?php endif; ?>>中国邮政储蓄银行</option>
                                            <option value="招商银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='招商银行'): ?>selected<?php endif; ?>>招商银行</option>
                                            <option value="农村信用合作社" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='农村信用合作社'): ?>selected<?php endif; ?>>农村信用合作社</option>
                                            <option value="兴业银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='兴业银行'): ?>selected<?php endif; ?>>兴业银行</option>
                                            <option value="广东发展银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='广东发展银行'): ?>selected<?php endif; ?>>广东发展银行</option>
                                            <option value="深圳发展银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='深圳发展银行'): ?>selected<?php endif; ?>>深圳发展银行</option>
                                            <option value="民生银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='民生银行'): ?>selected<?php endif; ?>>民生银行</option>
                                            <option value="交通银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='交通银行'): ?>selected<?php endif; ?>>交通银行</option>
                                            <option value="中信银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='中信银行'): ?>selected<?php endif; ?>>中信银行</option>
                                            <option value="光大银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='光大银行'): ?>selected<?php endif; ?>>光大银行</option>
                                            <option value="中国银行" <?php if($_user['collect']['type']==3 && $_user['collect']['info']['bank_name']=='中国银行'): ?>selected<?php endif; ?>>中国银行</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">开户地址</label>
                                    <div class="col-md-6">
                                        <input name="bank[bank_branch]" type="text" class="form-control" value="<?php echo htmlentities((isset($_user['collect']['info']['bank_branch']) && ($_user['collect']['info']['bank_branch'] !== '')?$_user['collect']['info']['bank_branch']:'')); ?>" <?php if(isset($_user['collect']['info']['bank_branch'])&& $_user['collect']['allow_update'] == 0): ?> readonly="readonly" <?php endif; ?>  placeholder="开户行请精确到市">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">银行卡号</label>
                                    <div class="col-md-6">
                                        <input name="bank[bank_card]" type="text" class="form-control" <?php if(isset($_user['collect']['info']['bank_card']) && $_user['collect']['allow_update'] == 0): ?> readonly="readonly" <?php endif; ?>  value="<?php echo htmlentities((isset($_user['collect']['info']['bank_card']) && ($_user['collect']['info']['bank_card'] !== '')?$_user['collect']['info']['bank_card']:'')); ?>" placeholder="请认真核对银行卡号">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">收款人姓名</label>
                                    <div class="col-md-6">
                                        <input name="bank[realname]" type="text" class="form-control" <?php if(isset($_user['collect']['info']['realname']) && $_user['collect']['allow_update'] == 0): ?> readonly="readonly" <?php endif; ?> value="<?php echo htmlentities((isset($_user['collect']['info']['realname']) && ($_user['collect']['info']['realname'] !== '')?$_user['collect']['info']['realname']:'')); ?>">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label">身份证号</label>
                                    <div class="col-md-6">
                                        <input name="bank[idcard_number]" type="text" class="form-control idcard_number" <?php if(isset($_user['collect']['info']['idcard_number'])&& $_user['collect']['allow_update'] == 0): ?> readonly="readonly" <?php endif; ?> value="<?php echo htmlentities((isset($_user['collect']['info']['idcard_number']) && ($_user['collect']['info']['idcard_number'] !== '')?$_user['collect']['info']['idcard_number']:'')); ?>">
                                    </div>
                                </div>
                            </div>
                            <?php endif; if(!$_user['collect']['info'] || $_user['collect']['allow_update'] == 1): ?>
                            <div class="form-group row" style="display: flex; align-items: center; color: red;">
                                <label class="col-md-2 col-form-label"></label>
                                <div class="col-md-6">
                                    慎重填写.再三确认.填写后不可修改.如需修改请联系平台客服。
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-2 col-form-label"></label>
                                <div class="col-md-6 text-center">
                                    <button type="submit" class="btn btn-primary waves-effect waves-light">保存设置</button>
                                </div>
                            </div>
                            <?php else: ?>
                            <div class="form-group row" style="display: flex; align-items: center; color: red;">
                                <label class="col-md-2 col-form-label"></label>
                                <div class="col-md-6">
                                    修改收款方式请联系客服
                                </div>
                            </div>
                            <?php endif; ?>
                        </form>

                    </div>
                </div>
            </div>
        </div>




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
        
<script src="/static/merchant/default/libs/fileuploads/js/dropify.min.js"></script>
<script>
   
    $('[name="type"]').change(function () {
        var selected = $(this).val() * 1;
        $('.collect_type').slideUp();
        switch (selected) {
            case 1:  // 支付宝
                $('.type_alipay').slideDown();
                break;
            case 2:  // 微信
                $('.type_wxpay').slideDown();
                break;
            case 3:  // 银行
                $('.type_bank').slideDown();
                break;
        }
    });
    $('[name="stock_display"]').change(function () {
        var selected = $(this).val() * 1;
        console.log(selected);
        if (selected == 2) {
            $('.stock_display_2_tips').show();
        } else {
            $('.stock_display_2_tips').hide();
        }
    });
    $('#gathering_info').submit(function () {
        var status = true;
        $('.collect_type').each(function () {
            if ($(this).is(':visible')) {
                //验证二维码
                var collect_img_value = $(this).find('.dropify').val();
                if ($(this).find('.dropify').length > 0 && !collect_img_value) {
                    layer.alert('请选择收款二维码！');
                    status = false;
                }
                var idcard_number = $(this).find('input.idcard_number').last().val()
                var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                console.log(idcard_number);
                if (!reg.test(idcard_number)) {
                    layer.alert('请输入正确的身份证号码');
                    status = false;
                }

            }
        })
        return status;
    })
    $('.dropify').dropify({
        messages: {
            'default': '点击上传二维码',
            'replace': '点击替换二维码',
            'remove': '删除',
            'error': '上传错误'
        },
        error: {
            'fileSize': '文件太大超过（1M）'
        }
    });


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
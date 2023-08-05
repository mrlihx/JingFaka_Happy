<?php

use think\Config;

$admin_login_path = sysconf('admin_login_path');
if ($admin_login_path == '') {
    $admin_login_path = 'admin';
}
$route_config = [
    'aboutus' => 'index/about_us',
    'company/faq' => 'index/faq',
    'company/news' => 'index/news',
    'company/notice' => 'index/notice',
    'company/settlement' => 'index/settlement',
    'company/contact' => 'index/contact',
    'article/:id' => 'index/content',
    'login' => 'user/login',
    'login/userlogin' => 'user/doLogin',
    'login/retpwd' => 'user/forgetPassword',
    'logout' => 'user/logout',
    'register' => 'user/register',
    'register/sms' => 'user/sendSmsCode?screen=register',
    'register/email' => 'user/sendEmailCode?screen=register',
    'forget/sms' => 'user/sendSmsCode?screen=forget',
    'register/checkuser' => 'user/checkuser',
    'register/checkinfo' => 'user/checkuserinfo',
    'register/regsave' => 'user/doRegister',
    'orderquery' => 'order/query',
    'checkgoods' => 'order/checkGoods',
    'complaint' => 'order/complaint',
    'chkcode' => 'order/chkcode',
    'complaintquery' => 'order/complaintquery',
    'orderquery/checkverifycode' => 'order/verifyCode',
    // 店铺
    'ajax/getgoodlist' => 'shop/shop/getGoodsList',
    'ajax/getrate' => 'shop/shop/getRate',
    'ajax/getgoodlistjson' => 'shop/shop/getGoodsListJson',
    'ajax/getdiscount' => 'shop/shop/getDiscount',
    'ajax/getdiscountdetails' => 'shop/shop/getDiscounts',
    'ajax/getgoodinfo' => 'shop/shop/getGoodsInfo',
    'ajax/checkpwdforbuy' => 'shop/shop/checkVisitPassword',
    'ajax/checkcoupon' => 'shop/shop/checkCoupon',
    'ajax/selectcard' => 'shop/plugin/selectCard',
    'pay/order' => 'pay/order',
    'pay/payment' => 'pay/payment',
    'pay/getOrderStatus' => 'pay/getOrderStatus',
    'payment/:channel/notify' => 'payment/index/notify?channel=:channel',
    'payment/notify/:channel' => 'payment/index/notify?channel=:channel',
    'details/:token' => 'shop/shop/goods?token=:token',
    'liebiao/:token' => 'shop/shop/category?token=:token',
    'links/:token' => 'shop/shop/index?token=:token',
    //API
    'api/pages/article/:id' => 'api/pages/article?article_id=:id',
    // 子域名绑定
    '__domain__' => [
        '*' => 'shop/plugin/subdomain?subdomain=*',
    ],
];

route();

if ($admin_login_path != 'admin') {
    $admin_route_config = [
        //后台
        'admin/$' => 'admin/index/index',
        'admin/login$' => 'admin/index/index',
        'admin/login/index' => 'admin/index/index',
        $admin_login_path . '/$' => 'admin/login/index',
    ];
    $route_config = array_merge($route_config, $admin_route_config);
}
return $route_config;

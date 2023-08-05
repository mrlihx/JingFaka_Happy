<?php

// +----------------------------------------------------------------------
// | 鲸发卡自动发卡平台
// +----------------------------------------------------------------------


/* 定义应用目录 */
define('APP_PATH', __DIR__ . '/../application/');


// 加载框架引导文件
require __DIR__ . '/../framework/base.php';

// 绑定到gateway模块
\think\Route::bind('index/gateway');

// 关闭路由
\think\App::route(false);

// 设置根url
\think\Url::root('');

// 执行应用
\think\App::run()->send();

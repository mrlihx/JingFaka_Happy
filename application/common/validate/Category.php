<?php

namespace app\common\validate;

use think\Validate;

/**
 * 商品分类认证类
 * Class Category
 * @package app\common\validate
 */
class Category extends Validate
{
    protected $rule = [
        'name' => 'require',
        'sort' => 'require|number',
    ];

    protected $message = [
        'name' => '请填写分类名',
        'sort' => '请填写分类排序',
    ];
}

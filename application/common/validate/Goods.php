<?php

namespace app\common\validate;

use think\Validate;

/**
 * 商品认证类
 * Class Goods
 * @package app\common\validate
 */
class Goods extends Validate{
    protected $rule = [
        'cate_id' => 'require',
        'name' => 'require',
        'sort' => 'require|number',
        'price' => 'require|number',
        'wholesale_discount' => 'require',
        'sms_payer' => 'require',
        'limit_quantity' => 'require',
        'inventory_notify' => 'require',
        'coupon_type' => 'require',
        'sold_notify' => 'require',
        'take_card_type' => 'require',
        'visit_type' => 'require',
        'content' => 'require',
        'remark' => 'require',
    ];

    protected $message = [
        'cate_id' => '请选择分类',
        'name' => '请输入商品名称',
        'sort' => '请输入排序',
        'price' => '请输入价格',
        'wholesale_discount' => '请选择批发优惠',
        'sms_payer' => '请选择短信支付方',
        'limit_quantity' => '请输入起购数量',
        'inventory_notify' => '请输入库存预警',
        'coupon_type' => '请选择优惠券类型',
        'sold_notify' => '请选择售出通知',
        'take_card_type' => '请选择提卡密码设置',
        'visit_type' => '请选择浏览密码方式',
        'content' => '请输入商品说明',
        'remark' => '请输入使用说明',
    ];
}

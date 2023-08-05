<?php
/**
 * 商品验证
 */

namespace app\merchant\validate;

use think\Validate;

class Goods extends Validate
{
    protected $rule =   [
        'cate_id'        =>'require',
        'name'           =>'require',
        'price'          =>'gt:0',
        'visit_password' =>'requireIf:visit_type,1',
    ];

    protected $message  =   [
        'cate_id.require'          =>'商品分类未选择',
        'name.require'             =>'商品名称未填写',
        'price.gt'                 =>'商品价格不能为0',
        'visit_password.requireIf' =>'访问密码未填写',
    ];
}

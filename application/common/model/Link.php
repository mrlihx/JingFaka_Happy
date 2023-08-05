<?php

namespace app\common\model;

use think\Model;

class Link extends Model
{
    public function relation()
    {
        return $this->morphTo('relation',[
            'user'	             =>	'app\common\model\User',
            'goods'	             =>	'app\common\model\Goods',
            'goods_category'	 =>	'app\common\model\GoodsCategory',
        ]);
    }
}

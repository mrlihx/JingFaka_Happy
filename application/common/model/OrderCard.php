<?php
namespace app\common\model;

use think\Model;

class OrderCard extends Model
{
    public function order()
    {
        return $this->belongsTo('Order','order_id');
    }
}

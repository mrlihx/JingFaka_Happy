<?php
/**
 * Created by PhpStorm.
 * User: jarentang
 * Date: 2018/6/19
 * Time: 5:18 PM
 */
namespace app\common\model;

use think\Model;

class RateGroupRule extends Model {

    //支付渠道信息
    public function channel()
    {
        return $this->hasOne('channel','id','channel_id');
    }
}
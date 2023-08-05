<?php

namespace app\common\model;

use think\Model;

class UserChannel extends Model
{

    //开启的支付通道
    static $ON = 1;
    //关闭的支付通道
    static $OFF = 0;

    public function user()
    {
        return $this->belongsTo('User','user_id');
    }
    public function channel()
    {
        return $this->belongsTo('Channel','channel_id');
    }
}

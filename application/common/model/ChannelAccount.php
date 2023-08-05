<?php

namespace app\common\model;

use think\Model;

class ChannelAccount extends Model
{
    public function channel()
    {
        return $this->belongsTo('Channel');
    }

    protected function setParamsAttr($value)
    {
        return json_encode($value);
    }

    protected function getParamsAttr($value){
        return json_decode($value);
    }

    public function orders()
    {
        return $this->hasMany('Order','channel_account_id');
    }
}

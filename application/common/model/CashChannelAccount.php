<?php

namespace app\common\model;

use think\Model;

class CashChannelAccount extends Model
{
    public function channel()
    {
        return $this->belongsTo('CashChannel', 'channel_id');
    }

    protected function setParamsAttr($value)
    {
        return json_encode($value);
    }

    protected function getParamsAttr($value)
    {
        return json_decode($value);
    }
}

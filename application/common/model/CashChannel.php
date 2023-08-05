<?php

namespace app\common\model;

use think\Model;

class CashChannel extends Model
{
    public function accounts()
    {
        return $this->hasMany('CashChannelAccount', 'channel_id');
    }
}

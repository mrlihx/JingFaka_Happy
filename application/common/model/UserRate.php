<?php

namespace app\common\model;
use think\Model;

class UserRate extends Model
{
    public function user()
    {
        return $this->belongsTo('User');
    }

    public function channel()
    {
        return $this->belongsTo('Channel');
    }
}

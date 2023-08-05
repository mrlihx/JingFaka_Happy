<?php

namespace app\common\model;

use think\Model;

class Cash extends Model
{
    public function user()
    {
        return $this->belongsTo('User','user_id');
    }
}

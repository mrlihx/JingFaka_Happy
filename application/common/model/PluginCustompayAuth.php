<?php

namespace app\common\model;

use think\Model;

class PluginCustompayAuth extends Model {

    public function user() {
        return $this->belongsTo('User', 'user_id');
    }

}

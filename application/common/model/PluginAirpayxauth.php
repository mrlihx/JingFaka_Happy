<?php

namespace app\common\model;

use think\Model;

class PluginAirpayxauth extends Model {

    public function user() {
        return $this->belongsTo('User', 'user_id');
    }

}

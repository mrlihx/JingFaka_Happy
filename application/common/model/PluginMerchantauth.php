<?php

namespace app\common\model;

use think\Db;
use think\Exception;
use think\Model;

class PluginMerchantauth extends Model {

    public function user() {
        return $this->belongsTo('User', 'user_id');
    }

}

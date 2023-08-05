<?php

namespace app\common\model;

use think\Model;
use think\Db;

class ShopIplist extends Model {

    public function user() {
        return $this->belongsTo('User', 'user_id');
    }

    public static function visit($user_id, $ip) {
        if ($ip == "") {
            $ip = $this->request->ip();
        }
        return Db::name('ShopIplist')->insert(['ip' => $ip, 'create_at' => time(), 'user_id' => $user_id]) !== false;
    }

}

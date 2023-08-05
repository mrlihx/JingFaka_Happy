<?php

namespace app\common\model;

use think\Db;
use think\Exception;
use think\Model;

class PluginShopdiy extends Model {

    public function theme() {
        return $this->belongsTo('PluginShopdiyTheme', 'theme_id');
    }

    public static function build($user_id, $theme_id) {
        $shopdiy = new PluginShopdiy();
        $shopdiy->user_id = $user_id;
        $shopdiy->theme_id = $theme_id;
        $shopdiy->save();
        return $shopdiy;
    }

}

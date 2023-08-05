<?php

namespace app\common\model;

use think\Db;
use think\Exception;
use think\Model;
use app\common\model\PluginGuide;

class PluginGuideTheme extends Model {

    protected function getUseCountAttr($value, $data) {
        return PluginGuide::where('theme_id', $data['id'])->where('status', 1)->count();
    }

    public function user() {
        return $this->belongsTo('User', 'user_id');
    }

}

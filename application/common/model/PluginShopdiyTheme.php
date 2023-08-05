<?php

namespace app\common\model;

use think\Db;
use think\Exception;
use think\Model;
use app\common\model\PluginShopdiy;

class PluginShopdiyTheme extends Model {

    protected function getUseCountAttr($value, $data) {
        return PluginShopdiy::where('theme_id', $data['id'])->count();
    }

    public function user() {
        return $this->belongsTo('User', 'user_id');
    }

}

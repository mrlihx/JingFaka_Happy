<?php

namespace app\common\model;

use think\Db;
use think\Exception;
use think\Model;

class PluginGuide extends Model {

    public function theme() {
        return $this->belongsTo('PluginGuideTheme', 'theme_id');
    }

}

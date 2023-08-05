<?php

namespace app\common\model;

use think\Model;

class UserProxy extends Model {

    public function child() {
        return $this->belongsTo('User', 'child_user_id');
    }

}

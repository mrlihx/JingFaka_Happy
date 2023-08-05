<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\common\model;

use think\Model;

class GoodsPool extends Model {

    public function user() {
        return $this->belongsTo('User', 'user_id');
    }

    public function span() {
        return $this->belongsTo('GoodsPoolSpan', 'span_id');
    }

}

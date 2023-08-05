<?php

namespace app\common\model;

use think\Model;

class OrderMaster extends Model {

    public function getLoadModelAttr($value, $data) {
        $model = "app\\common\\model\\" . $data['model'];
        return $model::where(['trade_no' => $data['trade_no']])->find();
    }

}

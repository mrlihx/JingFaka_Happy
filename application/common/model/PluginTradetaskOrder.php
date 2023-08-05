<?php

namespace app\common\model;

use think\Db;
use think\Exception;
use think\Model;
use app\common\model\Order as OrderModel;

class PluginTradetaskOrder extends Model {

    public function user() {
        return $this->belongsTo('User', 'user_id');
    }

    public function task() {
        return $this->belongsTo('PluginTradetask', 'task_id');
    }

    protected function getExpireDayAttr($value, $data) {
        if ($data['status'] == 0) {
            if ($data['expire_at'] <= $_SERVER['REQUEST_TIME']) {
                return '已过期';
            } else {
                $time_left = floor(($data['expire_at'] - $_SERVER['REQUEST_TIME']) / 86400);
                if ($time_left >= 1) {
                    return $time_left . '天后';
                } else {
                    $time = floor(($data['expire_at'] - $_SERVER['REQUEST_TIME']) / 3600);
                    return $time . '小时后';
                }
            }
        }
        if ($data['status'] == 1) {
            return '已完成';
        }
    }

    protected function getTradeMoneyAttr($value, $data) {
        $money = OrderModel::where(['user_id' => $data['user_id'], 'status' => 1, 'success_at' => ['BETWEEN', [$data['create_at'], $data['expire_at']]]])->sum('total_price');
        return $money;
    }

}

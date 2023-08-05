<?php

namespace app\common\model;

use think\Db;
use think\Exception;
use think\Model;

class PluginAllianceOrder extends Model {

    public function channel() {
        return $this->belongsTo('Channel', 'channel_id');
    }

    public function channelAccount() {
        return $this->belongsTo('ChannelAccount', 'channel_account_id');
    }

    public function user() {
        return $this->belongsTo('User', 'user_id');
    }

    public function completeOrder($service, &$order) {
        //判断订单是否已支付
        if ($order->status == 1) {
            return A(0, "当前订单已为已支付状态");
        }

        Db::startTrans();
        try {
            $time = time();
            // 完成订单
            $res = Db::name('plugin_alliance_order')->where(['id' => $order->id, 'status' => 0])->update(['status' => 1, 'success_at' => $time]);
            if (!$res) {
                Db::rollback();
                return A(0, "不存在当前订单");
            }
            $order->save();

            $money = $order->money;

            if ($money > 0) {
                Db::name('user')->where(['id' => $order->user_id])->update(['fee_money' => Db::raw('fee_money+' . $money)]);
            }

            Db::commit();
        } catch (\Exception $e) {
            Db::rollback();
            // 记录错误订单
            return A(0, $order->trade_no . $e->getMessage());
        }
        return A(1, "订单设置支付成功");
    }

    public function callbackUrl($service, &$order) {
        return url('merchant/agent/alliance');
    }

}

<?php

namespace app\common\model;

use think\Model;
use traits\model\SoftDelete;
use think\Db;

class GoodsCard extends Model {

    use SoftDelete;

    protected $deleteTime = 'delete_at';

    public function goods() {
        return $this->belongsTo('Goods', 'goods_id');
    }

    public function order_card() {
        return $this->belongsTo('OrderCard', 'card_id');
    }

    protected function getStatusTextAttr($value, $data) {
        $status = [
            1 => '未售出',
            2 => '已售出',
        ];
        return $status[$data['status']];
    }

    public static function freezeStorage($order) {
        if ($order->is_proxy == 1) {
            $goods = $order->proxy;
        } else {
            $goods = $order->goods;
        }
        $n = $order->quantity;
        $res = true;
        $unfreeze_at = $order->create_at + plugconf("lockcard", "lock_time");
        if ($goods->card_order == 0) {
            $res = Db::name('goods_card')->where(['goods_id' => $goods->id, "status" => 1])->limit($n)->order("is_first desc,create_at asc,id asc")->update(['unfreeze_at' => $unfreeze_at]);
        } elseif ($goods->card_order == 1) {
            $res = Db::name('goods_card')->where(['goods_id' => $goods->id, "status" => 1])->limit($n)->order("is_first desc,create_at desc,id desc")->update(['unfreeze_at' => $unfreeze_at]);
        } elseif ($goods->card_order == 2) {
            $res = Db::name('goods_card')->where(['goods_id' => $goods->id, "status" => 1])->limit($n)->orderRaw('rand()')->update(['unfreeze_at' => $unfreeze_at]);
        } elseif ($goods->card_order == 3) {
            $res = Db::name('goods_card')->where(['goods_id' => $goods->id, "status" => 1])->where('id', 'in', $order->select_cards)->limit($n)->update(['unfreeze_at' => $unfreeze_at]);
        } elseif ($goods->card_order == 4) {
            
        } else {
            $res = Db::name('goods_card')->where(['goods_id' => $goods->id, "status" => 1])->limit($n)->order("is_first desc,create_at asc,id asc")->update(['unfreeze_at' => $unfreeze_at]);
        }
        return $res;
    }

}

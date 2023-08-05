<?php

namespace app\common\model;

use think\Model;
use think\Db;

class GoodsCategory extends Model {

    public function user() {
        return $this->belongsTo('User', 'user_id');
    }

    public function goodsList() {
        return $this->hasMany('Goods', 'cate_id');
    }

    public function coupons() {
        return $this->hasMany('GoodsCoupon', 'cate_id');
    }

    public function getCountAttr() {
        $goods = $this->goodsList()->select();
        $i = 0;
        foreach ($goods as $good) {
            if ($good->status == 0 || ($good->is_proxy == 1 && (!$good->pgoods || $good->pgoods->status == 0))) {
                continue;
            }
            $i++;
        }
        return $i;
    }

    /**
     * 链接
     */
    public function link() {
        return $this->morphOne('Link', 'relation', 'goods_category')->order('id desc');
    }

    /**
     * 获取店铺链接
     */
    public function getLinkAttr($value, $data) {
        $links = $this->link()->find();
        $domain = sysconf('site_shop_domain') . '/liebiao/';
        if (!$links) {
            $token = strtoupper(get_uniqid(16));
            $short_url = get_short_domain($domain . $token);
            $this->link()->insert([
                'user_id' => $data['user_id'],
                'relation_type' => 'goods_category',
                'relation_id' => $data['id'],
                'token' => $token,
                'short_url' => $short_url,
                'status' => 1,
                'create_at' => $_SERVER['REQUEST_TIME'],
            ]);
        }
        return $domain . $this->link()->value('token');
    }

    /**
     * 获取店铺短链接
     */
    public function getShortLinkAttr($value, $data) {
        return $this->link()->value('short_url');
    }

    /**
     * 重置短连接
     */
    public function getResetShortLinkAttr($value, $data) {
        $token = $this->link()->value('token');
        $domain = sysconf('site_shop_domain') . '/liebiao/';
        $short_url = get_short_domain($domain . $token);
        Db::name('link')->where([
            'user_id' => $data['user_id'],
            'relation_type' => 'goods_category',
            'relation_id' => $data['id'],
        ])->update([
            'short_url' => $short_url,
        ]);
        return $short_url;
    }

    /**
     * 获取链接状态
     */
    public function getLinkStatusAttr($value, $data) {
        return $this->link()->value('status');
    }

}

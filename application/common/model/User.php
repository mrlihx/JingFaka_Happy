<?php

namespace app\common\model;

use app\common\util\Email;
use app\common\util\Sms;
use service\MerchantLogService;
use think\Loader;
use think\Model;
use think\Db;
use think\Request;
use think\Validate;

class User extends Model {

    public function collect() {
        return $this->hasOne('UserCollect', 'user_id');
    }

    public function goodsList() {
        return $this->hasMany('Goods', 'user_id');
    }

    public function categorys() {
        return $this->hasMany('GoodsCategory', 'user_id');
    }

    public function orders() {
        return $this->hasMany('Order', 'user_id');
    }

    public function messagesByFrom() {
        return $this->hasMany('Message', 'from_id');
    }

    public function messagesByTo() {
        return $this->hasMany('Message', 'to_id');
    }

    public function messages() {
        return $this->hasMany('Message', 'user_id');
    }

    public function getParentAttr($value, $data) {
        return $this->where(['id' => $data['parent_id']])->find();
    }

    public function getSubUserCountAttr($value, $data) {
        return $this->where(['parent_id' => $data['id']])->count();
    }

    public function rate() {
        return $this->hasMany('UserRate', 'user_id');
    }

    public function cashs() {
        return $this->hasMany('UserCash', 'user_id');
    }

    public function rebates() {
        return $this->hasMany('UserRebate', 'user_id');
    }

    public function complaints() {
        return $this->hasMany('Complaint', 'user_id');
    }

    /**
     * 获取投诉次数
     */
    public function getComplaintCountAttr($value, $data) {
        return $this->complaints()->count();
    }

    public function loginLogs() {
        return $this->hasMany('UserLoginLog', 'user_id');
    }

    public function channelStatus() {
        return $this->hasMany('UserChannel', 'user_id');
    }

    /**
     * 链接
     */
    public function link() {
        return $this->morphMany('Link', 'relation', 'user')->order('id desc');
    }

    public function getFullSubdomainAttr($value, $data) {
        if ($data['subdomain'] == "") {
            return "";
        } else {
            return get_http_type() . $data['subdomain'] . '.' . (plugconf('subdomain', 'top_domain'));
        }
    }

    /**
     * 获取店铺链接
     */
    public function getLinkAttr($value, $data) {
        $links = $this->link()->find();
        $domain = sysconf('site_shop_domain') . '/links/';
        if (!$links) {
            while (1) {
                $token = strtoupper(get_uniqid(8));

                //检测token是否存在
                $count = Db::name('link')->where('token', $token)->count();

                if ($count == 0) {
                    break;
                }
            }

            $short_url = get_short_domain($domain . $token);
            $this->link()->insert([
                'user_id' => $data['id'],
                'relation_type' => 'user',
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
     * @param $value
     * @param $data
     * @return string
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function getShortLinkAttr($value, $data) {
        $links = $this->link()->find();
        if (!$links) {
            $domain = sysconf('site_shop_domain') . '/links/';
            while (1) {
                $token = strtoupper(get_uniqid(8));

                //检测token是否存在
                $count = Db::name('link')->where('token', $token)->count();

                if ($count == 0) {
                    break;
                }
            }

            $short_url = get_short_domain($domain . $token);
            $this->link()->insert([
                'user_id' => $data['id'],
                'relation_type' => 'user',
                'relation_id' => $data['id'],
                'token' => $token,
                'short_url' => $short_url,
                'status' => 1,
                'create_at' => $_SERVER['REQUEST_TIME'],
            ]);
        } else {
            $short_url = $links['short_url'];
        }
        return $short_url;
    }

    /**
     * 重置短连接
     */
    public function getResetShortLinkAttr($value, $data) {
        $token = $this->link()->value('token');
        $domain = sysconf('site_shop_domain') . '/links/';
        $short_url = get_short_domain($domain . $token);
        Db::name('link')->where([
            'user_id' => $data['id'],
            'relation_type' => 'user',
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

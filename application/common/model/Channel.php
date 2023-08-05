<?php

namespace app\common\model;

use think\Db;
use think\Exception;
use think\Model;

class Channel extends Model {

    public function orders() {
        return $this->hasMany('Order', 'channel_id');
    }

    public function accounts() {
        return $this->hasMany('ChannelAccount', 'channel_id');
    }

    public function paytypes() {
        return $this->belongsTo('PayType', 'paytype');
    }

    public function getAccountingDateTextAttr($value, $data) {
        $type = [1 => 'D+0', 2 => 'D+1', 3 => 'T+0', 4 => 'T+1'];
        return $type[$data['accounting_date']];
    }

    public function channelStatus() {
        return $this->hasMany('UserChannel', 'channel_id');
    }

    public function userRates() {
        return $this->hasMany('UserRate', 'channel_id');
    }

    public function paySafe() {
        return $this->hasOne('PluginPaysafe', 'channel_id');
    }

    /**
     * 安装
     * @param $id
     * @return array
     */
    static function install($id) {
        try {
            $res = Db::name('channel')->where('id', $id)->update(['is_install' => 1]);
            if ($res) {
                return ['status' => true];
            } else {
                return ['status' => false];
            }
        } catch (Exception $e) {
            return ['status' => false, 'msg' => $e->getMessage()];
        }
    }

    /**
     * 卸载
     * @param $id
     * @return array
     */
    static function uninstall($id) {
        try {
            $res = Db::name('channel')->where('id', $id)->update(['status' => 0, 'is_install' => 0]);
            if ($res) {
                return ['status' => true];
            } else {
                return ['status' => false];
            }
        } catch (Exception $e) {
            return ['status' => false, 'msg' => $e->getMessage()];
        }
    }

}

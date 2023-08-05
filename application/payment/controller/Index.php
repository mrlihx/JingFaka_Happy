<?php

namespace app\payment\controller;

use app\common\model\Cash as CashModel;
use app\common\model\CashChannel;
use app\common\model\CashChannelAccount;
use think\Exception;

class Index {

    public function notify() {

        file_put_contents(LOG_PATH . 'payment_notify.txt', "【" . date('Y-m-d H:i:s') . "】\r\n" . file_get_contents("php://input") . "\r\n\r\n", FILE_APPEND);

        $channelId = input('channel/s', '');
        if (empty($channelId)) {
            die('false');
        }

        $params = $this->getParams($channelId);
        list($cash, $account) = $this->getCashInfo($params);

        //查找渠道
        try {
            $channel = CashChannel::get(['code' => $channelId]);
            $class = '\\app\\common\\payment\\' . $channel->code;
            $obj = new $class($account);
            $res = $obj->notify($params, $cash);
        } catch (Exception $e) {
            echo 'FALSE';
            exit;
        }
    }

    /**
     * 获取请求信息
     *
     * @return void
     */
    protected function getParams() {
        $params = [];
        $channel = input('channel/s', '');
        switch ($channel) {
            
        }
        return $params;
    }

    /**
     * 获取提现信息
     *
     * @param string $channel
     * @return array
     */
    protected function getCashInfo($params) {
        $channel = input('channel/s', '');
        $orderid = '';

        switch ($channel) {
            
        }

        if (empty($orderid)) {
            die('False');
        }

        $cash = CashModel::get(['orderid' => $orderid]);
        if ($cash->status == 1) {
            echo 'True';
            exit();
        }

        $account = CashChannelAccount::get($cash->account);
        return [$cash, $account];
    }

}

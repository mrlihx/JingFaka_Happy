<?php

namespace app\pay\controller;

use service\PayService;
use app\common\util\codepay\Codepay;
use app\common\model\PluginCodepayApplist;

class FakaCodePay extends PayService {

    /**
     * 参考接口
     * @param string $trade_no 外部单号
     * @param string $subject 标题
     * @param float $totalAmount 支付金额
     */
    public function pay($trade_no, $subject, $totalAmount) {

        $order = $this->loadOrder($trade_no);

        $appid = $order->channelAccount->params->appid;
        $appkey = $order->channelAccount->params->appkey;
        $type = $order->channelAccount->params->type;

        $app = PluginCodepayApplist::where(['appid' => $appid])->find();
        if (!$app) {
            $this->error("支付账号不存在！");
        }
        //先判断心跳
        if ($type == "alipay" && $app->alipay_type == 1 && $app->alipay_online != 1) {
            $this->error("收款账号已下线！");
        } elseif ($type == "wxpay" && $app->weixin_type == 1 && $app->weixin_online != 1) {
            $this->error("收款账号已下线！");
        } elseif ($type == "qqpay" && $app->qq_type == 1 && $app->qq_online != 1) {
            $this->error("收款账号已下线！");
        }

        $callbackurl = url("pay/FakaCodePay/callback");
        $notifyurl = url("pay/FakaCodePay/notify");

        $native = array(
            "appid" => $appid,
            "type" => $type,
            "price" => $totalAmount,
            "name" => $subject,
            "body" => $subject,
            "notify_url" => $notifyurl,
            "out_trade_no" => $trade_no,
            "ip" => $this->request->ip(),
            "server" => url("index/index/index"),
            "channel_type" => $type == "alipay" ? $app->alipay_type : ($type == "wxpay" ? $app->weixin_type : $app->qq_type),
            "channel_account" => base64_encode(htmlspecialchars_decode($type == "alipay" ? $app->alipay_uid : ($type == "wxpay" ? $app->weixin_qrcode : $app->qq_qrcode))),
        );
        ksort($native);
        $arg = "";
        foreach ($native as $key => $val) {
            if ($val === "") {
                continue;
            }
            $arg .= $key . "=" . ($val) . "&";
        }
        $sign = md5(substr($arg, 0, -1) . $appkey);
        $native["sign"] = $sign;
        $res = Codepay::pay($native);
        if ($res['code'] == 0) {
            $this->error($res['msg']);
        } else {
            return $this->ma_qrcode($res['data']['payurl'], $res['data']['price'], $res['data']['time']);
        }
    }

    /**
     * 页面回调
     */
    public function callback() {
        $out_trade_no = input("out_trade_no"); //获取同步回调订单号
        header("Location:" . url('index/Pay/pay_result', ['orderid' => $out_trade_no]));
        die;
    }

    /**
     * 异步回调
     */
    public function notify() {

        $data = input('');

        $sign = $data['sign'];
        unset($data['sign']);
        $order = $this->loadOrder($data['out_trade_no']);
        $channel_key = $order->channelAccount->params->appkey;
        ksort($data);
        $arg = "";
        foreach ($data as $key => $val) {
            $arg .= $key . "=" . ($val) . "&";
        }
        $sign_new = md5(substr($arg, 0, -1) . $channel_key);
        if ($sign == $sign_new) {
            $order->transaction_id = $data['trade_no'];
            $this->completeOrder($order);
            echo "SUCCESS";
        } else {
            echo "FAIL";
        }
    }

}

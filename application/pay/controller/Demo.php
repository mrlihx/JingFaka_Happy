<?php

namespace app\pay\controller;

use service\PayService;

class Demo extends PayService {

    /**
     * 参考接口
     * @param string $trade_no 外部单号
     * @param string $subject 标题
     * @param float $totalAmount 支付金额
     */
    public function pay($trade_no, $subject, $totalAmount) {

        $order = $this->loadOrder($trade_no); //内置函数loadOrder，获取订单对象

        $appid = $order->channelAccount->params->app_id; //获取支付通道账号参数，示例获取账号app_id参数
        $key = $order->channelAccount->params->key; //获取支付通道账号参数，示例获取账号key参数

        $callbackurl = url("pay/Demo/callback"); //同步回调地址
        $notifyurl = url("pay/Demo/notify"); //异步回调地址
        //******
        //调用上游接口
        //******
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
        $out_trade_no = input("out_trade_no"); //获取异步回调订单号
        $order = $this->loadOrder($out_trade_no); //内置函数loadOrder，获取订单对象

        $key = $order->channelAccount->params->key; //获取支付通道账号参数，示例获取账号key参数

        if ($验签) {
            $order->transaction_id = input('transaction_id'); //设置流水号
            $this->completeOrder($order); //固定写法，走系统异步回调接口
            echo 'success';
        } else {
            echo 'error';
        }
        exit();
    }

    /**
     * 退款接口
     */
    public function refund($order) {
        $key = $order->channelAccount->params->key; //获取支付通道账号参数，示例获取账号key参数，用于生成接口签名
        //************//
        //执行API接口退款
        //************//
        if ($判断接口返回状态) {
            return ["code" => 1, "msg" => "退款成功"];
        } else {
            return ["code" => 0, "msg" => "退款失败，原因......"];
        }
    }

}

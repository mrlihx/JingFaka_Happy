<?php

namespace app\pay\controller;

use service\PayService;

class Yuanming extends PayService {

    /**
     * 参考接口
     * @param string $trade_no 外部单号
     * @param string $subject 标题
     * @param float $totalAmount 支付金额
     */
    public function pay($trade_no, $subject, $totalAmount) {

        $order = $this->loadOrder($trade_no);

        $appid = $order->channelAccount->params->appid;
        $apikey = $order->channelAccount->params->apikey;
        $bankcode = $order->channelAccount->params->bankcode;

        $out_trade_no = $trade_no;    //订单号

        $total_amount = $totalAmount;    //交易金额，单位元
        $applydate = date("Y-m-d H:i:s");  //订单时间
        $notifyurl = url("pay/Yuanming/notify");  //服务端返回地址
        $callbackurl = url("pay/Yuanming/callback");  //页面跳转返回地址
        $goods_name = $subject; //商品名称
        $gateway = "https://gateway.xgymwl.cn/Pay/index";   //提交地址

        $native = array(
            'appid' => $appid,
            'out_trade_no' => $out_trade_no,
            'total_amount' => $total_amount,
            'timestamp' => $applydate,
            'bankcode' => $bankcode,
            'notifyurl' => $notifyurl,
            'callbackurl' => $callbackurl,
            'attach' => "发卡支付",
            'goods_name' => $goods_name,
        );
        ksort($native);
        $md5str = "";
        foreach ($native as $key => $val) {
            if (!empty($val)) {
                $md5str = $md5str . $key . "=" . $val . "&";
            }
        }

        $sign = strtoupper(md5($md5str . "key=" . $apikey));
        $native["sign"] = $sign;
        $native["sign_type"] = "MD5";
        $native["return_type"] = "html";

        $html = '<form  name="form1" class="form-inline" method="post" action="' . $gateway . '">';

        foreach ($native as $key => $val) {
            $html .= '<input type="hidden" name="' . $key . '" value="' . $val . '">';
        }
        $html .= '</form>';

        $html .= '<script type="text/javascript">document.form1.submit()</script>';

        echo $html;
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

        $out_trade_no = input("out_trade_no");
        $order = $this->loadOrder($out_trade_no);

        $apikey = $order->channelAccount->params->apikey;

        $return = array(
            "appid" => $_REQUEST["appid"], // 商户ID
            "out_trade_no" => $_REQUEST["out_trade_no"], // 商家订单号
            "trade_no" => $_REQUEST["trade_no"], // 支付流水号
            "total_amount" => $_REQUEST["total_amount"], //交易金额
            "timestamp" => $_REQUEST["timestamp"],
            "code" => $_REQUEST["code"],
            "msg" => $_REQUEST["msg"],
        );

        ksort($return);
        $md5str = "";
        foreach ($return as $key => $val) {
            if (!empty($val)) {
                $md5str = $md5str . $key . "=" . $val . "&";
            }
        }
        $sign = strtoupper(md5($md5str . "key=" . $apikey));
        if ($sign == $_REQUEST["sign"] && $_REQUEST["code"] == "1000") {
            $order->transaction_id = input('trade_no');
            $this->completeOrder($order);
            echo 'success';
        } else {
            echo 'error';
        }
    }

}

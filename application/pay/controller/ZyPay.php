<?php

namespace app\pay\controller;

use service\PayService;

class ZyPay extends PayService {

    public function pay($trade_no, $subject, $totalAmount) {
        $order = $this->loadOrder($trade_no);

        $channel_gateway = $order->channelAccount->params->gateway;
        $channel_memberid = $order->channelAccount->params->memberid;
        $channel_key = $order->channelAccount->params->key;
        $channel_type = $order->channelAccount->params->type;

        $callbackurl = url("pay/ZyPay/callback");
        $notifyurl = url("pay/ZyPay/notify");

        $pay_memberid = $channel_memberid;
        $pay_orderid = $trade_no;
        $pay_amount = $totalAmount;
        $pay_applydate = date("Y-m-d H:i:s");
        $pay_bankcode = $channel_type;
        $pay_notifyurl = $notifyurl;
        $pay_callbackurl = $callbackurl;
        $Md5key = $channel_key;
        $tjurl = $channel_gateway;
        $pay_productname = $subject;
        $jsapi = array(
            "pay_memberid" => $pay_memberid,
            "pay_orderid" => $pay_orderid,
            "pay_applydate" => $pay_applydate,
            "pay_bankcode" => $pay_bankcode,
            "pay_notifyurl" => $pay_notifyurl,
            "pay_callbackurl" => $pay_callbackurl,
            "pay_amount" => $pay_amount,
            "pay_productname" => $pay_productname
        );
        ksort($jsapi);
        $md5str = "";
        foreach ($jsapi as $key => $val) {
            $md5str = $md5str . $key . "=" . $val . "&";
        }

        $sign = strtoupper(md5($md5str . "key=" . $Md5key));
        $jsapi["pay_md5sign"] = $sign;
        $res = $this->http_curl($tjurl, 'post', $jsapi);
        $res = json_decode($res, true);
        if ($res['status'] != '200') {
            header("Content-type: text/html; charset=utf-8");
            $msg = '';
            $msg .= isset($res['errormsg']) ? $res['errormsg'] : '';
            $msg .= isset($res['msg']) ? $res['msg'] : '';
            echo $msg;
            exit();
        }
        $img = $res['data']['QRCodeUrl'];

        return $this->qrcode($img);
    }

    /**
     * 页面回调
     */
    public function callback() {
        $out_trade_no = input("orderid");
        header("Location:" . url('index/Pay/pay_result', ['orderid' => $out_trade_no]));
        die;
    }

    function http_curl($url = "", $type = 'get', $arr = '') {
        $ch = curl_init();
        //2.设置curl的参数
        curl_setopt($ch, CURLOPT_URL, $url); //设置我们的url
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //curl_exec执行成功则返回执行结果
        if ($type == 'post') {
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $arr); //将$arr发送给$url
        }
        $output = curl_exec($ch);
        if (empty($output)) {
            echo curl_error($ch);
            echo "<br>";
            echo curl_errno($ch);
            echo "<br>";
        }
        curl_close($ch);
        return $output;
    }

    /**
     * 服务器回调
     */
    public function notify() {
        $out_trade_no = input("orderid");
        $order = $this->loadOrder($out_trade_no);
        $key = $order->channelAccount->params->key;

        $ReturnArray = array(
            "memberid" => input("memberid"),
            "orderid" => input("orderid"),
            "transaction_id" => input("transaction_id"),
            "amount" => input("amount"),
            "datetime" => input("datetime"),
            "returncode" => input("returncode")
        );

        $Md5key = $key; //商户KEY
        ksort($ReturnArray);
        $md5str = "";
        foreach ($ReturnArray as $key => $val) {
            $md5str = $md5str . $key . "=" . $val . "&";
        }
        $sign = strtoupper(md5($md5str . "key=" . $Md5key));
        if ($sign == input("sign") && input("returncode") == '00') {
            $order->transaction_id = input('transaction_id');
            $this->completeOrder($order);
            echo 'ok';
            exit();
        } else {
            echo 'fail';
            exit();
        }
    }

}

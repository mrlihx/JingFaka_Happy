<?php

namespace app\pay\controller;

use service\PayService;

class Xinhui extends PayService {

    /**
     * 扫码支付
     * @param string $trade_no 外部单号
     * @param string $subject 标题
     * @param float $totalAmount 支付金额
     */
    public function pay($trade_no, $subject, $totalAmount) {
        $order = $this->loadOrder($trade_no);

        $merchantId = $order->channelAccount->params->merchantId;
        $merchantKey = $order->channelAccount->params->merchantKey;
        $appmchid = $order->channelAccount->params->appmchid;

        $callbackurl = url("pay/Xinhui/callback");
        $notifyurl = url("pay/Xinhui/notify");

        $native = array(
            "orderId" => $trade_no,
            "merchantId" => $merchantId,
            "version" => "0.0.1",
            "orderAmt" => $totalAmount * 100,
            "bizCode" => $appmchid,
            "bgUrl" => $notifyurl,
            "terminalIp" => $_SERVER['REMOTE_ADDR'],
            "productName" => $subject,
            "productDes" => $subject,
        );
        ksort($native);
        $md5str = "";
        foreach ($native as $key => $val) {
            $md5str = $md5str . $key . "=" . $val . "&";
        }

        $sign = strtoupper(md5($md5str . "key=" . $merchantKey));
        $native["sign"] = $sign;

        $res = $this->request_post("http://www.hyuepay.com/order/pay.do", $native);
        $res = json_decode($res, true);
        if ($res['rspCode'] == '00') {
            $payUrl = $res['payUrl'];
            return $this->qrcode($payUrl);
        } else {
            print_r($res);
        }
    }

    /**
     * 页面回调
     */
    public function callback() {
        $out_trade_no = input("out_trade_no");
        header("Location:" . url('index/Pay/pay_result', ['orderid' => $out_trade_no]));
        die;
    }

    /**
     * 服务器回调
     */
    public function notify() {
        $data = json_decode(file_get_contents('php://input'), true);
        $sign = $data['sign'];
        unset($data['sign']);
        ksort($data);
        $md5str = "";
        foreach ($data as $key => $val) {
            $md5str .= $key . "=" . $val . "&";
        }
        $out_trade_no = $data['orderId'];
        $order = $this->loadOrder($out_trade_no);
        $merchantKey = $order->channelAccount->params->merchantKey;
        $sign1 = strtoupper(md5($md5str . "key=" . $merchantKey));

        if ($sign == $sign1 && $data["status"] == "00") {
            $order->transaction_id = $data['upOrderId'];
            $this->completeOrder($order);
            echo "ok";
        } else {
            echo "FAIL";
        }
    }

    public function refundNofity() {
        echo "ok";
    }

    public function refund($order) {
        $merchantId = $order->channelAccount->params->merchantId;
        $merchantKey = $order->channelAccount->params->merchantKey;

        $native = array(
            "orderId" => "T" . $order->trade_no,
            "merchantId" => $merchantId,
            "bizCode" => "2900",
            "version" => "0.0.1",
            "refundAmt" => $order->total_price * 100,
            "bgUrl" => url("pay/Xinhui/refundNofity"),
            "origOrderId" => $order->trade_no,
        );
        ksort($native);
        $md5str = "";
        foreach ($native as $key => $val) {
            $md5str = $md5str . $key . "=" . $val . "&";
        }

        $sign = strtoupper(md5($md5str . "key=" . $merchantKey));
        $native["sign"] = $sign;

        $res = $this->request_post("http://www.hyuepay.com/refund/pay.do", $native);
        $res = json_decode($res, true);
        if ($res['rspCode'] == '00') {
            return ["code" => 1, "msg" => "退款成功"];
        } else {
            return ["code" => 0, "msg" => $res['rspMsg']];
        }
    }

    function request_post($url = '', $post_data = array()) {
        if (empty($url) || empty($post_data)) {
            return false;
        }

        $o = "";
        foreach ($post_data as $k => $v) {
            $o .= "$k=" . urlencode($v) . "&";
        }
        $post_data = substr($o, 0, -1);

        $postUrl = $url;
        $curlPost = $post_data;
        $ch = curl_init(); //初始化curl
        curl_setopt($ch, CURLOPT_URL, $postUrl); //抓取指定网页
        curl_setopt($ch, CURLOPT_HEADER, 0); //设置header
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //要求结果为字符串且输出到屏幕上
        curl_setopt($ch, CURLOPT_POST, 1); //post提交方式
        curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);  // 跳过检查
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);  // 跳过检查
        $data = curl_exec($ch); //运行curl
        curl_close($ch);

        return $data;
    }

}

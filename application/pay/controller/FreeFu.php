<?php

namespace app\pay\controller;

use service\PayService;

class FreeFu extends PayService {

    public function pay($trade_no, $subject, $totalAmount) {
        $order = $this->loadOrder($trade_no);

        $channel_pid = $order->channelAccount->params->pid;
        $channel_key = $order->channelAccount->params->key;
        $channel_type = $order->channelAccount->params->type;
        $channel_gateway = $order->channelAccount->params->gateway;

        $callbackurl = url("pay/FreeFu/callback");
        $notifyurl = url("pay/FreeFu/notify");

        $native = array(
            "pid" => $channel_pid,
            "type" => $channel_type,
            "out_trade_no" => $trade_no,
            "notify_url" => $notifyurl,
            "return_url" => $callbackurl,
            "name" => $subject,
            "money" => $totalAmount,
            "sitename" => "发卡平台",
        );
        ksort($native);
        $arg = "";
        foreach ($native as $key => $val) {
            $arg .= $key . "=" . ($val) . "&";
        }
        $arg = substr($arg, 0, -1);
        $sign = (md5($arg . $channel_key));
        $native["sign"] = $sign;
        $native['sign_type'] = "MD5";

        $html = '<form  name="form1" class="form-inline" method="post" action="' . $channel_gateway . '">';
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
        $out_trade_no = input("out_trade_no");
        header("Location:" . url('index/Pay/pay_result', ['orderid' => $out_trade_no]));
        die;
    }

    function paraFilter($para) {
        $para_filter = array();
        foreach ($para as $key => $val) {
            if ($key == "sign" || $key == "sign_type" || $val == "")
                continue;
            else
                $para_filter[$key] = $para[$key];
        }
        return $para_filter;
    }

    function argSort($para) {
        ksort($para);
        reset($para);
        return $para;
    }

    function createLinkstring($para) {
        $arg = "";
        foreach ($para as $key => $val) {
            $arg .= $key . "=" . $val . "&";
        }
        //去掉最后一个&字符
        $arg = substr($arg, 0, -1);
        return $arg;
    }

    function md5Verify($prestr, $sign, $key) {
        $prestr = $prestr . $key;
        $mysgin = (md5($prestr));
        if ($mysgin == $sign) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 服务器回调
     */
    public function notify() {
        $out_trade_no = input("out_trade_no");
        $order = $this->loadOrder($out_trade_no);
        $para_filter = $this->paraFilter($_GET);
        $para_sort = $this->argSort($para_filter);
        $prestr = $this->createLinkstring($para_sort);
        $isSgin = false;
        $isSgin = $this->md5Verify($prestr, input("sign"), $order->channelAccount->params->key);
        if ($isSgin) {
            $order->transaction_id = input('trade_no');
            $this->completeOrder($order);
            echo 'success';
        }
        exit();
    }

}

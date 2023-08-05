<?php

namespace app\pay\controller;

use service\PayService;
use think\Request;

class YisufuPay extends PayService {

    public function pay($trade_no, $subject, $totalAmount) {
        $order = $this->loadOrder($trade_no);

        $sub_mch_id = $order->channelAccount->params->sub_mch_id;
        $channel_type = $order->channelAccount->params->channel_type;


        $open_userid = $order->channelAccount->params->open_userid;
        $open_userkey = $order->channelAccount->params->open_userkey;

        $notifyurl = url("pay/YisufuPay/notify");

        $scheme = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';


        $param = [
            'open_userid' => $open_userid,
            'res_body' => [
                'channel_type' => $channel_type,
                'total_fee' => $totalAmount,
                'pay_name' => $subject,
                'pay_body' => $subject,
                'notify_url' => $notifyurl,
                'out_trade_no' => $trade_no,
                'user_ip' => Request::instance()->ip(),
                'server_url' => $scheme . $_SERVER['HTTP_HOST'],
            ],
            'service' => 'gateway.unified.pay',
            'sign_type' => 'MD5'
        ];

        if ($sub_mch_id == "") {
            $param['res_body']['sub_type'] = "SYSTEM";
        } else {
            $param['res_body']['sub_mch_id'] = $sub_mch_id;
        }

        ksort($param['res_body']);
        $param['res_body'] = json_encode($param['res_body']);
        $sign = new YisufuPaySign;
        $param['sign'] = $sign->init($param, $open_userkey);
        $res = $this->curl('/Network/unified.jsp', $param);
        $res = json_decode($res, true);
        if ($res['rsp_code'] == "0000") {
            if ($channel_type == "ALIPAY") {
                $pay_url = $res['request_array']['pay_url'];
                return $this->qrcode($pay_url);
            } elseif ($channel_type == "WECHAT_MP") {
                $pay_url = $res['request_array']['pay_url'];
                return $this->qrcode($pay_url);
            } elseif ($channel_type == "WECHAT_H5") {

                $pay_url = $res['request_array']['wechat_redirect'];
                header("location: $pay_url");
            }
        } else {
            echo $res['rsp_msg'];
        }
    }

    function curl($url, $data) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://api.langhanyun.com' . $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10); //单位 秒，也可以使用
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
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
        $out_trade_no = input("out_trade_no");
        $order = $this->loadOrder($out_trade_no);

        $param = [
            'open_userid' => $order->channelAccount->params->open_userid,
            'out_trade_no' => input("out_trade_no"),
            'system_order_id' => input("system_order_id"),
            'pay_external_id' => input("pay_external_id"),
            'total_fee' => input("total_fee")
        ];

        ksort($param);

        $sign = YisufuPaySign::init($param, $order->channelAccount->params->open_userkey, input("sign"));

        if ($sign && input("sign") != '') { // 建议此处还是判断下sign是否为空值
            # SUCCESS 校验成功了,再此处实现业务逻辑
            $order->transaction_id = input("system_order_id");
            $this->completeOrder($order);
            echo 'SUCCESS'; // 输出SUCCESS则判断为通知成功
        } else {
            echo 'NO';
        }
    }

}

class YisufuPaySign {

    static public function init($param, $key, $sign = '') { // $sign 等于空就为生成签名
        $arg = YisufuPaySign::argSort(YisufuPaySign::paraFilter($param));
        $prestr = YisufuPaySign::createLinkstring($arg);
        $urlstr = YisufuPaySign::createLinkstringUrlencode($arg);
        $signs = YisufuPaySign::md5Sign($prestr, $key);
        if ($sign == '') {
            return $signs;
        } else {
            if ($sign == $signs)
                return true;
            return false;
        }
    }

    /**
     * 把数组所有元素，按照“参数=参数值”的模式用“&”字符拼接成字符串
     * @param $para 需要拼接的数组
     * return 拼接完成以后的字符串
     */
    static public function createLinkstring($para) {
        $arg = "";
        foreach ($para as $key => $val) {
            $arg .= $key . "=" . $val . "&";
        }
        //去掉最后一个&字符
        $arg = substr($arg, 0, -1);

        return $arg;
    }

    /**
     * 把数组所有元素，按照“参数=参数值”的模式用“&”字符拼接成字符串，并对字符串做urlencode编码
     * @param $para 需要拼接的数组
     * return 拼接完成以后的字符串
     */
    static public function createLinkstringUrlencode($para) {
        $arg = "";
        foreach ($para as $key => $val) {
            $arg .= $key . "=" . urlencode($val) . "&";
        }
        //去掉最后一个&字符
        $arg = substr($arg, 0, -1);

        return $arg;
    }

    /**
     * 除去数组中的空值和签名参数
     * @param $para 签名参数组
     * return 去掉空值与签名参数后的新签名参数组
     */
    static public function paraFilter($para) {
        $para_filter = array();
        foreach ($para as $key => $val) {
            if ($key == "sign" || $val == "")
                continue;
            else
                $para_filter[$key] = $para[$key];
        }
        return $para_filter;
    }

    /**
     * 对数组排序
     * @param $para 排序前的数组
     * return 排序后的数组
     */
    static public function argSort($para) {
        ksort($para);
        reset($para);
        return $para;
    }

    /**
     * 签名字符串
     * @param $prestr 需要签名的字符串
     * @param $key 私钥
     * return 签名结果
     */
    static public function md5Sign($prestr, $key) {
        $prestr = $prestr . $key;
        return md5($prestr);
    }

}

<?php

namespace app\pay\controller;

use service\PayService;

class WeixinH5 extends PayService {

    public function pay($trade_no, $subject, $totalAmount) {
        $order = $this->loadOrder($trade_no);
        $mchid = $order->channelAccount->params->mchid;          //微信支付商户号 PartnerID 通过微信支付商户资料审核后邮件发送
        $appid = $order->channelAccount->params->appid;  //微信支付申请对应的公众号的APPID
        $appKey = $order->channelAccount->params->appKey;   //微信支付申请对应的公众号的APP Key
        $apiKey = $order->channelAccount->params->apiKey;   //https://pay.weixin.qq.com 帐户设置-安全设置-API安全-API密钥-设置API密钥
        $outTradeNo = $trade_no;
        $payAmount = $totalAmount;
        $orderName = $subject;
        $notifyUrl = url("pay/WeixinH5/notify");
        $returnUrl = url("pay/WeixinH5/callback", ['out_trade_no' => $trade_no]);
        $wapUrl = $this->request->host();
        $wapName = '发卡平台';
        $wxPay = new WxpayH5Service($mchid, $appid, $apiKey);
        $wxPay->setTotalFee($payAmount);
        $wxPay->setOutTradeNo($outTradeNo);
        $wxPay->setOrderName($orderName);
        $wxPay->setNotifyUrl($notifyUrl);
        $wxPay->setReturnUrl($returnUrl);
        $wxPay->setWapUrl($wapUrl);
        $wxPay->setWapName($wapName);

        $mwebUrl = $wxPay->createJsBizPackage($payAmount, $outTradeNo, $orderName, $notifyUrl);
        return $this->paying($mwebUrl);
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
        $postStr = file_get_contents('php://input');
        libxml_disable_entity_loader(true);
        $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
        if ($postObj === false) {
            die('parse xml error');
        }
        if ($postObj->return_code != 'SUCCESS') {
            die($postObj->return_msg);
        }
        if ($postObj->result_code != 'SUCCESS') {
            die($postObj->err_code);
        }
        $post = (array) $postObj;
        $order = $this->loadOrder($post['out_trade_no']);

        $mchid = $order->channelAccount->params->mchid;
        $appid = $order->channelAccount->params->appid;
        $apiKey = $order->channelAccount->params->apiKey;
        $wxPay = new WxpayH5Service($mchid, $appid, $apiKey);
        $result = $wxPay->notify();
        if ($result) {
            $order->transaction_id = $result['transaction_id'];
            $this->completeOrder($order);
        } else {
            echo 'pay error';
        }
        exit();
    }

    public function refund($order) {
        $mchid = $order->channelAccount->params->mchid;
        $appid = $order->channelAccount->params->appid;
        $apiKey = $order->channelAccount->params->apiKey;
        $pem_cert = $order->channelAccount->params->pem_cert;
        $pem_key = $order->channelAccount->params->pem_key;
        $orderNo = '';
        $wxOrderNo = $order->transaction_id;
        $totalFee = $order->total_price;
        $refundFee = $order->total_price;
        $refundNo = 'refund_' . uniqid();
        $wxPay = new WxpayH5Service($mchid, $appid, $apiKey);
        $unifiedOrder = $wxPay->doRefund($totalFee, $refundFee, $refundNo, $wxOrderNo, $orderNo, $pem_cert, $pem_key);
        if ($unifiedOrder === false) {
            return ['code' => 0, 'msg' => "parse xml error"];
        }
        if ($unifiedOrder->return_code != 'SUCCESS') {
            return ['code' => 0, 'msg' => $unifiedOrder->return_msg . ",请确保证书在订单前已设置生效"];
        }
        if ($unifiedOrder->result_code != 'SUCCESS') {
            return ['code' => 0, 'msg' => $unifiedOrder->err_code . ",请确保证书在订单前已已设置生效"];
        }
        return ["code" => 1, "msg" => "退款成功"];
    }

}

class WxpayH5Service {

    protected $mchid;
    protected $appid;
    protected $apiKey;
    protected $totalFee;
    protected $outTradeNo;
    protected $orderName;
    protected $notifyUrl;
    protected $returnUrl;
    protected $wapUrl;
    protected $wapName;

    public function __construct($mchid, $appid, $key) {
        $this->mchid = $mchid;
        $this->appid = $appid;
        $this->apiKey = $key;
    }

    public function setTotalFee($totalFee) {
        $this->totalFee = $totalFee;
    }

    public function setOutTradeNo($outTradeNo) {
        $this->outTradeNo = $outTradeNo;
    }

    public function setOrderName($orderName) {
        $this->orderName = $orderName;
    }

    public function setWapUrl($wapUrl) {
        $this->wapUrl = $wapUrl;
    }

    public function setWapName($wapName) {
        $this->wapName = $wapName;
    }

    public function setNotifyUrl($notifyUrl) {
        $this->notifyUrl = $notifyUrl;
    }

    public function setReturnUrl($returnUrl) {
        $this->returnUrl = $returnUrl;
    }

    /**
     * 发起订单
     * @return array
     */
    public function createJsBizPackage() {
        $config = array(
            'mch_id' => $this->mchid,
            'appid' => $this->appid,
            'key' => $this->apiKey,
        );
        $scene_info = array(
            'h5_info' => array(
                'type' => 'Wap',
                'wap_url' => $this->wapUrl,
                'wap_name' => $this->wapName,
            )
        );
        $unified = array(
            'appid' => $config['appid'],
            'attach' => 'pay', //商家数据包，原样返回，如果填写中文，请注意转换为utf-8
            'body' => $this->orderName,
            'mch_id' => $config['mch_id'],
            'nonce_str' => self::createNonceStr(),
            'notify_url' => $this->notifyUrl,
            'out_trade_no' => $this->outTradeNo,
            'spbill_create_ip' => $_SERVER['REMOTE_ADDR'],
            'total_fee' => intval($this->totalFee * 100), //单位 转为分
            'trade_type' => 'MWEB',
            'scene_info' => json_encode($scene_info)
        );
        $unified['sign'] = self::getSign($unified, $config['key']);
        $responseXml = self::curlPost('https://api.mch.weixin.qq.com/pay/unifiedorder', self::arrayToXml($unified));
        $unifiedOrder = simplexml_load_string($responseXml, 'SimpleXMLElement', LIBXML_NOCDATA);
        if ($unifiedOrder->return_code != 'SUCCESS') {
            die($unifiedOrder->return_msg);
        }
        if ($unifiedOrder->mweb_url) {
            return $unifiedOrder->mweb_url . '&redirect_url=' . urlencode($this->returnUrl);
        }
    }

    public static function curlPost($url = '', $postData = '', $options = array()) {
        if (is_array($postData)) {
            $postData = http_build_query($postData);
        }
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30); //设置cURL允许执行的最长秒数
        if (!empty($options)) {
            curl_setopt_array($ch, $options);
        }
        //https请求 不验证证书和host
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        $data = curl_exec($ch);
        curl_close($ch);
        return $data;
    }

    public static function createNonceStr($length = 16) {
        $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $str = '';
        for ($i = 0; $i < $length; $i++) {
            $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        return $str;
    }

    public static function arrayToXml($arr) {
        $xml = "<xml>";
        foreach ($arr as $key => $val) {
            if (is_numeric($val)) {
                $xml .= "<" . $key . ">" . $val . "</" . $key . ">";
            } else
                $xml .= "<" . $key . "><![CDATA[" . $val . "]]></" . $key . ">";
        }
        $xml .= "</xml>";
        return $xml;
    }

    /**
     * 获取签名
     */
    public static function getSign($params, $key) {
        ksort($params, SORT_STRING);
        $unSignParaString = self::formatQueryParaMap($params, false);
        $signStr = strtoupper(md5($unSignParaString . "&key=" . $key));
        return $signStr;
    }

    protected static function formatQueryParaMap($paraMap, $urlEncode = false) {
        $buff = "";
        ksort($paraMap);
        foreach ($paraMap as $k => $v) {
            if (null != $v && "null" != $v) {
                if ($urlEncode) {
                    $v = urlencode($v);
                }
                $buff .= $k . "=" . $v . "&";
            }
        }
        $reqPar = '';
        if (strlen($buff) > 0) {
            $reqPar = substr($buff, 0, strlen($buff) - 1);
        }
        return $reqPar;
    }

    public function notify() {
        $config = array(
            'mch_id' => $this->mchid,
            'appid' => $this->appid,
            'key' => $this->apiKey,
        );
        $postStr = file_get_contents('php://input');
        //禁止引用外部xml实体
        libxml_disable_entity_loader(true);
        $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
        if ($postObj === false) {
            die('parse xml error');
        }
        if ($postObj->return_code != 'SUCCESS') {
            die($postObj->return_msg);
        }
        if ($postObj->result_code != 'SUCCESS') {
            die($postObj->err_code);
        }
        $arr = (array) $postObj;
        unset($arr['sign']);
        if (self::getSign($arr, $config['key']) == $postObj->sign) {
            echo '<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>';
            return $arr;
        }
    }

    public function doRefund($totalFee, $refundFee, $refundNo, $wxOrderNo = '', $orderNo = '', $pem_cert, $pem_key) {
        $config = array(
            'mch_id' => $this->mchid,
            'appid' => $this->appid,
            'key' => $this->apiKey,
        );
        $unified = array(
            'appid' => $config['appid'],
            'mch_id' => $config['mch_id'],
            'nonce_str' => self::createNonceStr(),
            'total_fee' => intval($totalFee * 100), //订单金额	 单位 转为分
            'refund_fee' => intval($refundFee * 100), //退款金额 单位 转为分
            'sign_type' => 'MD5', //签名类型 支持HMAC-SHA256和MD5，默认为MD5
            'transaction_id' => $wxOrderNo, //微信订单号
            'out_trade_no' => $orderNo, //商户订单号
            'out_refund_no' => $refundNo, //商户退款单号
            'refund_desc' => '发卡接口退款', //退款原因（选填）
        );
        $unified['sign'] = self::getSign($unified, $config['key']);
        $responseXml = $this->curlPostPem('https://api.mch.weixin.qq.com/secapi/pay/refund', self::arrayToXml($unified), [], $pem_cert, $pem_key);

        $unifiedOrder = simplexml_load_string($responseXml, 'SimpleXMLElement', LIBXML_NOCDATA);
        return $unifiedOrder;
    }

    public function curlPostPem($url = '', $postData = '', $options = array(), $pem_cert, $pem_key) {
        if (is_array($postData)) {
            $postData = http_build_query($postData);
        }
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30); //设置cURL允许执行的最长秒数
        if (!empty($options)) {
            curl_setopt_array($ch, $options);
        }
        //https请求 不验证证书和host
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

        //第一种方法，cert 与 key 分别属于两个.pem文件
        curl_setopt($ch, CURLOPT_SSLCERTTYPE, 'PEM');
        curl_setopt($ch, CURLOPT_SSLCERT, $pem_cert);
        curl_setopt($ch, CURLOPT_SSLKEYTYPE, 'PEM');
        curl_setopt($ch, CURLOPT_SSLKEY, $pem_key);
        $data = curl_exec($ch);
        curl_close($ch);
        return $data;
    }

}

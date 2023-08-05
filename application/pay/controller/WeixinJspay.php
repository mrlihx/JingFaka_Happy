<?php

namespace app\pay\controller;

use service\PayService;
use think\Config;

class WeixinJspay extends PayService {

    public function pay($trade_no, $subject, $totalAmount) {
        return $this->redirect(url("pay/WeixinJspay/jscall", ['trade_no' => $trade_no, 'total_amount' => $totalAmount, "subject" => $subject, 'sign' => md5($trade_no . $totalAmount . Config::get('cloud.cloudkey'))]));
    }

    public function jscall() {
        $trade_no = input("trade_no", "");
        $totalAmount = input("total_amount");
        $subject = input("subject", "");
        $sign = input("sign", "");
        if ($sign != md5($trade_no . $totalAmount . Config::get('cloud.cloudkey'))) {
            exit('签名不正确');
        }

        $order = $this->loadOrder($trade_no);
        $mchid = $order->channelAccount->params->mchid;          //微信支付商户号 PartnerID 通过微信支付商户资料审核后邮件发送
        $appid = $order->channelAccount->params->appid;  //微信支付申请对应的公众号的APPID
        $appKey = $order->channelAccount->params->appKey;   //微信支付申请对应的公众号的APP Key
        $apiKey = $order->channelAccount->params->apiKey;   //https://pay.weixin.qq.com 帐户设置-安全设置-API安全-API密钥-设置API密钥


        $wxPay = new WxpayJspayService($mchid, $appid, $appKey, $apiKey);
        $openId = $wxPay->GetOpenid();
        if (!$openId) {
            exit('获取openid失败');
        }
        $outTradeNo = $trade_no;
        $payAmount = $totalAmount;
        $orderName = $subject;
        $notifyUrl = url("pay/WeixinJspay/notify");
        $returnUrl = url("pay/WeixinJspay/callback", ['out_trade_no' => $trade_no]);

        $payTime = time();      //付款时间
        $jsApiParameters = $wxPay->createJsBizPackage($openId, $payAmount, $outTradeNo, $orderName, $notifyUrl, $payTime);
        $jsApiParameters = json_encode($jsApiParameters);
        $html = <<<EOF
                  <html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>在线支付</title>
        <script type="text/javascript">
            function jsApiCall()
            {
                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest',$jsApiParameters,
                    function(res){
                        WeixinJSBridge.log(res.err_msg);
						if(res.err_msg=='get_brand_wcpay_request:ok'){
							location.href='$returnUrl';
						}else{
							alert('支付失败：'+res.err_code+res.err_desc+res.err_msg);
						}
                    }
                );
            }
            function callpay()
            {
                if (typeof WeixinJSBridge == "undefined"){
                    if( document.addEventListener ){
                        document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
                    }else if (document.attachEvent){
                        document.attachEvent('WeixinJSBridgeReady', jsApiCall);
                        document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
                    }
                }else{
                    jsApiCall();
                }
            }
            callpay();
        </script>
    </head>
    <body>
    </body>
    </html>
EOF;
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

        $mchid = $order->channelAccount->params->mchid;          //微信支付商户号 PartnerID 通过微信支付商户资料审核后邮件发送
        $appid = $order->channelAccount->params->appid;  //微信支付申请对应的公众号的APPID
        $appKey = $order->channelAccount->params->appKey;   //微信支付申请对应的公众号的APP Key
        $apiKey = $order->channelAccount->params->apiKey;   //https://pay.weixin.qq.com 帐户设置-安全设置-API安全-API密钥-设置API密钥
        $wxPay = new WxpayJspayService($mchid, $appid, $appKey, $apiKey);
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
        $mchid = $order->channelAccount->params->mchid;          //微信支付商户号 PartnerID 通过微信支付商户资料审核后邮件发送
        $appid = $order->channelAccount->params->appid;  //微信支付申请对应的公众号的APPID
        $appKey = $order->channelAccount->params->appKey;   //微信支付申请对应的公众号的APP Key
        $apiKey = $order->channelAccount->params->apiKey;   //https://pay.weixin.qq.com 帐户设置-安全设置-API安全-API密钥-设置API密钥
        $pem_cert = $order->channelAccount->params->pem_cert;
        $pem_key = $order->channelAccount->params->pem_key;
        $orderNo = '';
        $wxOrderNo = $order->transaction_id;
        $totalFee = $order->total_price;
        $refundFee = $order->total_price;
        $refundNo = 'refund_' . uniqid();
        $wxPay = new WxpayJspayService($mchid, $appid, $appKey, $apiKey);
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

class WxpayJspayService {

    protected $mchid;
    protected $appid;
    protected $appKey;
    protected $apiKey;
    public $data = null;

    public function __construct($mchid, $appid, $appKey, $key) {
        $this->mchid = $mchid; //https://pay.weixin.qq.com 产品中心-开发配置-商户号
        $this->appid = $appid; //微信支付申请对应的公众号的APPID
        $this->appKey = $appKey; //微信支付申请对应的公众号的APP Key
        $this->apiKey = $key;   //https://pay.weixin.qq.com 帐户设置-安全设置-API安全-API密钥-设置API密钥
    }

    /**
     * 通过跳转获取用户的openid，跳转流程如下：
     * 1、设置自己需要调回的url及其其他参数，跳转到微信服务器https://open.weixin.qq.com/connect/oauth2/authorize
     * 2、微信服务处理完成之后会跳转回用户redirect_uri地址，此时会带上一些参数，如：code
     * @return 用户的openid
     */
    public function GetOpenid() {
        //通过code获得openid
        if (!isset($_GET['code'])) {
            //触发微信返回code码
            $scheme = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
            $uri = $_SERVER['PHP_SELF'] . $_SERVER['QUERY_STRING'];
            if ($_SERVER['REQUEST_URI'])
                $uri = $_SERVER['REQUEST_URI'];
            $baseUrl = urlencode($scheme . $_SERVER['HTTP_HOST'] . $uri);
            $url = $this->__CreateOauthUrlForCode($baseUrl);
            Header("Location: $url");
            exit();
        } else {
            //获取code码，以获取openid
            $code = $_GET['code'];
            $openid = $this->getOpenidFromMp($code);
            return $openid;
        }
    }

    /**
     * 通过code从工作平台获取openid机器access_token
     * @param string $code 微信跳转回来带上的code
     * @return openid
     */
    public function GetOpenidFromMp($code) {
        $url = $this->__CreateOauthUrlForOpenid($code);
        $res = self::curlGet($url);
        //取出openid
        $data = json_decode($res, true);
        $this->data = $data;
        $openid = $data['openid'];
        return $openid;
    }

    /**
     * 构造获取open和access_toke的url地址
     * @param string $code，微信跳转带回的code
     * @return 请求的url
     */
    private function __CreateOauthUrlForOpenid($code) {
        $urlObj["appid"] = $this->appid;
        $urlObj["secret"] = $this->appKey;
        $urlObj["code"] = $code;
        $urlObj["grant_type"] = "authorization_code";
        $bizString = $this->ToUrlParams($urlObj);
        return "https://api.weixin.qq.com/sns/oauth2/access_token?" . $bizString;
    }

    /**
     * 构造获取code的url连接
     * @param string $redirectUrl 微信服务器回跳的url，需要url编码
     * @return 返回构造好的url
     */
    private function __CreateOauthUrlForCode($redirectUrl) {
        $urlObj["appid"] = $this->appid;
        $urlObj["redirect_uri"] = "$redirectUrl";
        $urlObj["response_type"] = "code";
        $urlObj["scope"] = "snsapi_base";
        $urlObj["state"] = "STATE" . "#wechat_redirect";
        $bizString = $this->ToUrlParams($urlObj);
        return "https://open.weixin.qq.com/connect/oauth2/authorize?" . $bizString;
    }

    /**
     * 拼接签名字符串
     * @param array $urlObj
     * @return 返回已经拼接好的字符串
     */
    private function ToUrlParams($urlObj) {
        $buff = "";
        foreach ($urlObj as $k => $v) {
            if ($k != "sign")
                $buff .= $k . "=" . $v . "&";
        }
        $buff = trim($buff, "&");
        return $buff;
    }

    /**
     * 统一下单
     * @param string $openid 调用【网页授权获取用户信息】接口获取到用户在该公众号下的Openid
     * @param float $totalFee 收款总费用 单位元
     * @param string $outTradeNo 唯一的订单号
     * @param string $orderName 订单名称
     * @param string $notifyUrl 支付结果通知url 不要有问号
     * @param string $timestamp 支付时间
     * @return string
     */
    public function createJsBizPackage($openid, $totalFee, $outTradeNo, $orderName, $notifyUrl, $timestamp) {
        $config = array(
            'mch_id' => $this->mchid,
            'appid' => $this->appid,
            'key' => $this->apiKey,
        );
        //$orderName = iconv('GBK','UTF-8',$orderName);
        $unified = array(
            'appid' => $config['appid'],
            'attach' => 'pay', //商家数据包，原样返回，如果填写中文，请注意转换为utf-8
            'body' => $orderName,
            'mch_id' => $config['mch_id'],
            'nonce_str' => self::createNonceStr(),
            'notify_url' => $notifyUrl,
            'openid' => $openid, //rade_type=JSAPI，此参数必传
            'out_trade_no' => $outTradeNo,
            'spbill_create_ip' => '127.0.0.1',
            'total_fee' => intval($totalFee * 100), //单位 转为分
            'trade_type' => 'JSAPI',
        );
        $unified['sign'] = self::getSign($unified, $config['key']);
        $responseXml = self::curlPost('https://api.mch.weixin.qq.com/pay/unifiedorder', self::arrayToXml($unified));
        //禁止引用外部xml实体
        libxml_disable_entity_loader(true);
        $unifiedOrder = simplexml_load_string($responseXml, 'SimpleXMLElement', LIBXML_NOCDATA);
        if ($unifiedOrder === false) {
            die('parse xml error');
        }
        if ($unifiedOrder->return_code != 'SUCCESS') {
            die($unifiedOrder->return_msg);
        }
        if ($unifiedOrder->result_code != 'SUCCESS') {
            die($unifiedOrder->err_code);
        }
        $arr = array(
            "appId" => $config['appid'],
            "timeStamp" => "$timestamp", //这里是字符串的时间戳，不是int，所以需加引号
            "nonceStr" => self::createNonceStr(),
            "package" => "prepay_id=" . $unifiedOrder->prepay_id,
            "signType" => 'MD5',
        );
        $arr['paySign'] = self::getSign($arr, $config['key']);
        return $arr;
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

    public static function curlGet($url = '', $options = array()) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
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

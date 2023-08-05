<?php

namespace app\pay\controller;

use service\PayService;

class AlipayScan extends PayService {

    /**
     * 扫码支付
     * @param string $trade_no 外部单号
     * @param string $subject 标题
     * @param float $totalAmount 支付金额
     */
    public function pay($trade_no, $subject, $totalAmount) {
        $order = $this->loadOrder($trade_no);

        $appid = $order->channelAccount->params->app_id;
        $privatekey = $order->channelAccount->params->merchant_private_key;
        $callbackurl = url("pay/AlipayScan/callback");
        $notifyurl = url("pay/AlipayScan/notify");

        $aliPay = new AlipayScanService();
        $aliPay->setAppid($appid);
        $aliPay->setReturnUrl($callbackurl);
        $aliPay->setNotifyUrl($notifyurl);
        $aliPay->setRsaPrivateKey($privatekey);
        $aliPay->setTotalFee($totalAmount);
        $aliPay->setOutTradeNo($trade_no);
        $aliPay->setOrderName($subject);
        $sHtml = $aliPay->doPay();
        echo $sHtml;
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
        $publickey = $order->channelAccount->params->alipay_public_key;

        $aliPay = new AlipayScanService();
        $result = $aliPay->rsaCheck($_POST, $publickey);
        if ($result == true && $_POST['trade_status'] == 'TRADE_SUCCESS') {
            $order->transaction_id = input('trade_no');
            $this->completeOrder($order);
            echo 'success';
        } else {
            echo 'error';
        }
        exit();
    }

    public function refund($order) {
        $aliPay = new AlipayScanService();
        $aliPay->setAppid($order->channelAccount->params->app_id);
        $aliPay->setRsaPrivateKey($order->channelAccount->params->merchant_private_key);
        $result = $aliPay->doRefund($order->transaction_id, "", $order->total_price);
        $result = $result['alipay_trade_refund_response'];
        if ($result['code'] && $result['code'] == '10000') {
            return ["code" => 1, "msg" => "退款成功"];
        } else {
            return ["code" => 0, "msg" => $result['msg'] . ' : ' . $result['sub_msg']];
        }
    }

}

class AlipayScanService {

    protected $appId;
    protected $returnUrl;
    protected $notifyUrl;
    protected $charset;
    //私钥值
    protected $rsaPrivateKey;
    protected $totalFee;
    protected $outTradeNo;
    protected $orderName;
    protected $tradeNo;

    public function __construct() {
        $this->charset = 'utf8';
    }

    public function setAppid($appid) {
        $this->appId = $appid;
    }

    public function setReturnUrl($returnUrl) {
        $this->returnUrl = $returnUrl;
    }

    public function setNotifyUrl($notifyUrl) {
        $this->notifyUrl = $notifyUrl;
    }

    public function setRsaPrivateKey($saPrivateKey) {
        $this->rsaPrivateKey = $saPrivateKey;
    }

    public function setTotalFee($payAmount) {
        $this->totalFee = $payAmount;
    }

    public function setOutTradeNo($outTradeNo) {
        $this->outTradeNo = $outTradeNo;
    }

    public function setOrderName($orderName) {
        $this->orderName = $orderName;
    }

    public function settradeNo($tradeNo) {
        $this->tradeNo = $tradeNo;
    }

    /**
     *  验证签名
     * */
    public function rsaCheck($params, $publickey) {
        $sign = $params['sign'];
        $signType = $params['sign_type'];
        unset($params['sign_type']);
        unset($params['sign']);
        return $this->verify($this->getSignContent($params), $sign, $signType, $publickey);
    }

    function verify($data, $sign, $signType = 'RSA', $publickey) {
        $pubKey = $publickey;
        $res = "-----BEGIN PUBLIC KEY-----\n" .
                wordwrap($pubKey, 64, "\n", true) .
                "\n-----END PUBLIC KEY-----";
        ($res) or die('支付宝RSA公钥错误。请检查公钥文件格式是否正确');

        //调用openssl内置方法验签，返回bool值
        if ("RSA2" == $signType) {
            $result = (bool) openssl_verify($data, base64_decode($sign), $res, version_compare(PHP_VERSION, '5.4.0', '<') ? SHA256 : OPENSSL_ALGO_SHA256);
        } else {
            $result = (bool) openssl_verify($data, base64_decode($sign), $res);
        }

        return $result;
    }

    /**
     * 发起订单
     * @return array
     */
    public function doPay() {
        //请求参数
        $requestConfigs = array(
            'out_trade_no' => $this->outTradeNo,
            'product_code' => 'FAST_INSTANT_TRADE_PAY',
            'total_amount' => $this->totalFee, //单位 元
            'subject' => $this->orderName, //订单标题
        );
        $commonConfigs = array(
            //公共参数
            'app_id' => $this->appId,
            'method' => 'alipay.trade.page.pay', //接口名称
            'format' => 'JSON',
            'return_url' => $this->returnUrl,
            'charset' => $this->charset,
            'sign_type' => 'RSA2',
            'timestamp' => date('Y-m-d H:i:s'),
            'version' => '1.0',
            'notify_url' => $this->notifyUrl,
            'biz_content' => json_encode($requestConfigs),
        );
        $commonConfigs["sign"] = $this->generateSign($commonConfigs, $commonConfigs['sign_type']);
        return $this->buildRequestForm($commonConfigs);
    }

    /**
     * 建立请求，以表单HTML形式构造（默认）
     * @param $para_temp 请求参数数组
     * @return 提交表单HTML文本
     */
    protected function buildRequestForm($para_temp) {

        $sHtml = "<form id='alipaysubmit' name='alipaysubmit' action='https://openapi.alipay.com/gateway.do?charset=" . $this->charset . "' method='POST'>";
        foreach ($para_temp as $key => $val) {
            if (false === $this->checkEmpty($val)) {
                $val = str_replace("'", "&apos;", $val);
                $sHtml .= "<input type='hidden' name='" . $key . "' value='" . $val . "'/>";
            }
        }
        //submit按钮控件请不要含有name属性
        $sHtml = $sHtml . "<input type='submit' value='ok' style='display:none;''></form>";
        $sHtml = $sHtml . "<script>document.forms['alipaysubmit'].submit();</script>";
        return $sHtml;
    }

    public function generateSign($params, $signType = "RSA") {
        return $this->sign($this->getSignContent($params), $signType);
    }

    protected function sign($data, $signType = "RSA") {
        $priKey = $this->rsaPrivateKey;

        $res = "-----BEGIN RSA PRIVATE KEY-----\n" .
                wordwrap($priKey, 64, "\n", true) .
                "\n-----END RSA PRIVATE KEY-----";
        ($res) or die('您使用的私钥格式错误，请检查RSA私钥配置');
        if ("RSA2" == $signType) {
            openssl_sign($data, $sign, $res, version_compare(PHP_VERSION, '5.4.0', '<') ? SHA256 : OPENSSL_ALGO_SHA256); //OPENSSL_ALGO_SHA256是php5.4.8以上版本才支持
        } else {
            openssl_sign($data, $sign, $res);
        }
        $sign = base64_encode($sign);
        return $sign;
    }

    /**
     * 校验$value是否非空
     *  if not set ,return true;
     *    if is null , return true;
     * */
    protected function checkEmpty($value) {
        if (!isset($value))
            return true;
        if ($value === null)
            return true;
        if (trim($value) === "")
            return true;

        return false;
    }

    public function getSignContent($params) {
        ksort($params);
        $stringToBeSigned = "";
        $i = 0;
        foreach ($params as $k => $v) {
            if (false === $this->checkEmpty($v) && "@" != substr($v, 0, 1)) {
                // 转换成目标字符集
                $v = $this->characet($v, $this->charset);
                if ($i == 0) {
                    $stringToBeSigned .= "$k" . "=" . "$v";
                } else {
                    $stringToBeSigned .= "&" . "$k" . "=" . "$v";
                }
                $i++;
            }
        }

        unset($k, $v);
        return $stringToBeSigned;
    }

    /**
     * 转换字符集编码
     * @param $data
     * @param $targetCharset
     * @return string
     */
    function characet($data, $targetCharset) {
        if (!empty($data)) {
            $fileType = $this->charset;
            if (strcasecmp($fileType, $targetCharset) != 0) {
                $data = mb_convert_encoding($data, $targetCharset, $fileType);
                //$data = iconv($fileType, $targetCharset.'//IGNORE', $data);
            }
        }
        return $data;
    }

    public function doRefund($tradeNo, $outTradeNo, $refundAmount) {
        //请求参数
        $requestConfigs = array(
            'trade_no' => $tradeNo,
            'out_trade_no' => $outTradeNo,
            'refund_amount' => $refundAmount,
        );
        $commonConfigs = array(
            //公共参数
            'app_id' => $this->appId,
            'method' => 'alipay.trade.refund', //接口名称
            'format' => 'JSON',
            'charset' => $this->charset,
            'sign_type' => 'RSA2',
            'timestamp' => date('Y-m-d H:i:s'),
            'version' => '1.0',
            'biz_content' => json_encode($requestConfigs),
        );
        $commonConfigs["sign"] = $this->generateSign($commonConfigs, $commonConfigs['sign_type']);
        $result = $this->curlPost('https://openapi.alipay.com/gateway.do', $commonConfigs);
        $resultArr = json_decode($result, true);
        if (empty($resultArr)) {
            $result = iconv('GBK', 'UTF-8//IGNORE', $result);
            return json_decode($result, true);
        }
        return $resultArr;
    }

    public function curlPost($url = '', $postData = '', $options = array()) {
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

}

<?php

namespace app\pay\controller;

use service\PayService;

class TtPay extends PayService {

    /**
     * 参考接口
     * @param string $trade_no 外部单号
     * @param string $subject 标题
     * @param float $totalAmount 支付金额
     */
    public function pay($trade_no, $subject, $totalAmount) {
        $order = $this->loadOrder($trade_no);
        $key = $order->channelAccount->params->key;
        $paytype = $order->channelAccount->params->paytype;

        $pay_notifyurl = url("pay/TtPay/notify");
        $pay_callbackurl = url("pay/TtPay/callback", ['out_trade_no' => $trade_no]);

        $params['app_id'] = $order->channelAccount->params->appid;
        $params['out_trade_no'] = $trade_no;
        $params['amount'] = $totalAmount;
        $params['service'] = $paytype;
        $params['return_url'] = $pay_callbackurl;
        $params['subject'] = $subject;
        $params['sign'] = $this->makeSign($params, $order->channelAccount->params->key);

        $http = new TtHttp("http://api.ttpays.cn/api/v1/create", $params);
        $http->toUrl();
        $result = $http->getResContent();

        if (!$result) {
            $this->error("调用接口失败");
        }
        $ret = json_decode($result, true);
        if ($ret['code'] == '0') {
            if (isset($ret['data']['status_code']) && $ret['data']['status_code'] == '0') {
                return $this->qrcode($ret['data']['result']);
            }
        } else {
            $this->error("支付失败");
        }
    }

    private function makeSign($data, $key) {
        unset($data['sign']);
        ksort($data);
        $data['signKey'] = $key;
        return sha1(json_encode($data));
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
        $params = input('');
        if ($params['status'] == 'FINISHED') {
            if ($params['sign'] == $this->makeSign($params, $order->channelAccount->params->key)) {
                $order->transaction_id = $params['trade_no'];
                $this->completeOrder($order);
                die('OK');
            } else {
                die('FAIL');
            }
        } else {
            die('SIGNERR');
        }
    }

}

class TtHttp {

    private $resCode;
    private $errInfo;
    private $resContent;
    private $header = array();
    private $buildData = array();

    function __construct($url, $data, $timeout = 10) {
        $this->url = $url;
        $this->data = $data;
        $this->timeout = $timeout;
    }

    public function toUrl() {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_TIMEOUT, $this->timeout);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_URL, $this->url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $this->getHeader());
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $this->getBuild());
        $res = curl_exec($ch);
        $this->resCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if ($res == NULL) {
            $this->errInfo = "call http err :" . curl_errno($ch) . " - " . curl_error($ch);
            curl_close($ch);
            return false;
        } else if ($this->resCode != "200") {
            $this->errInfo = "call http err httpcode=" . $this->resCode;
            curl_close($ch);
            return false;
        }curl_close($ch);
        $this->resContent = $res;
        return true;
    }

    public function getResContent() {
        return $this->resContent;
    }

    public function setHeader($head = 'form') {
        switch ($head) {
            case 'form':$h = 'Content-Type:application/x-www-form-urlencoded';
                break;
            case 'json':$h = 'Content-Type:application/json';
                break;
            case 'xml':$h = 'Content-Type:application/xml';
                break;
            case 'text':$h = 'Content-Type:text/plain';
                break;
            case 'html':$h = 'Content-Type:text/html';
                break;
            default:$h = 'Content-Type:application/x-www-form-urlencoded';
        }$this->header = array($h . ';charset=utf-8');
        return $this->header;
    }

    private function getHeader() {
        return $this->header ? $this->header : $this->setHeader();
    }

    public function setBuild($build = true) {
        $this->buildData = $build ? http_build_query($this->data) : $this->data;
        return $this->buildData;
    }

    private function getBuild() {
        return $this->buildData ? $this->buildData : $this->setBuild();
    }

    public function getResCode() {
        return $this->resCode;
    }

    public function getErrInfo() {
        return $this->errInfo;
    }

}

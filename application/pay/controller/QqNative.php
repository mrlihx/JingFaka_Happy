<?php

namespace app\pay\controller;

use service\PayService;
use think\Request;

class QqNative extends PayService {

    /**
     * 扫码支付
     * @param string $trade_no 外部单号
     * @param string $subject 标题
     * @param float $totalAmount 支付金额
     */
    public function pay($trade_no, $subject, $totalAmount) {
        $order = $this->loadOrder($trade_no);

        $params = array();
        $params["mch_id"] = $order->channelAccount->params->mch_id;
        $params["nonce_str"] = QpayMchUtilNative::createNoncestr();
        $params["body"] = $subject;
        $params["out_trade_no"] = $trade_no;
        $params["fee_type"] = "CNY";
        $params["total_fee"] = $totalAmount * 100;
        $params["spbill_create_ip"] = Request::instance()->ip();
        $params["trade_type"] = "NATIVE";
        $params["notify_url"] = url("pay/QqNative/notify");
        $params["sign"] = QpayMchUtilNative::getSign($params, $order->channelAccount->params->key);
        $xml = QpayMchUtilNative::arrayToXml($params);
        $ret = QpayMchUtilNative::reqByCurlNormalPost($xml, 'https://qpay.qq.com/cgi-bin/pay/qpay_unified_order.cgi', 10);
        $result = QpayMchUtilNative::xmlToArray($ret);
        if ($result['return_code'] == 'SUCCESS') {
            if ($result['result_code'] == 'SUCCESS') {
                return $this->qrcode($result['code_url']);
            } else {
                $this->error($result['err_code_des']);
            }
        } else {
            $this->error("通信失败");
        }
    }

    /**
     * 服务器回调
     */
    public function notify() {
        $params = QpayMchUtilNative::xmlToArray(file_get_contents('php://input'));
        $trade_no = isset($params['out_trade_no']) ? $params['out_trade_no'] : '';
        $order = $this->loadOrder($trade_no);
        $sign1 = $params['sign'];
        unset($params['sign']);
        $sign2 = QpayMchUtilNative::getSign($params, $order->channelAccount->params->key);
        if ($sign1 == $sign2 && $params['trade_state'] == "SUCCESS") {
            $order->transaction_id = $params['transaction_id'];
            $this->completeOrder($order);
            echo '<xml><return_code>SUCCESS</return_code></xml>';
            exit();
        } else {
            exit('验签失败');
        }
    }

    public function refund($order) {
        $params = array();
        $params["mch_id"] = $order->channelAccount->params->mch_id;
        $params["nonce_str"] = QpayMchUtilNative::createNoncestr();
        $params["transaction_id"] = $order->transaction_id;
        $params["out_refund_no"] = "R" . $order->trade_no;
        $params["refund_fee"] = strval($order->total_price * 100);
        $params["op_user_id"] = $order->channelAccount->params->op_userid;
        $params["op_user_passwd"] = md5($order->channelAccount->params->op_userpwd);
        $params["sign"] = QpayMchUtilNative::getSign($params, $order->channelAccount->params->key);
        $xml = QpayMchUtilNative::arrayToXml($params);
        $ret = QpayMchUtilNative::reqByCurlSSLPost($xml, 'https://api.qpay.qq.com/cgi-bin/pay/qpay_refund.cgi', 10, $order->channelAccount->params->cert_path, $order->channelAccount->params->key_path);
        $result = QpayMchUtilNative::xmlToArray($ret);

        if ($result['return_code'] == 'SUCCESS' && $result['result_code'] == 'SUCCESS') {
            return ["code" => 1, "msg" => "退款成功"];
        } elseif (isset($result["err_code"])) {
            return ["code" => 0, "msg" => '[' . $result["err_code"] . ']' . $result["err_code_des"]];
        } else {
            return ["code" => 0, "msg" => '[' . $result["return_code"] . ']' . $result["return_msg"]];
        }
    }

}

class QpayMchUtilNative {

    /**
     * 生成随机串
     * @param int $length
     *
     * @return string
     */
    public static function createNoncestr($length = 32) {
        $chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        $str = "";
        for ($i = 0; $i < $length; $i++) {
            $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        return $str;
    }

    /**
     * 将参数转为hash形式
     * @param $params
     * @param $urlencode
     *
     * @return string
     */
    public static function buildQueryStr($params) {
        $arrTmp = array();
        foreach ($params as $k => $v) {
            //参数为空不参与签名
            if (isset($v) && $v != '') {
                array_push($arrTmp, "$k=$v");
            }
        }
        return implode('&', $arrTmp);
    }

    /**
     * 获取参数签名
     * @param $params
     * @param $key
     *
     * @return string
     */
    public static function getSign($params, $key) {
        //第一步：对参数按照key=value的格式，并按照参数名ASCII字典序排序
        ksort($params);
        $stringA = QpayMchUtilNative::buildQueryStr($params);
        //第二步：拼接API密钥并md5
        $stringA = $stringA . "&key=" . $key;
        $stringA = md5($stringA);
        //转成大写
        $sign = strtoupper($stringA);
        return $sign;
    }

    /**
     * 数组转换成xml字符串
     * @param $arr
     * @return string
     */
    public static function arrayToXml($arr) {
        $xml = "<xml>";
        foreach ($arr as $key => $val) {
            if (is_numeric($val)) {
                $xml .= "<$key>$val</$key>";
            } else
                $xml .= "<$key><![CDATA[$val]]></$key>";
        }
        $xml .= "</xml>";
        return $xml;
    }

    /**
     * xml转换成数组
     * @param $xml
     * @return array|mixed|object
     */
    public static function xmlToArray($xml) {
        $arr = json_decode(json_encode(simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA)), true);
        return $arr;
    }

    /**
     * 通用curl 请求接口。post方式
     * @param     $params
     * @param     $url
     * @param int $timeout
     *
     * @return bool|mixed
     */
    public static function reqByCurlNormalPost($params, $url, $timeout = 10) {
        return QpayMchUtilNative::_reqByCurl($params, $url, $timeout, false);
    }

    /**
     * 使用ssl证书请求接口。post方式
     * @param     $params
     * @param     $url
     * @param int $timeout
     *
     * @return bool|mixed
     */
    public static function reqByCurlSSLPost($params, $url, $timeout = 10, $cert_path = "", $key_path = "") {
        return QpayMchUtilNative::_reqByCurl($params, $url, $timeout, true, $cert_path, $key_path);
    }

    private static function _reqByCurl($params, $url, $timeout = 10, $needSSL = false, $cert_path = "", $key_path = "") {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

        curl_setopt($ch, CURLOPT_HEADER, FALSE);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        //是否使用ssl证书
        if (isset($needSSL) && $needSSL != false) {
            curl_setopt($ch, CURLOPT_SSLCERTTYPE, 'PEM');
            curl_setopt($ch, CURLOPT_SSLCERT, $cert_path);
            curl_setopt($ch, CURLOPT_SSLKEYTYPE, 'PEM');
            curl_setopt($ch, CURLOPT_SSLKEY, $key_path);
        }
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
        $ret = curl_exec($ch);
        if ($ret) {
            curl_close($ch);
            return $ret;
        } else {
            $error = curl_errno($ch);
            print_r($error);
            curl_close($ch);
            return false;
        }
    }

}

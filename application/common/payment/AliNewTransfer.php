<?php

namespace app\common\payment;

use think\Request;

class AliNewTransfer extends DaifuBase {

//INSERT INTO `cash_channel` ( `title`, `code`, `account_fields`, `type`, `status`) VALUES ( '新支付宝转账', 'AliNewTransfer', 'appId:appId|私钥:rsaPrivateKey|应用证书SN:appCertSn', '1', '1');

    public function pay($cash) {

        $appid = $this->account->params->appId;
        $outTradeNo = $cash->orderid;     //商户转账唯一订单号
        $payAmount = $cash->actual_money;          //转账金额，单位：元 （金额必须大于等于0.1元)
        $alipayRootCertSn = '687b59193f3f462dd5336e5abf83c5d8_02941eef3187dddf3d3b83462e1dfcf6'; //固定值，不要修改
        $appCertSn = $this->account->params->appCertSn; //生成应用证书sn
        $remark = '自动提现';    //转帐备注
        $signType = 'RSA2';       //签名算法类型，支持RSA2和RSA，推荐使用RSA2
        $saPrivateKey = $this->account->params->rsaPrivateKey;
        $account = $cash->bank_card;      //收款方账户（支付宝登录号，支持邮箱和手机号格式。）
        $realName = $cash->realname;     //收款方真实姓名
        /* 配置结束 */
        $aliPay = new AlipayNewTransferService($appid, $saPrivateKey);
        $aliPay->setAlipayRootCertSn($alipayRootCertSn);
        $aliPay->setAppCertSn($appCertSn);
        $result = $aliPay->doTransfer($payAmount, $outTradeNo, $account, $realName, $remark);
        $result = $result['alipay_fund_trans_uni_transfer_response'];
        if ($result['code'] && $result['code'] == '10000') {
            return true;
        } else {
            return ['msg' => $result['msg'] . ' : ' . $result['sub_msg']];
        }
    }

}

class AlipayNewTransferService {

    protected $appId;
    //私钥值
    protected $rsaPrivateKey;
    //支付宝根证书SN
    protected $alipayRootCertSn = '';
    //应用证书SN
    protected $appCertSn = '';

    public function __construct($appid, $saPrivateKey) {
        $this->appId = $appid;
        $this->charset = 'utf-8';
        $this->rsaPrivateKey = $saPrivateKey;
    }

    public function setAlipayRootCertSn($alipayRootCertSn) {
        $this->alipayRootCertSn = $alipayRootCertSn;
    }

    public function setAppCertSn($appCertSn) {
        $this->appCertSn = $appCertSn;
    }

    /**
     * 转帐
     * @param float $totalFee 转账金额，单位：元。
     * @param string $outTradeNo 商户转账唯一订单号
     * @param string $remark 转帐备注
     * @return array
     */
    public function doTransfer($totalFee, $outTradeNo, $account, $realName, $remark = '') {
        //请求参数
        $requestConfigs = array(
            'out_biz_no' => $outTradeNo,
            'payee_type' => 'ALIPAY_LOGONID',
            'trans_amount' => $totalFee, //转账金额，单位：元。
            'product_code' => 'TRANS_ACCOUNT_NO_PWD',
            'biz_scene' => 'DIRECT_TRANSFER',
            'order_title' => '自动提现',
            'payee_info' => array(
                'identity' => $account, //收款方支付宝账号
                'identity_type' => 'ALIPAY_LOGON_ID',
                'name' => $realName, //收款方真实姓名
            ),
            'remark' => $remark, //转账备注（选填）
        );
        $commonConfigs = array(
            //公共参数
            'alipay_root_cert_sn' => $this->alipayRootCertSn,
            'app_cert_sn' => $this->appCertSn,
            'app_id' => $this->appId,
            'method' => 'alipay.fund.trans.uni.transfer', //接口名称
            'format' => 'JSON',
            'charset' => $this->charset,
            'sign_type' => 'RSA2',
            'timestamp' => date('Y-m-d H:i:s'),
            'version' => '1.0',
            'biz_content' => json_encode($requestConfigs),
        );
        $commonConfigs["sign"] = $this->generateSign($commonConfigs, $commonConfigs['sign_type']);
        $result = $this->curlPost('https://openapi.alipay.com/gateway.do?charset=' . $this->charset, $commonConfigs);
        return json_decode($result, true);
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

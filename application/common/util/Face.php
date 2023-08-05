<?php

namespace app\common\util;

use think\Db;
use think\Request;
use think\Loader;

class Face {

    private $appId;
    private $rsaPrivateKey;
    private $alipayrsaPublicKey;

    public function __construct($appId, $rsaPrivateKey, $alipayrsaPublicKey) {
        $this->appId = $appId;
        $this->rsaPrivateKey = $rsaPrivateKey;
        $this->alipayrsaPublicKey = $alipayrsaPublicKey;

        Loader::import('aop.AopClient', EXTEND_PATH);
        Loader::import('aop.AopCertification', EXTEND_PATH);
        Loader::import('aop.request.AlipayUserCertifyOpenInitializeRequest', EXTEND_PATH);
        Loader::import('aop.request.AlipayUserCertifyOpenCertifyRequest', EXTEND_PATH);
        Loader::import('aop.request.AlipayUserCertifyOpenQueryRequest', EXTEND_PATH);
    }

    public function face_initialize($cert_name, $cert_no) {
        $aop = new \AopClient();
        $aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
        $aop->appId = $this->appId;
        $aop->rsaPrivateKey = $this->rsaPrivateKey;
        $aop->alipayrsaPublicKey = $this->alipayrsaPublicKey;
        $aop->apiVersion = '1.0';
        $aop->signType = 'RSA2';
        $aop->postCharset = 'UTF-8';
        $aop->format = 'json';
        $request = new \AlipayUserCertifyOpenInitializeRequest();
        $newsigndata = array();
        $newsigndata['outer_order_no'] = md5(time());
        $newsigndata['biz_code'] = "FACE";
        $newsigndata['identity_param']['identity_type'] = "CERT_INFO";
        $newsigndata['identity_param']['cert_type'] = "IDENTITY_CARD";
        $newsigndata['identity_param']['cert_name'] = $cert_name;
        $newsigndata['identity_param']['cert_no'] = $cert_no;
        $newsigndata['merchant_config']['return_url'] = url("index/plugin/resultFaceCertify");
        $tosign = json_encode($newsigndata);
        $request->setBizContent($tosign);

        $result = $aop->execute($request);

        $responseNode = str_replace(".", "_", $request->getApiMethodName()) . "_response";
        $resultCode = $result->$responseNode->code;
        if (!empty($resultCode) && $resultCode == 10000) {
            $certify_id = $result->$responseNode->certify_id;
            return $certify_id;
        } else {
            echo "失败";
        }
    }

    public function openCertify($certify_id) {
        $aop = new \AopClient();
        $aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
        $aop->appId = $this->appId;
        $aop->rsaPrivateKey = $this->rsaPrivateKey;
        $aop->alipayrsaPublicKey = $this->alipayrsaPublicKey;
        $aop->apiVersion = '1.0';
        $aop->signType = 'RSA2';
        $aop->postCharset = 'UTF-8';
        $aop->format = 'json';
        $request = new \AlipayUserCertifyOpenCertifyRequest();
        $params = [
            'certify_id' => $certify_id
        ];
        $request->setBizContent(json_encode($params));
        $result = $aop->pageExecute($request);

        echo $result;
    }

    public function queryCertify($certify_id) {
        $aop = new \AopClient();
        $aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
        $aop->appId = $this->appId;
        $aop->rsaPrivateKey = $this->rsaPrivateKey;
        $aop->alipayrsaPublicKey = $this->alipayrsaPublicKey;
        $aop->apiVersion = '1.0';
        $aop->signType = 'RSA2';
        $aop->postCharset = 'UTF-8';
        $aop->format = 'json';
        $request = new \AlipayUserCertifyOpenQueryRequest ();


        $params = [
            'certify_id' => $certify_id
        ];
        $request->setBizContent(json_encode($params));
        $result = $aop->execute($request);

        $responseNode = str_replace(".", "_", $request->getApiMethodName()) . "_response";
        $resultCode = $result->$responseNode->code;
        if (!empty($resultCode) && $resultCode == 10000) {
            if ($result->$responseNode->passed == "T") {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

}

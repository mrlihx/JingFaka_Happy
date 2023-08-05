<?php

namespace app\common\util\rsa;

include_once('KeyFormat.php');

/*
  陈服建(fochen,j@ubingo.cn)
  2015-01-23
 */

class KeyWorker {

    private $key;
    private $isPrivate;
    private $keyFormat;
    private $keyProvider;

    function __construct($key, $keyFormat = KeyFormat::PEM) {
        $this->KeyWorker($key, $keyFormat);
    }

    public function KeyWorker($key, $keyFormat = KeyFormat::PEM) {
        $this->key = $key;
        $this->keyFormat = $keyFormat;
    }

    /**
     * Rsa加密
     * @param string $data 原数据
     * @return null|string 加密结果
     */
    public function encrypt($data) {
        $this->_makesure_provider();

        if ($this->isPrivate) {
            $r = openssl_private_encrypt($data, $encrypted, $this->keyProvider, OPENSSL_PKCS1_PADDING);
        } else {
            $r = openssl_public_encrypt($data, $encrypted, $this->keyProvider, OPENSSL_PKCS1_PADDING);
        }

        return $r ? $data = base64_encode($encrypted) : null;
    }

    /**
     * Rsa解密
     * @param string $data 需解密的数据
     * @return null|string 解密结果
     */
    public function decrypt($data) {
        $this->_makesure_provider();
        $data = base64_decode($data);
        if ($this->isPrivate) {
            $r = openssl_private_decrypt($data, $decrypted, $this->keyProvider, OPENSSL_PKCS1_PADDING);
        } else {
            $r = openssl_public_decrypt($data, $decrypted, $this->keyProvider, OPENSSL_PKCS1_PADDING);
        }

        return $r ? $decrypted : null;
    }

    /**
     * 加签
     * @param string $rawData 原数据
     * @return string 加签结果
     */
    public function sign($rawData) {
        $this->_makesure_provider();
        $result = '';

        openssl_sign($rawData, $result, $this->keyProvider);

        return base64_encode($result);
    }

    /**
     * 验证签名
     * @param string $data 原数据
     * @param string $sign 签名结果
     * @return bool 结果
     */
    public function verify($data, $sign) {
        $this->_makesure_provider();
        $ret = false;

        $sign = base64_decode($sign);
        if ($sign !== false) {
            switch (openssl_verify($data, $sign, $this->keyProvider)) {
                case 1:
                    $ret = true;
                    break;
                case 0:
                case -1:
                default:
                    $ret = false;
            }
        }
        return $ret;
    }

    private function _makesure_provider() {
        if ($this->keyProvider == null) {
            $this->isPrivate = strlen($this->key) > 500;

            switch ($this->keyFormat) {
                case KeyFormat::ASN: {

                        $this->key = chunk_split($this->key, 64, "\r\n"); //转换为pem格式的公钥
                        if ($this->isPrivate) {
                            $this->key = "-----BEGIN PRIVATE KEY-----\r\n" . $this->key . "-----END PRIVATE KEY-----";
                        } else {
                            $this->key = "-----BEGIN PUBLIC KEY-----\r\n" . $this->key . "-----END PUBLIC KEY-----";
                        }

                        break;
                    }
            }

            $this->keyProvider = $this->isPrivate ? openssl_pkey_get_private($this->key) : openssl_pkey_get_public($this->key);
        }
    }

}

?>
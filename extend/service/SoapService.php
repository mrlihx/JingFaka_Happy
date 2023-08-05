<?php

namespace service;

use think\Log;

/**
 * Soap服务对象
 * Class SoapService
 * @package service
 */
class SoapService
{

    /**
     * SOAP实例对象
     * @var \SoapClient
     */
    protected $soap;

    /**
     * 错误消息
     * @var string
     */
    protected $error;

    /**
     * SoapService constructor.
     * @param string|null $wsdl WSDL连接参数
     * @param array $params Params连接参数
     * @throws \Exception
     */
    public function __construct($wsdl, $params)
    {
        set_time_limit(3600);
        if (!extension_loaded('soap')) {
            throw new \Exception('Not support soap.');
        }
        $this->soap = new \SoapClient($wsdl, $params);
    }

    /**
     * 属性获取转换
     * @param $name
     * @return string
     */
    public function __get($name)
    {
        switch (strtolower($name)) {
            case 'errmsg':
                return $this->getError();
            case 'errcode':
                return $this->getErrorCode();
            case 'appid':
                return $this->getAppid();
        }
        return '';
    }

    /**
     * @param string $name SOAP调用方法名
     * @param array|string $arguments SOAP调用参数
     * @return array|string|bool
     * @throws \Exception
     */
    public function __call($name, $arguments)
    {
        try {
            return $this->soap->__call($name, $arguments);
        } catch (\Exception $e) {
            Log::error("Soap Error. Call {$name} Method --- " . $e->getMessage());
        }
        return false;
    }

}
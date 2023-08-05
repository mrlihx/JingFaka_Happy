<?php
/**
 * 短信宝
 * @website http://www.smsbao.com/
 * @author Veris
 */

namespace app\common\util\sms;

class Smsbao
{
    // 返回状态
    protected $statusStr = array(
        "0"  => "短信发送成功",
        "-1" => "参数不全",
        "-2" => "服务器空间不支持,请确认支持curl或者fsocket，联系您的空间商解决或者更换空间！",
        "30" => "密码错误",
        "40" => "账号不存在",
        "41" => "余额不足",
        "42" => "帐户已过期",
        "43" => "IP地址限制",
        "50" => "内容含有敏感词"
	);

    public $sms_gateway = 'http://api.smsbao.com/'; //短信网关
    public $Code        = '';
    public $Message     = '';
    public $user        = '';
    public $pass        = '';

    /**
     * 初始化
     * @param  string $user    短信平台账号
     * @param  string $pass    短信平台密码
     */
    public function __construct($user,$pass)
    {
        $this->user    =$user;
        $this->pass    =md5($pass);
    }

    /**
     * 发送短信
     * @param  string $phone   手机号码
     * @param  string $content 要发送的短信内容
     * @return string          发送状态
     */
    public function sendSms($phone,$content){
        $sendurl      = $this->sms_gateway."sms?u=".$this->user."&p=".$this->pass."&m=".$phone."&c=".urlencode($content);
        $result       = file_get_contents($sendurl) ;
        $obj          = new \stdClass();
        $obj->Code    = $result;
        $obj->Message = isset($this->statusStr[$result])?$this->statusStr[$result]:'';
        return $obj;
    }
}

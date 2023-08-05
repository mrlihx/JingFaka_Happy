<?php
/**
 * 缩我短网址suo.im
 */

namespace app\common\util\dwz;

use app\common\util\DWZ;
use service\HttpService;

class Suo extends DWZ
{
    const API_URL    = 'http://api.suowo.cn/api.htm';
    protected $key;

    public function __construct()
    {
        $this->key = sysconf('suo_app_key');
    }

    public function create($url)
    {
        $res = HttpService::get(SELF::API_URL,[
            'url'        => $url,
            'format'     => 'json',
            'key'        => $this->key,
            'expireDate' => date ('Y-m-d', strtotime('+10 year')),
        ]);
        if($res === false){
            return false;
        }
        $json = json_decode($res);
        if(!$json){
            return false;
        }
        if($json->err != '') {
            return false;
        }
        return $json->url;
    }
}

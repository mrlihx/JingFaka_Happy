<?php
/**
 * 百度短网址
 * @author Veris
 */

namespace app\common\util\dwz;

use app\common\util\DWZ;
use service\HttpService;

class Baidu extends DWZ
{
    const API_URL = 'http://dwz.cn/create.php';

    public function create($url)
    {
        $res=HttpService::post(SELF::API_URL,[
            'url'         =>$url,
            'alias'       =>'',
            'access_type' =>'web'
        ]);
        $json=json_decode($res);
        if(!$json || $json->status==-1){
            return false;
        }
        return $json->tinyurl;
    }
}

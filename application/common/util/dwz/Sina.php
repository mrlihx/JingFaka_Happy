<?php
/**
 * @奈何 52o.ink 短连接
 * 问题联系 QQ：69322826
 */

namespace app\common\util\dwz;

use app\common\util\DWZ;
use service\HttpService;

class Sina extends DWZ
{
    const API_URL    = 'https://52o.ink/index/api';
    const APP_KEY    = 'link';

    public function create($url)
    {
        $res=HttpService::post(SELF::API_URL,[
            'link' =>$url,
        ]);
        if($res===false){
            return false;
        }
        
       
        $json=json_decode($res);
        if(!$json){
            return false;
        }
        return $json->link;
    }
}

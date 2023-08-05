<?php
namespace app\common\model;

use think\Model;

class UserCollect extends Model
{
    public function user()
    {
        return $this->belongsTo('User','user_id');
    }

    public function getInfoAttr($value)
    {
        return json_decode($value,true);
    }

    public function setInfoAttr($value)
    {
        return json_encode($value,JSON_UNESCAPED_UNICODE);
    }
}

<?php

namespace app\common\model;

use think\Model;

class InviteCode extends Model
{
    public function user()
    {
        return $this->belongsTo('User','user_id','id');
    }

    // 总数
    public function getCountAttr($value,$data){
        return $this->where(['user_id'=>$data['user_id']])->count();
    }

    // 激活总数
    public function getInviteCountAttr($value,$data){
        return $this->where(['user_id'=>$data['user_id'],'status'=>1])->count();
    }

    // 获取状态
    public function getStatusAttr($value,$data){
        if($data['status']==1){
            return 1;
        }else{
            if($data['expire_at']!=0 && $_SERVER['REQUEST_TIME']>=$data['expire_at']){
                return 2;
            }else{
                return 0;
            }
        }
    }

    // 获取到期天数
    public function getExpireDaysAttr($value,$data){
        $day=floor(($data['expire_at']-$_SERVER['REQUEST_TIME'])/86400);
        return $day;
    }

    // 获取到期时间
    public function getExpireDayAttr($value,$data){
        if($data['expire_at']==0){
            $day='永不过期';
        }else{
            $day=date('Y-m-d H:i:s',$data['expire_at']);
        }
        return $day;
    }

    // 获取到期状态
    public function getIsExpireAttr($value,$data){
        if($data['expire_at']!=0 && $data['create_at']>=$data['expire_at']){
            return 1;
        }else{
            return 0;
        }
    }
}

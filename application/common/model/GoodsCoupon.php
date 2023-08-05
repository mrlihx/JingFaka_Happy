<?php
namespace app\common\model;

use think\Model;
use traits\model\SoftDelete;

class GoodsCoupon extends Model
{
    use SoftDelete;
    protected $deleteTime = 'delete_at';

    public function category()
    {
        return $this->belongsTo('GoodsCategory','cate_id');
    }

    // 获取状态
    protected function getStatusTextAttr($value,$data)
    {
        if($data['status']==1 && $data['expire_at']<=$_SERVER['REQUEST_TIME']){
            return '已过期';
        }
        $status=[
            1 => '未使用',
            2 => '已使用',
        ];
        return $status[$data['status']];
    }

    // 获取有效期
    protected function getExpireDayAttr($value,$data)
    {
        if($data['status']==1){
            if($data['expire_at']<=$_SERVER['REQUEST_TIME']){
                return '已过期';
            }else{
                $time_left=floor(($data['expire_at']-$_SERVER['REQUEST_TIME'])/86400);
                if($time_left>=1){
                    return $time_left.'天后';
                }else{
                    $time=floor(($data['expire_at']-$_SERVER['REQUEST_TIME'])/3600);
                    return $time.'小时后';
                }
            }
        }
        if($data['status']==2){
            return '已使用';
        }

    }
}

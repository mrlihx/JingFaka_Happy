<?php
/**
 * Created by PhpStorm.
 * User: jarentang
 * Date: 2018/6/19
 * Time: 5:18 PM
 */
namespace app\common\model;

use think\Model;
use traits\model\SoftDelete;

class RateGroup extends Model {

    use SoftDelete;
    protected $deleteTime = 'delete_at';

    //费率规则
    public function rateRules()
    {
        return $this->hasMany('RateGroupRule','group_id','id');
    }

}
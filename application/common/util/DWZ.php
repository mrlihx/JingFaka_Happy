<?php
/**
 * 短网址生成
 */
namespace app\common\util;

use think\Db;
use think\Request;

class DWZ
{
    /**
    * @var array 实例
    */
    public static $instance = [];

    public static function load($product)
    {
        $class = '\\app\\common\\util\\dwz\\' . $product;
        if(!isset(SELF::$instance[$product])){
            // 实例化
            SELF::$instance[$product] = new $class();
        }
        return SELF::$instance[$product];
    }
}

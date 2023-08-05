<?php

namespace app\wechat\controller;

use controller\BasicAdmin;
use service\LogService;

/**
 * 微信配置管理
 * Class Config
 * @package app\wechat\controller
 * @author ITLANJING <itlanjing@qq.com>
 */
class Config extends BasicAdmin {

    /**
     * 定义当前操作表名
     * @var string
     */
    public $table = 'SystemConfig';

    /**
     * 微信基础参数配置
     * @return \think\response\View
     */
    public function index() {
        if ($this->request->isGet()) {
            return view('', ['title' => '微信接口配置']);
        }
        foreach ($this->request->post() as $key => $vo) {
            sysconf($key, $vo);
        }
        LogService::write('微信管理', '修改微信接口参数成功');
        $this->success('数据修改成功！', '');
    }

}

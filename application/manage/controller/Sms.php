<?php

namespace app\manage\controller;

use controller\BasicAdmin;
use service\LogService;

/**
 * 短信配置控制器
 * Class Config
 * @package app\admin\controller

 * @date 2017/02/15 18:05
 */
class Sms extends BasicAdmin {

    /**
     * 当前默认数据模型
     * @var string
     */
    public $table = 'SystemConfig';

    /**
     * 当前页面标题
     * @var string
     */
    public $title = '短信配置';

    /**
     * 显示系统常规配置
     */
    public function index() {
        if (!$this->request->isPost()) {
            $this->assign('title', $this->title);
            return view();
        }
        foreach ($this->request->post() as $key => $vo) {
            sysconf($key, $vo);
        }
        LogService::write('系统管理', '修改短信配置参数成功');
        $this->success('数据修改成功！', '');
    }
}

<?php

namespace app\manage\controller;

use controller\BasicAdmin;
use service\LogService;

/**
 * 邮箱配置控制器
 * Class Config
 * @package app\admin\controller

 * @date 2017/02/15 18:05
 */
class Email extends BasicAdmin {

    /**
     * 当前默认数据模型
     * @var string
     */
    public $table = 'SystemConfig';

    /**
     * 当前页面标题
     * @var string
     */
    public $title = '邮箱配置';

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
        LogService::write('系统管理', '修改邮箱配置参数成功');
        $this->success('数据修改成功！', '');
    }

    public function test(){
        $address=input('address/s','');
        if(!preg_match('/(\w)+(\.\w+)*@(\w)+((\.\w+)+)/',$address)){
            $this->error('请输入正确的邮箱号！');
        }
        $res=sendMail($address,'邮箱测试','这是一份来自【'.sysconf('site_name').'】的邮箱测试！');
        if($res){
            $this->success('发送成功！','');
        }else{
            $this->error('发送失败');
        }
    }
}

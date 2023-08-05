<?php
/**
 * 站点信息
 */

namespace app\manage\controller;

use controller\BasicAdmin;
use think\Db;
use think\Request;
use service\LogService;

class Site extends BasicAdmin
{
    /**
     * 站点详情
     */
    public function info() {
        if (!$this->request->isPost()) {
            $this->assign('title', '站点信息配置');
            return view();
        }
        foreach ($this->request->post() as $key => $vo) {
            sysconf($key, $vo);
        }
        LogService::write('系统管理', '修改网站配置成功');
        $this->success('数据修改成功！', '');
    }

    /**
     * 域名设置
     */
    public function domain()
    {
        if (!$this->request->isPost()) {
            $this->assign('title', '域名设置');
            return view();
        }
        foreach ($this->request->post() as $key => $vo) {
            sysconf($key, $vo);
        }
        LogService::write('系统管理', '修改域名设置成功');
        $this->success('数据修改成功！', '');
    }

    /**
     * 注册设置
     */
    public function register()
    {
        if (!$this->request->isPost()) {
            $this->assign('title', '注册设置');
            return view();
        }
        foreach ($this->request->post() as $key => $vo) {
            sysconf($key, $vo);
        }
        LogService::write('系统管理', '修改注册设置成功');
        $this->success('数据修改成功！', '');
    }

    /**
     * 字词过滤
     */
    public function wordfilter()
    {
        if (!$this->request->isPost()) {
            $this->assign('title', '字词过滤');
            return view();
        }
        foreach ($this->request->post() as $key => $vo) {
            sysconf($key, $vo);
        }
        LogService::write('系统管理', '修改字词过滤设置成功');
        $this->success('数据修改成功！', '');
    }

    /*
     * 推广设置
     */
    public function spread()
    {
        if (!$this->request->isPost()) {
            $this->assign('title', '推广设置');
            return view();
        }
        foreach ($this->request->post() as $key => $vo) {
            sysconf($key, $vo);
        }
        LogService::write('系统管理', '修改推广设置成功');
        $this->success('数据修改成功！', '');
    }

    /**
     * 删除目录
     */
    public function clearcache()
    {
        //清楚cache和temp两个目录
        $path = [
            ROOT_PATH . 'runtime/temp',
            ROOT_PATH . 'runtime/cache'
        ];
        delFileUnderDir($path, true);
        $this->success('操作成功', '');
    }

}

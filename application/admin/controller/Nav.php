<?php

namespace app\admin\controller;

use controller\BasicAdmin;
use service\DataService;
use service\NodeService;
use service\ToolsService;
use think\Db;
use service\LogService;

/**
 * 前台导航管理
 * Class Menu
 * @package app\admin\controller
 * @author ITLANJING <itlanjing@qq.com>
 * @date 2017/02/15
 */
class Nav extends BasicAdmin
{

    /**
     * 绑定操作模型
     * @var string
     */
    public $table = 'Nav';

    /**
     * 导航列表
     */
    public function index()
    {
        $this->title = '前台导航管理';
        $db = Db::name($this->table)->order('sort asc,id asc');
        return parent::_list($db, false);
    }

    /**
     * 列表数据处理
     * @param array $data
     */
    protected function _index_data_filter(&$data)
    {
        foreach ($data as &$vo) {
            ($vo['url'] !== '#') && ($vo['url'] = url($vo['url']));
            $vo['ids'] = join(',', ToolsService::getArrSubIds($data, $vo['id']));
        }
        $data = ToolsService::arr2table($data);
    }

    /**
     * 添加导航
     */
    public function add()
    {
        return $this->_form($this->table, 'form');
    }

    /**
     * 编辑导航
     */
    public function edit()
    {
        return $this->_form($this->table, 'form');
    }

    /**
     * 表单数据前缀方法
     * @param array $vo
     */
    protected function _form_filter(&$vo)
    {
        if ($this->request->isGet()) {
            // 上级导航处理
            $_menus = Db::name($this->table)->where(['status' => '1'])->order('sort asc,id asc')->select();
            $_menus[] = ['title' => '顶级导航', 'id' => '0', 'pid' => '-1'];
            $menus = ToolsService::arr2table($_menus);
            foreach ($menus as $key => &$menu) {
                if (substr_count($menu['path'], '-') > 3) {
                    unset($menus[$key]);
                    continue;
                }
                if (isset($vo['pid'])) {
                    $current_path = "-{$vo['pid']}-{$vo['id']}";
                    if ($vo['pid'] !== '' && (stripos("{$menu['path']}-", "{$current_path}-") !== false || $menu['path'] === $current_path)) {
                        unset($menus[$key]);
                        continue;
                    }
                }
            }
            // 读取系统功能节点
            $nodes = NodeService::get();
            foreach ($nodes as $key => $node) {
                if (empty($node['is_menu'])) {
                    unset($nodes[$key]);
                }
            }
            $this->assign('nodes', array_column($nodes, 'node'));
            $this->assign('menus', $menus);
        }
    }

    /**
     * 删除导航
     */
    public function del()
    {
        if (DataService::update($this->table)) {
            $this->success("导航删除成功!", '');
        }
        LogService::write('系统配置', '删除前台导航成功');
        $this->error("导航删除失败, 请稍候再试!");
    }

    /**
     * 导航禁用
     */
    public function forbid()
    {
        if (DataService::update($this->table)) {
            $this->success("导航禁用成功!", '');
        }
        LogService::write('系统配置', '禁用前台导航成功，ID:'.$this->request->post('id'));
        $this->error("导航禁用失败, 请稍候再试!");
    }

    /**
     * 导航禁用
     */
    public function resume()
    {
        if (DataService::update($this->table)) {
            LogService::write('系统配置', '启用前台导航成功，ID:'.$this->request->post('id'));
            $this->success("导航启用成功!", '');
        }
        $this->error("导航启用失败, 请稍候再试!");
    }

}

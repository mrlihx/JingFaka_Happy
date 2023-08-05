<?php

namespace app\admin\controller;

use controller\BasicAdmin;
use service\DataService;
use service\NodeService;
use service\ToolsService;
use service\LogService;

/**
 * 系统功能节点管理
 */
class Node extends BasicAdmin
{

    /**
     * 指定当前默认模型
     * @var string
     */
    public $table = 'SystemNode';

    /**
     * 显示节点列表
     */
    public function index()
    {
        $alert = [
            'type'    => 'danger',
            'title'   => '操作安全警告（默认新节点所有人可以访问，请勾选登录控制）',
            'content' => '结构为系统自动生成，其权限各选项直接影响到不同权限用户的访问及操作，请勿随意修改数据！'
        ];
        $nodes = ToolsService::arr2table(NodeService::get(), 'node', 'pnode');
        return view('', ['title' => '系统节点管理', 'nodes' => $nodes, 'alert' => $alert]);
    }

    /**
     * 保存节点变更
     */
    public function save()
    {
        if ($this->request->isPost()) {
            list($data, $post) = [[], $this->request->post()];
            if (isset($post['list'])) {
                foreach ($post['list'] as $vo) {
                    $data['node'] = $vo['node'];
                    $data[$vo['name']] = $vo['value'];
                }
                
                !empty($data) && DataService::save($this->table, $data, 'node');
                LogService::write('系统权限', '编辑节点成功');
                $this->success('参数保存成功！', '');
            }
        } else {
            $this->error('访问异常，请重新进入...');
        }
    }

}

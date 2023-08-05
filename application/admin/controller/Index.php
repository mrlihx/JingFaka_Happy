<?php

namespace app\admin\controller;

use controller\BasicAdmin;
use service\DataService;
use service\NodeService;
use service\ToolsService;
use think\Db;
use think\View;
use app\common\model\Complaint as ComplaintModel;
use app\common\model\GoodsPool as GoodsPoolModel;
use app\common\model\Cash as CashModel;
use app\common\model\User as UserModel;
use app\common\model\PluginPoolauth as PluginPoolauthModel;
use app\common\model\PluginCrossauth as PluginCrossauthModel;
use app\common\model\ArticleCategory as ArticleCategoryModel;
use app\common\model\Article as ArticleModel;
use app\common\model\PluginCustompayAuth as PluginCustompayAuthModel;

/**
 * 后台入口
 * Class Index
 * @package app\admin\controller
 * @author ITLANJING <itlanjing@qq.com>
 * @date 2017/02/15 10:41
 */
class Index extends BasicAdmin {

    /**
     * 后台框架布局
     * @return View
     */
    public function index() {

        if (sysconf("agreement_read") == 0) {
            $this->redirect('index/agreement');
        }

        NodeService::applyAuthNode();
        $list = (array) Db::name('SystemMenu')->where(['status' => '1'])->order('sort asc,id asc')->select();
        $menus = $this->_filterMenuData(ToolsService::arr2tree($list), NodeService::get(), !!session('user'));



        $complaint_count = ComplaintModel::where(['status' => 0])->count();
        $cash_count = CashModel::where(['status' => 0])->count();
        $user_count = UserModel::where(['status' => 0])->count();
        $goodspool_count = GoodsPoolModel::where(['status' => 0])->count();
        $pluginpool_count = PluginPoolauthModel::where(['status' => 0])->count();
        $plugincross_count = PluginCrossauthModel::where(['status' => 0])->count();
        $custompay_count = PluginCustompayAuthModel::where(['status' => 0])->count();

        $category = ArticleCategoryModel::get(['alias' => 'settlement', 'status' => 1]);
        $cate_id = -1;
        if ($category) {
            $cate_id = $category->id;
        }
        $start_time = strtotime(date('Y-m-d'));
        $end_time = $start_time + 60 * 60 * 24 - 1;
        $settlement_count = ArticleModel::where(['cate_id' => $cate_id, 'status' => 1, 'create_at' => ['BETWEEN', [$start_time, $end_time]]])->count();
        $peddingtask = [
            "complaint_count" => $complaint_count,
            "cash_count" => $cash_count,
            "user_count" => $user_count,
            "goodspool_count" => $goodspool_count,
            "pluginpool_count" => $pluginpool_count,
            "plugincross_count" => $plugincross_count,
            "settlement_count" => $settlement_count,
            "custompay_count" => $custompay_count
        ];

        return view('', ['title' => '系统管理', 'menus' => $menus, 'peddingtask' => $peddingtask]);
    }

    public function agreement() {
        $read = input("read", 0);
        if ($read == 0) {
            return $this->fetch();
        } else {
            sysconf("agreement_read", 1);
            $this->redirect('@admin');
        }
    }

    /**
     * 后台主菜单权限过滤
     * @param array $menus 当前菜单列表
     * @param array $nodes 系统权限节点数据
     * @param bool $isLogin 是否已经登录
     * @return array
     */
    private function _filterMenuData($menus, $nodes, $isLogin) {
        foreach ($menus as $key => &$menu) {
            !empty($menu['sub']) && $menu['sub'] = $this->_filterMenuData($menu['sub'], $nodes, $isLogin);
            if (!empty($menu['sub'])) {
                $menu['url'] = '#';
            } elseif (preg_match('/^https?\:/i', $menu['url'])) {
                continue;
            } elseif ($menu['url'] !== '#') {
                $node = join('/', array_slice(explode('/', preg_replace('/[\W]/', '/', $menu['url'])), 0, 3));
                $menu['url'] = url($menu['url']);
                if (isset($nodes[$node]) && $nodes[$node]['is_login'] && empty($isLogin)) {
                    unset($menus[$key]);
                } elseif (isset($nodes[$node]) && $nodes[$node]['is_auth'] && $isLogin && !auth($node)) {
                    unset($menus[$key]);
                }
            } else {
                unset($menus[$key]);
            }
        }
        return $menus;
    }

    /**
     * 主机信息显示
     * @return View
     */
    public function main() {
        $_version = Db::query('select version() as ver');
        return view('', ['mysql_ver' => array_pop($_version)['ver'], 'title' => '后台首页']);
    }

    /**
     * 修改密码
     */
    public function pass() {
        if (intval($this->request->request('id')) !== intval(session('user.id'))) {
            $this->error('只能修改当前用户的密码！');
        }
        if ($this->request->isGet()) {
            $this->assign('verify', true);
            return $this->_form('SystemUser', 'user/pass');
        }
        $data = $this->request->post();
        if ($data['password'] !== $data['repassword']) {
            $this->error('两次输入的密码不一致，请重新输入！');
        }
        $user = Db::name('SystemUser')->where('id', session('user.id'))->find();
        if (md5($data['oldpassword']) !== $user['password']) {
            $this->error('旧密码验证失败，请重新输入！');
        }
        if (DataService::save('SystemUser', ['id' => session('user.id'), 'password' => md5($data['password'])])) {
            $this->success('密码修改成功，下次请使用新密码登录！', '');
        }
        $this->error('密码修改失败，请稍候再试！');
    }

    /**
     * 修改资料
     */
    public function info() {
        if (intval($this->request->request('id')) === intval(session('user.id'))) {
            return $this->_form('SystemUser', 'user/form');
        }
        $this->error('只能修改当前用户的资料！');
    }

}

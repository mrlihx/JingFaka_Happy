<?php

namespace app\merchant\controller;

use think\Controller;
use think\Request;
use think\Config;
use think\Db;
use controller\BasicWechat;
use app\common\model\User as UserModel;
use app\common\model\UserMenu as UserMenuModel;
use app\common\model\Message as MessageModel;
use app\common\model\Article as ArticleModel;
use think\Hook;
use app\common\model\PluginMerchantauth as PluginMerchantauthModel;

class Base extends BasicWechat {

    public function __construct() {
        //保证时区
        date_default_timezone_set("Asia/Shanghai");
        if (sysconf('login_auth') == 1 && session('merchant.login_auth')) {
            //处于安全登录检验状态，跳转到检验页面去
            $userId = session('merchant.user');
            $user = UserModel::get($userId);
            switch ($user->login_auth_type) {
                case '1':
                    // 短信验证
                    $authUrl = url('index/user/smsAuth');
                    break;
                case '2':
                    //邮件验证
                    $authUrl = url('index/user/emailAuth');
                    break;
                case '3':
                    //google code 验证
                    $authUrl = url('index/user/googleAuth');
                    break;
                default:
                    throw new \Exception('未知安全登录验证方式');
                    break;
            }
            $this->success('请进行二次验证...', $authUrl);
        }
        if (sysconf('wx_auto_login') && isset($_SERVER['HTTP_USER_AGENT']) && strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger')) {// 微信浏览器打开
            $user_id = session("merchant.user");
            $openid = session('openid');
            if (!$openid) {
                $this->oAuth();
            }
            if ($openid && !$user_id) {
                if (!$user_id) {
                    $wechat_fans = Db::name('wechat_fans')->where(["openid" => $openid])->find();
                    if (empty($wechat_fans)) {
                        $this->oAuth();
                    }
                    $member = UserModel::get(["openid" => $openid]);
                    if (!empty($member) && sysconf('wx_auto_login') == 1) {//自动登录
                        session('merchant.user', $member['id']);
                        session('merchant.login_key', $member['login_key']);
                        session('merchant.username', $member['username']);
                        session('merchant.login_expire', time() + 7 * 86400);
                        session('merchant.last_ip', Request::instance()->ip());
                    }
                }
            }
        }
        $request = request::instance();
        $modulePath = $request->module();


        if (session('merchant.user') != "") {
            $user_id = session('merchant.user');
            $this->user = UserModel::get($user_id);
            if (!$this->user) {
                return $this->redirect('/login');
            }
        } elseif (cookie('merchant') != "") {
            $ck = json_decode(cookie('merchant'), true);
            $user_id = $ck['id'];
            $this->user = UserModel::get($user_id);
            if (!$this->user || $ck['key'] != hash("sha256", $this->user->id . $this->user->username . $this->user->password . Request::instance()->ip())) {
                return $this->redirect('/login');
            }
            session('merchant.user', $this->user->id);
            session('merchant.login_key', $this->user->login_key);
            session('merchant.username', $this->user->username);
            session('merchant.login_expire', time() + 86400);
            session('merchant.last_ip', Request::instance()->ip());
        } else {
            return $this->redirect('/login');
        }

        if ($this->user['status'] == 0) {
            session('merchant', null);
            $this->error('账号已被禁用，请联系管理员QQ' . sysconf('site_info_qq'), '/login');
        }

        //**************************模板主题**************************
        $viewPath = Config::get('template.view_path');
        empty($viewPath) && $viewPath = \think\App::$modulePath . 'view' . DS;
        if (!$request->isMobile()) {
            Config::set('template.view_platform', 'pc');
            Config::set('template.view_theme', $this->user->pc_template);
            Config::set('dispatch_error_tmpl', 'tpl/jump');
            Config::set('dispatch_success_tmpl', 'tpl/jump');
        } else {
            Config::set('template.view_platform', 'mobile');
            Config::set('template.view_theme', $this->user->mobile_template);
            Config::set('dispatch_error_tmpl', 'tpl/jump');
            Config::set('dispatch_success_tmpl', 'tpl/jump');
        }
        Config::set('template.view_path', $viewPath);
        parent::__construct();
        if ($this->user->login_key !== session('merchant.login_key')) {
            //修改过密码，登录凭证被刷新了，重新登录
            session('merchant', null);
            $this->redirect('/login');
        }
        //校验登录是否已经过期了
        if (session('merchant.login_expire') < time() || session('merchant.last_ip') != Request::instance()->ip()) {
            //已经过期，退出登录
            session('merchant.login_expire', null);
            session('merchant.user', null);
            session('merchant.username', null);
            session('merchant', null);
            $this->redirect('/login');
        } else {
            session('merchant.login_expire', time() + 86400 * 7);
        }

        if ($this->user['shop_notice_auto_pop'] == 1) {
            $common_announce = [];
            //自动弹出系统公告
            if (sysconf('announce_push') == 1) {
                $common_announce = ArticleModel::hasWhere("category", ['ArticleCategory.alias' => 'system', 'ArticleCategory.status' => 1])->where(['Article.status' => 1])->order('Article.id desc')->find();

                if (!empty($common_announce)) {
                    $announce_log = Db::name('announce_log')->where(['user_id' => $user_id, 'article_id' => $common_announce['id']])->find();
                    if (empty($announce_log)) {
                        Db::name('announce_log')->insert(['user_id' => $user_id, 'article_id' => $common_announce['id'], 'create_at' => time()]);
                    } else {
                        $common_announce = [];
                    }
                }
            }
            $this->assign('common_announce', $common_announce);
        }

        $navmenus = UserMenuModel::getMenus($this->user->pc_template);

        $messages = MessageModel::where(['to_id' => $this->user->id, 'status' => 0])->order("id desc")->paginate(8);
        $messages_count = MessageModel::where(['to_id' => $this->user->id, 'status' => 0])->count();
        $this->assign('_navmenus', $navmenus);
        $this->assign('_messages', $messages);
        $this->assign('_messages_count', $messages_count);

        $this->assign('_user', $this->user);
        $this->assign('_controller', $this->request->controller());
        $this->assign('_action', $this->request->action());

        if (plugconf('merchantauth', 'status') == 1 && (strtolower($this->request->controller()) != "plugin" || strtolower($this->request->action() != "merchantauth"))) {
            $merchantauth = PluginMerchantauthModel::get(['user_id' => $this->user->id]);
            if (!$merchantauth) {
                if (plugconf('merchantauth', 'auth_people') == 1 || (plugconf('merchantauth', 'auth_people') == 2 && $this->user->create_at > plugconf('merchantauth', 'start_at'))) {
                    return $this->redirect(url("plugin/merchantAuth"));
                }
            }
        }
    }

    protected function setTitle($title) {
        $this->assign('_title', $title);
    }

}

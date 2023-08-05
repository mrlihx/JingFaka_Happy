<?php
namespace app\shop\controller;

use controller\BasicWechat;
use think\Controller;
use service\WechatService;
use think\Db;
use app\common\model\User as UserModel;


class Base extends BasicWechat
{
    public function _initialize()
    {
        parent::_initialize();
        if (sysconf('wx_auto_login') && isset($_SERVER['HTTP_USER_AGENT']) && strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger')) {// 微信浏览器打开
            $user_id = session("merchant.user");
            $openid = session('openid');
            if(!$openid) {
                $this->oAuth();
            }
            if($openid && !$user_id) {
                if(!$user_id) {
                    $wechat_fans = Db::name('wechat_fans')->where(["openid"=>$openid]) ->find();
                    if(empty($wechat_fans)) {
                        $this->oAuth();
                    }
                    $member=UserModel::get(["openid"=>$openid]);
                    if(!empty($member) && sysconf('wx_auto_login') == 1) {//自动登录
                        session('merchant.user',$member['id']);
                        session('merchant.username',$member['username']);
                    }
                }
            }
        }

        // 注册平台
        if($this->request->isMobile()){
            $this->view->config('view_platform', 'mobile');
        }else{
            $this->view->config('view_platform', 'pc');
        }

        // 站点关闭
        if(sysconf('site_status')==='0'){
            die(sysconf('site_close_tips'));
        }
        $nav = Db::name('nav')->where('status=1')->order('sort DESC')->select();
        $this->assign('nav', $nav);
    }
}

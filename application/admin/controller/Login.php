<?php

namespace app\admin\controller;

use controller\BasicAdmin;
use service\LogService;
use service\NodeService;
use think\Db;
use service\DataService;
use think\Request;
use app\common\util\Sms;
use app\common\util\Email;
use think\Config;
use Ip\IpLocation;
use think\captcha\Captcha;

/**
 * 系统登录控制器
 * class Login
 * @package app\admin\controller
 */
class Login extends BasicAdmin {

    /**
     * 控制器基础方法
     */
    public function _initialize() {
        if (session('user') && $this->request->action() == 'index') {
            $this->redirect('@admin');
        }
    }

    /**
     * 用户登录
     * @return string
     */
    public function index() {
        if ($this->request->isGet()) {
            return $this->fetch('', ['title' => '用户登录']);
        }
        // 输入数据效验
        $username = $this->request->post('username', '', 'trim');
        $password = $this->request->post('password', '', 'trim');
        $code = $this->request->post('code', '', 'trim');
        strlen($username) < 4 && $this->error('登录账号长度不能少于4位有效字符!');
        strlen($password) < 4 && $this->error('登录密码长度不能少于4位有效字符!');
        if ($code == '') {
            $this->error('请输入验证码!');
        }
        $captcha = new Captcha();
        if (!$captcha->check($code)) {
            $this->error('验证码错误!');
        }
        // 用户信息验证
        $user = Db::name('SystemUser')->where(['username' => $username, 'is_deleted' => 0])->find();
        empty($user) && $this->error('登录账号不存在，请重新输入!');
        //删除今天零时以前的错误密码登录记录
        $start_time = strtotime(date('Y-m-d'));
        $end_time = $start_time + 60 * 60 * 24 - 1;
        Db::name('user_login_error_log')->where('login_time<' . $start_time)->delete();
        $error_count = Db::name('user_login_error_log')->where(['login_name' => $username, 'user_type' => 1, 'login_time' => ['BETWEEN', [$start_time, $end_time]]])->count();
        if ($error_count >= sysconf('wrong_password_times')) {
            $last_time = Db::name('user_login_error_log')->where(['login_name' => $username, 'user_type' => 1])->order('id DESC')->limit(1)->value('login_time');
            if ($last_time > 0) {
                $time = $last_time + 24 * 60 * 60 - time();
                $time_str = sec2Time($time);
                $this->error('输入错误密码超限，账户已被锁定，将于' . $time_str . '后自动解锁!');
            }
        }
        if ($user['password'] !== md5($password)) {
            $plog['login_name'] = $username;
            $plog['password'] = $password;
            $plog['user_type'] = 1;
            $plog['login_from'] = 1;
            $plog['login_time'] = time();
            Db::name('user_login_error_log')->insert($plog);
            $error_count++;
            if ($error_count >= sysconf('wrong_password_times')) {
                $this->error('登录密码与账号不匹配，您的账号已被锁定，将于24小时后自动解锁!');
            } else {
                $this->error('登录密码与账号不匹配，请重新输入，您还有' . (sysconf('wrong_password_times') - $error_count) . '次机会!');
            }
        }
        empty($user['status']) && $this->error('账号已经被禁用，请联系管理!');
        // 更新登录信息
        $data = ['login_at' => Db::raw('now()'), 'login_num' => Db::raw('login_num+1')];
        Db::name('SystemUser')->where(['id' => $user['id']])->update($data);
        session('user', $user);
        session('user_last_ck', login_ck());
        //记住登录1天  
        session('user_expire_time', time() + 86400);
        !empty($user['authorize']) && NodeService::applyAuthNode();
        LogService::write('系统管理', '用户登录系统成功');

        //后台保护
        $nodes = NodeService::get();
        foreach ($nodes as $node) {
            if ($node['is_menu'] == 0 && ($node['is_auth'] == 0 || $node['is_login'] == 0)) {
                DataService::save("SystemNode", ['node' => $node['node'], 'is_login' => 1, 'is_auth' => 1], 'node');
            }
        }

        $Ip = new IpLocation('UTFWry.dat');
        $location = $Ip->getlocation($this->request->ip());
        sendMail($user['mail'], sysconf("site_name") . "后台登录提醒", "温馨提示：" . "IP:" . $this->request->ip() . "（" . $location['country'] . ")在 " . date("Y-m-d H:i:s", time()) . " 成功登录后台,如非本人操作请及时修改密码！");

        $this->success('登录成功，正在进入系统...', '@admin');
    }

    /**
     * 退出登录
     */
    public function out() {
        if (session('user')) {
            LogService::write('系统管理', '用户退出系统成功');
        }
        session('user', null);
        session('user_expire_time', null);
        session_destroy();
        $this->success('退出登录成功！', '@index');
    }

    /**
     * 验证码
     */
    public function verifycode() {
        $captcha = new Captcha();
        return $captcha->entry();
    }

    /**
     * 谷歌令牌验证
     */
    public function google() {
        if (!session('user')) {
            $this->error('未登录');
        }
        if (sysconf('admin_auth_type') != "google") {
            $this->error('系统未开启谷歌身份验证', '@admin');
        }
        $second_auth = session('second_auth');
        if ($second_auth) {
            $this->redirect('@admin');
        }
        $ga = new \Util\Verify\PHPGangsta_GoogleAuthenticator();
        $google_token = Db::name('system_user')->where('id', session('user')['id'])->value('google_secret_key');
        if ($this->request->isPost()) {

            $action_type = input('action_type/d', 0);
            $code = $this->request->post('code', '', 'trim');
            if ($code == '') {
                $this->error("请输入验证码");
            }
            if ($action_type == 0) {//首次绑定
                $google_secret_key = session('google_secret_key');
                if (!$google_secret_key) {
                    $this->error("绑定失败，请刷新页面重试");
                }
                $oneCode = $ga->getCode($google_secret_key);
                if ($code !== $oneCode) {
                    $this->error("验证码错误");
                } else {
                    $re = Db::name('system_user')->where(['id' => session('user')['id']])->update(['google_secret_key' => $google_secret_key]);
                    if (FALSE !== $re) {
                        session('second_auth', true);
                        session('google_secret_key', null);
                        $this->success("绑定成功", '@admin');
                    } else {
                        $this->error("绑定失败，请售后重试");
                    }
                }
            } else {
                $google_secret_key = Db::name('system_user')->where(['id' => session('user')['id']])->value('google_secret_key');
                if ($google_secret_key == '') {
                    $this->error("您未绑定谷歌身份验证器");
                }
                $captcha = $this->request->post('captcha_code', '', 'trim');
                $captchaClass = new Captcha();
                if (!$captchaClass->check($captcha)) {
                    $this->error('图形验证码错误!');
                }
                $oneCode = $ga->getCode($google_secret_key);
                if ($code != $oneCode) {
                    $this->error("身份验证码错误");
                } else {
                    session('second_auth', true);
                    LogService::write('系统权限', '谷歌身份验证器验证通过');
                    $this->success("验证通过，正在进入系统...", '@admin');
                }
            }
        } else {
            if ($google_token == '') {
                $secret = $ga->createSecret();
                $qrCodeUrl = $ga->getQRCodeGoogleUrl(Request::instance()->domain(), $secret);
                session('google_secret_key', $secret);
                $this->assign('secret', $secret);
                $this->assign('qrCodeUrl', $qrCodeUrl);
            }
            $this->assign('action_type', $google_token == '' ? 0 : 1);
            $this->assign('google_token', $google_token);
            return view();
        }
    }

    public function safecode() {
        if (!session('user')) {
            $this->error('未登录');
        }
        if (sysconf('admin_auth_type') != "safecode") {
            $this->error('系统未开启认证码验证', '@admin');
        }
        $second_auth = session('second_auth');
        if ($second_auth) {
            $this->redirect('@admin');
        }

        $file = Config::get('safecode') ? Config::get('safecode') : [];
        $safecode = isset($file[(string) "SAFECODE_" . session('user')['id']]) ? $file[(string) "SAFECODE_" . session('user')['id']] : "";

        if ($this->request->isPost()) {
            $action_type = input('action_type/d', 0);
            $safecode_input = $this->request->post('safecode', '', 'trim');
            if ($safecode_input == '') {
                $this->error("请输入认证码");
            }

            if ($action_type == 0) {//首次绑定
                if ($safecode == "") {
                    //写入
                    $auth = Config::get('safecode') ? Config::get('safecode') : [];
                    $auth = array_merge((array) $auth, [(string) "SAFECODE_" . session('user')['id'] => hash_safecode($safecode_input)]);
                    file_put_contents(APP_PATH . 'extra' . DIRECTORY_SEPARATOR . 'safecode.php', '<?php' . "\n\nreturn " . var_export($auth, true) . ";");

                    session('second_auth', true);
                    $this->success("设置成功", '@admin');
                } else {
                    $this->error("绑定失败，请售后重试");
                }
            } else {
                if ($safecode == '') {
                    $this->error("您未设置认证码");
                }
                $captcha = $this->request->post('captcha_code', '', 'trim');
                $captchaClass = new Captcha();
                if (!$captchaClass->check($captcha)) {
                    $this->error('图形验证码错误!');
                }
                if ($safecode != hash_safecode($safecode_input)) {
                    $this->error("认证码错误");
                } else {
                    session('second_auth', true);
                    LogService::write('系统权限', '登录认证码验证通过');
                    $this->success("验证通过，正在进入系统...", '@admin');
                }
            }
        } else {
            $this->assign('action_type', $safecode == '' ? 0 : 1);
            $this->assign('safecode', $safecode);
            return $this->fetch('', ['title' => '用户登录']);
        }
    }

    public function sms() {
        if (!session('user')) {
            $this->error('未登录');
        }
        if (sysconf('admin_auth_type') != "sms") {
            $this->error('系统未开启短信验证', '@admin');
        }
        $second_auth = session('second_auth');
        if ($second_auth) {
            $this->redirect('@admin');
        }

        $mobile = Db::name('system_user')->where('id', session('user')['id'])->value('phone');
        if ($this->request->isPost()) {

            $code = input('sms_code');
            if ($code == '') {
                $this->error('请输入手机验证码');
            }
            $sms = new Sms();
            if (!$sms->verifyCode($mobile, $code, 'sms_auth')) {
                $this->error($sms->getError());
            }

            session('second_auth', true);
            LogService::write('系统权限', '登录短信验证通过');
            $this->success("验证通过，正在进入系统...", '@admin');
        } else {
            $this->assign('mobile', $mobile);
            return $this->fetch('', ['title' => '用户登录']);
        }
    }

    public function email() {
        if (!session('user')) {
            $this->error('未登录');
        }
        if (sysconf('admin_auth_type') != "email") {
            $this->error('系统未开启邮箱验证', '@admin');
        }
        $second_auth = session('second_auth');
        if ($second_auth) {
            $this->redirect('@admin');
        }

        $email = Db::name('system_user')->where('id', session('user')['id'])->value('mail');
        if ($this->request->isPost()) {

            $code = input('email_code');
            if ($code == '') {
                $this->error('请输入邮箱验证码');
            }
            $emailModel = new Email();
            if (!$emailModel->verifyCode($email, $code, 'email_auth')) {
                $this->error($emailModel->getError());
            }

            session('second_auth', true);
            LogService::write('系统权限', '登录邮箱验证通过');
            $this->success("验证通过，正在进入系统...", '@admin');
        } else {
            $this->assign('email', $email);
            return $this->fetch('', ['title' => '用户登录']);
        }
    }

    /**
     * 发送邮箱验证码
     */
    public function sendEmailCode() {
        if (!session('user')) {
            $this->error('未登录');
        }
        $email = session('user')['mail'];

        if (!is_email($email)) {
            $this->error('不是有效的邮箱！');
        }

        $emailModel = new Email();
        $screen = input('screen/s', '');

        $res = $emailModel->sendCode($email, $screen);
        if ($res === false) {
            $this->error($emailModel->getError());
        }
        $this->success('已发送验证码到你的邮箱，请注意查收！');
    }

    /**
     * 发送短信验证码
     */
    public function sendSmsCode() {
        if (!session('user')) {
            $this->error('未登录');
        }
        $mobile = session('user')['phone'];
        if (!is_mobile_number($mobile)) {
            $this->error('不是有效的号码！');
        }
        $screen = input('screen', "");

        $sms = new Sms();
        $res = $sms->sendCode($mobile, $screen);
        if ($res === false) {
            $this->error($sms->getError());
        }
        $this->success('已发送验证码，请注意查收！！');
    }

}

<?php

namespace app\index\controller;

use app\common\model\InviteCode as InviteCodeModel;
use app\common\model\User as UserModel;
use app\common\model\UserLoginLog;
use app\common\util\Email;
use app\common\util\Sms;
use app\common\util\notify\Signin as SigninNotify;
use service\MerchantLogService;
use think\Db;
use think\Loader;
use think\Request;
use app\common\util\oauth2\Qq;
use app\common\util\oauth2\Wechat;
use think\captcha\Captcha;

class User extends Base {

    public function __construct() {
        parent::__construct();
    }

    public function qqlogin() {
        if (plugconf("oauth2", "qq_open_merchant") == 1) {
            if (plugconf("oauth2", "qq_open_public") == 1) {
                $api = "https://api.uomg.com/api/login.qq?method=login&callback=" . url("index/user/qqToken");
            } else {
                $qq = new Qq();
                $api = $qq->login(plugconf("oauth2", "qq_open_appid"), url("index/user/qqToken"), 'login');
            }
            return redirect($api);
        } else {
            $this->error("抱歉！未开启商户QQ登录");
        }
    }

    public function wechatlogin() {
        if (plugconf("oauth2", "wechat_open_merchant") == 1) {
            $appid = plugconf("oauth2", "wechat_open_appid");
            $redirect_uri = url('index/user/wechatToken');
            $wechat = new Wechat();
            $api = $wechat->login($appid, $redirect_uri, "login");
            return redirect($api);
        } else {
            $this->error("抱歉！未开启商户微信登录");
        }
    }

    public function wechatToken() {
        $code = input('code/s', '');
        $wechat = new Wechat();
        $openid = $wechat->getOpendId(plugconf("oauth2", "wechat_open_appid"), plugconf("oauth2", "wechat_open_secret"), $code);
        if ($openid == "") {
            $this->error("抱歉！获取openid失败！");
        }

        $user = UserModel::get(['oauth2_wechat_openid' => $openid]);
        if ($user) {
            session('merchant.user', $user->id);
            session('merchant.login_key', $user->login_key);
            session('merchant.username', $user->username);
            session('merchant.login_expire', time() + 86400 * 7);
            session('merchant.last_ip', $this->request->ip());
            UserLoginLog::create([
                'user_id' => $user->id,
                'ip' => $this->request->ip(),
                'create_at' => $_SERVER['REQUEST_TIME'],
            ]);
            MerchantLogService::write('登录成功', '登录成功');
            $this->redirect('/merchant');
        } else {
            $user_id = session('merchant.user');
            $user = UserModel::get($user_id);
            if ($user) {
                $user->oauth2_wechat_openid = $openid;
                $res = $user->save();
                if ($res) {
                    $this->success("绑定成功！", url('merchant/plugin/oauth2'));
                } else {
                    $this->error("绑定失败！", url('merchant/plugin/oauth2'));
                }
            } else {
                $this->error('当前微信未绑定用户，请登录商户前往第三方登录进行绑定！', url('login'));
            }
        }
    }

    public function qqToken() {
        if (plugconf("oauth2", "qq_open_public") == 1) {
            $openid = input('openid/s', '');
        } else {
            $code = input('code/s', '');
            $qq = new Qq();
            $accessToken = $qq->getAccessToken(plugconf("oauth2", "qq_open_appid"), plugconf("oauth2", "qq_open_secret"), url("index/user/qqToken"), $code);
            $openid = $qq->getOpendId($accessToken);
        }

        if ($openid == "") {
            $this->error("抱歉！获取openid失败！");
        }

        $user = UserModel::get(['oauth2_qq_openid' => $openid]);
        if ($user) {
            session('merchant.user', $user->id);
            session('merchant.login_key', $user->login_key);
            session('merchant.username', $user->username);
            session('merchant.login_expire', time() + 86400 * 7);
            session('merchant.last_ip', $this->request->ip());
            UserLoginLog::create([
                'user_id' => $user->id,
                'ip' => $this->request->ip(),
                'create_at' => $_SERVER['REQUEST_TIME'],
            ]);
            MerchantLogService::write('登录成功', '登录成功');
            $this->redirect('/merchant');
        } else {
            $user_id = session('merchant.user');
            $user = UserModel::get($user_id);
            if ($user) {
                $user->oauth2_qq_openid = $openid;
                $res = $user->save();
                if ($res) {
                    $this->success("绑定成功！", url('merchant/plugin/oauth2'));
                } else {
                    $this->error("绑定失败！", url('merchant/plugin/oauth2'));
                }
            } else {
                $this->error('当前QQ未绑定用户，请登录商户前往第三方登录进行绑定！', url('login'));
            }
        }
    }

    public function login() {
        if (session('merchant.user')) {
            $this->redirect('/merchant');
        }

        return $this->fetch();
    }

    public function doLogin() {
        if (session('__token__') !== input('__token__')) {
            $this->error('表单令牌错误，请重试！');
        }
        $username = input('username/s', '');
        $password = input('password/s', '');
        $user = UserModel::get(['username|mobile' => $username]);
        if (!$user) {
            $this->error('不存在该账号！');
        }
        if ($user->status == 0) {
            $this->error('该账号已被禁用！');
        }
        //检查是否冻结
        if ($user->is_freeze == 1) {
            $this->error('该账号已被冻结！');
        }

        $rememberme = input('rememberme/d', 0);

        //删除今天零时以前的错误密码登录记录
        $start_time = strtotime(date('Y-m-d'));
        $end_time = $start_time + 60 * 60 * 24 - 1;
        Db::name('user_login_error_log')->where('login_time<' . $start_time)->delete();
        $error_count = Db::name('user_login_error_log')->where(['login_name' => $user['username'], 'user_type' => 0, 'login_time' => ['BETWEEN', [$start_time, $end_time]]])->count();
        if ($error_count >= sysconf('wrong_password_times')) {
            $last_time = Db::name('user_login_error_log')->where(['login_name' => $user['username'], 'user_type' => 0])->order('id DESC')->limit(1)->value('login_time');
            $time = $last_time + 24 * 60 * 60 - time();
            $time_str = sec2Time($time);
            return J(200, '输入错误密码超限，账户已被锁定，将于' . $time_str . '后自动解锁!');
        }
        if ($user->password != md5($password)) {
            $plog['login_name'] = $user['username'];
            $plog['password'] = $password;
            $plog['user_type'] = 0;
            $plog['login_from'] = 0;
            $plog['login_time'] = time();
            Db::name('user_login_error_log')->insert($plog);
            $error_count++;
            if ($error_count >= sysconf('wrong_password_times')) {
                $this->error('密码错误，您的账号已被锁定，将于24小时后自动解锁!');
            } else {
                $this->error('密码错误，请重新输入，您还有' . (sysconf('wrong_password_times') - $error_count) . '次机会!');
            }
        }
        session('merchant.user', $user->id);
        session('merchant.login_key', $user->login_key);
        session('merchant.username', $user->username);
        session('merchant.last_ip', $this->request->ip());
        //记住7天
        if ($rememberme == 0) {
            session('merchant.login_expire', time() + 86400);
            cookie('merchant', json_encode(['id' => $user->id, "key" => hash("sha256", $user->id . $user->username . $user->password . $this->request->ip())]), 86400);
        } else {
            session('merchant.login_expire', time() + 86400 * 7);
            cookie('merchant', json_encode(['id' => $user->id, "key" => hash("sha256", $user->id . $user->username . $user->password . $this->request->ip())]), 86400 * 7);
        }

        //绑定微信
        $user_agent = $_SERVER['HTTP_USER_AGENT'];
        if (strpos($user_agent, 'MicroMessenger') && session('openid') && $user['openid'] == '') {
            UserModel::where('id', $user->id)->update(['openid' => session('openid')]);
        }
        // 记录登录日志
        UserLoginLog::create([
            'user_id' => $user->id,
            'ip' => $this->request->ip(),
            'create_at' => $_SERVER['REQUEST_TIME'],
        ]);
        MerchantLogService::write('登录成功', '登录成功');

        $notify = new SigninNotify();
        $notify->notify($user, $this->request->ip());

        if (sysconf('login_auth') == 1) {
            //检查用户是否开启了安全登录
            if ($user->login_auth == 0) {
                $this->success('登录成功', '/merchant');
            } else {
                //需要安全登录验证
                session('merchant.login_auth', $user->login_auth);
                $this->redirect('/merchant');
            }
        } else {
            $this->success('登录成功', '/merchant');
        }
    }

    /**
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function smsAuth() {
        //没有开启二次验证，直接跳转到后台中心
        if (sysconf('login_auth') != 1 || !session('merchant.login_auth')) {
            $this->redirect(url('merchant/index/index'));
        }

        if ($this->request->isPost()) {
            $chcode = input('code/s');
            if (empty($chcode)) {
                return J(0, '请输入验证码');
            }

            $userId = session('merchant.user');
            if ($userId) {
                $user = UserModel::where(['id' => $userId])->find();
                if ($user && $user->mobile) {
                    $smsHelper = new Sms();
                    if ($smsHelper->verifyCode($user->mobile, $chcode, 'login_auth')) {
                        session('merchant.login_auth', null);
                        return J(1, '验证成功', '', url('merchant/index/index'));
                    } else {
                        return J(0, $smsHelper->getError());
                    }
                }
            }
        }

        return $this->fetch();
    }

    /**
     * 二次验证短信
     * @return string
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function sendAuthSms() {
        if (sysconf('login_auth') != 1) {
            return false;
        }

        $userId = session('merchant.user');
        if ($userId) {
            $user = UserModel::where(['id' => $userId])->find();
            if ($user && $user->mobile) {
                // 发送二次登陆验证短信
                $smsHelper = new Sms();
                $res = $smsHelper->sendCode($user->mobile, 'login_auth');
                if ($res) {
                    return J(1, '短信已发送成功，请注意查收', 60);
                } else {
                    return J(0, $smsHelper->getError());
                }
            }
        }

        return J(0, '用户不存在');
    }

    /**
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function emailAuth() {
        //没有开启二次验证，直接跳转到后台中心
        if (sysconf('login_auth') != 1 || !session('merchant.login_auth')) {
            $this->redirect(url('merchant/index/index'));
        }

        if ($this->request->isPost()) {
            $chcode = input('code/s');
            if (empty($chcode)) {
                return J(0, '请输入验证码');
            }

            $userId = session('merchant.user');
            if ($userId) {
                $user = UserModel::where(['id' => $userId])->find();
                if ($user && $user->email) {
                    $emailHelper = new Email();
                    if ($emailHelper->verifyCode($user->email, $chcode, 'login_auth')) {
                        session('merchant.login_auth', null);
                        return J(1, '验证成功', '', url('merchant/index/index'));
                    } else {
                        return J(0, $emailHelper->getError());
                    }
                }
            }
        }

        return $this->fetch();
    }

    /**
     * 二次验证邮件
     * @return string
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function sendAuthEmail() {

        if (sysconf('login_auth') != 1) {
            return false;
        }

        $userId = session('merchant.user');
        if ($userId) {
            $user = UserModel::where(['id' => $userId])->find();
            if ($user && $user->email) {
                // 发送二次登陆验证邮件
                $emailHelper = new Email();
                $res = $emailHelper->sendCode($user->email, 'login_auth');
                if ($res) {
                    return J(1, '已发送验证码到你的邮箱，请注意查收', 60);
                } else {
                    return J(0, $emailHelper->getError());
                }
            }
        }

        return J(0, '用户不存在');
    }

    /**
     * 二次验证谷歌密码
     */
    public function googleAuth() {
        //没有开启二次验证，直接跳转到商户中心
        if (sysconf('login_auth') != 1 || !session('merchant.login_auth')) {
            $this->redirect(url('merchant/index/index'));
        }

        $google_auth = session('merchant_google_auth');
        if ($google_auth) {
            session('merchant.login_auth', null);
            $this->redirect(url('merchant/index/index'));
        }
        $userId = session('merchant.user');
        $ga = new \Util\Verify\PHPGangsta_GoogleAuthenticator();
        $google_token = Db::name('user')->where('id', $userId)->value('google_secret_key');
        if ($this->request->isPost()) {
            $action_type = input('action_type/d', 0);
            $code = $this->request->post('code', '', 'trim');
            if ($code == '') {
                return J(0, "请输入验证码");
            }
            if ($action_type == 0) { //首次绑定
                $google_secret_key = session('merchant_google_secret_key');
                if (!$google_secret_key) {
                    return J(0, "绑定失败，请刷新页面重试");
                }
                $oneCode = $ga->getCode($google_secret_key);
                if ($code !== $oneCode) {
                    $this->error("验证码错误");
                } else {
                    $re = Db::name('user')->where(['id' => $userId, 'google_secret_key' => ""])->update(['google_secret_key' => $google_secret_key]);
                    if (false !== $re) {
                        session('merchant_google_auth', $oneCode);
                        session('merchant_google_secret_key', null);
                        session('merchant.login_auth', null);
                        return J(1, '验证成功', '', url('merchant/index/index'));
                    } else {
                        return J(0, "绑定失败，请刷新页面重试");
                    }
                }
            } else {
                $google_secret_key = Db::name('user')->where(['id' => $userId])->value('google_secret_key');
                if ($google_secret_key == '') {
                    return J(0, "您未绑定谷歌身份验证器");
                }
                $captcha = $this->request->post('captcha_code', '', 'trim');
                $captchaClass = new Captcha();
                if (!$captchaClass->check($captcha)) {
                    return J(0, "图形验证码错误！");
                }
                $oneCode = $ga->getCode($google_secret_key);
                if ($code != $oneCode) {
                    return J(0, "身份验证码错误！");
                } else {
                    session('merchant_google_auth', $oneCode);
                    session('merchant.login_auth', null);
                    MerchantLogService::write('系统权限', '绑定谷歌身份验证器成功');
                    return J(1, '验证通过，正在进入系统...', '', url('merchant/index/index'));
                }
            }
        } else {
            if ($google_token == '') {
                $secret = $ga->createSecret();
                $qrCodeUrl = $ga->getQRCodeGoogleUrl(Request::instance()->domain(), $secret);
                session('merchant_google_secret_key', $secret);
                $this->assign('secret', $secret);
                $this->assign('qrCodeUrl', $qrCodeUrl);
            }
            $this->assign('action_type', $google_token == '' ? 0 : 1);
            $this->assign('google_token', $google_token);
            return view();
        }
    }

    public function logout() {
        cookie('merchant', null);
        session('merchant.user', null);
        session('openid', null);
        $this->redirect('@index');
    }

    public function register() {
        // 检测站点注册状态
        if (sysconf('site_register_status') == 0) {
            $this->error('暂未开启注册！');
        }

        $token = md5(time() . md5(time()) . time()) . time();
        session('register_sms_code', $token);
        session('register_sms_code_time', time());
        session('spread_userid', input('user_id/d', 0));
        $this->assign('sms_token', $token);

        return $this->fetch();
    }

    public function checkuser() {
        $username = input('newusername/s', '');
        $isExist = UserModel::get(['username' => $username]);
        if ($isExist) {
            return 1;
        } else {
            return 0;
        }
    }

    public function checkuserinfo() {
        $info = input('param.', []);
        if (isset($info['newmobile'])) {
            $field = 'mobile';
            $key = 'newmobile';
        }
        if (isset($info['newemail'])) {
            $field = 'email';
            $key = 'newemail';
        }
        $isExist = UserModel::get([$field => $info[$key]]);
        if ($isExist) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * 发送短信验证码
     */
    public function sendSmsCode() {
        $captcha = input('chkcode/s', '');
        $captchaClass = new Captcha();
        if (!$captchaClass->check($captcha)) {
            return J(500, "图形验证码错误！");
        }

        //验证唯一码
        $token = input('token/s', '');
        $smsToken = session('register_sms_code');
        $token_time = session('register_sms_code_time');
        if (empty($smsToken) || $smsToken != $token) {
            return J(0, '发送失败');
        }

        if (!empty($token_time)) {
            if (time() - $token_time < 3) {
                //3秒内填完手机号，并点击发送短信，手速太快了，可能是刷的，不给发短信
                return J(0, '操作太快了，请重试');
            }
        }

        $mobile = input('phone/s', '');
        if (!is_mobile_number($mobile)) {
            return J(-1, '不是有效的号码！');
        }
        $screen = input('screen/s', '');

        if ($screen == 'register') {
            if (sysconf('site_register_smscode_status') != 1 || sysconf('site_register_code_type') != 'sms') {
                return J(0, '短信已关闭');
            }
            //检查用户是否已注册
            $user = Db::name('user')->where('mobile', $mobile)->find();
            if ($user) {
                return J(0, '手机已注册');
            }
        }

        $sms = new Sms();
        $res = $sms->sendCode($mobile, $screen);
        if ($res === false) {
            return J(-1, $sms->getError());
        }
        $token = md5(time() . md5(time()) . time()) . time();
        session('register_sms_code', $token);
        session('register_sms_code_time', time());
        return J(1, '已发送验证码到你的手机，请注意查收！！', ['token' => $token]);
    }

    /**
     * 发送邮箱验证码
     */
    public function sendEmailCode() {
        $data = input('post.', '');
        $res = $this->validate($data, 'User.sendEmailCode');
        if ($res !== true) {
            return J(-1, $res);
        }
        $sms = new Email();
        $screen = input('screen/s', '');


        if ($screen == 'register') {
            //检查用户是否已注册
            $user = Db::name('user')->where('email', $data['email'])->find();
            if ($user) {
                return J(0, '邮箱已注册');
            }
        }

        $res = $sms->sendCode($data['email'], $screen);
        if ($res === false) {
            return J(-1, $sms->getError());
        }
        return J(1, '已发送验证码到你的邮箱，请注意查收！！');
    }

    public function doRegister() {
        // 检测站点注册状态
        if (sysconf('site_register_status') == 0) {
            $this->error('暂未开启注册！');
        }
        $ip = Request::instance()->ip();
        // 检查当前IP当日注册次数
        if (sysconf('ip_register_limit') > 0) {
            if (false === $this->registerIpCheck($ip)) {
                $this->error('IP：' . $ip . '，今日注册次数超限！');
            }
        }

        $data = input('reginfo/a', []);

        $validate = Loader::validate('app\common\validate\Register');

        if (!$validate->check($data)) {
            $this->error($validate->getError());
        }

        if (sysconf('spread_invite_code') == 1 && sysconf('is_need_invite_code') == 1 && $data['invite_code'] == '') {
            $this->error('邀请码不能为空！');
        }
        $res = $this->validate($data, 'User');
        if ($res !== true) {
            $this->error($res);
        }
        // 检测注册是否需要短信验证码
        if (sysconf('site_register_smscode_status') == 1) {
            $verify = null;
            if (sysconf('site_register_code_type') == 'sms') {
                $verify = new Sms();
                $verifyData = $data['mobile'];
            } elseif (sysconf('site_register_code_type') == 'email') {
                $verify = new Email();
                $verifyData = $data['email'];
            }

            if ($verify && !$verify->verifyCode($verifyData, $data['chkcode'], 'register')) {
                $this->error($verify->getError());
            }
        }
        // 检查邀请码
        if (sysconf('spread_invite_code') == 1) {
            $invite_code = isset($data['invite_code']) ? $data['invite_code'] : '';
            if ($invite_code != '') {
                $code = InviteCodeModel::get(['code' => $invite_code, 'status' => 0]);
                if (!$code) {
                    $this->error('邀请码不正确！');
                }
                if ($code->is_expire == 1) {
                    $this->error('邀请码已过期！');
                }
                $parent_id = $code->user_id;
                $invite_type = 1;
            }
        }
        if (!isset($parent_id)) {
            // 检测推广注册
            $parent_id = session("spread_userid") ? session("spread_userid") : 0;
            $invite_type = 2;
        }
        $is_ambassador = false;
        $spread_reward_money = sysconf('spread_reward_money');
        if ($parent_id > 0) {
            $user = Db::name('user')->lock(true)->where('id', $parent_id)->find();
            if ($user) {
                $data['parent_id'] = $user['id'];
            }
            $ambassador = Db::name('plugin_ambassador')->where('user_id', $parent_id)->find();
            if ($ambassador) {
                $is_ambassador = true;
                $spread_reward_money = $ambassador['spread_reward_money'];
            }
        }
        $data['password'] = md5($data['password']);
        $data['money'] = 0;
        // 检测注册是否自动审核
        if (sysconf('site_register_verify') == 1) {
            $data['status'] = 1;
        } else {
            $data['status'] = 0;
        }
        $data['create_at'] = $_SERVER['REQUEST_TIME'];
        $data['ip'] = $ip;
        $data['agent_key'] = generateProxyKey(true);
        $data['rate_type'] = 0;
        $UserModel = new UserModel($data);
        $res = $UserModel->allowField(true)->save();
        if ($res) {
            $user_id = $UserModel->id;
            if (isset($code)) {
                $code->invite_uid = $user_id;
                $code->invite_at = $_SERVER['REQUEST_TIME'];
                $code->status = 1;
                $code->save();
            }

            if ((sysconf('spread_reward') == 1 || $is_ambassador) && $spread_reward_money > 0 && isset($user) && !empty($user)) {
                $UserModel::where('id', $user['id'])->update(['money' => Db::raw('money+' . $spread_reward_money)]);
                if ($invite_type == 1) {
                    $remark = '通过邀请码';
                } else {
                    $remark = '通过推广链接';
                }
                record_user_money_log('sub_register', $user['id'], $spread_reward_money, $user['money'] + $spread_reward_money, $remark . '成功推荐用户【' . $data['username'] . '】');
            }
            //添加默认分组
            add_default_rate(1, $user_id);

            if (sysconf('site_register_verify') == 1) {
                $this->success('注册成功！', 'user/login');
            } else {
                $this->success('注册成功，请联系客服QQ（' . sysconf('site_info_qq') . '）审核开通！  <a href="/login">登录</a>');
            }
        } else {
            $this->error('注册失败，请重试！');
        }
    }

    // 忘记密码
    public function forgetPassword() {
        $token = md5(time() . md5(time()) . time()) . time();
        session('register_sms_code', $token);
        session('register_sms_code_time', time());
        $this->assign('sms_token', $token);
        return $this->fetch();
    }

    // 忘记密码
    public function doForgetPassword() {
        $mobile = input('mobile/s', '');
        $code = input('code/s', '');
        $password = input('password/s', '');
        $password2 = input('password_confirm/s', '');
        $user = UserModel::get(['mobile' => $mobile]);
        if (!$user) {
            return J(0, '不存在该用户');
        }
        if ($password != $password2) {
            return J(0, '两次密码输入不一致');
        }
        $sms = new Sms();
        if (!$sms->verifyCode($mobile, $code, 'forget')) {
            $this->error($sms->getError());
        }
        $user->password = md5($password);
        $res = $user->save();
        if ($res !== false) {
            session('index.login', null);
            return J(1, '修改成功，请重新登录！', '/login');
        } else {
            return J(0, '修改失败');
        }
    }

    // IP注册次数检查
    private function registerIpCheck($ip) {
        $today = strtotime(date("Y-m-d"), time());
        $count = UserModel::where(['ip' => $ip, 'create_at' => ['egt', $today]])->count();
        if ($count >= sysconf('ip_register_limit')) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * 验证码
     */
    public function verifycode() {
        $config = [
            'length' => 4,
            'expire' => 300,
        ];
        $captcha = new Captcha($config);
        return $captcha->entry();
    }

}

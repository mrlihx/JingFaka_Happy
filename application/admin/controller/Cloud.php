<?php

namespace app\admin\controller;

use controller\BasicAdmin;
use service\HttpService;
use think\Config;
use service\UpgradeService;
use think\Cache;
use service\AuthService;
class Cloud extends BasicAdmin
{
    private $domain;
    private $host;
    private $cloudkey;
    public function _initialize()
    {
        parent::_initialize();
        define('UPGRADE_PATH', ROOT_PATH . Config::get('cloud.system_dir') . DS);
        if (!is_dir(UPGRADE_PATH)) {
            @mkdir(UPGRADE_PATH, 0755, true);
        }
        if (Config::get('cloud.cloudkey') == null || Config::get('cloud.cloudkey') == '') {
            updateauth(array('cloudkey' => random_str(32)));
        }
        if ((bool) isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on' ) {
            $E8xFA = 'https://';
        } else {
            $E8xFA = 'http://';
        }
        $var_5976 = $E8xFA;
        $this->domain = $_SERVER['HTTP_HOST'];
        $this->host = $var_5976 . $_SERVER['HTTP_HOST'];
        $this->cloudkey = Config::get('cloud.cloudkey');
        $E8xtIE9 = array($this->request->module(), $this->request->controller(), $this->request->action());
        list($var_5977, $var_5978, $var_5979) = $E8xtIE9;
        if (strtolower($var_5977 . '/' . $var_5978 . '/' . $var_5979) != 'admin/cloud/auth1') {
            try {
                $var_5980 = getAuth();
                #var_dump($var_5980);
                #die();
                if ($var_5980['authkey'] == null || $var_5980['authkey'] == '') {
                    if (AuthService::checkStream() == 0) {
                        $E8xhC3 = $this->error('系统未授权', url('admin/cloud/auth'));
                    } else {
                        if (AuthService::checkStream() == 1) {
                            $E8xhC3 = $this->error('系统未授权', url('admin/cloud/auth'));
                        } else {
                            return true;
                        }
                    }
                }
                $var_5981 = $var_5980['authkey'];
                if (count(explode('#', base64_decode($var_5981))) != 4) {
                    if (AuthService::checkStream() == 0) {
                        $E8xhC1 = $this->error('系统未授权，请登录后台授权');
                    }
                }
                $var_5983 = AuthService::getRegistrableDomain();
                $var_5984 = explode('#', base64_decode($var_5981))[3];
                $var_5985 = $var_5983 . $var_5984 . 'jingfaka2';
                $var_5986 = md5($var_5985);
                $var_5987 = 0;
                $var_5988 = '';
                for ($var_5989 = 0; $var_5989 < strlen($var_5985); $var_5989++) {
                    if ($var_5987 == strlen($var_5986)) {
                        $E8xEC = 0;
                    } else {
                        $E8xEC = $var_5987;
                    }
                    $var_5987 = $E8xEC;
                    $var_5987++;
                    $var_5988 .= $var_5985[$var_5989] ^ $var_5986[$var_5987];
                    $E8xnWEA = $var_5988;
                    $E8xoB3 = $var_5989;
                }
                $E8xzAvPvP4 = array('=', '/', '+');
                $E8xzAvPvP14 = array('=', '/', '+');
                $E8xEC = strtoupper(str_replace($E8xzAvPvP4, '26', base64_encode(sha1(md5(sha1($var_5983 . $var_5984 . 'jingfaka1')) . 'jingfaka1')))) . strtoupper(str_replace($E8xzAvPvP14, '2F', base64_encode($var_5988)));
                $E8xzAvPvP20 = array('=', '/', '+');
                $var_5990 = $E8xEC . strtoupper(str_replace($E8xzAvPvP20, '8A', base64_encode(hash_hmac('sha256', md5($var_5983, $var_5984 . 'jingfaka3') . 'jingfaka3', explode('#', base64_decode($var_5981))[2], true))));
                $var_5991 = (bool) openssl_verify($var_5983 . $var_5984, base64_decode(explode('#', base64_decode($var_5981))[1]), "-----BEGIN PUBLIC KEY-----\n" . wordwrap('MIGfMA0GCS' . 'qGSIb3DQEB' . 'AQUAA4GNADCBiQKBg' . 'QCLTsORv9OPEaIFY' . 'sGkO6iZsVt0FJ1ADjZ4' . 'q8xlys8zkkE6/vF' . 'VtOkRlbg8Yc+xsyg2JR7jww' . '2W6zn9XFZcy' . 'jF6vT/3UTzsHb' . 'ZZzz51UY6dB2SRczu' . 'C1b76Cwaq7i' . 'o8eB39C2' . 'vcqDJmgprW0+ZPwodO1uUEhd0jOvRt' . 'uhGdvnjYMwIDAQAB', 64, "\n", true) . "\n-----END PUBLIC KEY-----");
                if (explode('#', base64_decode($var_5981))[0] != strtoupper(md5($var_5990))) {
                    if (AuthService::checkStream() == 0) {
                        $E8xhC1 = $this->error('系统未授权，请登录后台授权');
                    }
                }
                if (!$var_5991) {
                    if (AuthService::checkStream() == 0) {
                        $this->error('系统未授权，请登录后台授权');
                    }
                }
                if ((int) $var_5984 != 0 && (int) $var_5984 < time()) {
                    $this->error('抱歉授权已过期！', url('admin/cloud/auth'));
                }
            } catch (Exception $var_5992) {
                if (AuthService::checkStream() == 0) {
                    $this->error('系统未授权，请登录后台授权');
                }
            }
        }
    }
    public function auth()
    {
        if ($this->request->isPost()) {
            $var_5993 = $this->request->post('authkey');
            if (AuthService::checkAuth($var_5993)) {
                $var_5995 = Config::get('auth');
                $E8xzAvP1 = array('authkey' => $var_5993);
                $var_5995 = array_merge($var_5995, $E8xzAvP1);
                file_put_contents(APP_PATH . 'extra' . DIRECTORY_SEPARATOR . 'auth.php', '<?php' . "\n\nreturn " . var_export($var_5995, true) . ';');
                $E8xhC3 = $this->success('恭喜您授权成功', url('/index/index/index'));
            } else {
                $E8xhC1 = $this->error('授权码不正确');
            }
        }
        $this->assign('domain', AuthService::getRegistrableDomain());
        $this->assign('overstream', AuthService::checkStream() == 0);
        return $this->view->fetch();
    }
    public function user()
    {
        $this->assign('title', '个人中心');
        $this->assign('link', Config::get('cloud.platform_url') . '/index/user/index.html');
        $E8xhC1 = $this->fetch('iframe');
        return $E8xhC1;
    }
    public function theme()
    {
        if ((bool) isset($_SERVER['HTTPS'])) {
            $E8xEE = (bool) $_SERVER['HTTPS'] == 'on';
        }
        if (!(bool) $E8xEE) {
            if ((bool) isset($_SERVER['HTTP_X_FORWARDED_PROTO'])) {
                $E8xEK = (bool) $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https';
            }
        }
        if ($E8xEK) {
            $E8xEM = 'https://';
        } else {
            $E8xEM = 'http://';
        }
        $var_5996 = $E8xEM;
        $var_5997 = $var_5996 . $_SERVER['HTTP_HOST'];
        $this->assign('title', '模板主题');
        $E8xvPEA = Config::get('cloud.platform_url') . '/index/theme/index.html?host=' . $this->host;
        $E8xvPEC = $E8xvPEA . '&cloudkey=' . $this->cloudkey;
        $E8xvPEE = $E8xvPEC . '&domain=' . $this->domain;
        $this->assign('link', $E8xvPEE);
        $E8xhC1 = $this->fetch('iframe');
        return $E8xhC1;
    }
    public function plugin()
    {
        $this->assign('title', '功能插件');
        $E8xvPEA = Config::get('cloud.platform_url') . '/index/plugin/index.html?host=' . $this->host;
        $E8xvPEC = $E8xvPEA . '&cloudkey=' . $this->cloudkey;
        $E8xvPEE = $E8xvPEC . '&domain=' . $this->domain;
        $this->assign('link', $E8xvPEE);
        $E8xhC1 = $this->fetch('iframe');
        return $E8xhC1;
    }
    public function server()
    {
        $this->assign('title', '云服务器');
        $E8xvPEA = Config::get('cloud.platform_url') . '/index/recommend/server.html?host=' . $this->host;
        $E8xvPEC = $E8xvPEA . '&cloudkey=' . $this->cloudkey;
        $E8xvPEE = $E8xvPEC . '&domain=' . $this->domain;
        $this->assign('link', $E8xvPEE);
        $E8xhC1 = $this->fetch('iframe');
        return $E8xhC1;
    }
    public function payment()
    {
        $this->assign('title', '支付接口');
        $E8xvPEA = Config::get('cloud.platform_url') . '/index/payment/index.html?host=' . $this->host;
        $E8xvPEC = $E8xvPEA . '&cloudkey=' . $this->cloudkey;
        $E8xvPEE = $E8xvPEC . '&domain=' . $this->domain;
        $this->assign('link', $E8xvPEE);
        $E8xhC1 = $this->fetch('iframe');
        return $E8xhC1;
    }
    public function checkVersion()
    {
    	
        if ($this->request->isPost()) {
        	#patch 
		$E8xhC1 = $this->error('已是最新版本');
		return $E8xhC1;
		#end
            $E8xzAvP3 = array('version' => Config::get('version.VERSION'));
            $var_5998 = HttpService::post(AuthService::authdomain() . '/api/cloud/versionCheck', $E8xzAvP3);
            $var_5998 = json_decode($var_5998, true);
            if ($var_5998['code'] == 1) {
                if (count($var_5998['data'] > 0)) {
                    $E8xhC3 = $this->success('success', '', $var_5998['data']);
                    return $E8xhC3;
                } else {
                    $E8xhC1 = $this->error('已是最新版本');
                    return $E8xhC1;
                }
            } else {
                $E8xhC1 = $this->error('调用API失败');
                return $E8xhC1;
            }
        }
    }
    public function upgrade()
    {
        if ($this->request->isPost()) {
        	#patch 
		$E8xhC1 = $this->error('当前版本您已经安装');
		return $E8xhC1;
		#end
            $var_6001 = $this->request->post('version');
            if (!is_numeric($var_6001)) {
                $this->error('版本编号不正确！');
            }
            if ($var_6001 == getVersion()) {
                $E8xhC1 = $this->error('当前版本您已经安装！');
            }
            deldir(UPGRADE_PATH);
            $var_6002 = RUNTIME_PATH . 'tp5upgrade' . DS;
            if (!is_dir($var_6002)) {
                @mkdir($var_6002, 0755, true);
            }
            try {
                $var_6003 = array('name' => 'system', 'version' => $var_6001);
                UpgradeService::upgrade($var_6003);
                Cache::rm('__menu__');
                upgradefile(array('VERSION' => $var_6001));
                deldir(UPGRADE_PATH);
                $this->success('恭喜您：升级版本：' . $var_6001 . '成功!', url('/sql/' . $var_6001 . '.php'));
            } catch (Exception $var_6004) {
                $E8xhCvP0 = $var_6004->getMessage();
                $this->error($E8xhCvP0);
            }
        } else {
            $E8xzAvP3 = array('version' => getVersion());
            $var_6005 = HttpService::post(AuthService::authdomain() . '/api/cloud/versionList', $E8xzAvP3);
            $var_6005 = json_decode($var_6005, true);
            if ($var_6005['code'] == 1) {
                $var_6006 = array_page($var_6005['data'], 15);
                $E8xeFvP0 = 'data';
                if ($var_6006) {
                    $E8xvPE9 = $var_6006;
                } else {
                    $E8xvPE9 = array();
                }
                $this->assign($E8xeFvP0, $E8xvPE9);
                $E8xeFvP0 = 'page';
                if ($var_6006) {
                    $E8xvPE9 = $var_6006->render();
                } else {
                    $E8xvPE9 = null;
                }
                $this->assign($E8xeFvP0, $E8xvPE9);
                return $this->view->fetch();
            } else {
                $E8xhC1 = $this->error('调用API失败');
                return $E8xhC1;
            }
        }
    }
}
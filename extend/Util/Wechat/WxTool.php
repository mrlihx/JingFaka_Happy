<?php

//微信服务号操作类

namespace Util\Wechat;

class WxTool {

    /**
     * 微信api根路径
     * @var string
     */
    private $apiURL = 'https://api.weixin.qq.com/cgi-bin';
    private $oauthApiURL = 'https://api.weixin.qq.com/sns';
    public $appid;
    public $secret;

    /**
     * 构造方法，用于实例化微信SDK
     * 自动回复消息时实例化该SDK
     * @param  $scope 获取用户信息类型  默认不获取  snsapi_base,snsapi_userinfo
     * @param  $getjsapi  是否获取jsapi参数 
     * @param  $appid 
     * @param  $secret
     */
    public function __construct($config = array()) {
        foreach ($config as $k => $v) {
            $this->$k = $v;
        }
        $this->appid = sysconf('wechat_appid') ?: '';
        $this->secret = sysconf('wechat_appsecret') ?: '';
    }

    /**
     * 获取openid
     * @param  $scope  snsapi_base  snsapi_userinfo 
     * @return string openid
     */
    public function getOpenid($scope = 'snsapi_base') {
        if (cookie('openid_wx')) {
            return cookie('openid_wx');
        } else {
            $token = $this->getAccessTokenWeb($scope);
            cookie('openid_wx', $token['openid'], 3600);
            return $token['openid'];
        }
    }

    /**
     * 获取jsapi
     * @return array jsapi信息
     */
    public function getJsapiConfig() {
        if (cache('jsapi_ticket_wx')) {
            $jsapi_ticket = cache('jsapi_ticket_wx');
        } else {
            $param = array(
                'type' => 'jsapi'
            );
            $jsapi_ticket = $this->api('ticket/getticket', $param);
            cache('jsapi_ticket_wx', $jsapi_ticket['ticket'], 3600);
            $jsapi_ticket = $jsapi_ticket['ticket'];
        }
        $noncestr = uniqid();
        $timestamp = time();
        $url = "http://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
        $param = array(
            'noncestr' => $noncestr,
            'jsapi_ticket' => $jsapi_ticket,
            'timestamp' => $timestamp,
            'url' => $url,
        );
        ksort($param);
        $signstr = "";
        $i = 0;
        foreach ($param as $k => $v) {
            if ($i == 0) {
                $signstr .= $k . '=' . $v;
            } else {
                $signstr .= "&" . $k . '=' . $v;
            }
            $i++;
        }
        return array(
            'appId' => config('WEIXIN.AppID'),
            'timestamp' => $timestamp,
            'nonceStr' => $noncestr,
            'signature' => sha1($signstr)
        );
    }

    /**
     * 获取网页授权access_token
     * @param  $scope  snsapi_base  snsapi_userinfo 
     * @return array 网页授权access_token
     */
    public function getAccessTokenWeb($scope = 'snsapi_base', $reload = false) {
        $code = isset($_REQUEST['code']) ? $_REQUEST['code'] : '';
        if ($reload) {
            $code = '';
        }
        if (empty($code)) {
            $url = "http://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
            header('location:https://open.weixin.qq.com/connect/oauth2/authorize?appid=' . $this->appid . '&redirect_uri=' . $url . '&response_type=code&scope=' . $scope . '&state=1234#wechat_redirect');
            die;
        }
        $param = array(
            'appid' => $this->appid,
            'secret' => $this->secret,
            'code' => $code,
            'grant_type' => 'authorization_code',
        );
        $url = "{$this->oauthApiURL}/oauth2/access_token";
        $token = self::http($url, $param);
        $token = json_decode($token, true);
        if ($token['errcode']) {
            $this->getAccessTokenWeb($scope, true);
        }
        cookie('openid_wx', $token['openid'], 3600);
        return $token;
    }

    /**
     * 获取用户信息
     */
    public function getUserinfo() {
        $access_token = $this->getAccessTokenWeb('snsapi_userinfo');
        $param = array(
            'access_token' => $access_token['access_token'],
            'openid' => $access_token['openid'],
        );
        $url = $this->oauthApiURL . "/userinfo";
        $userinfo = self::http($url, $param);
        $userinfo = json_decode($userinfo, true);
        if ($userinfo['errcode']) {
            dump($userinfo);
            die;
        } else {
            $userinfo['nickname'] = $this->jsonName($userinfo['nickname']);
        }
        return $userinfo;
    }

    /**
     * 获取access_token，用于后续接口访问
     * @return array access_token信息，包含 token 和有效期
     */
    public function getAccessToken($cache = true) {
        if (cache('access_token_wx') && $cache) {
            return cache('access_token_wx');
        }
        $param = array(
            'appid' => $this->appid,
            'secret' => $this->secret,
            'grant_type' => 'client_credential'
        );
        $url = "{$this->apiURL}/token";
        $token = self::http($url, $param);
        $token = json_decode($token, true);
        if (isset($token['access_token'])) {
            cache('access_token_wx', $token['access_token'], 3600);
            return $token['access_token'];
        } else {
            return '';
        }
    }

    /**
     * 调用微信api获取响应数据
     * @param  string $name   API名称
     * @param  string $data   POST请求数据
     * @param  string $method 请求方式
     * @param  string $param  GET请求参数
     * @return array          api返回结果
     */
    public function api($name, $param = '', $data = '', $method = 'GET', $apiurl = 'https://api.weixin.qq.com/cgi-bin') {
        if (is_array($name)) {
            $param = $data = $name['data'];
            $method = isset($name['method']) ? isset($name['method']) : 'GET';
            $apiurl = $name['url'];
            $name = $name['name'];
        }
        $access_token = $this->getAccessToken();
        $params = array('access_token' => $access_token);

        if (!empty($param) && is_array($param)) {
            $params = array_merge($params, $param);
        }

        $url = "{$apiurl}/{$name}";
        if (!empty($data)) {
            //保护中文，微信api不支持中文转义的json结构
            array_walk_recursive($data, function(&$value) {
                $value = urlencode($value);
            });
            $data = urldecode(json_encode($data));
        }
        $data = self::http($url, $params, $data, $method);
        $data = json_decode($data, true);
        if (isset($data['errcode'])) {
            $params['access_token'] = $this->getAccessToken(false);
            $data = self::http($url, $params, $data, $method);
            $data = json_decode($data, true);
        }
        return $data;
    }

    /**
     * 发送HTTP请求方法，目前只支持CURL发送请求
     * @param  string $url    请求URL
     * @param  array  $param  GET参数数组
     * @param  array  $data   POST的数据，GET请求时该参数无效
     * @param  string $method 请求方法GET/POST
     * @return array          响应数据
     */
    protected static function http($url, $param, $data = '', $method = 'GET') {
        $opts = array(
            CURLOPT_TIMEOUT => 30,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false,
        );

        /* 根据请求类型设置特定参数 */
        $opts[CURLOPT_URL] = $url . '?' . http_build_query($param);

        if (strtoupper($method) == 'POST') {
            $opts[CURLOPT_POST] = 1;
            $opts[CURLOPT_POSTFIELDS] = $data;

            if (is_string($data)) { //发送JSON数据
                $opts[CURLOPT_HTTPHEADER] = array(
                    'Content-Type: application/json; charset=utf-8',
                    'Content-Length: ' . strlen($data),
                );
            }
        }

        /* 初始化并执行curl请求 */
        $ch = curl_init();
        curl_setopt_array($ch, $opts);
        $data = curl_exec($ch);
        $error = curl_error($ch);
        curl_close($ch);

        //发生错误，抛出异常
        //if($error) throw new \Exception('请求发生错误：' . $error);

        return $data;
    }

    /**
     * @description 过滤用户昵称里面的特殊字符
     * @param $str 用户名
     * @return string
     */
    public function jsonName($str) {
        if ($str) {
            $tmpStr = json_encode($str);
            $tmpStr2 = preg_replace("#(\\\ud[0-9a-f]{3})#ie", "", $tmpStr);
            $return = json_decode($tmpStr2);
            if (!$return) {
                $return = jsonName($return);
            }
        } else {
            $return = '匿名';
        }
        return empty($return) ? '匿名' : $return;
    }

}

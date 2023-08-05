<?php

namespace app\admin\controller;

use controller\BasicAdmin;
use service\FileService;
use think\Db;
use think\exception\ErrorException;

/**
 * 插件助手控制器
 * Class Plugs
 * @package app\admin\controller
 * @author ITLANJING <itlanjing@qq.com>
 * @date 2017/02/21
 */
class Plugs extends BasicAdmin {

    /**
     * 文件上传
     * @return \think\response\View
     */
    public function upfile() {
        $uptype = $this->request->get('uptype');
        if (!in_array($uptype, ['local', 'qiniu', 'oss'])) {
            $uptype = sysconf('storage_type');
        }
        $mode = $this->request->get('mode', 'one');
        $types = $this->request->get('type', 'jpg,png');
        $this->assign('mimes', FileService::getFileMine($types));
        $this->assign('field', $this->request->get('field', 'file'));
        return view('', ['mode' => $mode, 'types' => $types, 'uptype' => $uptype]);
    }

    /**
     * 通用文件上传
     * @return \think\response\Json
     */
    public function upload() {
        $file = $this->request->file('file');
        $ext = strtolower(pathinfo($file->getInfo('name'), 4));
        $ext_tmp = strtolower(substr(strrchr($file->getInfo('name'), '.'), 1));
        if ($ext != $ext_tmp) {
            return ['code' => 'ERROR', 'msg' => '文件上传类型受限'];
        }

        // 限制文件类型
        if (in_array($ext, ['php', 'php5', 'php4', 'php3', 'php2', 'html', 'phtml', 'pht', 'htm', 'asp', 'asa', 'aspx']) || !in_array(strtolower($ext), explode(',', strtolower(sysconf('storage_local_exts'))))) {
            return ['code' => 'ERROR', 'msg' => '文件上传类型受限'];
        }

        if ($ext == "ico") {
            $ext = "ico";
        } elseif ($ext == "gif") {
            $ext = "gif";
        } elseif ($ext == "apk") {
            $ext = "apk";
        } elseif ($ext == "ipa") {
            $ext = "ipa";
        } elseif ($ext == "mp4") {
            $ext = "mp4";
        } elseif ($ext == "mp3") {
            $ext = "mp3";
        } elseif ($ext == "jpg") {
            $ext = "jpg";
        } elseif ($ext == "jpeg") {
            $ext = "jpeg";
        } else {
            $ext = "png";
        }

        $md5 = str_split($file->hash('md5'), 16);
        $filename = join('/', $md5) . ".{$ext}";
        // 文件上传Token验证
        if ($this->request->post('token') !== md5($filename . session_id())) {
            return json(['code' => 'ERROR', 'msg' => '文件上传验证失败']);
        }

        $result = FileService::save($filename, file_get_contents($file->getInfo('tmp_name')));

        if ($result) {
            return json(['data' => ['site_url' => $result['url']], 'code' => 'SUCCESS', 'msg' => '文件上传成功']);
        } else {
            return json(['code' => 'ERROR', 'msg' => '文件上传失败']);
        }
    }

    /**
     * （上传文件前）检查文件是否已经上传过
     */
    public function upstate() {
        $post = $this->request->post();
        $filename = join('/', str_split($post['md5'], 16)) . '.' . pathinfo($post['filename'], PATHINFO_EXTENSION);
        // 检查文件是否已上传
        if (($site_url = FileService::getFileUrl($filename))) {
            $this->result(['site_url' => $site_url], 'IS_FOUND');
        }
        // 需要上传文件，生成上传配置参数
        $config = ['uptype' => sysconf("storage_type"), 'file_url' => $filename];
        switch (strtolower(sysconf("storage_type"))) {
            case 'qiniu':
                $config['server'] = FileService::getUploadQiniuUrl(true);
                $config['token'] = $this->_getQiniuToken($filename);
                break;
            case 'local':
                $config['server'] = FileService::getUploadLocalUrl();
                $config['token'] = md5($filename . session_id());
                break;
            case 'oss':
                $time = time() + 3600;
                $policyText = [
                    'expiration' => date('Y-m-d', $time) . 'T' . date('H:i:s', $time) . '.000Z',
                    'conditions' => [['content-length-range', 0, 1048576000]],
                ];
                $config['policy'] = base64_encode(json_encode($policyText));
                $config['server'] = FileService::getUploadOssUrl();
                $config['site_url'] = FileService::getBaseUriOss() . $filename;
                $config['signature'] = base64_encode(hash_hmac('sha1', $config['policy'], sysconf('storage_oss_secret'), true));
                $config['OSSAccessKeyId'] = sysconf('storage_oss_keyid');
        }
        $this->result($config, 'NOT_FOUND');
    }

    /**
     * 生成七牛文件上传Token
     * @param string $key
     * @return string
     */
    protected function _getQiniuToken($key) {
        $host = sysconf('storage_qiniu_domain');
        $bucket = sysconf('storage_qiniu_bucket');
        $accessKey = sysconf('storage_qiniu_access_key');
        $secretKey = sysconf('storage_qiniu_secret_key');
        $protocol = sysconf('storage_qiniu_is_https') ? 'https' : 'http';
        $params = [
            "scope" => "{$bucket}:{$key}", "deadline" => 3600 + time(),
            "returnBody" => "{\"data\":{\"site_url\":\"{$protocol}://{$host}/$(key)\",\"file_url\":\"$(key)\"}, \"code\": \"SUCCESS\"}",
        ];
        $data = str_replace(['+', '/'], ['-', '_'], base64_encode(json_encode($params)));
        return $accessKey . ':' . str_replace(['+', '/'], ['-', '_'], base64_encode(hash_hmac('sha1', $data, $secretKey, true))) . ':' . $data;
    }

    /**
     * 字体图标选择器
     * @return \think\response\View
     */
    public function icon() {
        $field = $this->request->get('field', 'icon');
        return view('', ['field' => $field]);
    }

}

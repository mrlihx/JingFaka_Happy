<?php

/**
 * 通用资源
 */

namespace app\index\controller;

use think\Controller;
use Endroid\QrCode\QrCode;
use service\CoreService;
use app\common\model\User as UserModel;

class Resource extends Controller {

    /**
     * 生成二维码
     */
    public function generateQrcode() {
        $str = html_entity_decode(urldecode(input('str/s', '')));
        $size = input('size/f', 200);
        $padding = input('padding/f', 0);
        if (!$str) {
            return J(101, '请输入要生成二维码的字符串！');
        }
        header('Content-type: image/png');
        $qrCode = new QrCode($str);
        if ($size > 200) {
            $size = 200;
        }
        $qrCode->setSize($size);
        $qrCode->setPadding($padding);
        $qrCode->render();
        die;
    }

    public function musicDetail() {
        $id = input('id', 0);
        $data = CoreService::musicDetail($id);
        return json($data);
    }

    public function userAvatar() {
        $id = input('id/d');
        $user = UserModel::where(['id' => $id])->find();
        header('Content-type: image/png');
        echo file_get_contents("https://q1.qlogo.cn/g?b=qq&nk={$user->qq}&s=100&t=");
        die;
    }

}

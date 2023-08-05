<?php

namespace app\common\util\notify;

use think\Log;

/**
 * 登陆通知
 * @package app\common\notify
 */
class Signin {

    public function notify($user, $ip) {
        $title = "您好，您的帐号 " . $user['username'] . "被登录";
        $content = "如果本次登录不是您本人所为，说明您的帐号已经被盗！为减少您的损失，请进入会员中心修改密码。";
        if ($user['wechat_signin_notify'] && sysconf('wechat_signin_template')) {

            if ($user['openid']) {
                $wechat = &load_wechat('Message');
                $wechat->sendTemplateMessage([
                    'touser' => $user['openid'],
                    'template_id' => sysconf('wechat_signin_template'),
                    'url' => sysconf('site_domain') . '/merchant/user/loginlog',
                    'data' => [
                        'first' => ['value' => $title],
                        'time' => ['value' => date('Y-m-d H:i:s')],
                        'ip' => ['value' => $ip],
                        'reason' => ['value' => $content]
                    ],
                ]);
            }
        }
    }

}

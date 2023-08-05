<?php

namespace app\common\util\notify;

use think\Log;

/**
 * 投诉通知
 * @package app\common\notify
 */
class Complaint {

    public function notify($user, $orderid) {
        //站内信，邮件通知
        $title = "投诉单号:{$orderid}";
        $content = "请登录会员中心处理您的投诉，如24小时内不处理，我们将判为买家胜诉";

        sendMessage(0, $user['id'], "收到订单投诉", "订单：" . $orderid . "已被买家投诉，请及时处理！");
        try {
            sendMail($user['email'], '【' . sysconf('site_name') . '】' . $title, $content, '', true);
        } catch (\Exception $e) {
            Log::record("投诉提醒邮件发送失败：" . $e->getMessage() . '。 ' . $user['email'] . '【' . sysconf('site_name') . '】' . $title . ' | ' . $content, Log::ERROR);
        }

        if ($user['wechat_complaint_notify'] && sysconf('wechat_complaint_template')) {

            if ($user['openid']) {
                $wechat = &load_wechat('Message');
                $order = new \app\index\controller\Order();

                $wechat->sendTemplateMessage([
                    'touser' => $user['openid'],
                    'template_id' => sysconf('wechat_complaint_template'),
                    'url' => sysconf('site_domain') . '/Index/order/complaintpass?trade_no=' . $orderid . "&token=" . $order->authcode($orderid),
                    'data' => [
                        'id' => ['value' => $orderid],
                        'type' => ['value' => '商品投诉'],
                        'remark' => ['value' => '请登录会员中心处理您的投诉，如24小时内不处理，我们将判为买家胜诉']
                    ],
                ]);
            }
        }
    }

    public function parent_notify($user, $orderid) {
        //站内信，邮件通知
        $title = "投诉单号:{$orderid}";
        $content = "请登录会员中心处理您的投诉，如24小时内不处理，我们将判为买家胜诉";

        sendMessage(0, $user['id'], "收到下级代理订单投诉", "订单：" . $orderid . "已被买家投诉，请及时处理！");
        try {
            sendMail($user['email'], '【' . sysconf('site_name') . '】' . $title, $content, '', true);
        } catch (\Exception $e) {
            Log::record("投诉提醒邮件发送失败：" . $e->getMessage() . '。 ' . $user['email'] . '【' . sysconf('site_name') . '】' . $title . ' | ' . $content, Log::ERROR);
        }

        if ($user['wechat_complaint_notify'] && sysconf('wechat_complaint_template')) {

            if ($user['openid']) {
                $wechat = &load_wechat('Message');
                $order = new \app\index\controller\Order();

                $wechat->sendTemplateMessage([
                    'touser' => $user['openid'],
                    'template_id' => sysconf('wechat_complaint_template'),
                    'url' => sysconf('site_domain') . '/Index/order/complaintpass?trade_no=' . $orderid . "&token=" . $order->authcode($orderid),
                    'data' => [
                        'id' => ['value' => $orderid],
                        'type' => ['value' => '商品投诉'],
                        'remark' => ['value' => '请登录会员中心处理您的投诉，如24小时内不处理，我们将判为买家胜诉']
                    ],
                ]);
            }
        }
    }

}

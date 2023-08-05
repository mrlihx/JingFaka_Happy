<?php

namespace app\common\util\notify;

use app\common\util\Sms;
use think\Db;

/**
 * 售出通知
 * Class Sell
 * @package app\common\notify
 */
class Sell {

    /**
     * @param $order
     * @param $freezeMoney
     * @throws \Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function notify($order, $freezeMoney) {
        // 售出通知
        $domain = \think\Request::instance()->domain() . '/orderquery?orderid=' . $order->trade_no;
        // 通知卖家
        if ($order->sold_notify == 1) {
            sendMail(
                    $order->user->email, '【' . sysconf('site_name') . "】尊敬的用户，您托管销售的[{$order->goods_name}]商品成功出售！", "订单号：{$order->trade_no}<a href=\"{$domain}\" target=\"_blank\">[查看详细]</a><br>数量：{$order->quantity}<br>总价：{$order->total_price}<br>联系方式：{$order->contact}"
            );
        }
        // 通知买家客户
        if ($order->email_notify == 1) { // 邮件通知
            if (\think\Validate::is($order->email, 'email')) {
                sendMail($order->email, '【' . sysconf('site_name') . '】您的订单已支付成功', "您的订单已支付成功，订单号：{$order->trade_no}<a href=\"{$domain}\" target=\"_blank\">[查看详细]</a><br>，若您付款成功后没有领取虚拟卡信息，请您及时通过订单查询提取。");
            }
        }
        if ($order->sms_notify == 1) { // 短信通知
            if (is_mobile_number($order->contact)) {
                $sms = new Sms();
                $sms->sendOrderRemind($order->contact, $order->trade_no);
            }
        }

        $user = Db::name('user')->field('openid,wechat_sell_notify')->where(['id' => $order['user_id']])->find();
        if ($user['wechat_sell_notify'] && sysconf('wechat_sell_template')) {
            if ($user['openid']) {
                $wechat = &load_wechat('Message');
                $wechat->sendTemplateMessage([
                    'touser' => $user['openid'],
                    'template_id' => sysconf('wechat_sell_template'),
                    'url' => sysconf('site_domain') . '/merchant/order/index?type=0&keywords=' . $order->trade_no,
                    'data' => [
                        'first' => ['value' => '您有新订单售出啦'],
                        'keyword1' => ['value' => $order->total_price],
                        'keyword2' => ['value' => $order->goods_name],
                        'keyword3' => ['value' => date('Y-m-d H:i:s')],
                        'keyword4' => ['value' => $order->trade_no],
                        'remark' => ['value' => '如果买家需要售后，请及时处理哦']
                    ],
                ]);
            }
        }


        if ($order->goods->is_proxy && $order->proxy->user) {
            $parent_user = $order->proxy->user;
            if ($parent_user['wechat_sell_notify'] && sysconf('wechat_sell_template')) {
                if ($parent_user['openid']) {
                    $wechat = &load_wechat('Message');
                    $wechat->sendTemplateMessage([
                        'touser' => $parent_user['openid'],
                        'template_id' => sysconf('wechat_sell_template'),
                        'url' => sysconf('site_domain') . '/merchant/agent/proxyorder?type=0&keywords=' . $order->trade_no,
                        'data' => [
                            'first' => ['value' => '您有新订单售出啦【代理订单】'],
                            'keyword1' => ['value' => $order->total_price],
                            'keyword2' => ['value' => $order->goods_name],
                            'keyword3' => ['value' => date('Y-m-d H:i:s')],
                            'keyword4' => ['value' => $order->trade_no],
                            'remark' => ['value' => '如果买家需要售后，请及时处理哦']
                        ],
                    ]);
                }
            }
        }
    }

}

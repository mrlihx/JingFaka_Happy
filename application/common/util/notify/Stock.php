<?php

namespace app\common\util\notify;

use think\Log;

/**
 * 库存通知
 * Class Stock
 * @package app\common\notify
 */
class Stock {

    /**
     * @param $user
     * @param $goods
     * @throws \Exception
     */
    public function notify($user, $goods) {
        //站内信，邮件通知
        $title = "商品{$goods->name}库存不足，请及时添加";
        $content = "商品：{$goods->name}，库存不足{$goods->inventory_notify}张";
        if ($goods->inventory_notify_type == 1) {
            // 发送站内信
            sendMessage(0, $goods->user->id, $title, $content);
        } else {
            // 发送邮件
            try {
                sendMail($user->email, '【' . sysconf('site_name') . '】' . $title, $content, '', true);
            } catch (\Exception $e) {
                Log::record("库存提醒邮件发送失败：" . $e->getMessage() . '。 ' .
                        $goods->user->email . '【' . sysconf('site_name') . '】' . $title . ' | ' . $content, Log::ERROR);
            }
        }

        if ($user['wechat_stock_notify'] && sysconf('wechat_stock_template')) {
            if ($user->openid) {
                $wechat = &load_wechat('Message');
                $wechat->sendTemplateMessage([
                    'touser' => $user->openid,
                    'template_id' => sysconf('wechat_stock_template'),
                    'url' => sysconf('site_domain') . '/merchant/goods/index?name=' . $goods->name,
                    'data' => [
                        'first' => ['value' => '您有一件商品库存不足啦'],
                        'keyword1' => ['value' => $goods->cards_stock_count],
                        'keyword2' => ['value' => date('Y-m-d H:i:s')],
                        'keyword3' => ['value' => $goods->inventory_notify],
                        'remark' => ['value' => '请及时补充库存，避免脱销']
                    ],
                ]);
            }
        }
    }

}

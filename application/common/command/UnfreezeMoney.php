<?php

namespace app\common\command;

use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\Db;

/**
 * 自动解冻订单金额（需配置定时任务）
 */
class UnfreezeMoney extends Command {

    protected function configure() {
        $class = new \ReflectionClass(static::class);
        $this->setName("UnfreezeMoney")->setDescription("自动解冻订单金额（需配置定时任务）");
    }

    protected function execute(Input $input, Output $output) {
        echo "========== " . date('Y-m-d H:i:s') . " 自动解冻任务开始 ==========\n";
        $time = time();
        //$rows = Db::table('auto_unfreeze')->where('unfreeze_time < ' . time())->group('user_id')->sum('money')->find();
        $sql = sprintf("select user_id, sum(money) money from auto_unfreeze where unfreeze_time<'%s' AND status = 1 group by user_id", $time);
        $rows = Db::query($sql);
        echo "info: 找到" . count($rows) . "个需要解冻的账户\n";
        foreach ($rows as $row) {
            $this->unfreeze($row['user_id'], $row['money'], $time);
        }
        echo "========== " . date('Y-m-d H:i:s') . " 自动解冻任务结束 ==========\n\n";
    }

    private function unfreeze($userId, $money, $time) {
        try {
            // 解冻
            Db::startTrans();
            $user = Db::table('user')->where('id', $userId)->lock(true)->find();
            if (!$user) {
                throw new \Exception("找不到用户 userId: " . $userId);
            }
            if ($user['freeze_money'] < $money) {
                echo 'warning: 用户冻结余额不足！userId: ' . $userId . '，用户冻结余额' . $user['freeze_money'] . '，欲解冻金额: ' . $money . "，已自动调整解冻金额\n";
                //当前不可解冻队列总额
                $no_freeze_money_sum = Db::table('auto_unfreeze')->where(['user_id' => $userId, 'unfreeze_time' => ['egt', $time]])->sum('money');
                if ($no_freeze_money_sum > 0) {
                    $money = $user['freeze_money'] - $no_freeze_money_sum;
                } else {
                    $money = $user['freeze_money'];
                }
            }
            if ($money > 0) {
                Db::table('user')->where('id', $userId)->update(['money' => Db::raw('money+' . $money), 'freeze_money' => Db::raw('freeze_money-' . $money)]);
                // 记录用户金额变动日志
                record_user_money_log('unfreeze', $user['id'], $money, $user['money'] + $money, "订单金额T+1日自动解冻，解冻金额：{$money}元");

                // 删除自动解冻队列
                Db::table('auto_unfreeze')->where("user_id={$userId} and unfreeze_time<'{$time}' AND status = 1")->delete();

                Db::commit();

                echo "info: 成功解冻 userId:{$userId} money:{$money}\n";
            } else {
                Db::rollback();
            }
        } catch (\Exception $e) {
            Db::rollback();
            echo 'error: T+1自动解冻失败：' . $e->getMessage() . " userId:" . $userId . "\n";
        }
    }

}

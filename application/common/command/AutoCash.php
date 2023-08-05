<?php

namespace app\common\command;

use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\Db;
use think\Exception;
use think\Log;

/**
 * 自动提现任务，配合定时任务执行
 */
class AutoCash extends Command {

    private $lockFileName;

    protected function configure() {
        $this->lockFileName = LOG_PATH . 'auto_cash.log';
        $this->setName('AutoCash')->setDescription('自动提现');
    }

    /**
     * 执行命令
     * @param Input  $input
     * @param Output $output
     * @return void
     */
    protected function execute(Input $input, Output $output) {
        $this->autoCash();
    }

    //自动提现触发
    protected function autoCash() {
        $triggerTime = time();

        echo "info: 自动提现任务开始执行\n";
        //获取上次触发时间
        $lockFileHandler = fopen($this->lockFileName, "a+");
        if (!flock($lockFileHandler, LOCK_EX | LOCK_NB)) { // acquire an exclusive lock
            echo "info: 自动提现任务，获取锁失败，自动退出\n";
            return;
        }
        rewind($lockFileHandler);
        $lastTriggerTime = fgets($lockFileHandler);

        //今天0时时间
        $todayTime = strtotime(date('Y-m-d'));
        //每天自动提现时间
        $auto_cash_time = intval(sysconf('auto_cash_time'));
        $auto_cash_time = strtotime(date('Y-m-d') . ' ' . $auto_cash_time . ':0');

        if (!empty($lastTriggerTime) && $lastTriggerTime > $todayTime) {
            echo "info: 今日已执行过此任务，如果强制执行请先删除锁文件/runtime/log/auto_cash.log后执行\n";
        }
        //已开启提现和自动提现，今天未提现，同时到达设定的自动提现时间
        if ((empty($lastTriggerTime) || $lastTriggerTime < $todayTime) && sysconf('cash_status') == 1 && sysconf('auto_cash') == 1 && time() > $auto_cash_time) {
            echo "info: 自动提现任务执行中\n";

            $leastCashMoney = (int) sysconf('auto_cash_money');

            //有收款信息的才能提现
            $collects = Db::query("select `user_id` from `user_collect`");
            if (empty($collects)) {
                return;
            }

            foreach ($collects as $collectInfo) {
                $userId = $collectInfo['user_id'];

                // 申请提现
                try {
                    Db::startTrans();
                    $users = Db::query("select * from `user` where `id`={$userId} and `is_freeze`=0 and `money`>={$leastCashMoney} limit 1 for update");
                    if (empty($users) || empty($users[0])) {
                        throw new Exception("用户不存在", 10001);
                    }
                    $user = $users[0];

                    // 用户选择了自动提现，或跟随系统提现
                    if ($user['cash_type'] == 1 || $user['cash_type'] == 3) {
                        Log::record("自动提现：user:" . $user['id'] . ', money:' . $user['money'], Log::INFO);

                        // 今日可提现次数

                        $todayCount = Db::table('cash')->where(['user_id' => $user['id'], 'create_at' => ['>=', $todayTime]])->count();
                        $limitNum = (int) sysconf('cash_limit_num');
                        $todayCanCashNum = $limitNum - $todayCount;
                        $todayCanCashNum = $todayCanCashNum < 0 ? 0 : $todayCanCashNum;

                        // 检测今日提现次数
                        if ($todayCanCashNum > 0) {
                            $money = $user['money'];
                            // 收款信息
                            $collect_info = '';
                            $collect = Db::table('user_collect')->where('user_id', $user['id'])->find();
                            if (!$collect) {
                                echo "info: 自动提现失败：用户收款信息不存在，user_id: " . $user['id'] . "\n";
                                throw new Exception("自动提现失败：用户收款信息不存在，user_id: " . $user['id'], 10002);
                            }
                            $collectInfo2 = json_decode($collect['info'], true);
                            switch ($collect['type']) {
                                case 1: //支付宝
                                    $collect_info .= "支付宝账号：{$collectInfo2['account']}<br>";
                                    $collect_info .= "真实姓名：{$collectInfo2['realname']}<br>";
                                    $collect_info .= "身份证号：{$collectInfo2['idcard_number']}";
                                    break;
                                case 2: //微信
                                    $collect_info .= "微信账号：{$collectInfo2['account']}<br>";
                                    $collect_info .= "真实姓名：{$collectInfo2['realname']}<br>";
                                    $collect_info .= "身份证号：{$collectInfo2['idcard_number']}";
                                    break;
                                case 3: //银行
                                    $collect_info .= "开户银行：{$collectInfo2['bank_name']}<br>";
                                    $collect_info .= "开户地址：{$collectInfo2['bank_branch']}<br>";
                                    $collect_info .= "收款账号：{$collectInfo2['bank_card']}<br>";
                                    $collect_info .= "真实姓名：{$collectInfo2['realname']}<br>";
                                    $collect_info .= "身份证号：{$collectInfo2['idcard_number']}";
                                    break;
                            }

                            //如果减后金额小于0，会抛异常
                            Db::execute("update `user` set `money`=`money`-{$money} where `id`={$user['id']} limit 1");

                            $users = Db::query("select * from `user` where `id`={$user['id']} limit 1");
                            $user = $users[0];

                            // 记录用户金额变动日志
                            $reason = "申请提现金额{$money}元";
                            record_user_money_log('apply_cash', $user['id'], -$money, $user['money'], $reason);
                            // 获取提现手续费
                            $fee = get_auto_cash_fee($money);
                            // 记录提现日志
                            $cashData = [
                                'user_id' => $user['id'],
                                'type' => $collect['type'],
                                'collect_info' => $collect_info,
                                'collect_img' => $collect['collect_img'],
                                'auto_cash' => 1,
                                'money' => $money,
                                'fee' => $fee,
                                'actual_money' => round($money - $fee, 2),
                                'status' => 0,
                                'create_at' => time(),
                            ];

                            switch (intval($collect['type'])) {
                                case 2:
                                case 1:
                                    $cashData = array_merge($cashData, [
                                        'bank_card' => $collectInfo2['account'],
                                        'realname' => $collectInfo2['realname'],
                                        'idcard_number' => $collectInfo2['idcard_number'],
                                    ]);
                                    break;
                                case 3:
                                    $cashData = array_merge($cashData, [
                                        'bank_name' => $collectInfo2['bank_name'],
                                        'bank_branch' => $collectInfo2['bank_branch'],
                                        'bank_card' => $collectInfo2['bank_card'],
                                        'realname' => $collectInfo2['realname'],
                                        'idcard_number' => $collectInfo2['idcard_number'],
                                    ]);
                                    break;
                            }

                            Db::table('cash')->insert($cashData);

                            echo "info: 自动提现成功：user:" . $user['id'] . ', money:' . $money . "\n";
                        }
                    }
                    Db::commit();
                } catch (\Exception $e) {
                    Db::rollback();
                    $money = isset($money) ? $money : 0;
                    if ($e->getCode() != 10001 && $e->getCode() != 10002) {
                        echo "info: 自动提现失败，user: {$userId}, money: {$money}, 原因：" . $e->getMessage() .
                        "，\n错误文件：" . $e->getFile() . "，第" . $e->getLine() . "行" .
                        "\nTrace：" . $e->getTraceAsString() . "\n";
                    }
                };
            }

            ftruncate($lockFileHandler, 0);
            fwrite($lockFileHandler, $triggerTime);
            fflush($lockFileHandler); // flush output before releasing the lock
            flock($lockFileHandler, LOCK_UN); // release the lock
        }
        $timeUsed = time() - $triggerTime;
        echo "info: 自动提现任务执行完成，用时：" . $timeUsed . "\n";
    }

}

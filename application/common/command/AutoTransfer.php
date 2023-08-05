<?php

namespace app\common\command;

use app\common\model\Cash as CashModel;
use app\common\model\CashChannel as CashChannel;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\Db;
use think\Exception;
use think\Log;

/**
 * Description of AutoTransfer
 *
 * @author Admin
 */
class AutoTransfer extends Command {

    private $users_id = ""; //多个用户逗号隔开，不填代表所有
    private $channel_id = ""; //代付渠道ID（代付渠道管理查看）

    protected function configure() {
        $this->setName('AutoTransfer')->setDescription('支付宝全自动打款');
    }

    /**
     * 执行命令
     * @param Input  $input
     * @param Output $output
     * @return void
     */
    protected function execute(Input $input, Output $output) {
        $this->autoTransfer();
    }

    public function autoTransfer() {

        if (sysconf('cash_auto_status') == 0) {
            echo "info: 支付宝全自动打款未开启\n";
            die;
        }

        $channel_id = sysconf('cash_auto_channel_id');

        $cashChannel = CashChannel::get(['id' => $channel_id]);
        if (!$cashChannel) {
            echo "info: 代付渠道不存在，自动退出\n";
            die;
        }

        $user_ids = sysconf('cash_auto_user');


        if ($user_ids == "") {
            $cashs = CashModel::where(['status' => 0, 'type' => $cashChannel->type])->select();
        } else {

            $temp_ids = explode(",", $user_ids);
            foreach ($temp_ids as $ids) {
                if (!is_integer(intval($ids))) {
                    echo "info: 商户格式不正确\n";
                    die;
                }
            }

            $cashs = CashModel::where(['status' => 0, 'user_id' => ['in', $user_ids], 'type' => $cashChannel->type])->select();
        }

        foreach ($cashs as $cash) {

            // 检查打款
            if ($cash->status == 1) {
                continue;
            }

            $channel = CashChannel::get($channel_id);
            if ($channel->status != 1) {
                echo "info: 代付渠道已关闭，跳过操作\n";
                continue;
            }

            //检查有没有可用的账号
            $accounts = $channel->accounts()->where(['channel_id' => $channel->id, 'status' => 1])->select();
            if (empty($accounts)) {
                echo "不存在代付渠道：" . $channel->title . "的账号！跳过操作\n";
                continue;
            }

            $account = $accounts[0];
            if (count($accounts) > 1) {
                $account = $accounts[intval(floor(rand(0, count($accounts) - 1)))];
            }

            if (!$account) {
                echo "不存在代付渠道：" . $channel->title . "的账号！跳过操作\n";
                continue;
            }

            try {
                Db::startTrans();
                //更新代付账号到提现记录中
                $cash->account = $account->id;
                $cash->orderid = generate_trade_no('TX');
                $cash->save();

                //尝试代付
                $class = '\\app\\common\\payment\\' . $channel->code;
                $obj = new $class($account);
                $res = $obj->pay($cash);
                if ($res === true) {
                    //标记已经申请了代付
                    $cash->daifu_status = 1;
                    if ($channel->code == 'AliTransfer' || $channel->code == 'AliNewTransfer') {
                        $cash->status = 1;
                        $cash->complete_at = time();
                    }
                    $cash->save();
                    Db::commit();

                    echo "提现ID：" . $cash->id . "打款提交成功\n";
                } else {
                    Db::rollback();
                    echo "提现ID：" . $cash->id . "打款失败" . $res['msg'] . "\n";
                }
            } catch (Exception $e) {
                Db::rollback();
                echo "提现ID：" . $cash->id . "打款失败" . $e->getMessage() . "\n";
            }
        }
    }

}

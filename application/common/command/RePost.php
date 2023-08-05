<?php

namespace app\common\command;

use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\Db;
use think\Exception;
use think\Log;
use app\common\model\OrderApi as OrderApiModel;
use service\PayService;

/**
 * API订单补发任务计划
 */
class RePost extends Command {

    protected function configure() {
        $this->setName('RePost')->setDescription('回调补发');
    }

    /**
     * 执行命令
     * @param Input  $input
     * @param Output $output
     * @return void
     */
    protected function execute(Input $input, Output $output) {
        $this->repost();
        $output->writeln('success');
    }

    protected function repost() {
        $nums = 5;
        $list = OrderApiModel::where('status', '=', 1)->where('notify_status', '=', 0)->where('repost_count', "<", $nums)->where('last_reissue_time', "<", time() - 10)->order('id asc')->limit(100)->select();
        if ($list) {
            foreach ($list as $order) {
                $order->rePost($order);
            }
        }
    }

}

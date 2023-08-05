<?php

namespace app\common\command;

use think\console\Command;
use think\console\Input;
use think\console\Output;
use app\common\util\codepay\Codepay as CodepayLib;
use think\Db;
use Exception;

/**
 * 码支付务计划
 */
class CodePay extends Command {

    protected function configure() {
        $this->setName('CodePay')->setDescription('码支付任务计划');
    }

    /**
     * 执行命令
     * @param Input  $input
     * @param Output $output
     * @return void
     */
    protected function execute(Input $input, Output $output) {
        $codepay = new CodepayLib();
        echo $codepay->runTask();
        $output->writeln('----END');

    }

}

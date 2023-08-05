<?php

namespace app\common\command;

use app\common\model\Goods;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\Db;
use think\Exception;
use think\Log;

/**
 * 自动清理删除超过十五天的商品
 * Class AutoEmptyGoodsTrash
 * @package app\home\command
 */
class AutoEmptyGoodsTrash extends Command {

    protected function configure() {
        $this->setName('AutoEmptyGoodsTrash')->setDescription('自动清理删除超过十五天的商品');
    }

    protected function execute(Input $input, Output $output) {
        $this->AutoEmpty();
    }

    /**
     * 清理商品
     * @throws \think\Exception
     * @throws \think\exception\PDOException
     */
    protected function AutoEmpty() {
        $now = time();
        $limit = strtotime('-15 days', $now);

        $goods = Goods::onlyTrashed()->where(['delete_at' => ['<', $limit]])->select();

        if ($goods) {
            foreach ($goods as $v) {
                try {
                    DB::startTrans();
                    $res = $v->delete(true);

                    if ($res) {
                        Log::record("自动清理回收站：成功删除商品，商品 ID 为：" . $v->id, Log::INFO);
                        DB::commit();
                    } else {
                        DB::rollback();
                    }
                } catch (Exception $e) {
                    Db::rollback();
                }
            }
        }
    }

}

<?php

namespace app\common\command;

use service\LogService;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\Db;
use think\Log;

/**
 * 自动清理无效订单（3天没有支付的订单视为无效）
 * Class AutoClearExpireOrder
 *
 * @package app\home\command
 */
class AutoClearExpireOrder extends Command {

    protected function configure() {
        $this->setName('AutoClearExpireOrder')->setDescription('自动清理无效订单');
    }

    protected function execute(Input $input, Output $output) {
        $this->AutoEmpty();
    }

    /**
     * 清理
     *
     * @throws \think\Exception
     * @throws \think\exception\PDOException
     */
    protected function AutoEmpty() {
        $now = time();
        $limit = strtotime('-3 days', $now);

        $where = [
            'create_at' => ['<', $limit],
            'status' => 0,
        ];

        $model = 'order';

        //删除前进行一次数据备份
        $this->backup($model, $where);
        $count = Db::name($model)->where($where)->count();
        $res = Db::name($model)->where($where)->delete();

        if ($res) {
            LogService::write('数据管理', '自动删除无效订单成功，删除数量：' . $count);
            Log::record("自动删除无效订单成功，删除数量：" . $count, Log::INFO);
        }
    }

    /**
     * 备份数据
     *
     * @param $model
     * @param $where
     *
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    protected function backup($model, $where) {
        $count = Db::name($model)->where($where)->count('id');
        if ($count < 5000) {
            $datas = Db::name($model)->where($where)->select();
            foreach ($datas as $data) {
                $keys = array_keys($data);
                $values = [];

                foreach ($keys as $key) {
                    $values[] = $data[$key];
                }

                $keys = join('`,`', $keys);
                $keys = "`" . $keys . "`";

                $values = array_map(function ($v) {
                    return htmlspecialchars($v);
                }, $values);
                $values = join('\',\'', $values);
                $values = "'" . $values . "'";


                $mysql = '';
                $mysql .= "INSERT INTO `$model`($keys) VALUES($values);\r\n";

                if (!is_dir(ROOT_PATH . 'backup/')) {
                    mkdir(ROOT_PATH . 'backup/', 0755, true);
                }
                file_put_contents(ROOT_PATH . 'backup/' . $model . time() . '.sql', $mysql, FILE_APPEND);
            }
        } else {
            $index = 0;
            while ($index < $count) {
                $datas = Db::name($model)->where($where)->limit($index, 5000)->select();
                foreach ($datas as $data) {
                    $keys = array_keys($data);
                    $values = [];

                    foreach ($keys as $key) {
                        $values[] = $data[$key];
                    }

                    $keys = join('`,`', $keys);
                    $keys = "`" . $keys . "`";

                    $values = array_map(function ($v) {
                        return htmlspecialchars($v);
                    }, $values);
                    $values = join('\',\'', $values);
                    $values = "'" . $values . "'";


                    $mysql = '';
                    $mysql .= "INSERT INTO `$model`($keys) VALUES($values);\r\n";

                    if (!is_dir(ROOT_PATH . 'backup/')) {
                        mkdir(ROOT_PATH . 'backup/', 0755, true);
                    }
                    file_put_contents(ROOT_PATH . 'backup/' . $model . time() . '.sql', $mysql, FILE_APPEND);
                }
                $index += 5000;
            }
        }
    }

}

<?php

/**
 * 日志记录
 */

namespace app\manage\controller;

use controller\BasicAdmin;
use think\Db;
use app\common\model\User as UserModel;
use app\common\model\Order as OrderModel;
use app\common\model\UserMoneyLog as UserMoneyLogModel;

class Log extends BasicAdmin {

    public function user_money() {
        $this->assign('title', '金额变动记录');
        ////////////////// 查询条件 //////////////////
        $query = [
            'user_id' => input('user_id/s', ''),
            'username' => input('username/s', ''),
            'business_type' => input('business_type/s', ''),
            'type' => input('type/s', ''),
            'date_range' => input('date_range/s', '', 'urldecode'),
        ];
        $where = $this->genereate_where($query);

        $logs = UserMoneyLogModel::with('user')->where($where)->order('id desc')->paginate(30, false, [
            'query' => $query
        ]);
        $this->assign('logs', $logs);
        // 分页
        $page = str_replace('href="', 'href="#', $logs->render());
        $this->assign('page', $page);

        $sum_money = UserMoneyLogModel::where($where)->sum('money');
        $this->assign('sum_money', $sum_money);
        $sum_order = UserMoneyLogModel::where($where)->count();
        $this->assign('sum_order', $sum_order);

        return $this->fetch();
    }

    /**
     * 生成查询条件
     */
    protected function genereate_where($params) {
        $where = [];
        $action = $this->request->action();
        switch ($action) {
            case 'user_money':
                if ($params['business_type']) {
                    $where['business_type'] = $params['business_type'];
                }
                if ($params['user_id'] !== '') {
                    $where['user_id'] = $params['user_id'];
                }
                if ($params['username']) {
                    $where['user_id'] = UserModel::where(['username' => $params['username']])->value('id');
                }
                if ($params['type'] !== '') {
                    if ($params['type'] == 1) {
                        $where['money'] = ['>', 0];
                    } elseif ($params['type'] == -1) {
                        $where['money'] = ['<', 0];
                    } else {
                        $where['money'] = 0;
                    }
                }
                if ($params['date_range'] && strpos($params['date_range'], ' - ') !== false) {
                    list($startDate, $endTime) = explode(' - ', $params['date_range']);
                    $where['create_at'] = ['between', [strtotime($startDate . ' 00:00:00'), strtotime($endTime . ' 23:59:59')]];
                }
                break;
        }
        return $where;
    }

}

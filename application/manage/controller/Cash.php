<?php

/**
 * 提现管理
 */

namespace app\manage\controller;

use app\common\model\Cash as CashModel;
use app\common\model\CashChannel;
use app\common\model\User as UserModel;
use controller\BasicAdmin;
use service\LogService;
use think\Db;
use think\Exception;
use think\Request;
use app\common\util\notify\Cash as CashNotify;
use app\common\model\CashChannel as CashChannelModel;

class Cash extends BasicAdmin {

    public function _initialize() {
        parent::_initialize();
        $this->assign('self_url', '#' . Request::instance()->url());
    }

    /**
     * 获取提现数据
     *
     * @return \think\Paginator
     * @throws \think\exception\DbException
     */
    public function getCashData($needPaginate = true) {
        ////////////////// 查询条件 //////////////////
        $query = [
            'date_type' => input('date_type/s', ''),
            'username' => input('username/s', ''),
            'type' => input('type/s', ''),
            'status' => input('status/s', ''),
            'date_range' => input('date_range/s', '', 'urldecode'),
        ];
        $where = $this->genereate_where($query);

        // 订单列表
        $CashModel = new CashModel;
        if ($needPaginate) {
            $cashs = $CashModel->where($where)->order('id desc')->paginate(20, false, [
                'query' => $query,
            ]);
        } else {
            $cashs = $CashModel->where($where)->order('id desc')->select();
        }

        return $cashs;
    }

    public function index() {
        $this->assign('title', '提现记录列表');

        $cashs = $this->getCashData();

        $CashModel = new CashModel;

        $this->assign('cashs', $cashs);
        // 分页
        $page = str_replace('href="', 'href="#', $cashs->render());
        $this->assign('page', $page);

        //统计数据
        //今日结算总金额
        $beginToday = mktime(0, 0, 0, date('m'), date('d'), date('Y'));
        $endToday = mktime(0, 0, 0, date('m'), date('d') + 1, date('Y')) - 1;
        $stat['todaysum'] = number_format($CashModel->where(['create_at' => ['between', [$beginToday, $endToday]], 'status' => 1])->sum('money'), 2, '.', '');
        //结算总金额
        $stat['totalsum'] = number_format($CashModel->where(['status' => 1])->sum('money'), 2, '.', '');
        //结算手续费
        $stat['totalfee'] = number_format($CashModel->where(['status' => 1])->sum('fee'), 2, '.', '');
        //实结金额
        $stat['totalactual'] = number_format($CashModel->where(['status' => 1])->sum('actual_money'), 2, '.', '');
        //未结金额
        $UserModel = new UserModel;
        $stat['totalmoney'] = number_format($UserModel->sum('money'), 2, '.', '');
        $this->assign('stat', $stat);
        return $this->fetch();
    }

    /**
     * 导出提现列表
     */
    public function dumpCashs() {
        $cashs = $this->getCashData(false);

        $UserModel = new UserModel;

        $title = ['收款账户类型', '收款账户', '收款户名', '转账金额', '备注', '收款银行', '收款银行支行', '收款省/直辖市', '收款市县', '转出账号/卡', '转账模式'];
        $data = [];
        foreach ($cashs as $k => $cash) {
            $collect_info = explode('<br>', $cash->collect_info);
            switch ($cash->type) {
                case '1':
                case '2':
                    $collect_info['account'] = explode('：', $collect_info['0'])[1];
                    $collect_info['name'] = explode('：', $collect_info['1'])[1];
                    $collect_info['id'] = explode('：', $collect_info['2'])[1];
                    break;
                case '3':
                    $collect_info['bank'] = explode('：', $collect_info['0'])[1];
                    $collect_info['bank_branch'] = explode('：', $collect_info['1'])[1];
                    $collect_info['account'] = explode('：', $collect_info['2'])[1];
                    $collect_info['name'] = explode('：', $collect_info['3'])[1];
                    $collect_info['id'] = explode('：', $collect_info['4'])[1];
                    break;
                default:
                    die('不支持的提现方式');
                    break;
            }

            $data[] = [
                $cash->type == 1 ? '支付宝' : ($cash->type == 2 ? '微信' : '银行'),
                $collect_info['account'],
                $collect_info['name'],
                $cash->actual_money,
                '',
                isset($collect_info['bank']) ? $collect_info['bank'] : '',
                isset($collect_info['bank_branch']) ? $collect_info['bank_branch'] : '',
                '',
                '',
                '',
                '',
            ];
        }
        $filename = "提现记录列表" . date('Ymd');
        generate_excel($title, $data, $filename, 'excel');
    }

    /**
     * 提现配置
     */
    public function config() {
        if (!$this->request->isPost()) {
            $this->assign('title', '提现配置');
            return view();
        }
        foreach ($this->request->post() as $key => $vo) {
            if ($key == 'cash_type') {
                $vo = \json_encode($vo);
            }
            sysconf($key, $vo);
        }
        LogService::write('财务管理', '修改提现配置成功');
        $this->success('数据修改成功！', '');
    }

    /**
     * 生成查询条件
     */
    protected function genereate_where($params) {
        $where = [];
        $action = Request::instance()->action();
        $action = strtolower($action);
        switch ($action) {
            case 'index':
            case 'dumpcashs':
                switch ($params['date_type']) {
                    case 'day':
                        $where['create_at'] = ['between', [strtotime(date('Y-m-d') . ' 00:00:00'), strtotime(date('Y-m-d') . ' 23:59:59')]];
                        break;
                    case 'week':
                        $where['create_at'] = ['between', [strtotime('-1 week'), strtotime(date('Y-m-d') . ' 23:59:59')]];
                        break;
                    case 'month':
                        $where['create_at'] = ['between', [strtotime(date('Y-m-1') . ' 00:00:00'), strtotime(date('Y-m-d') . ' 23:59:59')]];
                        break;
                    default:
                        break;
                }
                if ($params['username']) {
                    $where['user_id'] = UserModel::where(['username' => $params['username']])->value('id');
                }
                if ($params['type']) {
                    $where['type'] = $params['type'];
                }
                if ($params['status'] != '') {
                    $where['status'] = $params['status'];
                }
                if ($params['date_range'] && strpos($params['date_range'], ' - ') !== false) {
                    list($startDate, $endTime) = explode(' - ', $params['date_range']);
                    $where['create_at'] = ['between', [strtotime($startDate . ' 00:00:00'), strtotime($endTime . ' 23:59:59')]];
                }
                break;
        }
        return $where;
    }

    /**
     * 详情
     */
    public function detail() {
        $cash_id = input('cash_id/d', 0);
        $cash = CashModel::get($cash_id);
        if (!$cash) {
            $this->error('不存在该记录！');
        }
        if (Request::instance()->isPost()) {
            if ($cash->status == 1) {
                $this->success('已经审核通过，无需再次审核！', '');
            }
            $action = input('action/s', '');
            switch ($action) {
                case 'pass':
                    Db::startTrans();
                    try {
                        $cash->status = 1; //审核通过
                        $cash->complete_at = $_SERVER['REQUEST_TIME'];
                        $cash->save();
                        // 记录用户金额变动日志
                        $reason = "申请提现成功，提现金额{$cash->money}元，手续费{$cash->fee}元，实际到账{$cash->actual_money}元";
                        record_user_money_log('cash_success', $cash->user_id, 0, $cash->user->money, $reason);

                        $user = Db::name('user')->where('id', $cash->user_id)->lock(true)->find();
                        $notify = new CashNotify();
                        $notify->notify($user, $cash->money, $cash->fee, $cash->actual_money);

                        Db::commit();
                    } catch (\Exception $e) {
                        Db::rollback();
                        $this->error('操作失败！' . $e->getMessage());
                    }
                    LogService::write('财务管理', '提现审核通过成功，ID：' . $cash->id);
                    break;
                case 'notpass':
                    $input_reason = input('reason/s', '');
                    Db::startTrans();
                    try {
                        $cash->status = 2; //审核不通过
                        $res = $cash->save();
                        if ($res) {
                            // 解冻金额
                            $user = UserModel::where(['id' => $cash->user->id])->lock(true)->find();
                            $user->money += $cash->money;
                            $res = $user->save();
                            if ($res) {
                                // 记录用户金额变动日志
                                $reason = "申请提现未通过，返还金额{$cash->money}元，原因：" . $input_reason;
                                record_user_money_log('cash_notpass', $cash->user_id, $cash->money, $cash->user->money, $reason);
                                sendMessage(0, $cash->user_id, "申请提现未通过", $reason);
                                Db::commit();
                            }
                        }
                        Db::rollback();
                    } catch (\Exception $e) {
                        Db::rollback();
                        $this->error('操作失败！' . $e->getMessage());
                    }
                    LogService::write('财务管理', '提现驳回成功，ID：' . $cash->id);
                    break;
                default:
                    $this->error('未知动作！');
                    break;
            }

            $this->success('操作成功！', '');
        }
        $this->assign('cash', $cash);
        return $this->fetch();
    }

    /**
     * 代付
     */
    public function daifu() {
        //尝试打款
        $cash_id = input('cash_id/s', '');
        $this->assign('cash_id', $cash_id);
        if (empty($cash_id)) {
            $this->error('请指定代付记录', '');
        }

        // 检查打款
        $cash = CashModel::get($cash_id);
        if (!$cash) {
            $this->error('不存在该记录！', '');
        }

        if ($this->request->isPost()) {
            $channelId = input('channel_id/s', '');
            if (empty($channelId)) {
                $this->error('请指定代付渠道', '');
            }

            if ($cash->status == 1) {
                $this->error('已打款', '');
            }

            $channel = CashChannel::get($channelId);
            if ($channel->status != 1) {
                $this->error('渠道已关闭', '');
            }

            //检查有没有可用的账号
            $accounts = $channel->accounts()->where(['channel_id' => $channel->id, 'status' => 1])->select();
            if (empty($accounts)) {
                $this->error('不存在代付渠道：' . $channel->title . '的账号！', '');
                exit();
            }

            $account = $accounts[0];
            if (count($accounts) > 1) {
                $account = $accounts[intval(floor(rand(0, count($accounts) - 1)))];
            }

            if (!$account) {
                $this->error('不存在代付渠道：' . $channel->title . '的账号！', '');
                exit();
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
                    $this->success('打款成功，如提现记录状态未变更，请稍候刷新页面', '');
                } else {
                    Db::rollback();
                    $this->error('打款失败，' . $res['msg'], '');
                }
            } catch (Exception $e) {
                Db::rollback();
                $this->error('系统异常，' . $e->getMessage(), '');
            }
        }

        $channels = CashChannel::all(['type' => $cash->type, 'status' => 1]);
        $this->assign('channel', $channels);
        return $this->fetch();
    }

    /**
     * 批量打款
     */
    public function pay_batch() {
        $ids = input('ids/s', '');
        if (!rtrim($ids, ',')) {
            $this->error('请选择提现申请！');
        }
        $ids = explode(',', rtrim($ids, ','));
        if (empty($ids)) {
            $this->error('请选择提现申请！');
        }
        $success = 0;
        foreach ($ids as $v) {
            try {
                $cash = CashModel::get($v);
                if ($cash->status == 0) {
                    Db::startTrans();
                    $cash->status = 1; //审核通过
                    $cash->complete_at = $_SERVER['REQUEST_TIME'];
                    $cash->save();
                    // 记录用户金额变动日志
                    $reason = "申请提现成功，提现金额{$cash->money}元，手续费{$cash->fee}元，实际到账{$cash->actual_money}元";
                    record_user_money_log('cash_success', $cash->user_id, 0, $cash->user->money, $reason);

                    $user = Db::name('user')->where('id', $cash->user_id)->lock(true)->find();
                    $notify = new CashNotify();
                    $notify->notify($user, $cash->money, $cash->fee, $cash->actual_money);

                    Db::commit();
                }
            } catch (\Exception $e) {
                Db::rollback();
                $this->error('操作失败！' . $e->getMessage());
            }
            LogService::write('财务管理', '提现审核通过成功，ID：' . $cash->id);
        }
        $this->success('批量打款成功！', '');
    }

    public function cash_weixinnotify_open() {
        if (!$this->request->isAjax()) {
            $this->error('错误的提交方式！');
        }
        $status = input('value/d', 1);
        sysconf("cash_weixinnotify_open", $status);
        $this->success('更新成功！', '');
    }

    public function cash_emailnotify_open() {
        if (!$this->request->isAjax()) {
            $this->error('错误的提交方式！');
        }
        $status = input('value/d', 1);
        sysconf("cash_emailnotify_open", $status);
        $this->success('更新成功！', '');
    }

    /**
     * 支付宝自动提现配置
     */
    public function autoconfig() {
        if (!$this->request->isPost()) {
            $this->assign('title', '支付宝自动提现配置');
            $channelList = CashChannelModel::all();
            $this->assign('channelList', $channelList);
            return view();
        }
        foreach ($this->request->post() as $key => $vo) {
            sysconf($key, $vo);
        }
        LogService::write('财务管理', '修改支付宝自动提现配置');
        $this->success('数据修改成功！', '');
    }

}

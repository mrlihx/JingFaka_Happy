<?php

namespace app\index\controller;

use app\common\model\Complaint as ComplaintModel;
use app\common\model\ComplaintMessage;
use app\common\model\Goods;
use app\common\model\Order as OrderModel;
use app\common\model\PluginPunish as PluginPunishModel;
use app\common\util\notify\Complaint as ComplaintNotify;
use app\common\model\OrderCard as OrderCardModel;
use app\common\util\Sms;
use service\FileService;
use think\Controller;
use think\Db;
use think\Exception;
use think\Request;
use think\Session;
use think\captcha\Captcha;
use app\common\model\OrderQueryHistory;

class Order extends Base {

    private $seKey = '';
    private $expire = 60;

    public function __construct() {
        parent::__construct();

        if ($this->request->isPost()) {
            //post 请求进来，校验 token
            $token = input('token/s', '');
            if (empty($token) || $token != session('token')) {
                $this->error('非法请求');
            }
        }

        // 检查是否有 token ，如果没有，设置请求 token
        $token = session('token');
        if (!$token) {
            $token = md5(time() . md5(time()) . time()) . time();
            session('token', $token);
        }
        $this->assign('token', $token);

        $this->seKey = getOrderKey();
    }

    public function signQuery() {
        $orderid = input('orderid', '');
        $t = input('t', '');
        $sign = input('sign', '');

        if (($t + 60) < time()) {
            $this->error("请重新查询");
        }

        if (md5($orderid . $t . $this->seKey) != $sign) {
            $this->error("参数错误");
        }

        Session::set($this->authcode($this->seKey) . 'keyquery', ['verify_time' => time()], '');
        return $this->redirect("/orderquery/orderid/" . $orderid . "/l/" . md5($orderid . $this->seKey));
    }

    /**
     * 查询订单
     */
    public function query() {

        $is_verify = false;

        $code = input('chkcode/s', '');

        $queryType = input('querytype/d', '2');
        $trade_no = input('orderid/s', '');
        $l = input('l/s', '');

        $this->assign('chkcode', $code);
        $this->assign('querytype', $queryType);
        $this->assign('trade_no', $trade_no);

        if ($trade_no == "" && $queryType != 1) {
            $this->assign('is_verify', false);
            $this->assign('order', false);
        } else {
            // 验证码不能为空
            if (sysconf('order_query_chkcode') == 1) {
                $order_query_captcha_type = sysconf('order_query_captcha_type');
                if ($order_query_captcha_type == 0) {
                    $key = $this->authcode($this->seKey) . 'orderquery';
                    $secode = Session::get($key, '');
                    if (!empty($code) && !empty($secode) && (time() - $secode['verify_time'] < $this->expire) && $secode['verify_code'] == $code) {
                        $is_verify = true;
                        Session::delete($key, '');
                    }
                } else {
                    $clicaptcha = new \captcha\clicaptcha();
                    if ($clicaptcha->check($code)) {
                        $is_verify = true;
                    }
                }
            } else {
                $is_verify = true;
            }

            list($history_status, $history_msg) = OrderQueryHistory::checkIP($this->request->ip(), ($l && $l == md5($trade_no . $this->seKey)) || (session("is_query_pass") != "" && session("is_query_pass") == $trade_no) || (session("is_last_order") != "" && session("is_last_order") == $trade_no), $trade_no, $queryType);
            if ($history_status == 0) {
                $this->error($history_msg, "/orderquery");
            }

            switch ($queryType) {
                case '1':
                    //获取已登录用户最近一次购买的卡密
                    $order = OrderModel::where(['trade_no' => session('last_order_trade_no')])->order('id DESC')->find();
                    break;
                case '2':
                    //按订单号方式获取
                    $order = OrderModel::where(['trade_no' => $trade_no])->order('id DESC')->find();
                    break;
                case '3':
                    //按联系方式获取
                    if ($is_verify == false) {
                        $this->error("验证码不正确");
                    }

                    $order_query_limitday = sysconf('order_query_limitday');
                    if ($order_query_limitday == "") {
                        $order_query_limitday = 3;
                    }

                    $count = OrderModel::where(['contact' => $trade_no, "create_at" => [">", time() - ($order_query_limitday * 86400)]])->count();
                    if ($count > 1) {
                        $order = OrderModel::where(['contact' => $trade_no, "create_at" => [">", time() - ($order_query_limitday * 86400)]])->order('id DESC')->paginate(30);
                        // 分页
                        $page = $order->render();
                        $this->assign('page', $page);
                        $this->assign('sekey', $this->seKey);

                        foreach ($order as &$o) {
                            if ($o) {
                                if (sysconf("order_query_limitip") == 1 && $o->first_query == 1) {
                                    $o->trade_no = substr($o->trade_no, 0, strlen($o->trade_no) - 6) . "******";
                                }
                            }
                        }

                        $this->assign('order', $order);

                        Session::set($this->authcode($this->seKey) . 'keyquery', ['verify_time' => time()], '');

                        return $this->fetch('query_contact');
                    } else {
                        $order = OrderModel::where(['contact' => $trade_no, "create_at" => [">", time() - ($order_query_limitday * 86400)]])->order('id DESC')->find();
                    }
                    break;
                default:
                    break;
            }

            // 如果存在密码
            if ($order && $order->take_card_type != 0) {
                if (!empty($order->take_card_password)) {
                    $take_card_password = input('pwd/s', '');
                    if ($take_card_password) {
                        if ($take_card_password != $order->take_card_password) {
                            $this->error('查询密码错误！');
                        } else {
                            $is_verify = true;
                        }
                    } else {
                        $this->assign('trade_no', $order->trade_no);
                        session("is_query_pass", $order->trade_no);
                        return $this->fetch('query_pass');
                    }
                }
            }

            if (!empty($order) && $order['status'] == 3) {
                $this->error("当前订单已退款！", "/orderquery");
            }


            if (!empty($order) && $order['first_query'] == 1 && sysconf("order_query_second_limit_orderid") == 1) {
                if ($queryType == 3) {
                    $this->error("此订单仅限请使用订单号查询", "/orderquery");
                } elseif ($queryType == 2 && ($l && $l == md5($trade_no . $this->seKey))) {
                    $this->error("此订单仅限请使用订单号查询", "/orderquery");
                }
            }

            if (!empty($order) && $order['first_query'] == 0) {
                $order->save(['first_query' => 1]);
                $is_verify = true;
            }

            if ($l && $l == md5($trade_no . $this->seKey)) {
                $secode = Session::get($this->authcode($this->seKey) . 'keyquery', '');
                if ($order && !empty($secode) && (time() - $secode['verify_time'] < $this->expire)) {
                    $is_verify = true;
                }
            }

            if (!$is_verify) {
                if (strpos($trade_no, '******') !== false) {
                    $this->error("此订单仅限请使用订单号查询", "/orderquery");
                } else {
                    $this->error("请重新使用订单号或联系方式查询", "/orderquery");
                }
            }

            if (isset($order->channel)) {
                $this->assign('channel', $order->channel);
            }

            $unfreeze = Db::name('auto_unfreeze')->where(['trade_no' => $order['trade_no']])->find();

            if ($order['status'] == 1 && $unfreeze) {
                $this->assign('canComplaint', true);
            }

            if (sysconf("order_query_limitip") == 1 && $order['create_ip'] != $this->request->ip()) {
                $this->error("请使用下单IP进行查询", "/orderquery");
            }

            if ($order) {
                session("dumpkey", $order['trade_no']);
            }

            cookie('pay_order_remember', null);
            $this->assign('order', $order);
            $this->assign('is_verify', $is_verify);
        }

        return $this->fetch();
    }

    public function getLastOrder() {
        $cacheOrder = [];
        $trade_no = cookie('pay_order_remember');
        if ($trade_no) {
            $cacheOrder = OrderModel::where(['trade_no' => $trade_no])
                            ->field("trade_no,total_price,success_at")
                            ->where('status', '=', 1)
                            ->where('success_at', '>', strtotime("-1 day"))
                            ->order('id DESC')->find();
            if ($cacheOrder) {

                $success_at = "之";
                if (!empty($cacheOrder['success_at'])) {
                    $temp = time() - $cacheOrder['success_at'];

                    if ($temp >= 3600) {
                        $success_at = intval($temp / 3600) . "小时";
                    } else if ($temp > 60) {
                        $success_at = intval($temp / 60) . "分";
                    } else {
                        $success_at = intval($temp) . "秒";
                    }
                }

                $cacheOrder['trade_no'] = trim($cacheOrder['trade_no']);
                $cacheOrder['success_at'] = $success_at;
                $cacheOrder['total_price'] = round($cacheOrder['total_price'], 2);
                session("is_last_order", trim($cacheOrder['trade_no']));
                return J(1, "success", $cacheOrder);
            }
        }
        return J(0, "not found", $cacheOrder);
    }

    /**
     * 检查商品并出货
     */
    public function checkGoods() {
        $token = input('token/s', '');
        if (empty($token) || $token != session('token')) {
            return json(['msg' => '非法请求']);
        }

        $trade_no = input('orderid/s', '');

        if (session('dumpkey') != $trade_no) {
            $this->error('请刷新后重试！');
        }

        $json = input('json/d', 0);
        if ($trade_no) {
            return Goods::sendOut($trade_no, $json);
        } else {
            return json([
                'msg' => '请提供订单号',
                'status' => 0,
            ]);
        }
    }

    /**
     * 投诉
     */
    public function complaint() {
        $trade_no = input('trade_no/s', '');
        if (!$this->request->isPost()) {
            session("complaint_trade_no", $trade_no);
            return $this->fetch();
        }

        $type = input('type/s', '');
        $qq = input('qq/s', '');
        $mobile = input('mobile/s', '');
        $desc = input('desc/s', '');

        if (!$qq) {
            $this->error('请输入联系QQ！');
        }
        if (!is_mobile_number($mobile)) {
            $this->error('这不是一个有效的手机号格式！');
        }
        if (!$desc) {
            $this->error('请输入投诉说明！');
        }

        $buyer_qrcode = "";
        if (sysconf('complaint_qrcode') == 1) {
            if (Request::instance()->file("buyer_qrcode")) {
                $upload = upload('buyer_qrcode');
                if ($upload['code'] == 'SUCCESS') {
                    $buyer_qrcode = $upload['site_url'];
                } else {
                    $this->error("图片保存失败！");
                }
            }
        }

        $order = OrderModel::get(['trade_no' => $trade_no]);
        if (!$order) {
            $this->error('不存在该订单！');
        }
        if ($order->status === 0) {
            $this->error('该订单未完成，暂不能受理投诉！');
        }

        $num = 0;
        $select_cards = input('select_cards/s', '');

        if ($select_cards == "") {
            $price = $order->total_price;
            $num = $order->quantity;
        } else {
            $select_cards_arr = explode(",", $select_cards);
            $cards_msg = "";
            foreach ($select_cards_arr as $ididid) {
                if ($ididid != -1) {
                    $temp = OrderCardModel::where(['order_id' => $order->id, 'id' => $ididid])->find();
                    if ($temp) {
                        if ($temp['number'] == "") {
                            $cardmsg = $temp['secret'];
                        } elseif ($temp['secret'] == "") {
                            $cardmsg = $temp['number'];
                        } else {
                            $cardmsg = $temp['number'] . "------" . $temp['secret'];
                        }
                        $num = $num + 1;
                        $cards_msg = $cards_msg . "第{$num}张：" . $cardmsg . "<br>";
                    }
                }
            }
            if (in_array(-1, $select_cards_arr)) {
                $cards_msg = $cards_msg . "缺货：" . ($order->quantity - $order->sendout) . "张" . "<br>";
                $num = $num + ( $order->quantity - $order->sendout);
            }

            $price = round(($order->total_price / $order->quantity) * $num, 2);
            $desc = $desc . "<br>售后卡密：<br>" . $cards_msg . "总共需售后：" . $num . "张,涉及金额：{$price}元（含手续费、选号费、短信费）";
        }

        // 获取该手机号投诉次数
        $count = ComplaintModel::where(['trade_no' => $trade_no])->count();

        if ($count > 0) {
            $token = md5(md5(time()) . rand(1000, 5000));
            session('token', $token);
            $this->error('您已投诉过该订单！', url('Index/order/complaintpass', ['trade_no' => $trade_no, 'token' => $token]));
        }

        try {
            Db::startTrans();

            //投诉查看密码，需要发送到投诉人联系手机中
            $code = rand(100000, 999999);

            $res = ComplaintModel::create([
                        'user_id' => $order->user_id,
                        'proxy_parent_user_id' => $order->proxy_parent_user_id,
                        'trade_no' => $trade_no,
                        'type' => $type,
                        'qq' => $qq,
                        'mobile' => $mobile,
                        'desc' => $desc,
                        'status' => 0,
                        'create_at' => $_SERVER['REQUEST_TIME'],
                        'create_ip' => $this->request->ip(),
                        'pwd' => $code,
                        'expire_at' => time() + 86400,
                        'buyer_qrcode' => $buyer_qrcode,
                        'select_cards' => $select_cards,
                        'num' => $num,
                        'price' => $price,
            ]);
            if ($res !== false) {
                Db::name('complaint_message')->insert([
                    'trade_no' => $trade_no,
                    'content' => $desc,
                    'create_at' => time(),
                ]);

                //投诉申请成功，指定的订单作废，不允许该订单的资金解冻。
                $res = Db::name('auto_unfreeze')->where(['trade_no' => $order->trade_no])->update(['status' => -1]);

                if ($res != null) {

                    //冻结订单
                    $res = Db::name('order')->where(['trade_no' => $order->trade_no])->update(['is_freeze' => 1]);
                    if ($res) {

                        //判断是否 T0 结算的订单，如果是，需要扣除商家余额
                        if ($order->settlement_type == 0 && $order->channel->is_custom == 0) {
                            $user = Db::name('user')->where('id', $order->user_id)->lock(true)->find();
                            $balance = round($user['money'] - $order->finally_money, 3);
                            Db::name('user')->where('id', $user['id'])->update(['money' => Db::raw('money-' . $order->finally_money), 'freeze_money' => Db::raw('freeze_money+' . $order->finally_money)]);
                            // 记录用户金额变动日志
                            record_user_money_log('freeze', $user['id'], $order->finally_money, $balance, "T0订单被投诉，冻结金额：{$order->finally_money}元");

                            if ($order->is_proxy == 1) {
                                $parent_user = Db::name('user')->where('id', $order->proxy_parent_user_id)->lock(true)->find();
                                $balance = round($parent_user['money'] - $order->proxy_finally_money, 3);
                                Db::name('user')->where('id', $parent_user['id'])->update(['money' => Db::raw('money-' . $order->proxy_finally_money), 'freeze_money' => Db::raw('freeze_money+' . $order->proxy_finally_money)]);
                                record_user_money_log('freeze', $parent_user['id'], $order->proxy_finally_money, $balance, "T0订单被投诉，冻结金额：{$order->proxy_finally_money}元");
                            }
                        } elseif ($order->settlement_type == 0 && $order->channel->is_custom == 1) {
                            //自定义的话只冻结上级
                            if ($order->is_proxy == 1) {
                                $parent_user = Db::name('user')->where('id', $order->proxy_parent_user_id)->lock(true)->find();
                                $balance = round($parent_user['money'] - $order->proxy_finally_money, 3);
                                Db::name('user')->where('id', $parent_user['id'])->update(['money' => Db::raw('money-' . $order->proxy_finally_money), 'freeze_money' => Db::raw('freeze_money+' . $order->proxy_finally_money)]);
                                record_user_money_log('freeze', $parent_user['id'], $order->proxy_finally_money, $balance, "T0订单被投诉，冻结金额：{$order->proxy_finally_money}元");
                            }
                        }

                        Db::commit();

                        $notify = new ComplaintNotify();
                        $notify->notify($order->user, $trade_no);
                        if ($order->is_proxy == 1) {
                            $pUser = Db::name('user')->where('id', $order->proxy_parent_user_id)->find();
                            $notify->parent_notify($pUser, $trade_no);
                        }

                        $sms = new Sms;
                        // 向买家发送投诉短信
                        $sms->sendComplaintPwd($mobile, $trade_no, $code);
                        // 向卖家发送投诉成功短信
                        $sms->sendComplaintNotify($order->user->mobile, $trade_no);
                        $token = md5(md5(time()) . rand(1000, 5000));
                        session('token', $token);

                        if (plugconf('punish', 'status') == 1 && plugconf('punish', 'order_status') == 1) {
                            PluginPunishModel::order_punish($order->user_id);
                        }
                        if (plugconf('punish', 'status') == 1 && plugconf('punish', 'goodsoff_status') == 1) {
                            PluginPunishModel::goods_punish($order->goods_id);
                        }

                        $this->success('投诉成功！', url('Index/order/complaintpass', ['trade_no' => $trade_no, 'token' => $token]));
                    }
                }
            }

            Db::rollback();
            $this->error('操作失败，请重试！');
        } catch (Exception $e) {
            Db::rollback();
            $this->error('操作失败，请重试！' . $e->getMessage());
        }
    }

    /**
     * 投诉查询页
     */
    public function complaintquery() {
        return $this->fetch();
    }

    /**
     * 投诉撤销
     */
    public function complaintCancel() {
        if ($this->request->isPost()) {
            $tradeNo = input('trade_no/s', '');
            $pwd = input('pwd/s', '');
            $complaint = ComplaintModel::where(['trade_no' => $tradeNo, 'pwd' => $pwd])->find();
            if ($complaint) {
                DB::startTrans();
                try {
                    $complaint->status = -1;
                    $res = $complaint->save();
                    if ($res) {
                        //买家撤诉，该笔订单可以解冻
                        $res = Db::table('auto_unfreeze')->where(['trade_no' => $complaint->trade_no])->update(['status' => 1]);
                        if ($res) {
                            //资金状态修改成功，解冻订单
                            $res = Db::table('order')->where(['trade_no' => $complaint->trade_no])->update(['is_freeze' => 0]);

                            $order = OrderModel::get(['trade_no' => $tradeNo]);
                            //判断是否 T0 结算的订单，如果是，需要返还商家余额
                            if (0 == $order->settlement_type) {
                                $user = Db::name('user')->where('id', $order->user_id)->lock(true)->find();
                                $balance = round($user['money'] + $order->finally_money, 3);
                                Db::name('user')->where('id', $user['id'])->update(['money' => Db::raw('money+' . $order->finally_money), 'freeze_money' => Db::raw('freeze_money-' . $order->finally_money)]);
                                // 记录用户金额变动日志
                                record_user_money_log('unfreeze', $user['id'], $order->finally_money, $balance, "T0订单投诉撤诉，解冻金额：{$order->finally_money}元");

                                if ($order->is_proxy == 1) {
                                    $parent_user = Db::name('user')->where('id', $order->proxy_parent_user_id)->lock(true)->find();
                                    $balance = round($parent_user['money'] + $order->proxy_finally_money, 3);
                                    Db::name('user')->where('id', $parent_user['id'])->update(['money' => Db::raw('money+' . $order->proxy_finally_money), 'freeze_money' => Db::raw('freeze_money-' . $order->proxy_finally_money)]);
                                    record_user_money_log('unfreeze', $parent_user['id'], $order->proxy_finally_money, $balance, "T0订单投诉撤诉，解冻金额：{$order->proxy_finally_money}元");
                                }
                            }

                            DB::commit();
                            return J(200, '撤销成功！');
                        }
                    }
                } catch (Exception $e) {
                    DB::rollback();
                    return J(500, '撤销失败，如有问题请联系客服处理');
                }
            } else {
                return J(500, '密码不正确，如有问题请联系客服处理');
            }
        }
    }

    /**
     * 投诉查询密码页
     *
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function complaintPass() {
        if ($this->request->isPost()) {
            $tradeNo = input('trade_no/s', '');
            $pwd = input('pwd/s', '');
            $complaint = ComplaintModel::where(['trade_no' => $tradeNo, 'pwd' => $pwd])->find();
            if ($complaint) {
                session('complaint_order', $tradeNo);
                session('complaint_pwd', $pwd);
                $token = md5(time() . md5(time()) . time()) . time();
                session('token', $token);
                return J(200, '密码正确！', '', url('Index/Order/complaintDetail') . '?token=' . $token);
            } else {
                return J(500, '密码不正确，如有问题请联系客服处理');
            }
        }
        $tradeNo = input('trade_no/s', '');
        $token = input('token/s', '');
        if ((!empty($token) && $token == session('token') ) || $token == $this->authcode($tradeNo)) {
            if ($tradeNo) {
                $complaint = ComplaintModel::where(['trade_no' => $tradeNo])->find();
                if ($complaint) {
                    $this->assign('complaint', $complaint);
                }
            }
            return $this->fetch('complaint_pass');
        } else {
            return json(['msg' => '非法请求']);
        }
    }

    /**
     * 投诉详情
     *
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function complaintDetail() {
        $token = input('token/s', '');
        if (empty($token) || $token != session('token')) {
            return json(['msg' => '非法请求']);
        }

        //获取投诉内容
        $tradeNo = session('complaint_order');
        $pwd = session('complaint_pwd');
        $complaint = ComplaintModel::where(['trade_no' => $tradeNo, 'pwd' => $pwd])->find();

        if ($complaint) {
            $this->assign('complaint', $complaint);

            //获取投诉对话内容
            $messages = DB::name('complaint_message')->where(['trade_no' => $tradeNo])->select();
            $this->assign('messages', $messages);

            //订单详情
            $order = Db::name('order')->where(['trade_no' => $complaint['trade_no']])->find();
            $this->assign('order', $order);
            return $this->fetch('complaint_detail');
        } else {
            session('complaint_order', null);
            session('complaint_pwd', null);
            $this->error('登录已过期，请重新登录');
        }
    }

    /**
     * 发送沟通内容
     *
     * @return string
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function complaintSend() {
        if ($this->request->isPost()) {
            $content = input('content/s', '');
            if (empty($content)) {
                return J(500, '请输入沟通内容');
            }

            $tradeNo = session('complaint_order');
            $pwd = session('complaint_pwd');
            $complaint = ComplaintModel::where(['trade_no' => $tradeNo, 'pwd' => $pwd])->find();

            if ($complaint) {
                $data = [
                    'trade_no' => $tradeNo,
                    'content' => $content,
                    'create_at' => time(),
                ];
                ComplaintMessage::create($data);
                return J(200, '发送成功');
            } else {
                return J(500, '登录超时，请重新登录');
            }
        }
    }

    /**
     * 发送投诉图片
     *
     * @return string
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function complaintImg() {
        if ($this->request->isPost()) {
            //获取上传文件
            $file = $this->request->file('image');

            if ($file) {
                //检查文件的扩展名
                $ext = strtolower(pathinfo($file->getInfo('name'), PATHINFO_EXTENSION));
                if (in_array($ext, ['jpg', 'jpeg', 'gif', 'png'])) {
                    //检查投诉是否存在
                    $tradeNo = session('complaint_order');
                    $pwd = session('complaint_pwd');
                    $complaint = ComplaintModel::where(['trade_no' => $tradeNo, 'pwd' => $pwd])->find();
                    if ($complaint) {
                        //保存图片

                        $ext_tmp = strtolower(substr(strrchr($file->getInfo('name'), '.'), 1));
                        if ($ext != $ext_tmp) {
                            return J(500, '文件上传类型受限');
                        }

                        $md5 = $file->hash('md5');
                        $md5 = str_split($md5, 16);
                        $filename = join('/', $md5) . ".{$ext}";
                        // 限制文件类型
                        if (strtolower($ext) == 'php' || strtolower($ext) == 'asp' || strtolower($ext) == 'asa' || strtolower($ext) == 'aspx' || !in_array($ext, explode(',', strtolower(sysconf('storage_local_exts'))))) {
                            return J(500, '文件上传类型受限');
                        }

                        $result = FileService::save($filename, file_get_contents($file->getInfo('tmp_name')));

                        if ($result) {
                            $data = [
                                'trade_no' => $tradeNo,
                                'content' => $result['url'],
                                'content_type' => '1',
                                'create_at' => time(),
                            ];
                            ComplaintMessage::create($data);
                            return J(200, '发送成功');
                        } else {
                            return J(500, '发送失败，请稍候再试');
                        }
                    } else {
                        return J(500, '登录超时，请重新登录');
                    }
                } else {
                    return J(500, '发送失败，不支持的图片文件格式');
                }
            } else {
                return J(500, '请上传举证图片');
            }
        }
    }

    /**
     * 验证码
     */
    public function chkcode() {
        $order_query_captcha_type = sysconf('order_query_captcha_type');
        if ($order_query_captcha_type == 0) {
            $captcha = new Captcha();
            $captcha->fontSize = 30;
            $captcha->length = 4;
            $captcha->useNoise = true;
            return $captcha->entry('order.query');
        } else {
            $clicaptcha = new \captcha\clicaptcha();
            return $clicaptcha->creat();
        }
    }

    /**
     * 验证验证码
     */
    public function verifyCode() {
        $order_query_captcha_type = sysconf('order_query_captcha_type');
        if ($order_query_captcha_type == 0) {
            $code = input('chkcode/s', '');
            if (verify_code($code, 'order.query')) {
                //验证成功之后保存验证码到session中，查询的时候判断是否超时
                $key = $this->authcode($this->seKey) . 'orderquery';
                $secode = [];
                $secode['verify_code'] = $code; // 把校验码保存到session
                $secode['verify_time'] = time(); // 验证码创建时间
                Session::set($key, $secode, '');
                return 'ok';
            } else {
                return 'faile';
            }
        } else {
            $clicaptcha = new \captcha\clicaptcha();
            return $clicaptcha->check(input('info'), false) ? 1 : 0;
        }
    }

    /* 加密验证码 */

    public function authcode($str) {
        $key = substr(md5($this->seKey), 5, 8);
        $str = substr(md5($str), 8, 10);
        return md5($key . $str);
    }

    /**
     * 导出虚拟卡
     */
    public function dumpCards() {
        $trade_no = input('trade_no/s', '');

        if (session('dumpkey') != $trade_no) {
            $this->error('请刷新后重试！');
        }

        $order = OrderModel::get(['trade_no' => $trade_no]);
        if (!$order) {
            $this->error('不存在该订单！');
        }
        $content = [];
        $cards = $order->cards;
        $count = count($cards);
        foreach ($cards as $card) {
            if ($card->secret) {
                $content[] = "{$card->number}\t{$card->secret}";
            } else {
                $content[] = "{$card->number}";
            }
        }
        header("Content-type:application/octet-stream");
        header("Accept-Ranges:bytes");
        header("Content-Disposition:attachment;filename=" . 'order_' . $trade_no . ".txt");
        header("Expires: 0");
        header("Cache-Control:must-revalidate,post-check=0,pre-check=0");
        header("Pragma:public");
        echo implode("\r\n", $content);
    }

}

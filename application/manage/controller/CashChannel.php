<?php

/**
 * Created by Atom.
 * User: Veris
 * Date: 2017-10-23
 * Time: 14:00
 */

namespace app\manage\controller;

use app\common\model\CashChannel as CashChannelModel;
use controller\BasicAdmin;
use service\LogService;
use think\Db;
use think\Request;

class CashChannel extends BasicAdmin
{
    public $development;

    public function _initialize()
    {
        parent::_initialize();
    }

    public function index()
    {
        $channelList = CashChannelModel::all();

        $this->assign('title', '代付接口管理');
        $this->assign('channelList', $channelList);
        return $this->fetch();
    }

    public function change_status()
    {
        if (!$this->request->isAjax()) {
            $this->error('错误的提交方式！');
        }
        $channel_id = input('channel_id/d', 0);

        $channel = Db::name('CashChannel')->where('id', $channel_id)->find();

        if (empty($channel)) {
            $this->error('接口不存在');
        }

        $status = input('status/d', 1);
        $res = CashChannelModel::where([
            'id' => $channel_id,
        ])->update([
            'status' => $status,
        ]);
        $remark = $status == 1 ? '开启' : '关闭';
        if ($res !== false) {
            LogService::write('代付通道', '成功' . $remark . '接口，ID:' . $channel_id);
            $this->success('更新成功！', '');
        } else {
            $this->error('更新失败，请重试！');
        }
    }
}

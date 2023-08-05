<?php

/**
 * Created by Atom.
 * User: Veris
 * Date: 2017-10-23
 * Time: 14:00
 */

namespace app\manage\controller;

use controller\BasicAdmin;
use think\Db;
use think\Request;
use app\common\model\Channel as ChannelModel;
use service\LogService;

class Channel extends BasicAdmin {

    public $development;

    public function _initialize() {
        parent::_initialize();
        $this->development = config('development');
        $this->assign('development', config('development'));
    }

    public function index() {
        $channelList = ChannelModel::where(['is_install' => input('is_install/d', 1), 'is_custom' => 0])->select();

        $this->assign('title', '支付接口管理');
        $this->assign('channelList', $channelList);
        $this->assign('paytype', get_paytype_list());
        return $this->fetch();
    }

    //添加支付接口
    public function add() {
        if ($this->development != 1) {
            return false;
        }
        return $this->post();
    }

    //post提交处理
    protected function post() {
        $channel_id = input('channel_id/d', 0);

        if ($channel_id > 0) {
            $channel = ChannelModel::get($channel_id);
            if (empty($channel)) {
                $channel_id = 0;
            } else {
                $channel['lowrate'] *= 1000;
                $this->assign('channel', $channel);
            }
        }

        //开发者才能添加
        if ($channel_id == 0 && $this->development != 1) {
            $this->error('支付接口已删除');
        }

        if ($this->request->isPost()) {
            $data = [
                'title' => input('title/s', ''),
                'lowrate' => input('lowrate/d', 0),
                'paytype' => input('paytype/d', 0),
                'status' => input('status/d', 0),
                'show_name' => input('show_name/s', ''),
                'is_available' => input('is_available/d', 0),
                'sort' => input('sort/d', 0)
            ];

            $data['lowrate'] /= 1000;

            //开发者才能修改字段和名称
            if ($this->development == 1) {
                $data['code'] = input('code/s', '');
                $data['account_fields'] = input('account_fields/s', '');
                $data['default_fields'] = input('default_fields/s', '');
                $data['applyurl'] = input('applyurl/s', '');
                $data['is_install'] = 1;

                if (empty($data['title'])) {
                    $this->error('中文名称不能为空');
                }
                if (empty($data['code'])) {
                    $this->error('英文名称不能为空');
                }
            }

            if ($channel_id > 0) {
                $res = $channel->save($data, ['id' => $channel_id]);

                if ($res !== false) {
                    LogService::write('网关通道', '编辑接口成功，ID:' . $channel_id);
                    $this->success('更新成功！', '');
                } else {
                    $this->error('更新失败！');
                }
            } else {
                $res = ChannelModel::create($data);
                if ($res !== false) {
                    LogService::write('网关通道', '添加接口成功，ID:' . $res);
                    $this->success('添加成功！', '');
                } else {
                    $this->error('添加失败！');
                }
            }
        }


        $this->assign('paytype', get_paytype_list());
        $this->assign('channel_id', $channel_id);

        return $this->fetch('form');
    }

    public function edit() {
        return $this->post();
    }

    public function del($channel_id) {
        if (!$this->request->isPost()) {
            return;
        }
        $channel = Db::name('Channel')->where('id', $channel_id)->find();

        if (empty($channel)) {
            $this->error('接口不存在');
        }
        Db::startTrans();
        try {
            $res1 = Db::name('Channel')->where('id', $channel_id)->delete();
            $res2 = Db::name('channel_account')->where('channel_id', $channel_id)->delete();
            $res3 = Db::name('user_rate')->where('channel_id', $channel_id)->delete();
            if (FALSE === $res1 || FALSE === $res2 || FALSE === $res3) {
                Db::rollback();
                $this->error('删除失败！');
            }
            Db::commit();
        } catch (\Exception $e) {
            Db::rollback();
            $this->error('删除失败，原因' . $e->getMessage());
        }
        LogService::write('网关通道', '成功删除接口，ID:' . $channel_id);
        $this->success('删除成功！', '');
    }

    public function change_status() {
        if (!$this->request->isAjax()) {
            $this->error('错误的提交方式！');
        }
        $channel_id = input('channel_id/d', 0);

        $channel = Db::name('Channel')->where('id', $channel_id)->find();

        if (empty($channel)) {
            $this->error('接口不存在');
        }

        $status = input('status/d', 1);
        $res = ChannelModel::where([
                    'id' => $channel_id,
                ])->update([
            'status' => $status
        ]);
        $remark = $status == 1 ? '开启' : '关闭';
        if ($res !== false) {
            LogService::write('网关通道', '成功' . $remark . '接口，ID:' . $channel_id);
            $this->success('更新成功！', '');
        } else {
            $this->error('更新失败，请重试！');
        }
    }

    public function change_deposit() {
        if (!$this->request->isAjax()) {
            $this->error('错误的提交方式！');
        }
        $channel_id = input('channel_id/d', 0);

        $channel = Db::name('Channel')->where('id', $channel_id)->find();

        if (empty($channel)) {
            $this->error('接口不存在');
        }

        $is_deposit = input('is_deposit/d', 1);
        $res = ChannelModel::where([
                    'id' => $channel_id,
                ])->update([
            'is_deposit' => $is_deposit
        ]);
        $remark = $is_deposit == 1 ? '开启' : '关闭';
        if ($res !== false) {
            $this->success('更新成功！', '');
        } else {
            $this->error('更新失败，请重试！');
        }
    }

    /*
     * 更新接口可用类型
     */

    public function change_available() {
        if (!$this->request->isAjax()) {
            $this->error('错误的提交方式！');
        }
        $channel_id = input('channel_id/d', 0);

        $channel = Db::name('Channel')->where('id', $channel_id)->find();

        if (empty($channel)) {
            $this->error('接口不存在');
        }

        $type = input('type/d', 0);
        $res = ChannelModel::where([
                    'id' => $channel_id,
                ])->update([
            'is_available' => $type
        ]);

        if ($res !== false) {
            LogService::write('网关通道', '修改接口可用，ID:' . $channel_id);
            $this->success('更新成功！', '');
        } else {
            $this->error('更新失败，请重试！');
        }
    }

    /**
     * 根据 支付类型 获取支付接口列表
     */
    /*  public function getListByPaytype($paytype)
      {
      $channelList=ChannelModel::where([
      'paytype' => $paytype,
      'status'  => 1
      ])->field('id,title')->select();
      return json(['errorCode'=>0,'channelList'=>$channelList]);
      } */

    /**
     * 安装
     */
    public function install() {
        $res = ChannelModel::install(input('id'));
        if ($res['status']) {
            $this->success('安装成功');
        } else {
            $this->error('安装失败');
        }
    }

    /**
     * 卸载
     */
    public function uninstall() {
        $res = ChannelModel::uninstall(input('id'));
        if ($res['status']) {
            $this->success('卸载成功');
        } else {
            $this->error('卸载失败');
        }
    }

}

<?php

/**
 * 邀请码管理
 */

namespace app\manage\controller;

use controller\BasicAdmin;
use think\Db;
use think\Request;
use app\common\model\InviteCode as CodeModel;
use service\LogService;

class InviteCode extends BasicAdmin {

    /**
     * 邀请码
     */
    public function index() {
        $this->assign('title', '邀请码管理');
        ////////////////// 查询条件 //////////////////
        $query = [
            'code' => input('code/s', ''),
            'user_id' => input('user_id/s', ''),
            'invite_uid' => input('invite_uid/s', ''),
            'status' => input('status/s', ''),
            'create_at' => input('create_at/s', '', 'urldecode'),
            'expire_at' => input('expire_at/s', '', 'urldecode'),
        ];
        $where = $this->genereate_where($query);
        $codes = CodeModel::where($where)->paginate(30, false, [
            'query' => $query
        ]);
        $this->assign('codes', $codes);
        // 分页
        $page = str_replace('href="', 'href="#', $codes->render());
        $this->assign('page', $page);

        $counts = CodeModel::where($where)->count();
        $this->assign('counts', $counts);
        return $this->fetch();
    }

    /**
     * 添加邀请码
     */
    public function add() {
        if (!$this->request->isPost()) {
            return $this->fetch();
        }
        $user_id = input('user_id/d', 0);
        $num = input('num/d', 0);
        $day = input('day/d', 0);
        if (empty($num)) {
            $this->error('数量不能为空！');
        }
        if ($num > 1000) {
            $this->error('每次添加数量不能超过1000条！');
        }
        $data = [];
        if ($day == 0) {
            $expire_at = 0;
        } else {
            $expire_at = $_SERVER['REQUEST_TIME'] + 60 * 60 * 24 * $day;
        }
        for ($i = 0; $i < $num; $i++) {
            $code = $user_id . '_' . $this->getRandom(8, true);
            $data[$i] = [
                'user_id' => $user_id,
                'code' => $code,
                'create_at' => $_SERVER['REQUEST_TIME'],
                'expire_at' => $expire_at,
            ];
        }
        $addNum = Db::name('InviteCode')->insertAll($data);
        if ($addNum !== false) {
            LogService::write('用户管理', '成功添加' . $num . '个邀请码，商户ID:' . $user_id);
            $this->success('添加成功！', '');
        } else {
            $this->error('添加失败！');
        }
    }

    /**
     * 删除邀请码
     */
    public function del() {
        $user_id = input('user_id/d', 0);
        $id = input('id/d', 0);
        // 删除未激活的邀请码
        $delNum = Db::name('InviteCode')->where([
                    'id' => $id,
                    'user_id' => $user_id,
                    'status' => 0
                ])->delete();
        if ($delNum !== false) {
            LogService::write('用户管理', '成功删除1个邀请码，邀请码ID:' . $id . '，商户ID:' . $user_id);
            $this->success('删除成功！');
        } else {
            $this->error('删除失败！');
        }
    }

    /**
     * 改变状态
     */
    public function merchant_invitecode_open() {
        if (!$this->request->isAjax()) {
            $this->error('错误的提交方式！');
        }
        $status = input('value/d', 1);
        sysconf("merchant_invitecode_open", $status);

        $this->success('更新成功！', '');
    }

    /**
     * 删除多条邀请码
     */
    public function delNum() {
        $user_id = input('user_id/d', 0);
        $num = input('num/d', 0);
        if (empty($num)) {
            $this->error('数量不能为空！');
        }
        if ($num > 1000) {
            $this->error('每次删除数量不能超过1000条！');
        }
        // 删除未激活的邀请码
        $delNum = Db::name('InviteCode')->where([
                    'user_id' => $user_id,
                    'status' => 0
                ])->limit($num)->delete();
        if ($delNum !== false) {
            LogService::write('用户管理', '成功删除' . $num . '个邀请码，商户ID:' . $user_id);
            $this->success('删除成功！');
        } else {
            $this->error('删除失败！');
        }
    }

    /**
     * 生成查询条件
     */
    protected function genereate_where($params) {
        $where = [];
        $action = Request::instance()->action();
        switch ($action) {
            case 'index':
                if ($params['code'] !== '') {
                    $where['code'] = $params['code'];
                }
                if ($params['user_id'] !== '') {
                    $where['user_id'] = $params['user_id'];
                }
                if ($params['invite_uid'] !== '') {
                    $where['invite_uid'] = $params['invite_uid'];
                }
                if ($params['status'] !== '') {
                    if ($params['status'] == 2) {
                        $where['status'] = 0;
                        $where['expire_at'] = [['<>', 0], ['<=', $_SERVER['REQUEST_TIME']]];
                    } else {
                        $where['status'] = $params['status'];
                    }
                }
                if ($params['create_at'] && strpos($params['create_at'], ' - ') !== false) {
                    list($startDate, $endTime) = explode(' - ', $params['create_at']);
                    $where['create_at'] = ['between', [strtotime($startDate . ' 00:00:00'), strtotime($endTime . ' 23:59:59')]];
                }
                if ($params['expire_at'] && strpos($params['expire_at'], ' - ') !== false) {
                    list($startDate, $endTime) = explode(' - ', $params['expire_at']);
                    $where['expire_at'] = ['between', [strtotime($startDate . ' 00:00:00'), strtotime($endTime . ' 23:59:59')]];
                }
                break;
        }
        return $where;
    }

    //生成邀请码
    private function getRandom($length, $numeric = 0) {
        $seed = base_convert(md5(microtime() . $_SERVER['DOCUMENT_ROOT']), 16, $numeric ? 10 : 35);
        $seed = $numeric ? (str_replace('0', '', $seed) . '012340567890') : ($seed . 'zZ' . strtoupper($seed));
        if ($numeric) {
            $hash = '';
        } else {
            $hash = chr(rand(1, 26) + rand(0, 1) * 32 + 64);
            $length--;
        }
        $max = strlen($seed) - 1;
        for ($i = 0; $i < $length; $i++) {
            $hash .= $seed{mt_rand(0, $max)};
        }
        return $hash;
    }

}

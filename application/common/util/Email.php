<?php

/**
 * 邮箱服务
 * @author lhj
 */

namespace app\common\util;

use think\Db;
use app\common\model\EmailCode as EmailCodeModel;

class Email {

    protected $error;
    protected $expire_in = 300;

    /**
     * 获取错误信息
     */
    public function getError() {
        return $this->error ? $this->error : '';
    }

    /**
     * 设置超时秒数
     */
    public function setExpireIn($expire_in) {
        return $this->expire_in = $expire_in;
    }

    /**
     * 发送验证码
     */
    public function sendCode($email, $screen = '') {
        if (!is_email($email)) {
            $this->error = '请输入正确的邮箱！';
            return false;
        }
        // 检测是否存在验证码（5分钟）
        $expire_time = $_SERVER['REQUEST_TIME'] - $this->expire_in;
        $where['email'] = $email;
        $where['create_at'] = ['>', $expire_time];
        $where['screen'] = $screen;
        $email_code = EmailCodeModel::get($where);
        if (!empty($email_code)) {
            $this->error = '您的操作太频繁，请稍后再试！';
            return false;
        }

        if (sysconf('email_error_limit') > 0 && sysconf('email_error_time') > 0) {
            $start_time = time() - sysconf('email_error_time') * 60;
            $count = Db::name('verify_email_error_log')->where(['email' => $email, 'ctime' => ['gt', $start_time]])->count();
            if ($count >= sysconf('email_error_limit')) {
                $last_time = Db::name('verify_email_error_log')->where('email', $email)->order('id DESC')->limit(1)->value('ctime');
                if ($last_time > 0) {
                    $time = $last_time + sysconf('email_error_time') * 60 - time();
                    $time_str = sec2Time($time);
                    $this->error = '输入错误验证码超限，请' . $time_str . '后重新验证!';
                    return false;
                }
            }
        }
        // 生成验证码
        $code = (string) (mt_rand(100000, 999999));
        $tpl = "您的验证码为：{$code}，该验证码5分钟内有效，请勿泄露他人。";

        //发送邮件验证码
        $title = '卡密自动销售平台（' . sysconf("site_name") . '）';
        if (!sendMail($email, $title, $tpl)) {
            $this->error = '验证码发送失败！';
            return false;
        }

        $data['email'] = $email;
        $data['code'] = $code;
        $data['screen'] = $screen;
        $data['status'] = 0;
        $data['create_at'] = $_SERVER['REQUEST_TIME'];
        if (EmailCodeModel::create($data)) {
            return true;
        } else {
            $this->error = '验证码发送失败！';
            return false;
        }
    }

    /**
     * 验证短信验证码
     * @param  string $email  邮件
     * @param  string $code   验证码
     * @param  string $screen 验证场景（可选）
     * @return boolean        验证情况
     */
    public function verifyCode($email, $code, $screen = '') {
        if (sysconf('email_error_limit') > 0 && sysconf('email_error_time') > 0) {
            $start_time = time() - sysconf('email_error_time') * 60;
            $count = Db::name('verify_email_error_log')->where(['email' => $email, 'ctime' => ['gt', $start_time]])->count();
            if ($count >= sysconf('email_error_limit')) {
                $last_time = Db::name('verify_error_log')->where('email', $email)->order('id DESC')->limit(1)->value('ctime');
                if ($last_time > 0) {
                    $time = $last_time + sysconf('email_error_time') * 60 - time();
                    $time_str = sec2Time($time);
                    $this->error = '输入错误验证码超限，请' . $time_str . '后重新验证!';
                    return false;
                }
            }
        }
        // 检测是否存在验证码（5分钟）
        $expire_time = $_SERVER['REQUEST_TIME'] - $this->expire_in;
        $where['email'] = $email;
        $where['code'] = $code;
        $where['screen'] = $screen;
        $emailCode = Db::name('EmailCode')->where($where)->order('id desc')->find();
        $flag = true;
        if ($emailCode) {
            if ($emailCode['status'] == 1) {
                $this->error = '该验证码已失效，请重新获取！';
                $flag = false;
            }
            if ($emailCode['create_at'] <= $expire_time) {
                $this->error = '该验证码已超时，请重新获取！';
                $flag = false;
            }
            Db::name('EmailCode')->where('id', $emailCode['id'])->update(['status' => 1]);
        } else {
            $this->error = '验证码错误！';
            $flag = false;
        }
        if (FALSE === $flag) {
            $plog['email'] = $email;
            $plog['code'] = $code;
            $plog['screen'] = $screen;
            $plog['type'] = 1;
            $plog['ctime'] = time();
            Db::name('verify_email_error_log')->insert($plog);
        } else {
            return true;
        }
    }

}

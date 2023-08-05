<?php

namespace app\common\util;

use think\Db;
use app\common\model\SmsCode as SmsCodeModel;
use app\common\util\sms\Smsbao;

/**
 * 短信服务
 * Class Sms
 * @author Veris
 * @package app\common\util
 */
class Sms {

    protected $error;
    protected $expire_in = 300;
    protected $limit = 3;
    protected $day_limit = 10;

    /**
     * 获取错误信息
     */
    public function getError() {
        return $this->error ? $this->error : '';
    }

    /**
     * 发送消息
     */
    public function sendMsg($mobile, $tpl) {
        switch (sysconf('sms_notify_channel')) {
            case '':
                $this->error = '短信通道已关闭！';
                return false;
                break;
            case 'smsbao':
                $res = $this->sendSmsbao($mobile, $tpl);
                if ($res === false) {
                    return $this->error;
                }
                break;
            case 'yixin': // 弈新
                $res = $this->sendYixin($mobile, $tpl);
                if ($res === false) {
                    return $this->error;
                }
                break;
            case '253sms':
                $res = $this->send253sms($mobile, $tpl);
                if ($res === false) {
                    return false;
                }
                break;
            default:
                $this->error = '未知短信通道！';
                return false;
                break;
        }
        return true;
    }

    /**
     * 订单短信通知
     * @param $mobile
     * @param $trade_no
     * @return bool
     */
    public function sendOrderRemind($mobile, $trade_no) {

        $tpl = "您的订单已支付成功，订单号：{$trade_no}，若您付款成功后没有领取虚拟卡信息，请您及时通过订单查询提取。";
        switch (sysconf('sms_notify_channel')) {
            case '':
                $this->error = '短信通道已关闭！';
                return false;
                break;
            case 'smsbao':
                $res = $this->sendSmsbao($mobile, $tpl);
                if ($res === false) {
                    return $this->error;
                }
                break;
            case 'yixin': // 弈新
                $res = $this->sendYixin($mobile, $tpl);
                if ($res === false) {
                    return $this->error;
                }
                break;
            case '253sms':
                $res = $this->send253sms($mobile, $tpl);
                if ($res === false) {
                    return false;
                }
                break;
            case 'alidayu': // 阿里大鱼短信通知
                $res = $this->sendAliOrderRemind($mobile, $trade_no);
                if ($res === false) {
                    return false;
                }
                break;
            case '1cloudsp'://天瑞云
                $res = $this->send1cloudspOrderRemind($mobile, $trade_no);
                if ($res === false) {
                    return false;
                }
                break;
            default:
                $this->error = '未知短信通道！';
                return false;
                break;
        }
        return true;
    }

    /**
     * 设置超时秒数
     */
    public function setExpireIn($expire_in) {
        return $this->expire_in = $expire_in;
    }

    /**
     * 发送短信验证码
     * @param $mobile
     * @param string $screen
     * @return bool
     * @throws \think\exception\DbException
     */
    public function sendCode($mobile, $screen = '') {
        if (!is_mobile_number($mobile)) {
            $this->error = '请输入正确的手机号码！';
            return false;
        }
        // 检测是否存在验证码（5分钟）
        $expire_time = $_SERVER['REQUEST_TIME'] - $this->expire_in;
        $where['mobile'] = $mobile;
        $where['create_at'] = ['>', $expire_time];
        $where['screen'] = $screen;
        $sms_code = SmsCodeModel::get($where);
        if (!empty($sms_code)) {
            $this->error = '您的操作太频繁，请稍后再试！';
            return false;
        }

        //限制 ip, 单位时间内不可超过3条
        $where['create_ip'] = $_SERVER['REMOTE_ADDR'];
        $where['create_at'] = ['>', $expire_time];
        $sms_code = SmsCodeModel::all($where);
        if (!empty($sms_code) && count($sms_code) > $this->limit) {
            $this->error = '您的操作太频繁，请稍后再试！';
            return false;
        }

        // 限制号码, 单日不可超过10条
        $today = mktime(0, 0, 0, date('m'), date('d'), date('Y'));
        $where['mobile'] = $mobile;
        $where['create_at'] = ['>', $today];
        $where['screen'] = $screen;
        $sms_code = SmsCodeModel::all($where);
        if (!empty($sms_code) && count($sms_code) > $this->day_limit) {
            $this->error = '您的操作太频繁，请稍后再试！';
            return false;
        }

        //限制 ip, 单日不可超过10条
        $where['create_ip'] = $_SERVER['REMOTE_ADDR'];
        $where['create_at'] = ['>', $today];
        $sms_code = SmsCodeModel::all($where);
        if (!empty($sms_code) && count($sms_code) > $this->day_limit) {
            $this->error = '您的操作太频繁，请稍后再试！';
            return false;
        }

        if (sysconf('sms_error_limit') > 0 && sysconf('sms_error_time') > 0) {
            $start_time = time() - sysconf('sms_error_time') * 60;
            $count = Db::name('verify_error_log')->where(['mobile' => $mobile, 'ctime' => ['gt', $start_time]])->count();
            if ($count >= sysconf('sms_error_limit')) {
                $last_time = Db::name('verify_error_log')->where('mobile', $mobile)->order('id DESC')->limit(1)->value('ctime');
                if ($last_time > 0) {
                    $time = $last_time + sysconf('sms_error_time') * 60 - time();
                    $time_str = sec2Time($time);
                    $this->error = '输入错误验证码超限，请' . $time_str . '后重新验证!';
                    return false;
                }
            }
        }
        // 生成验证码
        $code = (string) (mt_rand(100000, 999999));
        $tpl = "您的验证码为：{$code}，该验证码5分钟内有效，请勿泄露他人。";
        switch (sysconf('sms_channel')) {
            case '':
                $this->error = '短信通道已关闭！';
                return false;
                break;
            case 'smsbao':
                $res = $this->sendSmsbao($mobile, $tpl);
                if ($res === false) {
                    return false;
                }
                break;
            case 'alidayu': // 阿里大鱼短信通知
                $res = $this->sendAliCode($mobile, $code);
                if ($res === false) {
                    return false;
                }
                break;
            case 'yixin': // 弈新
                $res = $this->sendYixin($mobile, $tpl);
                if ($res === false) {
                    return false;
                }
                break;
            case '1cloudsp'://天瑞云
                $res = $this->send1cloudsp($mobile, $code);
                if ($res === false) {
                    return false;
                }
                break;
            case '253sms':
                $res = $this->send253sms($mobile, $tpl);
                if ($res === false) {
                    return false;
                }
                break;
            default:
                $this->error = '未知短信通道！';
                return false;
                break;
        }
        $data['mobile'] = $mobile;
        $data['code'] = $code;
        $data['screen'] = $screen;
        $data['status'] = 0;
        $data['create_at'] = $_SERVER['REQUEST_TIME'];
        $data['create_ip'] = $_SERVER['REMOTE_ADDR'];
        if (SmsCodeModel::create($data)) {
            return true;
        } else {
            $this->error = '验证码发送失败！';
            return false;
        }
    }

    /**
     * 投诉通知
     * @param $mobile
     * @param $trade_no
     * @return bool
     */
    public function sendComplaintNotify($mobile, $trade_no) {
        $tpl = "您的订单：{$trade_no}，已经有买家投诉，请您及时登录后台处理。";
        switch (sysconf('sms_complaint_notify_channel')) {
            case '':
                $this->error = '短信通道已关闭！';
                return false;
                break;
            case 'smsbao':
                $res = $this->sendSmsbao($mobile, $tpl);
                if ($res === false) {
                    return false;
                }
                break;
            case 'alidayu': // 阿里大鱼短信通知
                $res = $this->sendAliComplaintNotify($mobile, $trade_no);
                if ($res === false) {
                    return false;
                }
                break;
            case 'yixin': // 弈新
                $res = $this->sendYixin($mobile, $tpl);
                if ($res === false) {
                    return false;
                }
                break;
            case '1cloudsp'://天瑞云
                $res = $this->send1cloudspComplaintNotify($mobile, $trade_no);
                if ($res === false) {
                    return false;
                }
                break;
            case '253sms':
                $res = $this->send253sms($mobile, $tpl);
                if ($res === false) {
                    return false;
                }
                break;
            default:
                $this->error = '未知短信通道！';
                return false;
                break;
        }
    }

    /**
     * 发送投诉密码
     * @param $mobile
     * @param $trade_no
     * @param $pwd
     * @param string $screen
     * @return bool
     */
    public function sendComplaintPwd($mobile, $trade_no, $pwd, $screen = 'complaint') {
        $tpl = "您的订单{$trade_no}已投诉成功。投诉密码为{$pwd}，在卖家未给您处理好问题前，请勿将密码告知任何人！";
        switch (sysconf('sms_complaint_channel')) {
            case '':
                $this->error = '短信通道已关闭！';
                return false;
                break;
            case 'smsbao':
                $res = $this->sendSmsbao($mobile, $tpl);
                if ($res === false) {
                    return false;
                }
                break;
            case 'alidayu': // 阿里大鱼短信通知
                $res = $this->sendAliComplaintPwd($mobile, $trade_no, $pwd);
                if ($res === false) {
                    record_file_log('AliSms', $this->error);
                    return false;
                }
                break;
            case 'yixin': // 弈新
                $res = $this->sendYixin($mobile, $tpl);
                if ($res === false) {
                    return false;
                }
                break;
            case '1cloudsp'://天瑞云
                $res = $this->send1cloudspComplaintPwd($mobile, $trade_no, $pwd);
                if ($res === false) {
                    record_file_log('1cloudSms', $this->error);
                    return false;
                }
                break;
            case '253sms':
                $res = $this->send253sms($mobile, $tpl);
                if ($res === false) {
                    return false;
                }
                break;
            default:
                $this->error = '未知短信通道！';
                return false;
                break;
        }
        $data['mobile'] = $mobile;
        $data['code'] = $pwd;
        $data['screen'] = $screen;
        $data['status'] = 0;
        $data['create_at'] = $_SERVER['REQUEST_TIME'];
        if (SmsCodeModel::create($data)) {
            return true;
        } else {
            $this->error = '验证码发送失败！';
            return false;
        }
    }

    /**
     * 验证短信验证码
     * @param  string $mobile 手机号
     * @param  string $code 验证码
     * @param  string $screen 验证场景（可选）
     * @return boolean        验证情况
     * @throws \think\Exception
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     * @throws \think\exception\PDOException
     */
    public function verifyCode($mobile, $code, $screen = '') {
        if (sysconf('sms_error_limit') > 0 && sysconf('sms_error_time') > 0) {
            $start_time = time() - sysconf('sms_error_time') * 60;
            $count = Db::name('verify_error_log')->where(['mobile' => $mobile, 'ctime' => ['gt', $start_time]])->count();
            if ($count >= sysconf('sms_error_limit')) {
                $last_time = Db::name('verify_error_log')->where('mobile', $mobile)->order('id DESC')->limit(1)->value('ctime');
                if ($last_time > 0) {
                    $time = $last_time + sysconf('sms_error_time') * 60 - time();
                    $time_str = sec2Time($time);
                    $this->error = '输入错误验证码超限，请' . $time_str . '后重新验证!';
                    return false;
                }
            }
        }
        // 检测是否存在验证码（5分钟）
        $expire_time = $_SERVER['REQUEST_TIME'] - $this->expire_in;
        $where['mobile'] = $mobile;
        $where['code'] = $code;
        $where['screen'] = $screen;
        $smsCode = Db::name('SmsCode')->where($where)->order('id desc')->find();
        $flag = true;
        if ($smsCode) {
            if ($smsCode['status'] == 1) {
                $this->error = '该验证码已失效，请重新获取！';
                $flag = false;
            }
            if ($smsCode['create_at'] <= $expire_time) {
                $this->error = '该验证码已超时，请重新获取！';
                $flag = false;
            }
            Db::name('SmsCode')->where('id', $smsCode['id'])->update(['status' => 1]);
        } else {
            $this->error = '验证码错误！';
            $flag = false;
        }
        if (FALSE === $flag) {
            $plog['mobile'] = $mobile;
            $plog['code'] = $code;
            $plog['screen'] = $screen;
            $plog['type'] = 1;
            $plog['ctime'] = time();
            Db::name('verify_error_log')->insert($plog);
        } else {
            return true;
        }
    }

    /**
     * 发送短信宝短信
     */
    private function sendSmsbao($mobile, $tpl) {
        $smsbao = new Smsbao(sysconf('smsbao_user'), sysconf('smsbao_pass'));
        $sign = sysconf('smsbao_signature');
        $content = "【{$sign}】{$tpl}";
        $res = $smsbao->sendSms($mobile, $content);
        record_file_log('BaoSms', 'sendSmsbao to ' . $mobile . "\r\n" . 'tpl: ' . $tpl . "\r\n" . ' result : ' . json_encode($res));
        if ($res->Code != '0') {
            $this->error = $res->Message;
            record_file_log('BaoSms', 'error : ' . $this->error);
            return false;
        }
        return $res;
    }

    /**
     * 发送阿里短信验证码
     */
    private function sendAliCode($mobile, $code) {
        $AliSMS = new \Aliyun\Api\Sms\SmsGateWay(sysconf('alidayu_key'), sysconf('alidayu_secret'));
        $res = $AliSMS->sendSms(
                sysconf('alidayu_signature'), // 短信签名
                sysconf('alidayu_smstpl'), // 短信模板编号
                $mobile, // 短信接收者
                [// 短信模板中字段的值
            'code' => $code,
                ]
        );
        record_file_log('AliSms', 'sendAliCode to ' . $mobile . "\r\n" . 'code: ' . $code . "\r\n" . ' result : ' . json_encode($res));
        if ($res->Code !== 'OK') {
            $this->error = $res->Message;
            record_file_log('AliSms', 'error : ' . $this->error);
            return false;
        }
        return $res;
    }

    /**
     * 发送投诉密码短信
     * @param $mobile
     * @param $trade_no
     * @return \Aliyun\Api\Sms\stdClass|bool
     */
    private function sendAliComplaintNotify($mobile, $trade_no) {
        $AliSMS = new \Aliyun\Api\Sms\SmsGateWay(sysconf('alidayu_key'), sysconf('alidayu_secret'));
        $res = $AliSMS->sendSms(
                sysconf('alidayu_signature'), // 短信签名
                sysconf('alidayu_complaint_notify_smstpl'), // 短信模板编号
                $mobile, // 短信接收者
                [// 短信模板中字段的值
            'trade_no' => $trade_no,
                ]
        );
        record_file_log('AliSms', 'sendAliComplaintNotify to ' . $mobile . "\r\n" . 'trade_no: ' . $trade_no . "\r\n" . ' result : ' . json_encode($res));
        if ($res->Code !== 'OK') {
            $this->error = $res->Message;
            record_file_log('AliSms', 'error : ' . $this->error);
            ;
            return false;
        }
        return $res;
    }

    /**
     * 发送投诉密码短信
     * @param $mobile
     * @param $trade_no
     * @param $code
     * @return \Aliyun\Api\Sms\stdClass|bool
     */
    private function sendAliComplaintPwd($mobile, $trade_no, $code) {
        $AliSMS = new \Aliyun\Api\Sms\SmsGateWay(sysconf('alidayu_key'), sysconf('alidayu_secret'));
        $res = $AliSMS->sendSms(
                sysconf('alidayu_signature'), // 短信签名
                sysconf('alidayu_complaint_smstpl'), // 短信模板编号
                $mobile, // 短信接收者
                [// 短信模板中字段的值
            'trade_no' => $trade_no,
            'code' => $code,
                ]
        );
        record_file_log('AliSms', 'sendAliComplaintPwd to ' . $mobile . "\r\n" . 'trade_no: ' . $trade_no . "\r\n" . 'code: ' . $code . "\r\n" . ' result : ' . json_encode($res));
        if ($res->Code !== 'OK') {
            $this->error = $res->Message;
            record_file_log('AliSms', 'error : ' . $this->error);
            return false;
        }
        return $res;
    }

    /**
     * 发送订单通知
     * @param $mobile
     * @param $trade_no
     * @return \Aliyun\Api\Sms\stdClass|bool
     */
    private function sendAliOrderRemind($mobile, $trade_no) {
        $AliSMS = new \Aliyun\Api\Sms\SmsGateWay(sysconf('alidayu_key'), sysconf('alidayu_secret'));
        $res = $AliSMS->sendSms(
                sysconf('alidayu_signature'), // 短信签名
                sysconf('alidayu_order_smstpl'), // 短信模板编号
                $mobile, // 短信接收者
                [// 短信模板中字段的值
            'trade_no' => $trade_no,
                ]
        );
        record_file_log('AliSms', 'sendAliOrderRemind to ' . $mobile . "\r\n" . 'trade_no: ' . $trade_no . "\r\n" . ' result : ' . json_encode($res));
        if ($res->Code !== 'OK') {
            $this->error = $res->Message;
            record_file_log('AliSms', 'error : ' . $this->error);
            return false;
        }
        return $res;
    }

    /**
     * 发送弈新短信
     */
    private function sendYixin($mobile, $tpl) {
        $username = sysconf('yixin_sms_user');
        $password = sysconf('yixin_sms_pass');
        $sign = sysconf('yixin_sms_signature');
        $content = urlencode("【{$sign}】{$tpl}");
        $res = $this->requestYixin(['CorpID' => $username, 'Pwd' => $password, 'Mobile' => $mobile, 'Content' => $content]);
        if (!$res) {
            $this->error = $res;
            record_file_log('YixinSms', $this->error);
            return false;
        }
        return $res;
    }

    /**
     * 弈新短信请求
     * @param $data
     * @return int|mixed
     */
    private function requestYixin($data) {
        $gateway = 'http://120.132.132.102/WS/BatchSend2.aspx';
        $postData = http_build_query($data);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HEADER, "Accept-Charset: utf-8");
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
        curl_setopt($ch, CURLOPT_URL, $gateway);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $tmpInfo = curl_exec($ch);
        $errorno = curl_errno($ch);
        curl_close($ch);
        if ($errorno) {
            return $errorno;
        } else {
            return $tmpInfo;
        }
    }

    /**
     * 发送天瑞云短信
     * @param $mobile
     * @param $code
     * @return bool|int|mixed
     */
    private function send1cloudsp($mobile, $code) {
        $accesskey = sysconf('1cloudsp_key');
        $secret = sysconf('1cloudsp_secret');
        $templateId = sysconf('1cloudsp_smstpl');
        $sign = sysconf('1cloudsp_signature');
        $res = $this->request1clouds(['accesskey' => $accesskey, 'secret' => $secret, 'sign' => '【' . $sign . '】', 'templateId' => $templateId, 'mobile' => $mobile, 'content' => $code]);
        if ($res) {
            record_file_log('1cloudSms', 'result : ' . $res);
            $res = json_decode($res, true);
            if ($res['code'] != 0) {
                $this->error = $res['msg'];
                record_file_log('1cloudSms', 'error : ' . $this->error);
                return false;
            }
        }
        return $res;
    }

    /**
     * 发送投诉通知
     * @param $mobile
     * @param $trade_no
     * @param $code
     * @return bool|int|mixed
     */
    private function send1cloudspComplaintNotify($mobile, $trade_no) {
        $accesskey = sysconf('1cloudsp_key');
        $secret = sysconf('1cloudsp_secret');
        $templateId = sysconf('1cloudsp_complaint_notify_smstpl');
        $sign = sysconf('1cloudsp_signature');
        $res = $this->request1clouds([
            'accesskey' => $accesskey,
            'secret' => $secret,
            'sign' => '【' . $sign . '】',
            'templateId' => $templateId,
            'mobile' => $mobile,
            'content' => $trade_no
        ]);
        if ($res) {
            record_file_log('1cloudSms', 'result : ' . $res);
            $res = json_decode($res, true);
            if ($res['code'] != 0) {
                $this->error = $res['msg'];
                record_file_log('1cloudSms', 'error : ' . $this->error);
                return false;
            }
        }
        return $res;
    }

    /**
     * 发送投诉密码短信
     * @param $mobile
     * @param $trade_no
     * @param $code
     * @return bool|int|mixed
     */
    private function send1cloudspComplaintPwd($mobile, $trade_no, $code) {
        $accesskey = sysconf('1cloudsp_key');
        $secret = sysconf('1cloudsp_secret');
        $templateId = sysconf('1cloudsp_complaint_smstpl');
        $sign = sysconf('1cloudsp_signature');
        $res = $this->request1clouds([
            'accesskey' => $accesskey,
            'secret' => $secret,
            'sign' => '【' . $sign . '】',
            'templateId' => $templateId,
            'mobile' => $mobile,
            'content' => $trade_no . '##' . $code
        ]);
        if ($res) {
            record_file_log('1cloudSms', 'result : ' . $res);
            $res = json_decode($res, true);
            if ($res['code'] != 0) {
                $this->error = $res['msg'];
                record_file_log('1cloudSms', 'error : ' . $this->error);
                return false;
            }
        }
        return $res;
    }

    /**
     * 发送订单通知短信
     * @param $mobile
     * @param $trade_no
     * @return bool|int|mixed
     */
    private function send1cloudspOrderRemind($mobile, $trade_no) {
        $accesskey = sysconf('1cloudsp_key');
        $secret = sysconf('1cloudsp_secret');
        $templateId = sysconf('1cloudsp_order_smstpl');
        $sign = sysconf('1cloudsp_signature');
        $res = $this->request1clouds([
            'accesskey' => $accesskey,
            'secret' => $secret,
            'sign' => '【' . $sign . '】',
            'templateId' => $templateId,
            'mobile' => $mobile,
            'content' => $trade_no
        ]);
        if ($res) {
            record_file_log('1cloudSms', 'result : ' . $res);
            $res = json_decode($res, true);
            if ($res['code'] != 0) {
                $this->error = $res['msg'];
                record_file_log('1cloudSms', 'error : ' . $this->error);
                return false;
            }
        }
        return $res;
    }

    /**
     * 天瑞云短信发送
     * @param $data
     * @return int|mixed
     */
    private function request1clouds($data) {
        $gateway = 'http://api.1cloudsp.com/api/v2/send';
        $postData = http_build_query($data);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HEADER, "Accept-Charset: utf-8");
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
        curl_setopt($ch, CURLOPT_URL, $gateway);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $tmpInfo = curl_exec($ch);
        $errorno = curl_errno($ch);
        curl_close($ch);
        if ($errorno) {
            return $errorno;
        } else {
            return $tmpInfo;
        }
    }

    /**
     * 发送创蓝253短信
     * @param $mobile
     * @param $tpl
     * @return bool|mixed
     */
    private function send253sms($mobile, $tpl) {
        $gateway = 'http://smssh1.253.com/msg/send/json';
        $api_account = sysconf('253sms_key');
        $api_password = sysconf('253sms_secret');
        $sign = sysconf('253sms_signature');
        //创蓝接口参数
        $postArr = [
            'account' => $api_account,
            'password' => $api_password,
            'msg' => urlencode($tpl),
            'phone' => $mobile,
            'report' => true
        ];
        $res = $this->request253sm($gateway, $postArr);
        if ($res) {
            record_file_log('253Sms', 'result : ' . $res);
            $res = json_decode($res, true);
            if ($res['code'] != 0) {
                $this->error = $res['errorMsg'];
                record_file_log('253Sms', 'error : ' . $this->error);
                return false;
            }
        }
        return $res;
    }

    /**
     * 发送创蓝253短信
     * @param $url
     * @param $postFields
     * @return mixed
     */
    private function request253sm($url, $postFields) {
        $postFields = json_encode($postFields);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json; charset=utf-8'
                ]
        );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
        curl_setopt($ch, CURLOPT_TIMEOUT, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }

}

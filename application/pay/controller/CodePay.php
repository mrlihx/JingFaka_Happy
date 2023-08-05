<?php

namespace app\pay\controller;

use service\PayService;

/**
 * Description of CodePay
 *
 * @author Admin
 */
class CodePay extends PayService {

    /**
     * 扫码支付
     * @param string $trade_no 外部单号
     * @param string $subject 标题
     * @param float $totalAmount 支付金额
     */
    public function pay($trade_no, $subject, $totalAmount) {
        $order = $this->loadOrder($trade_no);

        $codepay_id = $order->channelAccount->params->codepay_id;
        $codepay_key = $order->channelAccount->params->codepay_key;
        $paytype = $order->channelAccount->params->paytype;


        $callbackurl = url("pay/CodePay/callback");
        $notifyurl = url("pay/CodePay/notify");




        $data = array(
            "id" => $codepay_id, //你的码支付ID
            "pay_id" => $trade_no, //唯一标识 可以是用户ID,用户名,session_id(),订单ID,ip 付款后返回
            "type" => $paytype, //1支付宝支付 3微信支付 2QQ钱包
            "price" => $totalAmount, //金额100元
            "param" => "faka", //自定义参数
            "notify_url" => $notifyurl, //通知地址
            "return_url" => $callbackurl, //跳转地址
        ); //构造需要传递的参数

        ksort($data); //重新排序$data数组
        reset($data); //内部指针指向数组中的第一个元素

        $sign = ''; //初始化需要签名的字符为空
        $urls = ''; //初始化URL参数为空

        foreach ($data AS $key => $val) { //遍历需要传递的参数
            if ($val == '' || $key == 'sign')
                continue; //跳过这些不参数签名
            if ($sign != '') { //后面追加&拼接URL
                $sign .= "&";
                $urls .= "&";
            }
            $sign .= "$key=$val"; //拼接为url参数形式
            $urls .= "$key=" . urlencode($val); //拼接为url参数形式并URL编码参数值
        }
        $query = $urls . '&sign=' . md5($sign . $codepay_key); //创建订单所需的参数
        $url = "http://api5.xiuxiu888.com/creat_order/?{$query}"; //支付页面

        header("Location:{$url}"); //跳转到支付页面
    }

    /**
     * 页面回调
     */
    public function callback() {
        $out_trade_no = input("pay_id");
        header("Location:" . url('index/Pay/pay_result', ['orderid' => $out_trade_no]));
        die;
    }

    /**
     * 服务器回调
     */
    public function notify() {

        $order = $this->loadOrder(input("pay_id"));

        ksort($_POST); //排序post参数
        reset($_POST); //内部指针指向数组中的第一个元素
        $codepay_key = $order->channelAccount->params->codepay_key; //这是您的密钥
        $sign = ''; //初始化
        foreach ($_POST AS $key => $val) { //遍历POST参数
            if ($val == '' || $key == 'sign')
                continue; //跳过这些不签名
            if ($sign)
                $sign .= '&'; //第一个字符串签名不加& 其他加&连接起来参数
            $sign .= "$key=$val"; //拼接为url参数形式
        }
        if (!$_POST['pay_no'] || md5($sign . $codepay_key) != $_POST['sign']) { //不合法的数据
            exit('fail');  //返回失败 继续补单
        } else { //合法的数据
            $order->transaction_id = input('pay_no');
            $this->completeOrder($order);
            echo 'success';
        }
    }

}

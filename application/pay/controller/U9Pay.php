<?php

namespace app\pay\controller;

use service\PayService;

class U9Pay extends PayService {

    /**
     * 参考接口
     * @param string $trade_no 外部单号
     * @param string $subject 标题
     * @param float $totalAmount 支付金额
     */
    public function pay($trade_no, $subject, $totalAmount) {

        $order = $this->loadOrder($trade_no); //内置函数loadOrder，获取订单对象



        $pid = $order->channelAccount->params->pid; //获取支付通道账号参数，示例获取账号app_id参数
        $key = $order->channelAccount->params->key; //获取支付通道账号参数，示例获取账号key参数
        $paytype = $order->channelAccount->params->paytype;


        $pay_memberid = $pid;
        $pay_orderid = $trade_no;
        $pay_applydate = date('Y-m-d H:i:s');
        $pay_bankcode = $paytype;
        $pay_notifyurl = url("pay/U9Pay/notify");
        $pay_callbackurl = url("pay/U9Pay/callback");
        $pay_amount = number_format($totalAmount, 2, '.', '');
        $pay_md5sign = strtoupper(md5("pay_amount=" . $pay_amount . "&pay_applydate=" . $pay_applydate . "&pay_bankcode=" . $pay_bankcode . "&pay_callbackurl=" . $pay_callbackurl . "&pay_memberid=" . $pay_memberid . "&pay_notifyurl=" . $pay_notifyurl . "&pay_orderid=" . $pay_orderid . "&key=" . $key));
        $pay_productname = $subject;

        $html = '<form action="https://1.u9w.com/Pay_Index.html" method="post" id="payform">';
        $html .= '<input type="hidden" name="pay_orderid" value="' . $pay_orderid . '" />';
        $html .= '<input type="hidden" name="pay_memberid" value="' . $pay_memberid . '" />';
        $html .= '<input type="hidden" name="pay_applydate" value="' . $pay_applydate . '" />';
        $html .= '<input type="hidden" name="pay_bankcode" value="' . $pay_bankcode . '" />';
        $html .= '<input type="hidden" name="pay_notifyurl" value="' . $pay_notifyurl . '" />';
        $html .= '<input type="hidden" name="pay_callbackurl" value="' . $pay_callbackurl . '" />';
        $html .= '<input type="hidden" name="pay_amount" value="' . $pay_amount . '" />';
        $html .= '<input type="hidden" name="pay_md5sign" value="' . $pay_md5sign . '" />';
        $html .= '<input type="hidden" name="pay_productname" value="' . $pay_productname . '" />';
        $html .= '</form><script>document.forms[0].submit();</script>';


        echo $html;
        die;
    }

    /**
     * 页面回调
     */
    public function callback() {
        $out_trade_no = input("orderid"); //获取同步回调订单号
        header("Location:" . url('index/Pay/pay_result', ['orderid' => $out_trade_no]));
        die;
    }

    /**
     * 异步回调
     */
    public function notify() {
        $out_trade_no = input("orderid");
        $order = $this->loadOrder($out_trade_no);


        $key = $order->channelAccount->params->key;


        $params = input();

        $signature = $params['sign'];
        $attch = $params['attach'];
        unset($params['sign']);
        unset($params['attach']);
        $sign = $this->sign($params, $key);
        if ($sign && $sign == $signature) {
            if ($params["returncode"] == "00") {

                $order->transaction_id = $params["transaction_id"];
                $this->completeOrder($order);

                echo 'ok';
            } else {
                exit('fail');
            }
        }
    }

    protected function sign($params, $apikey) {
        ksort($params);
        // file_put_contents('1.txt',json_encode($params));
        $keyStr = '';
        foreach ($params as $key => $val) {
            $keyStr .= "$key=$val&";
        }

        $sign = strtoupper(md5($keyStr . "key=" . $apikey));
        return $sign;
    }

}

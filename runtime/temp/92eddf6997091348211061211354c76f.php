<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:83:"/www/wwwroot/shop.paozf.com/application/templates/mobile/index/default/pay/tip.html";i:1687457979;}*/ ?>
<!DOCTYPE html>
<html data-dpr="1" style="font-size: 42px;">
    <head> 
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta charset="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />
        <title>确认支付安全提示</title>
        <script src="/static/app/js/jquery-2.2.1.min.js"></script>
        <link href="/static/app/theme/default/css/tip.css" rel="stylesheet" />
    </head>
    <body style="font-size: 12px;background-color: #1b66ff">
        <div id="app">

            <div id="sale_tips" class="Router">
                <div class="title">
                    <svg class="icon" style="width: 0.6rem;height: 0.6rem;margin-right: 0.1rem;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path d="M818.432 204.493c-62.26-0.103-174.797-15.36-271.462-109.722-17.101-16.691-43.879-18.483-62.67-3.686-50.226 39.577-153.446 106.598-279.807 109.773-25.805 0.665-46.336 21.862-46.336 47.718v300.34c0 60.774-3.482 195.634 331.315 386.508a47.852 47.852 0 0 0 45.158 1.178c329.728-165.837 331.316-308.224 331.316-362.855V252.262c0.05-26.316-21.197-47.718-47.514-47.77z m-344.166 91.545c0-20.89 16.947-37.836 37.836-37.836s37.837 16.947 37.837 37.836v240.794c0 20.89-16.947 37.837-37.837 37.837s-37.836-16.947-37.836-37.837V296.038zM512.05 721.05c-28.211 0-51.046-22.836-51.046-51.047s22.835-51.046 51.046-51.046 51.047 22.835 51.047 51.046c0.05 28.16-22.836 51.047-51.047 51.047z" fill="#3DDA92" p-id="30511"></path><path d="M837.018 290.97a545.78 545.78 0 0 0-6.656-84.89 47.82 47.82 0 0 0-11.879-1.587c-62.259-0.103-174.797-15.36-271.462-109.722-17.101-16.691-43.879-18.483-62.669-3.686-50.227 39.577-153.446 106.598-279.808 109.773-25.805 0.665-46.336 21.862-46.336 47.718v300.34c0 49.1-2.253 146.687 173.722 283.084 282.112-19.2 505.088-254.003 505.088-541.03z m-362.752 5.068c0-20.89 16.947-37.836 37.836-37.836s37.837 16.947 37.837 37.836v240.794c0 20.89-16.947 37.837-37.837 37.837s-37.836-16.947-37.836-37.837V296.038z m37.785 322.868c28.211 0 51.047 22.835 51.047 51.046s-22.836 51.046-51.047 51.046-51.046-22.835-51.046-51.046c0-28.16 22.886-51.046 51.046-51.046z" fill="#3DDA92" p-id="30512"></path><path d="M547.02 94.771c-17.1-16.691-43.878-18.483-62.668-3.686-50.227 39.577-153.446 106.598-279.808 109.773-25.805 0.665-46.336 21.862-46.336 47.718v300.34c0 21.452-0.41 52.12 13.722 91.186 113.356-5.273 217.6-45.414 302.336-109.875V296.038c0-20.89 16.947-37.836 37.836-37.836s37.837 16.947 37.837 37.836v164.455c68.967-76.8 116.327-173.312 132.557-280.115-44.34-16.18-91.546-42.701-135.475-85.607z" fill="#3DDA92" p-id="30513"></path><path d="M522.957 82.022c-13.21-2.713-27.341 0.154-38.656 9.063-50.227 39.577-153.447 106.598-279.808 109.773-25.805 0.665-46.336 21.862-46.336 47.718v179.507c171.059-48.537 307.558-178.841 364.8-346.06z" fill="#3DDA92"></path></svg>
                    <p>确认支付安全提示</p>
                </div> 
                <div class="container">
                    <div class="order_box">
                        <div class="tit">
                            <div class="tit"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAkCAYAAAAdFbNSAAAExUlEQVRYR+1Zz2tdRRT+zs1LmkbzKoibLsVNXAjm3RQ3EhcVRQR3QhfWhRtNtf4oXYpFizs3btzoqjtd+Ad0o4KgdltasFSISKoI2kxSTfNe3pGZe+/cM2dm3r1WFAo+SF7eu/Pjm+9855szEyrP778AxjoVeBLAfWheVP3h3uyv+jMK9k2C72Ub39H2q9s3/etnpD7redvJqydMfLNgXGQ6+JLK9yYfE/gYCCsAD4LODXAJqAGhFzMLdAogtTwEi/cLjhZ7AMIVInxHa+/ubwJ0FMCg6qwa28GbSaN30VY/CxbFAmEYOR9JGZ088AkTtqg8N94h4N441B1h9czWgDJsellJIJmozJaMx7NLa+fGBsCy15BnLGa8aRMw79rnmYxAd7TPM9/goR1ae2e8DWAYMS0TUkompfMci1mdCxkGSdtH52Ro9PZ4G4xhzLTQXsOOSr6Y8aZPWlqedS8lJa1+DmPo4bPjbVAf0EoGOkFlIiaSOSIlFZ0+oAmGXvzoQIBOuEEuq3MTyO9Ttti6fKsF6VpKLsFeUfU1dPnHaQtaDpgaXD/XAGUeuMCoBNXPgyytIxm1iUAZYuYqEe+e1/+g/6tY3aVMX95MJGIuwbq47ErMzkQXFWTeCAyd/FCAtv6amNhtIkFB1KNQ8nanSllZ7ibsLa5VavQtBkMrp2ufztUEdpKmgyyS9ITB5iInChfoOdFEZOrugCzbh2Fo9YwEnZ8sMvlclZesNxLbdbaGyUSxVYChMgu6NvtM0RNJJlFUOQqiCMQLSJakcpcMMQjQeifSTMrnKZZmge4B3A8fyEbkWDuGofItWXtEoheJOYMhVYcEp58uratoJGv1sI2h8k3rHtyWpj7rhecEE9/hiSZaWEf+JNs74mrQrvaYXdu22kycUuqFzjzRBJapTvjSalW7aExiQ+UbU3Fy6VG8BwzEmR57eiKhI7sTbbpyx5am5etyc3F8u4oyOPcJny7uOKnUSV8zH8hyRv5Yn3aggaFlyGIdH1Q/LA+r9QRzBbAwD9h3DiZNZnnleN1uUHHbnwxDoxr0dArMzQEPHAHuHwJFESfin/uMGzeBP/aAYk5v7WkZJM+RDmTHJiJ9WrvH6HTF9N4+cM8i8NxjwNMl4ZC9a3Krb2uHH34BLnwBXPmJcWg+vbDowkfkQDZRU7YYse8XaciBZgx3bwNHloCXnwFOPEFYnBdM139eu8F4/zPg22uMwwsJ0H7yhFz6OkzWGv2YhkavVUzv7gHDJWDjWeDEOjkm9ev6z4zznwLffM9YkqCTbqAiJdr8Q4cxNHrVnhF5eOs2sLwEvPQU8PzjhMWFBNNbwAefMy5dBw47efQoURuJ6YU1e0u04M4xDY1OsQFheTxh5wyrDwGPPAjM20STngng123g66vA1m/AYGAlr2SgQzvLxoRm/5bDEHZo9RS3F5BgZ1GpW9IGz1QtpP9OmpBLVud5aTHhFo1e4U0UOEqEgd1UvE/LO4sasbVBKxvn01I9PsSJS8vsJpKWgQ+WHLOV0AREW7S6wZ8QcAzACgitKPTlud5e5aW4tKd/q4YpMAHjKhFfokc3+CQB60Q4Hv/7YnYt4liROvYLy1te+28Q2Tdsn9qQiKa/MxUXmfHVX7ovZcDll9F2AAAAAElFTkSuQmCC">您购买的订单信息，请核对</div>
                        </div>
                        <div class="goods">
                            <div class="goods_group">
                                <div>订单号：<?php echo $order['trade_no']; ?></div>
                            </div> 
                            
                            <div class="goods_group">
                                <div>商品名称：<?php echo $order['goods_name']; ?></div>
                            </div> 
                            <?php if(isset($order['quantity'])): ?>
                            <div class="goods_group">
                                <div>商品数量：<?php echo $order['quantity']; ?></div>
                            </div>
                            <?php endif; ?>
                            <div class="goods_group">
                                <div>订单价格：<?php echo $order['total_price']; ?>元</div>
                            </div>
                        </div>
                    </div>
                    
                   <p style="color:#FF0000;font-weight:bold;font-size: 15px;">请保存订单号用于订单查询，避免付款后无法及时获取商品。</p>
                        
                        
                    <!--div class="risk_box">
                        <div class="tit">
                            <img src="data:image/png;base64,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" />如您存在下列3种情形，请立即停止支付
                        </div> 
                        <div class="content">
                            <div class="risk_group">
                                <div>
                                    1. 扫描他人给的二维码
                                </div> 
                                <div>
                                    骗子通过QQ、微信等途径发送二维码让您支付，承诺自己各种靠谱，那么支付后将
                                    <b>100%上当受骗</b>，已有多人因此钱货两空，切勿支付！
                                </div>
                            </div> 
                            <div class="risk_group">
                                <div>
                                    2. 购买的商品与上述不符
                                </div> 
                                <div>
                                    骗子实际利用您购买上述商品，支付完成，骗子将得到上述商品，而您将进入骗子黑名单，发送聊天将得到
                                    <b>红色感叹号</b>
                                </div>
                            </div> 
                            <div class="risk_group">
                                <div>
                                    3. 冒充客服发送二维码支付
                                </div> 
                                <div>
                                    骗子号称是平台客服，谎称可以退款缴纳保证金等，以各种理由让其放心支付，支付完成您将
                                    <b>钱货两空</b>，无一例外
                                </div>
                            </div>
                        </div>
                    </div--> 
                    <div class="btns">
                        <!--<a href="http://wpa.qq.com/msgrd?v=3&uin=<?php echo sysconf('site_info_qq'); ?>&Site=" class="btn_cons">联系客服</a> -->
                        
                        <a href="#" onclick="window.close()" class="btn_cons">停止支付</a>
                        <a id="d1" class="btn_gopay ban"  href="<?php echo url('payment',['trade_no'=>$order['trade_no'],'tip'=>0]); ?>">
                            继续支付
                        </a>
                        <a id="d2" style="display: none" class="btn_gopay" href="/orderquery?orderid=<?php echo $order['trade_no']; ?>">
                            付款成功，查看卡密
                        </a>
                    </div>
                </div>
            </div> 
        </div>
        <script type="text/javascript">

            function oderquery(t) {
                var orderid = '<?php echo $order['trade_no']; ?>';
                $.post('/pay/getOrderStatus', {
                    orderid: orderid,
                    token: "<?php echo $token; ?>"
                }, function (ret) {
                    if (ret == 1) {
                        $("#d1").hide();
                        $("#d2").show();
                    }
                });
                t = t + 1;
                setTimeout('oderquery(' + t + ')', 3000);
            }
            $(function () {
                $("#d1").click(function () {
                    setTimeout('oderquery(1)', 3000);
                });
            });
        </script>
    </body>
</html>
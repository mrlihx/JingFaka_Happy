### 鲸发卡v11.61开心版 无后门

> 安装教程：
    1.上传所有文件到服务器 或者宝塔
    2.修改伪静态为thinkphp，php版本为7.0
    3.导入源码中数据库文件
    4.修改数据库配置文件/application/database.php
    5.登录后台 域名/admin
后台账号密码admin密码123456

定时任务计划设置教程
进入宝塔控制面板-----计划任务  填写计划任务

1.解冻任务 设置时间每小时第2分钟 执行
cd /www/wwwroot/您的网站目录
php think UnfreezeMoney

2.提现任务 设置时间每小时第5分钟 执行
cd /www/wwwroot/您的网站目录
php think AutoCash

3.3天没有支付的订单视为无效 建议执行时间为 1天一次
cd /www/wwwroot/您的网站目录
php think AutoClearExpireOrder

4.自动清理删除超过十五天的商品 建议执行时间1天一次
cd /www/wwwroot/您的网站目录
php think AutoEmptyGoodsTrash

如果定时任务有报错请看另一个word文档教程

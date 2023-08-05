### 鲸发卡v11.61开心版 无后门

[鲸发卡官方文档](https://itlanjing.feishu.cn/docs/doccnWnkDiCaf5Hz9BLP092Dnzd)

[鲸发卡官方文档New](https://itlanjing.feishu.cn/docs/doccnz1GgIk19o8d1F5ylG6cs9b#Yks5Dl)

> 安装
1. 上传所有文件到服务器 或者宝塔
2. 修改thinkphp伪静态，php版本为7.0
3. **`/install`** 安装
4. 登录后台 **`/admin`**

### 定时任务计划设置
进入宝塔控制面板-----计划任务  填写计划任务

1. 解冻任务 设置时间每小时第2分钟 执行

    **`cd /www/wwwroot/website`**

    **`php think UnfreezeMoney`**

2. 提现任务 设置时间每小时第5分钟 执行

   **`cd /www/wwwroot/website`**

   **`php think AutoCash`**

3. 3天没有支付的订单视为无效 建议执行时间为 1天一次

   **`cd /www/wwwroot/website`**

   **`php think AutoClearExpireOrder`**

4. 自动清理删除超过十五天的商品 建议执行时间1天一次

   **`cd /www/wwwroot/website`**

   **`php think AutoEmptyGoodsTrash`**


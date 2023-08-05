<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:85:"/www/wwwroot/shop.paozf.com/application/templates/pc/wechat/default/config/index.html";i:1646323578;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/wechat/default/content.html";i:1646323578;}*/ ?>
<div class="ibox">
    
    <?php if(isset($title)): ?>
    <div class="ibox-title notselect">
        <h5><?php echo $title; ?></h5>
        
    </div>
    <?php endif; ?>
    <div class="ibox-content">
        <?php if(isset($alert)): ?>
        <div class="alert alert-<?php echo $alert['type']; ?> alert-dismissible" role="alert" style="border-radius:0">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <?php if(isset($alert['title'])): ?><p style="font-size:18px;padding-bottom:10px"><?php echo $alert['title']; ?></p><?php endif; if(isset($alert['content'])): ?><p style="font-size:14px"><?php echo $alert['content']; ?></p><?php endif; ?>
        </div>
        <?php endif; ?>
        
<form onsubmit="return false;" action="__SELF__" data-auto="true" method="post" class='form-horizontal' style='padding-top:20px'>

    <div class="form-group">
        <label class="col-sm-2 control-label">URL <span class="nowrap">(服务器地址)</span></label>
        <div class="col-sm-8">
            <input onmouseenter="this.select()" class="layui-input" readonly="readonly" value="<?php echo url('@wechat/api','',true,true); ?>"/>
            <p class="help-block">
                请复制此URL地址填写在公众号平台 [ 开发 >> 基本配置 ] 中 [ URL ( 服务器地址 ) ]
                <br/><b>注意</b>：URL主域名必需备案，微信服务接口只支持 80 端口 ( http ) 和 443 端口 ( https )
            </p>
        </div>
    </div>

    <div class="hr-line-dashed"></div>

    <div class="form-group">
        <label class="col-sm-2 control-label">AppID <span class="nowrap">(应用ID)</span></label>
        <div class='col-sm-8'>
            <input type="text" name="wechat_appid" title="请输入以wx开头的18位公众号APPID"  placeholder="公众号APPID（必填）" pattern="^wx[0-9a-z]{16}$" maxlength="18" required="required" value="<?php echo sysconf('wechat_appid'); ?>" class="layui-input">
            <p class="help-block">
                公众号应用ID是所有接口必要参数，可以在公众号平台 [ 开发 >> 基本配置 ] 页面获取。
            </p>
        </div>
    </div>


    <div class="form-group">
        <label class="col-sm-2 control-label">AppSecret <span class="nowrap">(应用密钥)</span></label>
        <div class='col-sm-8'>
            <input type="password" name="wechat_appsecret" required="required" title="请输入32位公众号AppSecret" placeholder="公众号AppSecret（必填）" value="<?php echo sysconf('wechat_appsecret'); ?>" maxlength="32" pattern="^[0-9a-z]{32}$" class="layui-input">
            <p class="help-block">
                公众号应用密钥是所有接口必要参数，可以在公众号平台 [ 开发 >> 基本配置 ] 页面授权后获取。
            </p>
        </div>
    </div>


    <div class="form-group">
        <label class="col-sm-2 control-label">Token <span class="nowrap">(令牌)</span></label>
        <div class='col-sm-8'>
            <input type="text" name="wechat_token" required="required" title="请输入接口Token(令牌)" placeholder="Token（令牌）" value="<?php echo sysconf('wechat_token'); ?>" class="layui-input">
            <p class="help-block">
                公众号平台与系统对接认证Token，请优先填写此参数并保存，然后再在微信公众号平台操作对接。
            </p>
        </div>
    </div>


    <div class="form-group">
        <label class="col-sm-2 control-label">Encoding <span class="nowrap">AESKey</span></label>
        <div class='col-sm-8'>
            <input type="text" name="wechat_encodingaeskey" title="请输入43位消息加密密钥" placeholder="消息加密密钥，若开启了消息加密时必需填写（可选）" value="<?php echo sysconf('wechat_encodingaeskey'); ?>" maxlength="43" class="layui-input">
            <p class="help-block">
                公众号平台接口设置为加密模式，消息加密密钥必需填写并保持与公众号平台一致。
            </p>
        </div>
    </div>

    <div class="hr-line-dashed"></div>


    <div class="form-group">
        <label class="col-sm-2 control-label">微信通知总开关</label>
        <div class='col-sm-8'>
            <select name="wechat_notify" class="layui-input" required>
                <option value="0" <?php if(sysconf('wechat_notify')=='0'): ?>selected<?php endif; ?>>关闭</option>
                <option value="1" <?php if(sysconf('wechat_notify')=='1'): ?>selected<?php endif; ?>>开启</option>
            </select>
        </div>
    </div>


    <div class="form-group layui-form-item">
        <label class="col-sm-2 control-label">库存通知模板 ID</label>
        <div class='col-sm-8'>
            <input type="text" name="wechat_stock_template" title="库存通知模板 ID" placeholder="库存通知模板ID" value="<?php echo sysconf('wechat_stock_template'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group layui-form-item">
        <label class="col-sm-2 control-label">售卡通知模板 ID</label>
        <div class='col-sm-8'>
            <input type="text" name="wechat_sell_template" title="售卡通知模板 ID" placeholder="售卡通知模板 ID" value="<?php echo sysconf('wechat_sell_template'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>



    <div class="form-group layui-form-item">
        <label class="col-sm-2 control-label">用户登录提醒 ID</label>
        <div class='col-sm-8'>
            <input type="text" name="wechat_signin_template" title="用户登录提醒 ID" placeholder="用户登录提醒 ID" value="<?php echo sysconf('wechat_signin_template'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>


    <div class="form-group layui-form-item">
        <label class="col-sm-2 control-label">新建投诉单提醒 ID</label>
        <div class='col-sm-8'>
            <input type="text" name="wechat_complaint_template" title="新建投诉单提醒 ID" placeholder="新建投诉单提醒 ID" value="<?php echo sysconf('wechat_complaint_template'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>


    <div class="form-group layui-form-item">
        <label class="col-sm-2 control-label">提现成功通知 ID</label>
        <div class='col-sm-8'>
            <input type="text" name="wechat_cash_template" title="提现成功通知 ID" placeholder="提现成功通知 ID" value="<?php echo sysconf('wechat_cash_template'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>



    <div class="hr-line-dashed"></div>

    <div class="col-sm-4 col-sm-offset-2">
        <div class="layui-form-item text-center">
            <button class="layui-btn" type="submit">保存配置</button>
        </div>
    </div>

</form>


    </div>
    
</div>
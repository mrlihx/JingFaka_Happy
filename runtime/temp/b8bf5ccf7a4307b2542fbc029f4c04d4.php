<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:82:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/sms/index.html";i:1646323578;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/content.html";i:1646323578;}*/ ?>
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
        <label class="col-sm-2 control-label">验证码短信通道</label>
        <div class='col-sm-8'>
            <select name="sms_channel" class="layui-input">
                <option value="" <?php if(sysconf('sms_channel')==''): ?>selected<?php endif; ?>>关闭</option>
                <option value="yixin" <?php if(sysconf('sms_channel')=='yixin'): ?>selected<?php endif; ?>>弈新短信服务</option>
                <option value="smsbao" <?php if(sysconf('sms_channel')=='smsbao'): ?>selected<?php endif; ?>>短信宝</option>
                <option value="alidayu" <?php if(sysconf('sms_channel')=='alidayu'): ?>selected<?php endif; ?>>阿里云短信服务</option>
                <option value="1cloudsp" <?php if(sysconf('sms_channel')=='1cloudsp'): ?>selected<?php endif; ?>>天瑞云短信</option>
                <option value="253sms" <?php if(sysconf('sms_channel')=='253sms'): ?>selected<?php endif; ?>>创蓝253短信</option>
            </select>
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">订单通知短信通道</label>
        <div class='col-sm-8'>
            <select name="sms_notify_channel" class="layui-input">
                <option value="" <?php if(sysconf('sms_notify_channel')==''): ?>selected<?php endif; ?>>关闭</option>
                <option value="yixin" <?php if(sysconf('sms_notify_channel')=='yixin'): ?>selected<?php endif; ?>>弈新短信服务</option>
                <option value="smsbao" <?php if(sysconf('sms_notify_channel')=='smsbao'): ?>selected<?php endif; ?>>短信宝</option>
                <option value="253sms" <?php if(sysconf('sms_notify_channel')=='253sms'): ?>selected<?php endif; ?>>创蓝253短信</option>
                <option value="alidayu" <?php if(sysconf('sms_notify_channel')=='alidayu'): ?>selected<?php endif; ?>>阿里云短信服务</option>
                <option value="1cloudsp" <?php if(sysconf('sms_notify_channel')=='1cloudsp'): ?>selected<?php endif; ?>>天瑞云短信</option>
            </select>
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">投诉密码短信通道</label>
        <div class='col-sm-8'>
            <select name="sms_complaint_channel" class="layui-input">
                <option value="" <?php if(sysconf('sms_complaint_channel')==''): ?>selected<?php endif; ?>>关闭</option>
                <option value="yixin" <?php if(sysconf('sms_complaint_channel')=='yixin'): ?>selected<?php endif; ?>>弈新短信服务</option>
                <option value="smsbao" <?php if(sysconf('sms_complaint_channel')=='smsbao'): ?>selected<?php endif; ?>>短信宝</option>
                <option value="alidayu" <?php if(sysconf('sms_complaint_channel')=='alidayu'): ?>selected<?php endif; ?>>阿里云短信服务</option>
                <option value="1cloudsp" <?php if(sysconf('sms_complaint_channel')=='1cloudsp'): ?>selected<?php endif; ?>>天瑞云短信</option>
                <option value="253sms" <?php if(sysconf('sms_complaint_channel')=='253sms'): ?>selected<?php endif; ?>>创蓝253短信</option>
            </select>
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">投诉通知短信通道</label>
        <div class='col-sm-8'>
            <select name="sms_complaint_notify_channel" class="layui-input">
                <option value="" <?php if(sysconf('sms_complaint_notify_channel')==''): ?>selected<?php endif; ?>>关闭</option>
                <option value="yixin" <?php if(sysconf('sms_complaint_notify_channel')=='yixin'): ?>selected<?php endif; ?>>弈新短信服务</option>
                <option value="smsbao" <?php if(sysconf('sms_complaint_notify_channel')=='smsbao'): ?>selected<?php endif; ?>>短信宝</option>
                <option value="alidayu" <?php if(sysconf('sms_complaint_notify_channel')=='alidayu'): ?>selected<?php endif; ?>>阿里云短信服务</option>
                <option value="1cloudsp" <?php if(sysconf('sms_complaint_notify_channel')=='1cloudsp'): ?>selected<?php endif; ?>>天瑞云短信</option>
                <option value="253sms" <?php if(sysconf('sms_complaint_notify_channel')=='253sms'): ?>selected<?php endif; ?>>创蓝253短信</option>
            </select>
            <p class="help-block"></p>
        </div>
    </div>

    <div class="hr-line-dashed"></div>
    弈新短信服务配置

    <div class="form-group">
        <label class="col-sm-2 control-label">弈新账号</label>
        <div class='col-sm-8'>
            <input type="text" name="yixin_sms_user" required="required" title="请输入弈新账号" placeholder="请输入弈新账号" value="<?php echo sysconf('yixin_sms_user'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">弈新密码</label>
        <div class='col-sm-8'>
            <input type="text" name="yixin_sms_pass" required="required" title="请输入弈新密码" placeholder="请输入弈新密码" value="<?php echo sysconf('yixin_sms_pass'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">短信签名</label>
        <div class='col-sm-8'>
            <input type="text" name="yixin_sms_signature" required="required" title="请输入短信签名" placeholder="请输入短信签名" value="<?php echo sysconf('yixin_sms_signature'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">短信费用（元/条）</label>
        <div class='col-sm-8'>
            <input type="text" name="yixin_sms_cost" required="required" title="请输入短信费用" placeholder="请输入短信费用" value="<?php echo sysconf('yixin_sms_cost'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    短信宝配置

    <div class="form-group">
        <label class="col-sm-2 control-label">短信宝账号</label>
        <div class='col-sm-8'>
            <input type="text" name="smsbao_user" required="required" title="请输入短信宝账号" placeholder="请输入短信宝账号" value="<?php echo sysconf('smsbao_user'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">短信宝密码</label>
        <div class='col-sm-8'>
            <input type="text" name="smsbao_pass" required="required" title="请输入短信宝密码" placeholder="请输入短信宝密码" value="<?php echo sysconf('smsbao_pass'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">短信签名</label>
        <div class='col-sm-8'>
            <input type="text" name="smsbao_signature" required="required" title="请输入短信签名" placeholder="请输入短信签名" value="<?php echo sysconf('smsbao_signature'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">短信费用（元/条）</label>
        <div class='col-sm-8'>
            <input type="text" name="smsbao_cost" required="required" title="请输入短信费用" placeholder="请输入短信费用" value="<?php echo sysconf('smsbao_cost'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    阿里云短信配置

    <div class="form-group">
        <label class="col-sm-2 control-label">app key</label>
        <div class='col-sm-8'>
            <input type="text" name="alidayu_key" required="required" title="请输入app key" placeholder="请输入app key" value="<?php echo sysconf('alidayu_key'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">app secret</label>
        <div class='col-sm-8'>
            <input type="text" name="alidayu_secret" required="required" title="请输入app secret" placeholder="请输入app secret" value="<?php echo sysconf('alidayu_secret'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">验证码模板编号</label>
        <div class='col-sm-8'>
            <input type="text" name="alidayu_smstpl" required="required" title="请输入模板编号" placeholder="请输入模板编号" value="<?php echo sysconf('alidayu_smstpl'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">投诉密码模板编号</label>
        <div class='col-sm-8'>
            <input type="text" name="alidayu_complaint_smstpl" required="required" title="请输入模板编号" placeholder="请输入模板编号" value="<?php echo sysconf('alidayu_complaint_smstpl'); ?>" class="layui-input">
            <p class="help-block">短信模板应如下：您的订单：${trade_no},已投诉成功，投诉密码为：${code}，在卖家未给您处理好问题前，请勿将密码告知任何人！</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">投诉通知模板编号</label>
        <div class='col-sm-8'>
            <input type="text" name="alidayu_complaint_notify_smstpl" required="required" title="请输入模板编号" placeholder="请输入模板编号" value="<?php echo sysconf('alidayu_complaint_notify_smstpl'); ?>" class="layui-input">
            <p class="help-block">短信模板应如下：您的订单：${trade_no}，已经有买家投诉，请您及时登录后台处理。</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">订单通知模板编号</label>
        <div class='col-sm-8'>
            <input type="text" name="alidayu_order_smstpl" required="required" title="请输入模板编号" placeholder="请输入模板编号" value="<?php echo sysconf('alidayu_order_smstpl'); ?>" class="layui-input">
            <p class="help-block">短信模板应如下：您的订单已支付成功，订单号：${trade_no}，若您付款成功后没有领取虚拟卡信息，请您及时通过订单查询提取。</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">signature (签名)</label>
        <div class='col-sm-8'>
            <input type="text" name="alidayu_signature" required="required" title="请输入签名" placeholder="请输入签名" value="<?php echo sysconf('alidayu_signature'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">短信费用（元/条）</label>
        <div class='col-sm-8'>
            <input type="text" name="alidayu_cost" required="required" title="请输入短信费用" placeholder="请输入短信费用" value="<?php echo sysconf('alidayu_cost'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    天瑞云短信配置

    <div class="form-group">
        <label class="col-sm-2 control-label">AccessKey</label>
        <div class='col-sm-8'>
            <input type="text" name="1cloudsp_key" required="required" title="请输入AccessKey" placeholder="请输入AccessKey" value="<?php echo sysconf('1cloudsp_key'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">AccessSecret</label>
        <div class='col-sm-8'>
            <input type="text" name="1cloudsp_secret" required="required" title="请输入AccessSecret" placeholder="请输入AccessSecret" value="<?php echo sysconf('1cloudsp_secret'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">验证码模板编号</label>
        <div class='col-sm-8'>
            <input type="text" name="1cloudsp_smstpl" required="required" title="请输入模板编号" placeholder="请输入模板编号" value="<?php echo sysconf('1cloudsp_smstpl'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">投诉密码模板编号</label>
        <div class='col-sm-8'>
            <input type="text" name="1cloudsp_complaint_smstpl" required="required" title="请输入模板编号" placeholder="请输入模板编号" value="<?php echo sysconf('1cloudsp_complaint_smstpl'); ?>" class="layui-input">
            <p class="help-block">短信模板应如下：您的订单：{1},已投诉成功，投诉密码为：{2}，在卖家未给您处理好问题前，请勿将密码告知任何人！</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">投诉通知模板编号</label>
        <div class='col-sm-8'>
            <input type="text" name="1cloudsp_complaint_notify_smstpl" required="required" title="请输入模板编号" placeholder="请输入模板编号" value="<?php echo sysconf('1cloudsp_complaint_notify_smstpl'); ?>" class="layui-input">
            <p class="help-block">短信模板应如下：您的订单：{1}，已经有买家投诉，请您及时登录后台处理。</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">订单通知模板编号</label>
        <div class='col-sm-8'>
            <input type="text" name="1cloudsp_order_smstpl" required="required" title="请输入模板编号" placeholder="请输入模板编号" value="<?php echo sysconf('1cloudsp_order_smstpl'); ?>" class="layui-input">
            <p class="help-block">短信模板应如下：您的订单已支付成功，订单号：{1}，若您付款成功后没有领取虚拟卡信息，请您及时通过订单查询提取。</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">signature (签名)</label>
        <div class='col-sm-8'>
            <input type="text" name="1cloudsp_signature" required="required" title="请输入签名" placeholder="请输入签名" value="<?php echo sysconf('1cloudsp_signature'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">短信费用（元/条）</label>
        <div class='col-sm-8'>
            <input type="text" name="1cloudsp_cost" required="required" title="请输入短信费用" placeholder="请输入短信费用" value="<?php echo sysconf('1cloudsp_cost'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>
    <div class="hr-line-dashed"></div>
    创蓝235短信配置

    <div class="form-group">
        <label class="col-sm-2 control-label">api_account</label>
        <div class='col-sm-8'>
            <input type="text" name="253sms_key" required="required" title="请输入api_account" placeholder="请输入api_account" value="<?php echo sysconf('253sms_key'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">api_password</label>
        <div class='col-sm-8'>
            <input type="text" name="253sms_secret" required="required" title="请输入api_password" placeholder="请输入api_password" value="<?php echo sysconf('253sms_secret'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">signature (签名)</label>
        <div class='col-sm-8'>
            <input type="text" name="253sms_signature" required="required" title="请输入签名" placeholder="请输入签名" value="<?php echo sysconf('253sms_signature'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">短信费用（元/条）</label>
        <div class='col-sm-8'>
            <input type="text" name="253sms_cost" required="required" title="请输入短信费用" placeholder="请输入短信费用" value="<?php echo sysconf('253sms_cost'); ?>" class="layui-input">
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
<script>
    layui.use('form', function(){
        var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
        form.render();
    });
</script>

    </div>
    
</div>
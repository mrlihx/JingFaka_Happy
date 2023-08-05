<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:86:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/site/register.html";i:1646323578;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/content.html";i:1646323578;}*/ ?>
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
        <label class="col-sm-2 control-label">用户审核</label>
        <div class='col-sm-8'>
            <select name="site_register_verify" class="layui-input" required>
                <option value="1" <?php if(sysconf('site_register_verify')==1): ?>selected<?php endif; ?>>自动审核</option>
                <option value="2" <?php if(sysconf('site_register_verify')==2): ?>selected<?php endif; ?>>手动审核</option>
            </select>
            <p class="help-block">用户审核</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">用户注册</label>
        <div class='col-sm-8'>
            <select name="site_register_status" class="layui-input" required>
                <option value="0" <?php if(sysconf('site_register_status')==0): ?>selected<?php endif; ?>>关闭注册</option>
                <option value="1" <?php if(sysconf('site_register_status')==1): ?>selected<?php endif; ?>>开启注册</option>
            </select>
            <p class="help-block">用户注册</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">验证状态</label>
        <div class='col-sm-8'>
            <select name="site_register_smscode_status" class="layui-input" required>
                <option value="0" <?php if(sysconf('site_register_smscode_status')==0): ?>selected<?php endif; ?>>关闭验证</option>
                <option value="1" <?php if(sysconf('site_register_smscode_status')==1): ?>selected<?php endif; ?>>开启验证</option>
            </select>
            <p class="help-block">验证状态</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">验证方式</label>
        <div class='col-sm-8'>
            <select name="site_register_code_type" class="layui-input" required>
                <option value="sms" <?php if(sysconf('site_register_code_type')=='sms'): ?>selected<?php endif; ?>>短信验证</option>
                <option value="email" <?php if(sysconf('site_register_code_type')=='email'): ?>selected<?php endif; ?>>邮箱验证</option>
            </select>
            <p class="help-block">验证验证,只有验证状态为开启时候才生效</p>
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
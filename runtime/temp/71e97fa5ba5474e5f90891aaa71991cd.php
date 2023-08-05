<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:84:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/email/index.html";i:1646323578;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/content.html";i:1646323578;}*/ ?>
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
        <label class="col-sm-2 control-label">发件人</label>
        <div class='col-sm-8'>
            <input type="text" name="email_name" required="required" title="请输入发件人" placeholder="请输入发件人" value="<?php echo sysconf('email_name'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">SMTP服务器</label>
        <div class='col-sm-8'>
            <input type="text" name="email_smtp" required="required" title="请输入SMTP服务器" placeholder="请输入SMTP服务器" value="<?php echo sysconf('email_smtp'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">端　口</label>
        <div class='col-sm-8'>
            <input type="text" name="email_port" required="required" title="请输入端口" placeholder="请输入端口" value="<?php echo sysconf('email_port'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">账　号</label>
        <div class='col-sm-8'>
            <input type="text" name="email_user" required="required" title="请输入账号" placeholder="请输入账号" value="<?php echo sysconf('email_user'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">密　码</label>
        <div class='col-sm-8'>
            <input type="text" name="email_pass" required="required" title="请输入密码" placeholder="请输入密码" value="<?php echo sysconf('email_pass'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="hr-line-dashed"></div>

    <div class="form-group">
        <label class="col-sm-2 control-label">SMTP服务器</label>
        <div class='col-sm-8'>
            <input type="text" name="email_smtp1" title="请输入SMTP服务器" placeholder="请输入SMTP服务器" value="<?php echo sysconf('email_smtp1'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">端　口</label>
        <div class='col-sm-8'>
            <input type="text" name="email_port1" title="请输入端口" placeholder="请输入端口" value="<?php echo sysconf('email_port1'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">账　号</label>
        <div class='col-sm-8'>
            <input type="text" name="email_user1" title="请输入账号" placeholder="请输入账号" value="<?php echo sysconf('email_user1'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">密　码</label>
        <div class='col-sm-8'>
            <input type="text" name="email_pass1" title="请输入密码" placeholder="请输入密码" value="<?php echo sysconf('email_pass1'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="hr-line-dashed"></div>

    <div class="form-group">
        <label class="col-sm-2 control-label">SMTP服务器</label>
        <div class='col-sm-8'>
            <input type="text" name="email_smtp2" title="请输入SMTP服务器" placeholder="请输入SMTP服务器" value="<?php echo sysconf('email_smtp2'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">端　口</label>
        <div class='col-sm-8'>
            <input type="text" name="email_port2" title="请输入端口" placeholder="请输入端口" value="<?php echo sysconf('email_port2'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">账　号</label>
        <div class='col-sm-8'>
            <input type="text" name="email_user2" title="请输入账号" placeholder="请输入账号" value="<?php echo sysconf('email_user2'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">密　码</label>
        <div class='col-sm-8'>
            <input type="text" name="email_pass2" title="请输入密码" placeholder="请输入密码" value="<?php echo sysconf('email_pass2'); ?>" class="layui-input">
            <p class="help-block"></p>
        </div>
    </div>

    <div class="hr-line-dashed"></div>

    <div class="col-sm-4">
        <div class="layui-form-item text-center">
            <button class="layui-btn" type="submit">保存配置</button>
            <button class="layui-btn btn-send" type="button">发信测试</button>
        </div>
    </div>

</form>
<script>
$('.btn-send').click(function(){
    var address=prompt("请输入需接受测试的邮箱号（注意先保存配置）");
    if(address){
        $.ajax({
            url:'/manage/email/test',
            data:{
                address:address
            },
            dataType:'json',
            success:function(res){
                alert(res.msg);
            }
        })
    }
});
</script>

    </div>
    
</div>
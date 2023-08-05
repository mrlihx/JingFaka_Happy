<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:83:"/www/wwwroot/shop.paozf.com/application/templates/pc/admin/default/config/file.html";i:1646323578;s:79:"/www/wwwroot/shop.paozf.com/application/templates/pc/admin/default/content.html";i:1646323578;}*/ ?>
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
        
<form onsubmit="return false;" action="__SELF__" data-auto="true" method="post" class='form-horizontal layui-form' style='padding-top:20px'>

    <div class="form-group">
        <label class="col-sm-2 control-label label-required">Storage <span class="nowrap">(存储引擎)</span></label>
        <div class='col-sm-8'>
            <label class="think-radio">
                <!--<?php if(sysconf('storage_type') == 'local'): ?>-->
                <input checked type="radio" name="storage_type" value="local" title="本地服务器" lay-ignore>
                <!--<?php else: ?>-->
                <input type="radio" name="storage_type" value="local" title="本地服务器" lay-ignore>
                <!--<?php endif; ?>-->
                本地服务器
            </label>
            <label class="think-radio">
                <!--<?php if(sysconf('storage_type') == 'qiniu'): ?>-->
                <input checked type="radio" name="storage_type" value="qiniu" title="七牛云存储" lay-ignore>
                <!--<?php else: ?>-->
                <input type="radio" name="storage_type" value="qiniu" title="七牛云存储" lay-ignore>
                <!--<?php endif; ?>-->
                七牛云存储
            </label>
            <label class="think-radio">
                <!--<?php if(sysconf('storage_type') == 'oss'): ?>-->
                <input checked type="radio" name="storage_type" value="oss" title="AliOSS存储" lay-ignore>
                <!--<?php else: ?>-->
                <input type="radio" name="storage_type" value="oss" title="AliOSS存储" lay-ignore>
                <!--<?php endif; ?>-->
                AliOSS存储
            </label>
            <div class="help-block" data-storage-type="local">
                文件将存储在本地服务器，请确保服务器的 ./static/upload 目录有写入权限
            </div>
            <div class="help-block" data-storage-type="qiniu">
                若还没有七牛云帐号，请点击
                <a target="_blank" href="https://portal.qiniu.com/signup?code=3lhz6nmnwbple">免费申请10G存储空间</a>,
                申请成功后添加公开bucket空间
            </div>
            <div class="help-block" data-storage-type="oss">
                若还没有AliOSS存储账号, 请点击 <a target="_blank" href="https://oss.console.aliyun.com">创建AliOSS存储空间</a>,
                目前仅支持公开空间URL访问, 另外还需要配置AliOSS跨域策略
            </div>
        </div>
    </div>

    <div class="hr-line-dashed" data-storage-type="qiniu"></div>
    <div class="hr-line-dashed" data-storage-type="oss"></div>

    <div class="form-group" data-storage-type="qiniu">
        <label class="col-sm-2 control-label">Region <span class="nowrap">(存储区域)</span></label>
        <div class='col-sm-8'>
            <label class="think-radio">
                <!--<?php if(sysconf('storage_qiniu_region') == '华东'): ?>-->
                <input checked type="radio" name="storage_qiniu_region" value="华东" lay-ignore>
                <!--<?php else: ?>-->
                <input type="radio" name="storage_qiniu_region" value="华东" lay-ignore>
                <!--<?php endif; ?>-->
                华东
            </label>
            <label class="think-radio">
                <!--<?php if(sysconf('storage_qiniu_region') == '华北'): ?>-->
                <input checked type="radio" name="storage_qiniu_region" value="华北" lay-ignore>
                <!--<?php else: ?>-->
                <input type="radio" name="storage_qiniu_region" value="华北" lay-ignore>
                <!--<?php endif; ?>-->
                华北
            </label>
            <label class="think-radio">
                <!--<?php if(sysconf('storage_qiniu_region') == '华南'): ?>-->
                <input checked type="radio" name="storage_qiniu_region" value="华南" lay-ignore>
                <!--<?php else: ?>-->
                <input type="radio" name="storage_qiniu_region" value="华南" lay-ignore>
                <!--<?php endif; ?>-->
                华南
            </label>
            <label class="think-radio">
                <!--<?php if(sysconf('storage_qiniu_region') == '北美'): ?>-->
                <input checked type="radio" name="storage_qiniu_region" value="北美" lay-ignore>
                <!--<?php else: ?>-->
                <input type="radio" name="storage_qiniu_region" value="北美" lay-ignore>
                <!--<?php endif; ?>-->
                北美
            </label>
            <label class="think-radio">
                <!--<?php if(sysconf('storage_qiniu_region') == '东南亚'): ?>-->
                <input checked type="radio" name="storage_qiniu_region" value="东南亚" lay-ignore>
                <!--<?php else: ?>-->
                <input type="radio" name="storage_qiniu_region" value="东南亚" lay-ignore>
                <!--<?php endif; ?>-->
                东南亚
            </label>
            <label class="think-radio">
                <!--<?php if(sysconf('storage_qiniu_region') == '华东-浙江2'): ?>-->
                <input checked type="radio" name="storage_qiniu_region" value="华东-浙江2" lay-ignore>
                <!--<?php else: ?>-->
                <input type="radio" name="storage_qiniu_region" value="华东-浙江2" lay-ignore>
                <!--<?php endif; ?>-->
                华东-浙江2
            </label>
            <p class="help-block">七牛云存储空间所在区域，需要严格对应储存所在区域才能上传文件</p>
        </div>
    </div>

    <div class="form-group" data-storage-type="qiniu">
        <label class="col-sm-2 control-label">Protocol <span class="nowrap">(访问协议)</span></label>
        <div class='col-sm-8'>
            <!--<?php if(sysconf('storage_qiniu_is_https')!=='1'): ?>-->
            <label class="think-radio">
                <input checked type="radio" name="storage_qiniu_is_https" value="0" lay-ignore> http
            </label>
            <label class="think-radio">
                <input type="radio" name="storage_qiniu_is_https" value="1" lay-ignore> https
            </label>
            <!--<?php else: ?>-->
            <label class="think-radio">
                <input type="radio" name="storage_qiniu_is_https" value="0" lay-ignore> http
            </label>
            <label class="think-radio">
                <input checked type="radio" name="storage_qiniu_is_https" value="1" lay-ignore> https
            </label>
            <!--<?php endif; ?>-->
            <p class="help-block">七牛云资源访问协议（http 或 https），https 需要配置证书才能使用</p>
        </div>
    </div>

    <div class="form-group" data-storage-type="local">
        <label class="col-sm-2 control-label">AllowExts <span class="nowrap">(允许类型)</span></label>
        <div class='col-sm-8'>
            <input type="text" name="storage_local_exts" required="required" value="<?php echo sysconf('storage_local_exts'); ?>"
                   title="请输入系统文件上传后缀" placeholder="请输入系统文件上传后缀" class="layui-input">
            <p class="help-block">设置系统允许上传文件的后缀，多个以英文逗号隔开。如：png,jpg,rar,doc</p>
        </div>
    </div>

    <div class="form-group" data-storage-type="qiniu">
        <label class="col-sm-2 control-label">Bucket <span class="nowrap">(空间名称)</span></label>
        <div class='col-sm-8'>
            <input type="text" name="storage_qiniu_bucket" required="required" value="<?php echo sysconf('storage_qiniu_bucket'); ?>"
                   title="请输入七牛云存储 Bucket (空间名称)" placeholder="请输入七牛云存储 Bucket (空间名称)" class="layui-input">
            <p class="help-block">填写七牛云存储空间名称，如：static</p>
        </div>
    </div>

    <div class="form-group" data-storage-type="qiniu">
        <label class="col-sm-2 control-label">Domain <span class="nowrap">(访问域名)</span></label>
        <div class='col-sm-8'>
            <input type="text" name="storage_qiniu_domain" required="required" value="<?php echo sysconf('storage_qiniu_domain'); ?>"
                   title="请输入七牛云存储 Domain (访问域名)" placeholder="请输入七牛云存储 Domain (访问域名)" class="layui-input">
            <p class="help-block">填写七牛云存储访问域名，如：static.ctolog.cc</p>
        </div>
    </div>

    <div class="form-group" data-storage-type="qiniu">
        <label class="col-sm-2 control-label">AccessKey <span class="nowrap">(访问密钥)</span></label>
        <div class='col-sm-8'>
            <input type="text" name="storage_qiniu_access_key" required="required" value="<?php echo sysconf('storage_qiniu_access_key'); ?>"
                   title="请输入七牛云 AccessKey (访问密钥)" placeholder="请输入七牛云 AccessKey (访问密钥)" class="layui-input">
            <p class="help-block">可以在 [ 七牛云 > 个人中心 ] 设置并获取到访问密钥</p>
        </div>
    </div>


    <div class="form-group" data-storage-type="qiniu">
        <label class="col-sm-2 control-label">SecretKey <span class="nowrap">(安全密钥)</span></label>
        <div class='col-sm-8'>
            <input type="password" name="storage_qiniu_secret_key" required="required" value="<?php echo sysconf('storage_qiniu_secret_key'); ?>" maxlength="43"
                   title="请输入七牛云 SecretKey (安全密钥)" placeholder="请输入七牛云 SecretKey (安全密钥)" class="layui-input">
            <p class="help-block">可以在 [ 七牛云 > 个人中心 ] 设置并获取到安全密钥</p>
        </div>
    </div>

    <div class="form-group" data-storage-type="oss">
        <label class="col-sm-2 control-label">Protocol <span class="nowrap">(访问协议)</span></label>
        <div class='col-sm-8'>
            <!--<?php if(sysconf('storage_oss_is_https')!=='1'): ?>-->
            <label class="think-radio">
                <input checked type="radio" name="storage_oss_is_https" value="0" lay-ignore> http
            </label>
            <label class="think-radio">
                <input type="radio" name="storage_oss_is_https" value="1" lay-ignore> https
            </label>
            <!--<?php else: ?>-->
            <label class="think-radio">
                <input type="radio" name="storage_oss_is_https" value="0" lay-ignore> http
            </label>
            <label class="think-radio">
                <input checked type="radio" name="storage_oss_is_https" value="1" lay-ignore> https
            </label>
            <!--<?php endif; ?>-->
            <p class="help-block">AliOSS资源访问协议（http 或 https），https 需要配置证书才能使用</p>
        </div>
    </div>

    <div class="form-group" data-storage-type="oss">
        <label class="col-sm-2 control-label">Bucket <span class="nowrap">(空间名称)</span></label>
        <div class='col-sm-8'>
            <input type="text" name="storage_oss_bucket" required="required" value="<?php echo sysconf('storage_oss_bucket'); ?>"
                   title="请输入AliOSS Bucket (空间名称)" placeholder="请输入AliOSS Bucket (空间名称)" class="layui-input">
            <p class="help-block">填写OSS存储空间名称，如：static</p>
        </div>
    </div>

    <div class="form-group" data-storage-type="oss">
        <label class="col-sm-2 control-label">Domain <span class="nowrap">(访问域名)</span></label>
        <div class='col-sm-8'>
            <input type="text" name="storage_oss_domain" required="required" value="<?php echo sysconf('storage_oss_domain'); ?>"
                   title="请输入AliOSS存储 Domain (访问域名)" placeholder="请输入AliOSS存储 Domain (访问域名)" class="layui-input">
            <p class="help-block">填写OSS存储外部访问域名，如：static.ctolog.cc</p>
        </div>
    </div>

    <div class="form-group" data-storage-type="oss">
        <label class="col-sm-2 control-label">AccessKey <span class="nowrap">(访问密钥)</span></label>
        <div class='col-sm-8'>
            <input type="text" name="storage_oss_keyid" required="required" value="<?php echo sysconf('storage_oss_keyid'); ?>" 
                   title="请输入AliOSS AccessKey (访问密钥)" placeholder="请输入AliOSS AccessKey (访问密钥)" class="layui-input">
            <p class="help-block">可以在 [ 阿里云 > 个人中心 ] 设置并获取到访问密钥</p>
        </div>
    </div>


    <div class="form-group" data-storage-type="oss">
        <label class="col-sm-2 control-label">SecretKey <span class="nowrap">(安全密钥)</span></label>
        <div class='col-sm-8'>
            <input type="password" name="storage_oss_secret" required="required" value="<?php echo sysconf('storage_oss_secret'); ?>" 
                   title="请输入AliOSS SecretKey (安全密钥)" placeholder="请输入AliOSS SecretKey (安全密钥)" class="layui-input">
            <p class="help-block">可以在 [ 阿里云 > 个人中心 ] 设置并获取到安全密钥</p>
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
    
<script>
    (function () {
        window.form.render();
        buildForm('<?php echo sysconf("storage_type"); ?>');
        $('[name=storage_type]').on('click', function () {
            buildForm($('[name=storage_type]:checked').val())
        });

        // 表单显示编译
        function buildForm(value) {
            var $tips = $("[data-storage-type='" + value + "']");
            $("[data-storage-type]").not($tips.show()).hide();
        }
    })();
</script>

</div>
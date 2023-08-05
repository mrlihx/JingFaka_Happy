<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:84:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/site/domain.html";i:1682348256;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/content.html";i:1646323578;}*/ ?>
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
        <label class="col-sm-2 control-label">主站域名</label>
        <div class='col-sm-8'>
            <input type="text" name="site_domain" required="required" title="请输入主站域名" placeholder="请输入主站域名" value="<?php echo sysconf('site_domain'); ?>" class="layui-input">
            <p class="help-block">主站域名</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">全站资源域名</label>
        <div class='col-sm-8'>
            <input type="text" name="site_domain_res" required="required" title="请输入全站资源域名" placeholder="请输入全站资源域名" value="<?php echo sysconf('site_domain_res'); ?>" class="layui-input">
            <p class="help-block">全站资源域名</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">店铺推广域名</label>
        <div class='col-sm-8'>
            <input type="text" name="site_shop_domain" required="required" title="请输入店铺推广域名" placeholder="请输入店铺推广域名" value="<?php echo sysconf('site_shop_domain'); ?>" class="layui-input">
            <p class="help-block">用于店铺推广使用的域名，防止主域名报毒</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">短网址功能</label>
        <div class='col-sm-8'>
            <select id="site_domain_short" name="site_domain_short" class="layui-input" required>
                <option value="" <?php if(sysconf('site_domain_short')==''): ?>selected<?php endif; ?>>不启用</option>
                <option value="Sina" <?php if(sysconf('site_domain_short')=='Sina'): ?>selected<?php endif; ?>>新浪短网址</option>
                <option value="Suo" <?php if(sysconf('site_domain_short')=='Suo'): ?>selected<?php endif; ?>>缩我短网址 </option>
                <option value="Baidu" <?php if(sysconf('site_domain_short')=='Baidu'): ?>selected<?php endif; ?>>百度短网址</option>
                     <option value="Baidu" <?php if(sysconf('site_domain_short')=='Baidu'): ?>selected<?php endif; ?>>自定义短网址</option>
            </select>
            
        </div>
    </div>
    <div class="short-domain" id="Sina" <?php if(sysconf('site_domain_short')!='Sina'): ?>style="display:none"<?php endif; ?>>
         <div class="form-group">
            <label class="col-sm-2 control-label">新浪短网址配置（APP_KEY）</label>
            <div class='col-sm-8'>
                <input type="text" name="sina_app_key" required="required" title="请输入APP_KEY" placeholder="请输入APP_KEY" value="<?php echo sysconf('sina_app_key'); ?>" class="layui-input">
                <p class="help-block"></p>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">新浪短网址配置（APP_SECRET）</label>
            <div class='col-sm-8'>
                <input type="text" name="sina_app_secret" required="required" title="请输入APP_SECRET" placeholder="请输入APP_SECRET" value="<?php echo sysconf('sina_app_secret'); ?>" class="layui-input">
                <p class="help-block"></p>
            </div>
        </div>
    </div>
    <div class="short-domain" id="Suo" <?php if(sysconf('site_domain_short')!='Suo'): ?>style="display:none"<?php endif; ?> >
         <div class="form-group">
            <label class="col-sm-2 control-label">缩我短网址配置（KEY）</label>
            <div class='col-sm-8'>
                <input type="text" name="suo_app_key" required="required" title="请输入KEY" placeholder="请输入KEY" value="<?php echo sysconf('suo_app_key'); ?>" class="layui-input">
                <p class="help-block">缩我短网址申请网址：https://suowo.cn/</p>
            </div>
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
    layui.use('form', function () {
        var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
        form.render();
    });
    $(function () {
        $('#site_domain_short').change(function () {
            $('.short-domain').hide();
            var current = $(this).val();
            if (current) {
                $('#' + current).show();
            }
        })
    })
</script>

    </div>
    
</div>
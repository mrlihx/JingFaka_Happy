<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:86:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/plugin/bgdata.html";i:1646323578;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/content.html";i:1646323578;}*/ ?>
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
        
<form onsubmit="return false;" action="__SELF__" data-auto="true" method="post" class='form-horizontal' >


    <div class="form-group">
        <label class="col-sm-2 control-label">后台端数据可视化</label>
        <div class='col-sm-8'>
            <select name="admin_bgdata" class="layui-input" disabled="disabled" style="background: #e9e9e9">
                <option value="0" <?php if(plugconf('bgdata','admin_bgdata')=='0'): ?>selected<?php endif; ?>>关闭</option>
                <option value="1" <?php if(plugconf('bgdata','admin_bgdata')=='1'): ?>selected<?php endif; ?>>开启</option>
            </select>
            <p class="help-block">后台端此功能不可关闭</p>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">商户端数据可视化</label>
        <div class='col-sm-8'>
            <select name="merchant_bgdata" class="layui-input" >
                <option value="0" <?php if(plugconf('bgdata','merchant_bgdata')=='0'): ?>selected<?php endif; ?>>关闭</option>
                <option value="1" <?php if(plugconf('bgdata','merchant_bgdata')=='1'): ?>selected<?php endif; ?>>开启</option>
            </select>
            <p class="help-block">开启之后商户端将可使用该功能</p>
        </div>
    </div>

    <div class="hr-line-dashed"></div>


    <div class="col-sm-12">
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
</script>

    </div>
    
</div>
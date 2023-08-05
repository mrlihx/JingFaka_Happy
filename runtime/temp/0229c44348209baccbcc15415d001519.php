<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:93:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/channel_account/form.html";i:1646323578;}*/ ?>
<style>
.rate_type{
	border: 1px solid #C9C9C9;
    background-color: #fff;
	color: #555;
}
.layui-btn-normal {
    background-color: #1E9FFF;
	color:#fff;
}
</style>
<form class="layui-form layui-box" style='padding:25px 30px 20px 0' action="__SELF__" data-auto="true" method="post">

    <div class="layui-form-item">
        <label class="layui-form-label">账号备注</label>
        <div class="layui-input-inline">
            <input type="text" name="name" value="<?php echo (isset($account['name']) && ($account['name'] !== '')?$account['name']:''); ?>" required="required" title="请输入账号名" placeholder="请输入账号名" class="layui-input">
        </div>
        
        <label class="layui-form-label">接口代码</label>
        <div class="layui-input-inline">
            <input type="text" name="code" value="<?php echo (isset($channel['code']) && ($channel['code'] !== '')?$channel['code']:''); ?>" readonly="readonly" class="layui-input">
        </div>
    </div>
	<div class="layui-form-item">
		<label class="layui-form-label">费率设置</label>
		<div class="layui-input-inline">
		   	<button type="button" data-value="0" class='rate_type layui-btn <?php if(!isset($account) || 0==$account['rate_type']): ?>layui-btn-normal<?php endif; ?> layui-btn-small btn-status-open'>继承接口</button>
			<button type="button" data-value="1" class='rate_type layui-btn <?php if(isset($account) && 1==$account['rate_type']): ?>layui-btn-normal<?php endif; ?> layui-btn-small btn-status-open'>单独设置</button>
			<input type="hidden" name="rate_type" value="<?php echo (isset($account['rate_type']) && ($account['rate_type'] !== '')?$account['rate_type']:''); ?>" id="rate_type" />
		</div>
	</div>
	<div class="rate" <?php if(!isset($account) || 0==$account['rate_type']): ?>style="display:none;"<?php endif; ?>>
	<div class="layui-form-item">
        <label class="layui-form-label">充值费率(‰)</label>
        <div class="layui-input-inline">
            <input type="text" name="lowrate" value="<?php echo (isset($account['lowrate']) && ($account['lowrate'] !== '')?$account['lowrate']:''); ?>" placeholder="请输入充值费率" class="layui-input">
        </div>
      
    </div>
    
	</div>
    <div class="hr-line-dashed"></div>

    <?php foreach($fields as $k => $v): ?>
    <div class="layui-form-item">
        <label class="layui-form-label"><?php echo $v['name']; ?></label>
        <div class="layui-input-block">
            <textarea class="layui-textarea" name="params[<?php echo $k; ?>]" cols="30" rows="1" placeholder="请输入<?php echo $v['name']; ?>"><?php echo (isset($v['value']) && ($v['value'] !== '')?$v['value']:''); ?></textarea>
        </div>
    </div>
    <?php endforeach; ?>

    <div class="layui-form-item">
	<label class="layui-form-label"></label>
    <div class="layui-input-block">
        <p>如果证书路径类表单，可填写绝对路径，例如： /www/wwwroot/www.xxx.com/cert/xxx.pem</p>
    </div>
</div>
    <div class="hr-line-dashed"></div>
    
   
  
    
<div class="layui-form-item">
	<label class="layui-form-label">状态</label>
    <div class="layui-input-inline">
        <select class="layui-input" name="status" style="display:inline">
            <option value="1" <?php if(isset($account) && 1==$account['status']): ?>selected<?php endif; ?>>开启</option>
            <option value="0" <?php if(isset($account) && 0==$account['status']): ?>selected<?php endif; ?>>关闭</option>
        </select>
    </div>
</div>


   
    <div class="layui-form-item text-center">
        <input type="hidden" name="account_id" value="<?php echo (isset($account['id']) && ($account['id'] !== '')?$account['id']:""); ?>">
        <button class="layui-btn" type='submit'>保存</button>
        <button class="layui-btn layui-btn-danger" type='button' data-confirm="确定要取消吗？" data-close>取消</button>
    </div>

</form>

<script>
    /* layui.use('form', function(){
        var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
        form.render();
    }); */
	//更换费率设置
    $(".rate_type").click(function(){
    	$('.rate_type').removeClass('layui-btn-normal');
    	$(this).addClass('layui-btn-normal');
    	var type = $(this).data('value');
    	
    	$("#rate_type").val(type);
    	
    	if(type == 1) {
    		$(".rate").show();
    	}
    	else{
    		$(".rate").hide();
    	}
    });
</script>

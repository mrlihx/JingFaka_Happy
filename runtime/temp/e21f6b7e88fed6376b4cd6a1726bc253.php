<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:84:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/rate/detail.html";i:1646323578;}*/ ?>
<form class="layui-form layui-box" style='padding:25px 30px 20px 0' action="<?php echo url('save'); ?>" data-auto="true" method="post">

    <div class="layui-form-item">
        <label class="layui-form-label">费率分组名称</label>
        <div class="layui-input-block">
            <input type="text" name="title" value="<?php echo $group['title']; ?>" class="layui-input"
                   title="请输入费率分组名称" placeholder="请输入费率分组名称">
        </div>
    </div>

    
    
    <?php foreach($group['rules'] as $v): ?>
    <div class="layui-form-item">
        <label class="layui-form-label">
            <?php if($v['channel']['is_custom']==1): ?>
            <font color="green">【自定义】</font>
            <?php endif; ?>
            <?php echo $v['channel']['title']; ?>
        </label>
        <div class="layui-input-inline" style="width: 60%">
            <input type="hidden" name="id[]" value="<?php echo $v['id']; ?>">
            <input type="hidden" name="channel[<?php echo $v['id']; ?>]" value="<?php echo $v['channel']['id']; ?>">
            <input type="number" name="rate[<?php echo $v['id']; ?>]" value="<?php echo $v['rate'] * 1000; ?>" class="layui-input"
                   title="请输入<?php echo $v['channel']['title']; ?>费率" placeholder="请输入<?php echo $v['channel']['title']; ?>费率"
                    min="<?php echo $v['channel']['lowrate'] * 1000; ?>">
            <span>单位：千分率，如千分之三，设置为 3 即可。充值费率：<?php echo $v['channel']['lowrate']*1000; ?>‰</span>
        </div>
        <div class="layui-input-inline" style="width: 20%">
            <div class="layui-btn-group">
                <button type="button" id="btn-open-<?php echo $v['channel_id']; ?>" class='layui-btn <?php if($v['rate_group_rule_status']==1): ?>layui-btn-normal<?php else: ?>layui-btn-primary<?php endif; ?> layui-btn-small btn-status-open' onclick="changeStatus(<?php echo $v['channel_id']; ?>,1)">开启</button>
                <button type="button" id="btn-close-<?php echo $v['channel_id']; ?>" class='layui-btn <?php if($v['rate_group_rule_status']==0): ?>layui-btn-normal<?php else: ?>layui-btn-primary<?php endif; ?> layui-btn-small btn-status-close' onclick="changeStatus(<?php echo $v['channel_id']; ?>,0)">关闭</button>
            </div>
        </div>
    </div>
    <?php endforeach; ?>
    <div class="layui-form-item text-center">
        <p><font color="green">【自定义】通道为商户端可以自定义的通道，您可以在这里设置费率（从预存款扣除）</font></p>
    </div>
    <div class="hr-line-dashed"></div>
    <div class="layui-form-item text-center">
        <input type="hidden" value="<?php echo $group['id']; ?>" name="group">
        <button class="layui-btn" type='submit'>保存</button>
        <button class="layui-btn layui-btn-danger" type='button' data-confirm="确定要取消吗？" data-close>取消</button>
    </div>

</form>

<script>
    group = {};
    layui.use('form', function(){
        var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
        form.render();
    });
    //更新接口状态
    function changeStatus(channel_id,status){
        var group_id = "<?php echo $id; ?>";
        $.ajax({
            url:'<?php echo url("change_status"); ?>',
            type:'post',
            data:{group_id:group_id, channel_id:channel_id, status:status},
            success:function(res){
                if(res.code==1){
                    layer.msg(res.msg);
                    if(status == 1) {
                        $('#btn-open-'+channel_id).removeClass('layui-btn-primary');
                        $('#btn-open-'+channel_id).addClass('layui-btn-normal');
                        $('#btn-close-'+channel_id).removeClass('layui-btn-normal');
                        $('#btn-close-'+channel_id).addClass('layui-btn-primary');
                    } else {
                        $('#btn-open-'+channel_id).removeClass('layui-btn-normal');
                        $('#btn-open-'+channel_id).addClass('layui-btn-primary');
                        $('#btn-close-'+channel_id).removeClass('layui-btn-primary');
                        $('#btn-close-'+channel_id).addClass('layui-btn-normal');
                    }
                }else{
                    layer.alert(res.msg);
                }
            }
        });
    }
</script>

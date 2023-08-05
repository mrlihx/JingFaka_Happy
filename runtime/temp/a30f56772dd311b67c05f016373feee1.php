<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:94:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/channel_account/index.html";i:1646323578;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/content.html";i:1646323578;}*/ ?>
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
        
<form onsubmit="return false;" data-auto="" method="POST">
    <input type="hidden" value="resort" name="action"/>
    <table class="table table-hover">
        <thead>
        <tr>
            <th class='text-center'>编号</th>
            <th class='text-center'>账号备注</th>
            <th class='text-center'>接口代码</th>
            <th class='text-center'>费率设置</th>
            <th class='text-center'>状态</th>
            <th class='text-center'>操作</th>
        </tr>
        </thead>
        <tbody>
            <?php foreach($accounts as $v): ?>
            <tr>
                <td class='text-center'><?php echo $v['id']; ?></td>
                <td class='text-center'><?php echo $v['name']; ?></td>
                <td class='text-center'><?php echo $v['channel']['code']; ?></td>
                <td class='text-center'><?php if($v['rate_type'] == 1): ?>单独设置<?php else: ?>继承接口<?php endif; ?></td>
                <td class='text-center'>
                    <div class="layui-btn-group">
                        <button type="button" class='layui-btn <?php if($v['status']==1): ?>layui-btn-normal<?php else: ?>layui-btn-primary<?php endif; ?> layui-btn-small btn-status-open' onclick="changeStatus(<?php echo $v['id']; ?>,1)">开启</button>
                        <button type="button" class='layui-btn <?php if($v['status']==0): ?>layui-btn-normal<?php else: ?>layui-btn-primary<?php endif; ?> layui-btn-small btn-status-close' onclick="changeStatus(<?php echo $v['id']; ?>,0)">关闭</button>
                    </div>
                </td>
                <td class='text-center'>
                    <div class="layui-btn-group">
                        <button type="button" class='layui-btn layui-btn-small' data-modal='<?php echo url("edit"); ?>?account_id=<?php echo $v['id']; ?>&channel_id=<?php echo $v['channel_id']; ?>' data-title="编辑账号">编辑</button>
                        <button type="button" class='layui-btn layui-btn-small' onclick="delAccount(<?php echo $v['id']; ?>)">删除</button>
                    </div>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</form>
<script>
    function changeStatus(id,status){
        $.ajax({
            url:'<?php echo url("change_status"); ?>',
            data:{
                account_id:id,
                status:status
            },
            dataType:'json',
            success:function(res){
                if(res.code==1){
                    location.reload();
                }else{
                    alert(res.msg);
                }
                console.log(res);
            }
        });
    }
    function delAccount(account_id)
    {
        if(!confirm('确认删除？')){
            return;
        }
        $.ajax({
            url:'/manage/channel_account/del',
            data:{
                account_id:account_id,
            },
            type:'post',
            dataType:'json',
            success:function(res){
                console.log(res);
                if(res.code==1){
                    // alert(res.msg);
                    location.reload();
                }else{
                    alert(res.msg);
                }
            }
        });
    }
    function clearAccount(account_id)
    {
        if(!confirm('确认清除当前额度？')){
            return;
        }
        $.ajax({
            url:'/manage/channel_account/clear',
            data:{
                account_id:account_id,
            },
            type:'post',
            dataType:'json',
            success:function(res){
                console.log(res);
                if(res.code==1){
                    // alert(res.msg);
                    location.reload();
                }else{
                    alert(res.msg);
                }
            }
        });
    }
</script>

    </div>
    
</div>
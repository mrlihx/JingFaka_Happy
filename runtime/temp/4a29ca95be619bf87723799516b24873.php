<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:86:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/channel/index.html";i:1687450194;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/content.html";i:1646323578;}*/ ?>
<div class="ibox">
    
    <?php if(isset($title)): ?>
    <div class="ibox-title notselect">
        <h5><?php echo $title; ?></h5>
        
<div class="nowrap pull-right" style="margin-top:10px">
    <?php if($development): ?>
    <button data-modal="<?php echo url('add'); ?>" data-title="添加支付接口" class='layui-btn layui-btn-small'>添加支付接口</button>
    <?php endif; ?>
</div>

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
        

<div class="col-sm-12">
    <?php if(glock_status()==true): ?>
    <div class="layui-form-item">
        <span style="color:green"><i class="glyphicon glyphicon-ok"></i> 当前已开启网关锁【提示：对接接口前需先关闭网关锁！】</span>
        <a data-title="网关锁" data-open="<?php echo url('manage/plugin/glock'); ?>" href="javascript:void(0)">去关闭</a>
    </div>
    <?php else: ?>
    <div class="layui-form-item">
        <span style="color:red"><i class="glyphicon glyphicon-remove"></i> 当前未开启网关锁【网关锁可防止篡改接口参数，防止篡改接口文件】</span>
        <a data-title="网关锁" data-open="<?php echo url('manage/plugin/glock'); ?>" href="javascript:void(0)">去开启</a>
    </div>
    <?php endif; ?>
</div>



<form onsubmit="return false;" data-auto="" method="POST">
    <input type="hidden" value="resort" name="action"/>
    <table class="table table-hover">
        <thead>
            <tr>
                <th class='text-center'>编号</th>
                <th class='text-center'>接口名称</th>
                <th class='text-center'>接口代码</th>
                <th class='text-center'>显示名称</th>
                <th class='text-center'>充值费率</th>
                <th class='text-center'>排序(越大越靠前)</th>
                <?php if(input('is_install/d',1) == 1) { ?>
                <th class='text-center'>平台代收状态</th>
                <th class='text-center'>商户充值状态</th>
                <th class='text-center'>接口可用</th>
                <?php }?>
                <th class='text-center'>操作</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($channelList as $v): ?>
            <tr>
                <td class='text-center'><?php echo $v['id']; ?></td>
                <td class='text-center'><?php echo $v['title']; ?></td>
                <td class='text-center'><?php echo $v['code']; ?></td>
                <td class='text-center'><?php echo $v['show_name']; ?></td>
                <td class='text-center'><?php echo $v['lowrate']*1000; ?>‰</td>
                <td class='text-center'><?php echo $v['sort']; ?></td>
                <?php if(input('is_install/d',1) == 1) { ?>
                <td class='text-center'>
                    <div class="layui-btn-group">
                        <button type="button" class='layui-btn <?php if($v['status']==1): ?>layui-btn-normal<?php else: ?>layui-btn-primary<?php endif; ?> layui-btn-small btn-status-open' onclick="changeStatus(<?php echo $v['id']; ?>, 1)">开启</button>
                        <button type="button" class='layui-btn <?php if($v['status']==0): ?>layui-btn-normal<?php else: ?>layui-btn-primary<?php endif; ?> layui-btn-small btn-status-close' onclick="changeStatus(<?php echo $v['id']; ?>, 0)">关闭</button>
                    </div>
                </td>
                 <td class='text-center'>
                    <div class="layui-btn-group">
                        <button type="button" class='layui-btn <?php if($v['is_deposit']==1): ?>layui-btn-normal<?php else: ?>layui-btn-primary<?php endif; ?> layui-btn-small btn-status-open' onclick="changeDeposit(<?php echo $v['id']; ?>, 1)">开启</button>
                        <button type="button" class='layui-btn <?php if($v['is_deposit']==0): ?>layui-btn-normal<?php else: ?>layui-btn-primary<?php endif; ?> layui-btn-small btn-status-close' onclick="changeDeposit(<?php echo $v['id']; ?>, 0)">关闭</button>
                    </div>
                </td>
                <td class='text-center'>
                    <div class="layui-btn-group">
                        <button type="button" class='layui-btn <?php if($v['is_available']==1): ?>layui-btn-normal<?php else: ?>layui-btn-primary<?php endif; ?> layui-btn-small btn-status-open' onclick="change_available(<?php echo $v['id']; ?>, 1)">手机</button>
                        <button type="button" class='layui-btn <?php if($v['is_available']==2): ?>layui-btn-normal<?php else: ?>layui-btn-primary<?php endif; ?> layui-btn-small btn-status-close' onclick="change_available(<?php echo $v['id']; ?>, 2)">电脑</button>
                        <button type="button" class='layui-btn <?php if($v['is_available']==0): ?>layui-btn-normal<?php else: ?>layui-btn-primary<?php endif; ?> layui-btn-small btn-status-close' onclick="change_available(<?php echo $v['id']; ?>, 0)">通用</button>
                    </div>
                </td>
                <?php }?>
                <td class='text-center'>
                    <div class="layui-btn-group">
                        <?php if(!empty($v['applyurl'])){ ?>
                        <a href="<?php echo $v['applyurl']; ?>" class='layui-btn layui-btn-small' >申请地址</a>
                        <?php } if($v['is_install'] == '1'){ ?>
                        <button type="button" class='layui-btn layui-btn-small' data-modal='<?php echo url("edit"); ?>?channel_id=<?php echo $v['id']; ?>' data-title="编辑支付接口">编辑</button>
                        <button type="button" class='layui-btn layui-btn-small' data-modal='<?php echo url("ChannelAccount/add"); ?>?channel_id=<?php echo $v['id']; ?>' data-title="添加账号">添加账号</button>
                        <button type="button" class='layui-btn layui-btn-small' data-open='<?php echo url("ChannelAccount/index"); ?>?channel_id=<?php echo $v['id']; ?>' data-title="账号列表">账号列表</button>
                        <button type="button" class='layui-btn layui-btn-small layui-btn-danger' onclick="uninstall(<?php echo $v['id']; ?>)">卸载</button>
                        <?php }else{ ?>
                        <button type="button" class='layui-btn layui-btn-small layui-btn-danger' onclick="install(<?php echo $v['id']; ?>)">安装</button>
                        <?php } ?>
                        <button type="button" class='layui-btn layui-btn-small layui-btn-danger' onclick="delChannel(<?php echo $v['id']; ?>)">删除</button>
                    </div>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</form>
<script>
    //更新接口状态
    function changeStatus(id, status){
    $.ajax({
    url:'<?php echo url("change_status"); ?>',
            type:'post',
            data:{channel_id:id, status:status},
            success:function(res){
            if (res.code == 1){
            location.reload();
            } else{
            alert(res.msg);
            }
            }
    });
    }
    
    
        function changeDeposit(id, status){
    $.ajax({
    url:'<?php echo url("change_deposit"); ?>',
            type:'post',
            data:{channel_id:id, is_deposit:status},
            success:function(res){
            if (res.code == 1){
            location.reload();
            } else{
            alert(res.msg);
            }
            }
    });
    }
    
    //更新接口可用类型
    function change_available(id, type){
    $.ajax({
    url:'<?php echo url("change_available"); ?>',
            type:'post',
            data:{channel_id:id, type:type},
            success:function(res){
            if (res.code == 1){
            location.reload();
            } else{
            alert(res.msg);
            }
            }
    });
    }
    //删除接口
    function delChannel(channel_id)
    {
    if (!confirm('是否确认删除接口？')){
    return;
    }
    var loading = '';
    $.ajax({
    url:'/manage/channel/del',
            data:{
            channel_id:channel_id,
            },
            type:'post',
            dataType:'json',
            beforeSend: function(){
            loading = layer.load();
            },
            success:function(res){
            layer.close(loading);
            if (res.code == 1){
            layer.msg(res.msg, {icon:1, time:1000});
            $.form.reload();
            } else {
            layer.msg(res.msg, {time: 2000, icon:'error'});
            }
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
            layer.close(loading);
            layer.msg('连接错误');
            }
    });
    }

    function uninstall(id){
    $.ajax({
    url:'/manage/channel/uninstall',
            data:{
            id:id,
            },
            type:'post',
            dataType:'json',
            beforeSend: function(){
            loading = layer.load();
            },
            success:function(res){
            layer.close(loading);
            if (res.code == 1){
            layer.msg(res.msg, {icon:1, time:1000});
            $.form.reload();
            } else {
            layer.msg(res.msg, {time: 2000, icon:'error'});
            }
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
            layer.close(loading);
            layer.msg('连接错误');
            }
    });
    }

    function install(id){
    $.ajax({
    url:'/manage/channel/install',
            data:{
            id:id,
            },
            type:'post',
            dataType:'json',
            beforeSend: function(){
            loading = layer.load();
            },
            success:function(res){
            layer.close(loading);
            if (res.code == 1){
            layer.msg(res.msg, {icon:1, time:1000});
            $.form.reload();
            } else {
            layer.msg(res.msg, {time: 2000, icon:'error'});
            }
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
            layer.close(loading);
            layer.msg('连接错误');
            }
    });
    }
</script>

    </div>
    
</div>
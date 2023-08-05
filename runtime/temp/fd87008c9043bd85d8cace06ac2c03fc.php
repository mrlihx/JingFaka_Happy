<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:83:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/user/index.html";i:1646323578;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/content.html";i:1646323578;}*/ ?>
<div class="ibox">
    
    <?php if(isset($title)): ?>
    <div class="ibox-title notselect">
        <h5><?php echo $title; ?></h5>
        
<div class="nowrap pull-right" style="margin-top:10px">
    <button data-modal='<?php echo url("add"); ?>' data-title="添加商户" class='layui-btn layui-btn-small'><i
            class='fa fa-plus'></i> 添加商户
    </button>
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
        

<!-- 表单搜索 开始 -->
<form class="layui-form layui-form-pane form-search" action="__SELF__" onsubmit="return false" method="get">

    <div class="layui-form-item layui-inline">
        <label class="layui-form-label">搜索字段</label>
        <div class="layui-input-inline">
            <select class="layui-input" name="field">
                <option value="1" <?php if(\think\Request::instance()->get('field')=='1'): ?>selected<?php endif; ?>>商户ID</option>
                <option value="2" <?php if(\think\Request::instance()->get('field')=='2'): ?>selected<?php endif; ?>>账号</option>
                <option value="3" <?php if(\think\Request::instance()->get('field')=='3'): ?>selected<?php endif; ?>>店铺名</option>
                <option value="4" <?php if(\think\Request::instance()->get('field')=='4'): ?>selected<?php endif; ?>>手机号码</option>
                <option value="5" <?php if(\think\Request::instance()->get('field')=='5'): ?>selected<?php endif; ?>>QQ</option>
            </select>
        </div>
    </div>
    <div class="layui-form-item layui-inline">
        <label class="layui-form-label">搜索关键词</label>
        <div class="layui-input-inline">
            <input name="keyword" value="<?php echo htmlentities((\think\Request::instance()->get('keyword') ?: '')); ?>" placeholder="请输入关键词" class="layui-input">
        </div>
    </div>

    <div class="layui-form-item layui-inline">
        <label class="layui-form-label">状态</label>
        <div class="layui-input-inline">
            <select class="layui-input" name="status">
                <option value="" <?php if(\think\Request::instance()->get('status')==''): ?>selected<?php endif; ?>>全部</option>
                <option value="0" <?php if(\think\Request::instance()->get('status')==='0'): ?>selected<?php endif; ?>>未审核</option>
                <option value="1" <?php if(\think\Request::instance()->get('status')=='1'): ?>selected<?php endif; ?>>已审核</option>
            </select>
        </div>
    </div>

    <div class="layui-form-item layui-inline">
        <label class="layui-form-label">冻结状态</label>
        <div class="layui-input-inline">
            <select class="layui-input" name="is_freeze">
                <option value="" <?php if(\think\Request::instance()->get('is_freeze')==''): ?>selected<?php endif; ?>>全部</option>
                <option value="0" <?php if(\think\Request::instance()->get('is_freeze')==='0'): ?>selected<?php endif; ?>>未冻结</option>
                <option value="1" <?php if(\think\Request::instance()->get('is_freeze')=='1'): ?>selected<?php endif; ?>>已冻结</option>
            </select>
        </div>
    </div>


    <div class="layui-form-item layui-inline">
        <label class="layui-form-label">API状态</label>
        <div class="layui-input-inline">
            <select class="layui-input" name="payapi">
                <option value="" <?php if(\think\Request::instance()->get('payapi')==''): ?>selected<?php endif; ?>>全部</option>
                <option value="0" <?php if(\think\Request::instance()->get('payapi')==='0'): ?>selected<?php endif; ?>>未开启</option>
                <option value="1" <?php if(\think\Request::instance()->get('payapi')=='1'): ?>selected<?php endif; ?>>已开启</option>
            </select>
        </div>
    </div>


    <div class="layui-form-item layui-inline">
        <label class="layui-form-label">费率分组</label>
        <div class="layui-input-inline">
            <select class="layui-input" name="group_id">
                <option value="" <?php if(\think\Request::instance()->get('group_id')==''): ?>selected<?php endif; ?>>全部</option>
                <?php foreach($rate_group as $v): ?>
                <option value="<?php echo $v['id']; ?>" <?php if(\think\Request::instance()->get('group_id')==$v['id']): ?>selected<?php endif; ?>><?php echo $v['title']; ?></option>
                <?php endforeach; ?>
                <option value="-1" <?php if(\think\Request::instance()->get('group_id')=='-1'): ?>selected<?php endif; ?>>单独自定义费率</option>
                <option value="-2" <?php if(\think\Request::instance()->get('group_id')=='-2'): ?>selected<?php endif; ?>>未设置费率分组(默认使用通道费率)</option>
            </select>
        </div>
    </div>

    <div class="layui-form-item layui-inline">
        <label class="layui-form-label">注册时间</label>
        <div class="layui-input-inline">
            <input name="date_range" id="date_range" value="<?php echo urldecode(\think\Request::instance()->get('date_range')); ?>" placeholder="请选择时间范围" class="layui-input">
        </div>
    </div>

    <div class="layui-form-item layui-inline">
        <button type="submit" class="layui-btn layui-btn-primary"><i class="fa fa-search"></i> 搜 索</button>
    </div>
</form>
<!-- 表单搜索 结束 -->

<div class="layui-form-item layui-inline">
    <label class="layui-form-label">商户数</label>
    <div class="layui-input-inline">
        <input type="text" class="layui-input" value="<?php echo htmlentities($user_count); ?>" readonly>
    </div>
</div>

<form onsubmit="return false;" data-auto="true" method="post">
    <input type="hidden" value="resort" name="action"/>
    <table class="layui-table" lay-skin="line" lay-size="sm">
        <thead>
            <tr>
                <th class='text-center'>ID</th>
                <th>账号</th>
                <th>下级商户数</th>
                <th>店铺名</th>
                <th>手机</th>
                <th>身份证号码</th>
                <th>QQ</th>
                <th>余额</th>
                <th>冻结金额</th>
                <th>佣金</th>
                <th>状态</th>
                <th>冻结</th>
                <th>被投诉次数</th>
                <th class='text-center'>注册时间</th>
                <th class='text-center'>操作</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($users as $v): ?>
            <tr>
                <td class='text-center'><?php echo $v['id']; ?></td>
                <td><?php echo $v['username']; ?></td>
                <td class='text-center'><?php echo $v['sub_user_count']; ?></td>
                <td><?php echo $v['shop_name']; ?></td>
                <td><?php echo $v['mobile']; ?></td>
                <td><?php echo $v['idcard_number']; ?></td>
                <td><?php echo $v['qq']; ?></td>
                <td><?php echo $v['money']; ?></td>
                <td><?php echo $v['freeze_money']; ?></td>
                <td><?php echo $v['rebate']; ?></td>
                <td>
                    <?php if($v['status']==1): ?>
                    <a style="color:green" data-tips="确定不可用吗？ " data-update="<?php echo $v['id']; ?>" data-field='status' data-value='0' data-action='<?php echo url("change_status"); ?>'
                       href="javascript:void(0)"><i class="glyphicon glyphicon-ok"></i></a>
                    <?php else: ?>
                    <a style="color:red" data-tips="确定可用吗？" data-update="<?php echo $v['id']; ?>" data-field='status' data-value='1' data-action='<?php echo url("change_status"); ?>'
                       href="javascript:void(0)"><i class="glyphicon glyphicon-remove"></i></a>
                    <?php endif; ?>
                </td>
                <td>
                    <?php if($v['is_freeze']==1): ?>
                    <a style="color:red" data-tips="确定取消冻结吗？ " data-update="<?php echo $v['id']; ?>" data-field='status' data-value='0' data-action='<?php echo url("change_freeze_status"); ?>'
                       href="javascript:void(0)">已冻结</a>
                    <?php else: ?>
                    <a style="color:green" data-tips="确定冻结吗？" data-update="<?php echo $v['id']; ?>" data-field='status' data-value='1' data-action='<?php echo url("change_freeze_status"); ?>'
                       href="javascript:void(0)">未冻结</a>
                    <?php endif; ?>
                </td>
                <td class='text-center'><?php echo $v['complaint_count']; ?></td>
                <td class='text-center'><?php echo date("Y-m-d H:i:s",$v['create_at']); ?></td>
                <td class='text-center nowrap'>
                    <a href="<?php echo url("login"); ?>?user_id=<?php echo $v['id']; ?>" target="_blank">登录</a>

                    <a data-title="发送站内信" data-modal='<?php echo url("message"); ?>?user_id=<?php echo $v['id']; ?>' href="javascript:void(0)">站内信</a>

                    <a data-title="商户详情" data-modal='<?php echo url("detail"); ?>?user_id=<?php echo $v['id']; ?>' href="javascript:void(0)">详情</a>

                    <a data-title="编辑" data-modal='<?php echo url("edit"); ?>?user_id=<?php echo $v['id']; ?>' href="javascript:void(0)">编辑</a>

                    <a data-title="设置费率" data-modal='<?php echo url("rate"); ?>?user_id=<?php echo $v['id']; ?>' href="javascript:void(0)">设置费率</a>

                    <a data-title="资金管理" data-modal='<?php echo url("manage_money"); ?>?user_id=<?php echo $v['id']; ?>' href="javascript:void(0)">资金管理</a>
                    <a data-title="收款信息"  href="javascript:void(0)" onclick="allow_update(this, '<?php echo $v['id']; ?>')">收款信息</a>
                    <a data-title="删除"  href="javascript:void(0)" onclick="user_del(this, '<?php echo $v['id']; ?>')">删除</a>
                    <!-- <a data-update="<?php echo $v['id']; ?>" data-field='status' data-value='-1' data-action='<?php echo url("change_status"); ?>' href="javascript:void(0)">删除</a> -->
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</form>
<?php echo $page; ?>
<script>
    layui.use('form', function () {
        var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
        form.render();
    });
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        //日期范围
        laydate.render({
            elem: '#date_range',
            range: true
        });
    });
    /*用户-删除*/
    function user_del(obj, id) {
        layer.confirm('确认要删除这个用户吗？', function (index) {
            $.ajax({
                url: "/manage/user/del",
                type: 'post',
                data: 'id=' + id,
                success: function (res) {
                    if (res.code == 1) {
                        $(obj).parents("tr").remove();
                        layer.msg('已删除!', {icon: 1, time: 1000});
                    } else {
                        layer.msg('删除失败!', {icon: 1, time: 1000});
                    }
                }
            });
        });
    }
    /*用户-修改收款信息*/
    function allow_update(obj, id) {
        layer.confirm('允许用户修改收款信息？', function (index) {
            $.ajax({
                url: "<?php echo url('allow_update'); ?>",
                type: 'post',
                data: 'id=' + id,
                success: function (res) {
                    if (res.code == 1) {
                        layer.msg('设置成功!', {icon: 1, time: 1000});
                    } else {
                        layer.msg(res.msg, {icon: 2, time: 1000});
                    }
                }
            });
        });
    }

</script>

    </div>
    
</div>
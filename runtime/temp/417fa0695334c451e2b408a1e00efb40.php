<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:83:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/rate/index.html";i:1646323578;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/content.html";i:1646323578;}*/ ?>
<div class="ibox">
    
    <?php if(isset($title)): ?>
    <div class="ibox-title notselect">
        <h5><?php echo $title; ?></h5>
        
<div class="nowrap pull-right" style="margin-top:10px">
    <button data-modal='<?php echo url("add"); ?>' data-title="添加分组" class='layui-btn layui-btn-small'><i
            class='fa fa-plus'></i> 添加分组
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
        <label class="layui-form-label">搜索关键词</label>
        <div class="layui-input-inline">
            <input name="keyword" value="<?php echo (\think\Request::instance()->get('keyword') ?: ''); ?>" placeholder="请输入关键词" class="layui-input">
        </div>
    </div>

    <div class="layui-form-item layui-inline">
        <button type="submit" class="layui-btn layui-btn-primary"><i class="fa fa-search"></i> 搜 索</button>
    </div>
</form>
<!-- 表单搜索 结束 -->

<form onsubmit="return false;" data-auto="true" method="post">
    <table class="layui-table" lay-skin="line" lay-size="sm">
        <thead>
            <tr>
                <th class='text-center'>ID</th>
                <th>分组名</th>
                <th>创建时间</th>
                <th class='text-center'>操作</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($rate_group as $v): ?>
            <tr>
                <td class='text-center'><?php echo $v['id']; ?></td>
                <td><?php echo $v['title']; ?></td>
                <td><?php echo date('Y-m-d H:i:s',$v['create_at']); ?></td>
                <td class='text-center nowrap'>
                    <a data-title="编辑" data-modal='<?php echo url("detail"); ?>?id=<?php echo $v['id']; ?>' href="javascript:void(0)">编辑</a>
                    <?php if($v['id']!=1): ?>
                    <a data-title="删除"  href="javascript:void(0)" onclick="del(this, '<?php echo $v['id']; ?>')">删除</a>
                    <?php endif; ?>
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
    /*删除分组*/
    function del(obj, id) {
        layer.confirm('确认要删除这个分组吗？', function (index) {
            $.ajax({
                url: "/manage/rate/del",
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
</script>

    </div>
    
</div>
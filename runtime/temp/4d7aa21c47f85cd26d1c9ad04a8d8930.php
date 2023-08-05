<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:86:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/article/index.html";i:1646323578;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/content.html";i:1646323578;}*/ ?>
<div class="ibox">
    
    <?php if(isset($title)): ?>
    <div class="ibox-title notselect">
        <h5><?php echo $title; ?></h5>
        
<div class="nowrap pull-right" style="margin-top:10px">
    <button data-open='<?php echo url("add"); ?>' data-title="添加文章" class='layui-btn layui-btn-small'><i
            class='fa fa-plus'></i> 添加文章
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
        <label class="layui-form-label">文章名</label>
        <div class="layui-input-inline">
            <input name="title" value="<?php echo (\think\Request::instance()->get('title') ?: ''); ?>" placeholder="请输入文章名" class="layui-input">
        </div>
    </div>
    <div class="layui-form-item layui-inline">
        <label class="layui-form-label">状态</label>
        <div class="layui-input-inline">
            <select name="status">
                <option value="">全部状态</option>
                <option value="1" <?php if(\think\Request::instance()->get('status') === '1'): ?>selected<?php endif; ?>>可见</option>
                <option value="0" <?php if(\think\Request::instance()->get('status') === '0'): ?>selected<?php endif; ?>>不可见</option>
            </select>
        </div>
    </div>
    <div class="layui-form-item layui-inline">
        <label class="layui-form-label">时间范围</label>
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
    <label class="layui-form-label">文章数</label>
    <div class="layui-input-inline">
        <input type="text" class="layui-input" value="<?php echo (isset($counts) && ($counts !== '')?$counts:"0"); ?> 篇" readonly>
    </div>
</div>

<div class="layui-form-item layui-inline">
    <a class="layui-btn layui-btn-small" data-title="一键发布结算公告" data-modal="<?php echo url('manage/plugin/publishSettlement'); ?>" href="javascript:void(0)">一键发布结算公告</a>
</div>
<form onsubmit="return false;" data-auto="true" method="post">
    <input type="hidden" value="resort" name="action"/>
    <table class="layui-table" lay-skin="line" lay-size="sm">
        <thead>
            <tr>
                <th>ID</th>
                <th>分类</th>
                <th>文章标题</th>
                <th>链接</th>
                <th>浏览量</th>
                <th>状态</th>
                <th>添加时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($articles as $v): ?>
            <tr>
                <td><?php echo $v['id']; ?></td>
                <td><?php if($v['cate_id']==0): ?>未分类<?php else: ?><?php echo $v['category']['name']; endif; ?></td>
                <td><?php echo $v['title']; ?></td>
                <td><?php if($v['category']['alias'] == 'single'): ?><?php echo url('index/index/content',['id'=>$v['id']]); endif; ?></td>
                <td><?php echo $v['views']; ?></td>
                <td>
                    <?php if($v['status']==1): ?>
                    <a style="color:green" data-tips="确定不可用吗？ " data-update="<?php echo $v['id']; ?>" data-field='status' data-value='0' data-action='<?php echo url("change_status"); ?>'
                       href="javascript:void(0)"><i class="glyphicon glyphicon-ok"></i></a>
                    <?php else: ?>
                    <a style="color:red" data-tips="确定可用吗？" data-update="<?php echo $v['id']; ?>" data-field='status' data-value='1' data-action='<?php echo url("change_status"); ?>'
                       href="javascript:void(0)"><i class="glyphicon glyphicon-remove"></i></a>
                    <?php endif; ?>
                </td>
                <td><?php echo date("Y-m-d H:i:s",$v['create_at']); ?></td>
                <td>
                    <a data-title="置顶" href="javascript:stick(this,'<?php echo $v['id']; ?>')" href="">置顶</a>
                    <a data-title="编辑" data-modal='<?php echo url("edit"); ?>?article_id=<?php echo $v['id']; ?>' href="javascript:void(0)">编辑</a>
                    <?php if($v['is_system'] == 0): ?><a data-title="删除"  href="javascript:void(0)" onclick="del(this, '<?php echo $v['id']; ?>')">删除</a><?php endif; ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</form>
<?php echo $page; ?>
<script>
    $(function () {
        layui.use('form', function () {
            console.log('render')
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
    })

    function del(obj, id) {
        layer.confirm('确认要删除这篇文章吗？', function (index) {
            $.ajax({
                url: "/manage/article/del",
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

    function stick(obj, id) {
        layer.confirm('确认要置顶这篇文章吗？', function (index) {
            $.ajax({
                url: "/manage/article/top",
                type: 'post',
                data: 'id=' + id,
                success: function (res) {
                    if (res.code == 1) {
                        layer.msg('已置顶!', {icon: 1, time: 1000}, function () {
                            location.reload();
                        });
                    } else {
                        layer.msg('置顶失败!', {icon: 1, time: 1000});
                    }
                }
            });
        });
    }
</script>

    </div>
    
</div>
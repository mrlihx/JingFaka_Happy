<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:85:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/article/form.html";i:1646323578;}*/ ?>
<style>
    .cke{
        z-index: 999;
    }
</style>
<form class="layui-form layui-box" style='padding:25px 30px 20px 0' action="__SELF__"  data-auto="true" method="post">

    <div class="layui-form-item">
        <label class="layui-form-label">文章分类</label>
        <div class="layui-input-block">
            <select class="layui-input" style="display:block;" name="cate_id" required>
                <option value="0">不分类</option>
                <?php foreach($categorys as $v): ?>
                <option value="<?php echo $v['id']; ?>" <?php if(isset($article) && $article['cate_id']==$v['id']): ?>selected<?php endif; ?>><?php echo $v['name']; ?></option>
                <?php endforeach; ?>
            </select>
        </div>
    </div>

    <div class="layui-form-item">
        <label class="layui-form-label">文章标题</label>
        <div class="layui-input-block">
            <input type="text" name="title" value="<?php echo (isset($article['title']) && ($article['title'] !== '')?$article['title']:''); ?>" required="required" title="请输入文章标题" placeholder="请输入文章标题" class="layui-input">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">标题图片</label>
        <div class="layui-input-block">
            <img data-tips-image style="height:auto;max-height:32px;min-width:32px" src="<?php echo (isset($article['title_img']) && ($article['title_img'] !== '')?$article['title_img']:''); ?>" />
            <input type="hidden" name="title_img" onchange="$(this).prev('img').attr('src', this.value)"
                   value="<?php echo (isset($article['title_img']) && ($article['title_img'] !== '')?$article['title_img']:''); ?>" class="layui-input">
            <a class="btn btn-link" data-file="one" data-type="jpg,jpeg,gif,png" data-field="title_img">上传图片</a>
        </div>
    </div>

    <?php if(isset($article)): ?>
    <div class="layui-form-item">
        <label class="layui-form-label">添加时间</label>
        <div class="layui-input-block">
            <input type="text" name="create_at" class="layui-input" value="<?php echo date('Y-m-d H:i:s',$article['create_at']); ?>" id="test5" placeholder="yyyy-MM-dd HH:mm:ss" lay-key="6">
        </div>
    </div>
    <?php endif; ?>

    <div class="layui-form-item">
        <label class="layui-form-label">文章描述</label>
        <div class="layui-input-block">
            <textarea name="description" id="" cols="30" rows="5" class="layui-textarea"><?php echo (isset($article['description']) && ($article['description'] !== '')?$article['description']:''); ?></textarea>
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">文章内容</label>
        <div class="layui-input-block">
            <textarea name="content"><?php echo (isset($article['content']) && ($article['content'] !== '')?$article['content']:""); ?></textarea>
        </div>
    </div>

    <div class="hr-line-dashed"></div>

    <div class="layui-form-item">
        <label class="layui-form-label"></label>
        <input type="hidden" name="article_id" value="<?php echo (isset($article['id']) && ($article['id'] !== '')?$article['id']:'0'); ?>">
        <button class="layui-btn" type="submit">保存文章</button>
    </div>

</form>

<script>
    layui.use('form', function () {
        var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
        form.render();
        laydate.render({
            elem: '#test5'
            , type: 'datetime'
        });
    });
    require(['ckeditor'], function () {
        var editor = window.createEditor('[name="content"]');
        // 获取内容
        var content = editor.getData();
        console.log(content);
    });

    // $.form.href("<?php echo url('index'); ?>");
</script>

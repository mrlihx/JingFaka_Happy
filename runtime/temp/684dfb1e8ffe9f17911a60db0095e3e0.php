<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:101:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/goods/change_trade_no_status.html";i:1646323578;s:80:"/www/wwwroot/shop.paozf.com/application/templates/pc/manage/default/content.html";i:1646323578;}*/ ?>
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
        
<!-- 表单搜索 开始 -->
<form class="layui-form layui-form-pane form-search" action="__SELF__" data-auto="true" method="post" style="padding: 50px;">
    <div class="layui-form-item layui-block">
        <label class="layui-form-label">订单生成方式</label>
        <div class="layui-input-inline">
            <select class="layui-form-item layui-inline change1" name="order_trade_no_type" style="display: block;height: 32px;">
                <option value="0" <?php if(sysconf('order_trade_no_type') == 0): ?>selected=""<?php endif; ?>>系统默认</option>
                <option value="1" <?php if(sysconf('order_trade_no_type') == 1): ?>selected=""<?php endif; ?>>用户id+时间+顺序号</option>
            </select>
        </div>
    </div>

    <div class="layui-form-item layui-block profix" <?php if(sysconf('order_trade_no_type') == 0): ?>style="display:none;"<?php endif; ?>>
         <label class="layui-form-label">订单号前缀</label>
        <div class="layui-input-inline">
            <input name="order_trade_no_profix" value="<?php echo sysconf('order_trade_no_profix'); ?>" placeholder="请输入订单号前缀" class="layui-input">
            <span style="color:red;">* 注意前缀不能超过 3 位</span>
        </div>
    </div>

    <div class="hr-line-dashed"></div>
    <div class="layui-form-item layui-block">
        <label class="layui-form-label">订单标题生成方式</label>
        <div class="layui-input-inline">
            <select class="layui-form-item layui-inline change2" name="order_title_type" style="display: block;height: 32px;">
                <option value="0" <?php if(sysconf('order_title_type') == 0): ?>selected=""<?php endif; ?>>商品名称</option>
                <option value="1" <?php if(sysconf('order_title_type') == 1): ?>selected=""<?php endif; ?>>订单编号</option>
                <option value="2" <?php if(sysconf('order_title_type') == 2): ?>selected=""<?php endif; ?>>前缀+订单编号</option>
                <option value="3" <?php if(sysconf('order_title_type') == 3): ?>selected=""<?php endif; ?>>自定义</option>
                <option value="4" <?php if(sysconf('order_title_type') == 4): ?>selected=""<?php endif; ?>>订单编号+后缀</option>

            </select>
        </div>
    </div>

    <div class="layui-form-item layui-block order_title2" <?php if(sysconf('order_title_type') != 2): ?>style="display:none;"<?php endif; ?>>
         <label class="layui-form-label">标题前缀</label>
        <div class="layui-input-inline">
            <input name="order_title_profix" value="<?php echo sysconf('order_title_profix'); ?>" placeholder="请输入标题前缀" class="layui-input">
        </div>
    </div>

    <div class="layui-form-item layui-block order_title4" <?php if(sysconf('order_title_type') != 4): ?>style="display:none;"<?php endif; ?>>
         <label class="layui-form-label">标题后缀</label>
        <div class="layui-input-inline">
            <input name="order_title_profix" value="<?php echo sysconf('order_title_profix'); ?>" placeholder="请输入标题后缀" class="layui-input">
        </div>
    </div>

    <div class="layui-form-item layui-block order_title3" <?php if(sysconf('order_title_type') != 3): ?>style="display:none;"<?php endif; ?>>
         <label class="layui-form-label">自定义标题</label>
        <div class="layui-input-inline">
            <input name="order_title_str" value="<?php echo sysconf('order_title_str'); ?>" placeholder="请输入自定义标题" class="layui-input">
        </div>
    </div>

    <div class="hr-line-dashed"></div>
    <div class="layui-form-item layui-inline">
        <button class="layui-btn layui-btn-primary">确定</button>
    </div>
</form>
<script>
    $('.change1').change(function () {
        if ($(this).val() == 0) {
            $('.profix').hide();
        } else {
            $('.profix').show();
        }
    });
    $('.change2').change(function () {
        $('.order_title2').hide();
        $('.order_title3').hide();
        $('.order_title4').hide();
        if ($(this).val() == 2) {
            $('.order_title2').show();
        }
        if ($(this).val() == 3) {
            $('.order_title3').show();
        }
        if ($(this).val() == 4) {
            $('.order_title4').show();
        }
    });
</script>

    </div>
    
</div>
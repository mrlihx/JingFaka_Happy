/**
 * Created by Administrator on 2018/8/24.
 */
$(function(){
    function footerPosition(){
        $(".footer-xs").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight,//网页正文全文高度
            winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(!(contentHeight > winHeight)){
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $(".footer-xs").addClass("fixed-bottom");
        } else {
            $(".footer-xs").removeClass("fixed-bottom");
        }
    }
    footerPosition();
    $(window).resize(footerPosition);
});
$(function(){
    var url = "/check_is_login", loginStr = '';
    $.post(url,{},function(data){
        data = eval("("+data+")");
        if(data.code==0){
            loginStr += '<a class="nav-btn" href="/register">注册</a><a class="nav-btn" href="/login">登录</a>';
        }else if(data.code==1){
            loginStr += '<a class="userName" href="/user">'+data.info.user_name+'</a><a href="javascript:if (window.JSHook) window.JSHook.logoutUser();else logout();" class="nav-btn">退出</a>';
        }
        $('#checkIsLogin').html(loginStr);
    });
});
//        头部下拉菜单
$(".header ul li:nth-child(3)").mouseenter(function(){
    $(".header ul li:nth-child(3) a.dev").addClass("addDev");
    $(".header ul.dropdown-menu").slideDown(200);
})
$(".header ul li:nth-child(3)").mouseleave(function(){
    $(".header ul li:nth-child(3) a.dev").removeClass("addDev");
    $(".header ul.dropdown-menu").slideUp(200);
});
//个人中心h5端
$(".logo-click").click(function(){
    $(".user-aside").slideToggle();
})

// function logout() { try { re = window.JSHook.logoutUser(); } catch (e) { logoutH5();  } }

function logout() {
    $.post('/logout', {}, function(res){
        if (res.code == 1) {
            // 成功
            setTimeout(function(){
                location.href='/login';
            }, 2000)
            toastr.success(res.msg);
        } else {
            // 失败
        }
    })
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "positionClass": "toast-top-center",
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}
var _hmt = _hmt || [];

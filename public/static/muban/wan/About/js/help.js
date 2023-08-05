/**
 * Created by Administrator on 2018/8/24.
 */
$(".header-l ul li:eq(1) a").addClass("active");
$(".header2 ul li:eq(1) a").addClass("active");
//    $(".conHeadTitle .headIcons").eq(0).addClass("active");

$(".conHeadTitle .headIcons").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var index = $(this).index();
    $(".helpConUl .conBody").eq(index).show().siblings().hide();
});

$(".conHeadTitle .headIcons").on("click",function() {
    if ($(".conHeadTitle .headIcons").hasClass("active")) {
        var a1 = $(this).find("img").attr("class");
        $(this).find("img").attr("src", imgUrl+ a1 + "_on.png");
        var $img = $(this).siblings().find("img");
        $.each($img, function(i, ele) {
            $(ele).attr("src", imgUrl + $(ele).attr('class') + ".png");
        });
    }
})
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) {
        return decodeURIComponent(r[2]);
    } else {
        return null;
    }
}
var type = getQueryString('type');
if (type) {
    var $actived = $(".conHeadTitle .headIcons").eq(type);
    $actived.addClass("active").siblings().removeClass('active');
    $(".helpConUl .conBody").eq(type).show().siblings().hide();
    var a1 = $actived.find('img').attr('class');
    $actived.find('img').attr('src', imgUrl + a1 + "_on.png");
    var $img = $actived.siblings().find('img');
    $.each($img, function(i, ele){
        $(ele).attr('src', imgUrl + $(ele).attr('class') + ".png");
    })
}
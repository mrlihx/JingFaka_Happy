 

if($('.wow').size()>0){
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		new WOW().init();
	};
}


$(function(){
	
//导航
	$('.gh').click(function(){
		if($('.gh').hasClass('selected')){
			$('.gh').removeClass('selected');
			$('.header .nav').fadeOut();
		}										
		else{
			$('.gh').addClass('selected');
			$('.header .nav').fadeIn();
		}					
	})
	
	 //侧边按钮
	$(window).on("scroll",function(){
	  if($(window).scrollTop() > 100){
	  	$(".go-top").fadeIn();
	  }else{
	  	$(".go-top").fadeOut();
	  }
	})
	//回到顶部
	$(".go-top").on("click",function(){
		$("body,html").animate({scrollTop:0},500);
		return false
	});
	
	$(".htop li").hover(function(){
  	$(this).find(".qr-img").fadeIn();
 
  },function(){
  	$(this).find(".qr-img").fadeOut();
 
  });
  
  //订单搜索
  $(".odsrch-type").on("click",function(){
		if($(".odsrch-type ul").is(":hidden")){
			$(".odsrch-type ul").slideDown();
		}else{
			$(".odsrch-type ul").slideUp();
		}
		
	})
  
 
	
	
})

$(function(){
	
//导航
	$('.gh').click(function(){
		if($('.gh').hasClass('selected')){
			$('.gh').removeClass('selected');
			$('.header .nav').hide();
		}										
		else{
			$('.gh').addClass('selected');
			$('.header .nav').show();
		}					
	});
//联系方式选中
   $('.choose-item-t').click(function() {
   	$(this).addClass('on').siblings().removeClass('on');
   	   if($('.s-email').hasClass('on')){
   	   	$('.choose-item.email').show();
   	   }else{
   	   	$('.choose-item.email').hide();
   	   }
   	});
	
//支付选择
  $('.paytype-hd li').click(function () {
  	    var index = $(this).index();
  	    console.log(index);
  	   $(this).addClass('on').siblings().removeClass('on');
  	   $('.h-row3 .paytype-bd').hide();
  	   $('.h-row3 .paytype-bd').eq(index).show();
  	   $('.paytype-item').removeClass('on');
  })
  //支付种类选择
  $('.paytype-item').click(function() {
  	    $(this).addClass('on').siblings().removeClass('on');
  })
})
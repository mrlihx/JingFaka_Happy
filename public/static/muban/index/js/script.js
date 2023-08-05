
$(function() {
	
	if($('.wow').size()>0){
		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
			new WOW().init();
		};
	}
	
		
	
	
	$('.gh').click(function(){
    if($(this).hasClass('selected')){
      $(this).removeClass('selected');
      $('.nav-wp').slideUp();
    }                   
    else{
      $(this).addClass('selected');
      $('.nav-wp').slideDown();
    }         
  })
	
	
	
})

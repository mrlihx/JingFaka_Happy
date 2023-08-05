var hideMsg=function(){
	$('#retMsg').hide();
};

var addNew=function(){
  $('#addNew').toggle();
};
	
$(function(){
	$('tr.lightbox:odd').addClass('odd');
	$('tr.lightbox:even').addClass('even');

	$('tr.lightbox').mouseover(function(){
		$(this).addClass('selected');
	});
	
	$('tr.lightbox:odd').mouseout(function(){
		if(!$(this).hasClass('clicked')){
			$(this).removeClass('selected');
			$(this).addClass('odd');
		}
	});
	
	$('tr.lightbox:even').mouseout(function(){
		if(!$(this).hasClass('clicked')){
			$(this).removeClass('selected');
			$(this).addClass('even');
		}
	});
	
	$('tr.lightbox').click(function(){
		$('tr.lightbox').removeClass('selected');
		$('tr.lightbox').removeClass('clicked');
	    $(this).addClass('selected');
		$(this).addClass('clicked');
	});
		
	$('#selectall').click(function(){
		$('[type=checkbox]').attr('checked' , true);		
	});

	$('#unselectall').click(function(){
		$('[type=checkbox]').each(function(){
			if(this.checked){
				$(this).attr('checked' , false);
			} else {
				$(this).attr('checked' , true);
			}
		});
	});
});

var RefreshCache=function(){
	$('#retMsg').show();
	$('#retMsg').html('<img src="/static/app/theme/lansejingdian/imgs/load.gif" align="absmiddle"> 正在刷新');
    $.get('index.php' , {action:'recache' , t:new Date().getTime()} , function(data){
    	data=$.trim(data);
    	console.log(data);
        if(data=='ok'){
            $('#retMsg').html('缓存刷新成功');
            setTimeout(hideMsg,2600);
        }
    });
};

var page_jump=function(url){
    var page=$('[name=page_options]').val();
	window.location.href=url+page;
};

$(function(){
    $('.user_status').each(function(){
	    $(this).mouseleave(function(){
		    $(this).hide();
		});
	});
});

function woodyapp(){
    alert('yang0');
};
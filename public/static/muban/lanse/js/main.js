// JavaScript Document
$(function(){
	$(".actived").next("ul").show();
	$("#left_menu dt").click(function(){
		$("#left_menu dt").removeClass("actived").next("ul").slideUp("fast");
		$(this).addClass("actived").next("ul").slideDown("fast");
	});
	$("#left_menu").css('min-height', $(document).height()+'px');
	$(".edit,.envelope,.edituser_box,.biaoji_box,.adduser_box,.addTD_box,.addWZ_box,.editWZ_box,.huifu_box").css('height', $(document).height()-60+'px');
	$(".link3").click(function(){
		$(".edit").animate({width:"400px"}),300;
	});
	$(".link1").click(function(){
		$(".envelope").animate({width:"400px"}),300;
	});
	$(".edituser_link").click(function(){
		$(".edituser_box").animate({width:"400px"}),300;
	});
	$(".adduser_link").click(function(){
		$(".adduser_box").animate({width:"400px"}),300;
	});
	$(".biaoji_link").click(function(){
		$(".biaoji_box").animate({width:"400px"}),300;
	});
	$(".addTD_link").click(function(){
		$(".addTD_box").animate({width:"400px"}),300;
	});
	$(".addWZ_link").click(function(){
		$(".addWZ_box").animate({width:"400px"}),300;
	});
	$(".editWZ_link").click(function(){
		$(".editWZ_box").animate({width:"400px"}),300;
	});
	$(".huifu_link").click(function(){
		$(".huifu_box").animate({width:"400px"}),300;
	});
	$(".box_close").click(function(){
		$(this).parent("div").parent("div").animate({width:"0"}),300;
	});
	$(".check").click(function(){
		if($(this).text()=="开启"){
			$(this).addClass("check1_on").siblings(".check").removeClass("check2_on");
		}
		else if($(this).text()=="关闭"){
			$(this).addClass("check2_on").siblings(".check").removeClass("check1_on");
		}
	});
	$(".check1").click(function(){
        $(this).addClass("check_on").siblings(".check1").removeClass("check_on");
        // $(this).children("input").addatt("checked");
	});
	$(".userinfo_link").click(function(){
		$(".userInfo_box").fadeIn("fast");
	});
	$(".link4").click(function(){
		$(".deleteUsers_box").fadeIn("fast");
	});
	$(".fenc_link").click(function(){
		$(".fenc_box").fadeIn("fast");
	});
	$(".kami_link").click(function(){
		$(".kami_box").fadeIn("fast");
	});
	$(".deleteDD_link").click(function(){
		$(".deleteDD_box").fadeIn("fast");
	});
	$(".closeDD_link").click(function(){
		$(".closeDD_box").fadeIn("fast");
	});
	$(".shoukuan_link").click(function(){
		$(".shoukuan_box").fadeIn("fast");
	});
	$(".jiesuan_link").click(function(){
		$(".jiesuan_box").fadeIn("fast");
	});
	$(".jiesuan1_link").click(function(){
		$(".jiesuan1_box").fadeIn("fast");
	});
	$(".jiesuan2_link").click(function(){
		$(".jiesuan2_box").fadeIn("fast");
	});
	$(".deleteJS_link").click(function(){
		$(".deleteJS_box").fadeIn("fast");
	});
	$(".editFL_link").click(function(){
		$(".editFL_box").fadeIn("fast");
	});
	$(".addFL_link").click(function(){
		$(".addFL_box").fadeIn("fast");
	});
	$(".deleteLog_link").click(function(){
		$(".deleteLog_box").fadeIn("fast");
	});
	$(".zcm_link").click(function(){
		$(".zcm_box").fadeIn("fast");
	});
	$(".bull_link").click(function(){
		$(".bull_box").fadeIn("fast");
	});
	$(".tsCon_link").click(function(){
		$(".tsCon_box").fadeIn("fast");
	});
	$(".hfCon_link").click(function(){
		$(".hfCon_box").fadeIn("fast");
	});
	$(".email_link").click(function(){
		$(".email_box").fadeIn("fast");
	});
	$(".box_close1").click(function(){
		$(this).parent("div").parent("div").fadeOut("fast");
	});
	if($(".payment").children('option:selected').text()=="银行转账"){
		$(".bank_show").show();
	}
	else if($(this).children('option:selected').text()=="支付宝"){
		$(".alipay_show").show();
	}
	else if($(this).children('option:selected').text()=="财付通"){
		$(".cft_show").show();
	}
	$(".payment").change(function(){
		if($(this).children('option:selected').text()=="银行转账"){
			$(".alipay_show,.cft_show").hide();
			$(".bank_show").show();
		}
		else if($(this).children('option:selected').text()=="支付宝"){
			$(".bank_show,.cft_show").hide();
			$(".alipay_show").show();
		}
		else if($(this).children('option:selected').text()=="财付通"){
			$(".bank_show,.alipay_show").hide();
			$(".cft_show").show();
		}
	});
	$(".shoujian_on").click(function(){
		$(this).css("border","1px solid #fff");
		$(".fajian_on").css("border","none");
		$(".shoujian").show();
		$(".fajian").hide();
	});
	$(".fajian_on").click(function(){
		$(this).css("border","1px solid #fff");
		$(".shoujian_on").css("border","none");
		$(".fajian").show();
		$(".shoujian").hide();
	});
	$(".set_menu").click(function(){
		$(this).css("border","1px solid #fff").siblings("span").css("border","none");
		var index = $(this).index();
		$(".set_tab").hide();
		$(".set_tab").eq(index).show();
	});
	
	$(".all_check").click(function(){
		$(".tab1").find("input:checkbox").prop("checked",true);
	});
	$(".back_check").click(function(){
		$(".tab1 input:checkbox").each(function() {
			if($(this).attr("checked")){
				$(this).removeAttr("checked");
			}
			else{
				$(this).prop("checked",true);
			}
        });
	});
	$('.ddhd').click(function () {
		$(this).parents('.bull_box').fadeOut('fast');
    });
	$('.left_hidden').toggle(function () {
		$('#left_menu').css('width','0');
		$('#top_menu').css('margin-left','0');
        $('#right_box').css('margin-left','30px');
        $(this).css('transform','rotate(180deg)');
    },function () {
        $('#left_menu').css('width','300px');
        $('#top_menu').css('margin-left','300px');
        $('#right_box').css('margin-left','330px');
        $(this).css('transform','rotate(0deg)');
    });
});
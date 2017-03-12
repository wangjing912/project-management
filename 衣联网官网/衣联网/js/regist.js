$(function(){
	$("header span").click(function(){
		$("#sale").slideUp();
	})

// 我的衣联
$("#myclothli").bind("mouseover",function(){
	$("#myclothli a").css("color","red");
	$("#mycloth").css("display","block");
	$("#myclothli img").attr("src","tubiao/三角上.png");
}).bind("mouseout",function(){
	$("#myclothli a").css("color","#666666");
	$("#mycloth").css("display","none");
	$("#myclothli img").attr("src","tubiao/三角下.png");
});
$("#mycloth").bind("mouseover",function(){
	$("#myclothli a").css("color","red");
	$("#mycloth").css("display","block");
	$("#myclothli img").attr("src","tubiao/三角上.png");

}).bind("mouseout",function(){
	$("#myclothli img").attr("src","tubiao/三角下.png");
	$("#myclothli a").css("color","#666666");
	$("#mycloth").css("display","none");
})
// 我的货车
$("#mycarli").bind("mouseover",function(){
	$("#mycarli a").css("color","red");
	// $("#mycloth").css("display","block");
	$("#mycarli #img1").attr("src","tubiao/购物车 (1).png");
	$("#mycarli #img2").attr("src","tubiao/三角上.png");
}).bind("mouseout",function(){
	$("#mycarli a").css("color","#666666");
	// $("#mycloth").css("display","none");
	$("#mycarli #img2").attr("src","tubiao/三角下.png");
	$("#mycarli #img1").attr("src","tubiao/购物车.png");
});
// 我的收藏
$("#mysellectli").bind("mouseover",function(){
	$("#mysellectli a").css("color","red");
	$("#collect").css("display","block");
	$("#mysellectli #img1").attr("src","tubiao/爱心 (1).png");
	$("#mysellectli #img2").attr("src","tubiao/三角上.png");
}).bind("mouseout",function(){
	$("#mysellectli a").css("color","#666666");
	$("#collect").css("display","none");
	$("#mysellectli #img2").attr("src","tubiao/三角下.png");
	$("#mysellectli #img1").attr("src","tubiao/爱心.png");
});
$("#collect").bind("mouseover",function(){
	$("#mysellectli a").css("color","red");
	$("#collect").css("display","block");
	$("#mysellectli #img1").attr("src","tubiao/爱心 (1).png");
	$("#mysellectli #img2").attr("src","tubiao/三角上.png");
}).bind("mouseout",function(){
	$("#mysellectli a").css("color","#666666");
	$("#collect").css("display","none");
	$("#mysellectli #img2").attr("src","tubiao/三角下.png");
	$("#mysellectli #img1").attr("src","tubiao/爱心.png");
});


// 步骤
var $flag,$flag1,$flag2,$flag2;
$("#step1content input").bind("blur",function(){
	if($(this).val()==""){
		$(this).siblings("span").html("*不能为空").css("color","red");
		$flag = false;
	}else{
		if($(this).attr("id")=="username"){
			
			if($(this).val().length<8 || $(this).val.length>16 ){
				$(this).next().html("*用户名在８-16位之间").css("color","red");
				$flag1 = false;
			}
			else{	
					var reg1 =/^1[34578]\d{9}$/;
					var reg2 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
					// var reg3 =  /(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{4,23}/;
					if(reg1.test($(this).val()) ||reg2.test($(this).val())){
						$(this).next().html("*√").css("color","green");
						$flag1 = true;
					}else{
						$(this).next().html("*请输入正确的格式").css("color","red");
						$flag1 = false;
					}		
				}
		}
		if($(this).attr("id")=="password"){
			if($(this).val().length<6 || $(this).val.length>12){
				$(this).next().html("*用户名在6-12位之间").css("color","red");
				$flag2 = false;
			}else{
				var reg =  /(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{4,23}/;
				if(reg.test($(this).val())){
						$(this).next().html("*√").css("color","green");
						$flag2 = true;
				}else{
						$(this).next().html("*请输入正确的格式").css("color","red");
						$flag2 = flase;
					}
				 
			}
		}
		if($(this).attr("id")=="yanzhenma"){
		$(this).siblings("span").html("*√").css("color","green");
			$flag3 = true;
		}
			$flag = true;

	}
		
	
})




$("#inputnext").bind("click",function(){
	if($flag&&$flag1&&$flag2&&$flag3){
		$(this).parent().css("display","none");
		$(this).parent().parent().find("#step1num").css({
			width: "20px",
			height: "20px",
			lineHeight: "20px",
			backgroundColor:"#F0F0F0",
			color:"#969696"
		});
		$(this).parent().parent().find("#step1").css({
			color:"#969696",
		});
		$(this).parent().parent().next().find("#step2content").css("display","block");

		$(this).parent().parent().next().find("#step2num").css({
			width: "23px",
			height: "23px",
			lineHeight: "23px",
			background: "#D47F8D",
			color:"#fff" 
		});
		$(this).parent().parent().parent().find("#step2").css({
			color:"#333",
		});
	}
	
})
$("#regist").bind("click",function(){
	$(this).parent().css("display","none");
	$(this).parent().parent().find("#step2num").css({
		width: "20px",
		height: "20px",
		lineHeight: "20px",
		backgroundColor:"#F0F0F0",
		color:"#969696"
	});
	$(this).parent().parent().find("#step2").css({
			color:"#969696",
		});
	$(this).parent().parent().next().find("p").css("display","block");
	$(this).parent().parent().next().find("#step3num").css({
		width: "23px",
		height: "23px",
		lineHeight: "23px",
		background: "#D47F8D",
		color:"#fff" 
	});
	$(this).parent().parent().parent().find("#step3").css({
			color:"#333",
		});
})
























})
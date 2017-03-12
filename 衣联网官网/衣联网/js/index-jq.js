$(function(){
	$("header span").click(function(){
		$("#sale").slideUp();
	})
// 固定条
$(window).scroll(function(){

	var scrolltop = $(this).scrollTop();
	if(scrolltop>350){
		$("#fixed").css("display","block");
	}else{
		$("#fixed").css("display","none");

	}
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
// 在线客服

// 图片缩放

	$("#zoom div").mouseover(function(){
		$(this).find("#divimg1").css("width","480px").css("transition","all 0.6s");	
		$(this).find("#img1").css("width","195px");
		$(this).siblings().find("#img1").css("width","75px").css("overflow","hidden");
		$(this).siblings().find("#divimg1").css("width","0px");
	});
	// $("#zoom").mouseout(function(){
	// 	$("#zoom").find("#divimg1").css("width","480px");
	// })
//全部商品类目展示
$("#totaltools").hover(function(){
		$("#shoplist").slideDown();
		$("#totaltools").css({
			backgroundColor:"#fff",
			color:"black"
		});

	},function(){
		$("#shoplist").slideUp();
		$("#totaltools").css({
			backgroundColor:"#E11639",
			color:"white",
			borderRadius:"5px 0 0 0"
		});
});
//批发市场
$("#content #market").hover(function(){
	$("#marketscale").animate({width:"630px"},200);
},function(){
	$("#marketscale").animate({width:"0"},200);
})





// 中间图片轮转

	var $imgs = $("");
	var i=1;
	setInterval(function(){
		$("#center #rotate img").attr("src","img/rotate"+i+".png");
		i++;
		if(i>4){
			i=1;
		}
	},1500);

// 右边图片定时向上滑动
	var $lis = $("#picscale #smallpic ul li");
	var $length =$lis.length;
	var j=0;
	setInterval(function(){
		var $pre = $("#picscale #smallpic ul li").eq(j);
		var $clone = $pre.clone();
		$("#picscale #smallpic ul").animate({top:"+="+"-95px"},500);
		j++;
		if(j>=$length){
			j=0;	
		}
		$("#picscale #smallpic ul").append($clone);
	},2000);
	











//精选市场
$("#chosemarket #chosesection1 #chosesection1picL").hover(function(){
	$(this).find("img").animate({top:"50px"},200);
},function(){
	$(this).find("img").animate({top:"0px"},200);
});


//排行榜
$("#ranklist>ul>li").mouseover(function(){
	$(this).find("em").css("color","#222");
	$(this).find("ul").css("display","block");
	$(this).siblings().find("ul").css("display","none");
	$(this).siblings().find("em").css("color","#E0E0E0");
});















































});
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

// 放大镜图片
$("#picsmall div").mouseover(function(){
	var $num = $(this).index()+1;
	// alert($num);
	$("#picbig img").attr("src","img/glassbig"+$num+".jpg");
	$("#glasslarge img").attr("src","img/glasslarge"+$num+".jpg");
})


$("#picbig").bind("mousemove",function(event){
		var mousex = event.pageX;
		var mousey = event.pageY;
		// alert(mousex,mousey);
		var divoffset = $(this).offset();
		// alert(divoffset.left);
		var l = mousex-divoffset.left-$("#move").width()/2;
		var t = mousey-divoffset.top-$("#move").height()/2;
		if(l<0){
			l = 0;
		}else if(l>($("#picbig").width()-$("#move").width())){
			
			l =$("#picbig").width()-$("#move").width();
		}
		if(t<0){
			
			t = 0;
		}else if(t>($("#picbig").height()-$("#move").height())){
			
			t = $("#picbig").height()-$("#move").height();
		}
		$("#move").css({
			left:l,
			top:t
		})
		$("#glasslarge img").css({
			left:-l,
			top:-t
		})

	}).hover(function(){
		$("#move,#glasslarge").show();
	},function(){
		$("#move,#glasslarge").hide();
	})

// 数量加减
$("#size ul li #jian").bind("click",function(){
	var $num = $(this).next().html();
	// alert($num);
	$num--;
	// alert($num);

	$(this).next().html($num);
	if($(this).next().html()<0){
		$(this).next().html("0");
	}
	
})
$("#size ul li #add").bind("click",function(){
	var $num = $(this).prev().html();
	// alert($num);
	$num++;
	// alert($num);

	$(this).prev().html($num);
	
	
})
























})
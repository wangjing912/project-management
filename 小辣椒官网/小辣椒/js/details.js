$(function() {
	var imgs = $(".product_pic").find("img");
	var cicrle = $(".cicrle").children();
	for(var j=0;j<cicrle.length;j++){
		if(j==0){
			$(cicrle).eq(j).addClass("in");
		}else{
			$(cicrle).eq(j).addClass("on");
		}
	}
	var index = 1;
	function change(){
		if(index<0){
			index=imgs.length-1;
		}
		$(imgs).eq(index).css({
			opacity:"1",
			transition:"all 0.6s"
		});
		$(imgs).eq(index).siblings("img").css({
			opacity:"0",
			transition:"all 0.6s"
		});
		$(cicrle).eq(index).removeClass("on").addClass("in");
		$(cicrle).eq(index).siblings().removeClass("in").addClass("on");
		index++;
		if(index>=imgs.length){
			index=0;
		}
	}
	$(".product_pic").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(change,3000);
	});
	var timer = setInterval(change,3000);
	$(".left").click(function(){
		clearInterval(timer);
		if(index<=0){
			index=5;
		}
		index=index-2;
		change();
	});
	$(".right").click(function(){
		clearInterval(timer);
		change();
	});
	$(cicrle).click(function(){
		clearInterval(timer);
		index = $(this).index();
		// alert(index);
		$(imgs).eq(index).css({
			opacity:"1",
			transition:"all 0.6s"
		});
		
		$(imgs).eq(index).siblings("img").css({
			opacity:"0",
			transition:"all 0.6s"
		});
		$(this).removeClass("on").addClass("in");
		$(this).siblings().removeClass("in").addClass("on");

	});

	// 数量加减
	var counnt = $(".counts").html();
	$(".jian").click(function(){
		if(counnt==0){
			counnt=0;
		}else{
			counnt--;
		}
		$(".counts").html(counnt);
	});
	$(".add").click(function(){
		
		counnt++;
		$(".counts").html(counnt);
	});

	// 点击内容出现
	$(".details").click(function(){
		$(this).css("color","#D4251D");
		$(this).parent("li").siblings().find("a").css("color","#000");
		$(".pic").show();
		$(".pic").siblings().hide();

	})
	$(".message").click(function(){
		$(this).css("color","#D4251D");
		$(this).parent("li").siblings().find("a").css("color","#000");
		
		$(".argument").show();
		$(".argument").siblings().hide();
	})
	// alert($(".argument").height());







});
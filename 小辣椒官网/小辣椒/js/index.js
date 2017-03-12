$(function () {
	// banner图切换
	var color = ["#39B3B7","#22252A","#A9B2CB","#171717"];
	var index=1;
	var cicrle = $(".cicrle").children();
	for(var j=0;j<cicrle.length;j++){
		if(j==0){
			$(cicrle).eq(j).addClass("on");
		}else{
			$(cicrle).eq(j).addClass("in");
		}
	}
	function change(){
		if(index<0){
			index=cicrle.length-1;
		}
		$("header").css({
			background:color[index],
			transition:"all 0.4s"
		});
		$("aside").css({
			background:color[index],
			transition:"all 0.4s"
		});
			$(cicrle).eq(index).removeClass("in").addClass("on");
			$(cicrle).eq(index).siblings().removeClass("on").addClass("in");
		$(".main").css({
			background:"url(img/banner"+index+".jpg )",
			backgroundPosition:"-270px 0",
			transition:"all 0.4s"
		});
		index++;
		if(index>=4){
			index=0;
		}
	}
	$(".middle").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(change,3000);
	});
	var timer = setInterval(change,4000);
	$(".left").click(function(){
		clearInterval(timer);
		if(index<=0){
			index=4;
		}
		index=index-2;
		// alert("1:"+index);
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
		$("header").css({
			background:color[index],
			transition:"all 0.4s"
		});
		$("aside").css({
			background:color[index],
			transition:"all 0.4s"
		});
		$(".main").css({
			background:"url(img/banner"+index+".jpg )",
			backgroundPosition:"-270px 0",
			transition:"all 0.4s"
		});
		$(this).removeClass("in").addClass("on");
		$(this).siblings().removeClass("on").addClass("in");

	});

	$(window).scroll(function(){

		var scrolltop = $(this).scrollTop();
		if(scrolltop>750){
			// alert("jjjj");
			$(".header").css({
				display:"block"
			});
		}else{
			$(".header").css({
				display:"none"
			});
			$("header").css({
				background:color[index-1],
				transition:"all 0.4s"
			});
		}
		if(scrolltop>1050){
			$(".side").show();
		}else{
			$(".side").hide();

		}
	});
	$(".side").click(function(){
		$("body").animate({
			scrollTop:0,
		},100);
	})
});

	

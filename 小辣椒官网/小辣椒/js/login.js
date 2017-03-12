$(function(){

// 手机号验证	
	$(".username").blur(function(){
		// alert("kkkk");
		var username = $(".username").val();
		// alert(username);
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		if(username==""){
			$(this).parent(".user_login").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)"
			});
			$(this).parent(".user_login").find(".correct_txt").html("请填写手机号码！");
		}else if(!reg.test(username)){
			$(this).parent(".user_login").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)",
			});
			$(this).parent(".user_login").find(".correct_txt").html("请填写正确格式的手机号码！");
		}else{
			$(this).parent(".user_login").find(".correct").css({
				display:"none"
			});
			$(this).parent(".user_login").find(".correct1").css({
				display:"block"
				
			});
			$(this).parent(".user_login").find(".correct_txt").html(" ");
		}
	});
// 密码验证
	$(".password").blur(function(){
		var password = $(".password").val();
		var reg = /^[a-zA-Z]\w{5,17}$/;
		if(password==""){
			$(this).parent(".password_login").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)"
			});
			$(this).parent(".password_login").find(".correct_txt").html("请设置密码！");
		}else if(!reg.test(password)){
			$(this).parent(".password_login").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)"
			});
			$(this).parent(".password_login").find(".correct_txt").html("(以字母开头，长度6-18位)");
		}else{
			$(this).parent(".password_login").find(".correct2").css({
				display:"block",
			});
			$(this).parent(".password_login").find(".correct").css({
				display:"none",
			});
			$(this).parent(".password_login").find(".correct_txt").html(" ");
		}
	});

	// 登录确认
	$(".submit").click(function(){
		var flag=false;
		var comon = $(".correct");
		var style1 = $(".correct1").css("display");
		var style2 = $(".correct2").css("display");
		if(style1=="block" && style2=="block"){
			flag = true;
		}
		if(flag){
			location.href="index.html";
		}
	});


	
});

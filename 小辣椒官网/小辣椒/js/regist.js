$(function(){

// 验证码：
	var data = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var colors = ["yellow","blue","orange","pink","green","red","lightblue"];
	var spans = $(".check_code").children();
	$(".click_code").click(function(event){
		event.preventDefault();
		for(var i=0;i<spans.length;i++){
			$(spans).eq(i).css("color",colors[i]);
		}
		for(var j=0;j<4;j++){
			var codes =data[Math.floor(Math.random()*data.length)];
			var color = colors[Math.floor(Math.random()*colors.length)];
			$(spans).eq(j)[0].innerHTML = codes;
			$(spans).eq(j).css("color",color);
		}
	});
// 手机号验证
	$(".uesrname").blur(function(){
		var uesername = $(".uesrname").val();
		// alert(uesername);
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		if(uesername==""){
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)"
			});
			$(this).parent("td").find(".correct_txt").html("请填写手机号码！");
		}else if(!reg.test(uesername)){
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)"
			});
			$(this).parent("td").find(".correct_txt").html("请填写正确格式的手机号码！");
		}else{
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/on.png)"
			});
			$(this).parent("td").find(".correct_txt").html(" ");
		}
	});

// 验证码验证
	$(".checkcode").blur(function(){
		var checkcode = $(".checkcode").val();
		var checkcodettxt ="";
		for(var i=0;i<spans.length;i++){
		 checkcodettxt+=$(".check_code").children().eq(i).html();
		}
		if(checkcode==""){
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)"
			});
			$(this).parent("td").find(".correct_txt").html("请填写验证码！");
		}else if(checkcode!=checkcodettxt){
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)"
			});
			$(this).parent("td").find(".correct_txt").html("请填写正确的验证码！");
		}else{
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/on.png)"
			});
			$(this).parent("td").find(".correct_txt").html(" ");
		}
	});

// 密码验证
	var pd="";
	$(".password").blur(function(){
		var password = $(".password").val();
	
		pd=password;
		// alert(uesername);
		var reg = /^[a-zA-Z]\w{5,17}$/;
		if(password==""){
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)"
			});
			$(this).parent("td").find(".correct_txt").html("请设置密码！");
		}else if(!reg.test(password)){
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)"
			});
			$(this).parent("td").find(".correct_txt").html("(以字母开头，长度在6~18之间，只能包含字母、数字和下划线！)");
		}else{
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/on.png)"
			});
			$(this).parent("td").find(".correct_txt").html(" ");
		}
	});

// 再次输入密码alert(pd);
	$(".pwdr").blur(function(){
		var pwdr = $(".pwdr").val();
		if(pwdr==""){
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)"
			});
			$(this).parent("td").find(".correct_txt").html("请再次输入密码！");
		}else if(pwdr!=pd){
			// alert(pd);
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/n.png)"
			});
			$(this).parent("td").find(".correct_txt").html("与上次输入不符，请重新输入");
		}else{
			$(this).parent("td").find(".correct").css({
				display:"inline-block",
				backgroundImage:"url(img/on.png)"
			});
			$(this).parent("td").find(".correct_txt").html(" ");
		}
	});

// 确认登录
	$(".submit").click(function(){
		var flag=true;
		var comon = $(".correct");
		for(var i=0;i<$(".correct").length;i++){
			var url = $(comon).eq(i).css("background-image");
			if(url.indexOf("img/on.png")==-1){
				flag = false;
				break;
			}
		}
		if(flag){
			location.href="login.html";
		}
	});
});
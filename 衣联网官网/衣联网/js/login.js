//密码登录
$(function(){

var $id,$id2;
$("#loginmethd div").click(function(){
	$(this).css("borderBottom","2px #CF1F3F solid").css("color","#CF1F3F");
	$id1 = $(this).attr("id");
	$id2 = $(this).siblings().attr("id")

	// alert($id);alert($id+"style");
	// alert($($id+"style").html());
	$("#"+$id1+"style").css("display","block");
	$("#"+$id2+"style").css("display","none");

	// $($($id+"style").toggle());
	$(this).siblings().css("borderBottom","2px #D4D4D4 solid").css("color","#666");
});


// 验证
$("#myform").validate({
				rules:{
					username:{
						required:true,
						minlength:5
					},
					password:{
						required:true,
						number:true,
						rangelength:[6,10]
					},
					check:"required"

				},
				messages:{
					username:{
						required:"请输入用户名",
						minlength:"用户名不能少于5个字符"
					},
					password:{
						required:"请输入密码",
						number:"密码只能是数字类型",
						rangelength:"请输入6-10位数字"
					},
					check:"请输入验证码"
				},
			
				errorPlacement:function(error,element){
					error.appendTo(element.siblings("span")); 
					
				
				},
				
			})












})

if("function"!==typeof getAjaxSiteUrl)var getAjaxSiteUrl=function(a){var b=window.location.origin,c=SITE_URL;b||(b="");0<b.indexOf("//www.eelly")&&(c="");if(""==a)return c;0!=a.indexOf("http")&&(a=c+a);return a};var ajaxSiteUrl=getAjaxSiteUrl("");
(function(a){var b={J_elyFtLinkBtn:a("#J_elyFt .J_elyFtLinkBtn"),init:function(){this.J_elyFtLinkBtn.click(function(){var b=a(this),d=b.siblings(".J_elyFtLinkMore");b.toggleClass("ely-ic-arrow-up").toggleClass("ely-ic-arrow-down");d.slideToggle("fast")})}};a(function(){b.init()})})($);
var DoSearch={location:"index.php?app=search",condition:"",curl:function(a){this[a.type](a);this.condition?window.location.replae(this.location+this.condition):alert("\u641c\u7d22\u6761\u4ef6\u4e0d\u80fd\u4e3a\u7a7a.")},price:function(){var a=maxprice=0;try{var b=0,a=jQuery("#mixprice").val();maxprice=jQuery("#maxprice").val();!a&&maxprice?(a=maxprice,maxprice=0):a&&maxprice&&(1*a>1*maxprice?(b=maxprice,maxprice=a,a=b):1*a==1*maxprice&&(a=maxprice,maxprice=0))}catch(c){}this.condition="&price="+(a?
1*a:0)+(maxprice?"-"+1*maxprice:"")},keyword:function(){var a="";try{a=jQuery("#keyword").val()}catch(b){}this.condition="&keyword="+a},region:function(a){this.condition="&region_id="+a.region_id+(a.action?"&act="+a.action:"")}};
function imTalk(a){var b="";switch(a.im){case "qq":b="tencent://message/?uin="+a.no+"&Menu=yes";break;case "qq_b":b="http://wpa.qq.com/msgrd?v=3&uin="+a.no+"&site=qq&menu=yes";break;case "ww":b="http://amos.im.alisoft.com/msg.aw?v=2&uid="+a.no+"&site=cntaobao&s=2&charset=utf8"}document.getElementById("doFrame")?document.getElementById("doFrame").src=b:(a=document.createElement("iframe"),a.src=b,a.id="doFrame",a.style.display="none",document.body.appendChild(a));return!1}
function changeLazy(a){var b=null,b=a?a.find("img.js_bigpipe"):$("img.js_bigpipe");b.each(function(){var a=0;$(this).parents().each(function(){if("none"==$(this).css("display"))return a=1,!1});if(1!=a&&$(window).height()+$(window).scrollTop()>=$(this).offset().top-$(window).height()){var b=$(this).attr("lazy_src");$(this).removeAttr("lazy_src").removeClass("js_bigpipe").attr("src",b).on("error",function(){$(this).attr("src",STATIC_URL+"/data/system/default_goods_image_220.gif")})}})}
function delayLazy(a){$("img.js_delaypic"+a).each(function(){if($(window).height()+$(window).scrollTop()>=$(this).offset().top-$(window).height()){var b=$(this).attr("delay-src");$(this).removeAttr("delay-src").removeClass("js_delaypic"+a).attr("src",b).on("error",function(){$(this).attr("src",STATIC_URL+"/data/system/default_goods_image_220.gif")})}})}$(function(){var a=0;$(window).bind("scroll",function(){var b=(new Date).getTime();600<b-a&&(a=b,changeLazy())})});
$(function(){var a=$(".site-ad-loaded");if(0!=a.length){var b="http://bc"+location.host.slice(location.host.indexOf("."))+"/api/show/index?data=",c={};a.each(function(a,b){b=$(b);var d=b.attr("adid").split("|"),g=d[0];"undefined"==typeof c[g]&&(c[g]=[]);c[g].push(d[1])});var a="",d;for(d in c)a+="&"+d+"="+c[d].join(",");a=a.slice(1);b+="undefined"==typeof a?"":encodeURIComponent(a);$.ajax({type:"GET",url:b,dataType:"jsonp",cache:!1,success:function(a){}})}});
function collect_goods(a,b){if($.getCookie("uname")){var c=$.getCookie("uid");c&&(_adwq=_adwq||[],_adwq.push(["_setAction","7ssy7j",c,a]));$.getJSON(SITE_URL+"/index.php?app=my_favorite&act=add&type=goods&ajax=1",{item_id:a},function(d){d.done&&(0<=parseInt(d.msg)&&eaTrackFavorite(a,c,"goods"),"\u60a8\u5df2\u7ecf\u6536\u85cf\u8fc7\u8be5\u5546\u54c1"!=d.msg?($("#fav-pop").removeClass("remove"),b&&$("#fav-pop").css("top",$(b).scrollTop()+$(window).height()/2),$("#my_fav_count").html(d.msg)):"undefined"!=
typeof art&&(art.dialog({content:document.getElementById("is-fav-pop"),fixed:!0,lock:!0,width:396,height:189,background:"#fff",opacity:.2,time:2}),$(".aui_main").css("border","4px solid #ccc"),$(".aui_title,.aui_nw,.aui_n,.aui_ne,.aui_w,.aui_e,.aui_sw,.aui_s,.aui_se").remove()))})}else show_login_register()}function change_captcha(a){a.attr("src","/index.php?app=captcha&"+Math.round(1E4*Math.random()))}
var eaTrackFavorite=function(a,b,c){b={};"goods"==c?b.goods_id=a:b.store_id=a;b.type=c;_eaq.push(["trackClickEvent","logUserFavorites",b])};
function collect_store(a,b){$.getCookie("uname")?$.getJSON(SITE_URL+"/index.php?app=my_favorite&act=add&type=store&jsoncallback=?&ajax=1",{item_id:a},function(a){a.done&&("\u60a8\u5df2\u7ecf\u6536\u85cf\u8fc7\u8be5\u5e97\u94fa"!=a.msg?($("#shop-fav-pop-sc").removeClass("remove"),b&&$("#shop-fav-pop-sc").css("top",$(b).scrollTop()+$(window).height()/2)):(art.dialog({content:document.getElementById("shop-fav-pop"),fixed:!0,lock:!0,width:396,height:189,background:"#fff",opacity:.2,time:2}),$(".aui_main").css("border",
"4px solid #ccc"),$(".aui_title,.aui_nw,.aui_n,.aui_ne,.aui_w,.aui_e,.aui_sw,.aui_s,.aui_se").remove()))}):show_login_register()}function getPostCard(a){}
function show_login_register(a){url=SITE_URL+"/index.php?app=member&act=login&inajax=1";a&&(url+="&ret_url="+encodeURIComponent(a));art.dialog({id:"art_dialog_login",left:"50%",top:"40%",lock:!0,resize:!1,fixed:!0,padding:0,background:"#fff",opacity:.2,title:""}).content('<iframe src="'+SITE_URL+'/index.php?app=member&act=login&inajax=1" id="frame_login_register" frameborder="0" allowtransparency="true" style="width: 100%; height: 100%; border: 0px none;"></iframe>');$("#frame_login_register").closest(".aui_state_lock").addClass("mg_dialog");
$(".aui_close").on("click",function(){$.removeCookie("collect")})}
(function(){var a={J_async_price:null,J_uid:0,J_data:{},init:function(){a.J_async_price=$("[class*='J_async_price_']");if(0==a.J_async_price.length)return!1;a.getUid();a.getData();a.updatePrice()},getUid:function(){""!=$.getCookie("uid")&&(a.J_uid=$.getCookie("uid"))},getData:function(){a.J_async_price.each(function(){var b=$(this),c=b.attr("g_id"),b=b.attr("store_id");"undefined"==typeof a.J_data[b]&&(a.J_data[b]=[]);a.J_data[b].push(c)})},updatePrice:function(){$.ajax({type:"POST",url:SITE_URL+
"/index.php?app=goods&act=getGoodsPrices",data:{uid:a.J_uid,data:a.J_data},dataType:"jsonp",success:function(b){if(b.done){b=b.retval;for(var c in b){var d=b[c],e=d.price_lower,f="undefined"!=typeof d.price_upper;f&&d.price_lower!=d.price_upper&&(e+="~"+d.price_upper);d=a.J_async_price.filter(".J_async_price_"+c);f&&d.addClass("ui-has-upper-price");d.html(e)}}}})}};$(function(){a.init()})})($);
$(function(){var a=document.location.href,b="act=login app=free_ticket act=advantage app=cashier app=store_decoration act=add_step4 app=datapacket act=register".split(" "),c=!1;({show:function(){setTimeout(function(){$("#J_sidebar").show().animate({right:-280},200)},2E3)},requestSidebar:function(){var a=this;$.ajax({url:ajaxSiteUrl+"/index.php?app=navigation&act=sidebar",dataType:"jsonp",cache:!0,success:function(b){$.appendScriptReWrite(b.retval);a.show()}})},init:function(){for(var d=this,e=0,f=
b.length;e<f&&(c=-1!=a.indexOf(b[e])?!1:!0,c);e++);c&&setTimeout(function(){d.requestSidebar()},3E3)}}).init()});
$(".53KeFu").click(function(){1>$("#53KeFuForm").length&&($(".53KeFu").append("<a id='53KeFuForm' href='tencent://message/?Menu=yes&amp;uin=800037035&amp;Service=58&amp;SigT=A7F6FEA02730C98896A1DEA483E2913FA3A1005974DB69645C18DB3B778FFEA69BFB6C2383F063981EE5264BA7E52B0E342DE51308776441F9E72F5FEC9B232F97198CB24FF3F16C5E7B7A7BE0C8CF5657FCB1D3DF60FF22ED02FE7D7860ADE5CC3638D473685D5265C05351BD3C4C47D54ACBB9C5450108&amp;SigU=30E5D5233A443AB2DCDF0343E2A95109CFC323AB179B7FAB961FB28629F6408DB8FD41E01E87FA1766AF3A13630EB7F4F6EFCFB7CBA8097A0760613E3169FA96A85E9D29EEA40856'></a>"),""!=
$.getCookie("uname")&&($.ajax({type:"GET",url:"/index.php?app=default&act=ajaxGetKeFuUrl",async:!1,data:{part:1},dataType:"json",success:function(a){unique_id=a.unique_id}}),$("#53KeFuForm").attr("action",$("#53KeFuForm").attr("action")+"&unique_id="+unique_id)));$("#53KeFuForm")[0].click()});
$(function(){var a=window.STORE_ID||[];$(".J_enshrine").on("click",function(){var b=$(this),c=_eaq||[];b.data("enshrine")||(c.push(["trackMarsEvent",{data:{type:"store",data_mars:{store_id:a}}}]),b.data("enshrine",1))})});

// 点击,蓝色div滑动效果

$(".detail-top").on("click",".detail-nav",function(e){
    e.preventDefault();
    var lt = parseInt($(this).css("width"));
    var n = $(this).parent().children().index(this);
    $(".detail-slide").css("width",lt).css("left",lt*n+100)
})

$('.carousel').carousel({
	interval: 3000
});
// 切换导航栏内容时分页
$(function(){
    $(".detail-top").on("click",".detail-nav",function(){
        var $nav = $(this);
        //点击$nav 页面加载对应内容
        var id = $nav.attr("data-toggle");
        $(id).show().siblings().hide();
    })
})
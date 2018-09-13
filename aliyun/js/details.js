// 点击,蓝色div滑动效果

$(".detail-top").on("click",".detail-nav",function(e){
    e.preventDefault();
    var lt = parseInt($(this).css("width"));
    console.log(lt)
    var n = $(this).parent().children().index(this);
    console.log(lt*n+100)
    $(".detail-slide").css("width",lt).css("left",lt*n+100)
})

$('.carousel').carousel({
	interval: 3000
});
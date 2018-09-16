$(function(){
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
    $("#index").click(function(){
        location.href = "http://localhost:8080/index.html?kw=login";
    })

// 切换导航栏内容时分页
    $(".detail-top").on("click",".detail-nav",function(){
        var $nav = $(this);
        //点击$nav 页面加载对应内容
        var id = $nav.attr("data-toggle");
        $(id).show().siblings().hide();
    })
    
    var $ul = $(".detail-five-list");
    $ul.on("click","li.dis",function(){
        var $li = $(this);
        $li.css("background","#fff").siblings().css("background","#C6C6C6");
        var $tb = $li.attr("data-toggle");
        $($tb).show().siblings(":not(:first)").hide();
    })
    

    // 动态加载产品信息 
    $.ajax({
        url: "http://localhost:8080/products",
        type: "get",
        data: "uname=product",
        dataType: "json",
        success: function(data){
            var html = "";
            for(var {pid,title,pirce,details,suggest,img1,img2} of data){
                html+=`<div class="my-col-4 col-md-6 detail-list">
                <div class="row">
                    <div class="col-9">
                        <h3 class="h4">${title}</h3>
                        <p class="h6">${details}
                            <span>${pirce}元/日</span>，${suggest}</p>
                        <p>
                            <a class="detail-link" href="title.html">立即抢购</a>
                        </p>
                    </div>
                    <div class="col-3 detail-img" data-pid='${pid}'>
                        <img class="detail-img-item" src="${img1}" alt="">
                        <img class="detail-img-item" src="${img2}" alt="">
                    </div>
                </div>
            </div>`
            }
            $(".detail-main").html(html);
        }
    })
    // 动态加载game
    function getGame(title='suanfa'){
        $.ajax({
            url: "http://localhost:8080/game",
            type: "get",
            data: `title=${title}`,
            dataType: "json",
            success: function(data){
                var html = ``;
                for(var {theme,subtop,statu,time,bonus} of data){
                    html+=`<tr>
                                <td>
                                    <h6>${theme}</h6>
                                    <p>${subtop}</p>
                                </td>
                                <td>${statu}</td>
                                <td>${time}</td>
                                <td>	CNY：${bonus}</td>
                                <td>
                                    <a href="#">立即报名</a>
                                </td>
                            </tr>`
                }
                var $tbody = $(`<tbody>${html}</tbody>`);
                $(".detail-five-table>thead").next().remove();
                $tbody.insertAfter($(".detail-five-table>thead"))
            }
        })
    }
    getGame();
    $(".detail-five-list").on("click","[data-title]",function(e){
        e.preventDefault();
        var title = $(this).attr("data-title");
        getGame(title);
    })
})
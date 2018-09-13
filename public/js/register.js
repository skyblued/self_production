// 输入框提示事件
$(function(){
    var success = false;
    var reg = /^\w{6,12}$/;
    $("form").on("focus","input[name]",function(){
        var $input = $(this);
        if(!reg.test($input.val())){
            if($input.attr("name")!= "upwdag")  $input.next().html(`请输入6-12位的字母或数字`).show().css("color","black");
            else    $input.next().html(`请再次输入密码`).show()
        }
    })
    $("form").on("blur","input[name]",function(){
        var $input = $(this);
        if($input.attr("name")!= "upwdag"){
            if(reg.test($input.val())){
                $("[name=upwdag]").attr("disabled",false)
                $input.next().html(`<img src='img/register/ok.png'>`).addClass("success");
                return success=true;
            }else{
                $("[name=upwdag]").attr("disabled",true)
                $input.next().html(`<img src='img/register/err.png'>  请输入6-12位的字母或数字`).show().css("color","red").removeClass("success");
            }
        }else{
            var upwd = $("[name=upwd]").val();
            if($input.val()=="")  $input.next().html(`请再次输入密码`).show()
            else if($input.val() == upwd)    $input.next().html(`<img src='img/register/ok.png'>`).addClass("success");
            else    $input.next().html(`两次密码不一致,请重新输入`).show().css("color","red");
        }
    })

    $("form").on("click",".agree",function(e){
        e.preventDefault();
        if(success){
            $(this).prop("disabled",false)
            $("form").submit();
        }else   $(this).prop("disabled",true)
    })

    //滑动验证 

    var span = document.querySelector(".slide span:first-child");
    var slide = document.querySelector(".slide");
    span.onclick = function(){
        span.style.left = `250px`;
        
        
    }
    var timer = setInterval(function(){
        if(parseInt(getComputedStyle(span).left)>245){
                // span.innerHTML = `✔`;
                slide.style.background = `#00c1de`;
                slide.style.color = `#fff`;
                slide.innerHTML = `完成验证`;
                slide.style.textAlign = "center";
                clearInterval(timer);
                timer =null;
            }
        },500)
})
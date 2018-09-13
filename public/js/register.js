// 输入框提示事件
// $(function(){
//     var success = false;
//     var reg = /^\w{6,12}$/;
//     $("form").on("focus","input[name]",function(){
//         var $input = $(this);
//         if(!reg.test($input.val())){
//             if($input.attr("name")!= "upwdag")  $input.next().html(`请输入6-12位的字母或数字`).show().css("color","black");
//             else    $input.next().html(`请再次输入密码`).show()
//         }
//     })
//     $("form").on("blur","input[name]",function(){
//         var $input = $(this);
//         if($input.attr("name")!= "upwdag"){
//             if(reg.test($input.val())){
//                 $("[name=upwdag]").attr("disabled",false)
//                 $input.next().html(`<img src='img/register/ok.png'>`).addClass("success");
//                 return success=true;
//             }else{
//                 $("[name=upwdag]").attr("disabled",true)
//                 $input.next().html(`<img src='img/register/err.png'>  请输入6-12位的字母或数字`).show().css("color","red").removeClass("success");
//             }
//         }else{
//             var upwd = $("[name=upwd]").val();
//             if($input.val()=="")  $input.next().html(`请再次输入密码`).show()
//             else if($input.val() == upwd)    $input.next().html(`<img src='img/register/ok.png'>`).addClass("success");
//             else    $input.next().html(`两次密码不一致,请重新输入`).show().css("color","red");
//         }
//     })

//     $("form").on("click",".agree",function(e){
//         e.preventDefault();
//         if(success){
//             $(this).prop("disabled",false)
//             $("form").submit();
//         }else   $(this).prop("disabled",true)
//     })

//////////////////////////////////////////////////////
// 验证及注册
$(function(e){
    e.preventDefault();
    var uname,upwd;
    // 获取焦点时
    $("form").on("focus","input[name]",function(){
        var $input = $(this);
        // 验证用户名框是否为空
        if($input.attr("name") == "uname"){
            if($input.val() == ""){
                $input.next().show().html(`请输入6-18位的字母或数字`);
            }else{
                $input.next().hide();
            }
        }else{//验证密码框是否为空
            if($input.val() == "")  $input.next().show().html(`请输入6-18位的字母或数字`);
            else    $input.next().hide();
        }
    })
    // 失去焦点时
    $("form").on("blur","input[name]",function(){
        var $input = $(this);
        // 验证用户名是否正确
        if($input.attr("name") == "uname"){
            if(/^\w{6,18}$/.test($input.val())){
                uname = $input.val();
                $input.next().show().html(`<img src='img/register/ok.png'>`).addClass("success");
            }else{
                $input.next().show().html(`<img src='img/register/err.png'>  格式不正确,请重新输入`);
            }
        }else{//验证密码是否正确
            if(/^\w{6,18}$/.test($input.val())){
                upwd = $input.val();
                $input.next().show().html(`<img src='img/register/ok.png'>`).addClass("success");
            }else{
                $input.next().show().html(`<img src='img/register/err.png'>  格式不正确,请重新输入`);
            }
        }
    })
    //确认密码
    $("form").on("blur","input.again",function(){
        var $again = $(this);
        if($again.val() != $("input[name=upwd]").val()){
            $again.next().show().html(`两次密码不一致,请重新输入`)
        }else{
            $again.next().show().html(`<img src='img/register/ok.png'>`).addClass("success");
        }
    })
    //点击提交uname 和 upwd 并发送ajax请求
    $("input.agree").click(function(){
        if(uname !== undefined && upwd !== undefined){
            console.log("可以请求")
            // $.ajax({
            //     url: "/user/register",
            //     type: "post",
            //     data: {
            //         "uname": uname,
            //         "upwd": upwd
            //     },
            //     success: function(res){
            //         console.log(res);
            //     }
            // })
        }
    })
});












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
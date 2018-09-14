
// 验证及注册
$(function(){
    var uname,upwd;
    // 获取焦点时
    $("form").on("focus","input[name]",function(){
        var $input = $(this);
        // 验证用户名框是否为空
        if($input.attr("name") == "uname"){
            if($input.val() == ""){
                $input.next().show().html(`请输入6-18位的字母或数字`);
            }else{
                $input.next().hide().removeClass("success");
            }
        }else{//验证密码框是否为空
            if($input.val() == "")  $input.next().show().html(`请输入6-18位的字母或数字`);
            else    $input.next().hide().removeClass("success");
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
                $input.next().show().html(`<img src='img/register/ok.png'>`).addClass("success");
            }else{
                $input.next().show().html(`<img src='img/register/err.png'>  格式不正确,请重新输入`);
            }
        }
    })
    //确认密码
    $("form").on("blur","input.again",function(){
        var $again = $(this);
        if($again.val() == "")  
            $again.next().show().html(`请再次输入密码`);
        else if($again.val() != $("input[name=upwd]").val()){
            $again.next().show().html(`两次密码不一致,请重新输入`).css("color","#ce0000");
        }else{
            upwd = $("input[name=upwd]").val();
            $again.next().show().html(`<img src='img/register/ok.png'>`).addClass("success");
        }
    })
    //验证手机号
    $(".num").blur(function(){
        console.log($(".num"))
        var phone = $(this);
        if(!(/^1[345789]\d{9}$/.test(phone.val()))){
            phone.next().html(`手机格式不正确`);
        }else{  phone.next().hide() }
    })
    //点击提交uname 和 upwd 并发送ajax请求
     var $submit = $("input.agree");
    $submit.mousedown(function(){
        $(this).css("background","#056471");
    })
    $submit.mouseup(function(){
        $(this).css("background","#00c1de");
    })
    $submit.click(function(){
        console.log(uname,upwd)
        if(uname !==undefined && upwd !==undefined){
            ajax({
                url: "http://localhost:8080/user/register",
                type: "post",
                data: `uname=${uname}&upwd=${upwd}`
            })
            .then(function(res){
                alert(res)
                location.href = `http://localhost:8080/login.html`;
            })
        }else{
            console.log("bu ok")
        }
    });
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

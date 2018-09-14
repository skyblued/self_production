//登录验证
$(function(){
    var uname,upwd;
    $("form").on("blur","input[name]",function(){
        var $input = $(this);
        var $msg = $("p.msg");
        if($input.attr("name")=="uname"){
            if($input.val()==""){
                $msg.html(`请输入账户名`).show();
            }else{
                $msg.hide();
                uname = $input.val();
            }
        }else{
            if($input.val()==""){
                $msg.html(`请输入密码`).show();
            }else{
                $msg.hide();
                upwd = $input.val();
            }
        }
        console.log(uname,upwd);
        if(uname !== undefined && upwd !== undefined){
            $(".login-btn").click(function(){
                    $.ajax({
                        url: "http://localhost:8080/user/login",
                        type: "post",
                        data: {"uname":uname,"upwd":upwd},
                        dataType: "json",
                        success: function(res){
                            if(res.ok){
                                alert(res.msg);
                                location.href = "http://localhost:8080/index.html?kw=login";
                            }else{
                                $msg.html(res.msg).show();
                            }
                        }
                    })
            })
        }
    });
});
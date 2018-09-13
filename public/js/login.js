//登录验证
$(function(){
    $("form").on("blur","input[name]",function(){
        var $input = $(this);
        var $msg = $("p.msg");
        if($input.attr("name")=="uname"){
            if($input.val()==""){
                $msg.html(`请输入账户名`).show();
            }else{
                $msg.hide();
                console.log(123);
            }
        }else{
            if($input.val()==""){
                $msg.html(`请输入密码`).show();
            }else{
                $msg.hide();
                console.log(456);
            }
        }
    });
});
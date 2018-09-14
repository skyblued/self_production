$(function(){
    var $btn1 = $("#btn1");
    var $btn2 = $("#btn2");
    var $input = $btn1.prev();
    var $price = $("#price");
    var n = parseInt($input.val());
    var num = parseInt($price.html().slice(2));
    $btn1.click(function(){
        if(n>0){
            n++;
            $input.val(n);
            $price.html(`￥ ${n*num}`);
        }
    })  
    $btn2.click(function(){
        if(n>1){
            n--;
            $input.val(n);
            $price.html(`￥ ${n*num}`);
        }
    })
})
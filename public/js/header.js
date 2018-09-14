
       



// hb 悬停事件
var hbbao = document.querySelector(".header-left-hb")
var headerHover = document.querySelector(".header-hover");
var hhLeft = document.querySelector(".header-hover-left");
var hhCenter = document.querySelector(".header-hover-center");
var hhRight = document.querySelector(".header-hover-right");
var body = document.body;
hbbao.onmouseover = function(){
    hhLeft.style.width = `300px`;
    if(getComputedStyle(hhLeft).width != 0){
        hbbao.style.background = `#00c1de`
    }
}
hhLeft.onmouseover = function(e){
    if(e.target.nodeName == "LI")
    hhCenter.style.width = `300px`;
}
body.onmouseout = function(e){
    if( (e.clientX>1100 || e.clientY<50) ){
        hhCenter.style.width = 0;
        hhLeft.style.width = 0;
        hhRight.style.width = 0;
        hbbao.style.background = `none`;
    } 
    if(e.clientX<600){
        hhRight.style.width = 0;
    }
}
hhCenter.onmouseover = function(e){
    if(e.target.nodeName == "LI" || e.target.nodeName == "SPAN")
    hhRight.style.width = `500px`;
}
hhCenter.onmouseout = function(){
    hhRight.style.width = 0;
}
hhRight.onmouseover = function(){
    hhRight.style.width = `500px`;
}

$(function(){
    var kw = location.search.split("=")[1];
    console.log(kw)
    if(kw == "login"){
        $("#login").hide();
        $("#register").html(`<img src="img/header/liu.png"> 刘胜强`)
                       .css("background",0);
    }
})
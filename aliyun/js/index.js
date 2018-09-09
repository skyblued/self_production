//轮播图
// 1.查找触发事件的元素
// 2.绑定事件
// 3.查找要修改的元素
// 5.修改
var btn = document.getElementsByClassName("btn")[0];
var n = 0;
     setInterval( function(){
        var banner = document.getElementsByClassName("banner-item")[0];
            n+=700;
        if(n>700*3){
            n = 0;
            banner.style.transition = `0s`;
        }else{
            banner.style.transition = `0.5s`;
        }
        banner.style.marginTop = `-${n}px`;
    },3000)
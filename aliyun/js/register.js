var span = document.querySelector(".slide span:first-child");
var slide = document.querySelector(".slide");
span.onclick = function(){
    span.style.left = `250px`;
    
    
}
var timer = setInterval(function(){
    if(parseInt(getComputedStyle(span).left)>245){
            span.innerHTML = `✔`;
            slide.style.background = `#00c1de`;
            clearInterval(timer);
            timer =null;
        }
    },500)

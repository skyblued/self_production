$(function(){
    $.ajax({
        url: "footer.html",
        type: "get",
        success: function(res){
            var footer = document.createElement("div");
            $(footer).html(res).replaceAll("#footer");
        }
    })
})
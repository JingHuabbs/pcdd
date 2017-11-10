$(function(){
    var box= $(".Car-fi");
    var ul= $(".Car-fi-c");
    var lis=ul.children();
    console.log(texts);
    var flag=true;
    window.clearTimeout(timer);
    var timer=setInterval(toPlay,3000);
    function toPlay(){
        lis=ul.children();
        ul.animate({
            left:-1380
        },800,function(){
            $(this).append(lis.first());
            $(this).css('left',0);
            $(".toRight").flag = true;
        })
    }
    box.hover(function(){
        clearInterval(timer)
    },function(){
        timer = setInterval(toPlay,3000)
    });
    $(".toLeft").click(function(){
        toPlay();
    });
    $(".toRight").click(function(){
        lis=ul.children();
        ul.prepend(lis.last());
        ul.css("left",-1380);
        ul.animate({
            left:0
        },800,function(){
            $(this).css("left",0);
        })
    });
});

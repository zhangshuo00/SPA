var timerBtn = (function(){
    var btn = $('input'),
        num = 6,
        timer;
    function show(){
        //渲染DOM

        //绑定事件
    }

    timer = setInterval(() => {
        num--;
        if(num === 0){
            clearInterval(timer)
            btn.val('同意')
            btn.removeAttr('disabled')
        }else{
            btn.val('同意（'+num+'s）')
        }
    }, 1000);

    btn.click(function(){
        alert('就知道你会同意的！')
    })

    return {
        show:show
    }
}())
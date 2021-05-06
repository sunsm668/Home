(function(){
    //得到元素
    var banner_list=document.getElementById('banner_list');
    var banner_lis=document.getElementsByTagName('li');
    var dots=document.getElementById('dots');
    var dots_li=dots.querySelectorAll('li');
    //克隆
    var clone_li=banner_list.firstElementChild.cloneNode(true);
    //上树
    banner_list.appendChild(clone_li);
    var idx=0;
    var timer = null;
    function move(){
        timer = setInterval(function(){
            banner_list.style.transition='transform 2s ease 0s';
            idx++;
            //拉动图片
            banner_list.style.transform='translateX('+ -25*idx+'%)';
            dot(idx);
            if(idx >= 3){
                // 播放到克隆图片,去掉过渡，瞬间拉回第一张图片
                setTimeout(function(){
                    banner_list.style.transition='none';
                    banner_list.style.transform='translateX('+ -25*0+'%)';
                    idx=0;
                },1900);
                
            }
        }, 2000);      
    }
    move();
    //鼠标进入轮播图停止
    banner_list.onmouseenter=function(){
        clearInterval(timer);
    }
    //鼠标离开轮播图继续运动
    banner_list.onmouseleave=function(){
        clearInterval(timer);
        move();
    }
    //设置小圆点
    function dot(idx){
        for(var i=0;i<3 ;i++){
            if(i==idx%3){
                dots_li[i].className='cur';
            }else{
                dots_li[i].className='';     
            }
        }

    }
    //小圆点事件委托
    dots.onclick=function(e){
        if(e.target.tagName.toLowerCase()=='li'){
            var n=Number(e.target.getAttribute("data-n"));
            idx=n;
            banner_list.style.transform='translateX('+ -25*idx+'%)';
            dot(idx);
        }
    }
})()
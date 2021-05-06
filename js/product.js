(function(){
    //获取元素
    var productList=document.getElementById('product-list');
    var right_btn=document.getElementById('right_btn');
    var left_btn=document.getElementById('left_btn');
    //函数节流锁
    var lock=true;
    var idx=5;
    right_btn.onclick=function(){
        //检查锁
        if(!lock)return;
        //关锁
        lock=false;
         productList.style.transition="left 1s ease 0s";
        idx++;
        //拉动图片
         productList.style.left=-221*idx+'px';
        if(idx >= 15){
            idx=5;
            setTimeout(function(){
                 productList.style.transition="none";
                 productList.style.left=-221*idx+'px';
            },1000);
        }
        //动画结束开锁
        setTimeout(function(){
            lock=true;
        },1000);
    }
    left_btn.onclick=function(){
        //检查锁
        if(!lock)return;
        //关锁
        lock=false;   
         productList.style.transition="left 1s ease 0s";
        idx--; 
         productList.style.left=-221*idx+'px';
        if(idx <= 0){
            idx=10;
            setTimeout(function(){
                 productList.style.transition="none";
                 productList.style.left=-221*idx+'px';
            },1000);
        }
        //动画结束开锁
        setTimeout(function(){
            lock=true;
        },1000);        
    }
})()
(function(){
    //获取元素
    var recommend_list=document.getElementById('recommend_list');
    var right_btn=document.getElementById('about_right_btn');
    var left_btn=document.getElementById('about_left_btn');
 
    //函数节流锁
    var lock=true;
    var idx=3;
    right_btn.onclick=function(){
        //检查锁
        if(!lock)return;
        //关锁
        lock=false;
        recommend_list.style.transition="left 1s ease 0s";
        idx++;
        //拉动图片
        recommend_list.style.left=-368*idx+'px';
        if(idx >= 9){
            idx=3;
            setTimeout(function(){
                recommend_list.style.transition="none";
                recommend_list.style.left=-368*idx+'px';

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
        recommend_list.style.transition="left 1s ease 0s";
        idx--;
        recommend_list.style.left=-368*idx+'px';
        if(idx <= 0){
            idx=6;
            setTimeout(function(){
                recommend_list.style.transition="none";
                recommend_list.style.left=-368*idx+'px';
            },1000);
        }
        //动画结束开锁
        setTimeout(function(){
            lock=true;
        },1000);        
    }
})()
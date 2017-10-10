// 把雪花下落封装成一个方法
function flake() {
    var f =document.createElement("img");
    // 赋值图片
    f.src ="flake.png";
    // 设置标签的宽高
    var h =document.documentElement.clientHeight;
    var w =document.documentElement.clientWidth;
    // 起始位置 (Math.radom() 0.0~1.0)*h
    var top =h*Math.random();
    var left =w*Math.random();
    // 把设置好的top和left赋值给f
    f.style.position ="absolute";
    f.style.top =top +"px";
    f.style.left =left +"px";
    // 每个雪花大小不同
    f.style.transform ="scale("+Math.random()/3+")";
    document.body.appendChild(f);

    // 雪花下落
    function down(){
        // 每一次下落让top和left都随机加上一定的数值
        top +=Math.random()*10;
        left +=Math.random()*5;
        // 判断出界 只要出界 把值重置为-100
        if(top>h)top=-100;
        if(left>w)left=-100;
        f.style.top =top +"px";
        f.style.left =left +"px";
    }
    // 时间间隔
    setInterval(down,50);
}




// 一次创建50个雪花
for(var i=0;i<80;i++){
    new flake();
}
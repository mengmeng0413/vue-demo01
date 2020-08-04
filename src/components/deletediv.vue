<template>
  <div>
    <div @mousedown="divMousedown(1)" @mousemove="divMousemove(1)" @mouseup="divMouseUp(1)" id="div1">1</div>
    <div @mousedown="divMousedown(2)" @mousemove="divMousemove(2)" @mouseup="divMouseUp(2)" id="div2">2</div>
    <div @mousedown="divMousedown(3)" @mousemove="divMousemove(3)" @mouseup="divMouseUp(3)" id="div3">3</div>
    <div @mousedown="divMousedown(4)" @mousemove="divMousemove(4)" @mouseup="divMouseUp(4)" id="div4">4</div>
    <div id="div5">回收站</div>
  </div>
</template>

<script>
// var aDiv=document.getElementsByTagName("div");
// var orleft;
// var ortop;
// var ordis;
// for(var i=0;i<4;i++){
// 	drag(aDiv[i]);
// }
function drag(obj){
	obj.οnmοusedοwn=function(ev){
		obj.style.zIndex=3;
		ev=ev||event;
		that=this;
		orleft=getStyle(this,"left");
		ortop=getStyle(this,"top");
		console.log(orleft);
		console.log(ortop);
		var disX=ev.clientX-this.offsetLeft;
		var disY=ev.clientY-this.offsetTop;
		document.οnmοusemοve=function(ev){
			ev=ev||event;
			var newleft=ev.clientX-disX;
			var newtop=ev.clientY-disY;
			if(newleft<0){newleft=0;}
			if(newtop<0){newtop=0;}
			if((newleft+obj.offsetWidth)>document.documentElement.clientWidth){newleft=document.documentElement.clientWidth-obj.offsetWidth;}
			if((newtop+obj.offsetHeight)>document.documentElement.clientHeight){newtop=document.documentElement.clientHeight-obj.offsetHeight;}
			
			obj.style.left=newleft+"px";
			obj.style.top=newtop+"px";
			ordis=getStyle(that,"diaplay");
		}
	}
	
	document.οnmοuseup=function(){			
		document.οnmοusemοve=null;	
		if(that.offsetLeft>aDiv[4].offsetLeft&&
			that.offsetLeft<aDiv[4].offsetLeft+aDiv[4].offsetWidth-obj.offsetWidth&&
			that.offsetTop>aDiv[4].offsetTop&&
			that.offsetTop<aDiv[4].offsetTop+aDiv[4].offsetHeight-obj.offsetHeight){
				that.style.display="none";
		}
			
		if(ordis="block"){
			that.style.left=orleft;
			that.style.top=ortop;
		}
	}
	
}


function getStyle( obj, attr ){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}
       
export default {
    methods:{
        divMousedown(i){
            var aDiv=document.getElementsByTagName("div");
            var orleft;
            var ortop;
            var ordis;
            drag(aDiv[i]);
        },
        divMouseUp(i){
        },
        divMousemove(i){
        }
    }
}
</script>

<style scoped>
body{position:relative;}
div{width:150px;height:100px;position:absolute;color:#fff;line-height:100px;text-align:center;display:block;}
#div1{background-color:#09f;left:10px;top:20px;z-index:2;}
#div2{background-color:#f00;left:200px;top:20px;z-index:2;}
#div3{background-color:#0f0;left:10px;top:140px;z-index:2;}
#div4{background-color:#ff0;left:200px;top:140px;z-index:2;}
#div5{background-color:#ccc;left:380px;top:20px;width:500px;height:220px;color:#fff;line-height:220px;text-align:center;font-size:32px;}
</style>
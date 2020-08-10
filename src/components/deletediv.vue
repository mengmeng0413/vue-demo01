<template>
  <div>
    <div
      @mousedown="divMousedown($event, 1)"
      @mousemove="divMousemove($event, 1)"
      id="div1"
      ref="div1"
    >1</div>
    <div
      @mousedown="divMousedown($event, 2)"
      @mousemove="divMousemove($event, 2)"
      id="div2"
      ref="div2"
    >2</div>
    <div
      @mousedown="divMousedown($event, 3)"
      @mousemove="divMousemove($event, 3)"
      id="div3"
      ref="div3"
    >3</div>
    <div
      @mousedown="divMousedown($event, 4)"
      @mousemove="divMousemove($event, 4)"
      id="div4"
      ref="div4"
    >4</div>
    <div id="div5" ref="div5">回收站</div>
  </div>
</template>

<script>
export default {
	data(){
		return{
      orleft: 0,
      ortop: 0,
      ordis: 0,
      disX: 0,
      disY: 0,
      newleft: 0,
      newtop: 0,
      obj: null
		}
  },
  mounted(){
    document.addEventListener('mouseup', this.divMouseUp, true)
  },
  methods: {
    divMousedown(ev, i) {
      this.obj = this.$refs['div'+i];
      this.obj.style.zIndex = 3;
      this.orleft = this.getStyle("left");
      this.ortop = this.getStyle("top");
      this.disX = ev.clientX - this.obj.offsetLeft;
      this.disY = ev.clientY - this.obj.offsetTop;
    },
    divMousemove(ev, i) {
        if(this.obj){
          this.newleft = ev.clientX-this.disX < 0 ? 0 : ev.clientX-this.disX;
          this.newtop = ev.clientY-this.disY < 0 ? 0 : ev.clientY-this.disY;
          if((this.newleft+this.obj.offsetWidth)>document.documentElement.clientWidth){
            this.newleft = document.documentElement.clientWidth-this.obj.offsetWidth;
          }
          if((this.newtop+this.obj.offsetHeight)>document.documentElement.clientHeight){
            this.newtop = document.documentElement.clientHeight-this.obj.offsetHeight;
          }
          this.obj.style.left = this.newleft + "px";
          this.obj.style.top = this.newtop + "px";
          this.ordis = this.getStyle(this.obj, "display")
        }
    },
    divMouseUp() {
      if(this.obj){
        this.obj.onmousemove = null;
        if(this.obj.offsetLeft>this.$refs.div5.offsetLeft&&
          this.obj.offsetLeft<this.$refs.div5.offsetLeft+this.$refs.div5.offsetWidth-this.obj.offsetWidth&&
          this.obj.offsetTop>this.$refs.div5.offsetTop&&
          this.obj.offsetTop<this.$refs.div5.offsetTop+this.$refs.div5.offsetHeight-this.obj.offsetHeight){
            this.obj.style.display = 'none';
        }
        if(this.ordis="block"){
          this.obj.style.left = this.orleft;
          this.obj.style.top = this.ortop;
          this.obj = null;
        }
      }
    },
    getStyle(attr){
      return this.obj.currentStyle ? this.obj.currentStyle[attr]:getComputedStyle(this.obj)[attr];
    }
  },
};
</script>

<style scoped>
body {
  position: relative;
}
div {
  width: 150px;
  height: 100px;
  position: absolute;
  color: #fff;
  line-height: 100px;
  text-align: center;
  display: block;
  border-radius: 10%;
}
#div1 {
  background-color: lightcoral;
  left: 10px;
  top: 20px;
  z-index: 2;
}
#div2 {
  background-color: #a6eb96;
  left: 200px;
  top: 20px;
  z-index: 2;
}
#div3 {
  background-color: lightpink;
  left: 10px;
  top: 140px;
  z-index: 2;
}
#div4 {
  background-color: #a99ce4;
  left: 200px;
  top: 140px;
  z-index: 2;
}
#div5 {
  background-color: #ccc;
  left: 380px;
  top: 20px;
  width: 500px;
  height: 220px;
  color: #fff;
  line-height: 220px;
  text-align: center;
  font-size: 32px;
}
</style>
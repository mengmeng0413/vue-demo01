<template>
    <div>
      <div class="box">lamp</div>
      <div class="drag" ref="drag">
        <div class="drag-one" ref="leftdiv"></div>
        <div class="line" ref="line" @mousedown="onmouseDown()" @mouseup="onmouseUp()"></div>
        <div class="drag-two"</div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        drag: true,
        width: 0,
        endPos: 0
      }
    },
    mounted(){
      // document.documentElement.addEventListener('mousemove', this.mouse_move, true);
      // document.documentElement.addEventListener('mouseup', this.mouse_up, true);
    },
    methods:{
      onmouseDown(){
        this.drag = true
        this.width = this.$refs.leftdiv.clientWidth
        document.addEventListener('mousemove',getWidth,true)
        let that = this
        function getWidth(event){
          if(that.drag){
            let leftdiv=that.$refs.leftdiv
            let tempWidth = that.endPos + event.clientX - 5
            that.$refs.leftdiv.style.width = tempWidth +'px'
          }
        }
      },
      onmouseUp(){
          this.drag = false
          // this.endPos = event.clientX
      }
    }
  }
</script>

<style lang="less" scoped>
.box{
  width:200px;
  height:200px;
  color:mintcream;
  text-align:center;
  line-height:200px;
  background-color:lightsalmon;
  border:1px #bbb solid;
  margin:80px 150px;
  //transform:translate(50px,100px); 
  //距当前位置的水平方向和垂直方向的偏移值

  //transform:rotate(30deg);
  //给定一个度数顺时针旋转，负值是逆时针旋转

  //transform:scale(2,3);
  //使元素增加或减小大小，宽度增加2倍，长度增加3倍

  //transform:skew(20deg,20deg);
  //在X轴和Y轴上分别倾斜20度和30度

  //transform:matrix(0.866,0.5,-0.5,0.866,0,0);
  //六个参数包含旋转，缩放，移动(平移)和倾斜功能

  // transform:rotateX(120deg);  
   //给定一个度数围绕X轴旋转

  //transform:rotateY(120deg);
  //给定一个度数围绕Y轴旋转

  //transition:width 2s,height 2s,transform 2s,line-height 2s;

  transition:width 1s linear 0.5s;
  //transition-property,transiton-duration,transition-timing-function,transition-delay
  //延迟0.5s。transition-timing-function有linear、ease、ease-in、ease-out、ease-in-out等值
  &:hover{
    width:250px;
    // height:220px;
    // line-height:220px;
    // transform:rotateX(180deg);  
  }
}
.drag{
  width:501px;
  height:300px;
  margin: 5px;
  border:1px #000 solid;
  background-color: green;
  overflow:hidden;
  .drag-one{
    float:left;
    width:100px;
    height:100%;
    background-color: pink
  }
  .line{
    width:10px;
    height:100%;
    float:left;
    background-color:white;
  }
}
</style>

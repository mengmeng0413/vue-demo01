<template>
    <div>
      <div>
        <el-input @blur="changecolor" v-model="text" v-if="!isShow" @focus="getFocus" ref="oriInput"></el-input>
        <div class="substr" v-html="str" @click="showInput" v-else></div>
        <div class="substr">
          123<span class="bg-color">234</span>
        </div>
      </div>
      <div class="car">
        <div class="animation">封闭货车</div>
        <div class="wheel-1">米</div>
        <div class="wheel-2">米</div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
        return {
          text:'',
          str:'',
          isShow:false
        }
    },
    components: {

    },
    methods:{
      changecolor(){
        let arrindex=[1,2,4,6]
        let result=""
        let inner = this.text.split('')
        inner.forEach((i,index)=>{
          for(let k=0;k<arrindex.length;k++){   //通过索引值确定某几项
            if(index===arrindex[k]){
              this.isShow=true
              inner.splice(index,1,"<span data-v-b4c21332 class='bg-color'>"+inner[index]+"</span>")
              result=inner.join('')
              this.str=result
            }
          }
        })
      },
      getFocus(){
        this.isShow=false
      },
      showInput() {
        this.isShow = false;
        this.$nextTick(() => {
          this.$refs["oriInput"].focus();
        });
      },
    }
  }
</script>

<style lang="less" scoped>
.el-input{
  margin:5px 5px 0 5px;
  width:400px;
}
.substr{
  border:1px solid #d8dce5;
  border-radius:4px;
  font-size: 13.5px;
  color: #5a5e66;
  width:368px;
  line-height: 37px;
  padding: 0 15px;
  cursor: text;
  margin:5px;
}
span.bg-color{
  background-color: red;
  color:#ff0
}
.car{
  width:200px;
  height:125px;
  margin:10px;
  position:relative;
  .animation{
    width:200px;
    height:100px;
    border-radius:5% 50% 5% 5%;
    font-size:30px;
    line-height:100px;
    text-align: center;
    color:#fff;
    background:lime;
    position: relative;
    animation:mymove 20s infinite;
  }

  .wheel-1,.wheel-2{
    line-height:25px;
    text-align: center;
    color:#fff;
    font-size:22px;
  }

  .wheel-1{
    width:25px;
    height:25px;
    background:#999;
    position: absolute;
    bottom:0;
    border-radius:50%;
    animation:wheel1move 20s infinite;
  }

  .wheel-2{
    width:25px;
    height:25px;
    position: absolute;
    background:#999;
    bottom:0;
    border-radius:50%;
    animation:wheel2move 20s infinite;
  }

}

@keyframes mymove
{
	from {
    left:0px;
  }
	to {
    left:700px;
    // transform:rotate(180deg);
  }
}

@keyframes wheel1move
{
	from {
    left:20px;
  }
	to {
    left:720px;
    transform:rotate(720deg);
  }
}

@keyframes wheel2move
{
	from {
    left:150px;
  }
	to {
    left:850px;
    transform:rotate(720deg);
  }
}
</style>

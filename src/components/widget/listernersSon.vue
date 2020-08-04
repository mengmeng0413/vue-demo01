<template>
  <div>
    <div style="margin:10px;border:1px blue solid;padding:10px;"
        @click="$listeners.todo">
      需要测试一下$attrs{{$attrs}}
    </div>
    <el-button type="primary" @click="threeDot">扩展运算符</el-button>
  </div>
    
</template>

<script>
  export default {
    data () {
        return {
          arr:[1,3,true,'扩展',2.8]
        }
    },
    inheritAttrs: false,
    components: {

    },
    methods:{
      threeDot(){
        let dot= {...this.arr}
        console.log(dot,typeof(dot))
      }
    }
  }
</script>

<style>

 
</style>

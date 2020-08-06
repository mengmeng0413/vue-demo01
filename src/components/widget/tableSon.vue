<template>
    <div class="son">
      <p>
        父组件通过v-model与子组件通信，子组件用prop接收：
      </p>
      <el-select v-model="my_select">
        <el-option v-for="item in options" :label="item.value" :value="item.key" :key="item.key"></el-option>
      </el-select>
    </div>
</template>

<script>
  export default {
    props:['value'],
    data () {
        return {
          options:[{
            key:1,
            value:'value1'
          },{
            key:2,
            value:'value2'
          },{
            key:3,
            value:'value3'
          },{
            key:4,
            value:'value4'
          }]
        }
    },
    components: {

    },
    computed: {
      my_select:{
        get(){
          return this.value
        },
        set(val){
          this.$emit('input', val)
        }
      }
    }
  }
</script>

<style>
.son{
  border:1px rgb(236, 124, 236) solid;
  width:500px;
  padding:10px;
  margin:10px auto;
}
</style>

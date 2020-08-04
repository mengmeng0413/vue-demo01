<template>
    <div style="margin:10px;">
      <input
      type="checkbox"
      v-bind:checked= "checked"
      v-on:change="$emit('change', $event.target.checked)"
      >
      <span @click= "parentEvent">我是儿子，父亲给了我{{checked}}</span>
      <div class="border">
        <div>模板语法1：{{one|test1}}</div>
        <div>模板语法2：{{one|test1}}</div>
        <div>模板语法3：{{one|test1}}</div>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      checked: Boolean
    },
    model: {
      prop: 'checked',
      event: 'change'
    },
    data () {
      return {
         test_data:'测试一下',
         one:'1',
      }
    },
    filters:{
      test1(value){
        return value==1?'模板语法1--测试成功':'模板语法1--测试失败'
      },
      test2(value){
        return value==1?'模板语法2--测试成功':'模板语法2--测试失败'
      },
      test3(value){
        return value==1?'模板语法3--测试成功':'模板语法3--测试失败'
      }
    },
    components: {

    },
    methods:{
      parentEvent(){
        this.$emit('parentEvent',this.test_data)
      }
    }
  }
</script>

<style>
.border{
  padding:10px;
  border:1px #000 dashed;
}
 
</style>

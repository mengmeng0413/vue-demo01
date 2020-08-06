<template>
    <div class="box">
      <div>壹</div>
      <div>贰</div>
      <div>弎</div>
      <div>泗</div>
      <div>伍</div>
      <div>陆</div>
      <div>柒</div>
      <div>捌</div>
    </div>
</template>

<script>
  export default {
    data () {
        return {

        }
    }
  }
</script>

<style lang="less" scoped>
.box{
  display:flex;
  padding:15px;
  flex-wrap: wrap;
  justify-content: space-between;
  width:612px;
  height:612px;
  margin:0 auto;
  div{
    width:200px;
    height:200px;
    margin:1px;
    border:1px #aaa solid;
    line-height:200px;
    text-align: center;
    &:last-child {
      margin-right: auto;
    }
  }
}
</style>

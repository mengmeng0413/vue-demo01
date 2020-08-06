<template>
    <div>
      <div class="shade">
        <p class="title">111</p>
        <p class="content">
          111-content
        </p>
      </div>
      <div class="shade">
        <p class="title">222</p>
        <p class="content">
          222-content
        </p>
      </div>
      <div class="shade">
        <p class="title">333</p>
        <p class="content">
          333-content
        </p>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
        return {

        }
    },
    components: {

    }
  }
</script>

<style lang="less" scoped>
.shade{
  display:inline-block;
  margin:10px;
  width:200px;
  height:200px;
  box-shadow:5px 5px 5px #909090;
  .title{
    height:20px;
    padding:5px;
    margin:0;
    border-bottom:1px #000 solid;
  }
  .content{
    box-sizing: border-box;
    margin:0;
    padding:5px;
    height:170px;
  }
}
 
</style>

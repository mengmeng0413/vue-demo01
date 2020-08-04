<template>
  <div class="container">
      <div class="putao">葡萄</div>
      <div class="longxia">龙虾</div>
      <div class="yangyu">养鱼</div>
      <div class="xigua">西瓜</div>
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
.container {
    display:grid;
    padding:20px;
    // grid-template-columns: 2fr 1fr;
    // grid-template-rows: 1fr 2fr;
    // grid-column-gap: 10px;
    // grid-row-gap: 15px;

    // grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 1fr 1fr 1fr 1fr;
    // grid-template-areas: 
    //     "葡萄 葡萄 葡萄"
    //     "龙虾 养鱼 养鱼"
    //     "龙虾 养鱼 养鱼"
    //     "西瓜 西瓜 西瓜";

     grid-template: 
        "葡萄 葡萄 葡萄" 
        "龙虾 养鱼 养鱼"
        "龙虾 养鱼 养鱼" 
        "西瓜 西瓜 西瓜"
        /1fr 1fr 1fr;

    width:250px;
    height:250px;
    margin:0 auto;
    div{
      border:1px #000 solid;
      margin:1px;
    }
    .putao { grid-area: 葡萄; }
    .longxia { grid-area: 龙虾; }
    .yangyu { grid-area: 养鱼; }
    .xigua { grid-area: 西瓜; }
}
</style>

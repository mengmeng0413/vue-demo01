<template>
    <div class="wrapper">
      <div v-masonry transition-duration="0.3s" item-selector=".item">
          <div v-masonry-tile class="item" v-for="(item, index) in blocks" :key="index">
            <img class="img" :src="item" width="300px;" height="400px" />
          </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
        return {
          blocks: ['../../static/img/pic1.jpeg', '../../static/img/pic2.jpg', '../../static/img/pic3.jpg', '../../static/img/pic4.jpeg', '../../static/img/pic5.jpg', '../../static/img/pic6.jpg','../../static/img/pic7.jpg']
        }
    },
    components: {

    }
  }
</script>

<style>
 .wrapper{
   width: 70%;
   margin: auto;
 }
</style>

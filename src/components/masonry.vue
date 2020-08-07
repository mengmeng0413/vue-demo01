<template>
    <div>
      <div v-masonry transition-duration="0.3s" item-selector=".item"> -->
          <div v-masonry-tile class="item" v-for="(item, index) in blocks" :key="index">
            <img class="img" :src="item" width="400px;" height="500px" />
          </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
        return {
          blocks: ['../../static/img/pic7.jpg']
        }
    },
    components: {

    }
  }
</script>

<style>
 
</style>

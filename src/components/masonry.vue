<template>
    <div>
      <div v-masonry transition-duration="0.3s" item-selector=".item">
          <div v-masonry-tile class="item" v-for="(item, index) in blocks">
            <img src="../assets/777.jpg"/>
          </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
        return {
          containerId: '111',
          blocks: ['../assets/777.jpg']
        }
    },
    components: {

    }
  }
</script>

<style>

 
</style>

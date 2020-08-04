<template>
    <div>
      <el-button @click="tryVuex">count1++</el-button>
      <h3>count-1: {{this.$store.state.count}}</h3>
      <h2>count-2: {{count2}}</h2>
      <span>id为1: {{doneTodos}}</span>
    </div>
</template>

<script>
  import { mapState,mapGetters } from 'vuex'
  import store from '../store'
  export default {
    data () {
        return {

        }
    },
    computed: {
      // count() {
      //   return this.$store.state.count
      // },
      ...mapState(['count','count2','count3']),
      ...mapGetters(['doneTodos'])
    },
    methods: {
      tryVuex(){
        let v = 10
        // this.$store.commit('countIncrease', v)
        store.commit('countIncrease', v)
      }
    }
  }
</script>

<style>

 
</style>

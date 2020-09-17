<template>
  <label id="base-label">
      {{label}}
      <input v-bind:value="value" v-bind="$attrs" v-on="inputListeners"/>
  </label>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: ['label','value'],
    computed: {
      inputListeners () {
          var vm = this
          return Object.assign({},
              this.$listeners,
              {
                  input: function () {
                      vm.$emit('input', event.target.value)
                  },
                  focus: function (event) {
                      vm.$emit('focus', '哈哈哈，onfocus了')
                  }
              }
          )
      }
    },
    // created(){
    //   console.log('让我看看这个listeners长什么样呀',this.$listeners) //input事件和focus事件
    // },
    mounted(){
      console.log('slideshow的子组件')
    },
    data () {
        return {

        }
    },
    components: {
    },
  }
</script>

<style>

 
</style>

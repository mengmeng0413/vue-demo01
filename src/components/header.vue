<template>
  <div class="header">
    {{title}}
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
	  data () {
		  return {
		  }
	  },
	  components: {
		},
		props:{
			title:''
		},
		mounted(){
			this.$emit('getMsg',"由header传递给父组件")
		}
}
</script>

<style>
.header{
  background:lightblue;
  text-align: center;
}
</style>

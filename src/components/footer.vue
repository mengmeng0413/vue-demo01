<template>
  <div class="footer">
		<div>{{message}}</div>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  data () {
    return {
			message:""
    }
	},
  components: {
	},
	methods:{
		getMessage(m){
			this.message=m;
		}
	}
}
</script>

<style>
.footer{
  background:lightblue;
  text-align: center;
}
</style>

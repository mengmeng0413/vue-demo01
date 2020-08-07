<template>
    <div class="my-editor">
      <vue-ueditor-wrap @ready="ready"></vue-ueditor-wrap>
    </div>
</template>

<script>
  import VueUeditorWrap from 'vue-ueditor-wrap'
  export default {
    data () {
        return {
          
        }
    },
    components: {
      VueUeditorWrap
    },
    methods: {
      ready(editorInstance){
        console.log(`编辑器实例${editorInstance.key}: `, editorInstance)
      }
    }
  }
</script>

<style lang="less">
.my-editor{
  width: 90%;
}
</style>

<template>
    <div>
      <el-button type="success" @click="allListeners">查看listeners</el-button>
      <div @click="$listeners.todoo">B(点击我查看console)</div>
      <listerner-son v-bind="$attrs" v-on="$listeners" ></listerner-son>
      <!-- <div class="upload">
        <el-upload
          class="avatar-uploader"
          action=""
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div> -->
    </div>
</template>

<script>
  import listernerSon from './listernersSon'
  export default {
    // props:['somethingtoson'],
    inheritAttrs: false,
    data () {
      return {
        imageUrl: ''
      }
    },
    components: {
      listernerSon
    },
    methods:{
      allListeners(){
        console.log('listrners在这里！',this.$listeners) // 包含父级所有绑定的方法
      },
      handleAvatarSuccess(res, file) {
        console.log('成功',URL.createObjectURL(file.raw))
      },
      handleChange(file){
        console.log('改变',file)
      }
    }
  }
</script>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

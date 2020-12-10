<template>
  <el-container>
    <el-header>
      <!-- <h-header title="给你header(通过props由父组件传递过来的)" @getMsg="showMsg"></h-header> -->
    </el-header>
    <el-container>
      <el-aside width="120px">
        <div class="h">
          <router-link to="/">firstPage</router-link>
        </div>
        <div class="h">
          <router-link to="/slideshow">slideshow</router-link>
        </div>
        <div class="h">
          <router-link to="/scroll">页面滚动</router-link>
        </div>
        <div class="h">
          <router-link to="/cascader">级联选择器</router-link>
        </div>
        <div class="h">
          <router-link to="/table">表格</router-link>
        </div>
        <div class="h">
          <router-link to="/iterator">balabala</router-link>
        </div>
        <div class="h">
          <router-link to="/tagtext">文字标红</router-link>
        </div>
        <div class="h">
          <router-link to="/shadow">阴影效果</router-link>
        </div>
        <div class="h">
          <router-link to="/cssthree">css3</router-link>
        </div>
        <div class="h">
          <router-link to="/async">async</router-link>
        </div>
        <div class="h">
          <router-link to="/flex">flex</router-link>
        </div>
        <div class="h">
          <router-link to="/grid">grid</router-link>
        </div>
        <div class="h">
          <router-link to="/totop">置顶</router-link>
        </div>
        <div class="h">
          <router-link to="/battery">充电</router-link>
        </div>
        <div class="h">
          <router-link to="/tree">树状图</router-link>
        </div>
        <div class="h">
          <router-link to="/g6">g6</router-link>
        </div>
        <div class="h">
          <router-link to="/mytestg6">my-test-g6</router-link>
        </div>
        <div class="h">
          <router-link to="/tryg6">tryg6 1.2.8版本</router-link>
        </div>
        <div class="h">
          <router-link to="/tryvuex">tryvuex</router-link>
        </div>
        <div class="h">
          <router-link to="/vfd">vfd</router-link>
        </div>
        <div class="h">
          <router-link to="/ueditor">ueditor</router-link>
        </div>
        <div class="h">
          <router-link to="/masonry">masonry</router-link>
        </div>
        <div class="h">
          <router-link to="/deletediv">deletediv</router-link>
        </div>
      </el-aside>
      <el-main>
        <keep-alive>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </keep-alive>
      </el-main>
    </el-container>
    <el-footer>
      <!-- <h-footer ref="msg"></h-footer> -->
    </el-footer>
  </el-container>
</template>

<script>
/* eslint-disable */

import header from "../src/components/header";
import footer from "../src/components/footer";
export default {
  data() {
    return {
      littletitle: "",
    };
  },
  components: {
    "h-header": header,
    "h-footer": footer,
  },
  methods: {
    showMsg(m) {
      this.littletitle = m;
    },
    timeout(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, "done");
      });
    },
  },
  mounted() {
    // this.$refs.msg.getMessage("我是footer吖！（通过ref由父组件传递过来的)"); //通过ref获取子组件的方法，并向子组件传递信息
  },
};
</script>

<style>
.h {
  margin: 5px 1px;
  padding: 3px;
  background-color: lightpink;
  border: 1px #999 solid;
  border-radius: 2px;
  font-size: 15px;
  text-align: center;
}
a {
  text-decoration: none;
  color: slategrey;
}
.el-aside {
  position: fixed;
  top: 100px;
  left: 10px;
}
.el-main {
  margin-left: 120px;
}
.el-header .el-footer{
	height: 30px;
}
</style>

<template>
  <div>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in pics" :key="item">
        <img :src="item" width="410px" height="700px" />
      </el-carousel-item>
    </el-carousel>

    <test v-model="testModel" @parentEvent="parentEvent"></test>
    <!-- <p>我是父亲，儿子给了我<span style="color:red;">{{test_data}}</span>(点击上面的话~)</p> -->

    <div style="margin:10px;border:1px #000 solid;padding:10px;">
      linsteners:
      <br />
      A{{msg}}
      <listeners
        v-on:dblclick.native="onDblclick"
        :msg="msg"
        :somethingtoson="something_to_son"
        @todo="handleClick"
        @todoo="handleClick1"
      ></listeners>
    </div>

    <div style="margin:10px;border:1px #000 solid;padding:10px;">
      linsteners与native:
      <br />
      <base-input
        v-model="username"
        label="基础输入组件"
        @click.native="handleBaseInputClick"
        v-on:focus="handleBaseInputFocus"
        v-on:input="handleBaseInput"
        placeholder="请输入宁的名字"
        class="username-input"
      />
      <span>{{inputvalue}}</span>
    </div>
    <div class="cropper">
      &nbsp;&nbsp;&nbsp;图片裁剪：
      <cropper></cropper>
    </div>
  </div>
</template>

<script>
import test from "./widget/test";
import listeners from "./widget/listeners";
import baseInput from "./widget/baseInput";
import cropper from "./widget/cropper";
export default {
  data() {
    return {
      pics: [
        "../../static/img/pic1.jpeg",
        "../../static/img/pic3.jpg",
        "../../static/img/pic4.jpeg",
        "../../static/img/pic6.jpg",
      ],
      testModel: true,
      test_data: "",
      username: "",
      inputvalue: "",
      msg: "100",
      something_to_son: "aomething to son",
    };
  },
  components: {
    test,
    listeners,
    baseInput,
    cropper,
  },
  methods: {
    parentEvent(testdata) {
      this.test_data = testdata;
    },
    handleClick() {
      console.log("点击事件");
    },
    handleClick1() {
      console.log("还是点击事件");
    },
    onDblclick() {
      console.log("双击事件");
    },
    handleBaseInputFocus: function (ev) {
      console.log(ev);
    },
    handleBaseInput: function (ev) {
      this.inputvalue = ev;
    },
    handleBaseInputClick: function (ev) {
      console.log("事件type:", ev.type);
    },
  },
  created() {
    this.$root.Bus.$on("eventName", (value) => {
      console.log("嘻嘻嘻", value);
    });
  },
  mounted() {
    console.log("我是aaa");
  },
  beforeDestroy() {
    this.$root.Bus.$off("eventName");
  },
};
</script>

<style>
.el-carousel__container {
  height: 800px;
  width: 100%;
}
.el-carousel__item {
  text-align: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.cropper {
  border: 1px #000 solid;
}
</style>

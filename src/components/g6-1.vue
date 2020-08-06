<template>
    <div id="mountNode">
      <div class="operating">
        <div class="btn-group">
          <div class="btn" @click="addCircle" title="起始节点">
            起始
            <i class="iconfont iconyuan"></i>
          </div>
          <div class="btn" @click="addRect" title="常规节点">
            常规
            <i class="iconfont iconzhengfangxing"></i>
          </div>
          <div class="btn" @click="addRhombus" title="条件节点">
            条件
            <i class="iconfont iconlingxing"></i>
          </div>
        </div>
        <div class="btn-group">
          <div class="btn" @click="addLine" title="直线">
            直线
            <i class="iconfont iconzhixian"></i>
          </div>
          <div class="btn" @click="addSmooth" title="曲线">
            曲线
            <i class="iconfont iconlianxian"></i>
          </div>
        </div>
        <div class="btn-group">
          <div class="btn" @click="changeMode('drag')" title="拖拽模式">
            拖拽
            <i class="iconfont icontuozhuai"></i>
          </div>
        </div>
        <div class="btn-group">
          <div class="btn" @click="del" style="margin-top: 5px;" title="删除">
            删除
            <i class="iconfont iconshanchu"></i>
          </div>
          <div class="btn" @click="save" title="保存">
            保存
            <i class="iconfont icondaoru"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import G6 from '@antv/g6';
  export default {
    data () {
        return {
        }
    },
    components: {

    },
    mounted () {
      this.initG6()
    },
    methods:{
      initG6() {
        let self = this;
        const grid = new G6.Grid()
        self.graph = new G6.Graph({
          container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
          width: 800, // Number，必须，图的宽度
          height: 800, // Number，必须，图的高度
          mode: 'edit',
          plugins: [ grid ]
        });
        G6.registerNode('pie-node', {
          draw: (cfg, group) => {
            this.group = group
          }
        })
        // self.graph.data(data);
        self.graph.render();
      },
      addCircle() {
        // this.graph.node(node => {
        //   return {
        //     shape: 'circle',
        //   };
        // });
        this.group.addShape('circle', {
          draggable: true, 
          name: 'circle-shape',
        });
      },
      addRect() {

      },
      addRhombus() {

      },
      addLine() {

      },
      addSmooth() {

      },
      changeMode(mode) {

      },
      del() {

      },
      save() {

      }
    }
  }
</script>

 <style lang="less" scoped>
 #mountNode{
    border: 1px solid #ebeef5;
    position: relative;
    overflow: hidden;
 }
 .operating {
    position: absolute;
    z-index: 99;
    background-color: #ffffff;
    padding: 20px 10px;
    box-shadow: 1px 1px 4px 0 #0a0a0a2e;
  }
   .btn-group {
    border-right: 1px solid #efefef;
    display: inline-block;
    padding-left: 10px;
    padding-right: 14px;
    &:last-of-type {
      border-right: 0;
    }
    .btn {
      display: inline-block;
      margin: 2px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
      border: 1px solid rgba(233, 233, 233, 0);
      i {
        font-size: 20px;
      }
      &:hover {
        border: 1px solid #E9E9E9;
        color: #767A85;
        border-radius: 2px;
        background: #FAFAFE;
      }
    }
    .el-form-item {
      margin-bottom: 0 !important;
    }
  }
 </style>

<template>
    <div>
      <!-- <organization-chart :datasource="ds"></organization-chart> -->
      <div class="div-card">
        <div class="card-row">
          <el-card id="card1">
          123
          </el-card>
        </div>
        <div class="card-row">
          <el-card id="card2">
            456
          </el-card>
          <el-card id="card3">
            789
          </el-card>
        </div>
        <div class="card-row">
          <el-card id="card4">
            4532
          </el-card>
          <el-card id="card5">
            2549
          </el-card>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import OrganizationChart from 'vue-organization-chart'
  import 'vue-organization-chart/dist/orgchart.css'
  import {jsPlumb} from 'jsplumb'
  export default {
    components: { OrganizationChart },
    mounted () {
      this.firstdraw()
      this.print('card1','card2')
      this.print('card1','card3')
      this.print('card2','card4')
      this.print('card3','card5')
      console.log('mounted')
    },
    beforeDestroy() {
      jsPlumb.reset();
    },
    // watch:{    //这个方法太蠢了。。。
    //   '$route'(to,from){
    //     if(to.path == '/tree'){
    //       this.firstdraw()
    //       this.print('card1','card2')
    //       this.print('card1','card3')
    //       this.print('card2','card4')
    //       this.print('card3','card5')
    //     }else{
    //       jsPlumb.reset();
    //     };
    //   }
    // },
    data () {
        return {
          ds:{}
        }
    },
    methods:{
      firstdraw(){
        this.ds= {
          'id': '1',
          'name': 'Lao Lao',
          'title': 'general manager',
          'children': [
            { 'id': '2', 'name': 'Bo Miao', 'title': 'department manager' },
            { 'id': '3', 'name': 'Su Miao', 'title': 'department manager',
              'children': [
                { 'id': '5', 'name': 'Hei Hei', 'title': 'senior engineer',
                  'children': [
                    { 'id': '6', 'name': 'Pang Pang', 'title': 'engineer' }
                  ]
                }
              ]
            },
            { 'id': '8', 'name': 'Hong Miao', 'title': 'department manager' }
          ]
        };
      },
      print(point1,point2){
        jsPlumb.ready(function () {
          var common = {
            endpoint: 'Dot',
            connector: 'Straight',
            anchor: ['Top', 'Bottom'],
            isSource: true,
            isTarget: true,
          }
          jsPlumb.connect({
            source: point1,
            target: point2,
            paintStyle: { stroke: '#999', strokeWidth: 1 },
            overlays: [['Arrow', { width: 13, length: 13, location: 0.5 }]]
          },common)

          jsPlumb.bind('click',function(conn,originalEvent){
            if(window.prompt('???')=='1'){
              jsPlumb.deleteConnection(conn)
            }
          })
          jsPlumb.bind("connection", function(info) {
            console.log('连接建立了~')
          });

          // jsPlumb.draggable('card1')
          // jsPlumb.draggable('card2')
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.card-row{
  display:flex;
  justify-content: space-around;
  margin:150px;
  .el-card{
    width:200px;
    height:100px;
  }
}
</style>

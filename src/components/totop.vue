<template>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%">
          <el-table-column
          prop="index"
          label="序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="row">
            <el-button @click="deleteRow(row,tableData)">删除</el-button>
            <el-button @click="getTop(row,tableData)">置顶</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br/>
      <ul class="myul">
        <li v-for="(item,index) in liData" :key="index">
          {{item}}-{{item}}
          <el-button :disabled="btndis" @click="liTop(item,index)">
            置顶
          </el-button>
        </li>
      </ul>
      <br/>
      <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
        <div class="drag-div" v-for="element in myArray" :key="element.id">{{element.name}}</div>
      </draggable>

      <el-table
        :data="tableData1"
        style="width: 60%;margin:10px auto">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
              <el-button
                size="mini"
                :disabled="scope.$index===0"
                @click="moveUp(scope.$index,scope.row)"><i class="el-icon-arrow-up"></i></el-button>
              <el-button
                size="mini"
                :disabled="scope.$index===(tableData1.length-1)"
                @click="moveDown(scope.$index,scope.row)"><i class="el-icon-arrow-down"></i></el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    data () {
        return {
          btndis:false,
          tableData:[{
            date: '2016-05-02',
            name: '王1虎',
            index:0,
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王2虎',
            index:1,
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王3虎',
            index:2,
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王4虎',
            index:3,
            address: '上海市普陀区金沙江路 1520 弄'
          }, {
            date: '2016-05-03',
            name: '王5虎',
            index:4,
            address: '上海市普陀区金沙江路 1521 弄'
          }, {
            date: '2016-05-03',
            name: '王6虎',
            index:5,
            address: '上海市普陀区金沙江路 1522 弄'
          }],
          liData:[0,1,2,3,4,5,6,7,8,9],
          myArray:[{
            id:1,
            name:'zhao_1'
          },{
            id:2,
            name:'qian_2'
          },{
            id:3,
            name:'sun_3'
          },{
            id:4,
            name:'li_4'
          },{
            id:5,
            name:'zhou_5'
          },{
            id:6,
            name:'wu_6'
          },{
            id:7,
            name:'zheng_7'
          },{
            id:8,
            name:'wang_8'
          }],
          tableData1: [{
              date: '2016-05-02',
              name: '王1虎',
              address: '上海市普陀区金沙江路 1510 弄'
            }, {
              date: '2016-05-04',
              name: '王2虎',
              address: '上海市普陀区金沙江路 1511 弄'
            }, {
              date: '2016-05-01',
              name: '王3虎',
              address: '上海市普陀区金沙江路 1512 弄'
            }, {
              date: '2016-05-03',
              name: '王4虎',
              address: '上海市普陀区金沙江路 1513 弄'
            }, {
              date: '2016-05-08',
              name: '王5虎',
              address: '上海市普陀区金沙江路 1514 弄'
            }, {
              date: '2016-05-23',
              name: '王6虎',
              address: '上海市普陀区金沙江路 1515 弄'
            }]
        }
    },
    components: {
      draggable
    },
    methods: {
      deleteRow(row,tableData){
        tableData.splice(row.$index,1)
      },
      getTop(row,tableData){
        let tempRow = tableData[row.$index]
        tableData.splice(row.$index,1)
        tableData.unshift(tempRow)
      },
      liTop(item,index){
        this.$confirm('置顶操作只能执行一次, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let tempRow = this.liData[index]
          this.liData.splice(index,1)
          this.liData.unshift(tempRow)  
          this.$message.success('置顶成功!')
          this.btndis = true
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消置顶'
          });          
        });
      },
      moveUp(index,row){
        let temp = row
        this.tableData1.splice(index,1)
        this.tableData1.splice(index-1,0,temp)
      },
      moveDown(index,row){
        let temp = row
        this.tableData1.splice(index,1)
        this.tableData1.splice(index+1,0,temp)
      }
    }
  }
</script>

<style lang="less">
.myul{
  border:1px #000 solid;
  padding-left:10px;
  margin:10px auto;
  width:200px;
  li{
    list-style: none;
    height:50px;
    line-height:50px;
    border-bottom:1px #000 solid;
    &:nth-last-child(1){
      border:none
    }
    .el-button{
      margin-left:20px;
    }
  }
}
.drag-div{
  width:200px;
  margin:10px auto;
  border-bottom:1px #000 solid;
}
</style>

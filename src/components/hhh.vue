<template>
  <div>
		<el-button @click = "submit" type="infor" size="small">不再提醒</el-button>
		<el-table
			:data="tableData"
			style="width: 100%">
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
		</el-table>
		
    <div @click="divClick" class="divtest">
      <a v-on:click.once="doThis">尝试事件修饰符效果</a>
      <!-- <a v-on:click.stop="doThis">尝试事件修饰符效果</a> -->
      <!-- <a v-on:click="doThis">尝试事件修饰符效果</a> -->
    </div>

    <div style="margin:10px;">
      <input v-model= "message" placeholder="尝试双向绑定吧"/>
      <span>{{message}}</span>
    </div> 

    <div style="margin:10px;">
      <textarea v-model="message1" placeholder="add multiple lines"></textarea>
      <br>
      <span>Multiline message is:</span>
      <p style="white-space: pre-wrap;">{{ message1 }}</p>
    </div>

    <div style="margin:10px;">
      <input type="checkbox" id="zhao1" value="zhao" v-model="checkedNames">
      <label for="zhao">zhao</label>
      <input type="checkbox" id="qian" value="qian" v-model="checkedNames">
      <label for="qian">qian</label>
      <input type="checkbox" id="sun" value="sun" v-model="checkedNames">
      <label for="sun">sun</label>
      <span>checked names:{{checkedNames}}</span>
    </div>

    <div style="margin:10px;">
      <el-select v-model="mulSelected" multiple style="width: 200px;">
        <el-option value="A">A</el-option>
        <el-option value="B">B</el-option>
        <el-option value="C">C</el-option>
      </el-select>
      <br>
      <span>el-Selected: {{ mulSelected }}</span>
    </div>

     <div style="margin:10px;">
      <select multiple style="width: 200px;" v-model= "education">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <br>
      <span>Selected: {{ education }}</span>
    </div>

		<el-dialog :visible.sync="dialogVisible">
			<div>
				<p>实现不再提醒我功能</p>
				<el-checkbox v-model="checked">不再提醒我</el-checkbox>
				 <p slot="footer" class="dialog-footer">
					<el-button @click="cancel">取 消</el-button>
					<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
				</p>
			</div>
		</el-dialog>
	<!-- <el-dialog :visible.sync="dialogVisible">
			<p>新增用户</p>
			<span>用户名称：</span><el-input v-model="input1" placeholder="请输入用户名"></el-input><br>
			<span>账   号：</span><el-input v-model="input2" placeholder="请输入账号"></el-input><br>
			<span>密   码：</span><el-input v-model="input3" placeholder="请输入密码"></el-input>
			 <p slot="footer" class="dialog-footer">
					<el-button @click="cancel">取 消</el-button>
					<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</p>
	</el-dialog> -->
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  data () {
    return {
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}],
			dialogVisible:false,
			checked:false,
			input1:'',
			input2:'',
      input3:'',
      message:'',
      message1:'',
      checkedNames:[],
      mulSelected:[],
      education:[]
		}
	},
	methods: {
		submit(){
			this.$root.Bus.$emit('eventName',123);
			this.dialogVisible = true;
			if(this.checked === true){
					this.dialogVisible = false;
			}
		},
		cancel(){
			this.dialogVisible = false;
			this.checked = false
    },
    divClick(){
      alert('div点击事件~哇哈哈')
    },
    doThis(event){
      event.stopPropagation() //只点击了一次并阻止冒泡事件
      alert('a标签点击事件~哇嘿嘿')
    }
	}
}
</script>

<style>
/* .el-input{
	display:inline-block;
	width:450px;
} */
.divtest{
  width:150px;
  height:100px;
  text-align:center;
  line-height:100px;
  border:1px #000 solid;
  background-color: darkseagreen;
  margin:10px;
}
</style>

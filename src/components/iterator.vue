<template>
    <div class="box">
      <div>都去看console:</div>
      <el-button @click="tryatry" type="primary" size="small">尝试Iterator</el-button>
      <el-button @click="expend" type="primary" size="small">扩展运算符</el-button>
      <el-button @click="trymap" type="primary" size="small">set与map</el-button>
      <el-button @click="tryset" type="primary" size="small">set...去重</el-button>
      <el-button @click="addMap" type="primary" size="small">map加成员</el-button>
      <el-button @click="getMap" type="primary" size="small">生成map</el-button>
      <el-button @click="keyofMap" type="primary" size="small">map键值</el-button>
      <el-button @click="every" type="primary" size="small">ES6-every</el-button>
      <el-button @click="some" type="primary" size="small">ES6-some</el-button>
      <el-button @click="reduce" type="primary" size="small">ES6-reduce</el-button>
      <el-button @click="tryForin" type="primary" size="small">forin</el-button>
      <el-button @click="tryForof" type="primary" size="small">forof</el-button>
      <el-button @click="tryForeach" type="primary" size="small">foreach</el-button>
      <el-button @click="showSync" type="primary" size="small">showSync</el-button>
      <el-button @click="deepClone1" type="primary" size="small">deepClone</el-button>
      <el-button @click="tryProto1" type="primary" size="small">继承-原型链继承</el-button>
      <el-button @click="tryProto2" type="primary" size="small">继承-构造继承</el-button>
      <el-button @click="checkproto" type="primary" size="small">checkproto</el-button>
      <el-button @click="delChongFu" type="primary" size="small">数组去重</el-button>
      <el-button @click="dealPaiXu" type="primary" size="small">数组排序</el-button>
      <el-button @click="dealPaiXu2" type="primary" size="small">数组排序2</el-button>
      <el-button @click="testtest" type="primary" size="small">settimeout执行顺序</el-button>
      <el-button @click="testtest2" type="primary" size="small">数组去重遍历一次</el-button>
      <el-button @click="aaa" type="primary" size="small">数组去重遍历一次-test</el-button>
      <el-button @click="strSpace" type="primary" size="small">去字符串首尾空格</el-button>
      <el-button @click="eightPaixu1" type="primary" size="small">八大排序-冒泡</el-button>
      <el-button @click="eightPaixu2" type="primary" size="small">八大排序-选择</el-button>
      <el-button @click="eightPaixu3" type="primary" size="small">八大排序-快排</el-button>
      <el-button @click="lights" type="primary" size="small">红绿灯</el-button>
      <el-button @click="queue" type="primary" size="small">队列</el-button>
      <el-button @click="inn" type="primary" size="small">栈</el-button>
      <el-button @click="twoInn" type="primary" size="small">两个栈实现一个队列</el-button>
      <el-button @click="twoQueue" type="primary" size="small">两个队列实现一个栈</el-button>
      <el-button @click="promiseall" type="primary" size="small">promiseall</el-button>
      <el-button @click="maptest" type="primary" size="small">maptest</el-button>
      <br>
      <div v-if="false">
        <el-radio-group style="margin:10px;" v-model="radio">
          <el-radio :label="3" @click.native.prevent = 'handleCancel(3)'>备选项3</el-radio>
          <el-radio :label="6" @click.native.prevent  = 'handleCancel(6)'>备选项6</el-radio>
          <el-radio :label="9" @click.native.prevent  = 'handleCancel(9)'>备选项9</el-radio>
        </el-radio-group>
      
        <el-checkbox-group style="margin:10px;" v-model="checkList">
          <el-checkbox v-for="(item,index) in checkOption" @click.native.prevent="choosea(item)" :label="item.name" :key="index"></el-checkbox>
        </el-checkbox-group>

        <el-input
          type="textarea"
          style="width:150px;"
          :autosize="{ minRows: 1, maxRows: 1}"
          @blur="handleText()"
          v-model="textarea">
        </el-input>
        <span style="margin:10px;padding:20px;">看看内联元素</span>

      
        <div v-for="(item,index) in menu" >
          <div v-for="(item1,index1) in item">
              <ul>
                  <li v-for="item2 in item1">{{item2}}</li>
              </ul>
          </div>
        </div>
      </div>

      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="ensure">确 定</el-button>
      </div>
    </el-dialog>
    </div>
</template>

<script>
  function makeIterator(array) {
    var nextIndex = 0;
    return {
      next: function() {
        return nextIndex < array.length ?
          {value: array[nextIndex++], done: false} : {value: undefined, done: true};
      }
    };
  }

  //定义一个动物类
  function Animal (name){
      this.name = name||'Animal'  //属性
      this.sleep = function(){    //实例方法
          console.log(this.name+'在睡觉！');
      }
  }
  //原型方法
  Animal.prototype.eat = function(food){
      console.log(this.name+'正在吃'+food);
  };

  export default {
    data () {
        return {
          radio:'',
          checkOption:[{
            name:'复选1',
            val:''
          },{
            name:'复选2',
            val:''
          },{
            name:'复选3',
            val:''
          },{
            name:'复选4',
            val:''
          }],
          checkList:[],
          dialogFormVisible: false,
          chooseWhich:'',
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          textarea: '',
          textareaArr: [],
          menu:[[
              ['数学'],['小学数学','初中数学'],['代数','几何']
          ],[
              ['语文']
          ],[
              ['英语']
          ]]
        }
    },
    methods:{
      handleText(){
        console.log('textarea:',this.textarea)
        this.textareaArr = this.textarea.split(/[\n]/)
        console.log('textareaArr',this.textareaArr)
      },
      handleCancel(value){
          this.radio = value == this.radio ? '' : value
      },
      tryatry(){
        var it = makeIterator(['a', 'b']);
        console.log('1',it.next())
        console.log('2',it.next())
        console.log('3',it.next())
      },
      expend(){
        let list=[3,4,5,6]
        let a = list[0]
        let rest = list.slice(1)
        console.log('ES5:','a',a,'rest',rest) //a 3,rest [4,5,6]
        let [b, ...restb]=list
        console.log('ES6:','b',b,'restb',restb) //b 3,restb [4,5,6]
      },
      trymap(){
        let s = new Set();
        let arr = [1,1,3,4,4,4,7,0,9,0]
        let arr1 = []
        arr.forEach(x => s.add(x));
        for(let i of s){
          arr1.push(i)
        }
        console.log('set结构不会添加重复的值：',arr1)
      },
      tryset(){
        let arr=[1,1,1,2,2,2,3,3,3];
        let uni = new Set(arr);  //{1,2,3}
        let unique = [...new Set(arr)];  //[1,2,3]
        console.log('uni:',uni,typeof(uni),'unique',unique)
        console.log('...一个set',...uni)
        console.log('...一个set加[]',[...uni])
      },
      addMap(){
        let map = new Map([
          ['name','张'],
          ['title','author']
        ]);
        console.log('map.size:',map.size)
        console.log('map.hasname:',map.has('name'))
        console.log('map.getname:',map.get('name'))
        console.log('map.hastitle:',map.has('title'))
        console.log('map.gettitle:',map.get('title'))
      },
      getMap(){
        let set = new Set([
          ['foo',1],
          ['bar',2]
        ]);
        let m1 = new Map(set);
        console.log('m1.getfoo',m1.get('foo'))   //1
        let m2 = new Map([['baz',3]]);
        let m3 = new Map(m2);
        console.log('m3.getbaz',m3.get('baz'))   //3
      },
      keyofMap(){
        let map = new Map()
        map.set(-0,123);
        console.log('+-0:',map.get(+0))  //123

        map.set(true,1)
        map.set('true',2)
        console.log('布尔值true:',map.get(true))  //1
        console.log('字符串true:',map.get('true'))  //2

        map.set(undefined,3)
        map.set(null,4)
        console.log('undefined:',map.get(undefined))  //3
        console.log('null:',map.get(null))  //4

        map.set(NaN,5)
        map.set(NaN,6)
        console.log('NaN:',map.get(NaN))  //6,事实证明,对于map的键值来说，NaN和NaN是一样的
      },
      every(){
        let bookes = [
          { id: 1, name: "book1", year: 2019},
          { id: 2, name: "book2", year: 2017},
          { id: 3, name: "book3", year: 2019},
        ];
        let arr=bookes.every((e) => {
          return e.year>=2018  //如果都大于等于2018，会返回true (一假即假)
        })
        console.log(arr)  //false,返回的是一个布尔值
      },
      some(){
        let bookes = [
          { id: 1, name: "book1", year: 2019},
          { id: 2, name: "book2", year: 2017},
          { id: 3, name: "book3", year: 2019},
        ];
        let arr=bookes.some((e) => {
          return e.year>=2018  //一真即真
        })
        console.log(arr)  //true
      },
      reduce(){ 
        let arr = [1,2,3,4,5,6,7,8,9]
        let sum = arr.reduce((i,k) => { //求和，i里面保存的是每一次相加的和
          return i+k
        })
        console.log(sum)  //45

        let colors = [
          { id: 1, color: "red" },
          { id: 2, color: "white" },
          { id: 3, color: "yellow" },
        ];
        let result = colors.reduce((i,k) => {  //将colors中每一项的color取出放入新数组
          i.push(k.color)
          return i
        },[])  //！！！指定初始值
        console.log(result)
      },
      tryForin(){  //适合遍历对象，得到键名
        let arr=[1,2,3]
        for(let item in arr){
          console.log('arr',item) //0,1,2  (索引)
        }
        let json = {
          a:'a1',
          b:'b2',
          c:'c3'
        }
        for(let item in json){
          console.log('json',item) //a,b,c  (key)
          console.log('json',json[item]) //a1,b2,c3  (value)
        }
      },
      tryForof(){  //适合遍历数组，得到值
        let arr=[4,5,6]
        for(let item of arr){
          console.log(item) //值
        }
        let json = {
          a:'a1',
          b:'b2',
          c:'c3'
        }
        for(let item of json){
          console.log('json',item)  //报错！！！
        }
      },
      tryForeach(){
        let arr=[1,2,3]
        let json = {
          a:'a1',
          b:'b2',
          c:'c3'
        }
        arr.forEach(i => {
          console.log('arr',i)
        })
        json.forEach(j => { //json不能用foreach方法，报错！！！
          console.log('json',j)
        })
      },
      choosea(item){
        let ishave = this.checkList.indexOf(item.name)
        if(ishave===-1){
          this.showDialog()
          this.chooseWhich = item.name
        }else{
          this.checkList.find((i,index) => {
            if(i===item.name){
              this.checkList.splice(index,1)
            }
          })
        }
      },
      showDialog(){
          this.dialogFormVisible = true
      },
      ensure(){
        this.dialogFormVisible = false
        this.checkList.push(this.chooseWhich)
      },
      showSync(){
        let arr=[1,2,3,4,5]
        arr.forEach((item) => {
          this.getTime(item).then((res) => {
            console.log('item---', item)
          })
        })
      },
      getTime(item){
        return new Promise((resolve,reject) => {
          setTimeout(() => {
            console.log('内部item---', item)
            resolve(item)
          }, 2000);
        })
      },
      deepClone1(){
        let arr1 = {key:{name:'1'},value:'11'}
        let arr2 = deepClone(arr1)
        function deepClone(obj){
            var newObj = obj instanceof Array ? [] : {}
            for(var i in obj){
                newObj[i] = typeof obj[i] == "object" ? deepClone(obj[i]) : obj[i]
            }
            return newObj
        };

        arr1.key.name = '3'
        arr1.value = '33'
        console.log('arr1', arr1) //{key:{name:'3'},value:'33'}
        console.log('arr2', arr2) //{key:{name:'1'},value:'11'}
      },
      tryProto1(){  //原型链继承
        function Cat(){}
        Cat.prototype = new Animal();
        Cat.prototype.name = 'cat';

        var cat = new Cat();
        console.log('1name---',cat.name)  //cat
        //cat正在吃fish
        console.log('2eat---',cat.eat('fish'))  //undefined
        //cat在睡觉！
        console.log('3sleep---',cat.sleep())  //undefined
        console.log('4cat instanceof Animal---',cat instanceof Animal)  //true
        console.log('5cat instanceof Cat---',cat instanceof Cat)   //true
      },
      tryProto2(){
        function Cat(name){
          Animal.call(this);
          this.name = name || 'Tom';
        }
        // Test Code
        var cat = new Cat();
        console.log(cat.name);    //Tom
        //Tom在睡觉
        console.log(cat.sleep());   //undefined
        console.log(cat instanceof Animal);  // false
        console.log(cat instanceof Cat);  // true
      },
      checkproto(){
        var A = {n:4399};
        var B = function(){ this.n=9999};
        var C = function(){ var n = 8888};
        B.prototype = A;
        C.prototype = A;
        var b = new B();
        var c = new C();
        A.n++;
        console.log('111',b.n);  //9999
        console.log('222',c.n);  //4400
      },
      delChongFu(){
        let arr=[1,2,3,4,1,2]
        let arr2 = [...new Set(arr)]
        console.log(arr2,'arr2',arr2 instanceof Array)
        let arr3 = []
        arr.forEach((item) => {
            if(arr3.indexOf(item)===-1){
                arr3.push(item)
            }
        })
        console.log(arr3,'arr3')
      },
      dealPaiXu(){
        let arr=[1,5,3]
        let arr2=[9,6,4,5]
        let arr3=arr.concat(arr2)
        let arr4=[...new Set(arr3.sort())]
        console.log(arr4,'arr4')
        let arr5=arr4.reverse()
        console.log(arr5,'arr5')
      },
      dealPaiXu2(){
        let array1 = [2,5,3,8,6]
        array1.sort(function(a,b){
          return b-a   //降序
          // return a-b   //升序
        })
        console.log(array1)
      },
      testtest(){
        for (var i = 0; i < 5; i++) {
          setTimeout(function(i) {
            console.log(new Date, i);
          }(i), 1000)
        }
        console.log(new Date, i);
      },
      testtest2(){
        let arr = [1,2,4,2,6,7,3,2,3]
        arr.sort()
        let result = [arr[0]]
        for(let i=1;i<arr.length;i++){
          arr[i] !== arr[i-1] && result.push(arr[i])
        }
        console.log(result,'result')
      },
      eightPaixu1(){
        //冒泡排序 两两比较，每一轮比较将最大/小值放在最顶/最底
        let arr = [1,3,6,2,5,7,4]
        for(let i=0;i<arr.length-1;i++){
          for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
              var temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp
            }
          }
        }
        console.log('冒泡排序', arr)
      },
      eightPaixu2(){
        //选择排序 每次循环都挑出一个最小值放在第一位，再从剩下的里面接着挑放到第二位，以此类推
        let arr = [1,3,6,2,5,7,4]
        for(let i=0;i<arr.length-1;i++){
          let min = i
          for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
              min = j
            }
          }
          if(min!=i){
            var temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
          }
        }
        console.log('选择排序', arr)
      },
      eightPaixu3(){
        //快排
        var a=[1,3,6,2,5,7,4];
        function quik(arr, left, right) {
            var key = arr[Math.floor((left+right) / 2)];
            while (left <= right) {
                while (arr[left] < key) {
                    left++;
                }
                while (arr[right] > key) {
                    right--;
                }
                if (left <= right) {
                    var tmp = arr[left];
                    arr[left] = arr[right];
                    arr[right] = tmp;
                    left++;
                    right--;
                }
            }
            return left;
        }
        function quikSort(arr,left,right){
            var index=quik(arr,left,right);
            if(left<index-1){
                quikSort(arr,left,index-1)
            }
            if(right>index){
                quikSort(arr,index,right)
            }
            return arr;
        }
        console.log(quikSort(a,0,a.length-1));
      },
      aaa(){
        let arr=[1,3,2,4,2]
        arr.sort()
        let newarr = [arr[0]]
        for(let i=1;i<arr.length;i++){
          arr[i]!==arr[i-1]&&newarr.push(arr[i])
        }
        console.log('newarr',newarr)
      },
      strSpace(){
        let str = " abc de "
        // let regExp = /(^\s*)|(\s*$)/g
        var reg = /(^\s*|\s*$)/g;
        str.replace(reg,"")
        console.log('str', str, str.length)
      },
      lights(){
        function lights1() {
          return new Promise((resolve,reject) => {
              setTimeout(function(){
                  console.log('红灯3s')
                    resolve()
                },3000)
            })
        }
        function lights2() {
          return new Promise((resolve,reject) => {
            lights1().then(()=>{
                  setTimeout(function(){
                      console.log('绿灯2s')
                      resolve()
                  },2000)
            })
          })
              
        }
        function lights3() {
          return new Promise((resolve,reject) => {
            lights2().then(()=>{
                setTimeout(function(){
                    console.log('黄灯1s')
                    resolve()
                },1000)
            })
          })
        }
        setInterval(function(){
          lights3()
        },6000)
      },
      queue(){  //先进先出
        let length = 5
        let arr = []
        function pushQueue(num){
          if(arr.length === length){
            console.log('长度已到上限')
            return;
          }
          arr.push(num)
          console.log(num ,'成功入队')
        }
        function popQueue(){
          if(arr.length===0){
            console.log('已删完，数组长度为0')
          }else{
            console.log(arr.shift(),'成功出队')
          }
        }
        pushQueue(1)
        pushQueue(2)
        pushQueue(3)
        pushQueue(4)
        popQueue()
        popQueue()
        console.log('arr', arr)
      },
      inn(){  //先进后出
        let length = 5
        let arr = []
        function pushInn(num){
          if(arr.length === length){
            console.log('长度已到上限')
            return;
          }
          arr.push(num)
          console.log(num ,'成功入栈')
        }
        function popInn(){
          if(arr.length===0){
            console.log('已删完，数组长度为0')
          }else{
            console.log(arr.pop(),'成功出栈')
          }
        }
        pushInn(1)
        pushInn(2)
        pushInn(3)
        pushInn(4)
        pushInn(5)
        popInn()
        popInn()
        popInn()
        console.log('arr', arr)

      },
      twoInn(){  //两个栈实现一个队列
        let arr1 = []
        let arr2 = []
        function push(node){
          arr1.push(node)
        }
        function pop(){
          if(arr2.length === 0){
            while(arr1.length>0){
              arr2.push(arr1.pop())
            }
          }
          return arr2.pop() || null
        }
        push(1)
        push(2)
        push(3)
        pop()
        pop()
        console.log('arr1----', arr1)
        console.log('arr2----', arr2)
      },
      twoQueue(){   //两个队列实现一个栈
        let arr1 = []
        let arr2 = []
        function push(node){
          if(arr1.length === 0){
            arr1.push(node)
            while(arr2.length){
              arr1.push(arr2.shift())
            }
          }else if(arr2.length===0){
            arr2.push(node)
            while(arr1.length){
              arr2.push(arr1.shift())
            }
          }
        };

        function pop(){
          if(arr1.length !== 0){
            return arr1.shift()
          }else{
            return arr2.shift()
          }
        }

        push(1)
        push(2)
        push(3)
        push(4)
        pop()
        console.log('arr1----', arr1)
        console.log('arr2----', arr2)
      },
      promiseall(){
        function promiseAll(promise){
          return new Promise(function(resolve,reject){
            if(!Array.isArray(promise)){
              return reject(new TypeError("argument must be anarray"))
            }
            var countNum = 0;
            var promiseNum = promise.length;
            var resolvedvalue = new Array(promiseNum);
            for(var i=0;i<promiseNum;i++){
              (function(i){
                Promise.resolve(promise[i]).then(value => {
                  countNum++;
                  resolvedvalue[i] = value
                  if(countNum===promiseNum){
                    return resolve(resolvedvalue)
                  }
                },reason => {
                  return reject(reason)
                })
              })(i)
            }
          })
        }
        var p1 = Promise.resolve(1),
        p2 = Promise.resolve(2),
        p3 = Promise.resolve(3);
        promiseAll([p1,p2,p3]).then(function(value){
          console.log(value)
        })
      },
      maptest(){
        Number.prototype.reduce = function(num){
          return this - num
        }
        Number.prototype.add = function(num){
          return this + num
        }
        console.log(Number.prototype)
         let a = (2).add(3).reduce(1)
        console.log(a)
      }       
    }
  }
</script>

<style>
.box {
  margin:5px;
}
.el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
  box-shadow: 0 0 2px 2px #fff;
}
</style>

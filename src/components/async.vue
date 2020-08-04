<template>
    <div>
      <el-button type="success" @click="tryAsync">Async</el-button>
      <el-button type="success" @click="tryAsync2">Async2</el-button>
      <el-button type="success" @click="tryAsync3">Async3</el-button>
      <el-button type="success" @click="getGenertor">Genertor</el-button>
      <el-button type="success" @click="promise1">promise1</el-button>
      <el-button type="success" @click="promise2">promise2</el-button>
      <el-button type="success" @click="promise3">promise3</el-button>
      <el-button type="success" @click="promise4">promise4</el-button>
      <el-button type="success" @click="promise5">promise5</el-button>
      <el-button type="success" @click="promise6">promise6</el-button>
      <el-button type="success" @click="promise7">promise7</el-button>
      <el-button type="success" @click="promise8">promise8</el-button>
      <el-button type="success" @click="promise9">promise9</el-button>
    </div>
</template>

<script>
  function* helloWorldGenertor(){
      yield 'hello';
      yield 'world';
      return 'ending';
  }
  const hw = helloWorldGenertor();
  export default {
    data () {
        return {
          texts:''
        }
    },
    methods:{
      tryAsync(){
        let that = this
        async function getStockPriceByName(name) {
          const symbol = await that.getStockSymbol(name);
          const stockPrice = await that.getStockPrice(symbol);
          return stockPrice;
        }

        getStockPriceByName('goog').then(function (result) {
          console.log('3',result);
        });
      },
      getStockSymbol(name){
        console.log('1',name)
        return name
      },
      getStockPrice(symbol){
        console.log('2',symbol)
        return symbol
      },
      tryAsync2(){
        aaa().then((res)=>{
          console.log(res)
        })
        async function aaa(){
          return 'right'
        }
      },
      tryAsync3(){
        this.bbb()
      },
      async bbb(){
        this.texts = await this.settime()
        console.log(this.texts)
      },
      settime(){
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('zhao')
          },2000)
        })
      },
      getGenertor(){
        console.log('1',hw)
        console.log('2',hw.next())
        console.log('3',hw.next())
        console.log('4',hw.next())
        console.log('5',hw.next())
      },
      promise1(){
        let p = new Promise((resolve,reject) => {
          reject(Error('The 1 Fails!'))
        })
        p.catch(error => console.log('1',error.message)) //1 The 1 Fails!
        p.catch(error => console.log('1',error.message)) //1 The 1 Fails!
      },
      promise2(){  
      //在使用promise构造函数时，必须调用resolve()或reject()回调。
      //Promise构造函数不使用你的返回值，因此实际上不会再收到由Promise.reject()创建的其他Promise
        let p = new Promise((resolve,reject) => {
          return Promise.reject(Error('The 2 Fails!'))
        })
        p.catch(error => console.log('2',error.message)) //Uncaught (in promise) Error: The 2 Fails!
        p.catch(error => console.log('2',error.message)) 
      },
      promise3(){
        let p = new Promise((resolve,reject) => {
          reject(Error('The 3 Fails!'))
        })
        .catch(error => console.log('3',error)) //3 Error: The 3 Fails!
        .then(error => console.log('3',error)) //3 undefined
      },
      promise4(){
        let p = new Promise((resolve,reject) => {
          reject(Error('The 4 Fails!'))
        })
        .catch(error => console.log('4',error.message)) //4 The 4 Fails!
        .then(error => console.log('4',error.message))  //Uncaught (in promise) TypeError: Cannot read property 'message' of undefined
      },
      promise5(){
        new Promise((resolve,reject) => {
          resolve('success!')
        })
        .then(() => {
          throw Error('oh noes!')
        })
        .catch(error => {
          return "actually,that worked"
        })
        .catch(error => console.log(error.message)) //不打印任何内容
        //.catch可以简单地通过返回一个常规值来覆盖错误，仅在随后的.then接收该值时有效
      },
      promise6(){
        Promise.resolve('Success!')
          .then(data => {
            return data.toUpperCase()
          })
          .then(data => {
            console.log(data) //SUCCESS!
          })
      },
      promise7(){
        Promise.resolve('Success!')
          .then(data => {
            return data.toUpperCase()
          })
          .then(data => {
            console.log(data) //SUCCESS!
            return data
          })
          .then(console.log) //SUCCESS!
      },
      promise8(){
        Promise.resolve('Success!')
          .then(data => {
            data.toUpperCase()
          })
          .then(data => {
            console.log(data)  //undefined
          })
      },
      promise9(){
        Promise.resolve('Success!')
          .then(() => {
            throw Error('Oh noes!')
          })
          .catch(error => {
            return 'actually,that worked'
          })
          .then(data => {
            throw Error('the fails!')
          })
          .catch(error => console.log(error.message)) //the fails!
      },
    }
  }
</script>

<style>

 
</style>

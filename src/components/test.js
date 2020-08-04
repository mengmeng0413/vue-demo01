let arr=[1,2,3,4,1,2]
let arr1=[]
arr.forEach((item) => {
    if(arr1.indexOf(item)===-1){
        arr1.push(item)
    }
})

let arr2 = [...new Set(arr)]

let myhttp = function(){
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('get',url)
        xhr.send(data)
        xhr.onreadystatechange=function(){
            if(xhr.status===200&&xhr.readyState===4){
                let res = xhr.responseText
                resolve(res)
            }else if(xhr.readyState===4){
                reject('error')
            }
        }
    })
}

function deepclone(target){
    let newObj = target instanceof array ? [] : {}
    for(let i in target){
        newObj[i] = typeof target[i] === 'object' ? deepclone(target[i]) : target[i]
    }
    return newObj;
}





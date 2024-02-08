let promise=new Promise((resolve,reject)=>{
    console.log("promise is panding")
    setTimeout(()=>{
        console.log("i am promise and i am fullfiled")
    },3000)
})
let promise2=new Promise((resolve,reject)=>{
    console.log("promise is panding")
    setTimeout(()=>{
        console.log("i am promise and i am fullfiled")
        reject(new error("promise2 has not work properly it can through some error"))
    },3000)
})

promise.than((value)=>{
    console.log(value)
})
promise2.catch((error)=>{
    console.log("your error is ",error.message);
})
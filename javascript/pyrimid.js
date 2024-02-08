let promise= new Promise(function(resolve,reject){
    alert("hellow")
    resolve(56)
})

console.log("Hellow One")

setTimeout(function(){
    console.log("hellow tow in 2 sec")
},2000)
console.log("het name is " + "hellow 3")
console.log(promise)

























console.log("start")
setTimeout(function(){
    console.log("hey i am good !");
},3000)
console.log("End")


//callbac
function loadscript(src,callback){
let script=document.createElement("script");
script.src=src
script.onload=function(){
    console.log("lodaed script"+ src)
    callback(src)
}
document.body.appendChild(script)
}

loadscript("https://www.")



































/*


let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("resolve after 2 sec ")
        resolve(256)
    },2000)
})
p1.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve,reject)=>{
       setTimeout(function(){
        resolve("promise 2")
       },2000)
    })
    return p2;
}).then((value)=>{
    console.log("we are done")
    return 2
}).than((value)=>{
    console.log("Now we are pakka done")
})

*/ 


const loadscript=(src)=>{
    return new Promise((resolve,reject)=>{

        let script=document.createElement("script")
        script.type="text/javascript"
        script.src=src
        document.body.appendChild(script)
        script.onload=()=>{
            resolve(1)
        }
        script.onerror=()=>{
            reject(0)
        }

    })
   
}

let p1=loadscript("https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/")

p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("we are sorry we some problem to loading a script")
})







 




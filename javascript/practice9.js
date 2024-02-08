



// let p1=new Promise((resolve,reject)=>{
//     function loadscript(scr,callback){
//         let script=document.createElement("script")
//         script.src=scr;
//         script.onload=function(){
//             console.log("load script " + src)
//             callback(scr)
//         };
//         document.body.appendChild(script)
//     };
//     loadscript("https://www.google.com",resolve)
// })
// p1.then((value)=>{
//     // console.log(value);
//     alert(value)
// }).catch((Error)=>{
//     console.log(Error)
// })



// const loadScript= async(src)=>{
    
// return new Promise((resolve,reject)=>{
//     let script=document.createElement("script")
//     script.src=src;
//     script.onload=()=>{
// resolve(src +"done")
// }
// document.head.append(script)
// })

// }

// const main2= async()=>{
//     let a=  await loadScript("https://cdn.jsdeliver.net/npm/bootstrap@5.2.2./dist/css/bootstrap.min.js")
// console.log(a)
// }

// main2()

let p1=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
resolve(56)
        },2000)

    })
}
let p2=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
resolve(36)
        },1000)

    })
}
let p3=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
resolve(86)
        },3000)

    })
}

const run = async()=>{
    console.time("run")
    // let a1=await p1() //fethching 10 product from the data bASE 
    // let a2=await p2()
    // let a3=await p3()
    // console.log(a3)
    let a1=p1()
    let a2=p2()
    let a3=p3()
    let a1a2a3=await Promise.all[a1,a2,a3]
    console.log(a1a2a3)
    console.log(a1,a2,a3)
    console.timeEnd("run")
}
run()












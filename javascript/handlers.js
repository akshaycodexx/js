let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        alert("hey i am not resolved")
        resolve(1)
    }, 2000);
})
p1.then(()=>{
        console.log("congrass this promise is now resolved")
})
p1.then(()=>{
    console.log("Hurrey")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(4)
        }, 6000);
    }) 
}).then((value)=>{
    console.log(value)
})
p1.then((value)=>{
    console.log("your problem is resolve")
})







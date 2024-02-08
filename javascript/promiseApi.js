let b1=new Promise ((resolve,reject)=>{
 setTimeout(()=>{
    resolve("value 1");
 },1000);
});

let b2=new Promise ((resolve,reject)=>{
 setTimeout(()=>{
    resolve("value 2");
    // reject(new Error("this is promise 2 error"))
 },2000)
});
let b3=new Promise ((resolve,reject)=>{
 setTimeout(()=>{
    resolve("value 3");
 },3000)
});

// b1.then((value)=>{
//     console.log(value)
// })
// b2.then((value)=>{
//     console.log(value)
// })
// b3.then((value)=>{
//     console.log(value)
// })


// think about this condition .if you want to print thave all o1,p2,p3 value in simentanously so, theirfore we use promise Api to resolve this problm or this condition

// "if you use promise .all or if any promise will not run than its is not run "

// let promise_all = Promise.all([b1, b2, b3]);
// let promise_all = Promise.allSettled([b1, b2, b3]);
let promise_all = Promise.race([b1, b2, b3]);

promise_all.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log("Promise 2 ke reject hone ke karan Promise.all nahi chala",error);
});

// use promise.all_settled


















































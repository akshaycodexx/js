// Advance javascript
 let a=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(56);
    },4000)
 }).than((value)=>{
    console.log(value);
 })

 let f=async()=>{

     let b=await a;
     let c=await a;
     let d=await a;
     console.log(b,c,d);
 }
f()

















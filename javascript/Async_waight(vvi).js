// their is a special syntax 
// aysinc banne ke bad ham promise of awight kar sake hai 
// asynic sentax allways returns the promise 

async function Akshay(){
 
let DelhiWeather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 deg")
    },1000)
})
let banglore=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("25 deg")
    },7000)
})

// DelhiWeather.then(alert)
// banglore.then(alert)
console.log("fetching delhi weather");
let delhiw=await DelhiWeather
console.log("fetching banglore weather");
let banglorew=await banglore
return[delhiw,banglorew]
}
const cherry=async()=>{
    console.log("hey i am now waiting ")
}
const main1=async()=>{

    console.log("wellcome to weather Control room")
    let a=await Akshay();
    let b=await cherry();
   
}
main1()






































































































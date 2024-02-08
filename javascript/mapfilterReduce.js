let arr=[1,2,3,4,]
arr.map((value,index,Array)=>{
    console.log(value,index,Array)
})
// array filter
let arr2=[12,3,4,67,89]

let a2=arr2.filter((value)=>{
   return value<10
})
console.log(a2)
// reduce value
let arr3=[1,2,3,4,5,6]
let newarr3=arr3.reduce((value1,value2)=>{
    return value1+value2;
})
console.log(newarr3)






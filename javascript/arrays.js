//collections of some items 
let num=[1,2,3,34,4]


let r=num.push(45)
// let j=num.join("aks")
console.log(num)

//remove first element 

let rem=num.shift()
console.log(num)


delete num[0]
console.log(num)
let nummore=[11,12,13,14,15,16,17]
let newarray=num.concat(nummore)
console.log(newarray)
console.log(num.length)
let compare=(a,b)=>{
    return a-b;


}
let num2=[23,23,4,56,23,87,0]
num2.sort(compare)
console.log(num2)
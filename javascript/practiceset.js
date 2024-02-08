// console.log("Aks\"".length)
// let sentance=" The quick brown fox jump over the lazy dog"
// const word=`foxi`
// console.log(` the word i"${word}" ${sentance.includes(word) ? `is `: `is not`} in sentacnce`) 

console.log("har\"".length)


let sentance="The quick brown fox jump over the lazy dog"
console.log(sentance.startsWith("The quick"))

//to check given position me given things have or not ?

console.log(sentance.startsWith("brown,7"))

//end with 
console.log(sentance.endsWith("dog"))

console.log(sentance.toLowerCase())
console.log(sentance.toUpperCase())

let str1="please give Rs 1000";

let amount=str1.slice("please give Rs ".length)
let str11=Number.parseInt(amount)
console.log(amount)
console.log(typeof(str11))

let fnd="Akshay"

console.log(fnd.replace("Ak","Kum"))












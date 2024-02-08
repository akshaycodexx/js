

//practice set 1
/*
let arr=[12,3,2,1]
let a=prompt("enter the number ")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)
*/ 



//practice set 2

/*
let arr=[1,2,3,4,5,6];
let a;
do{
    a=prompt("Enter the number ?")
    arr.push(a)
a=Number.parseInt(a);
}while(a!=0)
console.log(arr)
*/

//problem 3
/*

let arr=[1,2,3,4,5,6,34,30,50];
let n=arr.filter((x)=>{
    return x%10==0
})
console.log(n)

 */
//problem 4

/* 

let arr=[1,2,3,4,5,6,34,30,50];
let n= arr.map((x)=>{
    return x*x;
})
console.log(n)

*/

//problem 5
let arr=[1,2,3];
let n=arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(n)























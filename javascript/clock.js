

setInterval(function(){
let a =new Date()
let h=a.getHours()
let m=a.getMinutes()
let s=a.getSeconds()
let d=a.getDate()


let x=document.getElementsByClassName("box1")[0]
let y=document.getElementsByClassName("box2")[0]
let z=document.getElementsByClassName("box3")[0]

let ampm = h >= 12 ? "PM" : "AM";
h = h % 12 || 12; // Convert to 12-hour format
    x.innerHTML=h
    y.innerHTML=m
    z.innerHTML=ampm
    
},1000)

















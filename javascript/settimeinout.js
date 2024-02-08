let a=setTimeout(function(){
   alert(" i am inside the settimeout") 
},2000)



let b=prompt("Do you want to to run settimeout ? (y/n")

if("y"==b){

    console.log(a)
}
else{
    clearTimeout(a)
}

let c=setInterval(function(){
   alert("har 3 sec me ye auto-matacally run hoga") 
},3000)

clearInterval(c)


























































































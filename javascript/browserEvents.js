// let a = document.getElementsByClassName("container")[0];

// console.log(a);

// a.onclick = () => {
//     a.style.background = 'yellow';
// };

// add event listner and remove event listner//

let a=prompt("What is your feb no ?")

// btn.addEventListener('click', function(){
//     alert("kiya bata hai")
// })
// btn.addEventListener('click', function(){
//     alert("kiya bata hai 2")
// })


let x= function(e){
    alert("Hello World 1")
    console.log(e.target)
}
let y= function(e){
    alert("hello World 2")
}

btn.addEventListener('click',x)
// btn.addEventListener('click',y)

// if(a=='2'){
//     btn.removeEventListener('click',x)
// }




















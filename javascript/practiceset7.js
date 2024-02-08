// document.getElementsByClassName(navul)[0].style.color="red"


console.log(document.getElementById("navul").getElementsByTagName("li")[0])
document.getElementById("navul").getElementsByTagName("li")[0].style.color="red"
let a=document.getElementById("navul");
a.firstElementChild.style.color="green"
a.lastElementChild.style.color="red"


Array.from(document.getElementsByTagName("li")).forEach((Element)=>{
    document.style.background="yellow"
})











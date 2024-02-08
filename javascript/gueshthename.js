let namearray=["Akshay","Bittu","Bappi","Akash","Tapash"]
function randomname(namearray){
    const computerguish=Math.floor(Math.random() * namearray.length);
    return namearray[computerguish];
}
const computer=randomname(namearray);
console.log(computer)
let name=prompt("Enter your name");

if (name === computer) {
    console.log("You win!");
  } else {
    console.log("Game over");
  }
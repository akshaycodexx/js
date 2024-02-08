let num=prompt("Enter the number")
num=parseInt(num);

let arr=[1,2,3,4,5];

function getRandom(array){
    const randomindex=Math.floor(Math.random() * array.length);
                      
    return array[randomindex];
}
const randomitem=getRandom(arr);
if(arr==randomitem){
    console.log("you are Winner")
}else{
    console.log("you are loose!")
}
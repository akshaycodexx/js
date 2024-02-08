//  let a=fetch("https://goweather.herokuapp.com/weather/Ny")
//  a.then((value)=>{
//     return value.json()
// }).then((value2)=>{
//     console.log(value2);
// })

// post request

const CreateTodo = async (todo)=>{


let options = {
    method: "POST",
    headers: {
        "Content-type": "application/json" // lowercase 'a' in 'application'
    },
    body: JSON.stringify(todo),
}

let p= await fetch('https://jsonplaceholder.typicode.com/posts', options) // corrected 'options' variable name
   let responce = await p.json()
   return responce
}
const getTodo=async (id)=>{
    let responce=await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    let r=await responce.json()
    return r
}

const mainfun= async()=>{
    let todo={
        titel:'Harry',
        body:'bhai',
        userId:1100,

    }
    let todoe = await CreateTodo(todo);
    console.log(todoe)
    console.log(getTodo(5));
} 
mainfun()









// //protype 
// let a={
//     name:"Harry",
//     language:"javascrpit"
// }


// console.log(a);

// let p={
// run:()=>{
//     alert("run")
// }
// }
// //agar apke kise chiz ka feature ko change ye uska protype chnag ekarna hai to use protype

// a.__proto__=p
// // a.run()




class RilwayForm{
    submit(){
        alert("form submited")
    }
    cancel(){
        alert(this.Name+"This form is cancelled");
    }
    fill(givenName){
        this.Name=givenName
    }
}
let harry= new RilwayForm();
harry.fill("Harry")

let ROhan =new RilwayForm();
ROhan.fill("ROhan")



harry.submit();
ROhan.submit();
ROhan.cancel();









































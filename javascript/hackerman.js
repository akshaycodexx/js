document.body.style.backgroundColor="black"
document.body.style.color="green"
let p1= async()=>{
    return new Promise((resolve,recject)=>{
        setTimeout(()=>{
            let t1=document.createElement("p")
            t1.innerHTML="Hacking operation start..............."
            document.body.append(t1)
            resolve(20);
        },2000);
    });
};
p1()
let p2= async()=>{
    return new Promise((resolve,recject)=>{
        setTimeout(()=>{
            let t2=document.createElement("p")
            let a=prompt("Enter the usser name ")
            t2.innerHTML="Usser Access "+a+"...........";
            document.body.append(t2)
            resolve(34);
        },3000);
    });
};
p2()
let p3= async()=>{
    return new Promise((resolve,recject)=>{
        setTimeout(()=>{
            let t3=document.createElement("p")
           
            t3.innerHTML="Usser found Ready to hacking......";
            document.body.append(t3)
            resolve(44);
        },4000);
    });
};
p3()






// inheritance
class animal{
    constructor(name,color){
        this.name=name;
        this.color=color;

    }
    run(){
        console.log(this.name +" is running !");
    }
    shout(){
        console.log(this.name +" is Shouting");
    }
}

class monkey extends animal{
    eatbanana(){
        console.log(this.name + " is eat banana");
    }
    hide(){
        `${this.name} is hidding`
    }
}

let ani=new animal("Buruno","white");
let m=new monkey("kojo","black")
m.eatbanana()
ani.shout()
































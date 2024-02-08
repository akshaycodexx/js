let a=prompt("Hey what is your Age ?")

a=Number.parseInt(a);

if(a>=18){
    alert("You are elagible to vote")
} else{
    alert("you are not elagible to vote")
}

// switch case

switch(a){

    case 0:
        document.write("paida to hole pahle vote dena hai kiya")
        break;
        case 12:
        document.writeln("12 sal ka hai phir v nhi daine milega vote")
        break;
        case 18:
        document.writeln("18 sal ka ho giya raja jiii ab vote de sakte ho")
        break;
        default:
        document.write("Abe ye option me nhi hai option me bass o ,12,18 he hai")


}

class Employee{
    login(){
        console.log("Employee has logged in");
    }
    logout(){
        console.log("Employee has logged out");
    }
    requestLeaves(leaves){
        console.log(`employee has requested ${leaves} lives `);
    }
}

class programmer extends Employee{
requestcoffee(x){
    console.log(`Employee has requested ${x} coffee`);
}
requestLeaves(leaves){
    super.requestLeaves(4)
    console.log("one extra is granted");
}

}

let e=new Employee();
e.login();
e.requestLeaves(3)




















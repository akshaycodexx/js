let runagain=true;

while(runagain){
    let color1=prompt("Enter the color name")
    document.body.style.background = color1;
    runagain=confirm("Do you want to change again")

    if(!runagain){
        break;
    }
}

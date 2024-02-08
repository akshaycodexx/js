let a=document.getElementsByTagName('div')[0]
a.innerHTML=a.innerHTML+'<h1>heloow</h1>';


let divi=document.createElement('div');
divi.innerHTML='<h1>ye div ke anadr create kiye hai sir</h1>'
// a.appendChild(divi)
//  a.append(divi)
//  a.prepend(divi)

//agar counter ke bhar place karn ahia to 

// a.before(divi)
a.after(divi)

//agar ek element ko dusre eemet ke sat replay e karna hai to 
a.replaceWith(divi)



























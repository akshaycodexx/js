let p = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am a promise and I am fulfilled");
        resolve(true);
    }, 5000);
});

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am a promise and I am fulfilled");
        reject(new Error("I am an error"));
    }, 5000);
});

p.then((value) => {
    console.log(value);
});

p2.catch((error) => {
    console.log("Some error occurred in p2:", error.message);
});

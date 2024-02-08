


    let a = document.querySelector(".pp");
    let clickbtn = document.querySelector(".btn"); 

    clickbtn.addEventListener('click', function () {
           
let jokes = [
    "What do kids play when their mom is using the phone? Bored games.",
    "What do you call an ant who fights crime? A vigilANTe!",
    "Why are snails slow? Because they’re carrying a house on their back.",
    "What’s the smartest insect? A spelling bee!"
];
    function jokeselect(jokes) {
        const selectjoke = Math.floor(Math.random() * jokes.length);
        return jokes[selectjoke];
    }
        a.innerHTML = jokeselect(jokes);
    });


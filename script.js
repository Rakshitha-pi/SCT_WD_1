// Navbar scroll effect
window.addEventListener("scroll", function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Number Guess Game
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess(){
    let userGuess = document.getElementById("guessInput").value;
    let result = document.getElementById("result");

    if(userGuess == randomNumber){
        result.innerHTML = "🎉 Correct! You Win!";
        result.style.color = "#00ffcc";
    } 
    else{
        result.innerHTML = "❌ Try Again!";
        result.style.color = "red";
    }
}
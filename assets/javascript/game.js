var numGuesses = 13;
var wordArray = ["programming", "hiphop", "pizza"];

var directionsText = document.getElementById("directions-text")
var hangmanWordText = document.getElementById("hangman-word-text");
var userChoicesText = document.getElementById("user-choices-text")

var word = wordArray[Math.floor(Math.random() * wordArray.length)];

document.onkeyup = function(event) {
   var userGuess = event.key.toLowerCase;


//creating an answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
   answerArray[i] = "_";
   }
var remainingLetters = word.length;

// if (userGuess ===  ){

// }
// else{
//    numGuesses--;
// }

while (remainingLetters > 0) {
    
   //  show status
    (answerArray.join(" "));

   //  player input

    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
     if (guess === null) {
        break;
      } 
else if (guess.length !== 1) {
 alert("Please enter a single letter.");
} else {
// Update the game state with the guess
for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answerArray[j] = guess;
   remainingLetters--;
    }
   }
}}}

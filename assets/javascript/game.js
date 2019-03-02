var numGuesses = 13;
var wordArray = ["programming", "hiphop", "pizza"];
var hangmanBlock = document.createElement("p");
var directionsText = document.getElementById("directions-text")
var hangmanWordText = document.getElementById("hangman-word-text");
var userChoicesText = document.getElementById("user-choices-text")
var userGuess = document.createElement("p");

var word = wordArray[Math.floor(Math.random() * wordArray.length)];


   userGuess.textContent = document.onkeyup= function(){
   userChoicesText.appendChild(userGuess);

  


//creating an answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
   answerArray[i] = "_"; 
   }
var remainingLetters = word.length;


hangmanBlock.textContent = answerArray;
hangmanWordText.appendChild(hangmanBlock);
// if (userGuess ===  ){
 
// }
// else{
//    numGuesses--;
// }

while (remainingLetters > 0) {
    
   //  show status
    (answerArray.join(" "));

   //  player input

    var guess = document.createElement("p");
      guess.textContent = "Guess a letter";
      directionsText.appendChild(guess);

     if (guess === null) {
        break;
      } 
else if  (guess.length !== 1) {
   userChoicesText.textContent =
    
 
   ("Please enter a single letter.");
} else {
// Update the game state with the guess
for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answerArray[j] = guess;
   remainingLetters--;
    }
   }
}} 
}
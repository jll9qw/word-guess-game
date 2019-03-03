var numGuesses = 13;
var wordArray = ["programming", "hiphop", "pizza", "vacation", "graduation", "coffee", "marketing", "basketball"];
var hangmanBlock = document.createElement("p");
var directionsText = document.getElementById("directions-text")
var hangmanWordText = document.getElementById("hangman-word-text");
var userChoicesText = document.getElementById("user-choices-text")
var userGuess = document.createElement("p");
var word = wordArray[Math.floor(Math.random() * wordArray.length)];

window.addEventListener("keyup", checkKeyPress);

function checkKeyPress(event){

   // print the letter that was pressed

   var guesses = window.textContent(event.key);
   userChoicesText.appendChild(guesses);
}

   // check to see if letter is in array
   // if letter is in wordArrary then append to hangman-word-text
   // else decrement numGuesses and append to userChoicesText
   


    //creating an answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
   answerArray[i] = "_"; 
   }
var remainingLetters = word.length;


// Grab an element
// var el = document.getElementById('thingy'),
//     // Make a new div
//     elChild = document.createElement('div');

// // Give the new div some content
// elChild.innerHTML = 'Content';

// // Jug it into the parent element
// el.appendChild(elChild);







// if (userGuess ===  ){
 
// }
// else{
//    numGuesses--;
// }

while (remainingLetters > 0) {
    
   //  show status
    (answerArray.join(" "));

   //  player input

   

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
}
}


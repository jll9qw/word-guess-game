var numGuesses = 13;
var userGuess
var wordArray = ["programming", "rap music", "pizza"];
var answerArray = []
var word = wordArray[Math.floor(Math.random() * wordArray.length)];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
   }
   var remainingLetters = word.length;
var directionsText = document.getElementById("directions-text")
var hangmanWordText = document.getElementById("hangman-word-text");
var userChoicesText = document.getElementById("user-choices-text");

 
   // This function is run whenever the user presses a key.
   document.onkeyup = function(event) {
    var wordArray = wordArray[Math.floor(Math.random() * wordArray.length)];

    // Determines which key was pressed. to lowercase?
    var userGuess = event.key;

    for(var j = 0; j < wordArray.length; j++)

// create an if loop that will append a letter to the hangmanWordText else decrement remaining guesses and append to userChoicesText; 

// if (myFarm[j].charAt(0) === "c" || myFarm[j].charAt(0) === "o") {
//     alert("Starts with a c or an o!");
//   }
if (wordArray[j].char)
numGuesses--
 
// Display the user's wrong choices.
userChoicesText.textContent = userGuess;
userChoicesText.appendChild
}
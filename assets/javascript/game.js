let wordIndex = 0;
let wins = 0;
let losses = 0;


// Word bank
let arr = ["celtics", "nets", "knicks", "sixers", "raptors", "bulls", "cavs", "pistons", "pacers", "bucks", "hawks", "hornets", "heat", "magic", "wizards", "nuggets", "timberwolves", "thunder", "trailblazers", "jazz", "warriors", "clippers", "lakers", "suns", "kings", "mavericks", "rockets", "grizzlies", "pelicans", "spurs"];

//Array for letter checking
let letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



let letterPlaceholders = []
let guessedLetters =[]

//Variable for user input
let userChoicesText = document.getElementById("user-choices-text");


// Gennerates a random word from the word bank array
let word = arr[Math.floor(Math.random() * arr.length)];

//create placeholders
for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      letterPlaceholders.push(" ");
    } else {
      letterPlaceholders.push("_");
    }
  }


// Sets the length for remaining letters
let remainingLetters = word.length;

// Array for answers
let answerArray = [];


// Logs the user input User's input 
document.onkeyup = function(event) {
   
 
   userChoicesText.textContent = event.key;
   console.log(userChoicesText.textContent);

// Converts the word bank to a string of letters
   for (var i = 0; i < word.length; i++) {
      if (word[i] === "+") {
          answerArray[i] = "&nbsp;";
      } else {
          //Replace word answer with "_"s
          answerArray[i] = "_";
      }

// Checks if letter pressed is in the answer
function letterGuess(guess){
   if (letterArr.indexOf(guess.key > -1)){
      correctCheckGuess(guess)
   } 
}

letterGuess();
function correctGuess(guess) {
   if (answerArray.indexOf(guess.key.toUpperCase()) < 0) {
       addCorrectLetter(guess);
   }
}
correctGuess();

function addCorrectLetter(guess) {
   for (var i = 0; i < word.length; i++) {
       //If guess matches an existing letter in the answer.
       if (guess.key === word[i]) {
           //Push correct letter to answerArray as upperCase.
           answerArray[i] = guess.key.toUpperCase();
           showWord();
           //Reduce letters remaining for win by one.
           remainingLetters--;
           //If letters left has reached 0, user wins. 
           if (remainingLetters === 0) {
               //Add 1 to win score.
               winScore++;
            
           }
       }
   }
}
}
}

// function showWord() {
//    var currentWordDisplay = document.querySelector("#hangman-word-text");
//    currentWordDisplay.innerHTML = answerArray.join(" ");
// };


// function displayWins() {
//    var winsDisplay = document.querySelector("#winsDisplay");
//    winsDisplay.textContent = winScore;
// };

// //Displays the letters the user has guessed.
// function displayGuessesMade() {
//    var guessesMadeDisplay = document.querySelector("#user-choices-text");
//    guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
// };

// //Displays how many user guesses are left.
// function displayGuessesLeft() {
//    var guessesLeftDisplay = document.querySelector("#guessesLeftDisplay");
//    guessesLeftDisplay.textContent = guessesLeft;

   


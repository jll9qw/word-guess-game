// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// Word bank
let arr = ["celtics", "nets", "knicks", "sixers", "raptors", "bulls", "cavs", "pistons", "pacers", "bucks", "hawks", "hornets", "heat", "magic", "wizards", "nuggets", "timberwolves", "thunder", "trailblazers", "jazz", "warriors", "clippers", "lakers", "suns", "kings", "mavericks", "rockets", "grizzlies", "pelicans", "spurs"];

// Randomly chosen word from the array
let chosenWord = "";

// This will break the solution into individual letters to be stored in array.
let lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution.
let numBlanks = 0;

// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
let blanksAndSuccesses = [];

let wrongGuesses =[]

//Variable for user input
let userChoicesText = document.getElementById("user-choices-text");
let lettersGuessed = ""

function startGame() {

    // Reset the guesses back to 0.
    numGuesses = 9;
  
    // Solution chosen randomly from arr.
    chosenWord = arr[Math.floor(Math.random() * arr.length)];
  
    lettersInChosenWord = chosenWord.split("");
  
    numBlanks = lettersInChosenWord.length;
  
    console.log(chosenWord);
    blanksAndSuccesses = [];
    wrongGuesses = [];
  
    for (var i = 0; i < numBlanks; i++) {
      blanksAndSuccesses.push("_");
    }
  
    // Print the initial blanks in console.
    console.log(blanksAndSuccesses);
  
    // Reprints the guessesLeft to 9.
    document.getElementById("guesses-left").innerHTML = numGuesses;
  
    // Prints the blanks at the beginning of each round in the HTML.
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  
    // Clears the wrong guesses from the previous round.
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
  }
  
  function checkLetters(letter) {
  
    // This boolean will be toggled based on whether or not
    // a user letter is found anywhere in the word.
    var letterInWord = false;
  
    // Check if a letter exists inside the array at all.
    for (var i = 0; i < numBlanks; i++) {
  
      if (chosenWord[i] === letter) {
  
        letterInWord = true;
      }
    }
  
    if (letterInWord) {
  
      // Loop through the word
      for (var j = 0; j < numBlanks; j++) {
  
        // Populate the blanksAndSuccesses with every instance of the letter.
        if (chosenWord[j] === letter) {
  
          // Here we set specific blank spaces to equal the correct letter
          // when there is a match.
          blanksAndSuccesses[j] = letter;
        }
      }
  
      // Log the current blanks and successes for testing.
      console.log(blanksAndSuccesses);
    }
  
    // If the letter doesn't exist at all...
    else {
  
      // Then we add the letter to the list of wrong letters.
      wrongGuesses.push(letter);
  
      // We also subtract one of the guesses.
      numGuesses--;
  
    }
  
  }
  
  function roundComplete() {
  
    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);
  
    // HTML UPDATES
    // ============
  
    // Update the HTML to reflect the new number of guesses.
    document.getElementById("guesses-left").innerHTML = numGuesses;
  
    // This will print the array of guesses and blanks onto the page.
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  
    // This will print the wrong guesses onto the page.
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
  
    // If our Word Guess string equals the solution.
    // (meaning that we guessed all the letters to match the solution)...
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
  
      // Add to the win counter
      winCounter++;
  
      // Give the user an alert
      alert("You win!");
  
      // Update the win counter in the HTML
      document.getElementById("wins").innerHTML = winCounter;
  
      // Restart the game
      startGame();
    }
  
    else if (numGuesses === 0) {
  
      // Add to the loss counter
      lossCounter++;
  
      // Give the user an alert
      alert("You lose");
  
      // Update the loss counter in the HTML
      document.getElementById("losses").innerHTML = lossCounter;
  
      // Restart the game
      startGame();
  
    }
  
  }
  

  startGame();
  
  // Then initiates the function for capturing key clicks.
  document.onkeyup = function(event) {
  event.preventDefault();
    // Converts all key clicks to lowercase letters.
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
  
    // Runs the code to check for correct guesses.
    checkLetters(letterGuessed);
  
    // Runs the code that ends each round.
    roundComplete();
  };  
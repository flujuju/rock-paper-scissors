console.log("Hello");
//ROCK PAPER SCISSORS

// let computer choose its play, randomly
const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice (arrayOfChoices) {
    let itemNumber = Math.floor(Math.random()* arrayOfChoices.length);
    let computerChoice = arrayOfChoices[itemNumber];
    return computerChoice;
}

console.log(getComputerChoice(OPTIONS));

// prompt user to choose his play
// verify that user choice is valid
// display who played what
// define who won
// calculate and display score
// define winner in the best of five fashion

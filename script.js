console.log("Hello");
//ROCK PAPER SCISSORS

// let computer choose its play, randomly
const OPTIONS = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice (arrayOfChoices) {
    let itemNumber = Math.floor(Math.random()* arrayOfChoices.length);
    let computerChoice = arrayOfChoices[itemNumber];
    return computerChoice;
}

// console.log(getComputerChoice(OPTIONS));

// prompt user to choose his play
// verify that user choice is valid
function getUserSelection() {
    let userChoice;
    let valid; 

    
    while (!valid) {
        if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"){
            userChoice = prompt("Make your selection (rock, paper or scissors)");
            userChoice = userChoice.toLowerCase();
        }
        
        else {
            valid = true;
        }
    }

    return userChoice;
    
    
}

//console.log(getUserSelection());

// define who won
function playRound(computerSelection, playerSelection) {
    switch(computerSelection) {
        case "rock":
            if(playerSelection == "rock") {
                console.log("It's a draw");
            }
            else if (playerSelection == "paper") {
                console.log("player wins !");
                playerScore += 1;
            }
            else {
                console.log("Computer wins !");
                computerScore += 1;
            }
            break;

        case "paper":
            if(playerSelection == "paper") {
                console.log("It's a draw");
            }
            else if (playerSelection == "scissors") {
                console.log("player wins !");
                playerScore += 1;
            }

            else {
                console.log("Computer wins !");
                computerScore += 1;
            }
            break;

        case "scissors":
            if(playerSelection == "scissors") {
                console.log("It's a draw");
            }
            else if (playerSelection == "rock") {
                console.log("player wins !");
                playerScore += 1;
            }
            else {
                console.log("Computer wins !");
                computerScore += 1;
            }
            break;
    }

}

function displayScore(playerScore, computerScore){
    console.log(`SCORE - player : ${playerScore} // computer : ${computerScore}`);
}

function game(){
    for (let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice(OPTIONS);
        console.log(computerChoice);
        let userSelection = getUserSelection();
        playRound(computerChoice, userSelection);
        displayScore(playerScore, computerScore);


    }

    console.log(`Game is finished, final score is :`);
    displayScore(playerScore, computerScore);


    

}

game()



// display who played what



// calculate and display score
// define winner in the best of five fashion
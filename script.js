console.log("Hello");
//ROCK PAPER SCISSORS

// let computer choose its play, randomly
const OPTIONS = ["rock", "paper", "scissors"];
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let counter = 0;

function getComputerChoice (arrayOfChoices) {
    let itemNumber = Math.floor(Math.random()* arrayOfChoices.length);
    let computerChoice = arrayOfChoices[itemNumber];
    return computerChoice;
}

//computerSelection = getComputerChoice(OPTIONS)
//console.log(computerSelection);

// prompt user to choose his play
// verify that user choice is valid

    
const divButtons = document.querySelector('.buttons')

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    playRound("rock");
    console.log("rock");
 });

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    playRound('paper');
});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    playRound("scissors");
});

const divResult = document.querySelector('.result');
const divScore = document.querySelector('.score');
    
   

    
    
    

//console.log(getUserSelection());

// define who won
function playRound(playerSelection) {
    let computerSelection = getComputerChoice(OPTIONS);
    switch(computerSelection) {
        case "rock":
            if(playerSelection == "rock") {
                divResult.textContent = "It's a draw!";
                displayScore();
                counter += 1;
                if (counter == 5) {
                    divButtons.removeChild(btnRock);
                    divButtons.removeChild(btnPaper);
                    divButtons.removeChild(btnScissors);
                    divButtons.textContent="GAME OVER !";
                }

            }
            else if (playerSelection == "paper") {
                divResult.textContent = "player wins !";
                playerScore += 1;
                displayScore();
                counter += 1;
                if (counter == 5) {
                    divButtons.removeChild(btnRock);
                    divButtons.removeChild(btnPaper);
                    divButtons.removeChild(btnScissors);
                    divButtons.textContent="GAME OVER !";
                }
            }
            else {
                divResult.textContent="Computer wins !";
                computerScore += 1;
                displayScore();
                counter += 1;
                if (counter == 5) {
                    divButtons.removeChild(btnRock);
                    divButtons.removeChild(btnPaper);
                    divButtons.removeChild(btnScissors);
                    divButtons.textContent="GAME OVER !";
                }
            }
            break;

        case "paper":
            if(playerSelection == "paper") {
                divResult.textContent = "It's a draw";
                displayScore();
                counter += 1;
                if (counter == 5) {
                    divButtons.removeChild(btnRock);
                    divButtons.removeChild(btnPaper);
                    divButtons.removeChild(btnScissors);
                    divButtons.textContent="GAME OVER !";
                }
            }
            else if (playerSelection == "scissors") {
                divResult.textContent = "player wins !";
                playerScore += 1;
                displayScore();
                counter += 1;
                if (counter == 5) {
                    divButtons.removeChild(btnRock);
                    divButtons.removeChild(btnPaper);
                    divButtons.removeChild(btnScissors);
                    divButtons.textContent="GAME OVER !";
                }
            }

            else {
                divResult.textContent = "Computer wins !";
                computerScore += 1;
                displayScore();
                counter += 1;
                if (counter == 5) {
                    divButtons.removeChild(btnRock);
                    divButtons.removeChild(btnPaper);
                    divButtons.removeChild(btnScissors);
                    divButtons.textContent="GAME OVER !";
                }
            }
            break;

        case "scissors":
            if(playerSelection == "scissors") {
                divResult.textContent = "It's a draw";
                displayScore();
                counter += 1;
                if (counter == 5) {
                    divButtons.removeChild(btnRock);
                    divButtons.removeChild(btnPaper);
                    divButtons.removeChild(btnScissors);
                    divButtons.textContent="GAME OVER !";
                }
            }
            else if (playerSelection == "rock") {
                divResult.textContent = "player wins !";
                playerScore += 1;
                displayScore();
                counter += 1;
                if (counter == 5) {
                    divButtons.removeChild(btnRock);
                    divButtons.removeChild(btnPaper);
                    divButtons.removeChild(btnScissors);
                    divButtons.textContent="GAME OVER !";
                }
            }
            else {
                divResult.textContent = "Computer wins !";
                computerScore += 1;
                displayScore();
                counter += 1;
                if (counter == 5) {
                    divButtons.removeChild(btnRock);
                    divButtons.removeChild(btnPaper);
                    divButtons.removeChild(btnScissors);
                    divButtons.textContent="GAME OVER !";
                }
            }
            break;
    }

}

function displayScore(){
    divScore.textContent = `SCORE - player : ${playerScore} // computer : ${computerScore}`;
}

//function game(){
//    for (let i = 0; i < 5; i++){
//       let computerChoice = getComputerChoice(OPTIONS);      console.log(computerChoice);
//        let userSelection = getUserSelection();
//       playRound(computerChoice, userSelection);
//        displayScore(playerScore, computerScore);


//    }

//    console.log(`Game is finished, final score is :`);
//    displayScore(playerScore, computerScore);


    

//}

//game()



// display who played what



// calculate and display score
// define winner in the best of five fashion
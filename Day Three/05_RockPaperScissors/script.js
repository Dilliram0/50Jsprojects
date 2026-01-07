const buttons = document.querySelectorAll('button');
const userScore = document.querySelector('#user-score');
const compScore = document.querySelector('#computer-score')
const result = document.querySelector('#result')

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button)=>{
    button.addEventListener('click',()=> {
        const gameResult = playGame(button.id,computerPlay())
        // console.log(gameResult);
        result.innerHTML = gameResult;

        // console.log("User CLicked",button.id);
        // console.log("Computer CLicked",computerPlay());

    })
});

function computerPlay(){
    const choices = ["rock","paper","scissors"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice]
}

computerPlay();

function playGame(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        return "It is a tie";
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") 
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper"))
        {
            playerScore++;
            userScore.innerHTML = playerScore;
            return "You win! " + playerSelection + " beats " + computerSelection;
        }
        else {
            computerScore++;
            compScore.innerHTML = computerScore;
            return "Computer wins " + computerSelection + " beats " + playerSelection;
        }

    
}


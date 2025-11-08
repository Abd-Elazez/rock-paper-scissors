const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}

function getHumanChoice() {
    let userChoice = prompt("Pick one of (rock, paper, scissors)").toLowerCase();
    return userChoice;
}

let computerScore = 0;
let humanScore = 0;

function playRound() {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    if(computerSelection == humanSelection) {
        console.log("DRAW.. let's go again");
        console.log(`Your score:${humanScore} Computer:${computerScore}`);
    } else if(
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log(`YOU WON. ${humanSelection} beats ${computerSelection}`);
        humanScore++;
        console.log(`Your score:${humanScore} Computer:${computerScore}`);
    } else {
        console.log(`Not your lucky day. ${computerSelection} beats ${humanSelection}`);
        computerScore++;
        console.log(`Your score:${humanScore} Computer:${computerScore}`);
    }
}

function playGame() {
    for(let i = 0; i < 5; i++){
        console.log(`--- ROUND ${i + 1} ---`);
        playRound();
    }

    console.log("=== Final Result ===");
    if (humanScore > computerScore) {
        console.log(`You win the game! 🏆 (${humanScore} - ${computerScore})`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins the game! 🤖 (${computerScore} - ${humanScore})`);
    } else {
        console.log(`It's a tie! (${humanScore} - ${computerScore})`);
    }
}
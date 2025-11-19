const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

function getComputerChoice() {
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}

function playRound(userChoice) {
    const computerSelection = getComputerChoice();
    const humanSelection = userChoice;
    let message = "";

    if(computerSelection == humanSelection) {
        message = `DRAW.. let's go again 
        Your score:${humanScore} Computer:${computerScore}`;
    } else if(
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        message = `YOU WON. ${humanSelection} beats ${computerSelection} 
        Your score:${humanScore} Computer:${computerScore}`;
    } else {
        computerScore++;
        message = `Not your lucky day. ${computerSelection} beats ${humanSelection} 
        Your score:${humanScore} Computer:${computerScore}`;
    }

    resultDiv.textContent = message;
}

function showFinalResult() {
    let finalMessage = '';
    if (humanScore > computerScore) {
        finalMessage = `You win the game! 🏆 (${humanScore} - ${computerScore})`;
    } else if (humanScore < computerScore) {
        finalMessage = `Computer wins the game! 🤖 (${computerScore} - ${humanScore})`;
    } else {
        finalMessage = `It's a tie! (${humanScore} - ${computerScore})`;
    }

     resultDiv.textContent = finalMessage;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultDiv.textContent = "";
}

const resultDiv = document.querySelector(".result");
const buttonsDiv = document.querySelector(".buttonsDiv")
const gameButtons = document.querySelectorAll(".oneRoundRock, .oneRoundPaper, .oneRoundScissors");
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

gameButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (humanScore < maxScore && computerScore < maxScore) {
        playRound(btn.value);

        if (humanScore === maxScore || computerScore === maxScore) {
            showFinalResult();
            buttonsDiv.appendChild(resetButton);
        }
    }
  });
});

resetButton.addEventListener("click", () => {
    resetGame();
    resetButton.remove();
})


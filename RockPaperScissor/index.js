const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissor" ? "YOU WIN!" : "YOU LOSE";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE";
        break;
      case "scissor":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE";
        break;
    }
  }

  resultDisplay.classList.remove("greenText", "redText");

  playerDisplay.textContent = `PLAYER ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  if (result === "YOU WIN!") {
    resultDisplay.classList.add("greenText");
    playerScore += 1;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === "YOU LOSE") {
    resultDisplay.classList.add("redText");
    computerScore += 1;
    computerScoreDisplay.textContent = computerScore;
  }
}

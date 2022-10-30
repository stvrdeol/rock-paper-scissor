const playerOptions = document.querySelectorAll(".player-options>button");
const playerHand = document.querySelector(".player-icons .fist");
const computerHand = document.querySelector(".computer-icons .fist");
const playerIconsDiv = document.querySelector(".player-icons");
const playAgain = document.querySelector(".play-again");
const computerIconsDiv = document.querySelector(".computer-icons");
const result = document.querySelector(".result p");
const ComputerScore = document.querySelector(".computer-score span");
const playerScore = document.querySelector(".player-score span");
// game functionality
let playerChoice;
let computerChoice;
let computerWins = JSON.parse(localStorage.getItem("computer-score")) || [];
let playerWins = JSON.parse(localStorage.getItem("player-score")) || [];
ComputerScore.textContent = computerWins.length;
playerScore.textContent = playerWins.length;
playerOptions.forEach((Option) => {
  Option.addEventListener("click", (e) => {
    playerChoice = e.target.title;
    playerHand.classList.add("animation");
    computerHand.classList.add("animation");
  });
});
playerHand.addEventListener("animationend", play);
playAgain.addEventListener("click", reset);

// functions defined
let rock = `<i class="fa-solid fa-hand-back-fist" title="rock"></i>`;
let paper = `<i class="fa-solid fa-hand" title="paper"></i>`;
let scissor = `<i class="fa-solid fa-hand-scissors" title="scissor"></i>`;
let hand = `<i class="fa-solid fa-hand-fist fist "></i>;`;

function play() {
  computerPlay();
  switch (playerChoice) {
    case "rock":
      playerIconsDiv.innerHTML = rock;
      break;
    case "paper":
      playerIconsDiv.innerHTML = paper;
      break;
    case "scissor":
      playerIconsDiv.innerHTML = scissor;
      break;
    default:
      break;
  }
  switch (computerChoice) {
    case "rock":
      computerIconsDiv.innerHTML = rock;
      break;
    case "paper":
      computerIconsDiv.innerHTML = paper;
      break;
    case "scissor":
      computerIconsDiv.innerHTML = scissor;
      break;
    default:
      break;
  }
  winner();
}

function reset() {
  location.reload();
}
// computer functionality

let choices = ["rock", "paper", "scissor"];

function computerPlay() {
  let number = Math.floor(Math.random() * 3);
  computerChoice = choices[number];
}

// for deciding winner

function winner() {
  if (computerChoice == playerChoice) {
    result.textContent = "Draw";
  } else if (
    (computerChoice == "rock" && playerChoice == "scissor") ||
    (computerChoice == "scissor" && playerChoice == "paper") ||
    (computerChoice == "paper" && playerChoice == "rock")
  ) {
    result.textContent = "Computer Wins";
    computerWins.push(1);
  } else {
    result.textContent = "Player Wins";
    playerWins.push(1);
  }
  playAgain.style.display = "inline-block";
  updateScore();
}
function updateScore() {
  ComputerScore.textContent = computerWins.length;
  playerScore.textContent = playerWins.length;
  localStorage.setItem("computer-score", JSON.stringify(computerWins));
  localStorage.setItem("player-score", JSON.stringify(playerWins));
}

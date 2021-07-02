const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WIN";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN";
let gameIsRunning = false;

const getPlayerChoice = () => {
  const enteredvalue = prompt(
    `${ROCK} , ${PAPER} or ${SCISSOR} ?`,
    ""
  ).toUpperCase();
  if (
    enteredvalue !== ROCK &&
    enteredvalue !== PAPER &&
    enteredvalue !== SCISSOR
  ) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you ! `);
    return DEFAULT_USER_CHOICE;
  }
  return enteredvalue;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const displayTheWinner = (pChoice, cChoice) =>
  pChoice === cChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSOR) ||
      (cChoice === SCISSOR && pChoice === ROCK)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting..!");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = displayTheWinner(playerSelection, computerSelection);
  let message = `You picked ${playerSelection}, computer picked ${computerSelection}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + ` had a draw`;
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + `won`;
  } else message = message + `lost`;

  alert(message);
  gameIsRunning = false;
});

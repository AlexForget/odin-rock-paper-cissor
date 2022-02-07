/* ----- DÉCLARATION DES VARIABLES ----- */

let playerScore = 0;
let computerScore = 0;
let round = 0;

/* ----- DÉCLARATIOM DES DOCUMENT QUERY ----- */
const btnList = document.querySelectorAll("button");
const result = document.querySelector("#result");
const roundCounter = document.querySelector("#round-counter");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");
const finalResult = document.querySelector("#final-result");
const imgComputerChoice = document.querySelector("#computer-choice");

const score = document.querySelector("#score");

score.setAttribute("style", "white-space: pre;");

/* ----- EVENTLISTENER ----- */

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let indexComputerPlay = computerPlay();
    computerChoiceImg(indexComputerPlay);
    playARound(btn.value, indexComputerPlay);
  });
});

/* ----- FUNCTIONS ----- */

// Modifier l'image de la sélection du computer selon le choix aléatoire
let computerChoiceImg = (choice) => {
  if (choice === "paper") {
    document.querySelector("#computer-choice").src = "images/paper.png";
  }
  if (choice === "scissor") {
    document.querySelector("#computer-choice").src = "images/scissors.png";
  }
  if (choice === "rock") {
    document.querySelector("#computer-choice").src = "images/fist.png";
  }
};

// Déterminer de façon aléatoire le choix de l'ordinateur
let computerPlay = () => {
  let computerChoice = ["rock", "paper", "scissor"];
  let indexAleatoire = Math.floor(Math.random() * 3 + 1) - 1;
  return computerChoice[indexAleatoire];
};

// Mettre fin à la partie quand un joueur atteind le score de 5
let checkEndgame = (winner) => {
  finalResult.textContent += `\r\n\r\n${winner} as won the game`;
  btnList.forEach((btn) => {
    btn.disabled = true;
  });
};

// Determiner le gagnant d'une round de roche papier scisseau et calculer le score
let playARound = (userPlay, computerPlay) => {
  round++;
  if (computerPlay == "rock" && userPlay == "scissor") {
    result.textContent = `You lose! ${computerPlay} beat ${userPlay}`;
    computerScore++;
  } else if (computerPlay == "rock" && userPlay == "paper") {
    result.textContent = `You win! ${userPlay} beat ${computerPlay}`;
    playerScore++;
  } else if (computerPlay == "paper" && userPlay == "scissor") {
    result.textContent = `You win! ${userPlay} beat ${computerPlay}`;
    playerScore++;
  } else if (computerPlay == "paper" && userPlay == "rock") {
    result.textContent = `You lose! ${computerPlay} beat ${userPlay}`;
    computerScore++;
  } else if (computerPlay == "scissor" && userPlay == "paper") {
    result.textContent = `You lose! ${computerPlay} beat ${userPlay}`;
    computerScore++;
  } else if (computerPlay == "scissor" && userPlay == "rock") {
    result.textContent = `You win! ${userPlay} beat ${computerPlay}`;
    playerScore++;
  } else {
    result.textContent = `It's a tie! ${computerPlay} equal ${userPlay}`;
  }

  UpdateScoreAndRound();

  if (playerScore === 5) {
    checkEndgame("Player");
  }
  if (computerScore === 5) {
    checkEndgame("Computer");
  }
};

// Mettre à jour l'affichage de la round et des scores
let UpdateScoreAndRound = () => {
  roundCounter.textContent = `Round : ${round}`;
  playerScoreDiv.textContent = `Player : ${playerScore}`;
  computerScoreDiv.textContent = `Computer : ${computerScore}`;
};

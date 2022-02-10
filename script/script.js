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
const imgComputerChoice = document.querySelector("#computer-choice-img");
const computerChoice = document.querySelector("#computer-choice");
const roundResult = document.querySelector("#round-result");

const score = document.querySelector("#score");

score.setAttribute("style", "white-space: pre;");

/* ----- LOADING INITIAL ----- */

window.onload = (e) => {
  roundCounter.textContent = `Round : ${round}`;
  playerScoreDiv.textContent = `Joueur : ${playerScore}`;
  computerScoreDiv.textContent = `Ordinateur : ${computerScore}`;
  computerChoice.textContent = `Choix de l'ordinateur :`;
};

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
  if (choice === "papier") {
    document.querySelector("#computer-choice-img").src = "images/paper.png";
  }
  if (choice === "ciseau") {
    document.querySelector("#computer-choice-img").src = "images/scissors.png";
  }
  if (choice === "roche") {
    document.querySelector("#computer-choice-img").src = "images/fist.png";
  }
};

// Déterminer de façon aléatoire le choix de l'ordinateur
let computerPlay = () => {
  let computerChoice = ["roche", "papier", "ciseau"];
  let indexAleatoire = Math.floor(Math.random() * 3 + 1) - 1;
  return computerChoice[indexAleatoire];
};

// Mettre fin à la partie quand un joueur atteind le score de 5
let checkEndgame = (winner) => {
  finalResult.textContent = `${winner} a gagné la partie`;
  btnList.forEach((btn) => {
    btn.disabled = true;
  });
};

// Determiner le gagnant d'une round de roche papier scisseau et calculer le score
let playARound = (userPlay, computerPlay) => {
  round++;
  if (computerPlay == "roche" && userPlay == "ciseau") {
    roundResult.textContent = `Vous avez perdu! ${computerPlay} bat ${userPlay}`;
    computerScore++;
  } else if (computerPlay == "roche" && userPlay == "papier") {
    roundResult.textContent = `Vous avez gagné! ${userPlay} bat ${computerPlay}`;
    playerScore++;
  } else if (computerPlay == "papier" && userPlay == "ciseau") {
    roundResult.textContent = `Vous avez gagné! ${userPlay} bat ${computerPlay}`;
    playerScore++;
  } else if (computerPlay == "papier" && userPlay == "roche") {
    roundResult.textContent = `Vous avez perdu! ${computerPlay} bat ${userPlay}`;
    computerScore++;
  } else if (computerPlay == "ciseau" && userPlay == "papier") {
    roundResult.textContent = `Vous avez perdu! ${computerPlay} bat ${userPlay}`;
    computerScore++;
  } else if (computerPlay == "ciseau" && userPlay == "roche") {
    roundResult.textContent = `Vous avez gagné! ${userPlay} bat ${computerPlay}`;
    playerScore++;
  } else {
    roundResult.textContent = `Round nulle! ${computerPlay} égal ${userPlay}`;
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
  playerScoreDiv.textContent = `Joueur : ${playerScore}`;
  computerScoreDiv.textContent = `Ordinateur : ${computerScore}`;
};

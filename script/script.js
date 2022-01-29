/* ----- DÉCLARATION DES VARIABLES ----- */

let playerScore = 0;
let computerScore = 0;
const btnList = document.querySelectorAll("button");
const result = document.querySelector("#result");
const score = document.querySelector("#score");

score.setAttribute("style", "white-space: pre;");

// Déterminer de façon aléatoire le choix de l'ordinateur
let computerPlay = () => {
  let computerChoice = ["rock", "paper", "scissor"];
  let indexAleatoire = getRandomNumber() - 1;
  return computerChoice[indexAleatoire];
};

// Retourner un nombre aléatoire entre 1 et 3 inclusiement
let getRandomNumber = () => Math.floor(Math.random() * 3 + 1);

// Determiner le gagnant d'une round de roche papier scisseau et calculer le score
let playARound = (userPlay, computerPlay) => {
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

  score.textContent = `Player : ${playerScore}\r\nComputer : ${computerScore}`;
  if (playerScore === 5) {
    checkEndgame("Player");
  }
  if (computerScore === 5) {
    checkEndgame("Computer");
  }
};

// Mettre fin à la partie quand un joueur atteind le score de 5
let checkEndgame = (winner) => {
  score.textContent += `\r\n\r\n${winner} as won the game`;
  btnList.forEach((btn) => {
    btn.disabled = true;
  });
};

/* ----- VERSION 2 ----- */

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playARound(btn.value, computerPlay());
  });
});

/* ----- VERSION 1 ----- */

/*
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");

btnRock.addEventListener("click", function (e) {
  playARound("rock", computerPlay(), 0);
});

btnPaper.addEventListener("click", function () {
  playARound("rock", computerPlay(), 0);
});

btnScissor.addEventListener("click", function () {
  playARound("scissor", computerPlay(), 0);
});*/

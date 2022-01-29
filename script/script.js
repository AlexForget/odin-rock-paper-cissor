/* ----- DÉCLARATION DES VARIABLES ----- */

let playerScore = 0;
let computerScore = 0;
const btnList = document.querySelectorAll("button");
const result = document.querySelector("#result");
const score = document.querySelector("#score");

score.setAttribute("style", "white-space: pre;");

/* ----- EVENTLISTENER ----- */

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playARound(btn.value, computerPlay());
  });
});

// Déterminer de façon aléatoire le choix de l'ordinateur
let computerPlay = () => {
  let computerChoice = ["rock", "paper", "scissor"];
  let indexAleatoire = Math.floor(Math.random() * 3 + 1) - 1;
  return computerChoice[indexAleatoire];
};

// Mettre fin à la partie quand un joueur atteind le score de 5
let checkEndgame = (winner) => {
  score.textContent += `\r\n\r\n${winner} as won the game`;
  btnList.forEach((btn) => {
    btn.disabled = true;
  });
};

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

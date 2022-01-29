// Déterminer de façon aléatoire le choix de l'ordinateur
let computerPlay = () => {
  let computerChoice = ["rock", "paper", "scissor"];
  let indexAleatoire = getRandomNumber() - 1;
  return computerChoice[indexAleatoire];
};

// Retourner un nombre aléatoire entre 1 et 3 inclusiement
let getRandomNumber = () => Math.floor(Math.random() * 3 + 1);

// Enregistrer le choix du joueur
let userPlay = () => {
  let userPlay = prompt("Faite votre choix").toLowerCase();

  while (userPlay != "rock" && userPlay != "paper" && userPlay != "scissor") {
    userPlay = prompt("Choix invalide! \nFaite votre choix").toLowerCase();
  }

  return userPlay;
};

// Determiner le gagnant d'une round de roche papier scisseau
let playARound = (userPlay, computerPlay, score) => {
  if (computerPlay == "rock" && userPlay == "scissor") {
    console.log(`You lose! ${computerPlay} beat ${userPlay}`);
    score -= 1;
  } else if (computerPlay == "rock" && userPlay == "paper") {
    console.log(`You win! ${userPlay} beat ${computerPlay}`);
    score += 1;
  } else if (computerPlay == "paper" && userPlay == "scissor") {
    console.log(`You win! ${userPlay} beat ${computerPlay}`);
    score += 1;
  } else if (computerPlay == "paper" && userPlay == "rock") {
    console.log(`You lose! ${computerPlay} beat ${userPlay}`);
    score -= 1;
  } else if (computerPlay == "scissor" && userPlay == "paper") {
    console.log(`You lose! ${computerPlay} beat ${userPlay}`);
    score -= 1;
  } else if (computerPlay == "scissor" && userPlay == "rock") {
    console.log(`You win! ${userPlay} beat ${computerPlay}`);
    score += 1;
  } else {
    console.log(`It's a tie! ${computerPlay} equal ${userPlay}`);
  }

  //return score;
};

// Compléter une partie de roche papier scisseau de 5 round
let game = () => {
  let score = 0;

  for (let i = 1; i < 6; i++) {
    score = playARound(userPlay(), computerPlay(), score);
  }

  if (score > 0) {
    console.log("You won the mach!!!");
  } else if (score < 0) {
    console.log("You lose the match...");
  } else {
    console.log("It's a tie.");
  }
};

/*   AJOUT POUR PORTION UI     */

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

/* ----- VERSION 2 ----- */

const btnList = document.querySelectorAll("button");

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playARound(btn.value, computerPlay(), 0);
  });
});

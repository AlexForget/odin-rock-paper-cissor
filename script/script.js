// Déterminer de façon aléatoire le choix de l'ordinateur
function computerPlay() {
  let computerChoice = ["rock", "paper", "scissor"];
  let indexAleatoire = getRandomNumber() - 1;
  return computerChoice[indexAleatoire];
}

// Retourner un nombre aléatoire entre 1 et 3 inclusiement
function getRandomNumber() {
  return Math.floor(Math.random() * 3 + 1);
}

// Enregistrer le choix du joueur
function userPlay() {
  let userPlay = prompt("Faite votre choix").toLowerCase();

  while (userPlay != "rock" && userPlay != "paper" && userPlay != "scissor") {
    userPlay = prompt("Choix invalide! \nFaite votre choix").toLowerCase();
  }

  return userPlay;
}

// Determiner le gagnant d'une round de roche papier cisseau
function playARound(userPlay, computerPlay) {
  let result;

  if (computerPlay === "rock" && userPlay === "scissor") {
    result = `You lose! ${computerPlay} beat ${userPlay}`;
  } else if (computerPlay === "rock" && userPlay === "paper") {
    result = `You win! ${userPlay} beat ${computerPlay}`;
  } else if (computerPlay === "paper" && userPlay === "scissor") {
    result = `You win! ${userPlay} beat ${computerPlay}`;
  } else if (computerPlay === "paper" && userPlay === "rock") {
    result = `You lose! ${computerPlay} beat ${userPlay}`;
  } else if (computerPlay === "scissor" && userPlay === "paper") {
    result = `You lose! ${computerPlay} beat ${userPlay}`;
  } else if (computerPlay === "scissor" && userPlay === "rock") {
    result = `You win! ${userPlay} beat ${computerPlay}`;
  } else {
    result = `It's a tie! ${computerPlay} equal ${userPlay}`;
  }
  return result;
}

console.log(playARound(userPlay(), computerPlay()));

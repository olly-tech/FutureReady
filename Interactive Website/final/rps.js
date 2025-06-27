/* If using this code, change HTML button to have onclick=playRound('r') */
// userInput() FXN CHANGED TO playRound() AND MORE HELPER FXNS ADDED

let playerCounter = 0;
let cpuCounter = 0;

console.log("Game started!");

// Called when the player clicks a button
function playRound(choice) {
  if (choice === "r") {
    console.log("You chose ROCK");
  } else if (choice === "p") {
    console.log("You chose PAPER");
  } else if (choice === "s") {
    console.log("You chose SCISSORS");
  }

  changeImage("player", choice);
  let cpuChoice = cpuChoose();
  let result = checkWinner(choice, cpuChoice);

  updateScore(result);
  checkGameOver();
}

// CPU randomly picks a choice
function cpuChoose() {
  let number = Math.floor(Math.random() * 3);
  let choice = "unknown";

  if (number === 0) {
    choice = "r";
    console.log("CPU chose ROCK");
  } else if (number === 1) {
    choice = "p";
    console.log("CPU chose PAPER");
  } else {
    choice = "s";
    console.log("CPU chose SCISSORS");
  }

  changeImage("cpu", choice);
  return choice;
}

// Compare the player's choice and CPU's choice
function checkWinner(playerChoice, cpuChoice) {
  if (playerChoice === cpuChoice) {
    console.log("It's a draw!");
    return "draw";
  }

  if (playerChoice === "r") {
    if (cpuChoice === "s") {
      return "win";
    } else {
      return "lose";
    }
  }

  if (playerChoice === "p") {
    if (cpuChoice === "r") {
      return "win";
    } else {
      return "lose";
    }
  }

  if (playerChoice === "s") {
    if (cpuChoice === "p") {
      return "win";
    } else {
      return "lose";
    }
  }
}

// Update score and win message
function updateScore(result) {
  let winMessage = document.getElementById("win");

  if (result === "win") {
    playerCounter++;
    let playerText = document.getElementById("playerText");
    playerText.textContent = playerCounter;
    
    winMessage.textContent = "Player Wins!";
    console.log("Player wins this round!");
  } else if (result === "lose") {
    cpuCounter++;
    let cpuText  = document.getElementById("cpuText")
    cpuText.textContent = cpuCounter;
    
    winMessage.textContent = "CPU Wins!";
    console.log("CPU wins this round.");
  } else {
    winMessage.textContent = "It's a Draw!";
  }
}

// Check if either player has won

function checkGameOver() {
  if (playerCounter === 10) {
    alert("Player wins the game!");
    resetGame();
  }

  if (cpuCounter === 10) {
    alert("CPU wins the game!");
    resetGame();
  }
}

// Reset the scores and messages
function resetGame() {
  playerCounter = 0;
  cpuCounter = 0;

  document.getElementById("playerText").textContent = playerCounter;
  document.getElementById("cpuText").textContent = cpuCounter;
  document.getElementById("win").textContent = "";
}

// Change the image for player or CPU

function changePlayerImage(choice) {
  let img = document.getElementById("pImg");

  if (choice === "r") {
    img.src = "rock.png";
    img.alt = "rock";
  } else if (choice === "p") {
    img.src = "paper.png";
    img.alt = "paper";
  } else if (choice === "s") {
    img.src = "scissors.png";
    img.alt = "scissors";
  }
}

function changeCpuImage(choice) {
  let img = document.getElementById("cImg");

  if (choice === "r") {
    img.src = "rock.png";
    img.alt = "rock";
  } else if (choice === "p") {
    img.src = "paper.png";
    img.alt = "paper";
  } else if (choice === "s") {
    img.src = "scissors.png";
    img.alt = "scissors";
  }
}

// OPTIONAL ALTERNATIVE FOR changeImage() - combines the top two, but more complicated logic
function changeImage(who, choice) {
  let imgId;

  if (who === "player") {
    imgId = "pImg";
  } else if (who === "cpu") {
    imgId = "cImg";
  }

  let img = document.getElementById(imgId);

  if (choice === "r") {
    img.src = "rock.png";
    img.alt = "rock";
  } else if (choice === "p") {
    img.src = "paper.png";
    img.alt = "paper";
  } else if (choice === "s") {
    img.src = "scissors.png";
    img.alt = "scissors";
  }
}

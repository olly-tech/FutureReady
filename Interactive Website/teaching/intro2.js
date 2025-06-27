let playerCounter = 0;
let cpuCounter = 0;

console.log("Game started!");

//=========function=============//

function cpuChoose() {
  console.log("CPU chose rock!");
}

cpuChoose();

//============if/else==========//

function cpuChoose() {
  let choice = "r";

  if (choice === "r") {
    console.log("CPU chose rock!");
  } else if (choice === "p") {
    console.log("CPU chose paper!");
  } else {
    console.log("CPU chose scissors!");
  }
}

//===========random number===========//
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
}

cpuChoose();

//===========return===========//
function cpuChoose() {
  let number = Math.floor(Math.random() * 3);
  let choice = "unknown";

  if (number === 0) {
    choice = "r";
    // console.log("CPU chose ROCK");
  } else if (number === 1) {
    choice = "p";
    // console.log("CPU chose PAPER");
  } else {
    choice = "s";
    // console.log("CPU chose SCISSORS");
  }

  return choice;
}

console.log(cpuChoose());

//===========event function & parameters ===========//
// check HTML as well!
function playRound(choice) {
  if (choice === "r") {
    console.log("You chose ROCK");
  } else if (choice === "p") {
    console.log("You chose PAPER");
  } else if (choice === "s") {
    console.log("You chose SCISSORS");
  }
}

//=========this part is a code-along to add helper functions and create checkWinner() function=============//

function playRound(choice) {
  if (choice === "r") {
    console.log("You chose ROCK");
  } else if (choice === "p") {
    console.log("You chose PAPER");
  } else if (choice === "s") {
    console.log("You chose SCISSORS");
  }

  let cpuChoice = cpuChoose(); // output: r, p or s
  let result = checkWinner(choice, cpuChoice); // output we want = win, lose or draw so we need to return these.
}


function checkWinner(playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) {
    console.log("It's a draw!");
    return "draw";
  }

  // alt: can use logical operators instead and work through logic instead of this longer version
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

//============            getElementById & textContent                  =============//


// Update score and win message
function updateScore(result) {
  let winMessage = document.getElementById("win");

  if (result === "win") {
    winMessage.textContent = "Player Wins!";
    // console.log("Player wins this round!");
  } else if (result === "lose") {
    winMessage.textContent = "CPU Wins!";
    // console.log("CPU wins this round.");
  } else {
    winMessage.textContent = "It's a Draw!";
  }
}

//=============                increment operators & global/local scope             ============//

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

function playRound(choice) {
  if (choice === "r") {
    console.log("You chose ROCK");
  } else if (choice === "p") {
    console.log("You chose PAPER");
  } else if (choice === "s") {
    console.log("You chose SCISSORS");
  }

  let cpuChoice = cpuChoose();
  let result = checkWinner(choice, cpuChoice); 

  updateScore(result); // call function inside playRound() and need to put in result as parameter
}


//=============                putting it together           ============//

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

  let playerText = document.getElementById("playerText")
  playerText.textContent = playerCounter;

  let cpuText = document.getElementById("cpuText")
  cpuText.textContent = cpuCounter;

  let winMessage = document.getElementById("win")
  winMessage.textContent = "";
}

function playRound(choice) {
  if (choice === "r") {
    console.log("You chose ROCK");
  } else if (choice === "p") {
    console.log("You chose PAPER");
  } else if (choice === "s") {
    console.log("You chose SCISSORS");
  }

  let cpuChoice = cpuChoose();
  let result = checkWinner(choice, cpuChoice);

  updateScore(result);
  checkGameOver(); // add this line
}

//=============               image changing - search for changeImage in rps.js to find where to call this           ============//

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




let playerCounter = 0;
let cpuCounter = 0;

console.log("Game started!");

// Called when the player makes a choice
function userInput(choice) {
  if (choice === "r") {
    console.log("You chose ROCK");
    changeImage("player", "r");
  } else if (choice === "p") {
    console.log("You chose PAPER");
    changeImage("player", "p");
  } else if (choice === "s") {
    console.log("You chose SCISSORS");
    changeImage("player", "s");
  }

  let cpuChoice = cpuChoose();
  let result = checkWinner(choice, cpuChoice);

  if (result === "win") {
    playerCounter = playerCounter + 1;

    let playerText = document.getElementById("playerText");
    playerText.textContent = playerCounter;

    let winMessage = document.getElementById("win");
    winMessage.textContent = "Player Wins!";
  } else if (result === "lose") {
    cpuCounter = cpuCounter + 1;

    let cpuText = document.getElementById("cpuText");
    cpuText.textContent = cpuCounter;

    let winMessage = document.getElementById("win");
    winMessage.textContent = "CPU Wins!";
  } else if (result === "draw") {
    let winMessage = document.getElementById("win");
    winMessage.textContent = "It's a Draw!";
  }

  if (playerCounter === 10) {
    alert("Player wins the game!");
    resetGame();
  }

  if (cpuCounter === 10) {
    alert("CPU wins the game!");
    resetGame();
  }
}

// CPU randomly picks a choice
function cpuChoose() {
  let number = Math.floor(Math.random() * 3); // 0, 1, or 2
  let choice;

  if (number === 0) {
    choice = "r";
    console.log("CPU chose ROCK");
    changeImage("cpu", "r");
  } else if (number === 1) {
    choice = "p";
    console.log("CPU chose PAPER");
    changeImage("cpu", "p");
  } else {
    choice = "s";
    console.log("CPU chose SCISSORS");
    changeImage("cpu", "s");
  }

  return choice;
}

// Compares the player's choice and CPU's choice
function checkWinner(playerChoice, cpuChoice) {
  if (playerChoice === cpuChoice) {
    console.log("It's a draw!");
    return "draw";
  }

  if (playerChoice === "r") {
    if (cpuChoice === "s") {
      console.log("Player wins this round!");
      return "win";
    } else {
      console.log("CPU wins this round.");
      return "lose";
    }
  }

  if (playerChoice === "p") {
    if (cpuChoice === "r") {
      console.log("Player wins this round!");
      return "win";
    } else {
      console.log("CPU wins this round.");
      return "lose";
    }
  }

  if (playerChoice === "s") {
    if (cpuChoice === "p") {
      console.log("Player wins this round!");
      return "win";
    } else {
      console.log("CPU wins this round.");
      return "lose";
    }
  }
}

// Resets the game
function resetGame() {
  playerCounter = 0;
  cpuCounter = 0;

  let playerText = document.getElementById("playerText");
  playerText.textContent = playerCounter;

  let cpuText = document.getElementById("cpuText");
  cpuText.textContent = cpuCounter;

  let winMessage = document.getElementById("win");
  winMessage.textContent = "";
}

// Changes the image shown for player or CPU
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

let playerCounter = 0;
let cpuCounter = 0;
console.log("hello");
//this function is called when the user clicks one of the buttons and takes an input of 'r' or 'p' or 's'

function userInput(inp) {
  // IF statement to check what the player has chosen and then tell the player
  if (inp == "r") {
    console.log("you have chosen ROCK");
    changeimg("player", "r");
    //finds the text in the HTML file and changes it to player chose rock
    // document.getElementById("playerChoice").textContent = "Rock";
  } else if (inp == "p") {
    console.log("You have chosen PAPER");
    changeimg("player", "p");
    //finds the text in the HTML file and changes it to player chose paper
    // document.getElementById("playerChoice").textContent = "Paper";
  } else {
    console.log("You have chosen SCISSORS");
    changeimg("player", "s");
    //finds the text in the HTML file and changes it to player chose scissors
    // document.getElementById("playerChoice").textContent = "Scissors";
  }

  cpu = cpuChoose();

  if (check(inp, cpu) == "win") {
    playerCounter = playerCounter + 1;
    document.getElementById("playerText").textContent = playerCounter;

    document.getElementById("win").textContent = "Player Wins";
  } else if (check(inp, cpu) == "lose") {
    cpuCounter = cpuCounter + 1;
    document.getElementById("cpuText").textContent = cpuCounter;

    document.getElementById("win").textContent = "CPU Wins";
  } else {
    document.getElementById("win").textContent = "DRAW";
  }
  if (playerCounter == 10) {
    alert("Player wins yayy");
    playerCounter = 0;
    reset();
  }
  if (cpuCounter == 10) {
    cpuCounter = 0;
    alert("CPU wins yayy");
    reset();
  }

}

//function called to create a random choice for the CPU
function cpuChoose() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    console.log("computer has chosen ROCK");
    // document.getElementById("cpuChoice").textContent = "Rock";
    changeimg("cpu", "r");
    return "r";
  } else if (random === 2) {
    console.log("computer has chosen PAPER");
    // document.getElementById("cpuChoice").textContent = "Paper";
    changeimg("cpu", "p");
    return "p";
  } else {
    console.log("Computer has chosen SCISSORS");
    // document.getElementById("cpuChoice").textContent = "Scissors";

    changeimg("cpu", "s");
    return "s";
  }
}

//checks if the player of CPU has won
function check(player, computer) {
  if (player === computer) {
    console.log("It's a DRAW");

    return "draw";
  } else if (player === "r") {
    if (computer === "s") {
      console.log("You win!");
      return "win";
    } else {
      console.log("You lose ");
      return "lose";
    }
  } else if (player === "p") {
    if (computer === "r") {
      console.log("You win!");
      return "win";
    } else {
      console.log("You lose :(");
      return "lose";
    }
  } else if (player === "s") {
    if (computer === "r") {
      console.log("You win!");
      return "win";
    } else {
      console.log("You lose :(");
      return "lose";
    }
  }
}

//resets the counter to 0
function resetGame() {
  playerCounter = 0;
  cpuCounter = 0;
  document.getElementById("playerText").textContent = playerCounter;

  document.getElementById("cpuText").textContent = cpuCounter;

  let scoreKeeper = document.getElementById("win");
  scoreKeeper.textContent = "";
}

function changeimg(input, choice) {
  id = "";
  if (input == "player") {
    id = "pImg";
  } else if (input == "cpu") {
    id = "cImg";
  }
  if (choice == "r") {
    document.getElementById(id).src = "rock.png";
    document.getElementById(id).alt = "rock";
  } else if (choice == "p") {
    document.getElementById(id).src = "paper.png";
    document.getElementById(id).alt = "paper";
  } else if (choice == "s") {
    document.getElementById(id).src = "scissors.png";
    document.getElementById(id).alt = "scissors";
  }
}

// USE RPS.JS FOR THE MODEL CODE - THIS IS SUPPLEMENTAL TEACHING CODE :) use intro2.js for example code after each activity which builds the rps game

// what is js, variables (let) + console log

let playerCounter = 0;

console.log("hi");
console.log(playerCounter);
// ~~ activity: create a cpuCounter variable and log a game start message to the console.

//======================//
// introduce rps logic & segway to declaring and calling functions.

function greet() {
  console.log("hi");
}
greet();
// ~~ activity: create cpuChoose() fxn that logs that CPU chose rock :)

//======================//
// introduce if/else and build cpuChoose() fxn

function greetPerson() {
  let person = "olly";

  if (person === "olly") {
    console.log("Hi olly!");
  } else if (person === "oli") {
    console.log("Hi oli!");
  } else {
    console.log("Hello!");
  }
}
// ~~ activity: add if/else to cpuChoose() to go through each choice of 'r', 'p', and 's'. Have the console log message for each option.

//======================//
// random number generator

function randomDay() {
  let number = Math.floor(Math.random() * 7);
  let day = "unknown";

  if (number === 0) {
    day = "Saturday";
    console.log(day);
  } else if (number === 1) {
    day = "Sunday";
    console.log(day);
  } else {
    day = "Weekday";
    console.log(day);
  }
}

randomDay();
// ~~ activity: add random number generator into cpuChoose(). Convert number to r/p/s and save whether it chose r/p/s in a choice variable.

//======================//
// RETURNING VARIABLES
console.log(randomDay()); // output = undefined, not the day we want it to show, because we haven't returned anything

function randomDay() {
  let number = Math.floor(Math.random() * 7);
  let day = "unknown";

  if (number === 0) {
    day = "Saturday";
    // console.log(day);
  } else if (number === 1) {
    day = "Sunday";
    // console.log(day));
  } else {
    day = "Weekday";
    // console.log(day);
  }

  return day;
}

console.log(randomDay()); // now output is day variable. can comment out all the console.logs inside the function!

// ~~ activity: return choice variable in cpuChoose() and call the function inside a console.log().

//=========================//
// END OF cpuChoose() FXN FOR NOW //
//=========================//

// onclick in HTML - explain how we want all three buttons to do the same thing, so we can use the same function. Show parameters changing through HTML and then go to js to show
function chooseDay(day) {
  if (day === "wk") {
    console.log("weekday");
  } else if (day === "sun") {
    console.log("sunday");
  } else if (day === "sat") {
    console.log("saturday");
  }

  // if running out of time, do this alternate way instead of if/else:
  console.log("You chose " + day);
}

// ~~ activity: create playRound() function and add it to html buttons. create a console.log() condition that will log what the user has selected.

//=========================//
// recap rps logic & next steps needed for game to work after getting the player's choice. need to call cpuChoose() and then need to create a checkWinner() function. Do this as a code along from intro2.js

//=========================//
// getElementById & textContent

function updateText(day) {
  let dayText = document.getElementById("win"); // change "win" if you give it a different id for demo

  if (day === "wk") {
    dayText.textContent = "Weekday!";
  } else if (day === "sat") {
    dayText.textContent = "Saturday!";
  } else {
    dayText.textContent = "Sunday!";
  }
}

// ~~ activity: create a updateScore() function that takes the result from playRound() and will change the text content of the id="win" element depending on if the user wins, loses or draws.

//=========================//
// global vs local variables & increment operators

let counter = 10;

function increaseCounter() {
  let counter = 5;

  counter++; // counter = counter + 1

  console.log(counter);
}

increaseCounter(); // guess the output (it'll be 6)

// local variables can't be accessed outside of function
let globalVar = 10;
function increaseVar() {
  let localVar = 5;

  console.log(globalVar);
  console.log(localVar);
}

increaseVar();

console.log(globalVar);
// shouldn't work because you can't get to this one outside of the fxn
console.log(localVar); 

// OPTIONAL EXTENSION ON GLOBAL VS LOCAL 
function innerFunction() {
  console.log(globalVar);
  // shouldn't work because you can't get to this one outside of the fxn
  console.log(localVar);
}

function increaseVar() {
  let localVar = 5;

  console.log(globalVar);
  console.log(localVar);

  innerFunction()
}

// ~~ activity: edit updateScore() function so that playerCounter or cpuCounter is updated depending on who wins, and then change the text content of the playerText and cpuText on the site

//=========================//
// putting last bits together of logic

alert("Wow you win!");

// ~~ activity: create a checkGameOver() function, which will announce the overall winner after either player/CPU score is a certain number

// ~~ activity: create a resetGame() function

//=========================//
// how to change images using JavaScript
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
// ~~ activity: create a changePlayerImage() function and call both in the correct places in code.

//============ O P T I O N A L      A D D I T I O N S =============//
// how to change add/remove classes using JavaScript

let htmlElement = document.getElementById("");
htmlElement.classList.add("class-name");
htmlElement.classList.remove("class-name");
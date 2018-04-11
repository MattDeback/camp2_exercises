const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function analysis(randomNumber, userGuess){

  if (isNaN(userGuess)) {
    return "Error";
  } else if (userGuess > 100) {
    return "Out of range!";
  } else if (userGuess < 0) {
    return "Out of range!"
  } else if (randomNumber > userGuess) {
    return "Too low, try again ;)";
  } else if (randomNumber < userGuess) {
    return "Too high, try again ;)";
  } else {return "You won!";}
}

function recursion() {

  reader.question(question, tryings => {
    console.log(analysis(randomNumber, tryings));
  console.log(`the random number was : ${randomNumber}`);
  //console.log(`the number you tried was : ${tryings}`);
    if (analysis(randomNumber, tryings) === "You won!") {
      console.log("Well done! " + "the number was " + randomNumber + " ,indeed !");
      reader.close();
    } else {
      recursion();
    }
  });
}
const question = "Guess the number from 1 to 100 :) \n"
const randomNumber = Math.floor(Math.random() * 100) + 1;
recursion();

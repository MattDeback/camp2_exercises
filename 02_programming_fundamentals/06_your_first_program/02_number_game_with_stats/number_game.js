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
    return "Too low";
  } else if (randomNumber < userGuess) {
    return "Too High";
  } else {return "You won!";}
}

function recursion(nbTries) {
  reader.question("Guess a number between 1 and 100! \n", tryings => {
    console.log(analysis(randomNumber, tryings));
  //console.log(`the random number was : ${randomNumber}`);
  //console.log(`the number you tried was : ${tryings}`);
    if (analysis(randomNumber, tryings) === "You won!") {
      console.log("...with " + nbTries + " tries");
      reader.close();
    } else {
      recursion(nbTries +1);
    }
  });
}

const nbTries = 1;
const randomNumber = Math.floor(Math.random() * 100) + 1;
recursion(nbTries);

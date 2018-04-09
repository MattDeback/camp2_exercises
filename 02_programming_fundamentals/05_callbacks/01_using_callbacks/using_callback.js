const thisIsThePlayer = (callback) => {
  const player = { name: "Spartacus", life: 100, strength: 100, agility: 100 };
callback(player);
};

// Write a function sayHello that greets: "Hello, Spartacus". (Where "Spartacus" is the player name)


function sayHello(player) {
  console.log("Hello, " + player.name);
}

function lifeIndicator(player){
  console.log("You have " + player.life + " of life");
}

function agility(player) {
  console.log("your current agility is " + player.agility)
}

thisIsThePlayer(sayHello);
thisIsThePlayer(lifeIndicator);
thisIsThePlayer(agility);

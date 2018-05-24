class Aquarium {
  constructor(fishes, algaes) {
    this.fishes = fishes;
    this.algaes = algaes;
  }

  addFish(fish) {
    this.fishes.push(fish);
  }

  addAlgae(algae) {
    this.algaes.push(algae);
  }

  passTime() {
    console.log(this.algaes.length);

    this.fishes.forEach((fish) => {
      console.log(fish.name);
      console.log(fish.sex);
    });

    this.fishes.forEach((fish) => {
      if (fish.vegan) {
        this.algaes.pop();
      } else {
        this.fishes.pop();
      }

    });
  }


  endTurn() {
    while (this.fishes.length > 1) {
      this.passTime();
    }

  }

}



class Fish {
  constructor(name, sex, vegan) {
    this.name = name;
    this.sex = sex;
    this.vegan = vegan;
  }
}


class Algae {
  constructor(size) {
    this.size = size;
  }
}





module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};

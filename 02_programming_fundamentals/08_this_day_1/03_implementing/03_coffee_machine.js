// See Sparta courses for the exercise summary

//éviter arrow function avec this

const machine = {

  litersOfCoffee: 0,
  expressoCons: 0.08,
  longCoffeeCons: 0.15,

  fillWithLitersOfCoffee: function(liters) {
    this.litersOfCoffee += liters;
  },


  expresso: function() {
    if (this.expressoCons <= this.litersOfCoffee) {
      this.litersOfCoffee = this.litersOfCoffee - this.expressoCons;
      return true;
    } else {
      return false;
    }



  },

  longCoffee: function() {
    if (this.longCoffeeCons <= this.litersOfCoffee) {
      this.litersOfCoffee = this.litersOfCoffee - this.longCoffeeCons;
      return true;
    } else {
      return false;
    }
  },

};

// Coffee Machine usage. Insert your code above this comment

machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee); // => 0.02
console.log(machine.expresso()); // => false

module.exports = machine;

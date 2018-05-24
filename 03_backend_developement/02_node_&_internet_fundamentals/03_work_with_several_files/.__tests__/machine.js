const container = require

const machine = {
  litersOfCoffee: 0,
  expresso: function() {
    return container.consumeLitersOfCoffee(0.08);
  }
  fillWithLitersOfCoffee: function(liters)
    this.litersOfCoffee += Liters;
},
  longCoffee: function() {
    return this.serveACup(0.15);
  };
  serveACup: function(quantityInCentiliters) {
    if (this.litersOfCoffee - quantityInCentiliters >= 0) {
      this.litersOfCoffee -= quantityInCentiliters
    }
  }

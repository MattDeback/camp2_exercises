// See Sparta courses for the exercise summary


const car = {

  speed: 59,
  time: 40,
  count: 56,

  start: function() {
    this.speed = 0;
    this.time = 0;
    this.count = 0;
    return this;
  },

  changeSpeed: function (newspeed) {
    this.speed = newspeed;
    return this;
  },

  drive: function (travelTime) {
    this.time = travelTime;
    this.count += this.speed*(this.time / 60);
    return this;
  },

  showDistance: function () {
    console.log(this.count + " Km");
  }


};

//
// car.start();
// car.changeSpeed(130);
// car.drive(42);
// car.showDistance();

car.start().changeSpeed(130).drive(45).showDistance();

console.log(car.showDistance());




module.exports = car;

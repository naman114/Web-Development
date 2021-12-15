/* Object Oriented JS */

// Object Literals
let car = {
  name: "BMW",
  topSpeed: 240,
  run: function () {
    console.log("BMW is running");
  },
};

console.log(car);

// Constructors. new keyword is used with them

function GenCar(naam, tez) {
  this.name = naam;
  this.topSpeed = tez;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
}

let car1 = new GenCar("BMW", 240);
console.log(car1.name);
console.log(car1.run());

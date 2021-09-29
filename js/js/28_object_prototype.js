/* Object Prototype in JS */

/* 
console logging an object created using an object literal has a protype at the end. This is the starting point for that object i.e. some functionality that it already has.
*/

/* For a ctor, the prototype = ctor + object literal prototype */

// To edit a prototype

function car(given) {
  this.name = given;
}

car.prototype.getName = function () {
  return this.name;
};

car.prototype.setName = function (name) {
  this.name = name;
};

let car1 = new car("BMW");
console.log(car1);

// An object literal's prototype cannot be changed

// Also, the global Object's prototype should not be changed.

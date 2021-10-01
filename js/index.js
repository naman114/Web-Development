/* Prototypal Inheritance */

// Inheritance is one object trying to access the properties of another object

// The Js engine automatically assigns some proerties using the prototype object to each of the above. These properties can be accesssed using the dot operator

let arr = ["Alice", "Bob"];

// Accessing the prototype object.
// Same
console.log(arr.__proto__); // Array prototype
console.log(Array.prototype);

// Prototype chain
// Same
console.log(arr.__proto__.__proto__); // Prototype of array prototype is Object prototype
console.log(Object.prototype);

console.log(arr.__proto__.__proto__.__proto__); // null i.e. end of chain

let object = {
  name: "Alice",
  city: "Wonderland",
  giveIntro: function () {
    console.log(`${this.name} lives in ${this.city}`);
  },
};

console.clear();
console.log(object.__proto__);
console.log(Object.prototype);

console.log(object.__proto__.__proto__); // null

// The behabviour of funcctions is same as Object literals
function fun() {
  //
}

// So, everything in JS is an object since down the prototype chain, everything is an object

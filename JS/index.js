/**
 * JavaScript objects have a special property called prototype that is either null or references other objects
 * Every object has a `[[Prototype]]` property
 */

const a = {
  name: "Naman",
  age: 22,
};

console.log(a);

/**
 * When we try to access a property of an object and it's missing, JS automatically takes it from the prototype
 * Remember: object's own properties are given priority
 */

let p = {
  run: () => {
    alert("Wake up");
    return 1;
  },
};

// console.log(a.run()); // not a function

p.__proto__ = {
  color: "black",
};
a.__proto__ = p;

console.log(a);
console.log(a.run()); // shows the alert and prints 1
console.log(a.color);

/* Arrow functions */

const greet = function () {
  return "Good morning";
};

// No need to write function
const gree = () => {
  return "Good";
};

// No need to write function and return
const gr = () => "G";

// Can avoid () around city
const gr1 = (city) => "Good morning " + city;

// Cannot avoid () around > 1 arg
const gr2 = (city, weather) => "Good morning " + city + " " + weather;

// Returning objects: Use () around it
const obj = () => ({ name: "Alice" });

console.log(greet());
console.log(gree());
console.log(gr());

console.log(gr1("Delhi"));
console.log(gr2("Delhi", "Sunny"));

console.log(obj());

console.log("Destructuring");

// Array Destructuring
let a,b;

[a, b] = [12, 13];
console.log({a}, {b}); // 12, 13

[a,b,c,...d] = [1,2,3,4,5,6,7,8,9,10];
console.log({a}, {b}, {c}, {d}); // 1, 2, 3, array from 4 to 10

({a,b,c,...d} = {a: 34, b:12, c:18, d:45, e:90});
console.log(a,b,c,d); // 34, 12, 18, d:45, e:90

const names = ["Alice", "Bob", "Charlie"];
[a, b, c] = names;
console.log(a,b,c);

console.clear();
// Object Destructuring
let obj = {
  user: "Bob",
  city: "Delhi",
  color: "red",
  number: 12,
};

// Must be same as the key spellings
const {user, city, color, number} = obj;
console.log(user, city, color, number);



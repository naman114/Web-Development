/* Data types in js
1. Primitive data types:
    Memory allocation in stack
    Strings, numbers, boolean, null, undefined, symbol
        null is set by you to check
        undefined is default value
2. Reference data types:
    Memory allocation in heap
    Arrays, object literals, functions, dates
*/

// Primitive DT

console.log(typeof "Naman"); // string

let marks = 100;
console.log(typeof marks); // number

let nullVar = null;
console.log(typeof nullVar); // object. But it is a primitive data type. So it has a bogus return value

let undef = undefined;
console.log(typeof undef); // undefined

// Reference DT

// Arrays
let arr = [1, 2, 3, false, "naman"];
console.log(typeof arr); // object

// Object Literals
let students = {
  alice: 80,
  bob: 85,
  charlie: 90,
};
console.table(students); // object
console.log(typeof students);

function findName() {}
console.log(typeof findName); // function

let date = new Date();
console.log(typeof date); // object

/* Arrays and Objects */

let arr = new Array(1, 2, 3, "abc");
console.log(arr.length); // 4
// length is a property, not a function

console.log(arr.indexOf(1)); // 0

// push_back
arr.push(10);
// push_front
arr.unshift(-10);
// pop_back
arr.pop();
// pop_front
arr.shift();

// starting index, number of elements to remove
arr.splice(0, 2);

arr.reverse();

let temp = [1, 2];
// concat doesn't affect the original array
arr = arr.concat(temp);

console.log(arr);

console.clear();

// Objects: Key-value pairs
const myObj = {
  "first name": "Alice",
  age: 5,
  isStudent: true,
  favNums: [1, 2, 3],
};

// 2 ways to access object properties
console.log(myObj.age);
console.log(myObj["first name"]);

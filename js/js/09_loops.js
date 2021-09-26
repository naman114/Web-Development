/* Loops */

// Array traversal
let arr = [1, 2, 3, 4, 5];

arr.forEach(function (ele, idx, array) {
  console.log(ele);
});

// Object key traversal
let myObj = {
  name: "Bob",
  age: 12,
  id: 123,
  job: "coder",
};

for (let key in myObj) {
  console.log(`The ${key} of the object is ${myObj[key]}`);
}

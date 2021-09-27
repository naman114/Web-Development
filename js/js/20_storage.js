/* Local and session storage */

// Head over to application
// In js you can store some key-value pairs wrt to a website in the browser

const d = function (ele) {
  console.log(ele);
};

// Localstorage is permanent

localStorage.setItem("Name", "Alice");

let res = localStorage.getItem("Name");
console.log(res);
// Returns null for a key that doesn't exist

// Remove a key-value pair
localStorage.removeItem("Name");

// Clearing the local storage
localStorage.clear();

// Limitation: cannot add an array without it getting converted to a string
let arr = ["Alice", "Bob", "Charlie"];
localStorage.setItem("Persons", arr);
d(typeof (res = localStorage.getItem("Persons"))); //string

/* Solution: 
  Use JSON.stringify(): Object -> String 
  and JSON.parse(): String -> Object
  */
localStorage.setItem("People", JSON.stringify(arr));
d(typeof (res = JSON.parse(localStorage.getItem("People")))); //object

// Sessionstorage is exactly same but refreshed every session

/* Functions and scopes */

function greet(name, say = "Hello") {
  console.log(`${say} ${name}`);
}

greet("Bob", "Greetings"); // Greetings Bob

// Anonymous function
const mygreet = function (name, say = "Welcome") {
  let msg = `${say} ${name}`;
  return msg;
};

let op = mygreet("Alice");
console.log(op); // Welcome Alice

// Function in object
const myObj = {
  name: "Charlie",
  lang: function () {
    return "js";
  },
};

console.log(myObj.lang()); // js

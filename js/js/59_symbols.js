console.log("Symbols");

// Symbol is a primitive type. So don't use new keyword with it
let sym1 = Symbol("Identifier");
let sym2 = Symbol("Identifier");

console.log({ sym1 });
console.log(typeof sym1); // symbol


console.log(sym1 === sym2); // false
console.log("Hello" === "Hello"); // true

// Before the introduction of symbols in Javascript (i.e. before ES6), it was very difficult to create unique keys.

const k1 = Symbol("Id for k1");
const k2 = Symbol("Id for k2");

let myObj = {};
myObj[k1] = "Alice";
myObj[k2] = "Bob";
myObj["age"] = 16;

console.log(myObj);
/* 
The identifier helps in debugging
Symbol(Id for k1): "Alice"
Symbol(Id for k2): "Bob"
*/
console.log(myObj[k1]); // Alice
// You cannot do myObj.k1

console.clear();

// Symbols are ignored in for in loop and JSON.stringify()
for(let key in myObj){
  console.log(key, myObj[key]);
}
console.log(JSON.stringify(myObj));


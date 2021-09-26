/* Strings: Properties, methods and template literals */

let str = "Hi";

str = str.concat(" Hello", " Sup");

console.log(
  "",
  str,
  "\n",
  str.length,
  "\n",
  str.toLowerCase(),
  "\n",
  str.toUpperCase()
);

/* 
Hi Hello Sup 
12 
hi hello sup 
HI HELLO SUP
*/

console.log(str[0]); // H
console.log(str.charAt(0)); // H

console.log(str.indexOf("Hello")); // 3
console.log(str.indexOf("Bro")); // -1

console.log(str.endsWith(" Sup")); // true
console.log(str.includes("o S")); // true

console.log(str.substring(3, 5)); // He

console.log(str.split(" ")); // (3) ['Hi', 'Hello', 'Sup']

console.log(str.replace("Hi", "Bruh"));
// Only first occurence.
// Bruh Hello Sup

let person = "Alice";
let hobby = "cooking";

let data = `<h1>Winner of today's contest</h1>
            <p>${person} who likes ${hobby}</p>
`;

document.body.innerHTML = data;

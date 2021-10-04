/* Regular Expressions: Used for string matching */
let reg = /Hello/; //This is a regular expression literal in js
reg = /Hello/g; // g - global flag
reg = /Hello/gi; // i - Case insensitive
console.log(reg);

// Content of regex literal
console.log(reg.source);

// Functions to match expressions
let s = "Hello! This is an example. HeLLo";
/* 
exec(): Returns array for match, null for no match
Multiple occurrences can be obtained by using a global flag i.e. g
Without global flag, all results will have the same value
*/
let result = reg.exec(s);
console.log(result); // 1st occurrence
result = reg.exec(s);
console.log(result); // 2nd occurrence
result = reg.exec(s);
console.log(result); // null. Use this as a stopping point for a while loop

let cnt = 0;
while (reg.exec(s) !== null) {
  cnt++;
}
console.log(cnt); // 2

/* test(): Returns true or false */
console.log(reg.test(s)); // true

/* match(): Returns an array of results or null. It is used oppositely */
console.log(s.match(reg)); // (2) ['Hello', 'HeLLo']

/* search(): Returns index of first match else -1 */
console.log(s.search(reg)); // 0

/* replace(): Returns new string with replacements. Use g to replace all  */
console.log(s.replace(reg, "Charlee")); // Charlee! This is an example. Charlee

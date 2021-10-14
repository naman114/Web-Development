/* Built-in modules. Importing modules is synonymous to adding bootstrap for example. Additional functionality already written, avaible for use */

const fs = require("fs");

const text = fs.readFileSync("./datasrc.txt", "utf-8");

console.log(typeof text); // Without encoding, it returns buffer
console.log(text);

let a = text.replace("sample", "editedSample");

console.log(typeof a); // string
console.log(a); // This is editedSample data for testing.

fs.writeFileSync("newdatasrc.txt", a);

/* Types of modules: 
1.  Built in
2.  Self made
3.  3rd party using npm
*/

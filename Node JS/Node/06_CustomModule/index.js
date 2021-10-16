/* 
When only a single item is getting exported

const avg = require("./mod");
console.log(avg([1, 2, 3])); 
*/

/* When an object is getting exported */
const mod = require("./mod");
console.log(mod.avg([1, 2, 3]));
console.log(mod.lang);
console.log(mod.name);

console.log("This is index.js");

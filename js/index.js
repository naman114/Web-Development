/* Type conversion and type coercion */
let myVar, boolVar;

myVar = String(34);
boolVar = String(true);

console.log(myVar, typeof myVar); // 34 string
console.log(boolVar, typeof boolVar); // true string

let date = String(new Date());
console.log(date); // Sun Sep 26 2021 20:48:46 GMT+0530 (India Standard Time)

let arr = String([1, 2, 3]);
console.log([arr, arr.length]); // (2) ['1,2,3', 5]

// String() can be replaced with myVar.toString()

let stri = Number("123");
console.log(stri, typeof stri); // 123 'number'

stri = Number("1a");
console.log(stri, typeof stri); // NaN 'number'

stri = Number(true);
console.log(stri, typeof stri); // 1 'number'

stri = parseInt("123.123");
console.log(stri, typeof stri); // 123 'number'

stri = parseFloat("123.123");
console.log(stri, typeof stri); // 123.123 'number'

// Number() encompasses both parseInt and parseFloat

console.log(stri.toFixed(1)); // 123.1

/* Type coercion
String + Number == String + String
*/

stri = "123";
myVar = 12;
let ans = stri + myVar;
console.log(ans, typeof ans);

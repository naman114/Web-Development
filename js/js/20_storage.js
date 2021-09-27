/* Local and session storage */

// Head over to application
// In js you can store some key-value pairs wrt to a website in the browser

const d = function (ele) {
  console.log(ele);
};

// Localstorage is permanent. No expiry for the data.

/* Cookies require network calls so slower. It can store just 4000 bytes. LS stores atleast 5 MB of data. Memory depends on the type of device. LS user data is useful when the data is not relevant enough to be stored on the server, or some testing needs to be done with it or just to improve the performance of a web app  */

/* Same Origin Policy of these Storage APIs 

Useful for security purposes

Origin: Protocol + Host/Domain + Port

Protocol: http or https
Host/Domain: amazon.in
Port: 5050

Setting data into local storage is done for a particular origin.

Example: Assume that some data is set for http://amazon.in

Will it be accessible from?

1. http://amazon.in/cart 
YES. Origin is the same, an extra path is given

2. https://amazon.in
NO

3. http://prices.amazon.in
NO

4. http://amazon.in:8080
NO

*/

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

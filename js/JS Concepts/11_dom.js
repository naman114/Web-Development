/* DOM: Document Object Model */
/* 

Document object is a part of the window

Window object is a global object in client side javascript

*/

let a = window;
console.log(a);

window.alert("This is an alert message!");
alert("This is another alert message!");
// window object is a global object so its functions can be directly used

let res = prompt("Enter your name:");
console.log(res); // The input value

res = confirm("Are you sure?");
console.log(res); // returns boolean

// The above functions are now obsolete

a = window.document;
a = window.innerHeight;
a = innerWidth;
a = outerHeight;

// Extent of scroll done by user along X and Y directions
a = scrollX;
a = scrollY;
a = location;
// location.reload() reloads the page
// location.href tells the URL of the current site
console.log(typeof location.href);

console.log(a);

// Takes you to the following URL
// location.href = "//google.com";

// history to get the details of the the prev pages visited
// history.go(-1) and history.go(1)

/* Async / await */
console.log("Start of the script");

async function fun() {
  console.log("Inside function fun()");
  const res = await fetch("https://api.github.com/users");
  console.log("Before response");
  const users = await res.json();
  console.log("users resolved");
  return users;
}

console.log("Before calling fun()");
let op = fun();
console.log("After calling fun()");
console.log(op);
op.then((data) => console.log(data));

console.log("Last line of this js file");

/* 
Start of the script
Before calling fun()
Inside function fun() 

// After this, the control sees await so it goes goes away from the fun() saying, "I will return after handling other business. You hang in there and get your work done in the background, child." 

After calling fun()
Promise {<pending>} // Since fun() has not completed its execution, the promise to be returned is still pending

// After this, the .then part will not execute since the promise is still pending

Last line of this js file

// After this it goes back to the await to check its status. Since all other business is handled it will wait it out. 

Before response

// After this, there is another await. Since no other business so it again waits it out.

users resolved

// Finally after the users are resolved, the .then function works

(30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
*/

/* 
async functions always return a promise after finishing execution


*/

/* Fetch API: Modern JS */

let fetchBtn = document.getElementById("fetchBtn");
let list = document.getElementById("list");

function getData() {
  console.log("Started getData");
  // fetch returns promise
  let url = "datasrc.txt";
  fetch(url)
    .then((res) => {
      console.log("First .then");
      return res.text();
    })
    .then((data) => {
      console.log("Second .then");
      console.log(data);
    });
}

console.log("Before getData");
getData();
console.log("After getData");

/* 
Before getData
Started getData
After getData (The fetch goes in the background i.e. to be executed later)
First .then
Second .then
Sample data from datasrc.txt file!
*/

// api.github.com/users

function getDataJSON() {
  let url = "https://api.github.com/users";
  fetch(url)
    .then((res) => {
      return res.json(); // Use this if res is a valid JSON, .text returns plain text
    })
    .then((data) => {
      console.log(data);
    });
}

getDataJSON();

function postDataJSON() {
  let url = "https://reqres.in/api/users";
  // Body must be a string. Either give it one or convert your object to string
  let data = {
    name: "Charlee",
    job: "Fire-Fighter",
  };
  let params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(url, params)
    .then((res) => res.text())
    .then((data) => console.log(data));
}

postDataJSON();

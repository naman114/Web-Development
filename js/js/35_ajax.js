console.log("Hello");

/* Asynchronous JS

1. async/await
2. callbacks
3. promises

*/

/* 
AJAX: Asynchronous JAvascript and Xml 
-> It is not a programming language, but a set of existing technologies
-> Helps in fetching data asynchronously without interfering with the existing page
-> No page reload/refresh i.e. saves bandwidth by requesting data for specific components

-> However, modern websites use JSON instead of XML for data transfer

Working:
-> Uses XMLHttpRequest object (also called xhr object)
-> Data can be transferred in any format and protocol
*/

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("click");
  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // Open the object
  // Request type, source of data, true for asynchronous nature/ non blocking nature
  // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

  // POST REQUEST
  xhr.open("POST", "https://reqres.in/api/users", true);
  xhr.getResponseHeader("Content-type", "application/json");

  // What to do during progress (optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };

  xhr.onreadystatechange = function(){
    console.log("Ready state is: " + xhr.readyState);
  }
  /* 
  0: Unsent
  1: Opened
  2: Headers Received
  3: Loading
  4: Done
   */

  //   What to do when response is ready (same as ready state = 4)
  xhr.onload = function () {
    // 201 means created
    if (this.status === 201) {
      console.log(this.responseText);
    } else {
      console.error("Some error occurred: " + this.status);
    }
  };

  // Send the request. The above behavior is defined for after the request is sent (Bheju to ye karna)
  let params = 	`{
    "name": "morpheus",
    "job": "leader",
    "id": "260",
    "createdAt": "2021-10-02T13:17:02.885Z"
}`;
  xhr.send(params);
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler(){
  console.log("Pop handler was clicked");

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://reqres.in/api/users?page=2", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let res = JSON.parse(this.responseText);
      console.log(res.data);
      
      let list = document.getElementById("list");
      res.data.forEach(function(ele){
        list.innerHTML += `<li>${ele.email}</li>`;
      });
    } else {
      console.error("Some error occurred");
    }
  };

  xhr.send();
}
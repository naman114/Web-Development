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
  xhr.open("GET", "datasrc.txt", true);

  // What to do during progress (optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };

  //   What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.error("Some error occurred");
    }
  };

  //   Send the request
  xhr.send();
}

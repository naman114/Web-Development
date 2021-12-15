/* Callback functions

// forEach is a synchronous function
arr.forEach(function(){});

// setTimeout is an asynchronous function that executes the given function after its timer expires

*/

let students = [
    {
      name: "Alice",
      city: "New Delhi",
    },
    {
      name: "Bob",
      city: "Hyderabad"
    }
  ];
  
  function enrol(student, callback){
    setTimeout(
      // Function that executes after the timer expires
      function(){
      students.push(student);
      console.log(`${student.name} has been enrolled`);
      callback();
    }, 8000);
  };
  
  function display(){
    let list = document.getElementById("list");
    let str = "";
    setTimeout(() => {
      students.forEach(function(student){
        str += `<li>${student.name}</li>`;
      });
      list.innerHTML = str;
      console.log("Students have been displayed");
    }, 1000);
  }
  
  enrol({name: "Charlie", city: "Shimla"}, display);
  
  
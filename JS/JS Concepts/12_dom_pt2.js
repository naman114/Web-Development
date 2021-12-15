console.log(typeof document); //object

let a = document.all; // Returns HTMLAllCollection

a.forEach(function (ele) {
  console.log(ele);
});

// index.js:5 Uncaught TypeError: a.forEach is not a function since a is an HTMLCollection

Array.from(a).forEach(function (ele) {
  console.log(ele);
});

// Use the above way to convert an HTMlCollection to an iterable array

a = document.body; // Returns body tag

// Returns all forms in the document
a = document.forms[0];

// ALl links in the document
a = document.links;

Array.from(a).forEach(function (ele) {
  console.log(ele.href);
}); // https://www.google.com/

a = document.scripts;

a = document.images;

console.log(a);

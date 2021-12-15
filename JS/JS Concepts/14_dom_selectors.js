/* DOM Selectors */

/* 
1. Single element selectors
2. Multi-element selectors
*/

// 1. Single Element Selectors

let ele = document.getElementById("one");

// Class List
ele = ele.className;

// Children and parents
ele = ele.childNodes;
ele = ele.parentNode;

// Changing CSS properties
ele.style.color = "red";
// Change the text only
ele.innerText = "Changing the TEXT";
// Change the HTMl i.e. add tags also
ele.innerHTML = `<h3>Changed Child 1</h3>`;

console.log(ele);

let sel = document.querySelector(".child"); // The first occurence
sel = document.querySelector("#two2");
console.log(sel);

// 2. Multi element selector

let elems = document.getElementsByClassName("container");
console.log(elems[0].getElementsByClassName("child"));

elems = document.getElementsByTagName("div"); // gebtn
console.log(elems);

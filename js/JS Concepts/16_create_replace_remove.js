/* Creating, Removing and Replacing Elements*/

// Creating an element
let ele = document.createElement("li");
ele.className = "list-item";
ele.id = "created-li";
ele.innerText = "Created by js";
ele.setAttribute("aacustomaa", "mytitle");
ele.style.color = "green";

let target = document.querySelector("ul.mylist");
target.appendChild(ele);

ele.style.color = "red"; // Works after appending too

console.log(target);
console.log(ele);

// Replacing an element
console.clear();
let elem2 = document.createElement("h3");
elem2.id = "elem2";
elem2.className = "elem2";

let tnode = document.createTextNode("This is a replaced heading");

elem2.append(tnode);

ele.replaceWith(elem2);

// Replacing child
console.clear();
target.replaceChild(ele, document.querySelector("#fui"));

// Remove a child
target.removeChild(document.querySelector("#lui"));

// Get attributes (class, id etc.)
let pr = elem2.getAttribute("id");
console.log(elem2, pr);

// Check for attributes
console.clear();
console.log(elem2.hasAttribute("id")); //true

// Remove attributes
console.clear();
elem2.removeAttribute("class");
console.log(elem2);

// Set attributes: shown above

let newheading = document.createElement("a");
newheading.innerText = "Goto CodeWithHarry.com";
newheading.className = "head2";
newheading.href = "https://www.codewithharry.com";

document.querySelector(".container").appendChild(newheading);

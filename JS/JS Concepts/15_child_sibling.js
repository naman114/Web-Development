/* Children, Parent and DOM Traversal */

let cont = document.querySelector("div.container");
console.log(cont.childNodes);

// childNodes considers newlines in html as text and comments as comments. These are also counted as childNodes

console.log(cont.childNodes[3].nodeName);
console.log(cont.childNodes[3].nodeType);

/*
Node Types

1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType
*/

// the children property includes the html tags as an HTML collection
console.log(cont.children);
console.log(cont.children[0].children[0].children);

// To get the first childNode's nodeName
console.log(cont.firstChild);
// To get the first childNode's element (HTML)
console.log(cont.firstElementChild);

// Last
console.log(cont.lastChild);
console.log(cont.lastElementChild);

// Count of children
console.log(cont.childElementCount);

// Parents and siblings
console.log(cont.firstElementChild.parentNode);
// Gives the next sibling (childNode) i.e. #text (newline)
console.log(cont.firstElementChild.nextSibling);
// Gives the next sibling (children) i.e. div
console.log(cont.firstElementChild.nextElementSibling);

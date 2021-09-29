// ctrl + shift + r reloads the page even if cached

let editableDiv = document.createElement("div");

editableDiv.className = "content";
editableDiv.style.backgroundColor = "lightgray";
editableDiv.style.height = "100px";
editableDiv.style.width = "200px";
editableDiv.style.border = "1px solid black";
let content = localStorage.getItem("textbox");

if (typeof content !== "null") {
  editableDiv.innerText = content;
}

document.body.appendChild(editableDiv);

editableDiv.addEventListener("click", function (e) {
  this.setAttribute("contentEditable", "true");
});

editableDiv.addEventListener("blur", function (e) {
  localStorage.setItem("textbox", this.innerText);
});

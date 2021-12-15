/* Events and event objects */

// e is the event object

document.querySelector("#heading").addEventListener("click", function (e) {
  console.log("Some child was clicked");

  // target is the most important property here. Tells the element that is clicked
  console.log(e.target);
  console.log(e.target.className);
  // Gives DOMTokenList. Traverse using Array.from()
  console.log(e.target.classList);
  // Relative distance of any click from given element along X axis
  console.log(e.offsetX);
  // Real coordinates of click wrt browser
  console.log(e.clientX);
});

// Another event is mouseover that fires as soon as mouse touches the element.

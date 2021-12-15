/* Events contd. */

document.getElementById("btn").addEventListener("click", func);

// Default behaviour of button in a form is to submit the form. preventDefault prevents that from happening
function func(e) {
  e.preventDefault();
  console.log(e);
}

/* Other events

0. click: Only left click
1. dblclick
2. mousedown: left, wheel, rightclick ALL
3. mouseup
4. mouseenter
5. mouseleave
6. mousemove

*/

document
  .getElementsByClassName("container")[0]
  .addEventListener("mousemove", function (e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`;
  });

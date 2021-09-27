// Paste in console of any website to find links having the string in its innerHTML
Array.from(document.links).forEach(function (ele) {
  let s = ele.innerHTML;
  if (s.includes("Project")) {
    console.log(ele.href);
  }
});

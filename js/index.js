Array.from(document.links).forEach(function (ele) {
  let s = ele.innerHTML;
  if (s.includes("Project")) {
    console.log(ele.href);
  }
});

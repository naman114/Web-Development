console.log("This is the module");

function average(arr) {
  let sum = 0;

  arr.forEach((ele, idx, arr) => {
    sum += ele;
  });

  return sum / arr.length;
}

module.exports = {
  avg: average,
  name: "Alice",
  lang: "JS",
};

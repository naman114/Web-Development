console.log("hello");

function namesIterator(arr) {
  let nextIdx = 0;

  return {
    next: function () {
      if (nextIdx < arr.length) {
        return {
          value: arr[nextIdx++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const names = ["Alice", "Bob", "Charlie", "Dwayne", "Elliot", "Forrest"];
const namesItr = namesIterator(names);
console.log(namesItr.next());
console.log(namesItr.next());
console.log(namesItr.next());
console.log(namesItr.next());
console.log(namesItr.next());
console.log(namesItr.next());
console.log(namesItr.next()); //done: true

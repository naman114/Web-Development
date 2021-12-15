/* Iterators in js
It is an object that allows us to traverse over a list or collection. Iterators' purpose is to define the sequences and implement the iterator protocol that returns an object by using a next() method that contains the value and done. 

done: It is a boolean value indicating whether any more elements in the sequence could be iterated upon.
value: It is the current element of the sequence.
So, we can define iterators as an “object that knows how to access items from a collection one at a time, while keeping track of its current position within that sequence.”
*/

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

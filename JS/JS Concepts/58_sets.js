console.log("Sets");

let mySet = new Set();

mySet.add("Alice");
mySet.add("Alice");

console.log({ mySet });

mySet.clear();

// Set ctor
mySet = new Set([1,2,3,4]);
console.log({ mySet });

console.log(mySet.has(4)); // true

mySet.delete(1);
console.log({ mySet });

mySet.forEach((ele)=>{
  console.log(ele);
});

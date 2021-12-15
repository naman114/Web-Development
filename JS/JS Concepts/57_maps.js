const myMap = new Map();
let key1 = "Hello", key2 = {}, key3 = function(){};

myMap.set(key1, "This is the value");
myMap.set(key2, "This is the obj");
myMap.set(key3, "This is the fn");

// console.log(myMap.get(key1)); // This is the value
// console.log(myMap.size); // 3

for(let [key, value] of myMap){
  console.log(key, value);
}

// Only keys - keys()
// Only values - values()
for(let key of myMap.keys()){
  console.log(key);
}

// using forEach()
myMap.forEach((value, key)=>{
  console.log({key}, {value});
});

// Converting map to array
let arr = Array.from(myMap);
console.log({arr});
console.log(arr[0][0]); // Hello

// Converting map keys to array
let arrKeys = Array.from(myMap.keys());
console.log({arrKeys});

// Converting map values to array
let arrValues = Array.from(myMap.values());
console.log({arrValues});



/* Generators in JS: Produce values on the fly */

// Useful when entire computation is time consuming but you want only some results in succession
function* numbersGen(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const gen = numbersGen();
console.log(gen.next()); // value: 1, done: false
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next()); // value: undefined, done: true


function* numbersGen2(){
  let i = 0;
  while(true){
    yield i++;
  }
}

const gen2 = numbersGen2();
console.log(gen2.next()); // value: 0, done: false
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next().value); // 4

// .next() returns a method
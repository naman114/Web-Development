/* Math object */

console.log(Math);

console.log(22 / 7); // Does not trunkate to integer like C++

console.log(Math.random()); // Gives a number between 0 and 1

// For a range [a,b], a + rand()*(b - a)

console.log(Math.round(randomGen(10, 20)));

function randomGen(a, b) {
  return a + Math.random() * (b - a);
}

// Variables: var, let, const

// Single/double/back ticks
var name1 = "naman";
var name2 = "naman";
var name3 = `na"m"an`;

// Logged as array
console.log([name1, name2, name3]);
// Logged as space separated
console.log(name1, name2, name3);

// undefined
var id;
console.log({ id });

// Weakly typed (Implicit conversions)
id = 2;
console.log(id + "hello");

// Dynamically typed (type checks at runtime)
id = "naman";
console.log(id);

/* _ and $ can be used as first char of variable names but should be avoided due to their use in object-oriented js and jQuery*/

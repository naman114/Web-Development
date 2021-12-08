// Variables: var, let, const

// const
/* Invalid: Missing initializer in const declaration
const name; */

// Cannot modify hereinafter
const name = "Naman";
// Irrespective of const, arrays and objects can be modified using their functions but cannot be reassigned
const arr = [1, 2, 3];
// Valid
arr.push(4);
console.log(arr);
// Invalid
// arr = [5, 6];

// let: block level scope. var has global scope
var city = "goa";
{
  let city = "delhi";
  console.log({ city });
}
console.log({ city });

// let and const when used together remove the need to use var. let variables stay in block so easier to read and maintain the code

/* 
Commonly used cases
1. PascalCase
2. camelCase
3. kebab-case
4. snake_case
*/

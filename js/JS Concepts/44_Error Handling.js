/* Error Handling & Try Catch*/

let a;

if (a === undefined) {
  throw new Error("It is undefined, proceed no further");
}

// Try Catch Finally: Allows you to not just display errors to console but also define behaviour for when an error will occur

try {
  bruh();
} catch (error) {
  console.log(error); // ReferenceError: bruh is not defined
  console.log(error.name); // ReferenceError
  console.log(error.message); // bruh is not defined
  console.log("Caught it!");
} finally {
  console.log("Finally: This logs irrespective of you enter try or catch");
}

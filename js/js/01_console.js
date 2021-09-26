// Printing as is
console.log("Hello js!");
console.log(34 + 1);

// JS objects
console.log({ name: "Naman", id: 12 });
console.table({ name: "Naman", id: 12 });

// Warnings
console.warn("This is a warning");

// Clear the console
console.clear();

// Measure time to execute. Addition took is the identifier.
console.time("Addition took");
console.log(12 + 3);
console.timeEnd("Addition took");

// Assertions. Counted as error message. The given string is displayed when the assertion fails.
console.assert(2 < 1, "Invalid");

// Error message
console.error("This is an error");

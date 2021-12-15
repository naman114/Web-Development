/* Regex: Shorthand character classes */

let regex = /\wello/; // Word character: _ or alphabet or numeric character
regex = /\w+4r6r/; // Multiple word characters followed by 4r6r
regex = /\W+This/; // Non word character
regex = /\d+/; // Means multiple digits
regex = /\D+/; // Non digits
regex = /\s/; // Whitespace char
regex = /\S+/; // Non whitespace char
regex = /4r6r\b/; //Word boundary

// Assertions
regex = /h(?!e)/; // h ke baad kuch bhi ho e na ho
regex = /h(?=e)/; // h ke baad e ho
const str = "helhel1134r4r6r. This is a great thing. Helo! Hello.";

console.log("Result from exec: ", regex.exec(str));

if (regex.test(str)) {
  console.log(`The string ${str} matches the regex ${regex.source}`);
} else {
  console.log(`The string ${str} does not match the regex ${regex.source}`);
}

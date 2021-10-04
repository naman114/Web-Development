/* Regex: Metacharacter Symbols in JS */

/* ^ at start means starts with */
let regex = /^H/;
/* $ at the end means ends with */
regex = /llo!$/;
/* . means any one character can be there */
regex = /Th.s/;
/* * means matches zero or more chars */
regex = /H*!/;
/* ? after any character means it is optional */
regex = /gre?aty?/;
/* Escape using \ */
regex = /H\*llo/;
const str = "H*llo. This is a great thing. Hello!";

if (regex.test(str)) {
  console.log(`The string ${str} matches the regex ${regex.source}`);
} else {
  console.log(`The string ${str} does not match the regex ${regex.source}`);
}

/* Regex: Character Sets */

// Character Sets - []
let regex = /H[a-z]llo/;
regex = /H[ryu]llo/;
regex = /H[^ryu]llo/; // Anything except r,y,u
regex = /H[a-zA-Z0-9][0-9]llo/; //There must be 0-9 after H and before l

// Quantifiers
regex = /Hel{2}o/; // l can occur exactly 2 times
regex = /Hel{0,2}o/; // l can occur 0 to 2 times (0 or 1 or 2)

// Groupings (Use parantheses)
regex = /(hel){2}([0-9]r){3}/;

const str = "helhel1r4r6r. This is a great thing. Helo! Hello.";

if (regex.test(str)) {
  console.log(`The string ${str} matches the regex ${regex.source}`);
} else {
  console.log(`The string ${str} does not match the regex ${regex.source}`);
}

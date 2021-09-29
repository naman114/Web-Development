/* Date object */

let today = new Date();

console.log({ today });

// MM/DD/YYYY format
let other = new Date("8-4-2003 12:38:54");

// Default time 00:00:00
other = new Date("October 7 1975");

// Shows invalid date for wrong format or out of bound values
other = new Date("09/16/1200000");

// This is the Unix epoch (an arbitrary reference)
other = new Date("1-1-1970 00:03:59:0004 GMT+0000");

console.log({ other });

// 0 based with 0 being Sunday
let res = other.getDay(); // 4 since Thu

res = other.getDate();

res = other.getMinutes(); // 3; since minutes elapsed since 1 Jan 1970

res = other.getSeconds(); // 59

res = other.getHours();

// Returns miliseconds from the unix epoch till the given date
res = other.getTime();

res = other.getMilliseconds(); // 4

res = other.getMonth(); // Jan = 0
console.log({ res });

// Overwrites the stored value

let yetAnother = new Date("1-1-1970 00:03:59:0004 GMT+0000");
yetAnother.setDate(12);

yetAnother.setMonth(4);

yetAnother.setFullYear(2019);

yetAnother.setMinutes(23);

yetAnother.setHours(13);

yetAnother.setMinutes(45);

yetAnother.setMilliseconds(0.081);

console.log({ yetAnother });

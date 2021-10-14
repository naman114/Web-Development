/* Blocking vs non blocking execution 
Node.js works on non-blocking IO model
*/

const fs = require("fs");
let text = fs.readFile("datasrc.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

for (let i = 0; i < 100000; ++i) {
  console.log(i);
}

//Prints 0 till 99999 and then the data of the file

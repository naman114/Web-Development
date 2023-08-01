console.log("This is app.js");

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express(); // Created an express app

const port = 80;

/* Static files are those which are publicly available for a user to access without logging in */
/* Use `code .` to open a VS Code session of just one directory */
/* pug is a template engine */

// EXPRESS RELATED CONFGS
app.use("/static", express.static("static"));
// We need a middleware to get the data sent by the form. The statement below helps the form data to raech express
app.use(express.urlencoded());

// PUG RELATED CONFGS
app.set("view engine", "pug"); // Set the template engine aas pug
app.set("views", path.join(__dirname, "views")); // Set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
  const params = {
    title: "GainsBuddy | Join Now",
    content:
      "Get the best personal training with cutting-edge equipment at just 1499/- monthly. Sign up now!",
  };
  res.status(200).render("index.pug", params);
});

app.post("/", (req, res) => {
  // The returned object will have the keys as the name parameters in the input and textarea tags
  console.log(req.body);

  let name = req.body.name;
  let age = req.body.age;
  let gender = req.body.gender;
  let address = req.body.address;
  let additional = req.body.additional;
  let outputToWrite = `${name}, ${age}, ${gender}, ${address}, ${additional}\n`;

  fs.appendFileSync("userData.txt", outputToWrite);

  const params = {
    message: "Your data has been recorded successfully",
  };
  res.status(201).render("index.pug", params);
});

// START THE SERVER
app.listen(port, () => {
  console.log(`App started successfully on port ${port}`);
});

/* 
Send a get request from postman directly to localhost or open in the browser
Postman is useful for other requests like post request
*/

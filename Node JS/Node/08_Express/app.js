console.log("This is app.js");

const express = require("express");
const path = require("path");

const app = express(); // Created an express app

const port = 80;

/* Static files are those which are publicly available for a user to access without logging in */
/* Use `code .` to open a VS Code session of just one directory */
/* pug is a template engine */

app.use("/static", express.static("static"));

// Set the template engine aas pug
app.set("view engine", "pug");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Pug demo endpoint
app.get("/demo", function (req, res) {
  res.status(200).render("demo", { title: "Hey", message: "Hello there!" });
});

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/about", (req, res) => {
  res.status(201).send("This is the about page");
});

app.post("/about", (req, res) => {
  res.send("This is a post request from the about page");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

app.get("/report", (req, res) => {
  res.send("This is the report page");
});

app.listen(port, () => {
  console.log(`App started successfully on port ${port}`);
});

/* 
Send a get request from postman directly to localhost or open in the browser
Postman is useful for other requests like post request
*/

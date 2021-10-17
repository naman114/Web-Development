console.log("This is app.js");

const express = require("express");

const app = express(); // Created an express app

const port = 80;

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

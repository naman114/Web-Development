console.log("This is app.js");

const express = require("express");
const path = require("path");

const app = express(); // Created an express app

const port = 80;

/* Static files are those which are publicly available for a user to access without logging in */
/* Use `code .` to open a VS Code session of just one directory */
/* pug is a template engine */

// EXPRESS RELATED CONFGS
app.use("/static", express.static("static"));

// PUG RELATED CONFGS
app.set("view engine", "pug"); // Set the template engine aas pug
app.set("views", path.join(__dirname, "views")); // Set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
  const params = {
    title: "Hello from params",
    content: "Plain HTML using Pug (from params)",
  };
  res.status(200).render("index.pug", params);
});

// START THE SERVER
app.listen(port, () => {
  console.log(`App started successfully on port ${port}`);
});

/* 
Send a get request from postman directly to localhost or open in the browser
Postman is useful for other requests like post request
*/

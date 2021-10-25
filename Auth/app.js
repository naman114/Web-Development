const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// Pug related
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Express middleware
app.use(express.urlencoded({ extended: false }));

// Endpoints
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  res.json(req.body);
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.listen(port, () => {
  console.log(`App started successfully on port ${port}`);
});

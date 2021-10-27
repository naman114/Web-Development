const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 80;

// Pug related
app.set("view engine", "pug");

// Express middleware
app.use(express.urlencoded({ extended: false }));

// Mongoose
mongoose.connect("mongodb://localhost:27017/users");

let User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  })
);

// Endpoints
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  let user = new User(req.body);

  user.save((err) => {
    if (err) {
      let error = "Something went wrong. Please try again.";

      if (err.code === 11000) {
        error = "Email is already taken, try with another one";
      }

      return res.render("register", { error: error });
    }

    return res.redirect("login");
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user || req.body.password !== user.password) {
      return res.render("login", {
        error: "Incorrect email/password",
      });
    }

    return res.redirect("dashboard");
  });
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.listen(port, () => {
  console.log(`App started successfully on port ${port}`);
});

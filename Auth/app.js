const express = require("express");
const mongoose = require("mongoose");
const sessions = require("client-sessions");
const bcrypt = require("bcryptjs");
const csurf = require("csurf");
const helmet = require("helmet");
const secrets = require("./secrets");

const app = express();
const port = 80;

// Pug related
app.set("view engine", "pug");

// Express middleware
app.use(express.urlencoded({ extended: false }));

app.use(
  sessions({
    cookieName: "session",
    secret: secrets.cookieSecret,
    duration: 1 * 60 * 1000,
    httpOnly: true, // Do not allow client side js to access this encrypted cookie
    secure: true, // only set cookies if the website is running SSL
    ephemeral: true, // destroy the cookies when the browser closes
  })
);

// Smart user middleware (dashboard refactor)
app.use((req, res, next) => {
  if (req.session === undefined || req.session.userId === undefined) {
    return next();
  }

  User.findById(req.session.userId, (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return next();
    }

    // Since the user will be shared with html templates, remove the password to prevent leaking it
    user.password = undefined;

    req.user = user; // For a logged in user just check if req.user is not undefined
    res.locals.user = user; // To access user variable in the html templates

    next();
  });
});

function loginRequired(req, res, next) {
  if (!req.user) {
    return res.redirect("login");
  }
  next();
}

// This middleware handles the csrf token equality
app.use(csurf());

// Sets up http headers on the site and secures them. Prevents click-jacking etc.
app.use(helmet());

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
  res.render("register", { csrfToken: req.csrfToken() });
});

app.post("/register", (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 14);
  req.body.password = hash;

  let user = new User(req.body);

  user.save((err) => {
    if (err) {
      let error = "Something went wrong. Please try again.";

      if (err.code === 11000) {
        error = "Email is already taken, try with another one";
      }

      return res.render("register", {
        error: error,
        csrfToken: req.csrfToken(),
      });
    }

    return res.render("login", { csrfToken: req.csrfToken() });
  });
});

app.get("/login", (req, res) => {
  res.render("login", { csrfToken: req.csrfToken() });
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user || !bcrypt.compareSync(req.body.password, user.password)) {
      return res.render("login", {
        error: "Incorrect email/password",
        csrfToken: req.csrfToken(),
      });
    }

    req.session.userId = user._id;
    return res.redirect("dashboard");
  });
});

app.get("/dashboard", loginRequired, (req, res, next) => {
  res.render("dashboard", { userstring: JSON.stringify(req.user) });
});

app.listen(port, () => {
  console.log(`App started successfully on port ${port}`);
});

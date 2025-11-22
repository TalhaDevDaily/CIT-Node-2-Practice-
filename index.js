const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send(
    "Oh, what a beautiful morning, Oh, what a beautiful day, I've got a beautiful feeling, everything's going my way! 🌄"
  );
});

app.post("/login", function (req, res) {
  console.log(req);
  res.send("Login Route 😎");
});

app.listen(8000, function () {
  console.log("Server is running 🏃‍♂️");
});

// Request => getting data from the client side

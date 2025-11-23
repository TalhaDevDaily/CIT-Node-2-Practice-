const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send(
    "Oh, what a beautiful morning, Oh, what a beautiful day, I've got a beautiful feeling, everything's going my way! 🌄"
  );
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;

  if (!email)
    return res.status(401).send({ error: "Please fill in the email 📧" });

  if (!password)
    return res.status(401).send({ error: "Password is required 🔑" });
  console.log(email);
  console.log(password);
  res.status(202).send({ success: `Successfully logged in to ${email} 😎` });
});

app.listen(8000, function () {
  console.log("Server is running 🏃‍♂️");
});

// Request => getting data from the client side

// Respond => send data to the client side

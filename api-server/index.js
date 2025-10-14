const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
/* 
  IMPORTANT:
    ***NEVER*** store credentials unencrypted like this.
    This is for demo purposes only in order to simulate a functioning API serverr.
*/
const users = {
  "icb.andreea@yahoo.com": {
    firstName: "Andreea",
    lastName: "Iacob",
    email: "icb.andreea@yahoo.com",
    password: "very-secret",
  },
  "lovegood.morise@yahoo.com": {
    firstName: "Morise",
    lastName: "Lovegood",
    email: "lovegood.morise@yahoo.com",
    password: "super-secret",
  },
};


app.post("/api/register", (req, res) =>
  setTimeout(() => {
    const user = req.body;

    if (!(user.firstName && user.lastName && user.email && user.password)) {
      return res.status(400).send("Invalid user info");
    }

    if (users[user.email]) {
      return res.status(409).send({ message: "Email already registered" });
    }

    users[user.email] = user;

    res.status(201).send({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  }, 800)
);

/* IMPORTANT:
    The code below is for demo purposes only and does not represent good security
    practices. In a production application user credentials would be cryptographically 
    stored in a database server and the password should NEVER be stored as plain text. 
*/
app.post("/api/login", (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).send("Invalid user credentials.");
  }
});

app.listen(8081, () => console.log("API Server listening on port 8081!"));

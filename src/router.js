const express = require("express");
const USERS = require("./database");
const db = require("./database");

const router = express.Router();

router.get("/users", (req, res) => {
  const users = db.map((item) => {
    return { username: item.username };
  });
  res.send(users);
});

router.post("/user", (req, res) => {
  const { username, password } = req.body;
  const newUser = { username, password };
  db.push(newUser);
  res.send("create finish");
});

module.exports = router;

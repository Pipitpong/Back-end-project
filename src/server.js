const express = require("express");
// same -> import express from 'express'
const userRouter = require("./router");
const cors = require("cors");

const server = express();
server.use(express.json()); //รองรับ json
server.use(express.urlencoded({ extended: true })); //รองรับ json โหดๆ
server.use(cors());
server.use(userRouter);

server.get("/", (req, res) => {
  res.send("Hello");
});

server.listen(5000, () => console.log("server has open"));

// index.get("/hello", (req, res) => {
//   res.send("hello");
// });

// index.post("/user", (req, res) => {
//   res.send("hello user");
// });
// index.post()
// index.put()
// index.delete()

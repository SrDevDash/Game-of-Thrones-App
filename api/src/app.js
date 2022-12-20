const express = require("express");
const { json } = require("body-parser");
const singUpRouter = require("./routers/singupRouter");

const server = express();

server.name = "API";

server.use(express.json());

server.use("/singup", singUpRouter);

module.exports = server;

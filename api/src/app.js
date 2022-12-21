const express = require("express");
const { json } = require("body-parser");
const singUpRouter = require("./routers/singupRouter");
const loginRouter = require("./routers/loginRouter");

const server = express();

server.name = "API";

server.use(express.json());

server.use("/users/singup", singUpRouter);
server.use("/users/login", loginRouter);

module.exports = server;

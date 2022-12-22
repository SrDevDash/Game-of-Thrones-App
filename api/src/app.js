const express = require("express");
const { json } = require("body-parser");
const singUpRouter = require("./routers/singupRouter");
const loginRouter = require("./routers/loginRouter");
const charactersRouter = require("./routers/charactersRouter");
const housesRouter = require("./routers/housesRouter");

const server = express();
const cors = require('cors');

server.name = "API";

server.use(express.json());
server.use(cors());

server.use("/", singUpRouter);
server.use("/", loginRouter);
server.use("/", charactersRouter);
server.use("/", housesRouter);

module.exports = server;

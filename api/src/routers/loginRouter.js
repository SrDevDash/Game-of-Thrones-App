const express = require("express");
const loginRouter = express.Router();
const { usersLogin } = require("./testRouters/testfunctions/functions");


loginRouter.get("/users/login", (req, res) => {

  const { email, password } = req.body;
  const result = usersLogin(email, password);
  if (!result) return res.sendStatus(400);

  return res.status(200).send({ result });
});

module.exports = loginRouter;

const express = require("express");
const singUpRouter = express.Router();
const db = require("..//db/db");
const { usersSingup } = require("./testRouters/testfunctions/functions");

singUpRouter.post("/users/singup", (req, res) => {
  const { email, password, name, phone } = req.body;
  const result = usersSingup(email, password, name, phone);

  if (!result) return res.sendStatus(400);
  if (result) {
    db.users = [...db.users, req.body];

    return res.status(200).send({ result });
  }
});

module.exports = singUpRouter;

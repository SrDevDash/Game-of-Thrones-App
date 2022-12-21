const express = require("express");
const singUpRouter = express.Router();
const db = require("..//db/db");
const { usersSingup } = require("./testRouters/testfunctions/functions");

singUpRouter.post("/", (req, res) => {
  const { email, password } = req.body;
  const result = usersSingup(email, password);

  if (!result) return res.sendStatus(400);
  if (result) {
    db.users = [...db.users, req.body];
    console.log(db.users);
    return res.status(200).send({ result });
  }
});

module.exports = singUpRouter;

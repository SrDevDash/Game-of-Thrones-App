const express = require("express");
const { houses } = require("./..//db/db");
const housesRouter = express.Router();
const {
  createHouse,
  modifyHouse,
  getAllHouses,
  findHouse,
  eraseHouses,
} = require("./testRouters/testfunctions/functions");

housesRouter.get("/houses", (req, res) => {
  const result = getAllHouses();
  if (!result.length) res.sendStatus(404);
  return res.status(200).send(result);
});
housesRouter.get("/houses/:id", (req, res) => {
  const { id } = req.params;
  const result = findHouse(id);
  return res.status(200).send(result);
});
housesRouter.post("/houses/create", (req, res) => {
  const { name, words } = req.body;
  const result = createHouse(name, words);
  if (!result) res.sendStatus(404);
  return res.status(200).send(result);
});
housesRouter.put("/houses/modify/:id", (req, res) => {
  const { id } = req.params;
  const { name, words } = req.body;
  const result = modifyHouse(id, name, words);
  return res.status(200).send(result);
});
housesRouter.delete("/houses/delete/:id", (req, res) => {
  const { id } = req.params;

  const result = eraseHouses(id);
  return res.status(200).send(result);
});

module.exports = housesRouter;

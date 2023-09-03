const express = require("express");
const router = express.Router();

const table = require("../models/model1");
const { default: mongoose } = require("mongoose");

router.post("/add", async (req, res) => {
  const data = new table({
    a: req.body.a,
    b: req.body.b,
    c: req.body.a + req.body.b,
  });

  const result = await data.save();
  console.log("result", result);

  res.send(result.id);
});

router.get("/:id", async (req, res) => {
  try {
    const document = await table.findById(req.params.id);
    res.send(document);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

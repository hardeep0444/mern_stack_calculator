const mongoose = require("mongoose");

const calcSchema = new mongoose.Schema({
  a: {
    type: Number,
    reequired: true,
  },
  b: {
    type: Number,
    reequired: true,
  },
  c: {
    type: Number,
    reequired: true,
  },
});

const result = mongoose.model("calc", calcSchema);
module.exports = result;

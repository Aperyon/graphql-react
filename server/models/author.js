const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const authorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = new model("Author", authorSchema);

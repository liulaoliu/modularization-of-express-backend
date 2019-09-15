const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, unique: true }
});

schema.virtual("article", {
  ref: "Article",
  localField: "_id",
  foreignField: "tags",
  justOne: false
});
const Tag = mongoose.model("Tag", schema);
module.exports = Tag;

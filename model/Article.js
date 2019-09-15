const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  // tag:{ type: mongoose.SchemaTypes.ObjectId, ref: "Tag" },
  tags: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Tag" }]
});

const Article = mongoose.model("Article", schema);

module.exports = Article;

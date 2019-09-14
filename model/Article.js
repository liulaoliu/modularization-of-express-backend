const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String },
  content: { type: String }
});

const Article = mongoose.model("Article",schema);

module.exports=Article;
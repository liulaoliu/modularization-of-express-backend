module.exports = () => {
  const mongoose = require("mongoose");

  mongoose.connect("mongodb://localhost:27017/seperation-concern", {
    useNewUrlParser: true
  });
}

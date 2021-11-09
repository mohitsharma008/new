const mongoose = require("mongoose");
const TestSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Test = mongoose.model("test", TestSchema);

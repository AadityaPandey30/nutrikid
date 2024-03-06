const mongoose = require("mongoose");

const quesSchema = new mongoose.Schema({
  body: {
    type: String,
    required: [true, "A review can't be empty"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    requried: [true, "Question must belong to a user!"],
  },
});

const Question = mongoose.model("Question", quesSchema);
module.exports = Question;

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: [true, "A reply can't be empty"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    requried: [true, "Reply must belong to some user."],
  },
  ques: {
    type: mongoose.Schema.ObjectId,
    ref: "Question",
    requried: [true, "Reply must belong to some question."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;

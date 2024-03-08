const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Question = require("../models/quesModel");
const Comment = require("../models/commentModel");
const User = require("../models/userModel");

exports.postQuestion = catchAsync(async (req, res, next) => {
  const newQues = await Question.create({
    user: req.user.id,
    body: req.body.body,
  });

  if (!newQues) {
    return next(new AppError("Error posting question!", 400));
  }

  res.status(200).json({
    status: "success",
    ques: newQues,
  });
});

exports.getAllQuestions = catchAsync(async (req, res, next) => {
  const questions = await Question.find();

  if (!questions) {
    return next(new AppError("Error getting Questions.", 401));
  }

  res.status(200).json({
    status: "success",
    questions,
  });
});

exports.postComment = catchAsync(async (req, res, next) => {
  const comment = Comment.create({
    user: req.user.id,
    body: req.body.body,
    ques: req.params.questionId,
  });

  if (!comment) {
    return next(new AppError("Error posting reply.", 401));
  }

  res.status(200).json({
    status: "success",
    comment,
  });
});

exports.getThread = catchAsync(async (req, res, next) => {
  // Retrieve the thread
  const thread = await Question.findById(req.params.threadId);

  // Check if the thread exists
  if (!thread) {
    return next(new AppError("Could not find thread!", 404));
  }

  // Retrieve comments for the thread
  const comments = await Comment.find({ ques: req.params.threadId });

  // Initialize an array to store formatted comments
  let commentList = [];

  // Loop through each comment and retrieve user's name
  for (const comment of comments) {
    // Retrieve user's name using async/await
    const username = await User.findById(comment.user).select("+name");

    // Push the formatted comment to the list
    commentList.push({
      id: comment.id,
      user: comment.user,
      name: username ? username.name : '', // Check if username exists before accessing name
      body: comment.body,
    });
  }

  // Send the response
  res.status(200).json({
    status: "success",
    data: { thread, commentList },
  });
});


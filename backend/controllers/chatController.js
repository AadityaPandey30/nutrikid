const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Question = require("../models/quesModel");
const Comment = require("../models/commentModel");

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

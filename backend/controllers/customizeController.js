const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const gemini = require("../utils/gemini");

exports.getIngredients = catchAsync(async (req, res, next) => {
  const prompt =
    "give similar ingredients as a list of comma seperated values strictly which may give the same taste or flavor for the following: " +
    req.body.ingredients;
  const result = await gemini.generateContent(prompt);
  const data = await result.response;

  if (!data) {
    return next(new AppError("Error generating response!", 401));
  }
  console.log(data);
  res.status(200).json({
    status: "success",
    data: data.candidates[0].content.parts[0].text,
  });
});

exports.generateRecipe = catchAsync(async (req, res, next) => {
  const prompt =
    "generate a recipe keeping in mind it is for a kid from the following ingredients, you may add some basic ingredients: " +
    req.body.ingredients;
  const result = await gemini.generateContent(prompt);
  const data = await result.response;

  if (!data) {
    return next(new AppError("Error generating response!", 401));
  }
  console.log(data);
  res.status(200).json({
    status: "success",
    data: data.candidates[0].content.parts[0].text,
  });
});

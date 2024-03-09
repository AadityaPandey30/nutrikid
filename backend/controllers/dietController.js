const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const gemini = require("../utils/gemini");
const axios = require("axios");

exports.createDiet = catchAsync(async (req, res, next) => {
  const prompt = req.body.prompt;

  try {
    // Generate content using Gemini API
    const result = await gemini.generateContent(prompt);
    const data = await result.response;

    if (!data) {
      return next(new AppError("Error generating response!", 401));
    }

    // Send response with generated content
    res.status(200).json({
      status: "success",
      data: data.candidates[0].content.parts[0].text,
    });
  } catch (error) {
    console.error("Error generating response:", error);
    return next(new AppError("Error generating response", 500));
  }
});
//https://cosylab.iiitd.edu.in/rdbapi/recipeDB/searchRecipeByNutrients?
//energy=328:330&carbohydrates=5:7&protien=52:53&calories=455:460&fat=10:12

exports.showRecipe = catchAsync(async (req, res, next) => {
  const recipeId = req.params.recipeId;
  const apiKey = "yoOD_vPBTlqgxtf5BcRAEIk6kLkQs8KMGKJ4bd8BMmK8gMjq";

  try {
    const response = await axios.get(
      `https://apis-new.foodoscope.com/recipe/${recipeId}`,
      {
        headers: {
          Authorization: `Bearer${apiKey}`,
        },
      }
    );

    const data = response.data;
    console.log(data);

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return next(new AppError("Error fetching recipe", 500));
  }
});

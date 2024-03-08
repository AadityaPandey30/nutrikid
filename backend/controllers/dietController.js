const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const axios = require("axios");

exports.getDiets = catchAsync(async (req, res, next) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const generationConfig = {
    temperature: 0.7,
    topP: 1,
    topK: 1,
    maxOutputTokens: 1000,
  };

  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig,
  });

  const prompt = req.body.prompt;
  const result = await model.generateContent(prompt);
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
          Authorization: `Bearer ${apiKey}`,
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

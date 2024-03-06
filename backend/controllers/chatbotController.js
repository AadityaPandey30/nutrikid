const openai = require("../utils/openai");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.generateAI = catchAsync(async (req, res, next) => {
  const ai_prompt = req.body.prompt;

  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: ai_prompt,
    max_tokens: 100,
    temperature: 0.7,
  });

  if (!completion) {
    return next(new AppError("Error generating OpenAI response"));
  }

  const message = completion.choices[0].text;
  console.log(completion.choices[0].text); //logging for fun

  res.status(200).json({
    status: "success",
    message,
  });
});

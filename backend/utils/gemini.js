const { GoogleGenerativeAI } = require("@google/generative-ai");

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

module.exports = model;

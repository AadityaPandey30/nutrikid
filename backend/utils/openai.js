const OpenAI = require("openai");

const openai = new OpenAI({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API_SECRET,
});

module.exports = openai;

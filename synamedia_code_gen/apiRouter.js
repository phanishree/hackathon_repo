const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.api_key_for_hackathon,
});

const openai = new OpenAIApi(configuration);

async function runGpt(prompt) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // Change model gpt-3.5-turbo-16k to use 16000 tokens
      prompt: prompt,
      max_tokens: 1000, 
    });
    return response;
  } catch (error) {
    console.error("Error - In Api call", error.message);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}

module.exports = { runGpt };
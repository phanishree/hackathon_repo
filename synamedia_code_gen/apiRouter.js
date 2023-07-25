const { Configuration, OpenAIApi } = require("openai");
// import axios from "axios";
const axios = require('axios');
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.api_key_for_hackathon,
});

const openai = new OpenAIApi(configuration);

async function runGpt(prompt) {
    // try {
    //   console.log("this is the prompt ", prompt)
    //     const response = await axios.post(
    //         "https://api.openai.com/v1/chat/completions",
    //       {
    //         model: "",
    //         temperature: 0,
    //         messages: [
    //             {
    //                 role: "user",
    //                 content: prompt
    //             },
    //         ],
    //     },
    //      {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer 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",
    //         },
    //      }
    //      );
    //      return response
    //     }
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // Change model gpt-3.5-turbo-16k to use 16000 tokens
      prompt: prompt,
      temperature: 0,
      max_tokens: 1000, 
    });
    return response;
  }
   catch (error) {
    console.error("Error - In Api call", error.message);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}

module.exports = { runGpt };
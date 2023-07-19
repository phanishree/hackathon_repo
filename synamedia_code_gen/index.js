const fs = require('fs');
const yaml_prompt_1 = require('./prompts');
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.api_key_for_hackathon,
});

const openai = new OpenAIApi(configuration);

async function runGpt() {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // Change model gpt-3.5-turbo-16k to use 16000 tokens
      prompt: yaml_prompt_1,
      max_tokens: 500,  //Can increase upto 4000 token for this model 
    });

    // Create a new JavaScript file and write the response data
    parsingResponce(response)

  } catch (error) {
    console.error("Error - In Api call", error.message);
  }
}

async function parsingResponce(responseData) {
    try {
        const dataToWrite = responseData.data.choices[0].text
        fs.writeFileSync('/Users/garumugam/Desktop/openai_response.js', dataToWrite);  // Replace your file path 
        console.log(dataToWrite)
        console.log("Response written to openai_response.js");
    } catch (error) {
        console.error("Error - Writing in a file", error.message);
    }

}

runGpt();
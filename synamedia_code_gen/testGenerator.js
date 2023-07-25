const fs = require('fs');
const path = require('path');
const helper = require('./helper')
const openai = require('./apiRouter')
require("dotenv").config();
const { ut_prompt } = require('./prompts');
const folderPath = path.join(`/Users/${process.env.dev_path}/Desktop/Syna_API`);

function readFileToString(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function main(serverCodeAsString, fileName, prompt) {
  try {
    // const fileContent = await readFileToString(filePath);
    const unitTestParsingResponse = await testCodeGenerator(serverCodeAsString, fileName, prompt)
    return unitTestParsingResponse
  } catch (error) {
    console.error("Error - Reading the file:", error.message);
  }
}

async function testCodeGenerator(serverCodeAsString, fileName, prompt) {
  const prompt_UT =  prompt + serverCodeAsString;
    const response = await openai.runGpt(prompt_UT);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
    const serverFilePath = path.join(folderPath, fileName);
    
    const test_response =  await helper.parsingResponse(response, serverFilePath, serverCodeAsString);
    return test_response;
}

module.exports.main = main;

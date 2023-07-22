const fs = require('fs');
const path = require('path');
const helper = require('./helper')
const openai = require('./apiRouter')
const { ut_prompt } = require('./prompts');
const folderPath = path.join('/Users/garumugam/Desktop/Syna_API');

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

async function main(filePath) {
  try {
    const fileContent = await readFileToString(filePath);
    testCodeGenerator(fileContent)
  } catch (error) {
    console.error("Error - Reading the file:", error.message);
  }
}

async function testCodeGenerator(serverCodeAsString) {
    const prompt_UT =  ut_prompt + serverCodeAsString;
    const response = await openai.runGpt(prompt_UT);
    
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
    const serverFilePath = path.join(folderPath, 'unitTest.js');
    
    await helper.parsingResponse(response, serverFilePath);

}

module.exports.main = main;

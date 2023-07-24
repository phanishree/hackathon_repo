const fs = require('fs');
const path = require('path');
const { yaml_prompt_1, doc_prompt } = require('./prompts');
const testCodeGenerator = require('./testGenerator')
const helper = require('./helper')
const openai = require('./apiRouter')
const { documentExtractor } = require('./parseFile')
const folderPath = path.join('/Users/garumugam/Desktop', 'Syna_API');

async function start() {
  try {
    // TO-DO: Phani carry on :)
    // const prompt = documentExtractor() + doc_prompt

    const response = await openai.runGpt(yaml_prompt_1);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    const serverFilePath = path.join(folderPath, 'server.js');
    await helper.parsingResponse(response, serverFilePath);
    await testCodeGenerator.main(serverFilePath);
  } catch (error) {
    console.error("Error - Starting the process:", error.message);
  }
}

start();
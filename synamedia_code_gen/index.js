const fs = require('fs');
const path = require('path');
const { yaml_prompt_1 } = require('./prompts');
const testCodeGenerator = require('./testGenerator')
const helper = require('./helper')
const openai = require('./apiRouter')
const folderPath = path.join('/Users/garumugam/Desktop', 'Syna_API');

async function start() {
  try {
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
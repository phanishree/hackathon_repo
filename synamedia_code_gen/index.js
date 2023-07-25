const fs = require('fs');
const path = require('path');
const { yaml_prompt_1, doc_prompt, direct_promtpt, final_prompt: common_prompt, package_json_prompt } = require('./prompts');
const testCodeGenerator = require('./testGenerator')
const helper = require('./helper')
const openai = require('./apiRouter')
const { documentExtractor } = require('./parseFile')
const folderPath = path.join('/Users/garumugam/Desktop', 'Syna_API');
async function start() {
  try {
    const api_doc_text = await documentExtractor()
    const prompt =  common_prompt + api_doc_text

    const response = await openai.runGpt(prompt);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    // server.js
    const serverFilePath = path.join(folderPath, 'server.js');
    const serverParsingResponse = await helper.parsingResponse(response, serverFilePath);

    // unitTest.js
    const unitTestParsingResponse = await testCodeGenerator.main(serverParsingResponse);

    // package.json
    const package_json_prompt1 =  package_json_prompt + "\nserver.js code" + serverParsingResponse + "\nunit tests code" + unitTestParsingResponse
    
    const package_json_response = await openai.runGpt(package_json_prompt1);
    const package_json_FilePath = path.join(folderPath, 'package.json');
    await helper.parsingResponse(package_json_response, package_json_FilePath);
  } catch (error) {
    console.error("Error - Starting the process:", error.message);
  }
}

start();
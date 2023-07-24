const fs = require('fs');
const path = require('path');
const { yaml_prompt_1, doc_prompt, direct_promtpt, final_prompt: common_prompt, intermediate_logic_prompt } = require('./prompts');
const testCodeGenerator = require('./testGenerator')
const helper = require('./helper')
const openai = require('./apiRouter')
const { documentExtractor } = require('./parseFile')
const folderPath = path.join('/Users/pksynamedia.com/Desktop', 'Syna_API');

async function start() {
  try {
    const api_doc_text = await documentExtractor()
    const prompt =  common_prompt + api_doc_text

    const response = await openai.runGpt(prompt);
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
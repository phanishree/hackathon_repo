require("dotenv").config();
const fs = require('fs');
const path = require('path');
const { yaml_prompt_1, doc_prompt, direct_promtpt,  common_prompt, intermediate_logic_prompt, complex_logic_prompt_1, rach_prompt, package_json_prompt } = require('./prompts');
const testCodeGenerator = require('./testGenerator')
const helper = require('./helper')
const openai = require('./apiRouter')
const { documentExtractor } = require('./parseFile')
const folderPath = path.join(`/Users/${process.env.dev_path}/Desktop`, 'Syna_API');
const runner = require('child_process');
const Crawler = require('crawler');
const extractApiInfo = require("./parseDocsPage");

function decide(){
  const args = process.argv[2];
      if(args === 'doc'){
        usingDoc()
      }else{
        usingCrawler()
      }
}

decide()


async function usingCrawler(){
  const apiInfo = await extractApiInfo();  //
  const prompt = common_prompt + apiInfo
  await start(prompt);
}

async function usingDoc(){
  const apiInfo = await documentExtractor();  //
  const prompt = common_prompt + apiInfo
  await start(prompt);
}
async function start(prompt) {
  try {
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
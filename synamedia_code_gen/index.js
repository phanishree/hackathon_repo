require("dotenv").config();
const fs = require('fs');
const path = require('path');
const { yaml_prompt_1, doc_prompt, direct_promtpt,  common_prompt, intermediate_logic_prompt, complex_logic_prompt_1, rach_prompt, package_json_prompt, stage_test_prompt, ut_prompt } = require('./prompts');
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
      if(args === 'doc2'){
        usingDoc('api_doc_2.docx')
      }else if(args === 'doc3'){
        usingDoc('api_doc_3.docx')
      }
      else{
        usingCrawler()
      }
}

decide()


async function usingCrawler(){
  const apiInfo = await extractApiInfo();  //
  const prompt = common_prompt + apiInfo
  await start(prompt);
}

async function usingDoc(docName){
  const apiInfo = await documentExtractor(docName);  //
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
    const serverParsingResponse = await helper.parsingResponse(response, serverFilePath, prompt);

  // //  unitTest.js
  //   const unitTestParsingResponse = await testCodeGenerator.main(serverParsingResponse, 'unitTest.js', ut_prompt);

    // stage2Test.js
    const stageTestParsingResponse = await testCodeGenerator.main(serverParsingResponse, 'stage2Test.js', stage_test_prompt);

    // package.json 
    const package_json_prompt_1 =   "\nserver.js code" + serverParsingResponse + "\n server test code " + stageTestParsingResponse
    const packageJsonResponce = await testCodeGenerator.main(package_json_prompt_1, 'package.json', package_json_prompt);

  } catch (error) {
    console.error("Error - Starting the process:", error.message);
  }
}
const textract = require('textract');
const path = require('path');
// const filePath= "./assets/docx/api_doc_2.docx";
    
async function documentExtractor(docName) {
  const filePath = path.join("./assets/docx/", docName);
    return new Promise((resolve, reject) => {
      textract.fromFileWithPath(filePath, function (error, text) {
        if (error) {
          reject(error);
        } else {
          resolve(text);
        }
      });
    });
  }

module.exports = { documentExtractor }

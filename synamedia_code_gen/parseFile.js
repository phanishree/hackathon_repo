const textract = require('textract');
const filePath= "./assets/docx/api_doc_2.docx";    

async function documentExtractor() {
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

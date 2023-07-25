const textract = require('textract');
const filePath= "./assets/docx/travel_doc.docx";    

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

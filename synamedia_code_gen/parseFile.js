const textract = require('textract');
const filePath= "./assets/docx/api-doc-1.docx";    

async function documentExtractor() {
    textract.fromFileWithPath(filePath, function( error, text ) {
        // console.log("Error - Extracting string from doc", error.message);
        return text
    })
}

module.exports = { documentExtractor }

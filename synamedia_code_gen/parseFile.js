var textract = require('textract');


var filePath= "./public/assets/docx/basic-api-doc.docx";        
textract.fromFileWithPath(filePath, function( error, text ) {
    console.log(text);
})
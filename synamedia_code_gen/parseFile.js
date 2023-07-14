var textract = require('textract');


var filePath= "./public/assets/docx/Panishree 301.docx";        
textract.fromFileWithPath(filePath, function( error, text ) {
    console.log(text);
})
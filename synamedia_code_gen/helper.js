const fs = require('fs');

 

 

 

function removeComments(jsonString) {

  // Regular expression to match single and multi-line comments in JSON

  const commentRegex = /\/\/.*?\n|\/\*.*?\*\//g;

  return jsonString.replace(commentRegex, '');

}

 

 

 

function parsingResponse(responseData, filePath) {

  try {

    const dataToWrite = responseData.data.choices[0].text;

 

    // Extract and parse everything before the first '{' character

    const firstCurlyBraceIndex = dataToWrite.indexOf('{');

    const jsonDataWithoutPrecedingChars = dataToWrite.slice(firstCurlyBraceIndex);

 

 

    // Check if the file path is package.json

    if (filePath.endsWith('package.json')) {

      // Remove comments from the JSON data

      const jsonDataWithoutComments = removeComments(jsonDataWithoutPrecedingChars);

      fs.writeFileSync(filePath, jsonDataWithoutComments);

      console.log(`Code written to ${filePath}`);

      return jsonDataWithoutComments;

    } else {

      fs.writeFileSync(filePath, dataToWrite);

      console.log(`Code written to ${filePath}`);

      return dataToWrite;

    }

  } catch (error) {

    console.error("Error - Writing in a file", error.message);

    throw error; // Rethrow the error to handle it elsewhere if needed

  }

}

 

module.exports = {parsingResponse}
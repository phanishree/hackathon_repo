const fs = require("fs");

function removeComments(jsonString) {
  const commentRegex = /\/\/.*?\n|\/\*.*?\*\//g;
   return jsonString.replace(commentRegex, "");
}

function parsingResponse(responseData, filePath, prompt) {
  try {
    const total_tokens = prompt.length / 4;
    const dataToWrite =
      total_tokens >= 16000
        ? responseData.data.choices[0].message.content
        : responseData.data.choices[0].text;
        const firstCurlyBraceIndex = dataToWrite.indexOf("{");

    const jsonDataWithoutPrecedingChars =
      dataToWrite.slice(firstCurlyBraceIndex);

    // Check if the file path is package.json

    if (filePath.endsWith("package.json")) {
      // Remove comments from the JSON data

      const jsonDataWithoutComments = removeComments(
        jsonDataWithoutPrecedingChars
      );

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

module.exports = { parsingResponse };

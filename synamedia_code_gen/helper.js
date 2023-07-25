const fs = require('fs');

async function parsingResponse(responseData, filePath, prompt) {
    try {
      const total_tokens = prompt.length / 4;
      const dataToWrite = total_tokens >= 16000 ? responseData.data.choices[0].message.content : responseData.data.choices[0].text;
      fs.writeFileSync(filePath, dataToWrite);
      console.log(`Code written to ${filePath}`);
      return dataToWrite
    } catch (error) {
      console.error("Error - Writing in a file", error.message);
      throw error; // Rethrow the error to handle it elsewhere if needed
    }
  }

module.exports = { parsingResponse };
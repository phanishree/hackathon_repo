const fs = require('fs');

async function parsingResponse(responseData, filePath) {
    try {
      const dataToWrite = responseData.data.choices[0].message.content;
      fs.writeFileSync(filePath, dataToWrite);
      console.log(`Code written to ${filePath}`);
      return dataToWrite
    } catch (error) {
      console.error("Error - Writing in a file", error.message);
      throw error; // Rethrow the error to handle it elsewhere if needed
    }
  }

module.exports = { parsingResponse };
const {Configuration, OpenAIApi} = require("openai");
require("dotenv").config();

const configuration = new Configuration({
    apiKey : process.env.api_key_for_hackathon,
});

const openai= new OpenAIApi(configuration);

const prompt="Hey, how are you doing today?";

async function runGpt (){
    const generatedReply = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
    });
    console.log(generatedReply.data.choices[0].text);    //To select one of multiple replies generated
}

runGpt();

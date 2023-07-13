const {Configuartion, OpenAIApi} = require("openai");
require("dotenv").config();

const configuration = new Configuartion({
    apiKey : process.env.api_key_for_hackathon
});

const openai= new OpenAIApi(configuration);

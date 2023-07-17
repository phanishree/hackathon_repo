const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

const prompt =`Generate a proper yaml file for the below API documentation

"Parameters lat, lon required Geographical coordinates (latitude, longitude). If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API. appid required Your unique API key (you can always find it on your account page under the API key tab) mode optional Response format. Possible values are xml and html. If you don't use the mode parameter format is JSON by default. Learn more units optional Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more lang optional You can use this parameter to get the output in your language."`
async function runGpt() {
    const generatedReply = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
    });
    console.log(generatedReply.data.choices[0].text);    //To select one of multiple replies generated
}

runGpt();

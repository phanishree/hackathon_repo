const Crawler = require('crawler');

const extractApiInfo = async () =>{

    let apiInfo = ''
    return new Promise( (resolve, reject) => {
        try{
            const c = new Crawler({
                maxConnections: 10,
                // This will be called for each crawled page
              callback: (error, res) => {
                    if (error) {
                        console.log(error);
                    } else {
                        const $ = res.$;
                        apiInfo = $('#geo').text();
                        resolve(apiInfo);
                    }
                }
            });
           c.queue('https://openweathermap.org/current')
        }catch(error){
            console.log("Error");
        }
      });
}

module.exports = extractApiInfo ; 
/**
 * Job: gocomics
 * 
 * Expected configuration:
 *
 * "comic" : {
 *         "interval" : 60000,
 *         "comic"    : "calvinandhobbes"
 *       }
 * 
 */

module.exports = {

  onInit: function (config, dependencies) {
        dependencies.logger.info('Gocomics job started!');
  },
  
  
      onRun: function (config, dependencies, jobCallback) {
          
        var request = require('request'),
        cheerio = require('cheerio');

        //Create current date string
        var today = new Date();
        var dd = today.getDate();
        
        //Generate a random number based off of the current day as max.
        dd = dd < 10 ? "0"+dd : dd.toString();
        var ddRand = Math.floor(Math.random() * dd) + 1;
        
        var mm = today.getMonth()+1;
        mm = mm < 10 ? "0"+mm : mm.toString();
        
        var yyyy = today.getFullYear();
        yyyy = yyyy.toString();
        
        //Format the new date into the string needed for the URL
        var today = yyyy+ '/' + mm+ '/' + ddRand;         

        var  url = 'http://www.gocomics.com/' + config.comic + "/" + today;
   
        request(url, function(error, response, body){
            if (!error) {
                var $ = cheerio.load(body);
                var src = $('div div.comic__container div.comic__image.js-comic-swipe-target a picture img').attr('src');

                jobCallback(null, {imageSrc: src});
   
            } else {
                console.error('Error connecting to url:', url, error);
            }
        });
    }
};
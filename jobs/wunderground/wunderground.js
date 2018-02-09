/**
 * Job: wunderground
 *
 * Expected configuration:
 *
 * {
 *   "widgetTitle" : "Local Weather",
 *   "interval" : 3600000,
 *
 *   "zipCode" : "ZIPCODE GOES HERE"
 * }
 * 
 *  API key goes into global auth
 * 
 *     "wunderground" : {
 *       "wundergroundapikey" : "API KEY GOES HERE"
 *       }
 */

module.exports = {

  onInit: function (config, dependencies) {
  },
  
  onRun: function (config, dependencies, jobCallback) {

    var logger = dependencies.logger;

    if (!config.globalAuth || !config.globalAuth.wunderground.wundergroundapikey) {
      return jobCallback('Missing wunderground API key - see https://www.wunderground.com/weather/api/');
    }

    var location = "";
    if (config.zipCode) {
      location = "/q/" + String(config.zipCode) + ".json";
    } else {
        return jobCallback("Zipcode not set in configuration.");
    }

    var key = String(config.globalAuth.wunderground.wundergroundapikey);

    const callURL = 'http://api.wunderground.com/api/' + key + "/forecast" + location;
    
    console.log(callURL);

    dependencies.easyRequest.JSON(callURL,
      function (err, hourlyRes) {
            jobCallback(err, {
              title: config.widgetTitle, content: hourlyRes, zipCode: config.zipCode
            });
          });
  }
};

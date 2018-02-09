/**
 * Job: stocks
 *
 * Expected configuration:
 *
 * {
 *   "widgetTitle" : "Stock Price",
 *   "interval" : 60000,
 *   "symbol" : "Stock Symbol goes here"
 * }
 * 
 *  API key goes into global auth
 * 
 *     "stocks" : {
 *       "stocksApiKey" : "API KEY GOES HERE"
 *       }
 */

module.exports = {

  onInit: function (config, dependencies) {
  },
  
  onRun: function (config, dependencies, jobCallback) {

    if (!config.globalAuth || !config.globalAuth.stocks.stocksApiKey) {
      return jobCallback('Missing Stocks API key - see https://www.alphavantage.co/');
    }

    var symbol = "";
    if (config.symbol) {
      symbol = "&symbol=" + String(config.symbol);
    } else {
        return jobCallback("Stock symbol not set in configuration.");
    }

    var key = String(config.globalAuth.stocks.stocksApiKey);

    const callURL = 'https://www.alphavantage.co/query?apikey=' + key + "&function=TIME_SERIES_DAILY&datatype=json&outputsize=compact" + symbol;

    dependencies.easyRequest.JSON(callURL,
      function (err, stockRes) {
            jobCallback(err, {
              title: config.widgetTitle, content: stockRes, symbol: config.symbol
            });
          });
  }
};

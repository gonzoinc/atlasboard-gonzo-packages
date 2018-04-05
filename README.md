Atlasboard Gonzo Package
=======================

## Installation

To add the sub-module, from your root dashboard directory type:

    git submodule add https://github.com/gonzoinc/atlasboard-gonzo-packages.git packages/gonzo


## Available Widgets

### Weather
Shows a 4 day weather forecast from [wunderground.com](https://www.wunderground.com/weather/api/d/docs)

![](screenshots/wunderground_widget.png?raw=true)


Job: wunderground

####Expected configuration:
```JSON
 {
   "widgetTitle" : "Local Weather",
   "interval" : 3600000,
   "zipCode" : "ZIPCODE GOES HERE"
 }
```
 
####API key in global auth
  
```JSON 
     "wunderground" : {
       "wundergroundapikey" : "API KEY GOES HERE"
       }
```

### Stock Ticker
Displays an individual stock symbol ticker with current and high/low [alphavantage.co](https://www.alphavantage.co/)

![](screenshots/stockticket_widget.png?raw=true)


Job: stocks

####Expected configuration:
```JSON
      "stocks" :   {
        "widgetTitle" : "Stock Price",
        "interval" : 60000,
        "symbol" : "GOOGL"
      }
```
 
####API key in global auth
  
```JSON 
    "stocks": {
        "stocksApiKey" : "API KEY GOES HERE"
        }
```


### Go Comic Display
Displays comics from gocomics. You can confgure this to show any of the comics listed here - http://www.gocomics.com/comics/a-to-z
Find the comics you wish to display form the above url, go into the comic itself and grab the comic name from the URL, EX: http://www.gocomics.com/bloomcounty
Enter the name exactly as shown in the URL into the config. The job runs and scrapes the comic page looking for the direct image url of the comic itself and returns that URL to the widget. 
Be aware that some comics image format changes from a banner image to a square. The widget does not compensate for those various image sizes but it will not allow the image to breakout of it's container. It will just show smaller.
When the job runs it pulls a new random image from within the curent month.

![](screenshots/gocomics_widget.png?raw=true)

Job: geocomic

####Expected configuration:
```JSON
      "gocomics" : {
        "interval" : 60000,
        "comic"    : "bloomcounty"
      }
```
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
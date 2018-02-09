widget = {
  //runs when we receive data from the job
  onData: function (el, data) {

    //The parameters our job passed through are in the data object
    //el is our widget element, so our actions should all be relative to that
    if (data.title) {
      $('h2', el).text(data.title + ' (' + data.zipCode + ')');
    }


    var mainContent = $('.content', el).html('');
    
    if (data.content) {
        
      // create initial table
      var table = $('<table></table>').appendTo(mainContent);
      var tr = $('<tr></tr>').appendTo(table);
     
      //loop through the data and populate each days data
      data.content.forecast.simpleforecast.forecastday.forEach(function (weatherItem) {
        
        //Build a date
        var wDate = weatherItem.date.weekday_short + ", " + weatherItem.date.monthname_short + " " + weatherItem.date.day;
        
        //Build the high/low temps
        var temps = "High: " + weatherItem.high.fahrenheit + "</br>Low: " + weatherItem.low.fahrenheit;
        
        // create table cells:
        var itemTd = $('<td></td>').appendTo(tr);
        var hourlyTable = $('<table class="hourlyTable"></table>').appendTo(itemTd);
          
        var td1 = $('<tr></tr>').append('<td class="topText">' + wDate + '</td>').appendTo(hourlyTable);

        var td2 = $('<tr></tr>').append('<td class="centerText"><table><tr><td><img src="' + weatherItem.icon_url + '" width="65px" /></td><td>' + temps + '</td></tr></table></td>').appendTo(hourlyTable);
        var td3 = $('<tr></tr>').append('<td class="bottomText">' + weatherItem.conditions + '</td>').appendTo(hourlyTable);
      });
    }
  }
};
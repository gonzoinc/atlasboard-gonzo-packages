widget = {
  //runs when we receive data from the job
  onData: function (el, data) {

    //The parameters our job passed through are in the data object
    //el is our widget element, so our actions should all be relative to that
    if (data.title) {
      $('h2', el).text(data.title);
    }

    var mainContent = $('.content', el).html('');
    
    if (data.content) {
        
        // create initial table
        var table = $('<table></table>').appendTo(mainContent);
        var tr = $('<tr></tr>').appendTo(table);
          
        //Name of the Stock
        var symbolName = data.symbol;
        
        //Create current date string to pull current data
        var today = new Date();
        var dd = today.getDate();
        dd = dd < 10 ? "0"+dd : dd.toString();
        var mm = today.getMonth()+1;
        mm = mm < 10 ? "0"+mm : mm.toString();
        var yyyy = today.getFullYear();
        yyyy = yyyy.toString();
        var today = yyyy+ '-' + mm+ '-' + dd;
       
        //Build out the high and low prices
        var lowPrice = parseFloat(data.content["Time Series (Daily)"][today]["3. low"]).toFixed(2);
        var highPrice = parseFloat(data.content["Time Series (Daily)"][today]["2. high"]).toFixed(2);
        var lowHigh = "Low: " + lowPrice  + "</br>High: " + highPrice;
        
        // create table cells:
        var itemTd = $('<td></td>').appendTo(tr);
        var stockTable = $('<table class="stockTable"></table>').appendTo(itemTd);
          
        var td1 = $('<tr></tr>').append('<td class="topText">' + symbolName + '</td>').appendTo(stockTable);
        
        var td2 = $('<tr></tr>').append('<td class="centerText">' + parseFloat(data.content["Time Series (Daily)"][today]["4. close"]).toFixed(2) + '</td>').appendTo(stockTable);
        var td3 = $('<tr></tr>').append('<td class="bottomText">' + lowHigh + '</td>').appendTo(stockTable);

    }
  }
};
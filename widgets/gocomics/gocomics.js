widget = {
  onData: function (el, data) {
      
    if (data.title){
      $('.widget-title', el).show().text(data.title);
    }
    else {
      $('.widget-title', el).hide();//Remove the title as it looks better that way
    }

    $('.content', el).html(
        "<img class='featured-image' src='" + data.imageSrc + "'/>"
    );

  }
};
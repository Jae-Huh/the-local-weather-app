$(document).ready(function(){
  var lat;
  var long;
  var url;

  $.ajax({
    url: 'https://ipinfo.io/',
    dataType: 'jsonp',
    success: function(ip) {
      lat = ip.loc.split(",").shift();
      long = ip.loc.split(",").pop();

      console.log("lat: " + lat);
      console.log("long: " + long);

      url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=615322f612931f32c34fe753fd7f4a2a';
      console.log(url);

      $.getJSON(url, function(data){
        console.log(data);
      });


    }


  });


});

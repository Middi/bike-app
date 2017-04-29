$(document).ready(function () {
    function location(lat, lon) {

    $.ajax({
    type:'get',
    url: 'https://oslobysykkel.no/api/v1/stations',
    headers: {
        'Client-Identifier': '9c15107665f894e8396aabad6c3ed366'
    },
    success: function(data) {
        $('#tagged').html(data.stations[0].title); 
    console.log(data.stations);


  }
});
    };

//Get Latitude and Longitude

  function success(pos) {
    var crds = pos.coords

    var lat = crds.latitude;
    var lon = crds.longitude;

    location(lat, lon);

    console.log(lat);
    console.log(lon);

  }

  function error(pos) {

    $.ajax({
        type: 'get',
        url: "https://ipinfo.io/geo",
        success: function(data) {   
      
      var loc = data.loc.split(',');
      var lat = loc[0];
      var lon = loc[1];
      
      console.log(lat);
      console.log(lon);

      location(lat, lon);
        }
    });
    
  }

navigator.geolocation.getCurrentPosition(success, error);

});
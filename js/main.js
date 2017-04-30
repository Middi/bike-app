$(document).ready(function () {
    // pass in the location coords
    function location(lat, lon) {

    $.ajax({
    type:'GET',
    url: 'https://cors-anywhere.herokuapp.com/https://oslobysykkel.no/api/v1/stations/availability',
    headers: {
        'Client-Identifier': '9c15107665f894e8396aabad6c3ed366'
    },
    success: function(data) {
        var check = data.stations.find(checkID);
        
        $('#tagged2').html("bikes available : " + check.availability.bikes); 

    function checkID(response) { 
        return response.id === 261;
    }
     console.log(check); 
  }
});

    $.ajax({
    type:'GET',
    url: 'https://cors-anywhere.herokuapp.com/https://oslobysykkel.no/api/v1/stations',
    headers: {
        'Client-Identifier': '9c15107665f894e8396aabad6c3ed366'
    },
    success: function(data) {
        var check = data.stations.find(checkID);
        
        $('#tagged').html(check.title); 

    function checkID(response) { 
        return response.id === 261;
    }
     console.log(check); 
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

    var url = "https://ipinfo.io/geo";
    $.getJSON(url, function(response){

      var loc = response.loc.split(',');
      var lat = loc[0];
      var lon = loc[1];
      
      location(lat, lon);
    });

  }
navigator.geolocation.getCurrentPosition(success, error);

});
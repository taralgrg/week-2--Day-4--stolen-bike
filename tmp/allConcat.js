var apiKey = "AIzaSyBEtEATtLkkkmRKrW0EgApS7iYFlxce8yg";





$(document).ready(function() {
  $('#map').append("<script async defer src='https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap'>" +
  "</script>");

    var map;
    window.initMap = function () {
      var uluru = {lat: -25.363, lng: 131.044};
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    };
});

var map, pointarray, heatmapPositive, heatmapNegative;

var positiveData = [
  new google.maps.LatLng(40.447348, -3.788121),
  new google.maps.LatLng(40.434323, -3.803893),
  new google.maps.LatLng(40.437421, -3.795270),
  new google.maps.LatLng(40.449075, -3.780997),
  new google.maps.LatLng(40.402111, -3.739083),
  new google.maps.LatLng(40.435166,-3.80226),
  new google.maps.LatLng(40.432926,-3.808585),
  new google.maps.LatLng(40.434517,-3.802556),
  new google.maps.LatLng(40.444713,-3.790052),
  new google.maps.LatLng(40.445605,-3.786194),
  new google.maps.LatLng(40.442015,-3.785042),
  new google.maps.LatLng(40.44036,-3.792457),
  new google.maps.LatLng(40.433487,-3.803087)
];
var negativeData = [  
  new google.maps.LatLng(40.447316, -3.797005),
  new google.maps.LatLng(40.464262, -3.799818),
  new google.maps.LatLng(40.457931, -3.783521),
  new google.maps.LatLng(40.446899, -3.802723),
  new google.maps.LatLng(40.403008, -3.736789),
  new google.maps.LatLng(40.457579, -3.784031),
  new google.maps.LatLng(40.455802, -3.783822),
  new google.maps.LatLng(40.449739, -3.798123),
  new google.maps.LatLng(40.451128,-3.789705),
  new google.maps.LatLng(40.451818,-3.786126),
  new google.maps.LatLng(40.454416,-3.785327),
  new google.maps.LatLng(40.455802,-3.78158),
  new google.maps.LatLng(40.452713,-3.779316),
  new google.maps.LatLng(40.446509,-3.801571),
  new google.maps.LatLng(40.446524,-3.803762),
  new google.maps.LatLng(40.444785,-3.801587),
  new google.maps.LatLng(40.446287,-3.79233),
  new google.maps.LatLng(40.442873,-3.782317),
  new google.maps.LatLng(40.455411,-3.801209),
  new google.maps.LatLng(40.413725,-3.797207),
  new google.maps.LatLng(40.418773,-3.802431),
  new google.maps.LatLng(40.406787,-3.737320)
  
];

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.448160, -3.793532),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

var circle = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(40.406787,-3.737320),
	  title: 'Hello world'
});
	  
	  
	  
  var pointArrayPositive = new google.maps.MVCArray(positiveData);
  var pointArrayNegative = new google.maps.MVCArray(negativeData);

  heatmapPositive = new google.maps.visualization.HeatmapLayer({
    data: pointArrayPositive
  });
  
  heatmapNegative = new google.maps.visualization.HeatmapLayer({
    data: pointArrayNegative
  });

  var gradientPositive = [
    'rgba(255, 0, 0, 0)',    
    'rgba(252, 210, 9, 1)'
	]
  
  heatmapPositive.set('gradient', gradientPositive);
  heatmapPositive.setMap(map);
  heatmapPositive.set('radius', 80);
  
  var gradientNegative = [
    'rgba(0, 0, 0, 0)',    
    'rgba(33, 110, 172, 1)'
	]
  
  heatmapNegative.set('gradient', gradientNegative);
  heatmapNegative.setMap(map);
  heatmapNegative.set('radius', 80);
}

google.maps.event.addDomListener(window, 'load', initialize);
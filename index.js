
function initMap() {
	  var locations = [
	  ['House 1', 33.860840,-83.9403440],
	  ['House 2',33.875620,-83.822140]
	  ];
	 
	  var map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 10,
	  center:   {lat: 33.8382453918457 , lng: -83.90214538574219} ,
	  });
   
	  var infowindow = new google.maps.InfoWindow();
	  
	  var marker, i;
	  
	  for(i = 0; i < locations.length; i++)
	  {
marker = new google.maps.Marker({
position: new google.maps.LatLng(locations[i][1], locations[i][2]),
map:map
});
	  }
	
}

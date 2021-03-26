
function initMap() {
	  var locations = [
	  ['Alexander Park', 33.9149, -84.0043],
      ['Bay Creek Park', 33.882481552416  , -83.921355146343 ],
      ['Bethesda Park', 33.9019, -84.0886],
	  ['Bryson Park', 33.803150, -84.402150],
      ['Club Drive Park', 33.826000, -84.110340],
	  ['Collins Hill Park', 33.974230 , -83.993890],
	  ['Dacula Park', 33.811710, -83.687798],
	  ['Duncan Creek Park',   34.020950, -84.455510],
	  ['E.E. Robinson Park ',  33.728340,  -84.368400],
	  





	  ];
	 
	    var map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 10,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  center:   {lat: 33.8382453918457 , lng: -83.90214538574219} 
	  });
   

	  
	  var marker, i;
	  var infowindow = new google.maps.InfoWindow()

	  for(i = 0; i < locations.length; i++)
	  {
		var name_of_park = locations[i][0]
		marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		map:map
		});
    var content = "Park Name: " + name_of_park  +  '<br>'+ '<button> Check In </button>'
    

		google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
        infowindow.setContent(content);
           infowindow.open(map,marker);
        };
    })(marker,content,infowindow)); 
	  }

	
}



var locations = [
['Alexander Park', 33.9149, -84.0043, 0],
['Bay Creek Park', 33.882481552416  , -83.921355146343, 0],
['Bethesda Park', 33.9019, -84.0886, 0],
['Bryson Park', 33.803150, -84.402150, 0],
['Club Drive Park', 33.826000, -84.110340, 0],
['Collins Hill Park', 33.974230 , -83.993890, 0],
['Dacula Park', 33.811710, -83.687798, 0],
['Duncan Creek Park',   34.020950, -84.455510, 0],
['E.E. Robinson Park ',  33.728340,  -84.368400, 0],

];
var infowindow;

var current_park = '';
var content;
function initMap() {

	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center:   {lat: 33.8382453918457 , lng: -83.90214538574219} 
	});



	var marker, i;
	infowindow = new google.maps.InfoWindow()


	for(i = 0; i < locations.length; i++)
	{
		var name_of_park = locations[i][0]
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map:map
		});

		content = "Park Name: " + name_of_park  +  "<br><button id='checkin' onclick = myCheckinFunc()>Check In!</button>" + "<br><button id='checkout' onclick = myCheckoutFunc()>Check Out!</button>";

		google.maps.event.addListener(marker,'click', function(marker,content,infowindow, name_of_park){ 

			return function() {
				current_park = name_of_park;
				infowindow.setContent(content);
				infowindow.open(map,marker);
				
			}

		}(marker,content,infowindow, name_of_park)); 


	}

	
}
function myCheckoutFunc()
{
	
	for(var k = 0; k < locations.length; k++){
		if(locations[k][0] == current_park && locations[k][3] > 0){
			locations[k][3]--;
		}
	}	
	
	

	for(var k = 0; k < locations.length; k++){
		if(locations[k][0] == current_park){
			var newContent = "Park Name: " + current_park  +  "<br><button id='checkin' onclick = myCheckinFunc()>Check In!</button>" + "<br><button id='checkout' onclick = myCheckoutFunc()>Check Out!</button>" + "<br>" + locations[k][3];
			infowindow.setContent(newContent);
			console.log(current_park);
			console.log(locations[k][3]);
		}
	}	

}
function myCheckinFunc()
{
	
	for(var k = 0; k < locations.length; k++){
		if(locations[k][0] == current_park){
			locations[k][3]++;
		}
	}	

	for(var k = 0; k < locations.length; k++){
		if(locations[k][0] == current_park){
			var newContent = "Park Name: " + current_park  +  "<br><button id='checkin' onclick = myCheckinFunc()>Check In!</button>" + "<br><button id='checkout' onclick = myCheckoutFunc()>Check Out!</button>" + "<br>" + locations[k][3];
			infowindow.setContent(newContent);
			console.log(current_park);
			console.log(locations[k][3]);
		}
	}	

}

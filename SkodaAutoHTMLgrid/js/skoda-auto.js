// google maps
var position = new google.maps.LatLng(49.995277777778000, 14.202222222222000);
var mapSmall = new google.maps.Map(document.getElementById('mapSmall'), {
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	center: position,
	zoom: 12
});
new google.maps.Marker({
	title: 'Albatross\nSokolská 162, 267 16 Vysoký Újezd',
	position: position,
	animation: google.maps.Animation.BOUNCE,
	map: mapSmall
});
var mapLarge = new google.maps.Map(document.getElementById('mapLarge'), {
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	center: position,
	zoom: 12
});
new google.maps.Marker({
	title: 'Albatross\nSokolská 162, 267 16 Vysoký Újezd',
	position: position,
	animation: google.maps.Animation.BOUNCE,
	map: mapLarge
});
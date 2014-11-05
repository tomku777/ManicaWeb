// google maps
var position = new google.maps.LatLng(49.995277777778000, 14.202222222222000);
var mapSmall = new google.maps.Map(document.getElementById('mapSmall'), {
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	center: position,
	scrollwheel: false,
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
	scrollwheel: false,
	zoom: 12
});
new google.maps.Marker({
	title: 'Albatross\nSokolská 162, 267 16 Vysoký Újezd',
	position: position,
	animation: google.maps.Animation.BOUNCE,
	map: mapLarge
});

$('.menu-nav').affix({
	offset: {
		top: $('.header').height()
	}
});

$('#quick-links').on('hide.bs.collapse', function () {
	$("#quick-links-angle").removeClass("fa-angle-up");
	$("#quick-links-angle").addClass("fa-angle-down");
});
$('#quick-links').on('show.bs.collapse', function () {
	$("#quick-links-angle").removeClass("fa-angle-down");
	$("#quick-links-angle").addClass("fa-angle-up");
});
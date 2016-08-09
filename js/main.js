var map = L.map('map').setView([39.1487845, -101.1038823], 4);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var LeafIcon = L.Icon.extend({
	options: {
		iconSize:     [80, 80],
		iconAnchor:   [22, 94],
		popupAnchor:  [-3, -76]
	}
});

var bostonIcn = new LeafIcon({iconUrl: 'img/boston_celtics.svg'}),
	portlandIcn = new LeafIcon({iconUrl: 'img/portland_trailblazers.svg'}),
	SanAntonioIcn = new LeafIcon({iconUrl: 'img/san_antonio_spurs.svg'});

L.marker([42.357778, -71.061667], {icon: bostonIcn}).bindPopup("Boston Celtics").addTo(map);
L.marker([45.516667, -122.666667], {icon: portlandIcn}).bindPopup("Portland Trailblazers").addTo(map);
L.marker([29.428611, -98.493333], {icon: SanAntonioIcn}).bindPopup("San Antonio Spurs").addTo(map);

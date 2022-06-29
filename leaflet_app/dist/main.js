// map class initialize
var map = L.map('map').setView([59.30689, 18.0570], 13);
map.zoomControl.setPosition('topright');

// adding osm tilelayer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/*var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});*/


//Adding marker in the center of map
// L.marker([59.33258, 18.0649]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();

//add map scale
L.control.scale({position: 'bottomright'}).addTo(map);

//Map coordinate display
map.on('mousemove', function(e) {
    console.log(e)
    $('.coordinate').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
})



//Geojson load
var marker = L.markerClusterGroup();
var taji = L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.Name)
    }
});
taji.addTo(marker);
//marker.addTo(map);

var isochrones_5_min = L.geoJSON(isochrones_5_m, {
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.name)
	}
});
//isoc.addTo(marker2);
var isochrones_10_min = L.geoJSON(isochrones_10_m, {
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.name)
	}
});

//Leaflet layer control
var baseMaps = {
    'OSM': osm
	//,'Toned': Stadia_AlidadeSmooth
}

var overlayMaps = {
    'Stores': marker,
	'5_minute_walk': isochrones_5_min,
	'10_minute_walk': isochrones_10_min
}


L.control.layers(baseMaps, overlayMaps, {collapsed: false, position: 'topleft'}).addTo(map)

function showAbout() {
   document.getElementById('popup_container').style.display = "block";
}

function closeAbout() {
   document.getElementById("popup_container").style.display = "none";
}
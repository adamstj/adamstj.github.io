// map class initialize
var map = L.map('map').setView([59.33258, 18.0649], 13);
map.zoomControl.setPosition('topright');

// adding osm tilelayer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});


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


//Leaflet layer control
var baseMaps = {
    'OSM': osm,
    'Toned': Stadia_AlidadeSmooth
}

var overlayMaps = {
    'Stores': marker
}

L.control.layers(baseMaps, overlayMaps, {collapsed: false, position: 'topleft'}).addTo(map)

//Full screen map view
var mapId = document.getElementById('map');
function fullScreenView() {
    if(document.fullscreenElement){
        document.exitFullscreen()
    }else {
        mapId.requestFullscreen();
    }
}

//Leaflet browser print function
L.control.browserPrint({position: 'topright'}).addTo(map)

//Leaflet search Geocoder
L.Control.geocoder().addTo(map);

//Leaflet measure
L.control.measure({
    primaryLengthUnit: 'kilometers', 
    secondaryLengthUnit: 'meters',
    primaryAreaUnit: 'sqkilometers',
    secondaryAreaUnit: 'sqmeters',
    activeColor: '#3D535D',
    completedColor: "#3D535D",
}).addTo(map);

//Zoom to layer
$('.zoom-to-layer').click(function(){
    map.setView([59.33258, 18.0649], 13)
})
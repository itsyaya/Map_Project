
var cameras = [
    { name: "An d. Leite 2, 99189 Erfurt, Camera 89", latitude: 51.1657, longitude: 10.4515 },
    { name: "Berlin Tempelhof 12033 Camera 55", latitude: 52.5200, longitude: 13.4050 },
    { name: "Frankfurt am Main, Camera 67", latitude: 50.1109, longitude: 8.6821 },
    { name: "München 81669, Camera 40", latitude: 48.1351, longitude: 11.5820 },
    { name: "Hamburg Ballindam Camera 110", latitude: 53.5511, longitude: 9.9937 },
    { name: "01139 Dresden, Camera 60", latitude: 51.0504, longitude: 13.7373 },
    { name: "Heidelberg 69124 Camera 77", latitude: 49.3988, longitude: 8.6724 },
    { name: "Gerberstraße, 04105 Leipzig", latitude: 51.3397, longitude: 12.3731 },
    { name: "Mainz 5131 Camera 100", latitude: 49.9929, longitude: 8.2473 },
    { name: "Stuttgart 70182, Camera 10", latitude: 48.7758, longitude: 9.1829 }
];


function updateMapMarkers(filteredCameras) {
    map.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
 
    filteredCameras.forEach(function (camera) {
        var marker = L.marker([camera.latitude, camera.longitude]).addTo(map);
        marker.bindPopup(camera.name);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById("formsearch");
    const actionButton = document.getElementById("action1");

    actionButton.addEventListener('click', function () {
        event.preventDefault(); 
     
        const filteredCameras = cameras.filter(camera => {
            console.log(searchForm.value); 
            return camera.name.toLowerCase().includes(searchForm.value.toLowerCase().trim());
        });

        updateMapMarkers(filteredCameras);
    });
});

var mapElement = document.getElementById('map');
if (mapElement) {
    var map = L.map('map').setView([51.1657, 10.4515], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    cameras.forEach(function (camera) {
        var marker = L.marker([camera.latitude, camera.longitude]).addTo(map);
        marker.bindPopup(camera.name);
    });
}

//  import * as L from 'leaflet';

// export interface Camera {
//     name: string;
//     latitude: number;
//     longitude: number;
//   };
//   const cameras: Camera[] = [
//     { name: "Camera 1", latitude: 52.5200, longitude: 13.4050 }
//    // { name: "Camera 2", latitude: 52.3906, longitude: 13.0645 }, 
//    // { name: "Camera 3", latitude: 51.3397, longitude: 12.3731 }, 
//   ];
  
//   const mapElement = document.getElementById('map');
//   if (mapElement) {
//     const map = L.map('map').setView([52.52, 13.4050], 10);
  
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
//     }).addTo(map);
//     cameras.forEach((camera) => {
//       const marker = L.marker([camera.latitude, camera.longitude]).addTo(map);
  
//       marker.bindPopup(camera.name);
//       // console.log(camera);
//     });
//   }

// ####################################?

  // import * as L from 'leaflet';

  // interface Camera {
  //     name: string;
  //     latitude: number;
  //     longitude: number;
  // }
  
  // const cameras: Camera[] = [
  //     { name: "Camera 1", latitude: 52.5200, longitude: 13.4050 },
  //     { name: "Camera 2", latitude: 52.3906, longitude: 13.0645 },
  //     { name: "Camera 3", latitude: 51.3397, longitude: 12.3731 },
  // ];

  // function initializeMap() {
  //     const mapElement = document.getElementById('map');
  
  //     if (!mapElement) {
  //         console.error('Map element not found');
  //         return;
  //     }
  
  //     const map = L.map('map').setView([52.52, 13.4050], 10);
  
  //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //         attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  //     }).addTo(map);

  //     cameras.forEach((camera) => {
  //         const marker = L.marker([camera.latitude, camera.longitude]).addTo(map);
  //         marker.bindPopup(camera.name);
  //     });
  // }
  
  // document.addEventListener('DOMContentLoaded', initializeMap);
  
import React from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import '../styles/LokasiLayananSection.css';

// Coordinates for each city in Jabodetabek
const jabodetabekCenter = [-6.200000, 106.816666]; // Jakarta
const bekasiCenter = [-6.240893, 106.992874]; // Bekasi
const tangerangCenter = [-6.202393, 106.652710]; // Tangerang
const depokCenter = [-6.402484, 106.794243]; // Depok
const bogorCenter = [-6.597147, 106.806039]; // Bogor

// Custom marker icon with more height
const customMarkerIcon = new L.Icon({
  iconUrl: require('../assets/images/betulin-marker.png'), // Replace with your custom marker icon
  iconSize: [60, 65], // Increase the size of the marker
  iconAnchor: [20, 40], // Adjust anchor to the larger size
  popupAnchor: [0, -40] // Adjust popup anchor to align with the larger marker
});

const LokasiLayananSection = () => {
  return (
    <section className="lokasi-layanan-section">
      <div className="lokasi-header">
        <h2>Kami tersedia di Jabodetabek</h2>
        <p>100 Tukang &bull; 30 Kecamatan</p>
      </div>

      <div className="lokasi-map">
        <MapContainer center={jabodetabekCenter} zoom={10} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
          {/* Custom tile layer for a cleaner look */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          />

          {/* Highlight Jabodetabek area using circles */}
          <Circle center={jabodetabekCenter} radius={30000} color="#06479D" fillColor="#ABCFFF" fillOpacity={0.5} />

          {/* Markers for each city */}
          <Marker position={jabodetabekCenter} icon={customMarkerIcon}>
            <Popup className="custom-popup">
              <div>
                <h3>Jakarta Area</h3>
                <p>Available Services: 100 Tukang &bull; 30 Kecamatan</p>
              </div>
            </Popup>
          </Marker>

          <Marker position={bekasiCenter} icon={customMarkerIcon}>
            <Popup className="custom-popup">
              <div>
                <h3>Bekasi Area</h3>
                <p>Available Services: 100 Tukang &bull; 30 Kecamatan</p>
              </div>
            </Popup>
          </Marker>

          <Marker position={tangerangCenter} icon={customMarkerIcon}>
            <Popup className="custom-popup">
              <div>
                <h3>Tangerang Area</h3>
                <p>Available Services: 100 Tukang &bull; 30 Kecamatan</p>
              </div>
            </Popup>
          </Marker>

          <Marker position={depokCenter} icon={customMarkerIcon}>
            <Popup className="custom-popup">
              <div>
                <h3>Depok Area</h3>
                <p>Available Services: 100 Tukang &bull; 30 Kecamatan</p>
              </div>
            </Popup>
          </Marker>

        </MapContainer>
      </div>
    </section>
  );
};

export default LokasiLayananSection;

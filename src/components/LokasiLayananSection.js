import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/LokasiLayananSection.css';

// Coordinates for each city in Jabodetabek
const jabodetabekCenter = [-6.200000, 106.816666]; // Jakarta
const bekasiCenter = [-6.240893, 106.992874]; // Bekasi
const tangerangCenter = [-6.202393, 106.652710]; // Tangerang
const depokCenter = [-6.402484, 106.794243]; // Depok

// Custom marker icon with more height
const customMarkerIcon = new L.Icon({
  iconUrl: require('../assets/images/betulin-marker.png'), // Replace with your custom marker icon
  iconSize: [60, 65], // Increase the size of the marker
  iconAnchor: [20, 40], // Adjust anchor to the larger size
  popupAnchor: [0, -40] // Adjust popup anchor to align with the larger marker
});

const LokasiLayananSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensure the animation happens only once while scrolling
    });
  }, []);

  return (
    <section className="lokasi-layanan-section" data-aos="fade-up">
      <div className="lokasi-header" data-aos="fade-down">
        <h2>Kami tersedia di Jabodetabek</h2>
        <div className="lokasi-subtext" data-aos="fade-up" data-aos-delay="200">
          <div className="subtext-item">
            <span className="subtext-number">100</span>
            <span className="subtext-text">Tukang</span>
          </div>
          <div className="subtext-divider">|</div>
          <div className="subtext-item">
            <span className="subtext-number">30</span>
            <span className="subtext-text">Kecamatan</span>
          </div>
        </div>
      </div>

      <div className="lokasi-map" data-aos="zoom-in" data-aos-delay="400">
        <MapContainer 
          center={jabodetabekCenter} 
          zoom={10} 
          scrollWheelZoom={false}
          doubleClickZoom={false} 
          dragging={false} 
          touchZoom={false} 
          zoomControl={false} 
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          />
          <Circle center={jabodetabekCenter} radius={30000} color="#06479D" fillColor="#ABCFFF" fillOpacity={0.5} />

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

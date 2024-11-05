import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import '../styles/LokasiLayananSection.css';

const customMarkerIcon = new L.Icon({
  iconUrl: require('../assets/images/betulin-marker.png'),
  iconSize: [60, 65],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

const BASE_RADIUS = 10000; // Base radius for circles in meters

// Default locations if API data is unavailable
const defaultLocations = [
  { id: 1, KotaLayanan: 'Jakarta', LatitudeKota: -6.2088, LongitudeKota: 106.8456, DeskripsiPerLokasi: 'Layanan di Jakarta' },
  { id: 2, KotaLayanan: 'Bogor', LatitudeKota: -6.595, LongitudeKota: 106.8167, DeskripsiPerLokasi: 'Layanan di Bogor' },
  { id: 3, KotaLayanan: 'Depok', LatitudeKota: -6.4025, LongitudeKota: 106.7942, DeskripsiPerLokasi: 'Layanan di Depok' },
  { id: 4, KotaLayanan: 'Tangerang', LatitudeKota: -6.1783, LongitudeKota: 106.6319, DeskripsiPerLokasi: 'Layanan di Tangerang' },
  { id: 5, KotaLayanan: 'Bekasi', LatitudeKota: -6.2416, LongitudeKota: 106.992, DeskripsiPerLokasi: 'Layanan di Bekasi' }
];

// Function to calculate distance between two points using the Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

// Threshold distance for grouping (in kilometers)
const GROUP_DISTANCE_THRESHOLD = 50;

const LokasiLayananSection = () => {
  const [locations, setLocations] = useState(defaultLocations);
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    axios.get(`${process.env.REACT_APP_API_URL}/api/lokasi-layanan-sections`)
      .then(response => {
        const locationsData = response.data.data;
        if (locationsData && locationsData.length > 0) {
          setLocations(locationsData);
          groupLocations(locationsData);
        } else {
          groupLocations(defaultLocations);
        }
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
        groupLocations(defaultLocations); // Use default locations in case of error
      });
  }, []);

  const groupLocations = (locations) => {
    const groupedCircles = [];

    locations.forEach((location) => {
      const foundGroup = groupedCircles.find(group =>
        calculateDistance(
          group.center[0],
          group.center[1],
          location.LatitudeKota,
          location.LongitudeKota
        ) < GROUP_DISTANCE_THRESHOLD
      );

      if (foundGroup) {
        foundGroup.locations.push(location);
        const latSum = foundGroup.locations.reduce((sum, loc) => sum + loc.LatitudeKota, 0);
        const lonSum = foundGroup.locations.reduce((sum, loc) => sum + loc.LongitudeKota, 0);
        foundGroup.center = [latSum / foundGroup.locations.length, lonSum / foundGroup.locations.length];
      } else {
        groupedCircles.push({
          center: [location.LatitudeKota, location.LongitudeKota],
          locations: [location]
        });
      }
    });

    setCircles(groupedCircles);
  };

  const MapBounds = ({ locations }) => {
    const map = useMap();

    useEffect(() => {
      if (locations.length > 0) {
        const bounds = L.latLngBounds(locations.map(loc => [loc.LatitudeKota, loc.LongitudeKota]));
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }, [locations, map]);

    return null;
  };

  return (
    <section className="lokasi-layanan-section" data-aos="fade-up">
      <div className="lokasi-header" data-aos="fade-down">
        <h2>Kami tersedia di Kota-kota Berikut Ini</h2>
        <div className="lokasi-subtext" data-aos="fade-up" data-aos-delay="200">
          <div className="subtext-item">
            <span className="subtext-number">Mitra Terbaik</span>
            <span className="subtext-text">Ahli di Bidangnya</span>
          </div>
          <div className="subtext-divider">|</div>
          <div className="subtext-item">
            <span className="subtext-number">Lebih dari 50+</span>
            <span className="subtext-text">Mitra</span>
          </div>
        </div>
      </div>

      <div className="lokasi-map" data-aos="zoom-in" data-aos-delay="400">
        <MapContainer 
          center={[-6.2, 106.816666]} 
          zoom={10}
          scrollWheelZoom={false}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          />

          <MapBounds locations={locations} />

          {circles.map((group, index) => (
            <React.Fragment key={index}>
              <Circle
                center={group.center}
                radius={BASE_RADIUS * group.locations.length}
                color="#06479D"
                fillColor="#ABCFFF"
                fillOpacity={0.5}
              />
              {group.locations.map(location => (
                <Marker
                  key={location.id}
                  position={[location.LatitudeKota, location.LongitudeKota]}
                  icon={customMarkerIcon}
                >
                  <Popup className="custom-popup">
                    <div>
                      <h3>{location.KotaLayanan} Area</h3>
                      <p>{location.DeskripsiPerLokasi}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </React.Fragment>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default LokasiLayananSection;

// src/components/Map.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import instance from '../utils/axiosInstance';

const MapComponent = () => {
  const [experiences, setExperiences] = useState([]);

  // Fetching the experiences
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await instance.get('/api/experiences');
        setExperiences(response.data);
      } catch (err) {
        console.error('Failed to fetch experiences:', err);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ width: '100%', height: '600px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {experiences.map((experience) => (
          <Marker 
            key={experience.id}
            position={[experience.latitude, experience.longitude]}
          >
            <Popup>
              {experience.name} - {experience.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;

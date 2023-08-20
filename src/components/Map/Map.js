import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./map.css";

// Mock experience data (You'll replace this with your actual data source)
const mockExperiences = [
  { id: 1, title: "Experience 1", lat: 51.505, lng: -0.09 },
  { id: 2, title: "Experience 2", lat: 51.515, lng: -0.1 },
  { id: 3, title: "Experience 3", lat: 51.525, lng: -0.11 }
];

const MapComponent = () => {
  return (
    <div>
      <MapContainer id="map-container" center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mockExperiences.map(experience => (
          <Marker
            key={experience.id}
            position={[experience.lat, experience.lng]}
          >
            <Popup>{experience.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./map.css";

const MapComponent = ({ experiences }) => {
  const center = experiences.length 
    ? [experiences[0].lat, experiences[0].lon] 
    : [51.505, -0.09];

  return (
    <div>
      <MapContainer id="map-container" center={center} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {experiences.map(experience => (
          <Marker
            key={experience.id}
            position={[experience.lat, experience.lon]}
          >
            <Popup>
              <div>
                <h2>{experience.exp_name}</h2>
                <p>Type: {experience.exp_type}</p>
                <p>Location: {experience.region}, {experience.country}</p>
                <p>Description: {experience.exp_description}</p>
                <p>Bookings: {experience.bookings}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;

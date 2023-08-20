import React, { useState } from 'react';
import instance from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import './style.css'; 

const ExperienceForm = () => {
  const [exp_name, setExpName] = useState('');
  const [exp_description, setExpDescription] = useState('');
  const [region, setRegion] = useState('');
  const [exp_type, setExpType] = useState('');
  const [country, setCountry] = useState('');
  const [lon, setLon] = useState('');
  const [lat, setLat] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post('/api/experiences', {
        exp_name,
        exp_description,
        region,
        exp_type,
        country,
        lon: parseFloat(lon),
        lat: parseFloat(lat),
      });

      console.log('Experience added:', response.data);
      setSuccessMessage('Experience added successfully.');
        setTimeout(() => {
          navigate('/');
        }, 3000);
    } catch (err) {
      setError('Failed to add the experience.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text"
            value={exp_name}
            onChange={e => setExpName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea 
            value={exp_description}
            onChange={e => setExpDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Region:</label>
          <input 
            type="text"
            value={region}
            onChange={e => setRegion(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Type:</label>
          <input 
            type="text"
            value={exp_type}
            onChange={e => setExpType(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Country:</label>
          <input 
            type="text"
            value={country}
            onChange={e => setCountry(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Longitude:</label>
          <input 
            type="number"
            step="0.0001"
            value={lon}
            onChange={e => setLon(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Latitude:</label>
          <input 
            type="number"
            step="0.0001"
            value={lat}
            onChange={e => setLat(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button type="submit">Add Experience</button>
      </form>
    </div>
  );
};

export default ExperienceForm;

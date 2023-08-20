// src/components/Experiences/ExperienceForm.js
import React, { useState } from 'react';
import instance from '../../utils/axiosInstance';

const ExperienceForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post('/api/experiences', {
        name,
        description,
        region
      });

      console.log('Experience added:', response.data);
      setName('');
      setDescription('');
      setRegion('');
    } catch (err) {
      setError('Failed to add the experience.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description}
            onChange={e => setDescription(e.target.value)}
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
        {error && <p>{error}</p>}
        <button type="submit">Add Experience</button>
      </form>
    </div>
  );
};

export default ExperienceForm;

// src/components/Experiences/ExperienceList.js
import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import axios from 'axios';

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/experiences');
        setExperiences(response.data);
      } catch (err) {
        console.error('Failed to fetch experiences:', err);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <div>
      <ul>
        {experiences.map(experience => (
          <li key={experience.id}>
            {experience.name} - {experience.description}
            <button onClick={() => setSelectedExperience(experience)}>Book</button>
          </li>
        ))}
      </ul>

      {selectedExperience && <BookingForm experience={selectedExperience} />}
    </div>
  );
};

export default ExperienceList;

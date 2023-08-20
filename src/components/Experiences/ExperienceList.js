// src/components/Experiences/ExperienceList.js
import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/axiosInstance';

const ExperienceList = () => {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await instance.get('/api/experiences');
        setExperiences(response.data);
      } catch (err) {
        console.error('Failed to fetch experiences:', err);
        if (err.response && err.response.status === 401) {
          navigate('/login'); // redirect to the login page
        }
      }
    };

    fetchExperiences();
  }, [navigate]);

  return (
    <div>
        <ul>
            {experiences.map(experience => (
                <li key={experience.id}>
                    {experience.exp_name} - {experience.exp_description}
                    <button onClick={() => setSelectedExperience(experience)}>Book</button>
                </li>
            ))}
        </ul>

        {selectedExperience && <BookingForm experience={selectedExperience} />}
    </div>
);
};

export default ExperienceList;

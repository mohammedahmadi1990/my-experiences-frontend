// src/components/Experiences/ExperienceList.js
import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/axiosInstance';
import './style.css'; // Import your CSS file

const ExperienceList = ({ searchRegion, setResults, results }) => {
  const navigate = useNavigate();
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        let url = '/api/experiences';
        if (searchRegion) {
          url += `?region=${searchRegion}`;
        }
        const response = await instance.get(url);
        setResults(response.data);    
      } catch (err) {
        console.error('Failed to fetch experiences:', err);
        if (err.response && err.response.status === 401) {
          navigate('/login'); 
        }
      }
    };

    fetchExperiences();
  }, [navigate, searchRegion, setResults]);

  return (
    <div className="experience-list-container"> {/* Add a class name for styling */}
      <ul className="experience-list">
        {results.map(experience => (
          <li key={experience.id} className="experience-card">
            <div className="experience-content">
              <h3>{experience.exp_name}</h3>
              <p>{experience.exp_description}</p>
              <button
                onClick={() => navigate(`/experiences/${experience.id}/book`, { state: { experience } })}
              >
                Book
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedExperience ? (
        <BookingForm experience={selectedExperience} onClose={() => setSelectedExperience(null)} />
      ) : null}
    </div>
  );
};

export default ExperienceList;

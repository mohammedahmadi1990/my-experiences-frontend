import React, { useState } from 'react';
import instance from '../../utils/axiosInstance';
import { useLocation } from 'react-router-dom';

const BookingForm = ({ onClose }) => {
  const [people, setPeople] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const location = useLocation();
  const experienceFromState = location.state?.experience;

  const handleBooking = async () => {
    try {
      const response = await instance.post(`/api/experiences/${experienceFromState.id}/book`, {
        people
      });

      console.log('Booking successful:', response.data);
      setSuccess('Booking was successful!');
      setPeople(1);

      
      setTimeout(() => {
          setSuccess(''); 
          if (onClose) onClose(); 
      }, 2000);
    } catch (err) {
      setError('Failed to book the experience.');
    }
  };

  return (
    <div>
      <h3>Booking for {experienceFromState.exp_name}</h3>
      <label>
        Number of people: 
        <input 
          type="number" 
          value={people}
          onChange={e => setPeople(e.target.value)}
          min="1"
        />
      </label>
      <button onClick={handleBooking}>Book Experience</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default BookingForm;

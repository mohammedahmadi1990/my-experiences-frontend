// src/components/Experiences/BookingForm.js
import React, { useState } from 'react';
import instance from '../../utils/axiosInstance';


const BookingForm = ({ experience }) => {
  const [people, setPeople] = useState(1);
  const [error, setError] = useState('');

  const handleBooking = async () => {
    try {
      const response = await instance.post(`/api/experiences/${experience.id}/book`, {
        people
      });

      console.log('Booking successful:', response.data);
      setPeople(1);
    } catch (err) {
      setError('Failed to book the experience.');
    }
  };

  return (
    <div>
      <h3>Booking for {experience.name}</h3>
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default BookingForm;

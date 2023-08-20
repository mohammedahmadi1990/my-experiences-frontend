// src/components/Auth/Logout.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/axiosInstance';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await instance.post('/api/users/logout'); // send a request to logout endpoint
        localStorage.removeItem('authToken'); // clear the token from local storage
        navigate('/login'); // redirect to the login page after logout
      } catch (error) {
        console.error('Failed to logout:', error);
        // Optionally show an error message or handle the error in another way
      }
    };

    performLogout();
  }, [navigate]);

  return (
    <div>Logging out...</div> // Optional message while the logout request is being processed
  );
};

export default Logout;

// components/PrivateRoute.js

import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ path, element }) => {
  const isAuthenticated = Boolean(localStorage.getItem('authToken'));
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <Routes>
      <Route path={path} element={element} />
    </Routes>
  );
};

export default PrivateRoute;

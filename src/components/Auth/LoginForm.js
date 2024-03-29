// components/LoginForm.js
import React, { useState } from 'react';
import instance from '../../utils/axiosInstance'; 
import { Link, useNavigate } from 'react-router-dom';
import './style.css'; 

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post('/api/users/login', {
        username,
        password
      });

      if (response.data.message === "Logged in successfully") {
        console.log('User logged in:', response.data);
        navigate('/'); 
      } else {
        setError('Failed to login. Please check your credentials.');
      }
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p className="login-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginForm;

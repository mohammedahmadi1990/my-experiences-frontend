// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import BookingForm from './components/Experiences/BookingForm';
import ExperienceForm from './components/Experiences/ExperienceForm';
import ExperienceList from './components/Experiences/ExperienceList';
import Search from './components/Search/Search';
import LoginForm from './components/Auth/LoginForm';
import Logout from './components/Auth/Logout';
import MapComponent from './components/Map/Map';
import Home from './components/Home/Home';

// Context
import { UserProvider } from './contexts/UserContext';
import RegisterForm from './components/Auth/RegisterForm';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/add-experience" element={<ExperienceForm />} />
            <Route path="/experiences" element={<ExperienceList />} />               
            <Route path="/experiences/:id/book" element={<BookingForm />} />  
            <Route path="/map" element={<MapComponent />} />      
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;


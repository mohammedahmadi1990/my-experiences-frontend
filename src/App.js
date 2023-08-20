// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Components
import ExperienceForm from './components/Experiences/ExperienceForm';
import ExperienceList from './components/Experiences/ExperienceList';
import Search from './components/Experiences/Search';
import LoginForm from './components/Auth/LoginForm';
import MapComponent from './components/Map';

// Context
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/search" element={<Search />} />
            <Route path="/add-experience" element={<ExperienceForm />} />
            <Route path="/experiences" element={<ExperienceList />} />
            <Route path="/map" element={<MapComponent />} />
            <Route path="/" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

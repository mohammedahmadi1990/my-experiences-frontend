// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';

// Components
import BookingForm from './components/Experiences/BookingForm';
import ExperienceForm from './components/Experiences/ExperienceForm';
import ExperienceList from './components/Experiences/ExperienceList';
import Search from './components/Experiences/Search';
import LoginForm from './components/Auth/LoginForm';
import Logout from './components/Auth/Logout';
import MapComponent from './components/Map/Map';
import Home from './components/Home/Home';

// Context
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/search" element={<Search />} />
            <Route path="/add-experience" element={<ExperienceForm />} />
            <Route path="/experiences" element={<ExperienceList />} />   
            <Route path="/exp" element={<Home />} />
            <Route path="/experiences/:id/book" element={<BookingForm />} />  
            <Route path="/map" element={<MapComponent />} />
       
            {/* <Route path="/map" element={
              <PrivateRoute>
                <MapComponent />
              </PrivateRoute>} /> */}
            <Route path="/" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;


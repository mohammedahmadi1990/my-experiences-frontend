import React, { useState } from 'react';
import MapComponent from '../Map/Map';
import "./home.css"
import ExperienceList from '../Experiences/ExperienceList';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchRegion, setSearchRegion] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (region) => {
    setSearchRegion(region);
  };

  return (
    <div className="experience-view-container">
      <div className="left-column">
        <div className="menu-container">
          <ul className="menu-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-experience">Add Experience</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </div>
        <Search onSearch={handleSearch} />
        <div className="list-container">
          <ExperienceList 
            searchRegion={searchRegion} 
            setResults={setResults}
            results={results} 
          />
        </div>
      </div>  
      <div className="map-container">        
        <MapComponent experiences={results} />
      </div>
    </div>
  );
};

export default Home;

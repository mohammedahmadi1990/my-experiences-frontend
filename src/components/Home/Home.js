import React from 'react';
import MapComponent from '../Map/Map';
import "./home.css"
import ExperienceList from '../Experiences/ExperienceList';
import Search from '../Experiences/Search';

const Home = () => {
  return (
    <div className="experience-view-container">
      <div className="left-column">
        <div className="search-container">
          <Search />
        </div>
        <div className="list-container">
          <ExperienceList />
        </div>
      </div>
      <div className="map-container">
        <MapComponent />
      </div>
    </div>
  );
};

export default Home;

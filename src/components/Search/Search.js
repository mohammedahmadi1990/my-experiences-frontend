import React, { useState } from 'react';
import "./search.css";

const Search = ({ onSearch }) => {
  const [region, setRegion] = useState('');
  // const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      onSearch(region);
    } catch (err) {
      console.error('Failed to fetch experiences:', err);
    }
  };

  return (
    <div className='search-container'>
      <input 
        type="text"
        value={region}
        onChange={e => setRegion(e.target.value)}
        placeholder="Search by region"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;

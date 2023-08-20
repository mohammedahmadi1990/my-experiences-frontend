import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [region, setRegion] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/experiences?region=${region}`);
      setResults(response.data);
    } catch (err) {
      console.error('Failed to fetch experiences:', err);
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={region}
        onChange={e => setRegion(e.target.value)}
        placeholder="Search by region"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(experience => (
          <li key={experience.id}>
            {experience.name} - {experience.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

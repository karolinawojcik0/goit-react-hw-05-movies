import React, { useState } from 'react';
import axios from 'axios';
import { Search } from '../Search/Search';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = async query => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: 'ab4b5bd9c7ffd7f3aa53eea7788a929e',
            query: query,
          },
        }
      );

      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <>
      <Search onSearch={handleSearchSubmit} />
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};
export default Movies;

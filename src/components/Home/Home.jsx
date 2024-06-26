import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FilmList, HomeTitle, LinkFilms } from './Home.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day',
        {
          params: {
            api_key: 'ab4b5bd9c7ffd7f3aa53eea7788a929e',
          },
        }
      );

      setTrendingMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  return (
    <div>
      <HomeTitle>Trending Movies</HomeTitle>
      <ul>
        {trendingMovies.map(movie => (
          <FilmList key={movie.id}>
            <LinkFilms to={`/movies/${movie.id}`}>{movie.title}</LinkFilms>
          </FilmList>
        ))}
      </ul>
    </div>
  );
};

export default Home;

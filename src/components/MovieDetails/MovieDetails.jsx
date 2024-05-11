import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { useParams, Link, Route, Routes } from 'react-router-dom';

const Cast = React.lazy(() => import('./Cast'));

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: 'ab4b5bd9c7ffd7f3aa53eea7788a929e',
            },
          }
        );

        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>

      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Suspense fallback={<div>Loading cast...</div>}>
        <Routes>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
        </Routes>
      </Suspense>
    </div>
  );
};

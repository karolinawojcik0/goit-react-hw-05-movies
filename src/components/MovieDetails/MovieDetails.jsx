import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { useParams, Route, Routes } from 'react-router-dom';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import {
  LinksContainer,
  MovieDescription,
  MovieDetailsContainer,
  MovieDetailsInfo,
  MoviePoster,
  MovieRelase,
  MovieTitle,
  StyledLink,
} from './MovieDetails.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
    <MovieDetailsContainer>
      <MovieDetailsInfo>
        <MovieTitle>{movieDetails.title} </MovieTitle>
        <MovieDescription>{movieDetails.overview}</MovieDescription>
        <MovieRelase>Release Date: {movieDetails.release_date}</MovieRelase>
        <LinksContainer>
          <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
          <StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink>
        </LinksContainer>
      </MovieDetailsInfo>
      <MoviePoster
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />

      <Suspense fallback={<div>Loading cast...</div>}>
        <Routes>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
        </Routes>
      </Suspense>

      <Suspense fallback={<div>Loading reviews...</div>}>
        <Routes>
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </MovieDetailsContainer>
  );
};

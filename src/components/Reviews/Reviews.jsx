import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ReviewsSheet, ReviewsTitle } from './Reviews.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            params: {
              api_key: 'ab4b5bd9c7ffd7f3aa53eea7788a929e',
            },
          }
        );

        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      <ReviewsTitle>Reviews</ReviewsTitle>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <ReviewsSheet key={review.id}>
              {review.author} - {review.content}
            </ReviewsSheet>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;

import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Header/Header';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId/*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDetails />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId/cast"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Cast />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId/reviews"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Reviews />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

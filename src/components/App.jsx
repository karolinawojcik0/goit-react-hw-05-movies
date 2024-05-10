import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
};

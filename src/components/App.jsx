import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
    </>
  );
};

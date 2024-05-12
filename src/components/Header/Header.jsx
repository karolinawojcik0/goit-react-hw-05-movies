import React from 'react';
import { Link } from 'react-router-dom';
import { Head } from './Header.css';

export const Header = () => {
  return (
    <Head>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Head>
  );
};

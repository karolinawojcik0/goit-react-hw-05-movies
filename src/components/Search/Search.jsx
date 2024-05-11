import React, { useState } from 'react';
import { SearchInput } from './Search.ccs';

export const Search = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

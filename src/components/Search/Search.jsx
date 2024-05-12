import React, { useState } from 'react';
import { SearchButton, SearchForm, SearchInput } from './Search.ccs';

export const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value.trim());
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(query.trim());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={handleChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

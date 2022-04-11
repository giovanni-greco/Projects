import React, { useContext } from 'react';
import Context from '../context/Context';

// Search Component
export default function SearchInput() {
  const { filterByName: { setFilters, name } } = useContext(Context);
  return (
    <input
      data-testid="name-filter"
      placeholder="PLANET NAME"
      value={ name }
      type="text"
      onChange={ ({ target }) => setFilters(target.value) }
    />
  );
}

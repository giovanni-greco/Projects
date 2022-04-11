import React, { useContext } from 'react';
import Context from '../context/Context';

export default function ButtonsFilter() {
  const { filterByNumericValues:
     { filterValues, setFilterParam }, order: { setSort } } = useContext(Context);

  function handleClick(columnButton) {
    setFilterParam((prevState) => (
      [...prevState.filter(({ column }) => column !== columnButton)]));
  }

  return (
    <div>
      { filterValues.map((myFilters) => (
        <div key={ myFilters.column } data-testid="filter">
          {`${myFilters.column} ${myFilters.comparison} ${myFilters.value}`}
          <button
            onClick={ () => handleClick(myFilters.column) }
            type="button"
          >
            x
          </button>
        </div>
      )) }

      <button
        onClick={ () => {
          setFilterParam([]);
          setSort({ column: '', sort: '' });
        } }
        type="button"
        data-testid="button-remove-filters"
      >
        Clear Filters
      </button>

    </div>

  );
}

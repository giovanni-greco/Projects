import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import useSelectors from '../custom_hooks/useSelectors';

export default function Filters() {
  const {
    filterByNumericValues: {
      setFilterParam }, objectFilters, order: {
      setSort } } = useContext(Context);

  const [columArr, valueArr] = useSelectors();
  const [column, setColumnFilter] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, handleFilter] = useState(0);
  const [sort, setSorty] = useState('');
  const [columnSort, handleColSort] = useState('');

  function handleClick(columnSelector, comparisonSelector, valueSelector) {
    setFilterParam((prevState) => (
      [...prevState, {
        column: columnSelector, comparison: comparisonSelector, value: valueSelector }]));
    setColumnFilter(columArr[1]);
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumnFilter(target.value) }
      >
        {columArr.map((columnFilter) => (
          <option
            key={ columnFilter }
            value={ columnFilter }
          >
            { columnFilter }
          </option>
        ))}
      </select>

      <select
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        {valueArr.map((myFilterValue) => (
          <option
            key={ myFilterValue }
            value={ myFilterValue }
          >
            { myFilterValue }
          </option>
        ))}
      </select>

      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          id="value-filter"
          value={ value }
          type="number"
          onChange={ ({ target }) => handleFilter(target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleClick(column, comparison, value) }
      >
        FILTER
      </button>

      <select
        value={ columnSort }
        name="column"
        data-testid="column-sort"
        onChange={ ({ target }) => handleColSort(target.value) }
      >
        {objectFilters.columArr.map((columnFilterSort) => (
          <option
            key={ columnFilterSort }
            value={ columnFilterSort }
          >
            { columnFilterSort }
          </option>
        ))}
      </select>
      <label htmlFor="column-sort-input-asc">
        <input
          id="column-sort-input-asc"
          name="sort"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ ({ target }) => setSorty(target.value) }
        />
        ASC
      </label>
      <label htmlFor="column-sort-input-desc">
        <input
          name="sort"
          value="DESC"
          id="column-sort-input-desc"
          type="radio"
          data-testid="column-sort-input-desc"
          onChange={ ({ target }) => setSorty(target.value) }
        />
        DESC
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => setSort({ column: columnSort, sort }) }
      >
        SORT
      </button>
    </div>
  );
}

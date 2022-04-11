import { useContext } from 'react';
import Context from '../context/Context';

// Hook to get the data from the context API and filter it by name and numeric values;
export default function useFilterValue() {
  const { data, filterByNumericValues: { filterValues } } = useContext(Context);

  const handleObjects = {
    'maior que': (value1, value2) => Number(value1) > Number(value2),
    'menor que': (value1, value2) => Number(value1) < Number(value2),
    'igual a': (value1, value2) => Number(value1) === Number(value2),
  };
  if (filterValues.length) {
    return data.filter((planet) => (
      filterValues.every((filter) => (
        handleObjects[filter.comparison](planet[filter.column], filter.value)))));
  }
  return data;
}

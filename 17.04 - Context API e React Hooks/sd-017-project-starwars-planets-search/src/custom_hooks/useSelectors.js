import { useContext } from 'react';
import Context from '../context/Context';

export default function useSelectors() {
  const {
    filterByNumericValues: {
      filterValues }, objectFilters: { columArr, valueArr } } = useContext(Context);

  if (filterValues.length === 0) return [columArr, valueArr];

  return [[...columArr.filter((myColumn) => (
    filterValues.every(({ column }) => myColumn !== column)))], valueArr];
}

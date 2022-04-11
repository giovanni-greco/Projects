import { useContext } from 'react';
import Context from '../context/Context';

// Hook to get the data from the context API and sort it;
export default function useSorted(filterArr) {
  const { order: { order } } = useContext(Context);

  if (order.column) {
    const unknow = filterArr.filter((planet) => planet[order.column] === 'unknown');
    const knowPlanets = filterArr.filter(
      (planet) => planet[order.column] !== 'unknown',
    );
    const handleObject = {
      DESC: (column) => knowPlanets.sort(
        (planet1, planet2) => planet2[column] - planet1[column],
      ),

      ASC: (column) => knowPlanets.sort(
        (planet1, planet2) => planet1[column] - planet2[column],
      ),

    };
    return [...handleObject[order.sort](order.column), ...unknow];
  }
  return filterArr;
}

import { useContext } from 'react';
import Context from '../context/Context';

export default function useFilters(data) {
  const { filterByName } = useContext(Context);
  return data.filter(({ name }) => (name.toLowerCase()
    .includes(filterByName.name.toLowerCase())));
}

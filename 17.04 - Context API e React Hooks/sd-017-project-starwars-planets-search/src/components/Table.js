import React from 'react';
import useFilter from '../custom_hooks/nameFilter';
import useFiltersValue from '../custom_hooks/useFiltersValues';
import useSorted from '../custom_hooks/useSorted';

// Component to render the table with data from the Star Wars Planets API;
export default function Table() {
  const data = useFiltersValue();
  const filterArr = useFilter(data);
  const planetArray = useSorted(filterArr);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="1">Name</th>
          <th colSpan="1">Rotation Period</th>
          <th colSpan="1">Orbital Period</th>
          <th colSpan="1">Diameter</th>
          <th colSpan="1">Climate</th>
          <th colSpan="1">Gravity</th>
          <th colSpan="1">Terrain</th>
          <th colSpan="1">Surface Water</th>
          <th colSpan="1">Population</th>
          <th colSpan="1">Films</th>
          <th colSpan="1">Created</th>
          <th colSpan="1">Edited</th>
          <th colSpan="1">URL</th>
        </tr>
      </thead>

      <tbody>
        {planetArray.map((planet) => (
          <tr key={ planet.name }>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

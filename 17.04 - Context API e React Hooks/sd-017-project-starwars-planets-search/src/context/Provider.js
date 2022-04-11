import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import getPlanets from '../services/getplanetsAPI';

// state provider for the Context API
function Provider({ children }) {
  const [data, setPlanetData] = useState([]);
  const [filterName, setFilters] = useState('');
  const [filterValues, setFilterParam] = useState([]);
  const [order, setSort] = useState({
    sort: '',
    column: '',
  });
  const [showOrder, setShowOrder] = useState(false);

  // get planets data from API and set it to state
  useEffect(() => {
    getPlanets().then((results) => {
      results.forEach((planet) => delete planet.residents);
      results.sort((fP, secondPlanet) => fP.name.localeCompare(secondPlanet.name));
      setPlanetData(results);
    });
  }, []);

  const objectFilters = {
    columArr: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],

    valueArr: [
      'maior que',
      'menor que',
      'igual a',
    ],
  };

  const context = {
    data,
    objectFilters,
    filterByName: {
      setFilters,
      name: filterName,
    },
    filterByNumericValues: {
      setFilterParam,
      filterValues,
    },
    order: {
      order,
      setSort,
      showOrder,
      setShowOrder,
    },
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Provider;

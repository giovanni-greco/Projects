import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {Planets.map((planet) => (
        <PlanetCard
          key={ uuidv4() }
          planetName={ planet.name }
          planetImage={ planet.image }
        />
      ))}
    </div>
  );
}

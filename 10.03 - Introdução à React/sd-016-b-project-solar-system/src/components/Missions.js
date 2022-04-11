import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Title from './Title';
import data from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {data.map((mission) => (
          <MissionCard
            key={ uuidv4() }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
        ))}
      </div>);
  }
}

export default Missions;

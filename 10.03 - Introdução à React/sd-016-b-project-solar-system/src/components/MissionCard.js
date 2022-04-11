import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MissionCard extends Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    const { key } = this.props;

    return (
      <div key={ key } data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>);
  }
}

MissionCard.propTypes = {
  country: PropTypes.string,
  destination: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
}.isRequired;

export default MissionCard;

import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Deck extends Component {
  render() {
    const { myDeck, removeCard } = this.props;
    return (
      <div>
        { myDeck.map((savedCard) => (
          <p key="1">
            { savedCard.cardName }
            { savedCard.cardImage }
            { savedCard.cardDescription }
            { savedCard.cardAttr1 }
            { savedCard.cardAttr2 }
            { savedCard.cardAttr3 }
            <button
              type="submit"
              onClick={ removeCard }
              data-testid="delete-button"
            >
              Remover
            </button>
          </p>
        )) }
      </div>
    );
  }
}

Deck.propTypes = {
  myDeck: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const {
      comentario,
      nota,
      avaliacoes,
      email,
      handleNota,
      handleButton,
      handleChange,
      emailInput,
    } = this.props;

    return (
      <div className="feedback">
        <textarea
          data-testid="product-detail-evaluation"
          value={ comentario }
          onChange={ handleChange }
          name="comentario"
          className="feedback-comment"
        />
        <input
          type="email"
          placeholder="Email"
          name="emailInput"
          data-testid="product-detail-email"
          value={ emailInput }
          onChange={ handleChange }
          className="feedback-email"
        />
        <select
          name="nota"
          value={ nota }
          onChange={ handleNota }
          className="feedback-rate"
        >
          <option data-testid="1-rating" value="1">1</option>
          <option data-testid="2-rating" value="2">2</option>
          <option data-testid="3-rating" value="3">3</option>
          <option data-testid="4-rating" value="4">4</option>
          <option data-testid="5-rating" value="5">5</option>
        </select>

        <button
          type="submit"
          data-testid="submit-review-btn"
          onClick={ handleButton }
          className="feedback-submit-button"
        >
          Avaliar
        </button>

        <h3 className="feedbacks">Avaliacoes</h3>

        {
          avaliacoes && (
            <>
              <p className="previous-feedback-comment">{ avaliacoes }</p>
              <p className="previous-feedback-email">
                { email }
              </p>
            </>
          )
        }
      </div>);
  }
}

Rating.propTypes = {
  avaliacaoNota: PropTypes.any,
  avaliacoes: PropTypes.any,
  comentario: PropTypes.any,
  handleButton: PropTypes.any,
  handleChange: PropTypes.any,
  handleNota: PropTypes.any,
  nota: PropTypes.any,
}.isRequired;

export default Rating;

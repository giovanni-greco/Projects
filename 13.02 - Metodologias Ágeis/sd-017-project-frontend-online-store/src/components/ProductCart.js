import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  render() {
    const {
      productImgUrl,
      productName,
      productPrice,
      productId,
    } = this.props;

    return (
      <div data-testid="product" className="cart-product">
        <span
          data-testid="shopping-cart-product-name"
          className="cart-product-name"
        >
          { productName }
        </span>
        <img src={ productImgUrl } alt={ productName } />
        <span>{ productPrice }</span>
        <button
          type="button"
          className="cart-product-details-button"
        >
          <Link
            to={ `/product/${productId}` }
            id={ productId }
            data-testid="product-detail-link"
          >
            Detalhes
          </Link>
        </button>
        <span data-testid="shopping-cart-product-quantity">Quantidade 1</span>
      </div>
    );
  }
}

Product.propTypes = {
  productImgUrl: propTypes.string,
  productName: propTypes.string,
  productPrice: propTypes.string,
}.isRequired;
